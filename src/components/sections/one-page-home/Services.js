'use client'
import Link from "next/link"
import { useState } from "react"


export default function Pricing() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>            
            <section className="service-section pt_120 pb_90" id="service">
                <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/service-bg.jpg)' }}></div>
                <div className="auto-container">
                    <div className="sec-title centred mb_60">
                    <h6>Our Services</h6>
                    <h2>Online Banking at Your <br />Fingertips</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-12"></i></div>
                                        <h4><Link href="/service-details">Digital Banking</Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>Bank & savings accounts</li>
                                            <li>Credit cards</li>
                                            <li>Personal loans</li>
                                        </ul>
                                    </div>
                                    </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="shape"></div>
                                <div className="icon-box"><i className="icon-13"></i></div>
                                <h4><Link href="/service-details-2">Mobile & Web Banking</Link></h4>
                                <ul className="list-item clearfix">
                                    <li>Instant Access</li>
                                    <li>Savings Fixed Term</li>
                                    <li>Savings Instant</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="shape"></div>
                                <div className="icon-box"><i className="icon-14"></i></div>
                                <h4><Link href="/service-details-3">Insurance Policies</Link></h4>
                                <ul className="list-item clearfix">
                                    <li>Pet insurance</li>
                                    <li>Transport Insurance</li>
                                    <li>Accident insurance</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one wow fadeInUp animated" data-wow-delay="900ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="shape"></div>
                                <div className="icon-box"><i className="icon-15"></i></div>
                                <h4><Link href="/service-details-4">Home & Property Loan</Link></h4>
                                <ul className="list-item clearfix">
                                    <li>Residential Mortgages</li>
                                    <li>Buy-to-let Mortgages</li>
                                    <li>Building Mortgages</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="shape"></div>
                                <div className="icon-box"><i className="icon-16"></i></div>
                                <h4><Link href="/service-details-5">All Bank Account</Link></h4>
                                <ul className="list-item clearfix">
                                    <li>nstant Access Savings</li>
                                    <li>Instant Access Cash</li>
                                    <li>Young Savers Account</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="shape"></div>
                                <div className="icon-box"><i className="icon-17"></i></div>
                                <h4><Link href="/service-details-6">borrowing accounts</Link></h4>
                                <ul className="list-item clearfix">
                                    <li>Bank Credit Card</li>
                                    <li>Setter personal loan</li>
                                    <li>Overdraft</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="shape"></div>
                                <div className="icon-box"><i className="icon-18"></i></div>
                                <h4><Link href="/service-details-7">Private Banking</Link></h4>
                                <ul className="list-item clearfix">
                                    <li>Dedicated personal service</li>
                                    <li>Specialist teams</li>
                                    <li>Tailored products</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one wow fadeInUp animated" data-wow-delay="900ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="shape"></div>
                                <div className="icon-box"><i className="icon-19"></i></div>
                                <h4><Link href="/service-details-8">Fixed term accounts</Link></h4>
                                <ul className="list-item clearfix">
                                    <li>Fixed Term Saving</li>
                                    <li>Fixed Rate Cash</li>
                                    <li>Resume your Current</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
