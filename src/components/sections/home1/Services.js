'use client'
import Link from "next/link"
import { useState } from "react"


export default function Pricing() {
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
                <h6>Nos Services</h6>
                <h2>La Banque en Ligne à Portée de Main</h2>
            </div>
            <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape"></div>
                            <div className="icon-box"><i className="icon-12"></i></div>
                            <h4><Link href="/service-details">Banque Numérique</Link></h4>
                            <ul className="list-item clearfix">
                                <li>Comptes bancaires et d'épargne</li>
                                <li>Cartes de crédit</li>
                                <li>Prêts personnels</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape"></div>
                            <div className="icon-box"><i className="icon-13"></i></div>
                            <h4><Link href="/service-details-2">Banque Mobile & Web</Link></h4>
                            <ul className="list-item clearfix">
                                <li>Accès Instantané</li>
                                <li>Épargne à Terme Fixe</li>
                                <li>Épargne Instantanée</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape"></div>
                            <div className="icon-box"><i className="icon-14"></i></div>
                            <h4><Link href="/service-details-3">Polices d'Assurance</Link></h4>
                            <ul className="list-item clearfix">
                                <li>Assurance Animaux</li>
                                <li>Assurance Transport</li>
                                <li>Assurance Accident</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="900ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape"></div>
                            <div className="icon-box"><i className="icon-15"></i></div>
                            <h4><Link href="/service-details-4">Prêt Immobilier & Propriété</Link></h4>
                            <ul className="list-item clearfix">
                                <li>Hypothèques Résidentielles</li>
                                <li>Hypothèques Locatives</li>
                                <li>Hypothèques de Construction</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape"></div>
                            <div className="icon-box"><i className="icon-16"></i></div>
                            <h4><Link href="/service-details-5">Tous les Comptes Bancaires</Link></h4>
                            <ul className="list-item clearfix">
                                <li>Épargne avec Accès Instantané</li>
                                <li>Liquidités avec Accès Instantané</li>
                                <li>Compte Jeune Épargnant</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape"></div>
                            <div className="icon-box"><i className="icon-17"></i></div>
                            <h4><Link href="/service-details-6">Comptes de Crédit</Link></h4>
                            <ul className="list-item clearfix">
                                <li>Carte de Crédit Bancaire</li>
                                <li>Prêt Personnel</li>
                                <li>Découvert</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape"></div>
                            <div className="icon-box"><i className="icon-18"></i></div>
                            <h4><Link href="/service-details-7">Banque Privée</Link></h4>
                            <ul className="list-item clearfix">
                                <li>Service Personnel Dédié</li>
                                <li>Équipes Spécialisées</li>
                                <li>Produits Personnalisés</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="900ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape"></div>
                            <div className="icon-box"><i className="icon-19"></i></div>
                            <h4><Link href="/service-details-8">Comptes à Terme Fixe</Link></h4>
                            <ul className="list-item clearfix">
                                <li>Épargne à Terme Fixe</li>
                                <li>Liquidités à Taux Fixe</li>
                                <li>Reprenez Votre Compte Courant</li>
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
