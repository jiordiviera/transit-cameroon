import Link from 'next/link'

const Header = () => {
    return (
        <header className="bg-cameroon-green text-white">
            <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-heading font-bold">Logo</Link>
                <ul className="flex space-x-4 font-body">
                    <li><Link href="/" className="hover:text-cameroon-yellow">Accueil</Link></li>
                    <li><Link href="/services" className="hover:text-cameroon-yellow">Services</Link></li>
                    <li><Link href="/contact" className="hover:text-cameroon-yellow">Contact</Link></li>
                    <li><Link href="/a-propos" className="hover:text-cameroon-yellow">À propos</Link></li>
                    <li><Link href="/blog" className="hover:text-cameroon-yellow">Blog</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

