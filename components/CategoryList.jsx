import Category from './Category'

const CategoryList = ({ categories }) => (
    <div className="space-y-1 md:space-y-0 md:grid md:grid-cols-3 md:gap-4">
        {categories.map(c => (
            <Category key={c.id} {...c} />
        ))}
    </div>
)

export default CategoryList