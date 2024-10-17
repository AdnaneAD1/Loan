import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 navigation clearfix">
                <li className="group relative">
                    <Link href="/" className="text-black hover:text-red-600">Accueil</Link>
                </li>
                <li className="group relative">
                    <Link href="/login" className="text-black hover:text-red-600">Connexion</Link>
                </li>
                <li className="group relative">
                    <Link href="/register" className="text-black hover:text-red-600">Inscription</Link>
                </li>
                <li className="group relative">
                    <Link href="/about" className="text-black hover:text-red-600">À propos</Link>
                </li>
                <li className="group relative">
                    <Link href="/contact" className="text-black hover:text-red-600">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
