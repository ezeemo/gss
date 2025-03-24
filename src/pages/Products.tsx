import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Leaf, Droplet, Beef } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      title: 'Agricultural Commodities',
      path: '/products/agricultural',
      image: 'https://images.unsplash.com/photo-1601593768799-76d3bc1408f7?auto=format&fit=crop&q=80&w=1920',
      description: 'Premium grains and agricultural products ethically sourced from certified farms worldwide with guaranteed quality and traceability.',
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      features: [
        'Non-GMO options available',
        'ISO 22000 certified',
        'Bulk and packaged options'
      ]
    },
    {
      title: 'Petroleum Products',
      path: '/products/petroleum',
      image: 'https://images.unsplash.com/photo-1618477388954-7858a64a8d44?auto=format&fit=crop&q=80&w=1920',
      description: 'High-performance fuels and petroleum derivatives meeting strict international specifications with complete quality documentation.',
      icon: <Droplet className="h-8 w-8 text-blue-600" />,
      features: [
        'Ultra-low sulfur content',
        'Additive-enhanced formulas',
        'Global shipping available'
      ]
    },
    {
      title: 'Meat Products',
      path: '/products/meat',
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=1920',
      description: 'Premium quality meat from humanely raised animals, processed under strict hygienic conditions with full cold chain integrity.',
      icon: <Beef className="h-8 w-8 text-red-600" />,
      features: [
        'Hormone-free',
        'Halal/Kosher options',
        'Vacuum-packed freshness'
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Premium <span className="text-yellow-300">Product Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Sourced globally, quality assured, delivered reliably
          </p>
        </div>
      </div>

      {/* Product Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {productCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg mr-4">
                      {category.icon}
                    </div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={category.path}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Explore {category.title}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Custom Product Solutions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our sourcing specialists can help you find the perfect products for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Our Team
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
              Request Product Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;