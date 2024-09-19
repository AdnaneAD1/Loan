import Link from 'next/link'

export default function Features() {
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
                                    <Link href="/service">
                                        Transaction Internationale Sécurisée
                                    </Link>
                                </h4>
                                <p>
                                    Effectuez des transactions internationales
                                    en toute confiance, avec des protocoles de
                                    sécurité avancés garantissant la protection
                                    de vos fonds à chaque étape.
                                </p>
                            </div>
                        </div>
                        <div className="feature-block-one">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon-6"></i>
                                </div>
                                <h4>
                                    <Link href="/service">
                                        Support 24/7 par une Équipe d'Experts
                                    </Link>
                                </h4>
                                <p>
                                    Notre équipe d'experts est disponible 24
                                    heures sur 24 et 7 jours sur 7 pour répondre
                                    à toutes vos questions et résoudre
                                    rapidement vos préoccupations.
                                </p>
                            </div>
                        </div>
                        <div className="feature-block-one">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon-7"></i>
                                </div>
                                <h4>
                                    <Link href="/service">
                                        Frais de Traitement les Plus Bas par
                                        Rapport aux Autres Banques
                                    </Link>
                                </h4>
                                <p>
                                    Profitez des frais de traitement parmi les
                                    plus compétitifs du marché, vous permettant
                                    d'économiser sur chaque transaction
                                    bancaire.
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
                                        Moins de Temps pour l'Approbation des
                                        Prêts
                                    </Link>
                                </h4>
                                <p>
                                    Obtenez l'approbation de vos prêts en un
                                    temps record, avec un processus simple et
                                    rapide conçu pour répondre à vos besoins
                                    financiers urgents.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
