import Link from "next/link"


export default function About() {
    return (
        <>
            <section className="about-section pt_120 pb_120">
                <div className="pattern-layer rotate-me"></div>
                <div className="auto-container">
                    <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image_block_three">
                        <div className="image-box pr_110 mr_20">
                            <div className="image-shape">
                            <div className="shape-1" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                            <div className="shape-2" style={{ backgroundImage: 'url(assets/images/shape/shape-11.png)' }}></div>
                            </div>
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
                            <ul className="thumb-list">
                                <li><img src="assets/images/resource/thumb-1.png" alt="" /></li>
                                <li><img src="assets/images/resource/thumb-2.png" alt="" /></li>
                                <li><img src="assets/images/resource/thumb-3.png" alt="" /></li>
                                <li><img src="assets/images/resource/thumb-4.png" alt="" /></li>
                            </ul>
                            </div>
                            <div className="experience-box">
                            <div className="inner">
                                <h2>25+<span>Years</span></h2>
                                <h5> of Experience <br /> in the Finance <br /> Service</h5>
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
