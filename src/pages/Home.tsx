import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import { Truck, Shield, Globe } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <ImageSlider />
      
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Welcome to Global Source Solution
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your Trusted Partner in Global Sourcing. We specialize in connecting businesses with the highest quality commodities and petroleum products from reliable suppliers around the world.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/products/agricultural" className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Agricultural Commodities</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Wheat Grain</li>
                <li>• Maize Grain</li>
                <li>• Soybean Meal</li>
              </ul>
            </Link>
            <Link to="/products/petroleum" className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Petroleum Products</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Premium Motor Spirit (PMS)</li>
                <li>• Automotive Gas Oil (AGO)</li>
                <li>• Heavy Fuel Oil (HFO)</li>
              </ul>
            </Link>
            <Link to="/products/meat" className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Meat Products</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Lamb</li>
                <li>• Beef</li>
              </ul>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Globe className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Global Network</h3>
            <p className="text-gray-600">Access to reliable suppliers worldwide</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assured</h3>
            <p className="text-gray-600">Rigorous quality control standards</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Truck className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Reliable Delivery</h3>
            <p className="text-gray-600">Timely and efficient logistics</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact us today to discuss your sourcing needs</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;