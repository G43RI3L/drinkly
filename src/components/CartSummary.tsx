
import React from 'react';
import { Button } from '@/components/ui/button';
import { CartItem } from '../types';
import { Separator } from '@/components/ui/separator';

interface CartSummaryProps {
  items: CartItem[];
  onCheckout?: () => void;
  showCheckoutButton?: boolean;
}

const CartSummary: React.FC<CartSummaryProps> = ({ 
  items, 
  onCheckout,
  showCheckoutButton = true
}) => {
  // Calculate subtotal
  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  
  // Calculate delivery fee (fixed in this example)
  const deliveryFee = items.length > 0 ? 4.99 : 0;
  
  // Calculate total
  const total = subtotal + deliveryFee;

  return (
    <div className="bg-white rounded-xl shadow-airbnb p-6">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
      
      {items.length === 0 ? (
        <div className="text-center py-4">
          <p className="text-gray-500">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item.product.id} className="flex justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{item.product.name}</h4>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-medium">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Separator className="my-4" />
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
          </div>
          
          <Separator className="my-4" />
          
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          
          {showCheckoutButton && (
            <Button 
              onClick={onCheckout} 
              className="w-full mt-6 bg-airbnb-red hover:bg-opacity-90" 
              size="lg"
            >
              Proceed to Checkout
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default CartSummary;
