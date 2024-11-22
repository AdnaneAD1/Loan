import TestimonialSlider01 from '@/components/slider/TestimonialSlider01'
import {useTranslations} from 'next-intl'

export default function Testimonial() {
    const t = useTranslations()
    return (
        <>
            <section className="testimonial-section centred pt_120 pb_120">
                <div
                    className="bg-layer"
                    style={{
                        backgroundImage:
                            'url(assets/images/background/testimonial-bg.jpg)',
                    }}></div>
                <div className="auto-container">
                    <div className="sec-title mb_70">
                        <h6>{t('testimonials')}</h6>
                        <h2>{t('client_reviews')}</h2>
                    </div>
                    <div className="content-box">
                        {/*Theme Carousel*/}
                        <TestimonialSlider01 />
                    </div>
                </div>
            </section>
        </>
    )
}
