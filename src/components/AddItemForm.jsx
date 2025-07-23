
import { useState } from 'react';

const AddItemForm = ({ onAdd }) => {
  
  const [form, setForm] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
  });
  const [errors, setErrors] = useState({});

  const categories = [
    "Elektronik", "Kläder", "Böcker", "Möbler", "Sport",
    "Leksaker", "Hushåll", "Övrigt"
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Namn krävs.";
    if (!form.category) newErrors.category = "Välj kategori.";
    if (!form.price.trim()) newErrors.price = "Pris krävs.";
    else if (isNaN(Number(form.price))) newErrors.price = "Pris måste vara ett nummer.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    await onAdd(form);
    setForm({ name: '', description: '', category: '', price: '' });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded space-y-3">
      <h3 className="text-lg font-semibold mb-2 cursor-default">Lägg till ny vara</h3>

      <div>
        <input
          name="name"
          placeholder="Namn"
          value={form.name}
          onChange={handleChange}
          autoComplete="off"
          className={`border p-2 w-full rounded ${errors.name ? 'border-red-500' : ''}`}
        />
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <textarea
          name="description"
          placeholder="Beskrivning"
          value={form.description}
          onChange={handleChange}
          rows={3}
          autoComplete="off"
          className="border p-2 w-full rounded resize-none"
        />
      </div>

      <div className="relative w-2/3 mx-auto">
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className={`bg-gray-100 text-black py-1.5 px-4 pr-10 w-full rounded-full appearance-none focus:outline-none cursor-pointer ${
            errors.category ? 'border-red-500 border' : ''
          }`}
        >
          <option value="" disabled hidden>Välj kategori</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
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
        {errors.category && <p className="text-red-600 text-sm mt-1 text-center">{errors.category}</p>}
      </div>

      <div>
        <input
          name="price"
          placeholder="Pris"
          value={form.price}
          onChange={handleChange}
          autoComplete="off"
          className={`border p-2 w-[180px] mx-auto block rounded ${
            errors.price ? 'border-red-500' : ''
          }`}
        />
        {errors.price && <p className="text-red-600 text-sm mt-1 text-center">{errors.price}</p>}
      </div>

      <button className="bg-green-600 text-white p-2 w-[180px] mx-auto block rounded hover:bg-green-700 transition cursor-pointer">
        Lägg till
      </button>
    </form>
  );
};

export default AddItemForm;
