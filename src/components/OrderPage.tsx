import { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';

export default function OrderPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    platform: 'PC',
    edition: 'standard',
  });
  const [submitted, setSubmitted] = useState(false);

  const editions = [
    {
      id: 'standard',
      name: 'Standard Edition',
      price: '$59.99',
      features: ['Base Game', 'Digital Soundtrack', 'Art Book (Digital)'],
    },
    {
      id: 'deluxe',
      name: 'Deluxe Edition',
      price: '$79.99',
      features: ['Base Game', 'Digital Soundtrack', 'Art Book (Digital)', 'Season Pass', 'Exclusive Character Skins'],
    },
    {
      id: 'collectors',
      name: 'Collectors Edition',
      price: '$149.99',
      features: ['Base Game', 'Digital Soundtrack', 'Art Book (Physical)', 'Season Pass', 'Exclusive Character Skins', 'Limited Edition Steelbook', 'Collector\'s Box', 'Figure Set'],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-16 pb-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 text-red-600 tracking-wider">
          PRE-ORDER NOW
        </h1>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Secure your copy of STRAIGHT LINE
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {editions.map((edition) => (
            <div
              key={edition.id}
              className={`bg-black/50 border-2 transition-all p-6 ${
                formData.edition === edition.id
                  ? 'border-red-600 scale-105'
                  : 'border-red-900/30 hover:border-red-700'
              }`}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-red-500 mb-2">{edition.name}</h3>
                <div className="text-4xl font-bold text-white mb-4">{edition.price}</div>
              </div>
              <ul className="space-y-3 mb-6">
                {edition.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                    <Check size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setFormData({ ...formData, edition: edition.id })}
                className={`w-full py-3 font-bold tracking-wider transition-all ${
                  formData.edition === edition.id
                    ? 'bg-red-700 text-white'
                    : 'bg-transparent text-red-500 border-2 border-red-700 hover:bg-red-950/50'
                }`}
              >
                {formData.edition === edition.id ? 'SELECTED' : 'SELECT'}
              </button>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-black/50 border border-red-900/30 p-8">
          <h2 className="text-3xl font-bold text-red-600 mb-6 flex items-center gap-3">
            <ShoppingCart size={32} />
            ORDER DETAILS
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-red-500 font-bold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-red-900/50 px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-red-500 font-bold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-red-900/50 px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-red-500 font-bold mb-2">Platform</label>
              <select
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                className="w-full bg-black/50 border border-red-900/50 px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors"
              >
                <option value="PC">PC (Steam)</option>
                <option value="PS5">PlayStation 5</option>
                <option value="XBOX">Xbox Series X/S</option>
                <option value="Switch">Nintendo Switch</option>
              </select>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-red-700 hover:bg-red-600 text-white font-bold py-4 tracking-wider transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {submitted ? 'ORDER SUBMITTED!' : 'SUBMIT PRE-ORDER'}
              </button>
            </div>

            {submitted && (
              <div className="bg-red-950/30 border border-red-600 p-4 text-center">
                <p className="text-red-500 font-bold">
                  Thank you! Your pre-order has been received.
                </p>
              </div>
            )}
          </form>

          <p className="text-gray-500 text-sm mt-6 text-center">
            * This is a demo order form. No actual payment will be processed.
          </p>
        </div>
      </div>
    </div>
  );
}
