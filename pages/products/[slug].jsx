import { useState } from "react";
import { useRouter } from 'next/router'
import { getAllCategories, getAllProducts } from '../../graphql'
import Layout from '../../components/Layout'
import { useCartDispatch } from '../../context/cart-context'
import { formatMoney } from "../../formatting"
import QuantityPicker from '../../components/QuantityPicker'

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
  const dispatch = useCartDispatch()
  const [quantity, setQuantity] = useState(1)
  const handleQuantityChange = quantity => setQuantity(quantity)
  const addProduct = () => dispatch({ type: 'add_item', payload: Object.assign({}, { ...product }, { quantity }) })
  return (
    <Layout content={(
      <div>
        <div className="bg-gray-50 rounded-md inline-flex pr-10 shadow-md">
          <img className="h-48 w-48 overflow-hidden rounded-l-md" src="https://source.unsplash.com/random" alt={product.name} />
          <div className="px-4 pt-1 pb-2 flex flex-col">
            <div className="text-4xl text-gray-700">{product.name}s</div>
            <div className="text-2xl text-gray-400">{formatMoney(product.price)}</div>
            <QuantityPicker OnQuantityChange={handleQuantityChange} />
            <button className="mt-auto align-bottom w-full px-4 py-3 rounded-md bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-green-500" onClick={addProduct}>
              Add
            </button>
          </div>
        </div>
      </div>

    )} categories={mainCategories} />
  )
}