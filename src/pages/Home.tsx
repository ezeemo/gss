import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import { Truck, Shield, Globe, ChevronRight, Check, Users, Clock, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Home = () => {
  return (
    <div className="overflow-hidden">
      <ImageSlider />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-10 rounded-full blur-3xl filter" />
        </div>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="relative text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Global Sourcing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Simplified</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for premium agricultural commodities, petroleum products, 
            and meat sourced from the most reliable suppliers worldwide.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/products" 
              className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <span className="absolute top-0 left-0 w-full h-full rounded-xl opacity-30 filter blur-sm bg-gradient-to-r from-blue-600 to-blue-800" />
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white">
                Explore Products <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link 
  to="/about" 
  className="inline-flex items-center justify-center px-8 py-4 font-semibold text-gray-900 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-300 hover:-translate-y-1 gap-4"
>
  <Globe className="h-6 w-6 text-blue-600" />
  <div className="text-left">
    <h3 className="text-lg font-bold">Global Sourcing Leadership</h3>
    <p className="text-sm text-gray-600">
      Leveraging 15+ years of cross-border trade excellence to deliver premium commodities with unmatched reliability.
    </p>
  </div>
  <ChevronRight className="h-5 w-5 text-gray-400 ml-2" />
</Link>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "02+", label: "Countries", icon: <Globe className="h-8 w-8 text-blue-600" /> },
              { value: "500+", label: "Clients", icon: <Users className="h-8 w-8 text-blue-600" /> },
              { value: "24/7", label: "Support", icon: <Clock className="h-8 w-8 text-blue-600" /> },
              { value: "99%", label: "Satisfaction", icon: <BarChart2 className="h-8 w-8 text-blue-600" /> }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4">
              Our Offerings
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Products, Global Reach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We connect you with the highest quality products from trusted suppliers worldwide
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Agricultural Commodities",
                items: ["Wheat Grain", "Maize Grain", "Soybean Meal"],
                icon: <Globe className="h-8 w-8 text-blue-600" />,
                link: "/products/agricultural",
                bgClass: "bg-gradient-to-br from-green-50 to-blue-50"
              },
              {
                title: "Petroleum Products",
                items: ["Premium Motor Spirit (PMS)", "Automotive Gas Oil (AGO)", "Heavy Fuel Oil (HFO)"],
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                link: "/products/petroleum",
                bgClass: "bg-gradient-to-br from-amber-50 to-orange-50"
              },
              {
                title: "Meat Products",
                items: ["Lamb", "Beef"],
                icon: <Truck className="h-8 w-8 text-blue-600" />,
                link: "/products/meat",
                bgClass: "bg-gradient-to-br from-red-50 to-pink-50"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={product.link} 
                  className={`group relative overflow-hidden ${product.bgClass} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 -mr-10 -mt-10 rounded-full opacity-10 bg-blue-600 group-hover:opacity-20 transition-opacity" />
                  <div className="flex flex-col h-full relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                      {product.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                    <ul className="text-gray-600 space-y-3 mb-6">
                      {product.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto text-blue-600 font-medium flex items-center group-hover:underline">
                      Learn more <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Competitive Advantage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We go beyond traditional sourcing to deliver exceptional value
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-8 w-8 text-blue-600" />,
                title: "Global Network",
                description: "Strategic partnerships with verified suppliers across 30+ countries",
                features: ["Diverse supplier base", "Local market expertise", "Global logistics"]
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: "Quality Assurance",
                description: "Stringent quality control with ISO-certified processes",
                features: ["Third-party inspections", "Documented traceability", "Quality certifications"]
              },
              {
                icon: <Truck className="h-8 w-8 text-blue-600" />,
                title: "Logistics Excellence",
                description: "End-to-end supply chain management with real-time tracking",
                features: ["Custom clearance", "Multimodal transport", "Warehousing solutions"]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4">
              Client Success
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Their global network helped us secure premium wheat at competitive prices, even during market shortages.",
                author: "Sarah Johnson",
                position: "Procurement Director, Food Manufacturing Co."
              },
              {
                quote: "The end-to-end logistics solution saved us 15% in transportation costs while improving delivery reliability.",
                author: "Michael Chen",
                position: "Supply Chain Manager, Energy Solutions Inc."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="text-2xl leading-relaxed text-gray-700 mb-6">"{testimonial.quote}"</div>
                <div className="font-bold text-gray-900">{testimonial.author}</div>
                <div className="text-gray-600">{testimonial.position}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-y-0 left-0 w-1/3 bg-white rounded-r-full filter blur-3xl" />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-400 rounded-l-full filter blur-3xl" />
        </div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Supply Chain?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Partner with us to access premium products, competitive pricing, and reliable global logistics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Get a Free Consultation
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Browse Products <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;