'use client'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
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

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    },
}
export default function TestimonialSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <figure className="thumb-box">
                                <img
                                    src="assets/images/resource/testimonial-1.png"
                                    alt=""
                                />
                            </figure>
                            <h4>Sandra Bullock</h4>
                            <span className="designation">Manageur</span>
                            <ul className="rating mb_6 clearfix">
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                            </ul>
                            <p>
                                “Le prêt personnel a été approuvé rapidement, et
                                le taux d'intérêt était très attractif. L'équipe
                                a répondu à toutes mes questions et a rendu le
                                processus très simple. Merci pour ce service
                                impeccable !”
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <figure className="thumb-box">
                                <img
                                    src="assets/images/resource/testimonial-2.png"
                                    alt=""
                                />
                            </figure>
                            <h4>Julien Anthor</h4>
                            <span className="designation">Commercant</span>
                            <ul className="rating mb_6 clearfix">
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                            </ul>
                            <p>
                                Très satisfait de la gestion de mes
                                investissements. Les conseils financiers fournis
                                par l'équipe sont toujours avisés et adaptés à
                                mes besoins. Un service de qualité que je
                                recommande sans hésiter
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <figure className="thumb-box">
                                <img
                                    src="assets/images/resource/testimonial-3.png"
                                    alt=""
                                />
                            </figure>
                            <h4>Rolier Demonil</h4>
                            <span className="designation">Enseignant</span>
                            <ul className="rating mb_6 clearfix">
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                            </ul>
                            <p>
                                “Le service de banque mobile est fantastique. Je
                                peux gérer mes finances facilement depuis mon
                                téléphone, et les fonctionnalités sont très
                                intuitives. C'est un réel plaisir d'utiliser
                                leur application.”
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <figure className="thumb-box">
                                <img
                                    src="assets/images/resource/testimonial-1.png"
                                    alt=""
                                />
                            </figure>
                            <h4>Sandra Bullock</h4>
                            <span className="designation">Assitant Manageur</span>
                            <ul className="rating mb_6 clearfix">
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                            </ul>
                            <p>
                                “Excellente expérience avec le prêt immobilier.
                                L'équipe a été très professionnelle et m'a guidé
                                tout au long du processus. Les conditions
                                étaient très compétitives, et je suis très
                                satisfait de mon choix.”
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <figure className="thumb-box">
                                <img
                                    src="assets/images/resource/testimonial-2.png"
                                    alt=""
                                />
                            </figure>
                            <h4>Julien Anthor</h4>
                            <span className="designation">Manager</span>
                            <ul className="rating mb_6 clearfix">
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                            </ul>
                            <p>
                                “je suis impressionné par la rapidité avec
                                laquelle ma demande de crédit a été traitée. La
                                transparence des informations et
                                l'accompagnement personnalisé ont rendu le
                                processus très fluide. Je recommande vivement
                                cette banque.”
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <figure className="thumb-box">
                                <img
                                    src="assets/images/resource/testimonial-3.png"
                                    alt=""
                                />
                            </figure>
                            <h4>Rolier Demonil</h4>
                            <span className="designation">Particulier</span>
                            <ul className="rating mb_6 clearfix">
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                                <li>
                                    <i className="icon-26"></i>
                                </li>
                            </ul>
                            <p>
                                “j'ai ouvert un compte en ligne avec cette
                                banque, et tout a été extrêmement facile et
                                rapide. Le service client est exceptionnel, et
                                je me sens en sécurité avec leurs options de
                                sécurité en ligne. Je recommande vivement !.”
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
