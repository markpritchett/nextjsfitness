import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getMainCategories } from '../graphql'

export async function getStaticProps() {
  const categories = await getMainCategories()

  return {
    props: {
      categories,
    },
  }
}

export default function Home({categories}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 sm:space-y-4">
      <Head>
        <title>Next.js Fitness</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header categories={categories} />
      <main className="flex-grow sm:px-3 md:container md:mx-auto">
        <div className="space-y-3 md:space-y-0 md:grid md:grid-cols-3 md:gap-4">
          {categories.map(c => (
            <Link key={c.id} href={`/categories/${c.slug}`}>
              <a className="relative h-48 flex overflow-hidden focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                <div className="absolute overflow-hidden z-10 inline-flex items-center justify-center w-full h-6 py-8 text-white text-3xl font-light bg-green-200 bg-opacity-50">{c.name}</div>
                <img className="object-cover flex w-full transform scale-100 hover:scale-105" src={c.imageSrc} />
              </a>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
