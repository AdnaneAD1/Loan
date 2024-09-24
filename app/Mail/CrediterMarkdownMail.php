<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class CrediterMarkdownMail extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $montant;
    public $solde;
    /**
     * Create a new message instance.
     */
    public function __construct($name, $montant, $solde)
    {
        $this->name = $name;
        $this->montant = $montant;
        $this->solde = $solde;
    }

    public function build()
    {
        return $this->from('loan@gmail.com', 'loan')
                    ->subject("Compte créditer")
                    ->markdown('emails.markdowncrediter')
                    ->with([
                        'name' => $this->name,
                        'montant' => $this->montant,
                        'solde' => $this->solde,
                    ]);
    }
}
