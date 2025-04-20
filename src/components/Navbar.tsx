
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, User } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface NavbarProps {
  cartItemCount?: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemCount = 0 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-airbnb-red font-bold text-2xl flex items-center">
          Drinkly
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex relative flex-1 max-w-md mx-4">
          <input
            type="text"
            placeholder="Search for drinks..."
            className="w-full border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-airbnb-red focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/login" className="text-gray-700 hover:text-airbnb-red transition-colors">
            <div className="flex items-center">
              <User size={20} className="mr-1" />
              <span>Login</span>
            </div>
          </Link>
          <Link to="/checkout" className="relative text-gray-700 hover:text-airbnb-red transition-colors">
            <ShoppingCart size={20} />
            {cartItemCount > 0 && (
              <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full p-0">
                {cartItemCount}
              </Badge>
            )}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for drinks..."
            className="w-full border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-airbnb-red focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="container mx-auto px-4 space-y-3">
            <Link 
              to="/login" 
              className="block py-2 text-gray-700 hover:text-airbnb-red"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center">
                <User size={20} className="mr-2" />
                <span>Login</span>
              </div>
            </Link>
            <Link 
              to="/checkout" 
              className="block py-2 text-gray-700 hover:text-airbnb-red"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center">
                <ShoppingCart size={20} className="mr-2" />
                <span>Cart {cartItemCount > 0 && `(${cartItemCount})`}</span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
