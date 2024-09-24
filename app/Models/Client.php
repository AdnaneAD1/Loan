<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Client extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'id',
        'user_id',
        'name',
        'prenom',
        'email',
        'tel',
        'sexe',
        'nationalite',
        'adresse_rue',
        'ville',
        'code_postal',
        'pays',
        'numero_identite',
        'numero_securite_sociale',
        // 'preuve_residence',
        // 'scan_identite',
        'source_revenu',
        'statut_emploi',
        'informations_bancaires',
        'consentement_conditions',
        'acceptation_politique_confidentialite',
        'Compte',
        'solde',
        'valide',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function demande()
    {
        return $this->hasOne(Demande::class, 'client_id', 'id');
    }
}
