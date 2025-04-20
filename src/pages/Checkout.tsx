
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Navbar from '../components/Navbar';
import CartSummary from '../components/CartSummary';
import { CartItem } from '../types';
import { products } from '../data/products';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  // In a real app, this would come from a cart state manager
  const cartItems: CartItem[] = [
    { product: products[0], quantity: 2 },
    { product: products[3], quantity: 1 },
  ];

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Order placed successfully!",
        description: "Your order is being processed.",
      });
      
      // Navigate to order tracking
      navigate('/track-order');
    } catch (error) {
      toast({
        title: "Failed to place order",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartItemCount={cartItems.length} />
      
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-airbnb p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Delivery Address</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <Input id="address" placeholder="Enter your full address" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-1">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <Input id="city" placeholder="City" />
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <Input id="state" placeholder="State" />
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP Code
                    </label>
                    <Input id="zipCode" placeholder="ZIP Code" />
                  </div>
                </div>
              </form>
            </div>
            
            <div className="bg-white rounded-xl shadow-airbnb p-6">
              <h2 className="text-lg font-semibold mb-4">Delivery Instructions</h2>
              <Textarea placeholder="Special instructions for delivery (optional)" className="min-h-[100px]" />
            </div>
          </div>
          
          <div>
            <CartSummary 
              items={cartItems} 
              showCheckoutButton={false} 
            />
            <Button 
              onClick={handleCheckout}
              disabled={isProcessing || cartItems.length === 0}
              className="w-full mt-4 bg-airbnb-red hover:bg-opacity-90 py-6"
              size="lg"
            >
              {isProcessing ? 'Processing...' : 'Place Order'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
