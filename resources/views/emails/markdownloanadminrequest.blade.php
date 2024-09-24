<x-mail::message>
Bonjour,

Nous vous informons que {{ $name }} a soumis une nouvelle demande de prêt d’un montant de [Montant]. Voici les détails de la demande :

- Nom du client : {{ $name }}
- Montant demandé : {{ $montant }}
- Objet du prêt : {{ $projet }}

Veuillez examiner cette demande et y apporter les suites nécessaires.

Cordialement,
Le système MetroBanque

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
