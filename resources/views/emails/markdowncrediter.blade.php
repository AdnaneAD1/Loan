<x-mail::message>
Cher(e) ``{{ $name }}``,

Nous vous confirmons que la somme de ``{{ $montant }}`` a été créditée avec succès sur votre compte.

Votre nouveau solde disponible est de ``{{ $solde }}``. Vous pouvez consulter cette opération et l'historique de vos transactions via votre espace personnel sur notre site.

Si vous avez des questions, n’hésitez pas à contacter notre équipe.

Cordialement,
L'équipe MetroBanque

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
