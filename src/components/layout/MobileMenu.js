// 'use client'
// import Link from "next/link";
// import { useState } from "react";

// const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
//     const [isActive, setIsActive] = useState({
//         status: false,
//         key: "",
//         subMenuKey: "",
//     });

//     const handleToggle = (key, subMenuKey = "") => {
//         if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
//             setIsActive({
//                 status: false,
//                 key: "",
//                 subMenuKey: "",
//             });
//         } else {
//             setIsActive({
//                 status: true,
//                 key,
//                 subMenuKey,
//             });
//         }
//     };
//     return (
//         <>
//             <div className="mobile-menu" >
//                 <div className="menu-backdrop" onClick={handleMobileMenu} />
//                 <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times"></i></div>
//                 <nav className="menu-box">
//                     <div className="nav-logo">
//                         <Link href="/">
//                             <img src="assets/images/logo.png" alt="" />
//                         </Link>
//                     </div>

//                     {/*menu-outer*/}
//                     <div className="menu-outer">
//                         <div className="navbar-collapsec show clearfix" id="navbarSupportedContent">
//                             <ul className="navigationc clearfix">
//                                 <li><Link href="/">Accueil</Link>
//                                 </li>
//                                 <li><Link href="/login">Connexion</Link></li>
//                                 <li><Link href="/register">Inscription</Link></li>
//                                 <li><Link href="/about">A propos</Link></li>
//                                 <li><Link href="/contact">Contact</Link></li>
//                             </ul>
//                         </div>
//                     </div>
//                     {/*menu-outer end*/}
//                     <div className="contact-info">
//                         <h4>Contact Info</h4>
//                         <ul>
//                             <li><Link href="tel:+33757852015">+33 7 57 85 20 15</Link></li>
//                             <li><Link href="mailto:contact@metrobnque.xyz">contact@metrobnque.xyz</Link></li>
//                         </ul>
//                     </div>

//                     {/*Social Links*/}
//                     <div className="social-links">
//                         <ul className="clearfix">
//                             <li><Link href="/"><span className="fab fa-twitter"></span></Link></li>
//                             <li><Link href="/"><span className="fab fa-facebook-square"></span></Link></li>
//                             <li><Link href="/"><span className="fab fa-pinterest-p"></span></Link></li>
//                             <li><Link href="/"><span className="fab fa-instagram"></span></Link></li>
//                             <li><Link href="/"><span className="fab fa-youtube"></span></Link></li>
//                         </ul>
//                     </div>
//                 </nav>
//             </div>{/* End Mobile Menu */}
//             <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />



//         </>
//     )
// }
// export default MobileMenu;
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
                                <li><Link href="/" onClick={handleMobileMenu}>Accueil</Link></li>
                                <li><Link href="/login" onClick={handleMobileMenu}>Connexion</Link></li>
                                <li><Link href="/register" onClick={handleMobileMenu}>Inscription</Link></li>
                                <li><Link href="/about" onClick={handleMobileMenu}>A propos</Link></li>
                                <li><Link href="/contact" onClick={handleMobileMenu}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* menu-outer end */}
                    <div className="contact-info">
                        <h4>Contact Info</h4>
                        <ul>
                            <li><Link href="tel:+33757852015" onClick={handleMobileMenu}>metrobank numero</Link></li>
                            <li><Link href="mailto:contact@metrobnque.xyz" onClick={handleMobileMenu}>metrobank email</Link></li>
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

export default MobileMenu;
