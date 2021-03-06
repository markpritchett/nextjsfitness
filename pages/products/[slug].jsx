import { useRouter } from 'next/router'
import { getAllCategories, getAllProducts } from '../../graphql'
import Layout from '../../components/Layout'

export async function getStaticProps() {
  const categories = await getAllCategories()
  const products = await getAllProducts()
  return {
    props: {
      categories,
      products,
    },
  }
}

export async function getStaticPaths() {
  const products = await getAllProducts()
  const paths = products.map(p => {
    return {
      params: {
        slug: p.slug
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export default function ProductPage({ categories, products }) {
  const router = useRouter()
  const mainCategories = categories.filter(c => !c.parent)
  const { slug } = router.query
  const product = products.find(p => p.slug === slug)
  return (
    <Layout content={(
      <div>
        <div className="bg-gray-50 rounded-md flex shadow-md">
          <img className="h-48 w-48 overflow-hidden rounded-l-md" src="https://source.unsplash.com/random" alt={product.name} />
          <div className="px-4 pt-1 pb-2 flex flex-col">
            <div className="text-4xl text-gray-700">{product.name}</div>
            <div className="text-right text-2xl text-green-400">£{product.price}</div>
            <button className="mt-auto align-bottom w-full px-4 py-3 rounded-md bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-green-500" onClick={() => dispatch({ type: 'add_item', payload: product })}>
              Add
            </button>
          </div>
        </div>
      </div>

    )} categories={mainCategories} />
  )
}