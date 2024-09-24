<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Demandepublic extends Model
{
    use HasFactory;
    protected $fillable = ['projet', 'description', 'montant_voulu', 'montant_restant', 'duree_remboursement', 'payement_months', 'statut', 'email'];
}
