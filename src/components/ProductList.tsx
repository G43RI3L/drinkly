
import React, { useState } from 'react';
import { ProductCard, ProductCardSkeleton } from './ProductCard';
import { Product } from '../types';
import { getAllCategories } from '../data/products';

interface ProductListProps {
  products: Product[];
  isLoading?: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ products, isLoading = false }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const categories = getAllCategories();
  
  // Filter products by selected category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex overflow-x-auto pb-2 mb-4 scrollbar-none">
        <button
          className={`flex-shrink-0 px-4 py-2 mr-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === 'all'
              ? 'bg-airbnb-red text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setActiveCategory('all')}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`flex-shrink-0 px-4 py-2 mr-2 rounded-full text-sm font-medium capitalize transition-colors ${
              activeCategory === category
                ? 'bg-airbnb-red text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {isLoading
          ? Array(8)
              .fill(0)
              .map((_, index) => <ProductCardSkeleton key={index} />)
          : filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>

      {/* Empty State */}
      {!isLoading && filteredProducts.length === 0 && (
        <div className="text-center py-10">
          <h3 className="text-lg font-medium mb-2">No products found</h3>
          <p className="text-gray-500">Try changing your filter or search term</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
