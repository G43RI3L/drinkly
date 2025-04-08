
import React, { useState, useEffect } from 'react';
import { CheckCircle2, Clock, MapPin, MessageSquare, Phone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Map from '../components/Map';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';

// Mock data for a driver
const mockDriver = {
  id: 'd1',
  name: 'Carlos Silva',
  avatar: 'https://i.pravatar.cc/150?img=68',
  rating: 4.8,
  location: {
    lat: -23.5705, 
    lng: -46.6333
  }
};

// Mock data for order status timeline
const orderStatusSteps = [
  { id: 1, name: 'Order Placed', completed: true, time: '10:30 AM' },
  { id: 2, name: 'Driver Assigned', completed: true, time: '10:35 AM' },
  { id: 3, name: 'Order Picked Up', completed: true, time: '10:42 AM' },
  { id: 4, name: 'On the Way', completed: true, current: true, time: '10:45 AM' },
  { id: 5, name: 'Delivered', completed: false, time: '11:00 AM (ETA)' }
];

const TrackOrder: React.FC = () => {
  const [estimatedTime, setEstimatedTime] = useState(15);
  const [progress, setProgress] = useState(60);
  
  useEffect(() => {
    // Simulate countdown timer
    const interval = setInterval(() => {
      setEstimatedTime(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
      
      setProgress(prev => Math.min(100, prev + 2));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-2">Track Your Order</h1>
        <p className="text-gray-500 mb-6">Order #DRK-1234 • Placed at 10:30 AM</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map section */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-airbnb overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-semibold text-lg">Estimated Delivery</h2>
                  <p className="text-airbnb-red font-medium">
                    {estimatedTime > 0 ? `${estimatedTime} minutes` : "Arriving now!"}
                  </p>
                </div>
                <Progress value={progress} className="w-1/3 h-2" />
              </div>
            </div>
            
            <div className="h-[400px]">
              <Map 
                customerLocation={{ lat: -23.5505, lng: -46.6333 }}
                driverLocation={mockDriver.location}
              />
            </div>
          </div>
          
          {/* Order details section */}
          <div className="space-y-6">
            {/* Driver info */}
            <div className="bg-white rounded-xl shadow-airbnb p-6">
              <h2 className="font-semibold text-lg mb-4">Your Driver</h2>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={mockDriver.avatar}
                    alt={mockDriver.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{mockDriver.name}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-1">★</span>
                    <span>{mockDriver.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mt-4">
                <Button variant="outline" className="flex items-center justify-center">
                  <Phone size={18} className="mr-2" />
                  Call
                </Button>
                <Button variant="outline" className="flex items-center justify-center">
                  <MessageSquare size={18} className="mr-2" />
                  Message
                </Button>
              </div>
            </div>
            
            {/* Order status */}
            <div className="bg-white rounded-xl shadow-airbnb p-6">
              <h2 className="font-semibold text-lg mb-4">Order Status</h2>
              <ol className="relative border-l border-gray-200 ml-3 space-y-6">
                {orderStatusSteps.map(step => (
                  <li key={step.id} className="ml-6">
                    <span className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ${
                      step.completed 
                        ? 'bg-airbnb-red text-white' 
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {step.completed ? (
                        <CheckCircle2 size={16} />
                      ) : (
                        <Clock size={16} />
                      )}
                    </span>
                    <h3 className={`font-medium ${
                      step.current ? 'text-airbnb-red' : 'text-gray-900'
                    }`}>
                      {step.name}
                    </h3>
                    <p className="text-sm text-gray-500">{step.time}</p>
                  </li>
                ))}
              </ol>
            </div>
            
            {/* Delivery address */}
            <div className="bg-white rounded-xl shadow-airbnb p-6">
              <h2 className="font-semibold text-lg mb-4">Delivery Address</h2>
              <div className="flex items-start">
                <MapPin size={20} className="text-airbnb-red mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">
                  123 Paulista Avenue, Apt 45<br />
                  São Paulo, SP 01311-000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
