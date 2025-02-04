import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Raleway } from 'next/font/google';
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from '@/components/PageTransition'
import { Toaster } from "@/components/ui/sonner"

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair-display',
})

const raleway = Raleway({
    subsets: ['latin'],
    variable: '--font-raleway',
})

export const metadata: Metadata = {
    title: 'Services de Douane et Transit au Cameroun',
    description: 'Entreprise spécialisée dans les services de douane et de transit au Cameroun. Expertise en transit international, gestion des formalités douanières et conseils en import/export.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr" className={`${playfairDisplay.variable} ${raleway.variable}`}>
            <body className="font-body">
                <Header />
                <PageTransition>
                    <main>{children}</main>
                    <Toaster />
                </PageTransition>
                <Footer />
            </body>
        </html>
    )
}
