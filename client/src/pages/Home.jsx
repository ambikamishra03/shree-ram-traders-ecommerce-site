import Navbar from "../components/Navbar";
import { disposalItems } from "../assets/data.jsx";
import ProductCard from "../components/ProductCard.jsx"
const Home = () => {

  return (
    <>
    <Navbar/>
    <div>This is home page, this will shown to user first.</div>
     {/* Navbar
     each product with image price and quantity
     footer */}
     <div className="card-container">
      { disposalItems.map((item)=>(
        <ProductCard key={item.id} item={item}/>
      ))}
     </div>
    </>
  )
}

export default Home;
