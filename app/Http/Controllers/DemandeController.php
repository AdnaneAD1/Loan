<?php

namespace App\Http\Controllers;

use App\Mail\LoanadminrequestMarkdownMail;
use App\Mail\LoanclientreceiptMarkdownMail;
use App\Models\Client;
use App\Models\Demande;
use App\Models\Demandepublic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;

class DemandeController extends Controller
{
    protected $twilio;

    public function __construct(TwilioController $twilio)
    {
        // Injecter TwilioController dans ClientController
        $this->twilio = $twilio;
    }
    public function create(Request $request)
    {
        $userId = Auth::id();

        $demandeEnAttente = Demande::where('client_id', $userId)->where('statut', 'pending')->exists();
        $demandeEligble = Demande::where('client_id', $userId)->where('statut', 'valide')->first();

        if ($demandeEnAttente) {
            return response()->json(['error' => 'Vous avez déjà une demande en attente.'], 400);
        }

        if ($demandeEligble && round($demandeEligble->montant_restant) !== 0.0) {
            return response()->json(['error' => 'Vous n\'avez pas remboursé entièrement votre dernière demande.'], 400);
        }

        $request->validate([
            'projet' => 'required|string',
            'description' => 'required|string',
            'duree' => 'required|numeric|max:25',
            'montant_voulue' => 'required|numeric|',
        ]);

        $montantDemande = $request->input('montant_voulue');
        $dureeAnnees = $request->input('duree');

        $tauxInteretAnnuel = 0.04;
        $tauxInteretMensuel = $tauxInteretAnnuel / 12;
        $nombrePaiements = $dureeAnnees * 12;
        $montantMensuel = round(($montantDemande * $tauxInteretMensuel) / (1 - pow(1 + $tauxInteretMensuel, -$nombrePaiements)));

        DB::statement('SET FOREIGN_KEY_CHECKS=0');

        $demande = Demande::create([
            'projet' => $request->input('projet'),
            'description' => $request->input('description'),
            'montant_voulu' => $montantDemande,
            'duree_remboursement' => $dureeAnnees,
            'payement_months' => $montantMensuel,
            'client_id' => $userId,
            'montant_take' => 0,
            'montant_payer' => 0,
            'montant_restant' => round($montantMensuel * 12 * $dureeAnnees),
        ]);

        // Client::where('user_id', $userId)->update(['rib' => $request->input('rib')]);

        try {
            $demande->save();
            // Code d'envoi de l'email
            $client = Client::findOrFail($userId);
            $mailabled = new LoanadminrequestMarkdownMail($client->name.''.$client->prenom, $client->email, $request->montant_voulue, $request->projet);
            Mail::to('loan@gmail.com')->send($mailabled);

            $mailablerp = new LoanclientreceiptMarkdownMail($client->name.''.$client->prenom);
            Mail::to($client->email)->send($mailablerp);

            $to = '+'.$client->tel;
            $message = 'Votre demande a été bien reçue. Nous allons évaluer votre demande et vous revenir !';
            $this->twilio->sendSms($to, $message);

            return response()->json(['success' => 'Votre demande de prêt a été enregistrée avec succès.'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Erreur lors de l\'enregistrement de la demande de prêt.'], 500);
        }
    }

    public function createpublic(Request $request)
    {
        // Validation des données du formulaire
        $request->validate([
            'fullName' => 'required|string',
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . Demandepublic::class],
            'projet' => 'required|string',
            'description' => 'required|string',
            'duree' => 'required|numeric|max:25',
            'montant_voulue' => 'required|numeric|',
            'phoneNumberFull' => 'required|string|max:15',
        ]);

        // Récupération du montant demandé
        $montantDemande = $request->input('montant_voulue');

        $dureeAnnees = $request->input('duree');

        // Conversion du taux d'intérêt annuel en taux d'intérêt mensuel
        $tauxInteretAnnuel = 0.04;
        $tauxInteretMensuel = $tauxInteretAnnuel / 12;

        // Nombre total de paiements
        $nombrePaiements = $dureeAnnees * 12;

        // Calcul du montant mensuel à rembourser
        $montantMensuel = ($montantDemande * $tauxInteretMensuel) / (1 - pow(1 + $tauxInteretMensuel, -$nombrePaiements));
        $montantMensuel = round($montantMensuel);

        // Désactiver les contraintes de clé étrangère
        DB::statement('SET FOREIGN_KEY_CHECKS=0');

        // Création de la demande
        $demande = new Demandepublic([
            'projet' => $request->input('projet'),
            'description' => $request->input('description'),
            'montant_voulu' => $montantDemande,
            'duree_remboursement' => $dureeAnnees,
            'payement_months' => $montantMensuel,
            'email' => $request->email,
            'montant_take' => 0, // Initialiser à 0
            'montant_payer' => 0, // Initialiser à 0
            'montant_restant' => round($montantMensuel * 12 * $dureeAnnees), // Initialiser à 0
        ]);

        // Enregistrement de la demande dans la base de données
        try {
            $demande->save();

            $mailabled = new LoanadminrequestMarkdownMail($request->fullName, $request->email, $request->montant_voulu, $request->projet);
            Mail::to('loan@gmail.com')->send($mailabled);

            $mailablerp = new LoanclientreceiptMarkdownMail($request->fullName);
            Mail::to($request->email)->send($mailablerp);
            $to = '+'.$request->phoneNumberFull;
            $message = 'Votre demande a été bien reçue. Vueiller contacter l\'administrateur !';
            $this->twilio->sendSms($to, $message);
            return response()->json(['success' => 'Votre demande de prêt a été enregistrée avec succès.'], 200);
        } catch (\Exception $e) {
            // Erreur d'enregistrement
            return response()->json(['error' => 'Erreur lors de l\'enregistrement de la demande de prêt.'], 500);
        }
    }

    // public function seeDemande()
    // {
    //     if (!Auth::user()) {
    //         Auth::logout();
    //         return response()->json(['error' => 'Utilisateur non authentifié.'], 401);
    //     }

    //     // Récupérer l'ID de l'utilisateur connecté
    //     $userId = Auth::id();

    //     // Récupérer les demandes associées à l'utilisateur
    //     $demandes = Demande::where('client_id', $userId)->get();

    //     // Retourner les demandes en format JSON
    //     return response()->json(['demandes' => $demandes], 200);
    // }

    // public function reject()
    // {
    //     if (!Auth::user()) {
    //         Auth::logout();
    //         return response()->json(['error' => 'Utilisateur non authentifié.'], 401);
    //     }

    //     $userId = Session::get('id_utilisateur');
    //     $demande = Demande::where('client_id', $userId)->orderBy('created_at', 'desc')->first();
    //     $statut = $demande->statut;
    //     if ($statut == 'valide' || $statut == 'paid') {
    //         return response()->json(['error' => 'Cette demande ne peut pas être supprimée car elle a déjà été validée.'], 400);
    //     } else {
    //         // $demande->delete();
    //         $demande->update(['statut' => 'canceled']);
    //         return response()->json(['success' => 'La demande a été supprimée avec succès.'], 200);
    //     }
    // }

    // public function crediteAccount()
    // {
    //     if (!Auth::user()) {
    //         Auth::logout();
    //         return response()->json(['error' => 'Utilisateur non authentifié.'], 401);
    //     }

    //     $userId = Session::get('id_utilisateur');

    //     $demande = Demande::where('client_id', $userId)->first();
    //     $credite = $demande->credite;
    //     if ($credite === 1) {
    //         return response()->json(['credite_statut' => 'Votre compte bancaire a déjà été crédité.'], 200);
    //     } elseif ($credite === 0) {
    //         return response()->json(['credite_statut' => ''], 200);
    //     }
    // }
}
