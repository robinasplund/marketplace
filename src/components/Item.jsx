
const Item = ({ name, description, category, price, deleteItem }) => {
  
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full transition hover:shadow-lg border">

      <button 
        className="cursor-pointer"
        onClick={deleteItem}
      >
        ❌
      </button>

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