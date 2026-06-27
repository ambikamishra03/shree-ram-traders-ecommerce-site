const Dialog = ({isOpen,onClose,item}) => {
    if(!isOpen) return null;
  return (
    <>
      <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      >
        {/* dialog box  */}
        <div
        className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-2xl max-h-[80vh] overflow-hidden"
        onClick={(e) => e.setPropagation()}
        >
          {/* header  */}
          <div className="flex justify-between items-center border-b px-6 py-4">
            <h2
            className="text-2xl font-bold text-blue-700"
            >{item.category}</h2>
            <button
            onClick={onClose}
            className="text-3xl text-gray-500 hover:text-red-500"
            >X</button>
          </div>
           {/* body  */}
            <div>
              <p>description</p>
              <div>
                <div>
                  <h3>name</h3>
                  <p>size</p>
                  <p>price</p>
                </div>
              </div>
            </div>
             {/* footer  */}
             <div>
              <button>close</button>
             </div>
          </div>
        </div>
    </>
  );

};

export default Dialog;
