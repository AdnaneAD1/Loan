import CounterUp from "@/components/elements/CounterUp"
import {useTranslations} from 'next-intl'


export default function Funfacts() {
    const t = useTranslations()
    return (
        <>
    <section className="funfact-section">
        <div className="auto-container">
            <div className="inner-container clearfix">
                <div className="funfact-block-one">
                    <div className="inner-box">
                        <div className="icon-box"><i className="icon-21"></i></div>
                        <div className="count-outer count-box">
                            <CounterUp end={50} /><span>k+</span>
                        </div>
                        <p>{t('clients')}</p>
                    </div>
                </div>
                <div className="funfact-block-one">
                    <div className="inner-box">
                        <div className="icon-box"><i className="icon-22"></i></div>
                        <div className="count-outer count-box">
                            <CounterUp end={90} /><span>Md</span>
                        </div>
                        <p>{t('transactions')}</p>
                    </div>
                </div>
                <div className="funfact-block-one">
                    <div className="inner-box">
                        <div className="icon-box"><i className="icon-23"></i></div>
                        <div className="count-outer count-box">
                            <CounterUp end={40} /><span>+</span>
                        </div>
                        <p>{t('branches')}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>

    )
}
