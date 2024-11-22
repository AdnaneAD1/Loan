'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import '@/app/global.css'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import {useTranslations} from 'next-intl'
import Layout from "@/components/layout/Layout"

const ClientRegister = () => {
    const t = useTranslations()
    const { registerClient } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dash',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [prenom, setPrenom] = useState('')
    const [countryCode, setCountryCode] = useState('')
    const [tel, setTel] = useState('')
    const [sexe, setSexe] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setpasswordConfirmation] = useState('')

    const [nationalite, setNationalite] = useState('')
    const [adresseRue, setAdresseRue] = useState('')
    const [ville, setVille] = useState('')
    const [codePostal, setCodePostal] = useState('')
    const [pays, setPays] = useState('')
    const [numeroIdentite, setNumeroIdentite] = useState('')
    const [numeroSecuriteSociale, setNumeroSecuriteSociale] = useState('')
    // const [preuveResidence, setPreuveResidence] = useState('')
    // const [scanIdentite, setScanIdentite] = useState('')
    const [sourceRevenu, setSourceRevenu] = useState('')
    const [statutEmploi, setStatutEmploi] = useState('')
    const [informationsBancaires, setInformationsBancaires] = useState('')
    const [consentementConditions, setConsentementConditions] = useState(false)
    const [acceptationPolitiqueConfidentialite, setAcceptationPolitiqueConfidentialite] = useState(false)

    const [errors, setErrors] = useState([])

    const submitForm = async event => {
        event.preventDefault()
        registerClient({
            name,
            email,
            prenom,
            tel: `${countryCode}${tel}`,
            sexe,
            password,
            password_confirmation: passwordConfirmation,
            nationalite,
            adresse_rue: adresseRue,
            ville,
            code_postal: codePostal,
            pays,
            numero_identite: numeroIdentite,
            numero_securite_sociale: numeroSecuriteSociale,
            // preuve_residence: preuveResidence,
            // scan_identite: scanIdentite,
            source_revenu: sourceRevenu,
            statut_emploi: statutEmploi,
            informations_bancaires: informationsBancaires,
            consentement_conditions: consentementConditions,
            acceptation_politique_confidentialite: acceptationPolitiqueConfidentialite,
            setErrors,
        })
    }

    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('register')}>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-sm w-full space-y-8">
                    <form onSubmit={submitForm} className="mt-12 space-y-6 mb-12" encType="multipart/form-data">
                        <div className="rounded-md shadow-sm -space-y-px">
                            {/* Existing fields */}
                            {/* Name */}
                            <div>
                                <Label htmlFor="name">{t('name')}</Label>

                                <Input
                                    id="name"
                                    type="text"
                                    value={name}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder={t('name')}
                                    onChange={event => setName(event.target.value)}
                                    required
                                    autoFocus
                                />

                                <InputError messages={errors.name} className="mt-2" />
                            </div>

                            {/* Prenom */}
                            <div className="mt-4">
                                <Label htmlFor="prenom">{t('first_name')}</Label>

                                <Input
                                    id="prenom"
                                    type="text"
                                    value={prenom}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder={t('first_name')}
                                    onChange={event => setPrenom(event.target.value)}
                                    required
                                    autoFocus
                                />

                                <InputError messages={errors.prenom} className="mt-2" />
                            </div>

                            {/* Email Address */}
                            <div className="mt-4">
                                <Label htmlFor="email">{t('email')}</Label>

                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder={t('email')}
                                    onChange={event => setEmail(event.target.value)}
                                    required
                                />

                                <InputError messages={errors.email} className="mt-2" />
                            </div>

                            {/* Téléphone et Identifiant de Pays */}
                            <div className="mt-4 flex space-x-2">
                                <div className="w-1/4">
                                    <Label htmlFor="countryCode">{t('phone_code')}</Label>
                                    <Input
                                        id="countryCode"
                                        type="text"
                                        value={countryCode}
                                        className="appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder={t('phone_code')}
                                        onChange={event => {
                                            const value = event.target.value.replace(/\D/g, '')
                                            setCountryCode(value)
                                        }}
                                        max="999"
                                        min="0"
                                        required
                                    />
                                </div>

                                <div className="w-3/4">
                                    <Label htmlFor="tel">{t('phone_number_label')}</Label>
                                    <Input
                                        id="tel"
                                        type="text"
                                        value={tel}
                                        className="appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-r-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder={t('phone_number_label')}
                                        onChange={event => {
                                            const value = event.target.value.replace(/\D/g, '')
                                            setTel(value)
                                        }}
                                        min="0"
                                        required
                                    />
                                </div>
                            </div>

                            <InputError messages={errors.tel || errors.country_code} className="mt-2" />

                            {/* Sexe */}
                            <div className="mt-4">
                                <Label htmlFor="sexe">{t('gender')}</Label>

                                <select
                                    id="sexe"
                                    value={sexe}
                                    className="block mt-1 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                    onChange={event => setSexe(event.target.value)}
                                    required
                                >
                                    <option value="">{t('select_gender')}</option>
                                    <option value="homme">{t('male')}</option>
                                    <option value="femme">{t('female')}</option>
                                </select>

                                <InputError messages={errors.sexe} className="mt-2" />
                            </div>

                            {/* Nationalité */}
                            <div className="mt-4">
                                <Label htmlFor="nationalite">{t('nationality')}</Label>
                                <Input
                                    id="nationalite"
                                    type="text"
                                    value={nationalite}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    onChange={event => setNationalite(event.target.value)}
                                    required
                                />
                                <InputError messages={errors.nationalite} className="mt-2" />
                            </div>

                            {/* Adresse Rue */}
                            <div className="mt-4">
                                <Label htmlFor="adresseRue">{t('street_address')}</Label>
                                <Input
                                    id="adresseRue"
                                    type="text"
                                    value={adresseRue}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    onChange={event => setAdresseRue(event.target.value)}
                                    required
                                />
                                <InputError messages={errors.adresse_rue} className="mt-2" />
                            </div>

                            {/* Ville */}
                            <div className="mt-4">
                                <Label htmlFor="ville">{t('city')}</Label>
                                <Input
                                    id="ville"
                                    type="text"
                                    value={ville}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    onChange={event => setVille(event.target.value)}
                                    required
                                />
                                <InputError messages={errors.ville} className="mt-2" />
                            </div>

                            {/* Code Postal */}
                            <div className="mt-4">
                                <Label htmlFor="codePostal">{t('postal_code')}</Label>
                                <Input
                                    id="codePostal"
                                    type="text"
                                    value={codePostal}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    onChange={event => setCodePostal(event.target.value)}
                                    required
                                />
                                <InputError messages={errors.code_postal} className="mt-2" />
                            </div>

                            {/* Pays */}
                            <div className="mt-4">
                                <Label htmlFor="pays">{t('country')}</Label>
                                <Input
                                    id="pays"
                                    type="text"
                                    value={pays}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    onChange={event => setPays(event.target.value)}
                                    required
                                />
                                <InputError messages={errors.pays} className="mt-2" />
                            </div>

                            {/* Numéro Identité */}
                            <div className="mt-4">
                                <Label htmlFor="numeroIdentite">{t('identity_number')}</Label>
                                <Input
                                    id="numeroIdentite"
                                    type="text"
                                    value={numeroIdentite}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    onChange={event => setNumeroIdentite(event.target.value)}
                                    required
                                />
                                <InputError messages={errors.numero_identite} className="mt-2" />
                            </div>

                            {/* Numéro Sécurité Sociale */}
                            <div className="mt-4">
                                <Label htmlFor="numeroSecuriteSociale">{t('social_security_number')}</Label>
                                <Input
                                    id="numeroSecuriteSociale"
                                    type="text"
                                    value={numeroSecuriteSociale}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    onChange={event => setNumeroSecuriteSociale(event.target.value)}
                                    required
                                />
                                <InputError messages={errors.numero_securite_sociale} className="mt-2" />
                            </div>

                            {/* Preuve de Résidence
                            <div className="mt-4">
                                <Label htmlFor="preuveResidence">Preuve de Résidence (max 2mo)</Label>
                                <Input
                                    id="preuveResidence"
                                    type="file"
                                    onChange={event => setPreuveResidence(event.target.files[0])}
                                    required
                                />
                                <InputError messages={errors.preuve_residence} className="mt-2" />
                            </div>

                            //  Scan Identité
                            <div className="mt-4">
                                <Label htmlFor="scanIdentite">Scan Identité (max 2mo)</Label>
                                <Input
                                    id="scanIdentite"
                                    type="file"
                                    onChange={event => setScanIdentite(event.target.files[0])}
                                    required
                                />
                                <InputError messages={errors.scan_identite} className="mt-2" />
                            </div> */}

                            {/* Source de Revenu */}
                            <div className="mt-4">
                                <Label htmlFor="sourceRevenu">{t('income_source')}</Label>
                                <Input
                                    id="sourceRevenu"
                                    type="text"
                                    value={sourceRevenu}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    onChange={event => setSourceRevenu(event.target.value)}
                                    required
                                />
                                <InputError messages={errors.source_revenu} className="mt-2" />
                            </div>

                            {/* Statut Emploi */}
                            <div className="mt-4">
                                <Label htmlFor="statutEmploi">{t('employment_status')}</Label>
                                <Input
                                    id="statutEmploi"
                                    type="text"
                                    value={statutEmploi}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    onChange={event => setStatutEmploi(event.target.value)}
                                    required
                                />
                                <InputError messages={errors.statut_emploi} className="mt-2" />
                            </div>

                            {/* Informations Bancaires */}
                            <div className="mt-4">
                                <Label htmlFor="informationsBancaires">{t('bank_information')}</Label>
                                <Input
                                    id="informationsBancaires"
                                    type="text"
                                    value={informationsBancaires}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    onChange={event => setInformationsBancaires(event.target.value)}
                                    required
                                />
                                <InputError messages={errors.informations_bancaires} className="mt-2" />
                            </div>

                                                        {/* Password */}
                                                        <div className="mt-4">
                                <Label htmlFor="password">{t('password')}</Label>

                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    onChange={event => setPassword(event.target.value)}
                                    required
                                />

                                <InputError messages={errors.password} className="mt-2" />
                            </div>

                            {/* Confirm Password */}
                            <div className="mt-4">
                                <Label htmlFor="passwordConfirmation">{t('confirm_password')}</Label>

                                <Input
                                    id="passwordConfirmation"
                                    type="password"
                                    value={passwordConfirmation}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    onChange={event => setpasswordConfirmation(event.target.value)}
                                    required
                                />

                                <InputError messages={errors.password_confirmation} className="mt-2" />
                            </div>

                            {/* Consentement Conditions */}
                            <div className="mt-4">
                                <Label htmlFor="consentementConditions">
                                    <Input
                                        id="consentementConditions"
                                        type="checkbox"
                                        checked={consentementConditions}
                                        onChange={event => setConsentementConditions(event.target.checked)}
                                        required
                                    />
                                    {t('accept_terms')}
                                </Label>
                                <InputError messages={errors.consentement_conditions} className="mt-2" />
                            </div>

                            {/* Acceptation Politique Confidentialité */}
                            <div className="mt-4">
                                <Label htmlFor="acceptationPolitiqueConfidentialite">
                                    <Input
                                        id="acceptationPolitiqueConfidentialite"
                                        type="checkbox"
                                        checked={acceptationPolitiqueConfidentialite}
                                        onChange={event => setAcceptationPolitiqueConfidentialite(event.target.checked)}
                                        required
                                    />
                                    {t('accept_privacy_policy')}
                                </Label>
                                <InputError messages={errors.acceptation_politique_confidentialite} className="mt-2" />
                            </div>
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <Button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {t('sign_up')}
                            </Button>
                        </div>
                        <div>
                            <p className="mt-2 text-center text-sm text-gray-600">
                                <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    {t('already_registered')}
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default ClientRegister
