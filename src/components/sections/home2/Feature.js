import FeatureSlider01 from "@/components/slider/FeatureSlider01"
import Link from "next/link"


export default function Feature() {
    return (
        <>            
            <section className="feature-style-two">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 title-column">
                        <div className="sec-title light">
                        <h6>Benefits</h6>
                        <h2>Get More <span>Benefits</span> at Our Charge Station.</h2>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                        <div className="content-box pl_160 pr_120">
                        <div className="contact-info">
                            <FeatureSlider01 />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        </>
    )
}
