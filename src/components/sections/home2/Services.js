'use client'
import Link from "next/link"
import { useState } from "react"


export default function service() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>


            <section className="service-style-two pb_120">
                <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/service-bg-2.jpg)' }}></div>
                <div className="auto-container">
                    <div className="sec-title centred mb_70">
                    <h6>Our Services</h6>
                    <h2>Online Banking at Fingertips</h2>
                    </div>
                    <div className="tabs-box">
                        <div className="tab-btn-box p_relative mb_100">
                            <ul className="tab-btns tab-buttons" role="tablist">
                                <li className="nav-link" onClick={() => handleOnClick(1)}>
                                    <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}><span>Digital Banking</span></a>
                                </li>
                                <li className="nav-item" onClick={() => handleOnClick(2)}>
                                    <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}><span>Insurance Policies</span></a>
                                </li>
                                <li className="nav-item" onClick={() => handleOnClick(3)}>
                                    <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}><span>All kind of Loans</span></a>
                                </li>
                                <li className="nav-item" onClick={() => handleOnClick(4)}>
                                    <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}><span>Bank Accounts</span></a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                            <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content_block_four">
                                    <div className="content-box mr_110">
                                        <h2>Digital Banking</h2>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking.
                                        </p>
                                        <ul className="list-item mb_40 clearfix">
                                        <li>Background Check</li>
                                        <li>Quick Response</li>
                                        <li>Free Consultation</li>
                                        <li>Over 20 Years Experience</li>
                                        <li>Expert Agents</li>
                                        </ul>
                                        <Link href="/service-details" className="theme-btn btn-one">
                                        Discover More
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box ml_40">
                                    <div className="image-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                                    <figure className="image">
                                        <img src="assets/images/service/service-1.jpg" alt="" />
                                    </figure>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div className="content_block_four">
                                        <div className="content-box mr_110">
                                            <h2>Insurance Policies</h2>
                                            <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking.
                                            </p>
                                            <ul className="list-item mb_40 clearfix">
                                            <li>Background Check</li>
                                            <li>Quick Response</li>
                                            <li>Free Consultation</li>
                                            <li>Over 20 Years Experience</li>
                                            <li>Expert Agents</li>
                                            </ul>
                                            <Link href="/service-details-3" className="theme-btn btn-one">
                                            Discover More
                                            </Link>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div className="image-box ml_40">
                                        <div className="image-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                                        <figure className="image">
                                            <img src="assets/images/service/service-2.jpg" alt="" />
                                        </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div className="content_block_four">
                                            <div className="content-box mr_110">
                                                <h2>All kind of Loans</h2>
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking.
                                                </p>
                                                <ul className="list-item mb_40 clearfix">
                                                    <li>Background Check</li>
                                                    <li>Quick Response</li>
                                                    <li>Free Consultation</li>
                                                    <li>Over 20 Years Experience</li>
                                                    <li>Expert Agents</li>
                                                </ul>
                                                <Link href="/service-details-7" className="theme-btn btn-one">
                                                Discover More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box ml_40">
                                    <div className="image-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                                    <figure className="image">
                                        <img src="assets/images/service/service-3.jpg" alt="" />
                                    </figure>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div className="content_block_four">
                                            <div className="content-box mr_110">
                                                <h2>Bank Accounts</h2>
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking.
                                                </p>
                                                <ul className="list-item mb_40 clearfix">
                                                    <li>Background Check</li>
                                                    <li>Quick Response</li>
                                                    <li>Free Consultation</li>
                                                    <li>Over 20 Years Experience</li>
                                                    <li>Expert Agents</li>
                                                </ul>
                                                <Link href="/service-details-5" className="theme-btn btn-one"> Discover More </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div className="image-box ml_40">
                                        <div className="image-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                                        <figure className="image">
                                            <img src="assets/images/service/service-4.jpg" alt="" />
                                        </figure>
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

















            
