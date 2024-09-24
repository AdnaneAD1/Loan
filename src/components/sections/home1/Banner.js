'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

export default function Banner() {
    return (
        <>
            <section className="banner-section p_relative">
                <Swiper {...swiperOptions} className="banner-carousel">
                    <SwiperSlide className="slide-item p_relative">
                        <div
                            className="bg-layer"
                            style={{
                                backgroundImage:
                                    'url(assets/images/banner/banner-1.jpg)',
                            }}></div>
                        <div className="pattern-layer">
                            <div
                                className="pattern-1"
                                style={{
                                    backgroundImage:
                                        'url(assets/images/shape/shape-1.png)',
                                }}></div>
                            <div
                                className="pattern-2"
                                style={{
                                    backgroundImage:
                                        'url(assets/images/shape/shape-2.png)',
                                }}></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h2>
                                    Ouvrez votre <span>Compte Courant</span> en
                                    Ligne
                                </h2>
                                <p>
                                    Cette statistique est basée sur notre temps
                                    moyen d'ouverture de compte courant
                                    personnel en ligne au cours des 12 derniers
                                    mois.
                                </p>

                                <div className="btn-box">
                                    <Link
                                        href="/demande"
                                        className="theme-btn btn-one">
                                        Faire une demande de prêt
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div
                            className="bg-layer"
                            style={{
                                backgroundImage:
                                    'url(assets/images/banner/banner-2.jpg)',
                            }}></div>
                        <div className="pattern-layer">
                            <div
                                className="pattern-1"
                                style={{
                                    backgroundImage:
                                        'url(assets/images/shape/shape-1.png)',
                                }}></div>
                            <div
                                className="pattern-2"
                                style={{
                                    backgroundImage:
                                        'url(assets/images/shape/shape-2.png)',
                                }}></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h2>
                                    Ouvrez votre <span>Compte Courant</span> en
                                    Ligne
                                </h2>
                                <p>
                                    Cette statistique est basée sur notre temps
                                    moyen d'ouverture de compte courant
                                    personnel en ligne au cours des 12 derniers
                                    mois.
                                </p>
                                <div className="btn-box">
                                    <Link
                                        href="/demande"
                                        className="theme-btn btn-one">
                                        Faire une demande de prêt
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div
                            className="bg-layer"
                            style={{
                                backgroundImage:
                                    'url(assets/images/banner/banner-3.jpg)',
                            }}></div>
                        <div className="pattern-layer">
                            <div
                                className="pattern-1"
                                style={{
                                    backgroundImage:
                                        'url(assets/images/shape/shape-1.png)',
                                }}></div>
                            <div
                                className="pattern-2"
                                style={{
                                    backgroundImage:
                                        'url(assets/images/shape/shape-2.png)',
                                }}></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h2>
                                    Ouvrez votre <span>Compte Courant</span> en
                                    Ligne
                                </h2>
                                <p>
                                    Cette statistique est basée sur notre temps
                                    moyen d'ouverture de compte courant
                                    personnel en ligne au cours des 12 derniers
                                    mois.
                                </p>
                                <div className="btn-box">
                                    <Link
                                        href="/demande"
                                        className="theme-btn btn-one">
                                        Faire une demande de prêt
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <div className="owl-nav">
                        <button type="button" className="owl-prev h1p">
                            <span className="icon-3"></span>
                        </button>
                        <button type="button" className="owl-next h1n">
                            <span className="icon-4"></span>
                        </button>
                    </div>
                </Swiper>
            </section>
        </>
    )
}
