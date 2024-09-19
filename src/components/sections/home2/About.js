import Link from "next/link";


export default function About() {
    return (
        <> 
            <section className="about-style-two pt_120 pb_120">
                <div className="auto-container">
                    <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_three">
                        <div className="content-box mr_110">
                            <div className="sec-title mb_20">
                            <h6>About US</h6>
                            <h2>The Finance Guide on All Stage of Life.</h2>
                            </div>
                            <div className="text-box mb_40">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking.</p>
                            <ul className="list-style-one clearfix">
                                <li>Improving all types of opportunities</li>
                                <li>Quick solutions for daily problems</li>
                                <li>Community that grows larger</li>
                            </ul>
                            </div>
                            <div className="btn-box">
                            <Link href="/about" className="theme-btn btn-one">Discover More</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image_block_two">
                        <div className="image-box">
                            <div className="image-shape">
                            <div className="shape-1" style={{ backgroundImage: "url(assets/images/shape/shape-11.png)" }}></div>
                            <div className="shape-2" style={{ backgroundImage: "url(assets/images/shape/shape-11.png)" }}></div>
                            </div>
                            <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                <div className="image-inner">
                                <figure className="image mb_30"><img src="assets/images/resource/about-2.jpg" alt="" /></figure>
                                <div className="experience-box">
                                    <h2>25<span>Years</span></h2>
                                    <h5>of Experience in the Finance Service</h5>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                <div className="image-inner">
                                <figure className="image pt_115"><img src="assets/images/resource/about-3.jpg" alt="" /></figure>
                                </div>
                            </div>
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
