
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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
            <section className="banner-style-three p_relative">
            <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-19.png)' }}></div>
                <Swiper {...swiperOptions} className="banner-carousel">                    
                    <SwiperSlide className="slide-item p_relative">
                        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/banner/banner-7.jpg)' }}></div>
                        <div className="pattern-layer">
                            <div className="pattern-4" style={{ backgroundImage: 'url(assets/images/shape/shape-14.png)' }}></div>
                            <div className="pattern-5" style={{ backgroundImage: 'url(assets/images/shape/shape-15.png)' }}></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                            <h2>Open our Current Account Online</h2>
                            <p>This statistic is based on our average personal current account online opening time from the last 12 months.</p>
                            <div className="btn-box">
                                <Link href="/" className="theme-btn btn-three">
                                Create Account
                                </Link>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/banner/banner-8.jpg)' }}></div>
                        <div className="pattern-layer">
                            <div className="pattern-4" style={{ backgroundImage: 'url(assets/images/shape/shape-14.png)' }}></div>
                            <div className="pattern-5" style={{ backgroundImage: 'url(assets/images/shape/shape-15.png)' }}></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                            <h2>Open our Current Account Online</h2>
                            <p>This statistic is based on our average personal current account online opening time from the last 12 months.</p>
                            <div className="btn-box">
                                <Link href="/" className="theme-btn btn-three">
                                Create Account
                                </Link>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/banner/banner-9.jpg)' }}></div>
                        <div className="pattern-layer">
                            <div className="pattern-4" style={{ backgroundImage: 'url(assets/images/shape/shape-14.png)' }}></div>
                            <div className="pattern-5" style={{ backgroundImage: 'url(assets/images/shape/shape-15.png)' }}></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                            <h2>Open our Current Account Online</h2>
                            <p>This statistic is based on our average personal current account online opening time from the last 12 months.</p>
                            <div className="btn-box">
                                <Link href="/" className="theme-btn btn-three">
                                Create Account
                                </Link>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <div className="owl-nav">
                        <button type="button" className="owl-prev h1p">
                            <span className="icon-5"></span>
                        </button>
                        <button type="button" className="owl-next h1n">
                            <span className="icon-6"></span>
                        </button>
                    </div>
                </Swiper>

            </section>
        </>
    )
}
