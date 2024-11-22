// 'use client'

import { NextIntlClientProvider } from 'next-intl'
import {getLocale, getMessages} from 'next-intl/server'
import "node_modules/react-modal-video/css/modal-video.css"
import "@/public/assets/css/bootstrap.css"
import "@/public/assets/css/style.css"
import "@/public/assets/css/color.css"
import 'swiper/css'
import { Nunito } from 'next/font/google'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode'
import { inter, manrope } from '@/lib/font'
export const metadata = {
    title: 'MetroBnque',
    description: 'Votre partenaire de confiance',
}

export default async function RootLayout({ children, params: { locale } }) {
    const messages = await getMessages(locale)
    const currentLocale = locale || await getLocale()

    return (
        <html lang={currentLocale} className={`${manrope.variable} ${inter.variable}`}>
            <body>
            <NextIntlClientProvider messages={messages} locale={currentLocale}>
                {children}
            </NextIntlClientProvider>
            </body>
        </html>
    )
}
