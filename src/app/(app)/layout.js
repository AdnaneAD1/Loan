'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/app/(app)/Navigation'
import { useEffect } from 'react'
import Loading from '@/app/(app)/Loading'
import { useRouter } from 'next/navigation'

const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' })
    const router = useRouter()

    useEffect(() => {
        if (user && user.role !== 'Admin') {
            router.push('/login') // Redirigez l'utilisateur vers une autre page s'il n'est pas admin
        }
    }, [user, router])

    if (!user) {
        return <Loading />
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation user={user} />

            <main>{children}</main>
        </div>
    )
}

export default AppLayout
