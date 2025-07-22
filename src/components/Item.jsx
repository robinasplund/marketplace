const Item = ({ name, description, category, price, deleteItem }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-md p-6 w-full transition hover:shadow-lg border cursor-pointer">
      
      {/* DELETE BUTTON i övre högra hörnet */}
      <button
        onClick={deleteItem}
        className="absolute top-3 right-3 p-1 hover:bg-gray-200 rounded-full cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 text-gray-600 hover:text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}  
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* INNEHÅLL */}
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{category}</p>
      <p className="text-gray-700 mb-4">{description}</p>
      
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-green-600">{price}</span>
      </div>
      
    </div>
  );
};

export default Item;