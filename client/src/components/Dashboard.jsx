import { TypeAnimation } from "react-type-animation";

const Dashboard = () =>{
    return (
        <>
        <section className="min-h-[50vh] bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 text-white flex items-center">
  <div className="max-w-7xl mx-auto px-6 w-full m-4">
    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* Left Content */}
      <div>

        <p className="uppercase tracking-widest text-yellow-300 font-semibold mb-3">
          Trusted Disposable Products Supplier
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-3">
          Everything You Need For
        </h1>

        <div className="text-3xl md:text-5xl font-bold text-yellow-300 h-18">
          <TypeAnimation
            sequence={[
              "Weddings 🎉",
              2000,
              "Restaurants 🍽️",
              2000,
              "Catering Services 🥘",
              2000,
              "Birthday Parties 🎂",
              2000,
              "Food Businesses 🚚",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="text-blue-100 mt-4 text-lg max-w-xl">
          Premium quality disposable plates, bowls, cups,
          containers, tissues and packaging products at
          wholesale prices.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <button className="bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-xl hover:scale-105 transition">
            Explore Products
          </button>

          <button className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-blue-800 transition">
            Contact Us
          </button>
        </div>

        <div className="flex gap-8 mt-8 text-sm text-blue-100">
          <div>
            <p className="text-2xl font-bold text-white">40+</p>
            Products
          </div>

          <div>
            <p className="text-2xl font-bold text-white">100%</p>
            Quality
          </div>

          <div>
            <p className="text-2xl font-bold text-white">24×7</p>
            Support
          </div>
        </div>

      </div>

      {/* Right Side */}
      {/* add a corousel here later */}
      <div className="hidden lg:flex justify-center">
        <img
          src="/images/Logo.png"
          alt="Shree Ram Traders"
          className="w-80 h-80 object-contain animate-pulse"
        />
      </div>

    </div>
  </div>
</section>
</>
    )
}
export default Dashboard;