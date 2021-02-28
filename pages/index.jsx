import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-gray-100 space-y-2">
      <Head>
        <title>Next.js Fitness</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex-1 px-2">
        <div className="space-y-2 md:grid md:grid-cols-3 md:gap-4">
          <a href="" className="relative h-48 flex overflow-hidden focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
            <div className="absolute overflow-hidden z-10 inline-flex items-center justify-center w-full h-6 py-8 text-white text-3xl font-light bg-green-200 bg-opacity-50">Weights</div>
            <img className="object-cover flex w-full transform scale-100 hover:scale-105" src="https://source.unsplash.com/CQwNdMxwjfk" />
          </a>
          <a href="" className="relative h-48 flex overflow-hidden focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
            <div className="absolute overflow-hidden z-10 inline-flex items-center justify-center w-full h-6 py-8 text-white text-3xl font-light bg-green-200 bg-opacity-50">Treadmills</div>
            <img className="object-cover flex w-full transform scale-100 hover:scale-105" src="https://source.unsplash.com/pCT8ag1o3nU" />
          </a>
          <a href="" className="relative h-48 flex overflow-hidden focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
            <div className="absolute overflow-hidden z-10 inline-flex items-center justify-center w-full h-6 py-8 text-white text-3xl font-light bg-green-200 bg-opacity-50">Machines</div>
            <img className="object-cover flex w-full transform scale-100 hover:scale-105" src="https://source.unsplash.com/U00w3A4iC7c" />
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
