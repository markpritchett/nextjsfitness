import { getMainCategories } from '../graphql'
import Layout from '../components/Layout'

export async function getStaticProps() {
  const categories = await getMainCategories()

  return {
    props: {
      categories,
    },
  }
}

export default function Cart({ categories }) {
  return (
    <Layout content={(
      <div className="">
        <div className="text-2xl">Cart Page</div>
      </div>
    )} categories={categories} />
  )
}
