import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 shadow-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-center w-18 h-18 rounded-full overflow-hidden bg-white shadow-lg border-2 border-white">
            <img
              src="/images/log.png"
              alt="Shree Ram Traders Logo"
              className="w-full h-full object-cover"
            />
          </div>{" "}
          <div className="flex flex-col cursor-pointer">
            <h1 className="text-4xl font-extrabold text-white tracking-wide">
              Shree Ram Traders
            </h1>
            <p className="text-blue-100 text-xs tracking-wider">
              Premium Disposable Products
            </p>
          </div>
          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-10 backdrop-blur-md px-8 py-3">
            <Link
              to="/"
              className="text-white font-medium transition-all duration-300 hover:scale-125 inline-block"
            >
              Home
            </Link>

            <a
              href="#"
              className="text-white font-medium transition-all duration-300 hover:scale-125 inline-block"
            >
              About
            </a>

            <Link
              to="/collection"
              className="text-white font-medium transition-all duration-300 hover:scale-125 inline-block"
            >
              Collection
            </Link>

            <a
              href="#"
              className="text-white font-medium transition-all duration-300 hover:scale-125 inline-block"
            >
              Contact
            </a>
          </div>
          {/* icons  */}
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-blue hover:text-blue-700 hover:scale-110 transition-all duration-300">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-white text-lg"
              />
            </button>
            <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-blue hover:text-blue-700 hover:scale-110 transition-all duration-300">
              <FontAwesomeIcon icon={faUser} className="text-white text-lg" />
            </button>

            <button className="relative w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-blue-700 text-lg"
              />

              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
