import "tailwindcss/tailwind.css";

if (Boolean(process.env.MOCK_GRAPHQL_REQUESTS)) {
  require('../mocks')
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
