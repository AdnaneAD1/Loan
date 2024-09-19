import TestimonialSlider02 from '@/components/slider/TestimonialSlider02'

export default function Testimonial() {
    return (
        <>
            {/* testimonial-style-two */}
            <section className="testimonial-style-two pt_120 pb_120">
                        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/testimonial-bg-2.jpg)' }}></div>
                        <div className="auto-container">
                            <div className="row clearfix">
                            <div className="col-lg-4 col-md-12 col-sm-12 title-column">
                                <div className="sec-title mr_70">
                                <h6>Testimonials</h6>
                                <h2>Love from Happy Clients</h2>
                                <p>Amet dui scelerisque habitant eget tincidunt facilisis pretium lorem ipsum dilore. </p>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                <div className="content-box">
                                    {/*Theme Carousel*/}
                                    <TestimonialSlider02 />                        
                                </div>
                            </div>
                            </div>
                        </div>
            </section>
            {/* testimonial-style-two end */}
        </>
    )
}
