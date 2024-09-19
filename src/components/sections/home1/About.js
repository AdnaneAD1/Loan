import Link from 'next/link'

export default function About() {
    return (
        <>
            <section className="about-section pt_120 pb_120">
                <div className="pattern-layer rotate-me"></div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_one">
                                <div className="image-box pr_90 mr_40">
                                    <div
                                        className="image-shape"
                                        style={{
                                            backgroundImage:
                                                'url(assets/images/shape/shape-3.png)',
                                        }}></div>
                                    <figure className="image">
                                        <img
                                            src="assets/images/resource/about-1.jpg"
                                            alt=""
                                        />
                                    </figure>
                                    <div className="rating-box">
                                        <ul className="rating mb_5 clearfix">
                                            <li>
                                                <i className="icon-9"></i>
                                            </li>
                                            <li>
                                                <i className="icon-9"></i>
                                            </li>
                                            <li>
                                                <i className="icon-9"></i>
                                            </li>
                                            <li>
                                                <i className="icon-9"></i>
                                            </li>
                                            <li>
                                                <i className="icon-9"></i>
                                            </li>
                                        </ul>
                                        <h6>Banque Évaluée 5 Étoiles</h6>
                                    </div>
                                    <div className="experience-box">
                                        <div className="inner">
                                            <h2>40</h2>
                                            <h6>Années d'Expérience</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_one">
                                <div className="content-box ml_40">
                                    <div className="sec-title mb_20">
                                        <h6>À Propos de Nous</h6>
                                        <h2>
                                            Conseils Financiers pour Chaque
                                            Étape de la Vie.
                                        </h2>
                                    </div>
                                    <div className="text-box mb_40">
                                        <p>
                                            "Nous offrons des conseils
                                            financiers personnalisés pour vous
                                            accompagner tout au long de votre
                                            vie, que vous soyez au début de
                                            votre carrière, en pleine croissance
                                            ou en préparation pour la retraite.
                                            Notre expertise vous aide à
                                            atteindre vos objectifs financiers
                                            avec confiance."
                                        </p>
                                    </div>
                                    <div className="inner-box mb_45">
                                        <div className="single-item">
                                            <div className="icon-box">
                                                <i className="icon-10"></i>
                                            </div>
                                            <h3>Orienté Solution</h3>
                                            <p>
                                                Nous nous concentrons sur des
                                                solutions pratiques et efficaces
                                                pour répondre à vos besoins
                                                financiers. Notre approche est
                                                axée sur la résolution rapide et
                                                intelligente des problèmes pour
                                                garantir votre satisfaction.
                                            </p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box">
                                                <i className="icon-11"></i>
                                            </div>
                                            <h3>99,99% de Succès</h3>
                                            <p>
                                                Nous garantissons un taux de
                                                succès exceptionnel de 99,99%
                                                grâce à notre expertise et à
                                                notre approche rigoureuse.
                                                Chaque étape de votre parcours
                                                financier est soigneusement
                                                gérée pour assurer des résultats
                                                positifs.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <Link
                                            href="/about"
                                            className="theme-btn btn-one">
                                            Découvrir Plus
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
