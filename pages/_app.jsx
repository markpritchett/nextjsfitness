import "tailwindcss/tailwind.css";
import { CartProvider } from '../context/cart-context'

if (process.env.MOCK_GRAPHQL_REQUESTS === 'true') {
  require('../mocks')
}

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
