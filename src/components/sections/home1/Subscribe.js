import Link from "next/link"
import {useTranslations} from 'next-intl'


export default function Subscribe() {
    const t = useTranslations()
    return (
        <>
            <section className="subscribe-section">
                <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-5.png)' }}></div>
                <div className="auto-container">
                    <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                        <div className="text-box">
                        <h2>{t('subscribe_to_get_updates')}</h2>
                        </div>
                    </div>
                    {/* <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                        <div className="form-inner ml_40">
                        <form method="post" action="/contact">
                            <div className="form-group">
                            <input type="email" name="email" placeholder={t('your_email')} required />
                            <button type="submit" className="theme-btn btn-two">{t('subscribe_now')}</button>
                            </div>
                        </form>
                        </div>
                    </div> */}
                    </div>
                </div>
             </section>
        </>
    )
}
