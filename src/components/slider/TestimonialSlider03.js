'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider03() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        <div className="inner-box">
                            <div className="author-box">
                                <figure className="thumb-box">
                                    <img src="assets/images/resource/testimonial-4.png" alt="" />
                                </figure>
                                <h4>Julien Anthor</h4>
                                <span className="designation">Manager</span>
                            </div>
                            <ul className="rating mb_15 clearfix">
                                <li><i className="icon-9"></i></li>
                                <li><i className="icon-9"></i></li>
                                <li><i className="icon-9"></i></li>
                                <li><i className="icon-9"></i></li>
                                <li><i className="icon-9"></i></li>
                            </ul>
                            <p>
                            “Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque etiam nis quis at arcu nunc neque ac integer sit lobortis diam semper nulla duis in blandit.”
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        <div className="inner-box">
                            <div className="author-box">
                            <figure className="thumb-box">
                                <img src="assets/images/resource/testimonial-5.png" alt="" />
                            </figure>
                            <h4>Rolier Demonil</h4>
                            <span className="designation">Manager</span>
                            </div>
                            <ul className="rating mb_15 clearfix">
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            </ul>
                            <p>
                            “Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque etiam nis quis at arcu nunc neque ac integer sit lobortis diam semper nulla duis in blandit.”
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        <div className="inner-box">
                            <div className="author-box">
                                <figure className="thumb-box">
                                    <img src="assets/images/resource/testimonial-4.png" alt="" />
                                </figure>
                                <h4>Julien Anthor</h4>
                                <span className="designation">Manager</span>
                            </div>
                            <ul className="rating mb_15 clearfix">
                                <li><i className="icon-9"></i></li>
                                <li><i className="icon-9"></i></li>
                                <li><i className="icon-9"></i></li>
                                <li><i className="icon-9"></i></li>
                                <li><i className="icon-9"></i></li>
                            </ul>
                            <p>
                            “Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque etiam nis quis at arcu nunc neque ac integer sit lobortis diam semper nulla duis in blandit.”
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        <div className="inner-box">
                            <div className="author-box">
                            <figure className="thumb-box">
                                <img src="assets/images/resource/testimonial-5.png" alt="" />
                            </figure>
                            <h4>Rolier Demonil</h4>
                            <span className="designation">Manager</span>
                            </div>
                            <ul className="rating mb_15 clearfix">
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            <li><i className="icon-9"></i></li>
                            </ul>
                            <p>
                            “Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque etiam nis quis at arcu nunc neque ac integer sit lobortis diam semper nulla duis in blandit.”
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
