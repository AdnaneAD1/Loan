<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class CompteactiverMarkdownMail extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    /**
     * Create a new message instance.
     */
    public function __construct($name)
    {
        $this->name = $name;
    }

    public function build()
    {
        return $this->from("loan@gmail.com","loan")
                    ->subject("Compte activer")
                    ->markdown('emails.markdowncompteactiver')
                    ->with([
                        'name' => $this->name,
                    ]);
    }
}
