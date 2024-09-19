import { Manrope, Inter } from 'next/font/google'

export const manrope = Manrope({
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
    variable: "--manrope",
    display: 'swap',
})
export const inter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--inter",
    display: 'swap',
})
