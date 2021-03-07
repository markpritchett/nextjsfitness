import { useState } from "react";
import { useRouter } from 'next/router'
import { getAllCategories, getAllProducts } from '../../graphql'
import Layout from '../../components/Layout'
import { useCartDispatch } from '../../context/cart-context'
import { formatMoney } from "../../formatting";

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

  const handleQuantityChange = e => {
    let newValue = Number(e.target.value) || 1
    if (newValue < 1) {
      newValue = 1
    }
    return setQuantity(newValue);
  }
  const increment = () => setQuantity(quantity => quantity + 1)
  const decrement = () => setQuantity(quantity => quantity > 1 ? quantity - 1 : 1)
  const addProduct = () => dispatch({ type: 'add_item', payload: Object.assign({}, { ...product }, { quantity }) })

  return (
    <Layout content={(
      <div>
        <div className="bg-gray-50 rounded-md inline-flex pr-10 shadow-md">
          <img className="h-48 w-48 overflow-hidden rounded-l-md" src="https://source.unsplash.com/random" alt={product.name} />
          <div className="px-4 pt-1 pb-2 flex flex-col">
            <div className="text-4xl text-gray-700">{product.name}s</div>
            <div className="text-2xl text-gray-400">{formatMoney(product.price)}</div>
            <div>
              <span className="text-gray-400 uppercase text-sm">Qty</span>
              <button className="ml-2 border-t border-l border-b border-gray-50 focus:outline-none bg-gray-200 text-gray-600 font-bold px-3 py-1" onClick={decrement} disabled={quantity < 2}>-</button>
              <input type="text" className="w-12 border-t border-b border-gray-50 text-center px-3 py-2 -ml-1 -mr-1 focus:outline-none" value={quantity} onChange={handleQuantityChange} />
              <button className="border-t border-l border-b border-gray-50 focus:outline-none bg-gray-200 text-gray-600 font-bold px-3 py-1" onClick={increment}>+</button>
            </div>
            <button className="mt-auto align-bottom w-full px-4 py-3 rounded-md bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-green-500" onClick={addProduct}>
              Add
            </button>
          </div>
        </div>
      </div>

    )} categories={mainCategories} />
  )
}