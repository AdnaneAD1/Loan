import Link from "next/link"


export default function News() {
    return (
        <>
            
            <section className="news-section pt_120 pb_90">
                <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-6.png)" }}></div>
                    <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-7.png)" }}></div>
                </div>
                <div className="auto-container">
                    <div className="sec-title centred mb_70">
                    <h6>Latest News</h6>
                    <h2>Our Latest Media Update</h2>
                    </div>
                    <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box" style={{ backgroundImage: "url(assets/images/news/news-1.jpg)" }}>
                            <div className="content-box">
                            <span className="post-date"><i className="icon-27"></i>Apr 17, 2022</span>
                            <h3><Link href="/blog-details">Self-Guided Driving & Tours Walk Of Greater City</Link></h3>
                            <ul className="post-info mb_25">
                                <li><i className="icon-28"></i><Link href="/blog-details">Admin</Link></li>
                                <li><i className="icon-29"></i>0 Comment</li>
                            </ul>
                            <div className="btn-box"><Link href="/blog-details" className="theme-btn btn-three">Read More</Link></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box" style={{ backgroundImage: "url(assets/images/news/news-2.jpg)" }}>
                            <div className="content-box">
                            <span className="post-date"><i className="icon-27"></i>Apr 16, 2022</span>
                            <h3><Link href="/blog-details">Assistance For Homes & Properties Real Estate</Link></h3>
                            <ul className="post-info mb_25">
                                <li><i className="icon-28"></i><Link href="/blog-details">Admin</Link></li>
                                <li><i className="icon-29"></i>4 Comment</li>
                            </ul>
                            <div className="btn-box"><Link href="/blog-details" className="theme-btn btn-three">Read More</Link></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box" style={{ backgroundImage: "url(assets/images/news/news-3.jpg)" }}>
                            <div className="content-box">
                            <span className="post-date"><i className="icon-27"></i>Apr 15, 2022</span>
                            <h3><Link href="/blog-details">Long-Term Vision Of Health & Attractive Facility</Link></h3>
                            <ul className="post-info mb_25">
                                <li><i className="icon-28"></i><Link href="/blog-details">Admin</Link></li>
                                <li><i className="icon-29"></i>1 Comment</li>
                            </ul>
                            <div className="btn-box"><Link href="/blog-details" className="theme-btn btn-three">Read More</Link></div>
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
