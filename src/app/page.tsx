import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Globe, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-cameroon-green">
                Simplifiez vos opérations douanières au Cameroun
              </h1>
              <p className="text-xl mb-8 font-body text-gray-700">
                Douane Transit Cameroun : Votre partenaire de confiance pour tous vos besoins en douane et transit. Expertise locale, solutions globales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-cameroon-red hover:bg-cameroon-yellow text-white font-bold py-3 px-6 rounded-full transition duration-300 text-center">
                  Contactez-nous
                </Link>
                <Link href="/services" className="bg-cameroon-green hover:bg-cameroon-yellow text-white font-bold py-3 px-6 rounded-full transition duration-300 text-center">
                  Nos services
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Port de Douala"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-100 rounded-lg">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center text-cameroon-green">Nos services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Transit international', icon: Globe, description: 'Gestion complète de vos opérations de transit international.' },
              { title: 'Formalités douanières', icon: CheckCircle, description: 'Prise en charge de toutes vos formalités douanières.' },
              { title: 'Conseils en import/export', icon: TrendingUp, description: 'Expertise en stratégies d\'import/export adaptées à votre entreprise.' }
            ].map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                  <service.icon className="w-12 h-12 text-cameroon-red mb-4" />
                  <h3 className="text-xl font-heading font-semibold mb-4 text-cameroon-green">{service.title}</h3>
                  <p className="font-body text-gray-700 mb-4">{service.description}</p>
                  <Link href="/services" className="text-cameroon-red hover:text-cameroon-yellow font-semibold font-body flex items-center">
                    En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center text-cameroon-green">Pourquoi nous choisir ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Expertise locale et connaissance approfondie des réglementations camerounaises",
              "Solutions sur mesure adaptées à vos besoins spécifiques",
              "Équipe multilingue pour une communication fluide",
              "Technologie de pointe pour un suivi en temps réel de vos opérations"
            ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-cameroon-green mr-4 flex-shrink-0 mt-1" />
                  <p className="font-body text-gray-700">{item}</p>
                </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-cameroon-green rounded-lg text-white text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Prêt à simplifier vos opérations douanières ?</h2>
          <p className="text-xl mb-8 font-body">Contactez-nous dès aujourd&#39;hui pour une consultation gratuite</p>
          <Link href="/contact" className="bg-white text-cameroon-green hover:bg-cameroon-yellow hover:text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg">
            Demander un devis
          </Link>
        </section>
      </div>
  )
}

