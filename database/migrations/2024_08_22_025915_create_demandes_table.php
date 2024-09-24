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
        Schema::create('demandes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('client_id')->constrained('clients')->onDelete('cascade');
            $table->string('projet');
            $table->text('description');
            $table->decimal('montant_voulu', 10, 2);
            $table->integer('duree_remboursement');
            $table->decimal('payement_months', 10, 2);
            $table->string('statut')->default('pending');
            $table->decimal('montant_take', 10, 2)->default(0);
            $table->decimal('montant_payer', 10, 2)->default(0);
            $table->decimal('montant_restant', 10, 2)->default(0);
            $table->string('credite', 11)->default('no');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('demandes');
    }
};
