
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <Link to={`/product/${product.id}`} onClick={onClick}>
      <div className="airbnb-card overflow-hidden flex flex-col h-full">
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-lg font-medium text-gray-900 line-clamp-1">{product.name}</h3>
            <div className="flex items-center">
              <Star size={16} className="text-airbnb-red fill-airbnb-red mr-1" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-gray-500 ml-1">({product.reviewCount})</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm line-clamp-2 mb-2 flex-1">{product.description}</p>
          <div className="mt-auto">
            <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="airbnb-card overflow-hidden">
      <div className="aspect-square skeleton"></div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="skeleton h-6 w-3/4"></div>
          <div className="skeleton h-4 w-16"></div>
        </div>
        <div className="skeleton h-4 w-full mb-1"></div>
        <div className="skeleton h-4 w-5/6 mb-4"></div>
        <div className="skeleton h-6 w-24 mt-2"></div>
      </div>
    </div>
  );
};

export { ProductCard, ProductCardSkeleton };
