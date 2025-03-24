import React from 'react';

const products = [
  {
    name: 'Wheat Grain',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=1920',
    description: 'Premium quality wheat grain suitable for various food processing applications.',
    specifications: [
      'Moisture Content: 13% max',
      'Foreign Matter: 2% max',
      'Protein Content: 11-13%',
    ],
  },
  {
    name: 'Maize Grain',
    image: 'https://images.unsplash.com/photo-1601593768799-76d3bc1408f7?auto=format&fit=crop&q=80&w=1920',
    description: 'High-grade maize grain for animal feed and industrial use.',
    specifications: [
      'Moisture Content: 14% max',
      'Broken Kernels: 3% max',
      'Foreign Matter: 2% max',
    ],
  },
  {
    name: 'Soybean Meal',
    image: 'https://images.unsplash.com/photo-16014945629-5caa3c35b0de?auto=format&fit=crop&q=80&w=1920',
    description: 'Protein-rich soybean meal for animal feed industry.',
    specifications: [
      'Protein Content: 44-48%',
      'Moisture: 12% max',
      'Fiber: 3.5% max',
    ],
  },
];

const AgriculturalCommodities = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Agricultural Commodities</h1>
          <p className="text-xl text-gray-600">
            Premium quality agricultural products sourced from trusted suppliers worldwide
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

export default AgriculturalCommodities;