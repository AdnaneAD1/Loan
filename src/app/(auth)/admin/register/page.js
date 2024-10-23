// 'use client'

// import Button from '@/components/Button'
// import Input from '@/components/Input'
// import InputError from '@/components/InputError'
// import Label from '@/components/Label'
// import Link from 'next/link'
// import '@/app/global.css'
// import { useAuth } from '@/hooks/auth'
// import { useState } from 'react'

// const Page = () => {
//     const { register } = useAuth({
//         middleware: 'guest',
//         redirectIfAuthenticated: '/dashboard',
//     })

//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [passwordConfirmation, setPasswordConfirmation] = useState('')
//     const [errors, setErrors] = useState([])

//     const submitForm = event => {
//         event.preventDefault()

//         register({
//             name,
//             email,
//             password,
//             password_confirmation: passwordConfirmation,
//             setErrors,
//         })
//     }

//     return (
//         <form onSubmit={submitForm}>
//             {/* Name */}
//             <div>
//                 <Label htmlFor="name">Nom</Label>

//                 <Input
//                     id="name"
//                     type="text"
//                     value={name}
//                     className="block mt-1 w-full"
//                     onChange={event => setName(event.target.value)}
//                     required
//                     autoFocus
//                 />

//                 <InputError messages={errors.name} className="mt-2" />
//             </div>

//             {/* Email Address */}
//             <div className="mt-4">
//                 <Label htmlFor="email">Email</Label>

//                 <Input
//                     id="email"
//                     type="email"
//                     value={email}
//                     className="block mt-1 w-full"
//                     onChange={event => setEmail(event.target.value)}
//                     required
//                 />

//                 <InputError messages={errors.email} className="mt-2" />
//             </div>

//             {/* Password */}
//             <div className="mt-4">
//                 <Label htmlFor="password">Mot de passe</Label>

//                 <Input
//                     id="password"
//                     type="password"
//                     value={password}
//                     className="block mt-1 w-full"
//                     onChange={event => setPassword(event.target.value)}
//                     required
//                     autoComplete="new-password"
//                 />

//                 <InputError messages={errors.password} className="mt-2" />
//             </div>

//             {/* Confirm Password */}
//             <div className="mt-4">
//                 <Label htmlFor="passwordConfirmation">
//                     Confirmer Mot de passe
//                 </Label>

//                 <Input
//                     id="passwordConfirmation"
//                     type="password"
//                     value={passwordConfirmation}
//                     className="block mt-1 w-full"
//                     onChange={event =>
//                         setPasswordConfirmation(event.target.value)
//                     }
//                     required
//                 />

//                 <InputError
//                     messages={errors.password_confirmation}
//                     className="mt-2"
//                 />
//             </div>

//             <div className="flex items-center justify-end mt-4">
//                 {/* <Link
//                     href="/admin/login"
//                     className="underline text-sm text-gray-600 hover:text-gray-900">
//                     Already registered?
//                 </Link> */}

//                 <Button className="ml-4">Register</Button>
//             </div>
//         </form>
//     )
// }

// export default Page
'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import '@/app/global.css'
import { useAuth } from '@/hooks/auth'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'
import Loading from '@/app/(app)/Loading'

const Page = () => {
    const router = useRouter()
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    useEffect(() => {
        if (!isLoading && !user) {
            router.push('/login');  // Effectuer la redirection après avoir vérifié que l'utilisateur n'est pas chargé
        } else if (!isLoading && user?.role !== 'Admin') {
            router.push('/login');
        }
    }, [user, isLoading, router]);

    useEffect(() => {
        const checkAdmin = async () => {
            try {
                const response = await axios.get('/api/check-admin-role')
                if (response.data.redirect) {
                    router.push(response.data.redirect)
                }
            } catch (error) {
                console.error('Error checking admin role', error)
            }
        }
        checkAdmin()
    }, [])

    const submitForm = event => {
        event.preventDefault()

        register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        })
    }

    if (isLoading || !user) {
        return <Loading />; // Afficher un état de chargement jusqu'à ce que l'utilisateur soit chargé
    }

    return (
        <form onSubmit={submitForm}>
            {/* Name */}
            <div>
                <Label htmlFor="name">Nom</Label>

                <Input
                    id="name"
                    type="text"
                    value={name}
                    className="block mt-1 w-full"
                    onChange={event => setName(event.target.value)}
                    required
                    autoFocus
                />

                <InputError messages={errors.name} className="mt-2" />
            </div>

            {/* Email Address */}
            <div className="mt-4">
                <Label htmlFor="email">Email</Label>

                <Input
                    id="email"
                    type="email"
                    value={email}
                    className="block mt-1 w-full"
                    onChange={event => setEmail(event.target.value)}
                    required
                />

                <InputError messages={errors.email} className="mt-2" />
            </div>

            {/* Password */}
            <div className="mt-4">
                <Label htmlFor="password">Mot de passe</Label>

                <Input
                    id="password"
                    type="password"
                    value={password}
                    className="block mt-1 w-full"
                    onChange={event => setPassword(event.target.value)}
                    required
                    autoComplete="new-password"
                />

                <InputError messages={errors.password} className="mt-2" />
            </div>

            {/* Confirm Password */}
            <div className="mt-4">
                <Label htmlFor="passwordConfirmation">
                    Confirmer Mot de passe
                </Label>

                <Input
                    id="passwordConfirmation"
                    type="password"
                    value={passwordConfirmation}
                    className="block mt-1 w-full"
                    onChange={event =>
                        setPasswordConfirmation(event.target.value)
                    }
                    required
                />

                <InputError
                    messages={errors.password_confirmation}
                    className="mt-2"
                />
            </div>

            <div className="flex items-center justify-end mt-4">
                <Button className="ml-4">Register</Button>
            </div>
        </form>
    )
}

export default Page
