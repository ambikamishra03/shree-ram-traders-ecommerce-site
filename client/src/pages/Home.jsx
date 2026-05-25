import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { disposalItems } from "../assets/data";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Shree Ram Traders
          </h1>

          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            Premium Disposable Products for Parties, Catering,
            Restaurants, Functions and Daily Use.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold mb-2">
            Shree Ram Traders
          </h3>

          <p className="text-gray-400">
            Quality Disposable Products at Wholesale Prices.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;