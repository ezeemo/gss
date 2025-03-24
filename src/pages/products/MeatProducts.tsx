import React from 'react';

const products = [
  {
    name: 'Premium Lamb',
    image: 'https://images.unsplash.com/photo-1608877907149-a206d75ba011?auto=format&fit=crop&q=80&w=1920',
    description: 'High-quality lamb meat sourced from certified suppliers.',
    specifications: [
      'Grade: Premium',
      'Age: 6-12 months',
      'Processing: Halal certified',
    ],
  },
  {
    name: 'Premium Beef',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=1920',
    description: 'Premium quality beef from selected breeds.',
    specifications: [
      'Grade: Premium',
      'Marbling Score: 4-5',
      'Age: 24-30 months',
    ],
  },
];

const MeatProducts = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meat Products</h1>
          <p className="text-xl text-gray-600">
            Premium quality meat products from certified suppliers
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

export default MeatProducts;