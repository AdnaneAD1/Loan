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
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('name');
            $table->string('prenom');
            $table->string('email');
            $table->string('tel', 20);
            $table->enum('sexe', ['homme', 'femme']);
            $table->string('nationalite');
            $table->string('adresse_rue');
            $table->string('ville');
            $table->string('code_postal');
            $table->string('pays');

            // Informations d'identité
            $table->string('numero_identite')->nullable();
            $table->string('numero_securite_sociale')->nullable();
            // $table->string('preuve_residence')->nullable(); // Path to the file
            // $table->string('scan_identite')->nullable(); // Path to the file

            // Détails financiers
            $table->string('source_revenu')->nullable();
            $table->string('statut_emploi')->nullable();
            $table->string('informations_bancaires')->nullable();
            // $table->decimal('plafond_transaction', 10, 2)->nullable();

            // // Sécurité et authentification
            // $table->string('password');
            // $table->string('question_securite')->nullable();
            // $table->boolean('authentification_deux_facteurs')->default(false);
            // $table->string('facteur_verification')->nullable(); // e-mail ou téléphone

            // Conditions légales
            $table->boolean('consentement_conditions')->default(false);
            $table->boolean('acceptation_politique_confidentialite')->default(false);
            $table->string('Compte');
            $table->decimal('solde', 10, 2)->default(0);
            $table->boolean('valide')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
