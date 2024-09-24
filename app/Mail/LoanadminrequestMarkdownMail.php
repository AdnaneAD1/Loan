<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class LoanadminrequestMarkdownMail extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $email;
    public $montant;
    public $projet;
    /**
     * Create a new message instance.
     */
     public function __construct($name, $email, $montant,  $projet)
    {
        $this->name = $name;
        $this->email = $email;
        $this->montant = $montant;
        $this->projet = $projet;
    }

    public function build()
    {
        return $this->subject('Nouvelle demande de prêt')
                    ->markdown('emails.markdownloanadminrequest')
                    ->with([
                        'name' => $this->name,
                        'email' => $this->email,
                        'montant' => $this->montant,
                        'projet' => $this->projet,
                    ]);
    }
}
