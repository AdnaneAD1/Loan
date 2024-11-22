'use client'

import { useState, useEffect } from 'react'
import '@/app/global.css'
import { FaArrowRight, FaUser, FaMoneyBillWave, FaSortAmountDown, FaArrowLeft, FaHome, FaWallet, FaChartPie } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/auth'
import {useTranslations} from 'next-intl'
import Loading from '@/app/(app)/Loading'
import axios from '@/lib/axios'

const Home = () => {
    const t = useTranslations()
    const router = useRouter()
    const { user } = useAuth({ middleware: 'auth' })
    const [balance, setBalance] = useState(0)
    const [transactions, setTransactions] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!user) {
            router.push('/login')
        } else if (user.role !== 'Client') {
            router.push('/login')
        } else {
            // Récupérer les informations du client via l'API
            axios.get('/api/client-info')
                .then(response => {
                    const { client, transactions } = response.data
                    setBalance(client.solde)
                    setTransactions(transactions)
                    setLoading(false)
                })
                .catch(error => {
                    console.error('Error fetching client info:', error)
                    setLoading(false)
                    if (error.response && error.response.status === 403) {
                        // Si le compte n'est pas activé
                        alert(t('unactivated_account'))
                        router.push('/activation-pending') // Rediriger vers une page d'activation en attente
                    }
                })
        }
    }, [user, router])


    const handleSendMoney = () => {
        router.push('/retrait')
    }
    if (loading || !user) {
        return <Loading />
    }

    return (
        <div className="min-h-screen bg-white text-black p-4">
            <header className="flex justify-between items-center mb-4">
                {/* <button>
                    <FaArrowLeft className="text-xl" onClick={() => router.back()} />
                </button> */}
                <h1 className="text-xl font-semibold">{t('welcome')} {user.name}!</h1>
            </header>

            <section className="bg-white rounded-3xl p-6 mb-6 shadow-lg">
                <h2 className="text-center text-2xl font-extrabold mb-1 text-black">{t('your_balance')}</h2>
                <p className="text-center text-4xl font-bold text-red-700 mb-4">€{balance.toLocaleString()}</p>
                {/* <div className="flex justify-around mt-4">

                </div> */}
            </section>

            <section className="bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-black">{t('transaction_history')}e</h3>
                    <button onClick={() => setTransactions([...transactions].reverse())} className="text-sm text-red-500 flex items-center">
                        {t('sort')} <FaSortAmountDown className="ml-1" />
                    </button>
                </div>
                <ul>
                    {transactions.map(transaction => (
                        <li key={transaction.id} className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="text-sm font-medium text-black">{transaction.beneficiary_name}</span>
                            <span className={`text-sm ${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {transaction.amount > 0 ? `+${transaction.amount}` : transaction.amount}
                            </span>
                        </li>
                    ))}
                </ul>
            </section>

            <footer className="fixed bottom-0 left-0 right-0 bg-white p-4 rounded-t-2xl shadow-md flex justify-between items-center">
                <button onClick={() => router.push('/dash')} className="flex flex-col items-center text-red-500">
                    <FaHome className="text-2xl" />
                    <span className="text-xs">{t('home')}</span>
                </button>
                <button onClick={() => router.push('/historique')} className="flex flex-col items-center text-gray-400">
                    <FaMoneyBillWave className="text-2xl" />
                    <span className="text-xs">{t('history')}</span>
                </button>
                <button onClick={handleSendMoney} className="bg-red-700 text-white rounded-full p-3 flex flex-col items-center shadow-md">
                    <FaArrowRight className="text-2xl mb-2" />
                    <span className="text-xs">{t('withdrawal')}</span>
                </button>
                <button onClick={() => router.push('/loan')} className="flex flex-col items-center text-gray-400">
                    <FaChartPie className="text-2xl" />
                    <span className="text-xs">{t('loan_request')}</span>
                </button>
                <button onClick={() => router.push('/profil')} className="flex flex-col items-center text-gray-400">
                    <FaUser className="text-2xl" />
                    <span className="text-xs">{t('profile')}</span>
                </button>
            </footer>
        </div>
    )
}

export default Home
