import Link from 'next/link'
import {useTranslations} from 'next-intl'

export default function About() {
    const t = useTranslations()
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
                                        <h6>{t('ratingTitle')}</h6>
                                    </div>
                                    <div className="experience-box">
                                        <div className="inner">
                                            <h2>{t('experienceYears')}</h2>
                                            <h6>{t('experienceSubtitle')}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_one">
                                <div className="content-box ml_40">
                                    <div className="sec-title mb_20">
                                        <h6>{t('aboutTitle')}</h6>
                                        <h2>
                                            {t('aboutSubtitle')}
                                        </h2>
                                    </div>
                                    <div className="text-box mb_40">
                                        <p>
                                            {t('aboutText')}
                                        </p>
                                    </div>
                                    <div className="inner-box mb_45">
                                        <div className="single-item">
                                            <div className="icon-box">
                                                <i className="icon-10"></i>
                                            </div>
                                            <h3>{t('solutionTitle')}</h3>
                                            <p>
                                                {t('solutionText')}
                                            </p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box">
                                                <i className="icon-11"></i>
                                            </div>
                                            <h3>{t('successTitle')}</h3>
                                            <p>
                                                {t('successText')}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <Link
                                            href="/about"
                                            className="theme-btn btn-one">
                                            {t('btnDiscoverMore')}
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
