const Dialog = ({ isOpen, onClose, item }) => {
  if (!isOpen || !item) return null;
  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* dialog box  */}
        <div
          className="bg-white rounded-2xl shadow-2xl w-[92%] max-w-5xl max-h-[85vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* header  */}
          <div className="flex justify-between items-center border-b px-6 py-4">
            <h2 className="text-3xl font-bold text-blue-700">
              {item.category}
            </h2>
            <p className="text-gray-500 mt-1">{item.description}</p>
            <button
              onClick={onClose}
  className="w-10 h-10 rounded-full text-3xl text-gray-500 hover:bg-red-100 hover:text-red-600 transition"
            >
              ×
            </button>
          </div>
          {/* body  */}
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <div className="grid sm:grid-cols-2 gap-4">
              {item.items.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 border rounded-xl p-4 hover:shadow-lg hover:border-blue-500 transition"
                >
                  {/* Image */}

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-contain rounded-lg bg-gray-100 p-2"
                  />

                  {/* Details */}

                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">
                        {product.name}
                      </h3>

                      {product.size && (
                        <p className="text-sm text-gray-500">
                          Size : {product.size}
                        </p>
                      )}

                      {product.price && (
                        <p className="text-blue-600 font-semibold mt-2">
                          ₹ {product.price}
                        </p>
                      )}
                    </div>

                    <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* footer  */}
          <div className="border-t p-4 flex justify-end">
            <button
              onClick={onClose}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialog;
