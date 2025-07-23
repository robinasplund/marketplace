import { useEffect, useState } from 'react';
import { useUserStore } from '../../store/userStore.js';
import Item from './Item.jsx';
import AddItemForm from './AddItemForm.jsx';

const User = () => {
  const user = useUserStore((state) => state.user);
  const fetchItems = useUserStore((state) => state.fetchItems);
  const addItem = useUserStore((state) => state.addItem);
  const deleteItem = useUserStore((state) => state.deleteItem);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      const data = await fetchItems();
      setItems(data);
    };
    loadItems();
  }, []);

  const handleDelete = async (itemId) => {
    await deleteItem(itemId);
    const updatedItems = await fetchItems();
    setItems(updatedItems);
  };

  return (
    <div className="p-6 flex flex-col lg:flex-row gap-6">

      {/* Left: Info + Form */}
      <div className="lg:w-1/4 w-full space-y-6">
        <div className="bg-white shadow p-4 rounded text-center">
          <div className="text-5xl mb-2 cursor-default">👤</div>
          <h2 className="text-xl font-bold mb-1 cursor-default">Välkommen</h2>
          <p className="text-gray-700 cursor-default">{user.email}</p>
        </div>

        <AddItemForm
          onAdd={async (form) => {
            await addItem(form);
            const updatedItems = await fetchItems();
            setItems(updatedItems);
          }}
        />
      </div>

      {/* Right: Items */}
      <div className="lg:w-3/4 w-full">
        <h3 className="text-lg font-semibold mb-4 cursor-default">Dina varor</h3>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <Item key={item.id} {...item} deleteItem={() => handleDelete(item.id)} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default User;

