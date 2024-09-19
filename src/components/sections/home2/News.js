import Link from "next/link"


export default function News() {
    return (
        <> 

            <section className="news-style-two pb_90">
                <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-6.png)' }}></div>
                    <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-7.png)' }}></div>
                </div>
                <div className="auto-container">
                    <div className="sec-title centred mb_70">
                    <h6>Latest News</h6>
                    <h2>Our Latest Media Update</h2>
                    </div>
                    <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><Link href="/blog-details"><img src="assets/images/news/news-4.jpg" alt="" /></Link></figure>
                            <div className="lower-content">
                            <div className="post-date"><h4>10<span>Jan</span></h4></div>
                            <h3><Link href="/blog-details">Self-Guided Driving & Tours Walk Of Greater City</Link></h3>
                            <p>Amet minim mollit duis sit enim aliqua dolor do amet officia. Pellentesque etiam niss...</p>
                            <ul className="post-info">
                                <li><i className="icon-32"></i><Link href="/blog-details">Admin</Link></li>
                                <li><i className="icon-33"></i>0 Comment</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><Link href="/blog-details"><img src="assets/images/news/news-5.jpg" alt="" /></Link></figure>
                            <div className="lower-content">
                            <div className="post-date"><h4>09<span>Jan</span></h4></div>
                            <h3><Link href="/blog-details">Assistance Homes Properties Real Estate</Link></h3>
                            <p>Amet minim mollit duis sit enim aliqua dolor do amet officia. Pellentesque etiam niss...</p>
                            <ul className="post-info">
                                <li><i className="icon-32"></i><Link href="/blog-details">Admin</Link></li>
                                <li><i className="icon-33"></i>3 Comment</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><Link href="/blog-details"><img src="assets/images/news/news-6.jpg" alt="" /></Link></figure>
                            <div className="lower-content">
                            <div className="post-date"><h4>08<span>Jan</span></h4></div>
                            <h3><Link href="/blog-details">How to Manage Business’s Online Reputation</Link></h3>
                            <p>Amet minim mollit duis sit enim aliqua dolor do amet officia. Pellentesque etiam niss...</p>
                            <ul className="post-info">
                                <li><i className="icon-32"></i><Link href="/blog-details">Admin</Link></li>
                                <li><i className="icon-33"></i>4 Comment</li>
                            </ul>
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
