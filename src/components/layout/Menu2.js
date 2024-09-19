import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>
        {/* <ul className="sub-menu">
            <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
            <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
        </ul> */}
    
        <ul className="navigation clearfix">
            <li className="dropdown"><Link href="/">Accueil</Link>
                <ul>
                    <li><Link href="/">Page d'accueil Un</Link></li>
                    <li><Link href="/index-2">Page d'accueil Deux</Link></li>
                    <li><Link href="/index-3">Page d'accueil Trois</Link></li>
                    <li><Link href="/index-onepage">Page Unique</Link></li>
                </ul>
            </li>
            <li><Link href="#about">À Propos</Link></li>
            <li><Link href="#service">Service</Link></li>
            <li><Link href="#video">Vidéo</Link></li>
            <li><Link href="#testimonial">Témoignages</Link></li>
            <li><Link href="#news">Actualités</Link></li>
        </ul>
    </>
    
    )
}









                                    
