import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/log.png"
                alt="Logo"
                className="w-18 h-18 rounded-full bg-white p-1"
              />

              <div>
                <h2 className="text-2xl font-bold">
                  Shree Ram Traders
                </h2>
                <p className="text-sm text-blue-100">
                  Premium Disposable Products
                </p>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              Trusted supplier of disposable plates, bowls,
              glasses, food containers and catering products.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5 border-b border-white/30 pb-2">
              Contact Us
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-yellow-300"
                />
                <span className="text-sm">
                  ambikamishra9236@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-green-300"
                />
                <span className="text-sm">
                  +91 9236728130
                </span>
              </div>

            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xl font-semibold mb-5 border-b border-white/30 pb-2">
              Location
            </h3>

            <div className="flex gap-3">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-red-300 mt-1"
              />

              <div>
                <p>Deoria, 274001</p>
                <p>Uttar Pradesh, India</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5 border-b border-white/30 pb-2">
              Follow Us
            </h3>

            <div className="flex gap-5 text-3xl">

              <a
                href="#"
                className="hover:text-pink-400 hover:scale-125 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="#"
                className="hover:text-blue-300 hover:scale-125 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              <a
                href="#"
                className="hover:text-green-400 hover:scale-125 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>

              <a
                href="#"
                className="hover:text-red-400 hover:scale-125 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-blue-100">
          © {new Date().getFullYear()} Shree Ram Traders. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;