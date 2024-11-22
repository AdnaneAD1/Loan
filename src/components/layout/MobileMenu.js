'use client'
import Link from "next/link"
import {useTranslations} from 'next-intl'
import { useState } from "react"

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
    const t = useTranslations()
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
        subMenuKey: "",
    })

    const handleToggle = (key, subMenuKey = "") => {
        if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
            setIsActive({
                status: false,
                key: "",
                subMenuKey: "",
            })
        } else {
            setIsActive({
                status: true,
                key,
                subMenuKey,
            })
        }
    }

    return (
        <>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times"></i></div>
                <nav className="menu-box">
                    <div className="nav-logo">
                        <Link href="/" onClick={handleMobileMenu}>
                            <img src="assets/images/logo.png" alt="" />
                        </Link>
                    </div>

                    {/* menu-outer */}
                    <div className="menu-outer">
                        <div className="navbar-collapsec show clearfix" id="navbarSupportedContent">
                            <ul className="navigationc clearfix">
                                <li><Link href="/" onClick={handleMobileMenu}>{t('home')}</Link></li>
                                <li><Link href="/login" onClick={handleMobileMenu}>{t('login')}</Link></li>
                                <li><Link href="/register" onClick={handleMobileMenu}>{t('register')}</Link></li>
                                <li><Link href="/about" onClick={handleMobileMenu}>{t('about')}</Link></li>
                                <li><Link href="/contact" onClick={handleMobileMenu}>{t('contact')}</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* menu-outer end */}
                    <div className="contact-info">
                        <h4>{t('contactInfo')}</h4>
                        <ul>
                            <li><Link href="tel:+33757852015" onClick={handleMobileMenu}>+33 7 57 85 20 15</Link></li>
                            <li><Link href="mailto:contact@metrobnque.xyz" onClick={handleMobileMenu}>contact@metrobnque.xyz</Link></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="social-links">
                        <ul className="clearfix">
                            <li><Link href="/" onClick={handleMobileMenu}><span className="fab fa-twitter"></span></Link></li>
                            <li><Link href="/" onClick={handleMobileMenu}><span className="fab fa-facebook-square"></span></Link></li>
                            <li><Link href="/" onClick={handleMobileMenu}><span className="fab fa-pinterest-p"></span></Link></li>
                            <li><Link href="/" onClick={handleMobileMenu}><span className="fab fa-instagram"></span></Link></li>
                            <li><Link href="/" onClick={handleMobileMenu}><span className="fab fa-youtube"></span></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />
        </>
    )
}

export default MobileMenu
