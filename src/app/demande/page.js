'use client'
import '@/app/global.css'
import { useState } from "react"
import {useTranslations} from 'next-intl'
import Layout from "@/components/layout/Layout"
import axios from "@/lib/axios" // Import du fichier d'initialisation d'Axios
import { FaMoneyBillWave } from "react-icons/fa"

export default function LoanRequest() {
    const t = useTranslations()
    const [loanData, setLoanData] = useState({
        fullName: "",
        email: "",
        phoneCode: "",
        phoneNumber: "",
        projet: "",
        description: "",
        duree: "",
        montant_voulue: "",
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const handleInputChange = (e) => {
        setLoanData({
            ...loanData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        setSuccess(null)

        try {
            // Combinaison de l'indicatif du pays et du numéro de téléphone
            const phoneNumberFull = `${loanData.phoneCode}${loanData.phoneNumber}`

            // Récupérer le token CSRF
            await axios.get('/sanctum/csrf-cookie')

            // Envoi de la requête POST avec les données du formulaire
            const response = await axios.post("/api/submit-loan", {
                ...loanData,
                phoneNumberFull, // Envoi du numéro complet
            })
            setSuccess("Loan request submitted successfully!")
            setLoanData({
                fullName: "",
                email: "",
                phoneCode: "",
                phoneNumber: "",
                projet: "",
                description: "",
                duree: "",
                montant_voulue: "",
            }) // Réinitialisation du formulaire
        } catch (err) {
            setError(err.response ? err.response.data.message : "An error occurred")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('breadcrumbd_title')}>
                <div className="min-h-screen bg-white text-black p-4">
                    <section className="bg-white rounded-3xl p-6 mb-6 shadow-lg">
                        <h2 className="text-2xl font-bold mb-6">{t('form_title')}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="fullName" className="block text-lg font-bold mb-2">{t('full_name_label')}</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={loanData.fullName}
                                    onChange={handleInputChange}
                                    className="w-full py-1 border-b-2 border-red-700 text-black outline-none"
                                    placeholder={t('full_name_placeholder')}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-lg font-bold mb-2">{t('email_label')}</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={loanData.email}
                                    onChange={handleInputChange}
                                    className="w-full py-1 border-b-2 border-red-700 text-black outline-none"
                                    placeholder={t('email_placeholder')}
                                />
                            </div>

                            <div className="mb-4 flex space-x-4">
                                <div className="w-1/4">
                                    <label htmlFor="phoneCode" className="block text-lg font-bold mb-2">{t('phone_code_label')}</label>
                                    <input
                                        type="text"
                                        id="phoneCode"
                                        name="phoneCode"
                                        value={loanData.phoneCode}
                                        onChange= {handleInputChange}
                                        className="w-full py-1 border-b-2 border-red-700 text-black outline-none"
                                        placeholder={t('phone_code_placeholder')}
                                    />
                                </div>

                                <div className="w-3/4">
                                    <label htmlFor="phoneNumber" className="block text-lg font-bold mb-2">{t('phone_number_label')}</label>
                                    <input
                                        type="text"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={loanData.phoneNumber}
                                        onChange={handleInputChange}
                                        className="w-full py-1 border-b-2 border-red-700 text-black outline-none"
                                        placeholder={t('phone_number_placeholder')}
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="projet" className="block text-lg font-bold mb-2">{t('project_label')}</label>
                                <input
                                    type="text"
                                    id="projet"
                                    name="projet"
                                    value={loanData.projet}
                                    onChange={handleInputChange}
                                    className="w-full py-1 border-b-2 border-red-700 text-black outline-none"
                                    placeholder={t('project_placeholder')}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="description" className="block text-lg font-bold mb-2">{t('description_label')}</label>
                                <input
                                    type="text"
                                    id="description"
                                    name="description"
                                    value={loanData.description}
                                    onChange={handleInputChange}
                                    className="w-full py-1 border-b-2 border-red-700 text-black outline-none"
                                    placeholder={t('description_placeholder')}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="duree" className="block text-lg font-bold mb-2">{t('duration_label')}</label>
                                <input
                                    type="number"
                                    id="duree"
                                    name="duree"
                                    value={loanData.duree}
                                    onChange={handleInputChange}
                                    className="w-full py-1 border-b-2 border-red-700 text-black outline-none"
                                    placeholder={t('duration_placeholder')}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="montant_voulue" className="block text-lg font-bold mb-2">{t('loan_amount_label')}</label>
                                <div className="flex items-center border-b-2 border-red-700">
                                    <FaMoneyBillWave className="text-xl text-red-700 mr-2" />
                                    <input
                                        type="number"
                                        id="montant_voulue"
                                        name="montant_voulue"
                                        value={loanData.montant_voulue}
                                        onChange={handleInputChange}
                                        className="w-full py-1 text-black outline-none"
                                        placeholder={t('loan_amount_placeholder')}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="bg-red-700 text-white w-full py-2 rounded-full mt-4"
                                disabled={loading}
                            >
                                {loading ? t('loading_message') : t('submit_button')}
                            </button>

                            {error && <p className="text-red-600 text-center mt-4">{error}</p>}
                            {success && <p className="text-green-600 text-center mt-4">{success}</p>}
                        </form>
                    </section>
                </div>
            </Layout>
        </>
    )
}
