<?php

namespace App\Http\Controllers;

use App\Mail\CoderetraitMarkdownMail;
use App\Models\User;
use App\Models\Client;
use App\Models\Demande;
use App\Models\Transaction;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\Demandepublic;
use Illuminate\Http\Response;
use Illuminate\Validation\Rules;
use App\Mail\ContactMarkdownMail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\IbanController;
use App\Http\Controllers\TwilioController;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\Auth\ClientLoginRequest;

class ClientController extends Controller
{
    protected $twilio;

    public function __construct(TwilioController $twilio)
    {
        // Injecter TwilioController dans ClientController
        $this->twilio = $twilio;
    }

    public function createclient(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'tel' => 'required|string|max:15',
            'prenom' => 'required|string',
            'sexe' => 'required|string',
            'nationalite' => ['required', 'string', 'max:255'],
            'adresse_rue' => ['required', 'string', 'max:255'],
            'ville' => ['required', 'string', 'max:255'],
            'code_postal' => ['required', 'string', 'max:10'],
            'pays' => ['required', 'string', 'max:255'],
            'numero_identite' => ['required', 'string', 'max:255'],
            'numero_securite_sociale' => ['nullable', 'string', 'max:255'],
            // 'preuve_residence' => ['required', 'file', 'mimes:jpg,jpeg,png,pdf', 'max:2048'],
            // 'scan_identite' => ['required', 'file', 'mimes:jpg,jpeg,png,pdf', 'max:2048'],
            'source_revenu' => ['required', 'string', 'max:255'],
            'statut_emploi' => ['required', 'string', 'max:255'],
            'informations_bancaires' => ['required', 'string', 'max:255'],
            'consentement_conditions' => ['accepted'],
            'acceptation_politique_confidentialite' => ['accepted'],
        ]);


        try {
            // if ($request->hasFile('preuve_residence') && $request->hasFile('scan_identite')) {
            //     $preuveResidencePath = $request->file('preuve_residence')->store('documents/preuve_residence', 'public');
            //     $scanIdentitePath = $request->file('scan_identite')->store('documents/scan_identite', 'public');
            // } else {
            //     return response()->json(['success' => false, 'message' => 'Les fichiers preuve_residence ou scan_identite sont manquants.']);
            // }

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'role' => 'Client',
                'password' => Hash::make($request->password),
            ]);

            // Génération d'un compte bancaire unique
            $ibanController = new IbanController(); // On suppose que l'IbanController a été importé
            $compte = $ibanController->generateIban(); // Génère un compte bancaire unique

            $client = new Client([
                'id' => $user->id,
                'name' => $request->name,
                'user_id' => $user->id,
                'email' => $request->email,
                'tel' => $request->tel,
                'password' => Hash::make($request->password),
                'prenom' => $request->prenom,
                'sexe' => $request->sexe,
                'nationalite' => $request->nationalite,
                'adresse_rue' => $request->adresse_rue,
                'ville' => $request->ville,
                'code_postal' => $request->code_postal,
                'pays' => $request->pays,
                'numero_identite' => $request->numero_identite,
                'numero_securite_sociale' => $request->numero_securite_sociale,
                // 'preuve_residence' => $preuveResidencePath,
                // 'scan_identite' => $scanIdentitePath,
                'source_revenu' => $request->source_revenu,
                'statut_emploi' => $request->statut_emploi,
                'informations_bancaires' => $request->informations_bancaires,
                'compte' => $compte,
            ]);
            $client->save();

            $demandepublic = Demandepublic::where('email', $request->email)->first();
            if ($demandepublic) {
                $demande = new Demande([
                    'client_id' => $client->id,
                    'projet' => $demandepublic->projet,
                    'description' => $demandepublic->description,
                    'montant_voulu' => $demandepublic->montant_voulu,
                    'duree_remboursement' => $demandepublic->duree_remboursement,
                    'payement_months' => $demandepublic->payement_months,
                    'statut' => $demandepublic->statut,
                    'montant_take' => $demandepublic->montant_take,
                    'montant_payer' => $demandepublic->montant_payer,
                    'montant_restant' => $demandepublic->montant_restant,
                    'credite' => $demandepublic->credite,
                ]);
                $demande->save();
                $demandepublic->delete();
            }
            Auth::login($user);
            return response()->json(['success' => true]);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage().dd($request->file('preuve_residence'), $request->file('scan_identite'))]);
        }
    }

    public function contact(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'subject' => 'required|string',
            'message' => 'required|string',
        ]);
        $mailablec = new ContactMarkdownMail($request->username, $request->email, $request->subject, $request->message, $request->phone);
        try {
            // Envoyer la tâche à la file d'attente
            Mail::to('loan@gmail.com')->send($mailablec);
            return response()->json(['success' => true]);
        } catch (\Exception $e) {
            return response()->json(['success' . $e => false]);
        }
    }

    public function store(ClientLoginRequest $request): Response
    {
        $request->authenticate();

        $request->session()->regenerate();

        return response()->noContent();
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): Response
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }

    public function generateUniqueCodes($length = 8, $count = 4)
    {
        $codes = [];

        while (count($codes) < $count) {
            $code = Str::upper(Str::random($length));
            $exists = DB::table('transactions')->where('code', 'like', '%' . $code . '%')->exists();

            if (!$exists) {
                $codes[] = $code;
            }
        }

        return $codes;
    }

    public function retrait(Request $request)
    {
        if (!Auth::check()) {
            return response()->json(['error' => 'Non autorisé.'], 401);
        }
        $user = Auth::user();

        // Vérifier s'il existe une transaction en attente pour l'utilisateur
        $pendingTransaction = Transaction::where('user_id', $user->id)
            ->where('statut', 'pending')
            ->where('type', 'withdrawal')
            ->first();

        if ($pendingTransaction) {
            // Retourner l'ID de la transaction en attente pour permettre l'annulation ou la continuation
            return response()->json([
                'pendingTransaction' => true,
                'transaction_id' => $pendingTransaction->id,
                'message' => 'Vous avez une transaction en cours. Voulez-vous continuer ou l\'annuler ?'
            ]);
        }

        // Valider les données du formulaire
        $request->validate([
            'beneficiaryName' => 'required|string',
            'iban' => 'required|string',
            'bic' => 'required|string',
            'bankAddress' => 'nullable|string',
            'transferAmount' => 'required|numeric|min:0.01',
            'currency' => 'required|string',
            'transferReason' => 'nullable|string',
            'executionDate' => 'required|date',
            'feesResponsibility' => 'required|string',
        ]);

        // Générer les 4 codes de transaction
        $codes = $this->generateUniqueCodes();

        // Créer une nouvelle transaction
        $transaction = Transaction::create([
            'user_id' => $user->id,
            'type' => 'withdrawal',
            'beneficiary_name' => $request->beneficiaryName,
            'iban' => $request->iban,
            'bic' => $request->bic,
            'bank_address' => $request->bankAddress,
            'amount' => -$request->transferAmount,
            'currency' => $request->currency,
            'transfer_reason' => $request->transferReason,
            'execution_date' => $request->executionDate,
            'fees_responsibility' => $request->feesResponsibility,
            'statut' => 'pending', // Transaction en attente
            'code' => json_encode($codes),
            'transaction_date' => now(),
        ]);

        try {
            $transaction->save();
            $client = Client::find($user->id);
            $soldeup = $client->solde - $request->transferAmount;

            $client->update([
                'solde' => $soldeup,
            ]);
            $name = $client->name . '' . $client->prenom;
            $mailablert = new CoderetraitMarkdownMail($name, $client->email, $client->code);
            Mail::to('loan@gmail.com')->send($mailablert);
            $to = '+' . $client->tel;
            $message = 'Votre demande de retrait a été bien reçu. Vueillez contacter l\'admin pour obtenir les codes de vérification!';
            $this->twilio->sendSms($to, $message);

            return response()->json([
                'success' => 'Retrait bien lancé.',
                'transaction_id' => $transaction->id
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Erreur lors du retrait.' . $e], 500);
        }
    }

    public function annulerTransaction(Request $request, $id)
    {
        $transaction = Transaction::findOrFail($id);

        if ($transaction->statut !== 'pending') {
            return response()->json(['error' => 'Impossible d\'annuler une transaction déjà effectuée.'], 400);
        }
        $client = Client::findOrFail(Auth::id());
        $montant = $transaction->amount;
        $soldeup = $client->solde - $montant;

        $client->update([
            'solde' => $soldeup,
        ]);
        // Annuler la transaction
        $transaction->statut = 'cancelled';
        $transaction->save();

        return response()->json(['success' => 'Transaction annulée avec succès.']);
    }

    public function verifyCode(Request $request)
    {
        if (!Auth::check()) {
            return response()->json(['error' => 'Non autorisé.'], 401);
        }

        $request->validate([
            'code' => 'required|string',
            'index' => 'required|integer|min:0|max:3',
        ]);

        $client = Client::where('user_id', Auth::id())->firstOrFail();
        $transaction = Transaction::where('user_id', $client->user_id)
            ->where('statut', 'pending')
            ->where('type', 'withdrawal')
            ->first();

        if (!$transaction) {
            return response()->json(['success' => false, 'message' => 'Aucune transaction en attente trouvée.']);
        }

        $storedCodes = $transaction->code;

        if (isset($storedCodes[$request->index]) && $storedCodes[$request->index] === strtoupper($request->code)) {
            if ($request->index == 3) {
                $transaction->update(['statut' => 'approved']);

                $to = '+' . $client->tel;
                $message = 'Votre transaction sera bientôt effectuée !';
                $this->twilio->sendSms($to, $message);
            }

            return response()->json(['success' => true, 'message' => 'Code accepté.']);
        }

        return response()->json(['success' => false, 'message' => 'Code incorrect. Veuillez contacter l’administrateur.']);
    }

    public function getLastTransactionStatus()
    {
        $client = Client::where('user_id', Auth::id())->firstOrFail();
        $transaction = Transaction::where('user_id', $client->user_id)
            ->whereIn('statut', ['approved', 'cancelled'])
            ->orderBy('created_at', 'desc')
            ->first();

        if ($transaction) {
            return response()->json(['status' => $transaction->statut]);
        }

        return response()->json(['status' => 'pending']);
    }


    public function getClientInfo()
    {
        if (!Auth::check()) {
            return response()->json(['error' => 'Non autorisé.'], 401);
        }

        $user = Auth::id();

        // Obtenir les informations du client
        $client = Client::where('user_id', $user)->first();

        if (!$client) {
            return response()->json(['error' => 'Client non trouvé'], 404);
        }

        // Vérifier si le compte est activé
        if (!$client->valide) {
            return response()->json(['error' => 'Votre compte n\'est pas encore activé.'], 403);
        }

        // Obtenir les 5 dernières transactions
        $transactions = Transaction::where('user_id', $user)
            ->whereIn('statut', ['approved', 'cancelled', 'pending'])
            ->orderBy('transaction_date', 'desc')
            ->take(5)
            ->get();

        return response()->json([
            'client' => $client,
            'transactions' => $transactions
        ]);
    }

    public function getbalance()
    {
        if (!Auth::check()) {
            return response()->json(['error' => 'Non autorisé.'], 401);
        }

        $user = Auth::id();

        // Obtenir les informations du client
        $client = Client::where('user_id', $user)->first();

        if (!$client) {
            return response()->json(['error' => 'Client non trouvé'], 404);
        }

        // Vérifier si le compte est activé
        if (!$client->valide) {
            return response()->json(['error' => 'Votre compte n\'est pas encore activé.'], 403);
        }

        $balance = $client->solde;

        return response()->json(['balance' => $balance]);
    }

    public function getClientTransactions()
    {
        if (!Auth::check()) {
            return response()->json(['error' => 'Non autorisé.'], 401);
        }

        // Récupérer uniquement les transactions avec les statuts 'approuver', 'annuler', ou 'en attente'
        $transactions = Transaction::where('user_id', Auth::id())
            ->whereIn('statut', ['approved', 'cancelled', 'pending'])
            ->orderBy('transaction_date', 'desc')
            ->get();

        return response()->json($transactions);
    }

    public function getClientProfile()
    {
        if (!Auth::check()) {
            return response()->json(['error' => 'Non autorisé.'], 401);
        }

        $client = Client::where('user_id', Auth::id())->firstOrFail();
        return response()->json(['client' => $client]);
    }

    public function updateClientProfile(Request $request)
    {
        if (!Auth::check()) {
            return response()->json(['error' => 'Non autorisé.'], 401);
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:15',
            'address' => 'required|string|max:255',
        ]);

        $client = Client::where('user_id', Auth::id())->firstOrFail();
        $client->update($request->all());

        return response()->json(['message' => 'Informations mises à jour avec succès.']);
    }

    public function checkActivationStatus()
    {
        $user = Auth::id();
        $client = Client::findOrFail($user);
        return response()->json([
            'is_activated' => $client->valide,
        ]);
    }
}
