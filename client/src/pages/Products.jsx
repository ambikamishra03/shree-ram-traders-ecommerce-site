import { disposalItems } from "../assets/data";
import ProductCard from "../components/ProductCard";


const Products = () => {
return (
    <>
          {/* Products Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Products
          </h2>

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
            {disposalItems.length} Products
          </span>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {disposalItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
)
}

export default Products;