'use client'

import React, { useState } from 'react'

export default function QuoteForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        productType: '',
        quantity: '',
        origin: '',
        destination: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Ici, vous pouvez ajouter la logique pour envoyer les données du formulaire
        console.log('Demande de devis soumise:', formData)
        // Réinitialiser le formulaire après soumission
        setFormData({ name: '', email: '', company: '', productType: '', quantity: '', origin: '', destination: '' })
        // Ajouter ici la logique pour afficher un message de confirmation
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cameroon-green focus:ring-cameroon-green"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cameroon-green focus:ring-cameroon-green"
                />
            </div>
            <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Entreprise</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cameroon-green focus:ring-cameroon-green"
                />
            </div>
            <div>
                <label htmlFor="productType" className="block text-sm font-medium text-gray-700">Type de produit</label>
                <input
                    type="text"
                    id="productType"
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cameroon-green focus:ring-cameroon-green"
                />
            </div>
            <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantité</label>
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cameroon-green focus:ring-cameroon-green"
                />
            </div>
            <div>
                <label htmlFor="origin" className="block text-sm font-medium text-gray-700">Pays d'origine</label>
                <input
                    type="text"
                    id="origin"
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cameroon-green focus:ring-cameroon-green"
                />
            </div>
            <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Pays de destination</label>
                <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cameroon-green focus:ring-cameroon-green"
                />
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cameroon-green hover:bg-cameroon-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cameroon-green"
                >
                    Demander un devis
                </button>
            </div>
        </form>
    )
}

