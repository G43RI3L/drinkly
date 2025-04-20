
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import { products } from '../data/products';

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartItemCount={0} />
      
      <main className="container mx-auto px-4 py-6">
        <section className="mb-10">
          <div className="bg-gradient-to-r from-airbnb-red to-red-400 rounded-2xl text-white p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Drinks Delivered Fast</h1>
            <p className="text-lg md:text-xl opacity-90 mb-6">Order your favorite drinks and have them delivered in minutes.</p>
            <button className="bg-white text-airbnb-red px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-300">
              Order Now
            </button>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6">Browse Our Selection</h2>
          <ProductList products={products} isLoading={isLoading} />
        </section>
      </main>
    </div>
  );
};

export default Index;
