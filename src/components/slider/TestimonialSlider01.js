'use client'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import {useTranslations} from 'next-intl'

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
    const t = useTranslations()
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
                            <h4>{t('testimonial_1_name')}</h4>
                            <span className="designation">{t('testimonial_1_designation')}</span>
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
                                “{t('testimonial_1_feedback')}”
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
                            <h4>{t('testimonial_2_name')}</h4>
                            <span className="designation">{t('testimonial_2_designation')}</span>
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
                                “{t('testimonial_2_feedback')}”
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
                            <h4>{t('testimonial_3_name')}</h4>
                            <span className="designation">{t('testimonial_3_designation')}</span>
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
                                “{t('testimonial_3_feedback')}”
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
                            <h4>{t('testimonial_4_name')}</h4>
                            <span className="designation">{t('testimonial_4_designation')}</span>
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
                                “{t('testimonial_4_feedback')}”
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
                            <h4>{t('testimonial_5_name')}</h4>
                            <span className="designation">{t('testimonial_5_designation')}</span>
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
                                “{t('testimonial_5_feedback')}”
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
                            <h4>{t('testimonial_6_name')}</h4>
                            <span className="designation">{t('testimonial_6_designation')}</span>
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
                                “{t('testimonial_6_feedback')}”
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
