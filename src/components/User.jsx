import { useEffect, useState } from 'react';
import { useUserStore } from '../store/userStore';
import Item from './Item.jsx';

const User = () => {
  const user = useUserStore((state) => state.user);
  const fetchItems = useUserStore((state) => state.fetchItems);
  const addItem = useUserStore((state) => state.addItem);
  const deleteItem = useUserStore((state) => state.deleteItem);

  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
  });

  useEffect(() => {
    const loadItems = async () => {
      const data = await fetchItems();
      setItems(data);
    };

    loadItems();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addItem(form);
    const updatedItems = await fetchItems();
    setItems(updatedItems);
    setForm({ name:'', description:'', category:'', price:'' });
  } 

  const handleDelete = async (itemId) => {
    await deleteItem(itemId);
    const updatedItems = await fetchItems();
    setItems(updatedItems);
  }

  return (
    <div className="p-6 flex flex-col lg:flex-row gap-6">
      
      {/* Left side: User info + form */}
      <div className="lg:w-1/4 w-full space-y-6">
        
        <div className="bg-white shadow p-4 rounded text-center">
          <div className="text-5xl mb-2 cursor-default">👤</div>
          <h2 className="text-xl font-bold mb-1 cursor-default">Välkommen</h2>
          <p className="text-gray-700 cursor-default">{user.email}</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded space-y-3">
          <h3 className="text-lg font-semibold mb-2 cursor-default">Lägg till ny vara</h3>
          <input name="name" placeholder="Namn" value={form.name} onChange={handleChange} className="border p-2 w-full rounded" />
          <input name="description" placeholder="Beskrivning" value={form.description} onChange={handleChange} className="border p-2 w-full rounded" />
          <input name="category" placeholder="Kategori" value={form.category} onChange={handleChange} className="border p-2 w-full rounded" />
          <input name="price" placeholder="Pris" value={form.price} onChange={handleChange} className="border p-2 w-full rounded" />
          <button className="bg-blue-600 text-white p-2 w-full rounded hover:bg-blue-700 transition cursor-pointer">Lägg till</button>
        </form>

      </div>

      {/* Right side: Items */}
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
