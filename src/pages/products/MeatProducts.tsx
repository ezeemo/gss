import React from 'react';
import { ChevronRight, Check, Award, Heart, Shield } from 'lucide-react';

const products = [
  {
    name: 'Premium Lamb',
    image: 'https://csfoods.sg/wp-content/uploads/2020/06/buy-lamb-shank-cut-foreshank.jpg',
    description: 'High-quality lamb meat from free-range farms, raised without antibiotics and carefully selected for optimal tenderness and flavor profile.',
    specifications: [
      'Grade: Premium (A1-A2)',
      'Age: 6-12 months',
      'Processing: Halal certified options',
      'Cutting: Customizable',
      'Packaging: Vacuum-sealed or bulk'
    ],
    features: [
      'Animal Welfare Certified',
      'Hormone-Free',
      'Traceable Origin',
      'Flash Frozen or Chilled'
    ],
    certifications: ['ISO 22000', 'HACCP', 'EU Standards']
  },
  {
    name: 'Premium Beef',
    image: 'https://choicefoodsthailand.com/wp-content/uploads/2023/09/lamb_03_premiumaustralian.png',
    description: 'Premium quality beef from selected Angus and Wagyu breeds, dry-aged for enhanced flavor and texture with perfect marbling distribution.',
    specifications: [
      'Grade: Premium (USDA Prime Equivalent)',
      'Marbling Score: 4-5',
      'Age: 24-30 months',
      'Aging: 21-28 days',
      'Cut Options: Full carcass or specific cuts'
    ],
    features: [
      'Grass-Fed & Grain-Finished',
      'DNA Traceability',
      'Aged to Perfection',
      'Portion Controlled Packaging'
    ],
    certifications: ['USDA Equivalent', 'BAP Certified', 'GLOBALG.A.P.']
  },
  {
    name: 'Premium Chicken',
    image: 'https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/649e87c6897f1a85afa57bca/chicken-skinless_currycut.jpg',
    description: 'Fresh, antibiotic-free chicken from free-range farms, processed under strict hygiene standards with multiple quality control checkpoints.',
    specifications: [
      'Grade: A',
      'Type: Whole, cuts, or boneless',
      'Processing: Air-chilled or water-chilled',
      'Weight: Custom sizing available',
      'Packaging: Individually wrapped or bulk'
    ],
    features: [
      'No Added Hormones',
      'Vegetarian Fed',
      'Humane Handling Certified',
      'Quick Frozen or Fresh'
    ],
    certifications: ['USDA Organic', 'Non-GMO Project Verified', 'Certified Humane']
  },
  {
    name: 'Premium Fish',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=1920',
    description: 'Wild-caught and sustainably farmed fish varieties, flash-frozen at sea to preserve freshness and nutritional value.',
    specifications: [
      'Varieties: Salmon, Tuna, Cod, Seabass',
      'Form: Whole, fillets, or portions',
      'Processing: IQF or block frozen',
      'Origin: Traceable fishing zones',
      'Packaging: Vacuum-sealed or glazed'
    ],
    features: [
      'Sustainable Sourcing',
      'MSC Certified Options',
      'Low Temperature Frozen',
      'Individually Quick Frozen (IQF)'
    ],
    certifications: ['MSC Certified', 'ASC Certified', 'HACCP', 'EU Import Compliant']
  }
];

const MeatProducts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Premium <span className="text-yellow-300">Meat</span> Products
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Ethically sourced, expertly processed, and delivered with strict cold chain integrity
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
              Request Price List <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
              Speak to Our Butcher
            </button>
          </div>
        </div>
      </div>

      {/* Quality Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: <Award className="h-8 w-8 text-red-600" />,
              title: "Premium Grades",
              description: "Only top quality selections"
            },
            {
              icon: <Heart className="h-8 w-8 text-red-600" />,
              title: "Animal Welfare",
              description: "Ethical farming practices"
            },
            {
              icon: <Shield className="h-8 w-8 text-red-600" />,
              title: "Food Safety",
              description: "HACCP certified processing"
            },
            {
              icon: <Check className="h-8 w-8 text-red-600" />,
              title: "Custom Cuts",
              description: "Prepared to your specifications"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="bg-red-50 p-3 rounded-full mb-3">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
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
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:shadow-2xl border border-gray-100"
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
                      {product.certifications.map((cert, i) => (
                        <span key={i} className="bg-white bg-opacity-90 text-red-700 px-2 py-1 rounded text-xs font-medium">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5 p-8 md:p-10">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
                    <span className="inline-flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      <Check className="h-4 w-4 mr-1" /> Available
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
                            <span className="text-red-500 mr-2">•</span>
                            <span className="text-gray-700">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <Check className="text-green-500 mr-2 h-5 w-5" /> Features
                      </h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center">
                      Request Sample Cut <ChevronRight className="ml-2 h-5 w-5" />
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                      Download Spec Sheet
                    </button>
                    <button className="text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors flex items-center">
                      View Cutting Diagram
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cold Chain Section */}
      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cold Chain Guarantee</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temperature-controlled logistics from farm to your facility
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Controlled Processing",
                description: "Immediate chilling after processing to 0-4°C"
              },
              {
                title: "Refrigerated Transport",
                description: "GPS-monitored reefer containers"
              },
              {
                title: "Final Mile Delivery",
                description: "Insulated packaging for last-mile integrity"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-red-600 text-4xl font-bold mb-3">
                  {index === 0 ? "1" : index === 1 ? "2" : "3"}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Order Premium Meat Products?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our meat specialists are available to discuss your specific requirements and volume needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Get a Custom Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
              Call: +220 990 0722
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeatProducts;