import Link from 'next/link'
import { useState } from 'react'
import { useCartState } from '../context/cart-context'

const AppNameLink = () => (
  <Link href="/">
    <a className="sm:py-4 text-gray-700 text-3xl sm:text-2xl">
      Next.js
    <span className="text-green-500">Fitness</span>
    </a>
  </Link>
)

const MenuIcon = () => <svg className="text-gray-600 w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h8m-8 6h16" /></svg>
const CloseIcon = () => <svg className="text-gray-600 w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12"></path></svg>
const CartIcon = () => {
  const { items } = useCartState()
  const itemCount = items.length
  return (
    <div className="relative inline-flex text-gray-600 w-8 h-8">
      <span className="absolute z-10 left-5 top-1 text-white bg-green-500 rounded-full flex text-center justify-center text-xs h-4 w-4">{itemCount}</span>
      <svg className="absolute top-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    </div>
  )
}

const MobileHeader = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleVisibility = () => setIsOpen(isOpen => !isOpen)
  return (
    <div className="bg-green-50 sm:hidden">
      <div className="flex justify-between items-center p-3 bg-green-100">
        <button data-test="mobile-menu-button" type="button" onClick={toggleVisibility}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <AppNameLink />
        <Link href="/cart">
          <a data-test="header-cart-link"><CartIcon /></a>
        </Link>
      </div>
      <ul className={` text-gray-800 ${isOpen ? 'block' : 'hidden'}`}>
        {categories.map(c => (
          <li key={c.id} className="hover:bg-green-400 hover:text-white">
            <Link href={`/categories/${c.slug}`}>
              <a data-test="header-nav-link" className="block py-4 px-3 text-xl" onClick={toggleVisibility}>{c.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const NonMobileHeader = ({ categories }) => (
  <div className="hidden sm:flex items-center justify-between bg-green-100">
    <div className="flex items-center">

      <AppNameLink />
      <ul className="ml-10 flex space-x-5 text-gray-800">
        {categories.map(c => (
          <li key={c.id} className="hover:bg-green-400 hover:text-white">
            <Link href={`/categories/${c.slug}`}>
              <a data-test="header-nav-link" className="block py-4 px-2 text-xl">{c.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <Link href="/cart">
      <a data-test="header-cart-link"><CartIcon /></a>
    </Link>
  </div>
)

const Header = ({ categories }) => (
  <header className="bg-green-100">
    <div className="sm:px-3 md:container md:mx-auto">
      <MobileHeader categories={categories} />
      <NonMobileHeader categories={categories} />
    </div>
  </header>
)

export default Header