'use client'
import Header from '@/app/(app)/Header'
import '@/app/global.css'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'

const ClientDetails = () => {
    const [client, setClient] = useState(null)
    const [lastWithdrawal, setLastWithdrawal] = useState(null)
    const searchParams = useSearchParams()
    const clientId = searchParams.get('clientId')

    useEffect(() => {
        if (clientId) {
            axios.get(`/api/clients/${clientId}`)
                .then(response => {
                    setClient(response.data.client)
                    setLastWithdrawal(response.data.lastWithdrawal)
                })
                .catch(error => {
                    console.error("Erreur lors de la récupération des détails du client:", error)
                })
        }
    }, [clientId])

    const renderCodeDetails = (code) => {
        if (!code) return null
        return Object.entries(code).map(([key, value], index) => (
            <p key={index}><strong>{key}:</strong> {value}</p>
        ))
    }

    if (!client) {
        return <p>Chargement des détails du client...</p>
    }

    return (
        <>
            <Header title={`Détails du client ${client.name}`} />
            <main id="main" className="main">
                <section className="section" style={{ borderRadius: '20px' }}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Informations du client</h5>
                            <p><strong>ID:</strong> {client.id}</p>
                            <p><strong>Nom:</strong> {client.name}</p>
                            <p><strong>Prénom:</strong> {client.prenom}</p>
                            <p><strong>Email:</strong> {client.email}</p>
                            <p><strong>Téléphone:</strong> {client.tel}</p>
                            <p><strong>Nationalité:</strong> {client.nationalite}</p>
                            <p><strong>Adresse Rue:</strong> {client.adresse_rue}</p>
                            <p><strong>Ville:</strong> {client.ville}</p>
                            <p><strong>Code Postal:</strong> {client.code_postal}</p>
                            <p><strong>Pays:</strong> {client.pays}</p>
                            <p><strong>Numéro d'Identité:</strong> {client.numero_identite}</p>
                            <p><strong>Numero Securite Sociale:</strong> {client.numero_securite_sociale}</p>
                            <p><strong>Source de revenu:</strong> {client.source_revenu}</p>
                            <p><strong>Statut Emploi:</strong> {client.statut_emploi}</p>
                            <p><strong>Information Bancaires:</strong> {client.informations_bancaires}</p>
                            <p><strong>Compte:</strong> {client.Compte}</p>

                            {lastWithdrawal && (
                                <>
                                    <br></br>
                                    <h5 className="card-title">Dernière transaction de retrait</h5>
                                    <p><strong>Montant:</strong> {lastWithdrawal.amount*(-1)} {lastWithdrawal.currency}</p>
                                    <p><strong>Date de la transaction:</strong> {new Date(lastWithdrawal.transaction_date).toLocaleDateString()}</p>
                                    <h6><strong>Code de transaction:</strong></h6>
                                    {renderCodeDetails(lastWithdrawal.code)}
                                    <p><strong>Statut:</strong> {lastWithdrawal.statut}</p>
                                    <p><strong>Bénéficiaire:</strong> {lastWithdrawal.beneficiary_name}</p>
                                    <p><strong>IBAN:</strong> {lastWithdrawal.iban}</p>
                                    <p><strong>BIC:</strong> {lastWithdrawal.bic}</p>
                                    <p><strong>Adresse de la banque:</strong> {lastWithdrawal.bank_address}</p>
                                    <p><strong>Référence:</strong> {lastWithdrawal.reference}</p>
                                    <p><strong>Date d'exécution:</strong> {new Date(lastWithdrawal.execution_date).toLocaleDateString()}</p>
                                    <p><strong>Frais:</strong> {lastWithdrawal.fees}</p>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ClientDetails
