import { useRouter } from 'next/router'
import Link from 'next/link'
import { getAllCategories } from '../../graphql'
import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb';

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

    return {
        props: {
            categories,
        },
    }
}

export default function CategoryPage({ categories }) {
    const router = useRouter()
    const { slug } = router.query
    const { asPath } = router

    const matchingCategories = slug.map(s => categories.find(c => c.slug == s))
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

    return (
        <Layout content={(
            <div>
                <Breadcrumb items={breadcrumbItems} />
                
                {currentCategory.categories.map(subCat => (
                    <Link key={subCat.id} href={`${asPath}/${subCat.slug}`}>
                        <a data-test="sub-category-link" className="text-4xl hover:bg-green-400 hover:text-white bg-gray-200 flex justify-center items-center w-64 h-64 rounded text-green-500">{subCat.name}</a>
                    </Link>
                ))}
            </div>

        )} categories={mainCategories} />
    )
}