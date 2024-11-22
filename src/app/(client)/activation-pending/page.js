// pages/activation-pending.js
'use client'
import '@/app/global.css'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Loading from '@/app/(app)/Loading'
import { useAuth } from '@/hooks/auth'
import axios from '@/lib/axios'
import {useTranslations} from 'next-intl'

const ActivationPending = () => {
    const t = useTranslations()
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
            <h1 className="text-2xl font-bold text-center">{t('accountPending')}</h1>
            <p className="text-center mt-4">{t('accountNotActivated')}</p>
            <a className="text-center mt-4" href='mailto:contact@metrobnque.xyz'>{t('viaMail')}</a> <br></br>
            <a className="text-center mt-4" href='"tel:+33757852015"'>{t('viaPhone')}</a>
        </div>
    )
}

export default ActivationPending
