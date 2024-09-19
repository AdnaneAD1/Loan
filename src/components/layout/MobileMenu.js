'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
        subMenuKey: "",
    });

    const handleToggle = (key, subMenuKey = "") => {
        if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
            setIsActive({
                status: false,
                key: "",
                subMenuKey: "",
            });
        } else {
            setIsActive({
                status: true,
                key,
                subMenuKey,
            });
        }
    };
    return (
        <>
            <div className="mobile-menu" >
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times"></i></div>
                <nav className="menu-box">
                    <div className="nav-logo">
                        <Link href="/">
                            <img src="assets/images/logo.png" alt="" />
                        </Link>
                    </div>

                    {/*menu-outer*/}
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li><Link href="/">Accueil</Link>
                                    {/* <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <li><Link href="/">Home Page One</Link></li>
                                        <li className="current"><Link href="/index-2">Home Page Two</Link></li>
                                        <li><Link href="/index-3">Home Page Three</Link></li>
                                        <li><Link href="/index-onepage">OnePage Home</Link></li>
                                    </ul>
                                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div> */}
                                </li>
                                <li><Link href="/login">Connexion</Link></li>
                                <li><Link href="/register">Inscription</Link></li>
                                <li><Link href="/about">A propos</Link></li>
                                {/* <li><Link href="/about/">About</Link></li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#">Services</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <li><Link href="/service">Our Services</Link></li>
                                        <li><Link href="/service-2">Our Services 2</Link></li>
                                        <li><Link href="/service-details">Digital Banking</Link></li>
                                        <li><Link href="/service-details-2">Mobile & Web Banking</Link></li>
                                        <li><Link href="/service-details-3">Insurance Policies</Link></li>
                                        <li><Link href="/service-details-4">Home & Property Loan</Link></li>
                                        <li><Link href="/service-details-5">All Bank Account</Link></li>
                                        <li><Link href="/service-details-6">Borrowing Accounts</Link></li>
                                        <li><Link href="/service-details-7">Private Banking</Link></li>
                                        <li><Link href="/service-details-8">Fixed Term Account</Link></li>
                                    </ul>

                                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                                </li>

                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}>
                                    <Link href="/#">Pages</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <li className={isActive.subMenuKey == 4 ? "dropdown current" : "dropdown"}>
                                            <Link href="/">Directors</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 4 ? "block" : "none"}` }}>
                                                <li><Link href="/team">Board of Directors</Link></li>
                                                <li><Link href="/team-details">Director Details</Link></li>
                                            </ul>
                                            <div className={isActive.subMenuKey == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3, 4)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li className={isActive.subMenuKey == 5 ? "dropdown current" : "dropdown"}>
                                            <Link href="/">Career</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 5 ? "block" : "none"}` }}>
                                                <li><Link href="/career">Career Page</Link></li>
                                                <li><Link href="/career-details">Career Details</Link></li>
                                            </ul>
                                            <div className={isActive.subMenuKey == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3, 5)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li className={isActive.subMenuKey == 6 ? "dropdown current" : "dropdown"}>
                                            <Link href="/">Blog</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 6 ? "block" : "none"}` }}>
                                                <li><Link href="/blog">Blog Grid</Link></li>
                                                <li><Link href="/blog-2">Blog Image</Link></li>
                                                <li><Link href="/blog-3">Blog Standard</Link></li>
                                                <li><Link href="/blog-details">Blog Details</Link></li>
                                            </ul>
                                            <div className={isActive.subMenuKey == 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3, 6)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li><Link href="/currency">Currency Exchange</Link></li>
                                        <li><Link href="/credit-cards">Credit Cards</Link></li>
                                        <li><Link href="/faq">General FAQ’s</Link></li>
                                        <li><Link href="/error">404 Error</Link></li>
                                    </ul>
                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                                </li> */}
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/*menu-outer end*/}
                    <div className="contact-info">
                        <h4>Contact Info</h4>
                        <ul>
                            <li><Link href="tel:+8801682648101">+88 01682648101</Link></li>
                            <li><Link href="mailto:info@example.com">info@example.com</Link></li>
                        </ul>
                    </div>

                    {/*Social Links*/}
                    <div className="social-links">
                        <ul className="clearfix">
                            <li><Link href="/"><span className="fab fa-twitter"></span></Link></li>
                            <li><Link href="/"><span className="fab fa-facebook-square"></span></Link></li>
                            <li><Link href="/"><span className="fab fa-pinterest-p"></span></Link></li>
                            <li><Link href="/"><span className="fab fa-instagram"></span></Link></li>
                            <li><Link href="/"><span className="fab fa-youtube"></span></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>{/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />



        </>
    )
}
export default MobileMenu;
