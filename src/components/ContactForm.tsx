'use client'

import React, { useState } from 'react'
import { toast } from 'sonner'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus('loading')
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setStatus('success')
                toast.success('Votre message a été envoyé avec succès !')
                setFormData({ name: '', email: '', subject: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch (e) {
            console.error(e)
            setStatus('error')
        }
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
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Sujet</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cameroon-green focus:ring-cameroon-green"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cameroon-green focus:ring-cameroon-green"
                ></textarea>
            </div>
            <div>
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cameroon-green hover:bg-cameroon-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cameroon-green disabled:opacity-50"
                >
                    {status === 'loading' ? 'Envoi en cours...' : 'Envoyer'}
                </button>
            </div>
            {status === 'success' && (
                <p className="text-green-600">Votre message a été envoyé avec succès !</p>
            )}
            {status === 'error' && (
                <p className="text-red-600">Une erreur s&#39;est produite. Veuillez réessayer.</p>
            )}
        </form>
    )
}

