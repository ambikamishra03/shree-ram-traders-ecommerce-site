import Navbar from "../components/Navbar";
import { collections } from "../assets/data";
import CollectionCard from "../components/CollectionCard";

const Collection = () =>{
return (
    <>
    <Navbar/>
    {collections.map((item) => (
        <CollectionCard key={item.id} item={item}/>
    ))}
    </>
)
}

export default Collection;