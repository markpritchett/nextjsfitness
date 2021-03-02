import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ title, categories, content }) {
    const headTitle = title ? `Next.js Fitness | ${title}` : 'Next.js Fitness'
    return (
        <div className="min-h-screen flex flex-col bg-gray-100 space-y-1 sm:space-y-4">
            <Head>
                <title>{headTitle}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header categories={categories} />
            <main className="flex-grow sm:px-3 md:container md:mx-auto">
                {content}
            </main>
            <Footer />
        </div>
    )
}