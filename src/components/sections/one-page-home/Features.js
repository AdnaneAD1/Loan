import Link from "next/link"


export default function Features() {
    return (
        <>
        
            <section className="feature-section">
            <div className="auto-container">
                <div className="inner-container clearfix wow fadeInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="feature-block-one">
                        <div className="inner-box">
                            <div className="icon-box"><i className="icon-5"></i></div>
                            <h4><Link href="/service">Secure International Transaction</Link></h4>
                            <p>Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.</p>
                        </div>
                    </div>
                    <div className="feature-block-one">
                        <div className="inner-box">
                            <div className="icon-box"><i className="icon-6"></i></div>
                            <h4><Link href="/service">24/7 Support from the Expert Team</Link></h4>
                            <p>Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.</p>
                        </div>
                    </div>
                    <div className="feature-block-one">
                        <div className="inner-box">
                            <div className="icon-box"><i className="icon-7"></i></div>
                            <h4><Link href="/service">Lowest Processing Fee than Other Banks</Link></h4>
                            <p>Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.</p>
                        </div>
                    </div>
                    <div className="feature-block-one">
                        <div className="inner-box">
                            <div className="icon-box"><i className="icon-8"></i></div>
                            <h4><Link href="/service">Less Time in any Loans Approval</Link></h4>
                            <p>Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
