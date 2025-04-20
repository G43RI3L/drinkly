
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ChevronLeft, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import { getProductById } from '../data/products';
import { useToast } from '@/hooks/use-toast';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(id ? getProductById(id) : undefined);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!id || (!isLoading && !product)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-4">The product you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/')} variant="outline">
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    // In a real app, this would dispatch to a cart state manager
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product?.name} added to your cart`,
    });
  };

  const decreaseQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartItemCount={0} />
      
      <div className="container mx-auto px-4 py-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 mb-6"
        >
          <ChevronLeft size={20} /> Back
        </button>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-square skeleton rounded-xl"></div>
            <div className="space-y-4">
              <div className="skeleton h-8 w-3/4"></div>
              <div className="skeleton h-6 w-1/4"></div>
              <div className="space-y-2">
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-2/3"></div>
              </div>
              <div className="skeleton h-12 w-full mt-8"></div>
            </div>
          </div>
        ) : product ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-2">
                  <Star size={18} className="text-airbnb-red fill-airbnb-red mr-1" />
                  <span className="font-medium">{product.rating}</span>
                </div>
                <span className="text-gray-500">({product.reviewCount} reviews)</span>
              </div>
              
              <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center">
                  <button 
                    onClick={decreaseQuantity}
                    className="p-2 border border-gray-300 rounded-l-md"
                    disabled={quantity <= 1}
                  >
                    <Minus size={20} />
                  </button>
                  <div className="px-4 py-2 border-t border-b border-gray-300 min-w-[50px] text-center">
                    {quantity}
                  </div>
                  <button 
                    onClick={increaseQuantity}
                    className="p-2 border border-gray-300 rounded-r-md"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
              
              <Button 
                onClick={handleAddToCart}
                className="w-full bg-airbnb-red hover:bg-opacity-90 py-6 text-lg"
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductDetail;
