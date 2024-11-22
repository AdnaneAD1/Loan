import Link from 'next/link'
import {useTranslations} from 'next-intl'

export default function Features() {
    const t = useTranslations()
    return (
        <>
            <section className="feature-section">
                <div className="auto-container">
                    <div
                        className="inner-container clearfix wow fadeInLeft animated"
                        data-wow-delay="00ms"
                        data-wow-duration="1500ms">
                        <div className="feature-block-one">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon-5"></i>
                                </div>
                                <h4>
                                    <Link href="/">
                                        {t('transactionTitle')}
                                    </Link>
                                </h4>
                                <p>
                                    {t('transactionDescription')}
                                </p>
                            </div>
                        </div>
                        <div className="feature-block-one">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon-6"></i>
                                </div>
                                <h4>
                                    <Link href="/">
                                        {t('supportTitle')}
                                    </Link>
                                </h4>
                                <p>
                                    {t('supportDescription')}
                                </p>
                            </div>
                        </div>
                        <div className="feature-block-one">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon-7"></i>
                                </div>
                                <h4>
                                    <Link href="/">
                                        {t('feesTitle')}
                                    </Link>
                                </h4>
                                <p>
                                    {t('feesDescription')}
                                </p>
                            </div>
                        </div>
                        <div className="feature-block-one">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon-8"></i>
                                </div>
                                <h4>
                                    <Link href="/service">
                                        {t('loanApprovalTitle')}
                                    </Link>
                                </h4>
                                <p>
                                    {t('loanApprovalDescription')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
