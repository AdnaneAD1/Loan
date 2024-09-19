export default function Calculator() {
    return (
        <>  
            <section className="calculator-section pt_120 pb_120">
                <div className="light-icon float-bob-y" style={{ backgroundImage: 'url(assets/images/icons/icon-1.png)' }}></div>
                <div className="auto-container">
                    <div className="inner-container">
                    <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_two">
                            <div className="content-box">
                            <div className="sec-title mb_50">
                                <h6>Calculate Loan</h6>
                                <h2>Online EMI Calculator</h2>
                            </div>
                            <div className="calculator-inner">
                                <form id="loan-form">
                                <div className="form-group">
                                    <div className="input-group">
                                    <input type="number" id="amount" placeholder="Loan amount" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="number" id="years" placeholder="Nombre de mois" />
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                    <input type="number" id="interest" placeholder="Interest rate" />
                                    </div>
                                </div>
                                <div className="form-group d-flex">
                                    <input type="submit" value="Calculate" className="theme-btn btn-one mr_20" />
                                    <input type="button" value="Reset Data" className="reset-btn" />
                                </div>
                                </form>
                                <div id="results">
                                <div className="form-group">
                                    <div className="input-group">
                                    <input type="number" placeholder="Monthly Installment is" id="monthly-payment" disabled />
                                    </div>
                                </div>
                                <div className="form-group none">
                                    <div className="input-group">
                                    <input type="number" id="total-payment" disabled />
                                    </div>
                                </div>
                                <div className="form-group none">
                                    <div className="input-group">
                                    <input type="number" id="total-interest" disabled />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <figure className="image-box"><img src="assets/images/resource/calculator-1.jpg" alt="" /></figure>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
