'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-cameroon-green text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-heading font-bold">Douane Transit Cameroun</Link>

          {/* Menu burger pour mobile */}
          <button className="lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Menu pour desktop */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-4 font-body">
              <li><Link href="/" className="hover:text-cameroon-yellow">Accueil</Link></li>
              <li><Link href="/services" className="hover:text-cameroon-yellow">Services</Link></li>
              <li><Link href="/a-propos" className="hover:text-cameroon-yellow">À propos</Link></li>
              <li><Link href="/contact" className="hover:text-cameroon-yellow">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-cameroon-yellow">Blog</Link></li>
              <li><Link href="/demande-devis" className="bg-cameroon-red hover:bg-cameroon-yellow text-white px-4 py-2 rounded-full transition duration-300">Demander un devis</Link></li>
            </ul>
          </nav>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4">
            <ul className="flex flex-col space-y-2 font-body">
              <li><Link href="/" className="block py-2 hover:text-cameroon-yellow">Accueil</Link></li>
              <li><Link href="/services" className="block py-2 hover:text-cameroon-yellow">Services</Link></li>
              <li><Link href="/a-propos" className="block py-2 hover:text-cameroon-yellow">À propos</Link></li>
              <li><Link href="/contact" className="block py-2 hover:text-cameroon-yellow">Contact</Link></li>
              <li><Link href="/blog" className="block py-2 hover:text-cameroon-yellow">Blog</Link></li>
              <li><Link href="/demande-devis" className="block py-2 bg-cameroon-red hover:bg-cameroon-yellow text-white px-4 rounded-full transition duration-300">Demander un devis</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
