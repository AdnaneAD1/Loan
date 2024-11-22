import { getMessages, getLocale } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'

export default async function ServerPageWrapper({ children }) {
    const locale = await getLocale()
    const messages = await getMessages(locale)

    return (
        <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
        </NextIntlClientProvider>
    )
}
