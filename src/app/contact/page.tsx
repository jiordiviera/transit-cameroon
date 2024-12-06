import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
    title: 'Contactez-nous | Douane Transit Cameroun',
    description: 'Contactez notre équipe d\'experts en douane et transit au Cameroun. Nous sommes là pour répondre à toutes vos questions.',
}

export default function Contact() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center text-cameroon-green">Contactez-nous</h1>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <ContactForm />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-4 text-cameroon-red">Nos coordonnées</h2>
                    <p className="mb-4">
                        <strong>Adresse :</strong> 123 Rue du Commerce, Douala, Cameroun
                    </p>
                    <p className="mb-4">
                        <strong>Téléphone :</strong> +237 123 456 789
                    </p>
                    <p className="mb-4">
                        <strong>Email :</strong> info@douanetransitcameroun.com
                    </p>
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">Notre emplacement</h3>
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
        </div>
    )
}

