import Link from 'next/link'

const Breadcrumb = ({items}) => (
    <div className="bg-gray-200 flex p-3 mb-5">
        {items.map((item, index) => (
            <div className="text-xl" key={item.id}>
                {index === items.length - 1 ?
                    <span data-test="breadcrumb-item" className="text-gray-500">{item.name}</span> :
                    <>
                        <Link href={item.slug}><a data-test="breadcrumb-link-item" className="text-green-500 hover:text-green-600">{item.name}</a></Link>
                        <span className="text-gray-300 mx-1">/</span>
                    </>}
            </div>
        ))}
    </div>
)

export default Breadcrumb