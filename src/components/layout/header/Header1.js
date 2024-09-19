import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                {/* Header lower */}
                <div className="header-lower">
                    <div className="large-container">
                    <div className="outer-box">
                        <div className="logo-box">
                        <div className="shape"></div>
                        <figure className="logo"><Link href="/"><img src="assets/images/logo.png" alt="" /></Link></figure>
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
                            <Link href="/login" className="theme-btn btn-two mr_20">Connectez-vous</Link>
                            <Link href="/register" className="theme-btn btn-one">Ouvrez votre compte</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/*End Header lower*/}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="large-container">
                        <div className="outer-box">
                        <div className="logo-box">
                            <div className="shape"></div>
                            <figure className="logo"><Link href="/"><img src="assets/images/logo.png" alt="" /></Link></figure>
                        </div>
                        <div className="menu-area">
                            <nav className="main-menu clearfix">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                            <div className="menu-right-content ml_70">
                            <Link href="/login" className="theme-btn btn-two mr_20">Connectez-vous</Link>
                            <Link href="/register" className="theme-btn btn-one">Ouvrez un compte</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* End Sticky Menu */}
                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    )
}
