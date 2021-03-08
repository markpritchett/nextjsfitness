import { useRouter } from 'next/router'
import { getAllCategories } from '../graphql'
import Layout from '../components/Layout'
import { useCartState, useCartDispatch } from '../context/cart-context'
import { formatMoney } from '../formatting'
import { useState } from 'react'

const CartItem = ({ id, name, quantity, price }) => {
  const dispatch = useCartDispatch()
  return (
    <div className="items-center grid grid-cols-5 gap-2 odd:bg-gray-50 px-6 py-4">
      <div className="w-25">
        <img className="h-16 w-16" src="https://source.unsplash.com/random" alt={name} />
      </div>
      <div>{name}</div>
      <div>x{quantity}</div>
      <div>
        <div className="text-right">{formatMoney(price)} <span className="text-sm text-gray-400">(each)</span> </div>
      </div>
      <div className="text-right">
        <button className="px-4 py-3 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-red-500" onClick={() => dispatch({ type: 'remove_item', payload: { id } })}>Remove</button>
      </div>
    </div>
  )
}

const EmptyCart = () => (
  <div className="bg-gray-50 p-10 flex flex-col justify-center items-center">
    <div className="text-gray-600 text-2xl">Empty Cart</div>
    <div>
      <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    </div>
  </div>
)

const PopulatedCart = ({ items, total }) => (
  <div>
    <div className="text-2xl text-gray-700">Your items</div>
    {items.map(item => <CartItem key={item.name} {...item} />)}
    <div className="px-6 py-4 flex justify-end items-baseline space-x-1 text-xl text-gray-700"><span>Total</span><span className="text-3xl text-green-500">{formatMoney(total)}</span></div>

  </div>
)

export async function getStaticProps() {
  const categories = await getAllCategories();

  return {
    props: {
      categories,
    },
  }
}

export default function Cart({ categories }) {
  const mainCategories = categories.filter(c => !c.parent)
  const { items } = useCartState()
  const total = items.map(item => item.price * item.quantity).reduce((previous, current) => Math.round(previous + current, 2), 0)
  const [processingOrder, setProcessingOrder] = useState(false)
  const router = useRouter()
  const dispatch = useCartDispatch()
  const checkoutHref = '/checkout'
  const handleClick = (e) => {
    setProcessingOrder(true)
    e.preventDefault()
    dispatch({ type: 'checkout' })
    router.push(checkoutHref)
  }
  return (
    <Layout content={(
      <div>
        {!processingOrder && items.length === 0 && <EmptyCart />}
        {items.length > 0 && <>
          <PopulatedCart items={items} total={total} />
          <div className="px-6 py-4 flex justify-end">
            <a href={checkoutHref} onClick={handleClick} className="px-10 py-3 rounded-md bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-green-500">Checkout</a>
          </div>
        </>
        }
        {processingOrder && <div className="text-2xl text-green-400">Processing...</div>}
      </div>
    )} categories={mainCategories} />
  )
}
