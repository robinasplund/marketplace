import { useState } from 'react';
import Item from './Item.jsx';

const User = ({ name, id, items, addItem }) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    category: '',
    price: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(form);
    setForm({ name: '', description: '', category: '', price: '' });
  };

  return (
    <div className="w-full">
      
      {/* Header-sektion */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8 border">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          {/* Vänster kolumn: användarinfo */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-500">@{name.toLowerCase().replace(/\s+/g, '_')}</p>
            <p className="text-sm text-gray-400 mt-1">Användar-ID: {id}</p>
          </div>

          {/* Höger kolumner: formulär */}
          <div className="lg:col-span-2 bg-gray-50 p-4 rounded-xl border">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Lägg till vara</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                className="w-full p-2 border rounded"
                name="name"
                placeholder="Namn"
                value={form.name}
                onChange={handleChange}
              />
              <input
                className="w-full p-2 border rounded"
                name="description"
                placeholder="Beskrivning"
                value={form.description}
                onChange={handleChange}
              />
              <input
                className="w-full p-2 border rounded"
                name="category"
                placeholder="Kategori"
                value={form.category}
                onChange={handleChange}
              />
              <input
                className="w-full p-2 border rounded"
                name="price"
                placeholder="Pris"
                value={form.price}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Lägg till
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Varulista */}
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
};

export default User;