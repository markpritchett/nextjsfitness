import { getAllCategories } from '../graphql'
import Layout from '../components/Layout'

const CheckCircle = () => <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>

export async function getStaticProps() {
    const categories = await getAllCategories();

    return {
        props: {
            categories,
        },
    }
}

export default function Checkout({ categories }) {
    const mainCategories = categories.filter(c => !c.parent)
    return (
        <Layout content={(
            <div className="bg-gray-50 p-10">
                <div className="flex justify-center items-center text-green-400 text-3xl">
                    <CheckCircle />
                    <div>Checkout Complete</div>
                </div>
            </div>
        )} categories={mainCategories} />
    )
}