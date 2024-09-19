// pages/activation-pending.js
'use client'
import '@/app/global.css';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Loading from '@/app/(app)/Loading'
import { useAuth } from '@/hooks/auth'
import axios from '@/lib/axios';

const ActivationPending = () => {
    const { user } = useAuth({ middleware: 'auth' })
    const router = useRouter()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (user) {
            if (user.role !== 'Client') {
                router.push('/login')
            } else {
                axios.get('/api/check-activation-status')
                    .then(res => {
                        if (res.data.is_activated) {
                            router.push('/dash')
                        } else {
                            setLoading(false)
                        }
                    })
            }
        }
    }, [user, router])

    if (loading || !user) {
        return <Loading />
    }

    return (
        <div className="min-h-screen bg-white text-black p-4">
            <h1 className="text-2xl font-bold text-center">Compte en attente d'activation</h1>
            <p className="text-center mt-4">Votre compte n'a pas encore été activé. Veuillez contacter l'administrateur pour plus d'informations.</p>
            <a className="text-center mt-4" href='mailto:loan@gmail.com'>Via mail</a> <br></br>
            <a className="text-center mt-4" href=''>Via WhatsApp</a>
        </div>
    );
};

export default ActivationPending;
