import Link from 'next/link'
import {useTranslations} from 'next-intl'

export default function Footer1() {
    const t = useTranslations()
    return (
        <>
            <footer className="main-footer">
                <div className="widget-section">
                    <div className="pattern-layer">
                        <div
                            className="pattern-1"
                            style={{
                                backgroundImage:
                                    'url(assets/images/shape/shape-8.png)',
                            }}></div>
                        <div
                            className="pattern-2"
                            style={{
                                backgroundImage:
                                    'url(assets/images/shape/shape-9.png)',
                            }}></div>
                    </div>
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget logo-widget">
                                    <figure className="footer-logo">
                                        <Link href="/">
                                            <img
                                                src="assets/images/logo-2.png"
                                                alt=""
                                            />
                                        </Link>
                                    </figure>
                                    <p>
                                        {t('pfooter')}
                                    </p>
                                    <ul className="social-links">
                                        <li>
                                            <Link href="/">
                                                <i className="fab fa-facebook-f"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <i className="fab fa-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <i className="fab fa-instagram"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget ml_40">
                                    <div className="widget-title">
                                        <h4>{t('explore')}</h4>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li>
                                                <Link href="/about">
                                                    {t('about')}
                                                </Link>
                                            </li>
                                            {/* <li>
                                                <Link href="/">
                                                    Témoignages
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/career">
                                                    Carrières
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/career-details">
                                                    Détails de Carrière
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/faq">FAQ</Link>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h4>{t('usefullink')}</h4>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li>
                                                <Link href="/">
                                                    {t('creditCard')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    {t('savingsAccount')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    {t('giftCards')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    {t('loanRequest')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    {t('mobileApp')}
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget contact-widget">
                                    <div className="widget-title">
                                        <h4>
                                            {t('findBranch')}
                                        </h4>
                                    </div>
                                    <div className="form-inner">
                                        <form method="post" action="index">
                                            <div className="form-group">
                                                <div className="select-box">
                                                    <select className="wide">
                                                        <option data-display="Agence">
                                                            {t('agency')}
                                                        </option>
                                                        <option value="1">
                                                            Californie
                                                        </option>
                                                        <option value="2">
                                                            Manchester
                                                        </option>
                                                        <option value="3">
                                                            New York
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="location"
                                                    placeholder="Localisation"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <button
                                                    type="submit"
                                                    className="theme-btn btn-one">
                                                    {t('findOnMap')}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom centred">
                    <div className="auto-container">
                        <div className="copyright">
                            <p>
                                Copyright 2024 par{' '}
                                <Link href="/">MetroBnque</Link>. {t('copyright')}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
