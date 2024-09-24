<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            // Foreign key constraint
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->decimal('amount', 10, 2);
            $table->enum('type', ['deposit', 'withdrawal']);
            $table->timestamp('transaction_date');
            $table->json('code');
            $table->string('statut')->default('pending');
            $table->timestamps();

            // New fields for bank transfer
            $table->string('beneficiary_name'); // Beneficiary name
            $table->string('iban')->nullable(false); // IBAN of beneficiary
            $table->string('bic')->nullable(true); // BIC/SWIFT code
            $table->string('bank_address')->nullable(true); // Bank address
            $table->enum('currency', ['EUR', 'USD', 'GBP'])->default('EUR'); // Currency
            $table->string('reference')->nullable(true); // Transfer reference
            $table->date('execution_date'); // Transfer execution date
            $table->enum('fees', ['Expéditeur', 'Bénéficiaire', 'Partagés'])->default('Expéditeur'); // Who bears the fees
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
