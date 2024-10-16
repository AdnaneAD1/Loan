import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Button from '@/components/Button'
import Link from 'next/link'
import '@/app/global.css'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import { useState } from 'react'

const ClientLoginForm = ({ submitForm, errors, status, setEmail, setPassword, setShouldRemember, email, password }) => {
    return (
        <form onSubmit={submitForm} className="-mt-40 space-y-6 -mb-40">
            <AuthSessionStatus className="mb-4" status={status} />
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                        onChange={event => setEmail(event.target.value)}
                        required
                        autoFocus
                    />
                    <InputError messages={errors.email} className="mt-2" />
                </div>
                <div className="mt-4">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
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
                        onChange={event => setShouldRemember(event.target.checked)}
                    />
                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                        Se souvenir de moi
                    </label>
                </div>

                <div className="text-sm">
                    <Link href="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Mot de passe oublié?
                    </Link>
                </div>
            </div>

            <div>
                <Button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Connexion
                </Button>
            </div>
            <div>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Ou{' '}
                    <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                        S'inscrire
                    </Link>
                </p>
            </div>
        </form>
    )
}

export default ClientLoginForm
