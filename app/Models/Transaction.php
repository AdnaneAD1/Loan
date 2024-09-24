<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'amount',
        'statut',
        'type',
        'transaction_date',
        'code',
        'beneficiary_name',
        'iban',
        'bic',
        'bank_address',
        'currency',
        'reference',
        'execution_date',
        'fees'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function getcodeAttribute($value)
    {
        return json_decode($value, true);
    }
}
