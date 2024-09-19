import Link from "next/link";

export default function Services() {
    return (
        <>        
            <section className="service-style-three pt_120 pb_90">
              <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/service-bg-3.jpg)' }}></div>
              <div className="auto-container">
                <div className="sec-title light centred mb_60">
                  <h6>Our Services</h6>
                  <h2>Online Banking at Fingertips</h2>
                </div>
                <div className="row clearfix">
                  <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                      <figure className="image-box"><Link href="/service-details"><img src="assets/images/service/service-5.jpg" alt="" /></Link></figure>
                      <div className="inner-box">
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
                      <figure className="image-box"><Link href="/service-details-2"><img src="assets/images/service/service-6.jpg" alt="" /></Link></figure>
                      <div className="inner-box">
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
                      <figure className="image-box"><Link href="/service-details-3"><img src="assets/images/service/service-7.jpg" alt="" /></Link></figure>
                      <div className="inner-box">
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
                        <figure className="image-box"><Link href="/service-details-4"><img src="assets/images/service/service-8.jpg" alt="" /></Link></figure>
                        <div className="inner-box">
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
                        <figure className="image-box"><Link href="/service-details-5"><img src="assets/images/service/service-9.jpg" alt="" /></Link></figure>
                        <div className="inner-box">
                          <div className="icon-box"><i className="icon-16"></i></div>
                          <h4><Link href="/service-details-5">All Bank Account</Link></h4>
                          <ul className="list-item clearfix">
                            <li>Instant Access Savings</li>
                            <li>Instant Access Cash</li>
                            <li>Young Savers Account</li>
                          </ul>
                        </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                      <figure className="image-box"><Link href="/service-details-6"><img src="assets/images/service/service-10.jpg" alt="" /></Link></figure>
                      <div className="inner-box">
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
                      <figure className="image-box"><Link href="/service-details-7"><img src="assets/images/service/service-11.jpg" alt="" /></Link></figure>
                      <div className="inner-box">
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
                      <figure className="image-box"><Link href="/service-details-8"><img src="assets/images/service/service-12.jpg" alt="" /></Link></figure>
                      <div className="inner-box">
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
