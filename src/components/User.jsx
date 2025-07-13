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
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Välkommen {user.email}</h2>

      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input name="name" placeholder="Namn" value={form.name} onChange={handleChange} className="border p-2 w-full" />
        <input name="description" placeholder="Beskrivning" value={form.description} onChange={handleChange} className="border p-2 w-full" />
        <input name="category" placeholder="Kategori" value={form.category} onChange={handleChange} className="border p-2 w-full" />
        <input name="price" placeholder="Pris" value={form.price} onChange={handleChange} className="border p-2 w-full" />
        <button className="bg-blue-600 text-white p-2 w-full">Lägg till</button>
      </form>

      <div className="grid gap-4">
        {items.map((item) => (
          <Item key={item.id} {...item} deleteItem={() => handleDelete(item.id)} />
        ))}
      </div>
    </div>
  );
};

export default User;