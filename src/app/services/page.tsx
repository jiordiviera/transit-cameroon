import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, TrendingUp, Globe, FileText, Briefcase, PhoneCall } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Nos Services | Douane Transit Cameroun',
    description: 'Découvrez nos services de transit international, gestion des formalités douanières, conseils en import/export et plus encore.',
}

const services = [
    {
        title: 'Transit international',
        description: 'Nous gérons le transport de vos marchandises à travers les frontières, en assurant une livraison rapide et sécurisée.',
        icon: Globe,
    },
    {
        title: 'Formalités douanières',
        description: 'Notre équipe \'experts s\'occupe de toutes les formalités douanières pour faciliter vos importations et exportations.',
        icon: FileText,
    },
    {
        title: 'Conseils en import/export',
        description: 'Bénéficiez de nos conseils personnalisés pour optimiser vos opérations d\'import/export et respecter les réglementations.',
        icon: TrendingUp,
    },
    {
        title: 'Assistance administrative',
        description: 'Nous vous aidons à préparer et à gérer tous les documents nécessaires pour vos opérations commerciales internationales.',
        icon: Briefcase,
    },
]

export default function Services() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-center text-cameroon-green">Nos Services</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {services.map((service, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                        <service.icon className="w-12 h-12 text-cameroon-red mb-4" />
                        <h2 className="text-2xl font-heading font-semibold mb-4 text-cameroon-green">{service.title}</h2>
                        <p className="font-body text-gray-700">{service.description}</p>
                    </div>
                ))}
            </div>

            <div className="bg-gray-100 rounded-lg p-8 mb-16">
                <h2 className="text-3xl font-heading font-bold mb-8 text-center text-cameroon-green">Notre expertise à votre service</h2>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                        <Image
                            src="/images/logistics-infographics.jpg"
                            alt="Équipe d'experts en douane"
                            width={600}
                            height={400}
                            loading='lazy'
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <p className="text-lg mb-4 font-body text-gray-700">
                            Avec des années d&#39;expérience dans le domaine de la douane et du transit au Cameroun, notre équipe d&#39;experts est là pour vous accompagner à chaque étape de vos opérations commerciales internationales.
                        </p>
                        <p className="text-lg font-body text-gray-700">
                            Nous nous engageons à fournir des services de haute qualité, adaptés à vos besoins spécifiques, tout en respectant les réglementations locales et internationales.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mb-16">
                <h2 className="text-3xl font-heading font-bold mb-8 text-center text-cameroon-green">Pourquoi choisir nos services ?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        "Expertise locale et connaissance approfondie des réglementations camerounaises",
                        "Solutions sur mesure adaptées à vos besoins spécifiques",
                        "Équipe multilingue pour une communication fluide",
                        "Technologie de pointe pour un suivi en temps réel de vos opérations",
                        "Réseau étendu de partenaires locaux et internationaux",
                        "Engagement envers l'excellence et la satisfaction client"
                    ].map((item, index) => (
                        <div key={index} className="flex items-start">
                            <CheckCircle className="w-6 h-6 text-cameroon-green mr-4 flex-shrink-0 mt-1" />
                            <p className="font-body text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-cameroon-green rounded-lg text-white text-center py-12">
                <h2 className="text-3xl font-heading font-bold mb-6">Prêt à simplifier vos opérations douanières ?</h2>
                <p className="text-xl mb-8 font-body">Contactez-nous dès aujourd&#39;hui pour une consultation gratuite</p>
                <a href="/contact" className="bg-white text-cameroon-green hover:bg-cameroon-yellow hover:text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg inline-flex items-center">
                    <PhoneCall className="w-5 h-5 mr-2" />
                    Nous contacter
                </a>
            </div>
        </div>
    )
}
