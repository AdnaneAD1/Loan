'use client'

import { useLocale } from 'next-intl'
import { setUserLocale } from '@/services/locale'
import { useTransition } from 'react'
import Flag from 'react-world-flags' // Package pour les icônes des pays

const LanguageSelector = () => {
  const locale = useLocale()
  const [isPending, startTransition] = useTransition()

  const handleLocaleChange = async (newLocale) => {
    startTransition(async () => {
      await setUserLocale(newLocale)
      // Mettre à jour le contexte de la langue
      document.documentElement.lang = newLocale
    })
  }

  return (
    <select
      value={locale}
      onChange={(e) => handleLocaleChange(e.target.value)}
      disabled={isPending}
      className="bg-transparent text-gray-700 font-medium p-2 rounded-md outline-none transition ease-in-out duration-300"
    >
      <option  className="flex items-center" value="en">
        <Flag code="GB" className="mr-2 w-6 h-6" />
        English
      </option>
      <option  className="flex items-center" value="fr">
        <Flag code="FR" className="mr-2 w-6 h-6" />
        Français
      </option>
      <option  className="flex items-center" value="es">
        <Flag code="ES" className="mr-2 w-6 h-6" />
        Español
      </option>
      <option  className="flex items-center" value="pt">
        <Flag code="PT" className="mr-2 w-6 h-6" />
        Português
      </option>
      <option  className="flex items-center" value="ro">
        <Flag code="RO" className="mr-2 w-6 h-6" />
        Română
      </option>
      <option  className="flex items-center" value="ka">
        <Flag code="GE" className="mr-2 w-6 h-6" />
        ქართული
      </option>
      <option  className="flex items-center" value="hn">
        <Flag code="HN" className="mr-2 w-6 h-6" />
        Hondureño
      </option>
    </select>
  )
}

export default LanguageSelector
