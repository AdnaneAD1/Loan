'use client'
import { useState } from 'react'
import {useTranslations} from 'next-intl'

export default function Calculator() {
    const t = useTranslations()
    const [loanAmount, setLoanAmount] = useState('')
    const [months, setMonths] = useState('')
    const [interestRate, setInterestRate] = useState('')
    const [monthlyPayment, setMonthlyPayment] = useState('')
    const [totalPayment, setTotalPayment] = useState('')
    const [totalInterest, setTotalInterest] = useState('')

    const calculateLoan = (e) => {
        e.preventDefault()

        const principal = parseFloat(loanAmount)
        const calculatedInterest = parseFloat(interestRate) / 100 / 12
        const calculatedPayments = parseInt(months)

        // Calculer les paiements mensuels
        const x = Math.pow(1 + calculatedInterest, calculatedPayments)
        const monthly = (principal * x * calculatedInterest) / (x - 1)

        if (isFinite(monthly)) {
            setMonthlyPayment(monthly.toFixed(2))
            setTotalPayment((monthly * calculatedPayments).toFixed(2))
            setTotalInterest(((monthly * calculatedPayments) - principal).toFixed(2))
        } else {
            // Gérer le cas où les valeurs ne sont pas valides
            setMonthlyPayment('')
            setTotalPayment('')
            setTotalInterest('')
        }
    }

    const resetData = () => {
        setLoanAmount('')
        setMonths('')
        setInterestRate('')
        setMonthlyPayment('')
        setTotalPayment('')
        setTotalInterest('')
    }

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
                                <h6>Calculatrice</h6>
                                <h2>{t('calculatorTitle')}</h2>
                            </div>
                            <div className="calculator-inner">
                                <form id="loan-form" onSubmit={calculateLoan}>
                                <div className="form-group">
                                    <div className="input-group">
                                    <input
                                        type="number"
                                        id="amount"
                                        placeholder={t('loanAmountPlaceholder')}
                                        value={loanAmount}
                                        onChange={(e) => setLoanAmount(e.target.value)}
                                    />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="number"
                                        id="years"
                                        placeholder={t('monthsPlaceholder')}
                                        value={months}
                                        onChange={(e) => setMonths(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                    <input
                                        type="number"
                                        id="interest"
                                        placeholder={t('interestRatePlaceholder')}
                                        value={interestRate}
                                        onChange={(e) => setInterestRate(e.target.value)}
                                    />
                                    </div>
                                </div>
                                <div className="form-group d-flex">
                                    <input type="submit" value={t('calculateButton')} className="theme-btn btn-one mr_20" />
                                    <input type="button" value={t('resetButton')} className="reset-btn" onClick={resetData} />
                                </div>
                                </form>
                                <div id="results">
                                <div className="form-group">
                                    <div className="input-group">
                                    <input
                                        type="number"
                                        placeholder={t('monthlyPaymentLabel')}
                                        id="monthly-payment"
                                        value={monthlyPayment}
                                        disabled
                                    />
                                    </div>
                                </div>
                                <div className="form-group none">
                                    <div className="input-group">
                                    <input
                                        type="number"
                                        id="total-payment"
                                        value={totalPayment}
                                        disabled
                                    />
                                    </div>
                                </div>
                                <div className="form-group none">
                                    <div className="input-group">
                                    <input
                                        type="number"
                                        id="total-interest"
                                        value={totalInterest}
                                        disabled
                                    />
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
