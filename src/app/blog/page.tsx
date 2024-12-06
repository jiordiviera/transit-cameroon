import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Blog | Douane Transit Cameroun',
    description: 'Restez informé des dernières actualités douanières, des changements de réglementation et des conseils d\'experts en import-export au Cameroun.',
}

const blogPosts = [
    {
        title: "Nouvelles réglementations douanières au Cameroun en 2023",
        excerpt: "Découvrez les changements importants dans la réglementation douanière camerounaise et comment ils peuvent affecter vos opérations d'import-export.",
        date: "2023-05-15",
        slug: "nouvelles-implementations-douaniers-2023"
    },
    {
        title: "5 conseils pour optimiser vos procédures d'importation",
        excerpt: "Apprenez comment rationaliser vos processus d'importation et économiser du temps et de l'argent grâce à ces astuces d'experts.",
        date: "2023-04-22",
        slug: "conseils-optimisation-importation"
    },
    {
        title: "L'impact de la COVID-19 sur le commerce international au Cameroun",
        excerpt: "Analysez les effets de la pandémie sur les échanges commerciaux et découvrez comment s'adapter à la nouvelle normalité.",
        date: "2023-03-10",
        slug: "impact-covid19-commerce-cameroun"
    }
]

export default function Blog() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center text-cameroon-green">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2 text-cameroon-red">
                            <Link href={`/blog/${post.slug}`} className="hover:underline">
                                {post.title}
                            </Link>
                        </h2>
                        <p className="text-sm text-gray-600 mb-4">{post.date}</p>
                        <p className="mb-4">{post.excerpt}</p>
                        <Link href={`/blog/${post.slug}`} className="text-cameroon-green hover:text-cameroon-yellow font-semibold">
                            Lire la suite →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

