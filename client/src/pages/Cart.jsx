import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


const Cart = () => {
return (
    <>
    <Navbar/>
   <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white px-6 mt-2 mb-2">

  <div className="relative bg-white max-w-2xl w-full rounded-3xl shadow-2xl border border-blue-100 p-10 text-center">

    {/* Back Button */}
    <div className="absolute top-6 left-6">
      <Link to="/" className="px-5 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg">
        ← Back
      </Link>
    </div>

    {/* Cart Icon */}
    <div className="text-7xl mb-6">
      🛒
    </div>

    {/* Heading */}
    <h2 className="text-4xl font-bold text-gray-800 mb-4">
      Your Cart is Empty
    </h2>

    {/* Description */}
    <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto mb-8">
      Discover premium disposable products for weddings,
      parties, catering services, restaurants, and food businesses.
      Start adding products to build your order today.
    </p>

    {/* Action Button */}
    <Link to="/collection" className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-blue-800 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg">
      Browse Collections →
    </Link>

    {/* Stats */}
    <div className="flex justify-center gap-10 mt-10 text-sm text-gray-600">
      <div>
        <p className="text-2xl font-bold text-blue-700">35+</p>
        Products
      </div>

      <div>
        <p className="text-2xl font-bold text-blue-700">100%</p>
        Quality
      </div>

      <div>
        <p className="text-2xl font-bold text-blue-700">24×7</p>
        Support
      </div>
    </div>

  </div>

</div>
    <Footer/>
    </>
)
}
export default Cart;