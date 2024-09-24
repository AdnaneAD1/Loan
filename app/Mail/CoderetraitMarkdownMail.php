<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class CoderetraitMarkdownMail extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $email;
    public $codes;
    /**
     * Create a new message instance.
     */
    public function __construct($name, $email, $codes)
    {
        $this->name = $name;
        $this->email = $email;
        $this->codes = $codes;
    }

    public function build()
    {
        return $this->subject("Code de retrait du client")
                    ->markdown('emails.markdowncoderetrait')
                    ->with([
                        'name' => $this->name,
                        'email' => $this->email,
                        'codes' => $this->codes,
                    ]);
    }
}
