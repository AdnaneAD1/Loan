<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactMarkdownMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public $username;
    public $email;
    public $subject;
    public $message;
    public $phone;

    public function __construct($username, $email, $subject, $message, $phone)
    {
        $this->username = $username;
        $this->email = $email;
        $this->subject = $subject;
        $this->message = $message;
        $this->phone = $phone;
    }

    public function build()
    {
        return $this->subject($this->subject)
            ->markdown('emails.markdowncontact')
            ->with([
                'username' => $this->username,
                'email' => $this->email,
                'subject' => $this->subject,
                'msg' => $this->message,
                'phone' => $this->phone,
            ]);
    }
}
