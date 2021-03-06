import { getAllCategories } from '../graphql'
import Layout from '../components/Layout'

export async function getStaticProps() {
  const categories = await getAllCategories()

  return {
    props: {
      categories,
    },
  }
}

export default function Cart({ categories }) {
  const mainCategories = categories.filter(c => !c.parent)
  return (
    <Layout content={(
      <div className="">
        <div className="text-2xl">Cart Page</div>
      </div>
    )} categories={mainCategories} />
  )
}
