
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'beer' | 'wine' | 'spirits';
  rating: number;
  reviewCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Driver {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  location: {
    lat: number;
    lng: number;
  };
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'accepted' | 'delivering' | 'delivered';
  createdAt: Date;
  deliveryLocation: {
    lat: number;
    lng: number;
    address: string;
  };
  driver?: Driver;
  estimatedDeliveryTime?: number; // in minutes
}
