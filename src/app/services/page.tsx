import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Nos Services | Douane Transit Cameroun',
    description: 'Découvrez nos services de transit international, gestion des formalités douanières, conseils en import/export et plus encore.',
}
interface Service {
    title: string
    description: string
    icon: string
}

const services:Service[] = [
    {
        title: 'Transit international',
        description: 'Nous gérons le transport de vos marchandises à travers les frontières, en assurant une livraison rapide et sécurisée.',
        icon: '🚚',
    },
    {
        title: 'Formalités douanières',
        description: "Notre équipe d'experts s'occupe de toutes les formalités douanières pour faciliter vos importations et exportations.",
        icon: '📋',
    },
    {
        title: 'Conseils en import/export',
        description: "Bénéficiez de nos conseils personnalisés pour optimiser vos opérations d'import/export et respecter les réglementations.",
        icon: '💼',
    },
    {
        title: 'Assistance administrative',
        description: 'Nous vous aidons à préparer et à gérer tous les documents nécessaires pour vos opérations commerciales internationales.',
        icon: '📄',
    },
]

export default function Services() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center text-cameroon-green">Nos Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start">
                        <div className="text-4xl mr-4">{service.icon}</div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-cameroon-red">{service.title}</h2>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-12">
                <h2 className="text-3xl font-bold mb-6 text-center text-cameroon-green">Notre expertise à votre service</h2>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
                        <Image
                            src="/placeholder.svg?height=400&width=600"
                            alt="Équipe d'experts en douane"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <p className="text-lg mb-4">
                            Avec des années d'expérience dans le domaine de la douane et du transit au Cameroun, notre équipe d'experts est là pour vous accompagner à chaque étape de vos opérations commerciales internationales.
                        </p>
                        <p className="text-lg">
                            Nous nous engageons à fournir des services de haute qualité, adaptés à vos besoins spécifiques, tout en respectant les réglementations locales et internationales.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

