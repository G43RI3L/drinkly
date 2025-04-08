
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface MapProps {
  customerLocation?: { lat: number; lng: number };
  driverLocation?: { lat: number; lng: number };
}

// This is a placeholder for the actual map component
// You would typically integrate with Mapbox or Google Maps here
const Map: React.FC<MapProps> = ({ 
  customerLocation = { lat: -23.5505, lng: -46.6333 }, // São Paulo coordinates as default
  driverLocation 
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[300px] bg-gray-100 rounded-lg overflow-hidden">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-airbnb-red"></div>
        </div>
      ) : (
        <>
          {/* Placeholder for the actual map - would be replaced with Mapbox or Google Maps */}
          <div ref={mapRef} className="w-full h-full bg-[#e6e4e0]">
            {/* Simulated map grid */}
            <div className="w-full h-full grid grid-cols-4 grid-rows-4">
              {Array(16).fill(0).map((_, i) => (
                <div key={i} className="border border-gray-200 opacity-40"></div>
              ))}
            </div>
          </div>
          
          {/* Customer location marker */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute -top-10 -left-1/2 bg-white px-3 py-1 rounded-full shadow-md text-sm font-medium">
                You
              </div>
              <MapPin size={36} className="text-airbnb-red" fill="#FF5A5F" />
            </div>
          </div>
          
          {/* Driver location marker */}
          {driverLocation && (
            <div className="absolute left-1/4 top-3/4 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
              <div className="relative">
                <div className="absolute -top-10 -left-1/2 bg-white px-3 py-1 rounded-full shadow-md text-sm font-medium">
                  Driver
                </div>
                <Navigation size={36} className="text-airbnb-turquoise" fill="#008489" />
              </div>
            </div>
          )}
          
          {/* Map controls */}
          <div className="absolute right-4 bottom-4 flex flex-col gap-2">
            <button className="bg-white p-2 rounded-full shadow-md">
              <span className="text-xl">+</span>
            </button>
            <button className="bg-white p-2 rounded-full shadow-md">
              <span className="text-xl">-</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Map;
