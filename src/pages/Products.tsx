import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      title: 'Agricultural Commodities',
      path: '/products/agricultural',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1920',
      description: 'High-quality grains and agricultural products sourced from trusted suppliers worldwide.',
    },
    {
      title: 'Petroleum Products',
      path: '/products/petroleum',
      image: 'https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?auto=format&fit=crop&q=80&w=1920',
      description: 'Premium fuel and petroleum products meeting international quality standards.',
    },
    {
      title: 'Meat Products',
      path: '/products/meat',
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=1920',
      description: 'Premium quality meat products sourced from certified suppliers.',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600">
            Discover our comprehensive range of high-quality products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              key={index}
              to={product.path}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;