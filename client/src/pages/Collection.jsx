import Navbar from "../components/Navbar";
import { collections } from "../assets/data";
import CollectionCard from "../components/CollectionCard";
import Footer from "../components/Footer"


const Collection = () => {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-blue-900 mb-4">
              Our Collections
            </h1>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore our complete range of disposable products for weddings,
              parties, catering services, restaurants, and special occasions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((item) => (
              <CollectionCard key={item.id} item={item} />
            ))}
          </div>

        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Collection;