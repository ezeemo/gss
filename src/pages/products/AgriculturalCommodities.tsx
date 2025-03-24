import React from 'react';
import { ChevronRight, Check, Globe, Truck, Shield } from 'lucide-react';

const products = [
  {
    name: 'Wheat Grain',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=1920',
    description: 'Premium quality wheat grain suitable for various food processing applications with guaranteed nutritional value and purity standards.',
    specifications: [
      'Moisture Content: 13% max',
      'Foreign Matter: 2% max',
      'Protein Content: 11-13%',
      'Test Weight: 78 kg/hl min',
      'Gluten Content: 24% min'
    ],
    features: [
      'Non-GMO',
      'ISO 22000 Certified',
      'Bulk or Bagged Options'
    ]
  },
  {
    name: 'Maize Grain',
    image: 'https://i0.wp.com/www.africopanigeria.com/wp-content/uploads/2021/02/Yellow-Maize-Copa-Agro.png?fit=600%2C600&ssl=1',
    description: 'High-grade maize grain for animal feed and industrial use, carefully selected for optimal starch content and digestibility.',
    specifications: [
      'Moisture Content: 14% max',
      'Broken Kernels: 3% max',
      'Foreign Matter: 2% max',
      'Aflatoxin: 20 ppb max',
      'Color: Bright Yellow'
    ],
    features: [
      'Grade 1 Quality',
      'Traceability Guaranteed',
      'Available in 25kg or 50kg bags'
    ]
  },
  {
    name: 'Soybean Meal',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqRU0-NYGpxmwKN5t29P2jb3kRocgWRGbvTJwKKI2hpLjLrrd15piL6YAQElStTN_vTVE&usqp=CAU',
    description: 'Protein-rich soybean meal for animal feed industry with consistent amino acid profile and excellent digestibility.',
    specifications: [
      'Protein Content: 44-48%',
      'Moisture: 12% max',
      'Fiber: 3.5% max',
      'Fat Content: 1.5% max',
      'Urease Activity: 0.05-0.20 ΔpH'
    ],
    features: [
      'Non-GMO Available',
      'GMP+ Certified',
      'Custom Granulation'
    ]
  },
];

const AgriculturalCommodities = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Premium <span className="text-yellow-300">Agricultural</span> Commodities
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Sourced from trusted global suppliers with guaranteed quality and competitive pricing
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
              Request Quote <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Value Props */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Globe className="h-8 w-8 text-blue-600" />,
              title: "Global Sourcing",
              description: "Direct partnerships with farms across 5 continents"
            },
            {
              icon: <Shield className="h-8 w-8 text-blue-600" />,
              title: "Quality Certified",
              description: "ISO 9001, HACCP, and GMP+ certified products"
            },
            {
              icon: <Truck className="h-8 w-8 text-blue-600" />,
              title: "Reliable Logistics",
              description: "Temperature-controlled shipping available"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md flex items-start">
              <div className="bg-blue-50 p-3 rounded-full mr-4">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-16">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:shadow-2xl"
            >
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover min-h-96"
                  />
                </div>
                <div className="md:w-3/5 p-8 md:p-10">
                  <div className="flex justify-between items-start">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h2>
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      In Stock
                    </span>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <Check className="text-green-500 mr-2 h-5 w-5" /> Specifications
                      </h3>
                      <ul className="space-y-2">
                        {product.specifications.map((spec, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-700">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <Check className="text-green-500 mr-2 h-5 w-5" /> Key Features
                      </h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Request Sample
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                      Technical Data Sheet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Custom Agricultural Solutions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our sourcing specialists can help you find the perfect products for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact Our Team
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
              Call: +1 (555) 123-4567
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgriculturalCommodities;