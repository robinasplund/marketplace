
import Item from './Item.jsx'

const User = ({name,id,items}) => {

  return(
   <div className="w-full">
      {/* Header med användarinfo */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8 border">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">@{name.toLowerCase().replace(/\s+/g, '_')}</p>
      </div>

      {/* Grid med items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            description={item.description}
            category={item.category}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );

}
export default User;