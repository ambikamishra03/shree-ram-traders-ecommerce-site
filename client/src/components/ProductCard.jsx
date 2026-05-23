// card
const ProductCard = ({item}) =>{
    return (
        <>
        <div className="card">
            <h3>{item.name}</h3>
            <h3>{item.image}</h3>
            <h3>{item.description}</h3>
            <h3>{item.material}</h3>
            <h3>{item.size}</h3>
            <h3>{item.color}</h3>
            <h3>{item.pricePerItem}</h3>
        </div>
        </>
    )
}
export default ProductCard;