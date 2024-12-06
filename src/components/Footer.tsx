import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-cameroon-green text-white mt-12">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">Douane Transit Cameroun</h3>
                        <p>Votre partenaire de confiance pour tous vos besoins en douane et transit.</p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h4 className="text-lg font-semibold mb-2">Liens rapides</h4>
                        <ul>
                            <li><Link href="/services" className="hover:text-cameroon-yellow">Nos services</Link></li>
                            <li><Link href="/contact" className="hover:text-cameroon-yellow">Nous contacter</Link></li>
                            <li><Link href="/a-propos" className="hover:text-cameroon-yellow">À propos de nous</Link></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h4 className="text-lg font-semibold mb-2">Suivez-nous</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-cameroon-yellow">Facebook</a>
                            <a href="#" className="hover:text-cameroon-yellow">Twitter</a>
                            <a href="#" className="hover:text-cameroon-yellow">LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} Douane Transit Cameroun. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

