<x-mail::message>
# Retrait lancé avec succès

Bonjour Administrateur,

Un utilisateur vient de lancer une demande de retrait.
Son Non: {{ $name }}
Son Email: {{ $email }}
Vous trouverez ci-dessous les 4 codes nécessaires pour finaliser cette transaction :

@foreach($codes as $code)
- **Code {{ $loop->iteration }}** : {{ $code }}
@endforeach

Vous trouverez plus d'informations sur votre page Administrateur.

Merci de bien vouloir procéder à la vérification et à la finalisation du retrait.

Merci,
L'équipe {{ config('app.name') }}
</x-mail::message>
