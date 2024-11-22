// 'use client'

import { NextIntlClientProvider } from 'next-intl'
import {getLocale, getMessages} from 'next-intl/server'

export default async function RootLayout({ children, params: { locale } }) {
    const messages = await getMessages(locale)
    const currentLocale = locale || await getLocale()

    return (
        <html lang={currentLocale}>
            <body>
            <NextIntlClientProvider messages={messages} locale={currentLocale}>
                {children}
            </NextIntlClientProvider>
            </body>
        </html>
    )
}
