import { useRouter } from 'next/router'
import Link from 'next/link'
import { getAllCategories, getAllProducts } from '../../graphql'
import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb';
import CategoryList from '../../components/CategoryList';

export async function getStaticPaths() {
    const categories = await getAllCategories();
    const result = [];

    const traverseCategories = (category, slugs) => {
        const results = [].concat(slugs).concat([category.slug]);
        result.push(results);
        category.categories.forEach((subCategory) => traverseCategories(subCategory, results));
    };

    const convertToPaths = (slug) => {
        return {
            params: {
                slug: [...slug]
            }
        };
    };

    categories.filter((c) => !c.parent).forEach((c) => traverseCategories(c, []));

    const paths = result.map(convertToPaths);

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps() {
    const categories = await getAllCategories();
    const products = await getAllProducts()

    return {
        props: {
            categories,
            products,
        },
    }
}

export default function CategoryPage({ categories, products }) {
    const router = useRouter()
    const { slug } = router.query
    const { asPath } = router

    const matchingCategories = slug.map(s => categories.find(c => c.slug === s))
    const mainCategories = categories.filter(c => !c.parent)
    const currentCategorySlug = slug[slug.length - 1]
    const currentCategory = categories.find(c => c.slug === currentCategorySlug)

    const breadcrumbItems = matchingCategories.map((c, index) => {
        const fullPath = matchingCategories.filter((_x, i) => i <= index).map(x => x.slug).join('/')
        return {
            id: c.id,
            name: c.name,
            slug: `/categories/${fullPath}`
        }
    })

    const subCategories = currentCategory.categories.map(subCategory => Object.assign({}, { ...subCategory }, { href: `${asPath}/${subCategory.slug}` }))
    const matchingProducts = products.filter(p => p.category?.id === currentCategory.id)

    return (
        <Layout content={(
            <div>
                <Breadcrumb items={breadcrumbItems} />
                <div className="mt-1 sm:mt-5">
                    {subCategories.length > 0 && <CategoryList categories={subCategories} dataTestAttrValue="category-link" />}

                    {matchingProducts.length > 0 && (
                        <div className="bg-gray-50 px-1 md:px-10 md:pb-10">
                            <h2 className="py-3 text-2xl uppercase tracking-widest font-semibold text-center text-green-600">Products</h2>
                            <div className="space-y-1 md:space-y-0 md:grid md:grid-cols-3 md:gap-4">
                                {matchingProducts.map(p => (
                                    <Link key={p.id} href={`/products/${p.slug}`}>
                                        <a data-test="sub-category-link" className="text-4xl hover:bg-green-400 hover:text-white bg-gray-200 flex justify-center items-center text-center w-full h-32 sm:h-48 rounded text-green-500">{p.name}</a>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </ div>

        )} categories={mainCategories} />
    )
}