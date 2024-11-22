'use client'
import Link from "next/link"
import { useState } from "react"
import {useTranslations} from 'next-intl'


export default function Pricing() {
    const t = useTranslations()
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
    <section className="service-section pt_120 pb_90">
        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/service-bg.jpg)' }}></div>
        <div className="auto-container">
            <div className="sec-title centred mb_60">
                <h6>{t("our_services")}</h6>
                <h2>{t("online_banking_at_your_fingertips")}</h2>
            </div>
            <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape"></div>
                            <div className="icon-box"><i className="icon-12"></i></div>
                            <h4><Link href="/service-details">{t("digital_banking")}</Link></h4>
                            <ul className="list-item clearfix">
                                <li>{t('bank_accounts_and_savings')}</li>
                                <li>{t('credit_cards')}</li>
                                <li>{t('personal_loans')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape"></div>
                            <div className="icon-box"><i className="icon-13"></i></div>
                            <h4><Link href="/service-details-2">{t('mobile_web_banking')}</Link></h4>
                            <ul className="list-item clearfix">
                                <li>{t('InstantAccess')}</li>
                                <li>{t('instant_access_savings')}</li>
                                <li>{t('fixed_term_savings')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape"></div>
                            <div className="icon-box"><i className="icon-14"></i></div>
                            <h4><Link href="/service-details-3">{t('insurance_policies')}</Link></h4>
                            <ul className="list-item clearfix">
                                <li>{t('pet_insurance')}</li>
                                <li>{t('transport_insurance')}</li>
                                <li>{t('accident_insurance')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="900ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape"></div>
                            <div className="icon-box"><i className="icon-15"></i></div>
                            <h4><Link href="/service-details-4">{t('mortgage_property_loans')}</Link></h4>
                            <ul className="list-item clearfix">
                                <li>{t('residential_mortgages')}</li>
                                <li>{t('rental_mortgages')}</li>
                                <li>{t('construction_mortgages')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape"></div>
                            <div className="icon-box"><i className="icon-16"></i></div>
                            <h4><Link href="/service-details-5">{t('all_bank_accounts')}</Link></h4>
                            <ul className="list-item clearfix">
                                <li>{t('SavingswithInstantAccess')}</li>
                                <li>{t('instant_access_liquidity')}</li>
                                <li>{t('youth_savings_account')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape"></div>
                            <div className="icon-box"><i className="icon-17"></i></div>
                            <h4><Link href="/service-details-6">{t('credit_accounts')}</Link></h4>
                            <ul className="list-item clearfix">
                                <li>{t('bank_credit_card')}</li>
                                <li>{t('personal_loan')}</li>
                                <li>{t('overdraft')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape"></div>
                            <div className="icon-box"><i className="icon-18"></i></div>
                            <h4><Link href="/service-details-7">{t('private_banking')}</Link></h4>
                            <ul className="list-item clearfix">
                                <li>{t('dedicated_personal_service')}</li>
                                <li>{t('specialized_teams')}</li>
                                <li>{t('customized_products')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="900ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape"></div>
                            <div className="icon-box"><i className="icon-19"></i></div>
                            <h4><Link href="/service-details-8">{t('fixed_term_accounts')}</Link></h4>
                            <ul className="list-item clearfix">
                                <li>{t('FixedTermSavings')}</li>
                                <li>{t('liquidity_at_fixed_rate')}</li>
                                <li>{t('reopen_your_current_account')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>

    )
}
