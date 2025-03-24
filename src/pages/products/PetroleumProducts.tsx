import React from 'react';
import { ChevronRight, Check, Flame, Droplet, Zap, Shield, Truck } from 'lucide-react';

const products = [
  {
    name: 'Premium Motor Spirit (PMS)',
    image: 'https://nairametrics.com/wp-content/uploads/2019/10/Fuel-Subsidy.jpg',
    description: 'High-performance gasoline formulated for modern engines with advanced additive technology for cleaner combustion and improved mileage.',
    specifications: [
      'Research Octane Number: 95-97',
      'Sulfur Content: <10 ppm',
      'Benzene Content: <1% vol',
      'Reid Vapor Pressure: 60-90 kPa',
      'Oxygen Content: 2.7% max'
    ],
    features: [
      'Detergent additives for engine cleanliness',
      'Ethanol-free options available',
      'Winter/summer blend variations',
      'Compatible with catalytic converters'
    ],
    standards: ['EN 228', 'ASTM D4814', 'JIS K2202']
  },
  {
    name: 'Automotive Gas Oil (AGO)',
    image: 'https://www.ariyancorp.com/wp-content/uploads/2021/03/Automotive-Gas-Oil.jpg',
    description: 'Ultra-low sulfur diesel with premium additives for enhanced lubricity, improved cold flow properties, and reduced emissions.',
    specifications: [
      'Cetane Number: 51-54',
      'Sulfur Content: <10 ppm',
      'Flash Point: >60°C',
      'Cloud Point: -10°C to -34°C',
      'Lubricity HFRR: <460 μm'
    ],
    features: [
      'Improved fuel stability',
      'Anti-foaming additives',
      'Winterized formulations',
      'Biodiesel blend compatible'
    ],
    standards: ['EN 590', 'ASTM D975', 'JIS K2204']
  },
  {
    name: 'Heavy Fuel Oil (HFO)',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/5/419953598/ZM/XZ/KF/96922272/industrial-fuel-oil-500x500.jpg',
    description: 'High-viscosity residual fuel for marine and industrial applications with strict quality control for consistent performance.',
    specifications: [
      'Viscosity: 180-380 cSt at 50°C',
      'Sulfur Content: 0.5%-3.5%',
      'Flash Point: >60°C',
      'Pour Point: <30°C',
      'Aluminum+Silicon: <60 mg/kg'
    ],
    features: [
      'Pre-heating recommendations provided',
      'Compatibility testing available',
      'ISO 8217 compliant',
      'Trace metals analysis'
    ],
    standards: ['ISO 8217', 'ASTM D396', 'BS MA 100']
  }
];

const PetroleumProducts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Industrial-Grade <span className="text-blue-400">Petroleum</span> Products
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Meeting global standards with reliable supply chain solutions for energy professionals
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center">
              Request Technical Data <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
              Speak to Our Fuel Expert
            </button>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Compliant with Global Standards</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['ISO 8217', 'EN 590', 'ASTM D975', 'IMO 2020'].map((standard, index) => (
              <div key={index} className="flex items-center justify-center bg-gray-50 p-4 rounded-lg">
                <Shield className="h-6 w-6 text-blue-600 mr-2" />
                <span className="font-medium text-gray-800">{standard}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-16">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:shadow-2xl border border-gray-200"
            >
              <div className="md:flex">
                <div className="md:w-2/5 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover min-h-96"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <div className="flex flex-wrap gap-2">
                      {product.standards.map((standard, i) => (
                        <span key={i} className="bg-white bg-opacity-90 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                          {standard}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5 p-8 md:p-10">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
                    <span className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      <Check className="h-4 w-4 mr-1" /> In Stock
                    </span>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <Flame className="text-orange-500 mr-2 h-5 w-5" /> Technical Specifications
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
                        <Zap className="text-yellow-500 mr-2 h-5 w-5" /> Product Features
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
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                      Request MSDS <ChevronRight className="ml-2 h-5 w-5" />
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                      Download Certificate of Analysis
                    </button>
                    <button className="text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center">
                      View Storage Guidelines
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logistics Section */}
      <div className="bg-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Global Fuel Logistics Network</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Secure supply chain solutions from refinery to final destination
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplet className="h-10 w-10 text-blue-400" />,
                title: "Bulk Terminals",
                description: "Strategic storage locations worldwide"
              },
              {
                icon: <Truck className="h-10 w-10 text-blue-400" />,
                title: "Transport Options",
                description: "Pipelines, tankers, and ISO containers"
              },
              {
                icon: <Shield className="h-10 w-10 text-blue-400" />,
                title: "Quality Control",
                description: "Testing at every transfer point"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-700 p-8 rounded-xl text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-gray-600 p-4 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Reliable Petroleum Supply?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our energy specialists are ready to discuss your fuel requirements and delivery schedules.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Volume Pricing
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
              Emergency Fuel Hotline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetroleumProducts;