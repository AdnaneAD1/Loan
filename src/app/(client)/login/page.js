'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import {useTranslations} from 'next-intl'
import '@/app/global.css'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import Layout from "@/components/layout/Layout"

const ClientLogin = () => {
    const t = useTranslations()
    const router = useRouter()

    const { loginClient } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dash',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        loginClient({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('login')}>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-sm w-full space-y-8">
                    <AuthSessionStatus className="mb-4" status={status} />
                    <form onSubmit={submitForm} className="-mt-40 space-y-6 -mb-40">
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <Label htmlFor="email">{t('email')}</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder={t('email')}
                                    onChange={event => setEmail(event.target.value)}
                                    required
                                    autoFocus
                                />
                                <InputError messages={errors.email} className="mt-2" />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="password">{t('password')}</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder={t('password')}
                                    onChange={event => setPassword(event.target.value)}
                                    required
                                    autoComplete="current-password"
                                />
                                <InputError messages={errors.password} className="mt-2" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember_me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    onChange={event =>
                                        setShouldRemember(event.target.checked)
                                    }
                                />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                    {t('remember_me')}
                                </label>
                            </div>

                            <div className="text-sm">
                                <Link href="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    {t('forgot_password')}
                                </Link>
                            </div>
                        </div>

                        <div>
                            <Button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {t('submit')}
                            </Button>
                        </div>
                        <div>
                            <p className="mt-2 text-center text-sm text-gray-600">
                                {t('or')}{' '}
                                <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    {t('sign_up')}
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>

    )
}

export default ClientLogin
