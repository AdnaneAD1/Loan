'use client'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import axios from "@/lib/axios" // Import du fichier d'initialisation d'Axios
import Link from "next/link"
import {useTranslations} from 'next-intl'

export default function Home() {
    const t = useTranslations()
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        setSuccess(null)

        try {
            // Récupérer le token CSRF
            await axios.get('/sanctum/csrf-cookie')

            // Envoi de la requête POST avec les données du formulaire
            const response = await axios.post("/api/sendmail", formData)
            setSuccess("Email envoyé avec succès !")
            setFormData({ username: "", email: "", phone: "", subject: "", message: "" }) // Réinitialisation du formulaire
        } catch (err) {
            setError(err.response ? err.response.data.message : "Une erreur est survenue")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('contact_details')}>
                <div>
                    {/* contact-info-section */}
                    <section className="contact-info-section centred pt_120 pb_90">
                        <div className="auto-container">
                            <div className="sec-title mb_70">
                                <h6>{t('contact_us')}</h6>
                                <h2>{t('contact_details')}</h2>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                    <div className="info-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-2"></i></div>
                                            <h3>{t('our_location')}</h3>
                                            <p>{t('address')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                    <div className="info-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-43"></i></div>
                                            <h3>{t('email_address')}</h3>
                                            <p><Link href="mailto:contact@metrobnque.xyz">contact@metrobnque.xyz</Link><br /></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                    <div className="info-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-44"></i></div>
                                            <h3>{t('phone_number')}</h3>
                                            <p><Link href="tel:+33757852015">+33 7 57 85 20 15</Link> (24/7)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* contact-info-section End */}

                    {/* Google Map Section */}
                    {/* <section className="google-map-section pb_120">
                        <div className="auto-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55945.16225505631!2d-73.90847969206546!3d40.66490264739892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1601263396347!5m2!1sen!2sbd" height={535} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </section> */}
                    <section className="google-map-section pb_120">
                        <div className="auto-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999052183441!2d2.2922926156743064!3d48.85884407928756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdf43b1bff1%3A0x8c8e4f3bd8a798e1!2sEiffel%20Tower%2C%20Champ%20de%20Mars%2C%205%20Av.%20Anatole%20France%2C%2075015%20Paris%2C%20France!5e0!3m2!1sen!2sfr!4v1601263396347!5m2!1sen!2sfr"
                                height={535}
                                style={{ border: 0, width: "100%" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </section>
                    {/* Google Map Section End */}

                    {/* Contact Form Section */}
                    <section className="contact-section pt_120 pb_120">
                        <div className="auto-container">
                            <div className="sec-title centred mb_70">
                                <h6>{t('contact_us')}</h6>
                                <h2>{t('contact_details')}</h2>
                            </div>
                            <div className="form-inner">
                                <form onSubmit={handleSubmit}>
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="username" placeholder={t('your_name')} required value={formData.username} onChange={handleChange} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="email" name="email" placeholder={t('your_email')} required value={formData.email} onChange={handleChange} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="phone" required placeholder={t('phone')}value={formData.phone} onChange={handleChange} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="subject" required placeholder={t('subject')} value={formData.subject} onChange={handleChange} />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <textarea name="message" placeholder={t('message')} value={formData.message} onChange={handleChange}></textarea>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                                            <button className="theme-btn btn-one" type="submit" name="submit-form" disabled={loading}>
                                                {loading ? t('sending') : t('send_message')}
                                            </button>
                                        </div>
                                        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
                                        {success && <p style={{ color: "green", textAlign: "center" }}>{success}</p>}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                    {/* Contact Form Section End */}
                </div>
            </Layout>
        </>
    )
}
