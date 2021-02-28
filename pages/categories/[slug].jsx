import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { getMainCategories } from '../../graphql'

export async function getStaticPaths() {
    const categories = await getMainCategories();
    const paths = categories.map(c => Object.assign({}, { params: { slug: c.slug } }));

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps() {
    const categories = await getMainCategories();

    return {
        props: {
            categories,
        },
    }
}

export default function CategoryPage({ categories }) {
    const router = useRouter()
    const { slug } = router.query
    const category = categories.find(c => c.slug === slug)
    return (
        <Layout content={(
            <div className="text-2xl">
                {category.name} Page!
            </div>
        )} categories={categories} />
    )
}