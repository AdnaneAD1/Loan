'use client';

import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import '@/app/global.css';
import { useRouter } from 'next/navigation';
import { FaSortAmountDown, FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '@/hooks/auth';
import Loading from '@/app/(app)/Loading';

const Transactions = () => {
    const router = useRouter();
    const { user } = useAuth({ middleware: 'auth' });

    useEffect(() => {
        if (!user) {
            router.push('/login');
        } else if (user.role !== 'Client') {
            router.push('/login');
        }
    }, [user, router]);

    if (!user) {
        return <Loading />;
    }

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get('/api/transactions');
                setTransactions(response.data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions();
    }, []);

    // Trier les transactions par date croissante
    const sortTransactions = () => {
        const sortedTransactions = [...transactions].sort((a, b) => new Date(a.transaction_date) - new Date(b.transaction_date));
        setTransactions(sortedTransactions);
    };

    return (
        <div className="min-h-screen bg-white p-6">
            <div className="flex items-center justify-between mb-4">
                <button className="text-black">
                    <FaArrowLeft className="text-xl" onClick={() => router.back()} />
                </button>
            </div>

            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-black">Historique des Transactions</h2>
                <button onClick={sortTransactions} className="text-black flex items-center">
                    <FaSortAmountDown className="mr-2" /> Trier
                </button>
            </div>

            <div>
                <table className="w-full bg-white rounded-lg border border-gray-200">
                    <thead>
                        <tr className="text-left border-b-2 border-red-500">
                            <th className="p-2 text-black">Date</th>
                            <th className="p-2 text-black">Bénéficiaire</th>
                            <th className="p-2 text-black">Type</th>
                            <th className="p-2 text-black">Montant</th>
                            <th className="p-2 text-black">Statut</th> {/* Nouvelle colonne pour le statut */}
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id} className="hover:bg-gray-200">
                                <td className="p-2 text-black">{new Date(transaction.transaction_date).toLocaleDateString()}</td>
                                <td className="p-2 text-black">{transaction.beneficiary_name}</td>
                                <td className="p-2 text-black">{transaction.type === 'deposit' ? 'Dépôt' : 'Retrait'}</td>
                                <td className="p-2 text-black">{transaction.amount} €</td>
                                <td className={`p-2capitalize ${transaction.statut === 'approved' ? 'text-green-500' : transaction.statut === 'cancelled' ? 'text-red-500' : 'text-yellow-500'}`}>
                                    {transaction.statut}
                                </td> {/* Statut avec une couleur différente */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Transactions;
