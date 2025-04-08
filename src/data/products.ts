
import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Heineken Lager Beer',
    description: 'Premium European lager with a mild bitter taste and a clean finish. Brewed using only natural ingredients.',
    price: 12.99,
    imageUrl: 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?q=80&w=400&auto=format&fit=crop',
    category: 'beer',
    rating: 4.5,
    reviewCount: 128
  },
  {
    id: '2',
    name: 'Corona Extra Beer',
    description: 'Light and refreshing beer with a distinctive taste. Best served with a wedge of lime.',
    price: 11.99,
    imageUrl: 'https://images.unsplash.com/photo-1622543925917-763c34c31d67?q=80&w=400&auto=format&fit=crop',
    category: 'beer',
    rating: 4.3,
    reviewCount: 96
  },
  {
    id: '3',
    name: 'Stella Artois Premium Lager',
    description: 'Belgian pilsner with a rich heritage dating back to 1366. Full-flavored with a clean, crisp taste.',
    price: 13.99,
    imageUrl: 'https://images.unsplash.com/photo-1613614210276-9f12d9d2a177?q=80&w=400&auto=format&fit=crop',
    category: 'beer',
    rating: 4.4,
    reviewCount: 112
  },
  {
    id: '4',
    name: 'Cloudy Bay Sauvignon Blanc',
    description: 'Vibrant and expressive New Zealand wine with notes of tropical fruits and citrus.',
    price: 29.99,
    imageUrl: 'https://images.unsplash.com/photo-1566754436893-98224ee05299?q=80&w=400&auto=format&fit=crop',
    category: 'wine',
    rating: 4.8,
    reviewCount: 254
  },
  {
    id: '5',
    name: 'Château Margaux 2015',
    description: 'Premier Grand Cru Classé from Bordeaux, elegant with complex aromas of black currant and violets.',
    price: 899.99,
    imageUrl: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?q=80&w=400&auto=format&fit=crop',
    category: 'wine',
    rating: 5.0,
    reviewCount: 87
  },
  {
    id: '6',
    name: 'Jack Daniel\'s Old No. 7',
    description: 'Classic Tennessee whiskey with a smooth, mellowed character and notes of caramel and vanilla.',
    price: 32.99,
    imageUrl: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=400&auto=format&fit=crop',
    category: 'spirits',
    rating: 4.6,
    reviewCount: 321
  },
  {
    id: '7',
    name: 'Grey Goose Vodka',
    description: 'Premium French vodka made from the finest ingredients, delivering an exceptionally smooth taste.',
    price: 39.99,
    imageUrl: 'https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?q=80&w=400&auto=format&fit=crop',
    category: 'spirits',
    rating: 4.7,
    reviewCount: 198
  },
  {
    id: '8',
    name: 'Don Julio 1942 Tequila',
    description: 'Luxury añejo tequila aged for a minimum of two and a half years with notes of caramel and chocolate.',
    price: 149.99,
    imageUrl: 'https://images.unsplash.com/photo-1614313511387-1255ee8b1529?q=80&w=400&auto=format&fit=crop',
    category: 'spirits',
    rating: 4.9,
    reviewCount: 176
  }
];

export const getProductsByCategory = (category: 'beer' | 'wine' | 'spirits'): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getAllCategories = () => {
  return ['beer', 'wine', 'spirits'] as const;
};
