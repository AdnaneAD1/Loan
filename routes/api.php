<?php

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\DemandeController;
use Twilio\Http\Client;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// CLient
Route::get('/transactions', [ClientController::class, 'getClientTransactions']);
Route::get('/client-info', [ClientController::class, 'getClientInfo']);
Route::get('/user-balance', [ClientController::class, 'getbalance']);
Route::get('/client-profile', [ClientController::class, 'getClientProfile']);
Route::get('/check-activation-status', [ClientController::class, 'checkActivationStatus']);
Route::get('/get-latest-transaction', [ClientController::class, 'getLastTransactionStatus']);
Route::post('/sendmail', [ClientController::class, 'contact']);
Route::post('/client-login', [ClientController::class, 'store']);
Route::post('/client-register', [ClientController::class, 'createclient']);
Route::post('/client-logout', [ClientController::class, 'destroy']);
Route::post('/verify-codes', [ClientController::class, 'verifyCode']);
Route::post('/retrait', [ClientController::class, 'retrait']);
Route::post('/annuler-transaction/{id}', [ClientController::class, 'annulerTransaction']);
Route::post('/update-client-profile', [ClientController::class, 'updateClientProfile']);
Route::post('/loan-request', [DemandeController::class, 'create']);
Route::post('/submit-loan', [DemandeController::class, 'createpublic']);

// Admin
Route::middleware('auth:sanctum')->get('/dashboard-data', [AdminController::class, 'welcome']);
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/clientsdettes', [AdminController::class, 'update_dette']);
    Route::post('/clients/{id_demande}/update', [AdminController::class, 'update_montant']);
});
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/clients', [AdminController::class, 'listeClients']);
    Route::post('/demandes/{id}/approuver', [AdminController::class, 'approuver']);
    Route::post('/demandes/{id}/reject', [AdminController::class, 'reject']);
});
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', [AdminController::class, 'profileview']);
    Route::post('/update', [AdminController::class, 'updateProfile']);
});
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/clients/valides', [AdminController::class, 'clientvalide']);
    Route::get('/clients/invalides', [AdminController::class, 'clientinvalide']);
    Route::get('/clients/{id}', [AdminController::class, 'getClientDetails']);
    Route::post('/clients/{id}/activer', [AdminController::class, 'activer']);
});
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/clients/{id}/crediter', [AdminController::class, 'crediter']);
});

