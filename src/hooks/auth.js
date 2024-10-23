import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter()
    const params = useParams()

    const { data: user, error, mutate } = useSWR('/api/user', () =>
        axios
            .get('/api/user')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error

                router.push('/verify-email')
            }),
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const register = async ({ setErrors, ...props }) => {
        await csrf()

        setErrors([])

        axios
            .post('/register', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const login = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/login', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const registerClient = async ({ setErrors, ...props }) => {
        await csrf()

        if (typeof setErrors === 'function') setErrors([])

        axios
            .post('/api/client-register', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const loginClient = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/api/client-login', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const forgotPassword = async ({ setErrors, setStatus, email }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/forgot-password', { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resetPassword = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/reset-password', { token: params.token, ...props })
            .then(response => {
                // Rediriger en fonction du rôle de l'utilisateur
                if (response.data.role === 'Admin') {
                    router.push('/admin/login?reset=' + btoa(response.data.status))
                } else {
                    router.push('/login?reset=' + btoa(response.data.status))
                }
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }


    const resendEmailVerification = ({ setStatus }) => {
        axios
            .post('/email/verification-notification')
            .then(response => setStatus(response.data.status))
    }

    const logout = async () => {
        if (!error) {
            await axios.post('/logout').then(() => mutate())
        }

        window.location.pathname = '/admin/login'
    }

    const logoutClient = async () => {
        if (!error) {
            await axios.post('/api/client-logout').then(() => mutate())
        }

        window.location.pathname = '/login'
    }

    // Nouvelle fonction handleLogout pour déterminer quelle fonction de déconnexion appeler
    const handleLogout = () => {
        const adminRoutes = [
            '/admin/login',
            '/admin/register',
            '/dashboard',
            '/valider',
            '/admin-profil',
            '/crediter',
            '/listeclient',
            '/user-info',
            '/update-dette'
        ]

        // Vérification si l'utilisateur est sur une des routes admin
        if (adminRoutes.includes(window.location.pathname)) {
            logout()  // Appelle la fonction de déconnexion de l'admin
        } else {
            logoutClient()  // Appelle la fonction de déconnexion du client
        }
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user)
            router.push(redirectIfAuthenticated)
        if (
            window.location.pathname === '/verify-email' &&
            user?.email_verified_at
        )
            router.push(redirectIfAuthenticated)
        if (middleware === 'auth' && error) handleLogout() // Utilise handleLogout ici
    }, [user, error])

    return {
        user,
        register,
        login,
        registerClient,
        loginClient,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout: handleLogout,
    }
}
