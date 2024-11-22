
import {useTranslations} from 'next-intl'
export default function BackToTop({ scroll }) {
    const t = useTranslations()

    return (
        <>
            {scroll && (
                <a className="scroll-to-top scroll-to-target d-block" href="#top">
                    <div className="scroll-bar-text">{t('backToTop')}</div>
                </a>

            )}
        </>
    )
}
