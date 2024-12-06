import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'À propos de nous | Douane Transit Cameroun',
    description: 'Découvrez l\'histoire, la mission et les valeurs de Douane Transit Cameroun. Votre partenaire de confiance pour tous vos besoins en douane et transit.',
}

export default function About() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center text-cameroon-green">À propos de nous</h1>
            <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <Image
                        src="/images/professional-team.jpg"
                        alt="Notre équipe"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-4 text-cameroon-red">Notre histoire</h2>
                    <p className="mb-4">
                        Fondée en 2005, Douane Transit Cameroun est née de la vision de simplifier les procédures douanières et de transit pour les entreprises opérant au Cameroun. Depuis notre création, nous nous sommes engagés à fournir des services de haute qualité, adaptés aux besoins spécifiques de nos clients.
                    </p>
                    <p>
                        Avec plus de 15 ans d&#39;expérience, nous sommes devenus un acteur incontournable dans le domaine de la douane et du transit au Cameroun, reconnus pour notre expertise, notre intégrité et notre engagement envers l&#39;excellence.
                    </p>
                </div>
            </div>
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-cameroon-red">Notre mission</h2>
                <p>
                    Notre mission est de faciliter les échanges commerciaux internationaux en offrant des solutions douanières et de transit efficaces, conformes et innovantes. Nous nous efforçons de simplifier les processus complexes pour nos clients, leur permettant ainsi de se concentrer sur le développement de leur activité.
                </p>
            </div>
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-cameroon-red">Nos valeurs</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Intégrité : Nous agissons toujours de manière éthique et transparente.</li>
                    <li>Excellence : Nous visons constamment à améliorer nos services et à dépasser les attentes de nos clients.</li>
                    <li>Innovation : Nous adoptons les dernières technologies et méthodes pour optimiser nos processus.</li>
                    <li>Engagement local : Nous contribuons activement au développement économique du Cameroun.</li>
                    <li>Orientation client : Nous plaçons les besoins de nos clients au cœur de tout ce que nous faisons.</li>
                </ul>
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-cameroon-red">Témoignages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { name: "Jean Dupont", company: "Import-Export SARL", text: "Douane Transit Cameroun a considérablement simplifié nos opérations d'import-export. Leur expertise et leur professionnalisme sont inégalés." },
                        { name: "Marie Kouam", company: "Cameroon Logistics", text: "Travailler avec Douane Transit Cameroun a été un véritable game-changer pour notre entreprise. Leur connaissance approfondie des procédures douanières nous a fait gagner un temps précieux." }
                    ].map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <p className="mb-4 italic">&#34;{testimonial.text}&#34;</p>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-gray-600">{testimonial.company}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

