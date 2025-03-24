import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import AgriculturalCommodities from './pages/products/AgriculturalCommodities';
import PetroleumProducts from './pages/products/PetroleumProducts';
import MeatProducts from './pages/products/MeatProducts';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/agricultural" element={<AgriculturalCommodities />} />
            <Route path="/products/petroleum" element={<PetroleumProducts />} />
            <Route path="/products/meat" element={<MeatProducts />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;