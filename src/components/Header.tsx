'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/services', label: 'Services' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-cameroon-green text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-heading font-bold">Douane Transit Cameroun</Link>

          {/* Menu burger pour mobile */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Menu pour desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4 font-body">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`hover:text-cameroon-yellow transition duration-300 ${
                      isActive(item.href) ? 'text-cameroon-yellow font-semibold' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/demande-devis"
                  className="bg-cameroon-red hover:bg-cameroon-yellow text-white px-4 py-2 rounded-full transition duration-300"
                >
                  Demander un devis
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-2 font-body">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block py-2 hover:text-cameroon-yellow transition duration-300 ${
                      isActive(item.href) ? 'text-cameroon-yellow font-semibold' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/demande-devis"
                  className="block py-2 bg-cameroon-red hover:bg-cameroon-yellow text-white px-4 rounded-full transition duration-300"
                >
                  Demander un devis
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
