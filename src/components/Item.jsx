

const Item = ({
  name,
  description,
  category,
  price,
  user,
  number

}) => {

  return(
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-sm w-full transition hover:shadow-lg">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{category}</p>
      </div>

      <p className="text-gray-700 mb-2">{description}</p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold text-green-600">{price} kr</span>
        <span className="text-sm text-gray-400">Art.nr: {number}</span>
      </div>

      <div className="mt-2 text-sm text-gray-500">
        Upplagd av: {user}
      </div>
    </div>
  );

}
export default Item;