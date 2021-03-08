import Link from 'next/link'

const Category = ({ href, name, imageSrc }) => (
    <Link href={href}>
        <a data-test="category-link" className="relative h-48 flex overflow-hidden focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
            <div className="absolute overflow-hidden z-10 inline-flex items-center justify-center w-full h-6 py-8 text-white text-3xl font-light bg-green-200 bg-opacity-50">{name}</div>
            <img className="object-cover flex w-full transform scale-100 hover:scale-105" src={imageSrc || 'https://source.unsplash.com/random'} alt={name} />
        </a>
    </Link>
)

export default Category