import "tailwindcss/tailwind.css";

if (process.env.MOCK_GRAPHQL_REQUESTS === 'true') {
  require('../mocks')
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
