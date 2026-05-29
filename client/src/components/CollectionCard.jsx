const CollectionCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1">
      
      <div className="h-56 bg-gray-100 flex items-center justify-center p-4">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {item.name}
        </h2>

        <p className="text-gray-600 text-md mb-4">
          {item.description}
        </p>

        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-semibold">Material:</span>{" "}
            {item.material}
          </p>

          <p>
            <span className="font-semibold">Size:</span>{" "}
            {item.size}
          </p>

          <p>
            <span className="font-semibold">Color:</span>{" "}
            {item.color}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            ₹{item.pricePerItem}
          </span>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;