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

  const categories = [
    "Elektronik",
    "Kläder",
    "Böcker",
    "Möbler",
    "Sport",
    "Leksaker",
    "Hushåll",
    "Övrigt",
  ];

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

          <input 
            name="name" 
            placeholder="Namn" 
            value={form.name} 
            onChange={handleChange} 
            autocomplete = "off"
            className="border p-2 w-full rounded" 
          />
          <textarea
            name="description"
            placeholder="Beskrivning"
            value={form.description}
            onChange={handleChange}
            rows={3}
            autocomplete = "off"
            className="border p-2 w-full rounded resize-none"
          />
          
          {/* Select category dropdown */}
          <div className="relative w-2/3 mx-auto">
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="bg-gray-100 text-black py-1.5 px-4 pr-10 w-full rounded-full appearance-none focus:outline-none cursor-pointer"
            >
              <option value="" disabled hidden>
                Välj kategori
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
              <svg
                className="w-4 h-4 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <input
            name="price"
            placeholder="Pris"
            value={form.price}
            onChange={handleChange}
            autocomplete = "off"
            className="border p-2 w-[180px] mx-auto block rounded"
          />

          <button className="bg-green-600 text-white p-2 w-[180px] mx-auto block rounded hover:bg-green-700 transition cursor-pointer">
            Lägg till
          </button>
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
