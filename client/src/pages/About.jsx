import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const About = () => {
    return (
        <>
        <Navbar/>
        <section className="bg-white py-16">
  <div className="max-w-6xl mx-auto px-6">
    
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        About Shree Ram Traders
      </h1>
      <p className="text-gray-600 max-w-3xl mx-auto text-lg">
        Your trusted partner for high-quality disposable products and packaging
        solutions for businesses, events, restaurants, caterers, and households.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      <div>
        <img
          src="/images/log.png"
          alt="Shree Ram Traders"
          className="rounded-xl shadow-lg w-full"
        />
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Who We Are
        </h2>

        <p className="text-gray-600 mb-4 leading-relaxed">
          Shree Ram Traders is dedicated to providing premium-quality disposable
          products at competitive prices. We serve retailers, restaurants,
          caterers, event organizers, and households with a wide range of
          reliable and hygienic products.
        </p>

        <p className="text-gray-600 mb-4 leading-relaxed">
          Our extensive collection includes paper cups, disposable plates,
          bowls, containers, packaging materials, and other essential products
          designed to meet everyday business and personal needs.
        </p>

        <p className="text-gray-600 leading-relaxed">
          With a strong commitment to quality, affordability, and customer
          satisfaction, we strive to make disposable product purchasing simple,
          convenient, and dependable.
        </p>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-8 mt-16">
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold mb-3 text-blue-600">
          Our Mission
        </h3>
        <p className="text-gray-600">
          To provide high-quality disposable products that help businesses and
          customers maintain convenience, hygiene, and efficiency.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold mb-3 text-blue-600">
          Our Vision
        </h3>
        <p className="text-gray-600">
          To become a leading supplier of disposable and packaging solutions by
          delivering value, quality, and exceptional service.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold mb-3 text-blue-600">
          Why Choose Us
        </h3>
        <p className="text-gray-600">
          Premium products, competitive pricing, fast delivery, reliable
          service, and a customer-first approach.
        </p>
      </div>
    </div>

  </div>
</section>
<Footer/>
        </>
    )
}
export default About;