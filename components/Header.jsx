import Link from 'next/link'
import { useState } from 'react'

const AppNameLink = () => (
  <Link href="/">
    <a className="text-gray-700 text-2xl">
      Next.js
    <span className="text-green-500">Fitness</span>
    </a>
  </Link>
)

const MenuIcon = () => <svg className="text-gray-600 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" /></svg>
const CloseIcon = () => <svg className="text-gray-600 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
const CartIcon = () => <svg className="text-gray-600 w-6 h-6 hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>

const MobileHeader = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleVisibility = () => setIsOpen(isOpen => !isOpen)
  return (
    <div className="bg-green-50 sm:hidden">
      <div className="flex justify-between items-center p-3 bg-green-100">
        <button type="button" onClick={toggleVisibility}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <AppNameLink />
        <Link href="/cart">
          <a><CartIcon /></a>
        </Link>
      </div>
      <ul className={` text-gray-800 ${isOpen ? 'block' : 'hidden'}`}>
        {categories.map(c => (
          <li key={c.id} className="hover:bg-green-400 hover:text-white">
            <Link href={`/categories/${c.slug}`}>
              <a className="block py-4 px-3" onClick={toggleVisibility}>{c.name}</a>
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
              <a className="block py-4 px-2">{c.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <Link href="/cart">
      <a><CartIcon /></a>
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