import { Metadata } from 'next'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
    title: 'Demande de devis | Douane Transit Cameroun',
    description: 'Obtenez un devis personnalisé pour vos besoins en douane et transit au Cameroun. Remplissez notre formulaire en ligne pour une estimation rapide.',
}

export default function DevisPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-center text-cameroon-green">Demande de devis</h1>
            <div className="max-w-2xl mx-auto">
                <p className="text-lg mb-8 text-center font-body text-gray-700">
                    Remplissez le formulaire ci-dessous pour obtenir un devis personnalisé pour vos besoins en douane et transit. Notre équipe vous répondra dans les plus brefs délais.
                </p>
                <QuoteForm />
            </div>
        </div>
    )
}
