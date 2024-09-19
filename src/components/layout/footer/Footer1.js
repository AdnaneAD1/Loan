import Link from 'next/link'

export default function Footer1() {
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
                                        Chez MertoBank, nous mettons la
                                        confiance au centre de nos relations
                                        avec nos clients. Forts de notre
                                        expertise, nous offrons des solutions
                                        financières sûres et adaptées à vos
                                        besoins, tout en garantissant la
                                        protection de vos informations grâce à
                                        des technologies de sécurité avancées.
                                        Notre engagement est de vous accompagner
                                        dans la gestion de votre avenir
                                        financier avec transparence, fiabilité
                                        et
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
                                        <h4>Explorer</h4>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li>
                                                <Link href="/about">
                                                    À Propos
                                                </Link>
                                            </li>
                                            <li>
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
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h4>Liens Utiles</h4>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li>
                                                <Link href="/">
                                                    Carte de Crédit
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    Compte d'Épargne
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    Cartes Cadeaux Digitales
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    Demande de Prêt
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    Application Mobile
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
                                            Trouvez Notre Agence & Distributeur
                                            Automatique
                                        </h4>
                                    </div>
                                    <div className="form-inner">
                                        <form method="post" action="index">
                                            <div className="form-group">
                                                <div className="select-box">
                                                    <select className="wide">
                                                        <option data-display="Agence">
                                                            Agence
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
                                                    Trouver sur la Carte
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
                                Copyright 2023 par{' '}
                                <Link href="/">MertoBank</Link>. Tous droits
                                réservés.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
