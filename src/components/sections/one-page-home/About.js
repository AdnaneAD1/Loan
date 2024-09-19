import Link from "next/link";

export default function About() {
    return (
        <>            
            <section className="about-section pt_120 pb_120" id="about">
                <div className="pattern-layer rotate-me"></div>
                <div className="auto-container">
                    <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image_block_one">
                        <div className="image-box pr_90 mr_40">
                            <div className="image-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                            <figure className="image"><img src="assets/images/resource/about-1.jpg" alt="" /></figure>
                            <div className="rating-box">
                            <ul className="rating mb_5 clearfix">
                                <li><i className="icon-9"></i></li>
                                <li><i className="icon-9"></i></li>
                                <li><i className="icon-9"></i></li>
                                <li><i className="icon-9"></i></li>
                                <li><i className="icon-9"></i></li>
                            </ul>
                            <h6>5 Star Rating Bank</h6>
                            </div>
                            <div className="experience-box">
                            <div className="inner">
                                <h2>40</h2>
                                <h6>Years of Experience</h6>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_one">
                        <div className="content-box ml_40">
                            <div className="sec-title mb_20">
                            <h6>About US</h6>
                            <h2>Financial Guidance for Every Stage of Life.</h2>
                            </div>
                            <div className="text-box mb_40">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking.</p>
                            </div>
                            <div className="inner-box mb_45">
                            <div className="single-item">
                                <div className="icon-box"><i className="icon-10"></i></div>
                                <h3>Solution Focused</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis tincidunt feugiat</p>
                            </div>
                            <div className="single-item">
                                <div className="icon-box"><i className="icon-11"></i></div>
                                <h3>99.99% Success</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis tincidunt feugiat</p>
                            </div>
                            </div>
                            <div className="btn-box">
                            <Link href="/about" className="theme-btn btn-one">Discover More</Link>
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
