

const CollectionCard = ({ item, onShowMore  }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-blue-100">

      {/* Image Section */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-50 to-white">

        <img
          src={item.image}
          alt={item.category}
          className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md">
          {item.items.length} Items
        </div>
      </div>

      {/* Content */}
      <div className="p-6">

        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          {item.category}
        </h2>

        <p className="text-gray-600 leading-relaxed mb-5">
          {item.description}
        </p>

        {/* Preview Products */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-blue-700 mb-2">
            Popular Products
          </p>

          <div className="flex flex-wrap gap-2">
            {item.items.slice(0, 3).map((product) => (
              <span
                key={product.id}
                className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full"
              >
                {product.name}
              </span>
            ))}
          </div>
        </div>

        {/* Button */}
        <button
          className="w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white py-3 rounded-xl font-semibold text-lg hover:from-blue-800 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-xl"
          onClick={onShowMore}
        >
          Show More →
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;