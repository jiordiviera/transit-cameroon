import { Metadata } from 'next'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Contactez-nous | Douane Transit Cameroun',
    description: 'Contactez notre équipe d\'experts en douane et transit au Cameroun. Nous sommes là pour répondre à toutes vos questions.',
}

export default function Contact() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-center text-cameroon-green">Contactez-nous</h1>

            <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-heading font-semibold mb-6 text-cameroon-red">Envoyez-nous un message</h2>
                    <ContactForm />
                </div>

                <div className="md:w-1/2">
                    <Image
                        src="/images/customer-service.jpg"
                        alt="Notre service client à votre écoute"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg mb-8"
                    />
                    <h2 className="text-2xl font-heading font-semibold mb-6 text-cameroon-red">Nos coordonnées</h2>
                    <div className="space-y-4 mb-8">
                        <div className="flex items-start">
                            <MapPin className="w-6 h-6 text-cameroon-green mr-4 flex-shrink-0 mt-1" />
                            <p className="font-body text-gray-700">123 Rue du Commerce, Douala, Cameroun</p>
                        </div>
                        <div className="flex items-start">
                            <Phone className="w-6 h-6 text-cameroon-green mr-4 flex-shrink-0 mt-1" />
                            <p className="font-body text-gray-700">+237 123 456 789</p>
                        </div>
                        <div className="flex items-start">
                            <Mail className="w-6 h-6 text-cameroon-green mr-4 flex-shrink-0 mt-1" />
                            <p className="font-body text-gray-700">info@douanetransitcameroun.com</p>
                        </div>
                        <div className="flex items-start">
                            <Clock className="w-6 h-6 text-cameroon-green mr-4 flex-shrink-0 mt-1" />
                            <p className="font-body text-gray-700">Lun - Ven: 8h00 - 18h00</p>
                        </div>
                    </div>

                    <h3 className="text-xl font-heading font-semibold mb-4 text-cameroon-red">Notre emplacement</h3>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254322.99315493933!2d9.591348861388!3d4.05200138880619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061128f4c82a69d%3A0x2e3c99e9495e0eb7!2sDouala%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1652345678901!5m2!1sen!2sus"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

