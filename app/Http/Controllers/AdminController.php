<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Admin;
use App\Models\Client;
use App\Models\Demande;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Models\Demandepublic;
use App\Mail\CrediterMarkdownMail;
use Illuminate\Support\Facades\DB;
use App\Mail\LoanrejectMarkdownMail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Mail\LoanapprovedMarkdownMail;
use App\Mail\CompteactiverMarkdownMail;
use Illuminate\Support\Facades\Session;

class AdminController extends Controller
{
    protected $twilio;

    public function __construct(TwilioController $twilio)
    {
        // Injecter TwilioController dans ClientController
        $this->twilio = $twilio;
    }

    public function update_dette()
    {
        if (!Auth::check()) {
            return response()->json(['error' => 'Non autorisé.'], 401);
        }

        $clients = DB::table('clients')
            ->leftJoin('demandes', 'clients.id', '=', 'demandes.client_id')
            ->select('clients.*', 'demandes.id as demande_id', 'demandes.montant_restant')
            ->where('demandes.statut', '=', 'valide')
            ->get();

        return response()->json($clients);
    }

    public function getMontantTotal()
    {
        $montantTotal = Demande::sum('montant_voulu');
        return response()->json(['montant_total' => $montantTotal]);
    }

    public function update_montant(Request $request, $id_demande)
    {
        $request->validate([
            'montant_take' => [
                'required',
                'numeric',
                function ($attribute, $value, $fail) {
                    if ($value < 0) {
                        $fail('Le montant doit être positif.');
                    }
                }
            ],
        ]);

        try {
            $demande = Demande::findOrFail($id_demande);

            if ($demande->montant_restant == 0) {
                return response()->json(['error' => 'Le montant restant est déjà à 0 pour ce client.'], 400);
            }

            if ($request->input('montant_take') > $demande->montant_restant) {
                return response()->json(['error' => 'Le montant que vous souhaitez insérer est supérieur au montant restant à payer.'], 400);
            }

            $ancienMontant = $demande->montant_take;
            $montantVoulu = $demande->montant_restant;
            $nouveauMontantTake = $ancienMontant + $request->input('montant_take');
            $nouveauMontantRestant = $montantVoulu - $nouveauMontantTake;

            $demande->update([
                'montant_take' => $nouveauMontantTake,
                'montant_restant' => $nouveauMontantRestant,
            ]);

            if ($nouveauMontantRestant == 0) {
                $demande->update(['statut' => 'paid']);
            }

            return response()->json(['success' => 'Montant mis à jour avec succès.']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Erreur lors de la mise à jour du montant.'], 500);
        }
    }

    public function welcome()
    {
        if (!Auth::check()) {
            return response()->json(['error' => 'Non autorisé.'], 401);
        }

        try {
            // Récupération des données depuis la table 'demandes' avec les clients associés
            $demandes = Demande::with(['client:id,name,prenom,email', 'client.user:id,email'])
                ->select('demandes.*', 'clients.name', 'clients.prenom')
                ->join('clients', 'demandes.client_id', '=', 'clients.id')
                ->get();

            // Calculs pour les 'demandes'
            $montantTotalDemandes = $demandes->sum('montant_voulu');
            $demandeCount = $demandes->count();
            $demandeApprouveCount = $demandes->whereIn('statut', ['valide', 'paid'])->count();

            // Récupération des données depuis la table 'demandepublics'
            $demandesPublics = Demandepublic::all();

            // Calculs pour les 'demandepublics'
            $montantTotalDemandesPublics = $demandesPublics->sum('montant_voulu');
            $demandePublicCount = $demandesPublics->count();
            $demandePublicApprouveCount = $demandesPublics->whereIn('statut', ['valide', 'paid'])->count();

            // Totaux combinés
            $montantTotal = $montantTotalDemandes + $montantTotalDemandesPublics;
            $totalDemandesCount = $demandeCount + $demandePublicCount;
            $totalApprouveCount = $demandeApprouveCount + $demandePublicApprouveCount;

            // Réponse JSON avec les deux types de demandes
            return response()->json([
                'demandes' => $demandes,
                'demandesPublics' => $demandesPublics,
                'totalDemandesCount' => $totalDemandesCount,
                'totalApprouveCount' => $totalApprouveCount,
                'montantTotal' => $montantTotal,
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Une erreur est survenue lors de la récupération des demandes.'], 500);
        }
    }

    public function listeClients()
    {
        if (!Auth::check()) {
            return response()->json(['error' => 'Non autorisé.'], 401);
        }

        $clients = DB::table('clients')
            ->leftJoin('demandes', 'clients.id', '=', 'demandes.client_id')
            ->select('clients.*', 'demandes.id as demande_id')
            ->where('demandes.statut', '=', 'pending')
            ->get();

        return response()->json($clients);
    }

    public function profileview()
    {
        if (!Auth::check()) {
            return response()->json(['error' => 'Non autorisé.'], 401);
        }

        $admin = Auth::user();
        return response()->json($admin);
    }

    public function approuver($id_demande)
    {
        if (!Auth::check()) {
            return response()->json(['error' => 'Non autorisé.'], 401);
        }

        $loan = Demande::findOrFail($id_demande);
        $loan->update(['statut' => 'valide']);

        // $montantMensuel = $loan->payement_months;
        // $dureeAnnees = $loan->duree_remboursement;
        // $montant_restant = $loan->montant_restant;
        // $montantDemande = $loan->montant_voulu;

        $cl = Client::find($loan->client_id);
        $mailableac = new LoanapprovedMarkdownMail($cl->name.''.$cl->prenom);
        Mail::to($cl->email)->send($mailableac);

        $to = '+'.$cl->tel;
        $message = 'Votre demande a été approuvé !';
        $this->twilio->sendSms($to, $message);

        return response()->json(['success' => 'La demande a été validée.']);
    }

    public function reject($id_demande)
    {
        if (!Auth::check()) {
            return response()->json(['error' => 'Non autorisé.'], 401);
        }

        $loan = Demande::findOrFail($id_demande);
        $statut = $loan->statut;

        if ($statut == 'valide') {
            return response()->json(['error' => 'Vous ne pouvez pas rejeter cette demande car elle a déjà été validée.'], 400);
        } else {
            $loan->update(['statut' => 'rejeter']);

            $clrecup = Client::find($loan->client_id);
            $mailabler = new LoanrejectMarkdownMail($clrecup->name.''.$clrecup->prenom);
            Mail::to($clrecup->email)->send($mailabler);

            $to = '+'.$clrecup->tel;
            $message = 'Votre demande a été rejeté !';
            $this->twilio->sendSms($to, $message);

            return response()->json(['error' => 'La demande a été rejetée.']);
        }
    }

    public function updateProfile(Request $request)
    {
        // Vérifier si l'utilisateur est authentifié
        if (!Auth::check()) {
            return response()->json(['error' => 'Non autorisé.'], 401);
        }

        // Récupérer l'utilisateur actuellement authentifié
        $user_id = Auth::id();
        $user = User::find($user_id);

        // Valider les données envoyées dans la requête
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => 'nullable|string|min:8|confirmed',
        ]);

        // Mettre à jour les informations de l'utilisateur dans la table `users`
        if ($user) {
            $user->name = $validatedData['name'];
            $user->email = $validatedData['email'];

            // Vérifier si un mot de passe a été fourni et le mettre à jour si nécessaire
            if ($request->filled('password')) {
                $user->password = Hash::make($validatedData['password']);
            }

            // Sauvegarder les modifications dans la table `users`
            $user->save();

            // Mettre à jour la table `admins` si l'utilisateur est un admin
            if ($user->role === 'Admin') {
                $admin = Admin::where('user_id', $user->id)->first();
                if ($admin) {
                    $admin->name = $validatedData['name'];
                    $admin->email = $validatedData['email'];

                    // Mettre à jour le mot de passe dans la table `admins` si nécessaire
                    if ($request->filled('password')) {
                        $admin->password = Hash::make($validatedData['password']);
                    }

                    // Sauvegarder les modifications dans la table `admins`
                    $admin->save();
                }
            }

            // Retourner une réponse indiquant que la mise à jour a été effectuée avec succès
            return response()->json(['success' => 'Profil mis à jour avec succès.']);
        } else {
            // Si l'utilisateur n'est pas trouvé, retourner une erreur 404
            return response()->json(['error' => 'Utilisateur non trouvé.'], 404);
        }
    }

    public function clientvalide()
    {
        if (!Auth::check()) {
            return response()->json(['error' => 'Non autorisé.'], 401);
        }
        $clients = DB::table('clients')
            ->select('clients.*')
            ->where('clients.valide', '=', true)
            ->get();

        return response()->json($clients);
    }

    public function clientinvalide()
    {
        if (!Auth::check()) {
            return response()->json(['error' => 'Non autorisé.'], 401);
        }
        $clients = DB::table('clients')
            ->select('clients.*')
            ->where('clients.valide', '=', false)
            ->get();

        return response()->json($clients);
    }

    public function activer($id_client)
    {
        if (!Auth::check()) {
            return response()->json(['error' => 'Non autorisé.'], 401);
        }
        $user = Client::find($id_client);

        if ($user) {
            $user->valide = true;
            $user->save();
            $mailablea = new CompteactiverMarkdownMail($user->name.''.$user->prenom);
            Mail::to($user->email)->send($mailablea);

            $to = '+'.$user->tel;
            $message = 'Votre compte a été activé !';
            $this->twilio->sendSms($to, $message);

            return response()->json([
                'message' => 'User validated successfully.',
            ], 200);
        }

        return response()->json([
            'message' => 'User not found.',
        ], 404);
    }

    public function crediter(Request $request, $id_client)
    {
        $request->validate([
            'montant_take' => [
                'required',
                'numeric',
                function ($attribute, $value, $fail) {
                    if ($value < 0) {
                        $fail('Le montant doit être positif.');
                    }
                }
            ],
        ]);

        try {
            $client = Client::find($id_client);
            $transaction = new Transaction([
                'user_id' => $id_client,
                'amount' => $request->montant_take,
                'type' => 'deposit',
                'transaction_date' => now(),
                'statut' => 'approved', // Mettre 'approved' pour le dépôt
                'code' => json_encode([]), // Valeur par défaut vide pour code JSON
                'beneficiary_name' => $client->name, // Valeurs nulles pour les champs non nécessaires
                'iban' => 'none',
                'bic' => 'none',
                'bank_address' => 'none',
                'currency' => 'EUR', // Valeur par défaut pour la devise
                'reference' => null,
                'execution_date' => now(), // La date d'exécution, par exemple maintenant
                'fees' => 'Expéditeur', // Valeur par défaut pour les frais
            ]);
            $transaction->save();
            $soldeup = $client->solde + $request->montant_take;

            $client->update([
                'solde' => $soldeup,
            ]);
            $name = $client->name.''.$client->prenom;
            $mailabec = new CrediterMarkdownMail($name, $request->montant_take, $client->solde);
            Mail::to($client->email)->send($mailabec);

            $to = '+'.$client->tel;
            $message = 'Votre compte a été céditer !';
            $this->twilio->sendSms($to, $message);

            return response()->json(['success' => 'Compte bien crédité.']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Erreur lors de la mise à jour du montant.'], 500);
        }
    }

    public function getClientDetails($id)
    {
        $client = Client::find($id);

        if (!$client) {
            return response()->json(['error' => 'Client not found'], 404);
        }

        // Récupérer la dernière transaction de type 'withdrawal' pour ce client
        $lastWithdrawal = Transaction::where('user_id', $id)
            ->where('type', 'withdrawal')
            ->orderBy('transaction_date', 'desc')
            ->first();

        // Inclure les informations de la transaction dans la réponse
        return response()->json([
            'client' => $client,
            'lastWithdrawal' => $lastWithdrawal
        ]);
    }
}
