<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;

class IbanController extends Controller
{
    public function generateIban()
    {
        do {
            $iban = $this->generateUniqueIban();
        } while ($this->ibanExists($iban));

        return $iban;
    }

    private function generateUniqueIban()
    {
        // Code du pays (ex: "FR" pour France)
        $countryCode = "FR";
        $bankCode = $this->generateBankCode(); // Générer un code banque
        $accountNumber = $this->generateAccountNumber(); // Générer un numéro de compte

        // Fusionner pour obtenir une chaîne IBAN temporaire sans clé de contrôle
        $temporaryIban = $bankCode . $accountNumber;

        // Calculer la clé de contrôle avec l'algorithme mod 97
        $checkDigits = $this->calculateCheckDigits($countryCode, $temporaryIban);

        // L'IBAN complet
        return $countryCode . $checkDigits . $bankCode . $accountNumber;
    }

    private function generateBankCode()
    {
        return str_pad(rand(0, 99999), 5, '0', STR_PAD_LEFT);
    }

    private function generateAccountNumber()
    {
        return str_pad(rand(0, 99999999999), 11, '0', STR_PAD_LEFT);
    }

    private function calculateCheckDigits($countryCode, $ibanWithoutCheckDigits)
    {
        $numericCountryCode = $this->convertLettersToDigits($countryCode);
        $rearrangedIban = $ibanWithoutCheckDigits . $numericCountryCode . '00';
        $mod97 = intval($this->ibanMod97($rearrangedIban));
        $checkDigits = 98 - $mod97;

        return str_pad($checkDigits, 2, '0', STR_PAD_LEFT);
    }

    private function convertLettersToDigits($letters)
    {
        $digits = '';
        foreach (str_split($letters) as $letter) {
            $digits .= ord($letter) - 55;
        }
        return $digits;
    }

    private function ibanMod97($iban)
    {
        $ibanLength = strlen($iban);
        $remainder = '';
        for ($i = 0; $i < $ibanLength; $i += 7) {
            $section = substr($iban, $i, 7);
            $remainder = intval($remainder . $section) % 97;
        }
        return $remainder;
    }

    private function ibanExists($iban)
    {
        return Client::where('compte', $iban)->exists();
    }
}
