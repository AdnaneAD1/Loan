'use client'

import { useState, useEffect } from 'react'
import { FaMoneyBillWave, FaArrowLeft } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import '@/app/global.css'
import {useTranslations} from 'next-intl'
import axios from '@/lib/axios'
import { useAuth } from '@/hooks/auth'
import Loading from '@/app/(app)/Loading'

const RequestLoan = () => {
    const t = useTranslations()
    const router = useRouter()
    const { user } = useAuth({ middleware: 'auth' })

    useEffect(() => {
        if (!user) {
            router.push('/login')
        } else if (user.role !== 'Client') {
            router.push('/login')
        }
    }, [user, router])



    const [loanData, setLoanData] = useState({
        projet: '',
        description: '',
        duree: '',
        montant_voulue: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setLoanData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('/api/loan-request', loanData)

            if (response.status === 200) {
                alert(response.data.success)
            } else {
                alert(response.data.error)
            }
        } catch (error) {
            alert(t('errorSubmit'))
        }
    }
    if (!user) {
        return <Loading />
    }

    return (
        <div className="min-h-screen bg-white text-black p-4">
            <header className="flex justify-between items-center mb-4">
                <button>
                    <FaArrowLeft className="text-xl" onClick={() => router.back()} />
                </button>
                <h1 className="text-xl font-semibold">{t('requestLoan')}</h1>
            </header>

            <section className="bg-white rounded-3xl p-6 mb-6 shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="projet" className="block text-lg font-bold mb-2">{t('project')}</label>
                        <input
                            type="text"
                            id="projet"
                            name="projet"
                            value={loanData.projet}
                            onChange={handleInputChange}
                            className="w-full py-1 border-b-2 border-red-700 text-black outline-none"
                            placeholder="Enter project name"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block text-lg font-bold mb-2">{t('description')}</label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={loanData.description}
                            onChange={handleInputChange}
                            className="w-full py-1 border-b-2 border-red-700 text-black outline-none"
                            placeholder="Enter project description"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="duree" className="block text-lg font-bold mb-2">{t('duration')}</label>
                        <input
                            type="number"
                            id="duree"
                            name="duree"
                            value={loanData.duree}
                            onChange={handleInputChange}
                            className="w-full py-1 border-b-2 border-red-700 text-black outline-none"
                            placeholder="Enter duration"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="montant_voulue" className="block text-lg font-bold mb-2">{t('loanAmount')}</label>
                        <div className="flex items-center border-b-2 border-red-700">
                            <FaMoneyBillWave className="text-xl text-red-700 mr-2" />
                            <input
                                type="number"
                                id="montant_voulue"
                                name="montant_voulue"
                                value={loanData.montant_voulue}
                                onChange={handleInputChange}
                                className="w-full py-1 text-black outline-none"
                                placeholder="Enter loan amount"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-red-700 text-white w-full py-2 rounded-full mt-4"
                    >
                        {t('submitRequest')}
                    </button>
                </form>
            </section>
        </div>
    )
}

export default RequestLoan
