import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-three"> */}


            <header className={`main-header header-style-three ${scroll ? "fixed-header" : ""}`}>
                {/* header-top */}
                <div className="auto-container">
                    <div className="header-top">
                    <div className="top-inner">
                        <ul className="links-list clearfix">
                        <li><Link href="/career">Career</Link></li>
                        <li><Link href="/faq">Faq</Link></li>
                        <li><Link href="/">Rewards</Link></li>
                        <li><Link href="/">Media</Link></li>
                        </ul>
                        <ul className="info-list clearfix">
                        <li>
                            <i className="icon-1"></i>
                            <Link href="mailto:info@example.com">info@example.com</Link>
                        </li>
                        <li>
                            <i className="icon-2"></i>
                            Find Nearest Branch
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>

                {/* header-lower */}
                <div className="auto-container">
                    <div className="header-lower">
                    <div className="outer-box">
                        <div className="logo-box">
                        <figure className="logo">
                            <Link href="/">
                            <img src="assets/images/logo-3.png" alt="" />
                            </Link>
                        </figure>
                        </div>
                        <div className="menu-area">
                        {/* Mobile Navigation Toggler */}
                        <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                        </div>
                        <nav className="main-menu navbar-expand-md navbar-light clearfix">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <Menu />
                            </div>
                        </nav>
                        <div className="menu-right-content ml_70">
                            <Link href="/" className="theme-btn btn-two mr_20">
                            Login
                            </Link>
                            <Link href="/contact" className="theme-btn btn-one">
                            Open Account
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* sticky Header */}
                <div className="sticky-header">
                    <div className="large-container">
                    <div className="outer-box">
                        <div className="logo-box">
                        <figure className="logo">
                            <Link href="/">
                            <img src="assets/images/logo-3.png" alt="" />
                            </Link>
                        </figure>
                        </div>
                        <div className="menu-area">
                            <nav className="main-menu clearfix">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                            <div className="menu-right-content ml_70">
                            <Link href="/" className="theme-btn btn-two mr_20">Login</Link>
                            <Link href="/contact" className="theme-btn btn-one">Open Account</Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </header>

            <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />



        </>
    )
}
