<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransactionCode extends Model
{
    use HasFactory;
    protected $fillable = [
        'transaction_id',
        'user_id',
        'codes',
        'current_code_index',
        'progress'
    ];

    protected $casts = [
        'codes' => 'array',
    ];
}
