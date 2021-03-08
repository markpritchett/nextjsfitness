import { getAllCategories } from '../graphql'
import Layout from '../components/Layout'
import Category from '../components/Category'
import CategoryList from '../components/CategoryList'

export async function getStaticProps() {
  const categories = await getAllCategories()

  return {
    props: {
      categories,
    },
  }
}

export default function Home({ categories }) {
  const mainCategories = categories.filter(c => !c.parent)
  const categoryListItems = mainCategories.map(c => Object.assign({}, {...c}, {href: `/categories/${c.slug}`}))
  return (
    <Layout content={(
      <CategoryList categories={categoryListItems} dataTestAttrValue="category-link" />
    )} categories={mainCategories} />
  )
}
