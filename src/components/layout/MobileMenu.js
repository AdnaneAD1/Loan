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
            <div className="fixed inset-0 bg-white z-50">
                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-900 opacity-50" onClick={handleMobileMenu} />
                
                {/* Close Button */}
                <div className="absolute top-4 right-4 text-white" onClick={handleMobileMenu}>
                    <i className="fas fa-times text-2xl" />
                </div>

                {/* Menu Box */}
                <nav className="relative p-6 bg-white z-10">
                    {/* Logo */}
                    <div className="mb-6">
                        <Link href="/">
                            <img src="/assets/images/logo.png" alt="Logo" className="h-10" />
                        </Link>
                    </div>

                    {/* Menu Items */}
                    <ul className="space-y-4">
                        <li>
                            <Link href="/" className="text-black hover:text-red-600">Accueil</Link>
                        </li>
                        <li>
                            <Link href="/login" className="text-black hover:text-red-600">Connexion</Link>
                        </li>
                        <li>
                            <Link href="/register" className="text-black hover:text-red-600">Inscription</Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-black hover:text-red-600">A propos</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-black hover:text-red-600">Contact</Link>
                        </li>
                    </ul>

                    {/* Contact Info */}
                    <div className="mt-6">
                        <h4 className="font-semibold">Contact Info</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="tel:+8801682648101" className="text-blue-500">metrobanknumero</Link>
                            </li>
                            <li>
                                <Link href="mailto:contact@metrobnque.xyz" className="text-blue-500">metrobankmail</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="mt-6">
                        <ul className="flex space-x-4">
                            <li><Link href="/" className="text-gray-600 hover:text-red-600"><span className="fab fa-twitter" /></Link></li>
                            <li><Link href="/" className="text-gray-600 hover:text-red-600"><span className="fab fa-facebook-square" /></Link></li>
                            <li><Link href="/" className="text-gray-600 hover:text-red-600"><span className="fab fa-pinterest-p" /></Link></li>
                            <li><Link href="/" className="text-gray-600 hover:text-red-600"><span className="fab fa-instagram" /></Link></li>
                            <li><Link href="/" className="text-gray-600 hover:text-red-600"><span className="fab fa-youtube" /></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Nav Overlay */}
            <div
                className={`fixed inset-0 bg-black opacity-50 ${isSidebar ? "block" : "hidden"}`}
                onClick={handleSidebar}
            />
        </>
    );
}

export default MobileMenu;
