import CounterUp from "@/components/elements/CounterUp"


export default function Funfacts() {
    return (
        <>        
            
            <section className="funfact-style-two">
                <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/funfact-bg.jpg)' }}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                        <div className="funfact-block-one">
                        <div className="inner-box">
                            <div className="icon-box"><i className="icon-21"></i></div>
                            <div className="count-outer count-box">
                            <CounterUp end={50} /><span>k+</span>
                            </div>
                            <p>Happy Clients</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                        <div className="funfact-block-one">
                        <div className="inner-box">
                            <div className="icon-box"><i className="icon-22"></i></div>
                            <div className="count-outer count-box">
                            <CounterUp end={90} /><span>Bn</span>
                            </div>
                            <p>Total Transection</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                        <div className="funfact-block-one">
                        <div className="inner-box">
                            <div className="icon-box"><i className="icon-23"></i></div>
                            <div className="count-outer count-box">
                            <CounterUp end={40} /><span>+</span>
                            </div>
                            <p>Branchs in USA</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
