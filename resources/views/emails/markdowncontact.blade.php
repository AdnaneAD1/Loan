@component('mail::message')
# Nouveau message de contact de: {{ $username }}

**E-mail**: ``{{ $email }}``<br>
**Objet**: ``{{ $subject }}``<br>
**Numéro**: ``{{ $phone }}``<br>
**Message**: <br>{{ $message }}


Merci,<br>
{{ config('app.name') }}
@endcomponent
