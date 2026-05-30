import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { disposalItems } from "../assets/data";
import  Dashboard  from "../components/Dashboard";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <Navbar />

     {/* dashboard  */}
     <Dashboard/>
     <div id="product-section">
      <Products/>
     </div>

      <div id="footer-section">
        <Footer/>
      </div>
    </>
  );
};

export default Home;