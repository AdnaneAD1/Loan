import TestimonialSlider01 from '@/components/slider/TestimonialSlider01'

export default function Testimonial() {
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
                        <h6>Témoignages</h6>
                        <h2>Avis de Nos Clients</h2>
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
