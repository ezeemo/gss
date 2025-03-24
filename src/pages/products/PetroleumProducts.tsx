import React from 'react';

const products = [
  {
    name: 'Premium Motor Spirit (PMS)',
    image: 'https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?auto=format&fit=crop&q=80&w=1920',
    description: 'High-quality gasoline for automotive use.',
    specifications: [
      'Octane Number: 91 minimum',
      'Sulfur Content: 10 ppm max',
      'Benzene Content: 1% max',
    ],
  },
  {
    name: 'Automotive Gas Oil (AGO)',
    image: 'https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?auto=format&fit=crop&q=80&w=1920',
    description: 'Premium quality diesel fuel for vehicles and industrial applications.',
    specifications: [
      'Cetane Number: 51 minimum',
      'Sulfur Content: 10 ppm max',
      'Flash Point: 55°C minimum',
    ],
  },
  {
    name: 'Heavy Fuel Oil (HFO)',
    image: 'https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?auto=format&fit=crop&q=80&w=1920',
    description: 'Industrial grade fuel oil for power generation and marine applications.',
    specifications: [
      'Viscosity: 380 cSt max at 50°C',
      'Sulfur Content: 3.5% max',
      'Flash Point: 60°C minimum',
    ],
  },
];

const PetroleumProducts = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Petroleum Products</h1>
          <p className="text-xl text-gray-600">
            High-quality petroleum products meeting international standards
          </p>
        </div>

        <div className="space-y-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h2>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Specifications:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {product.specifications.map((spec, i) => (
                        <li key={i}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetroleumProducts;