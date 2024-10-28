import React from 'react';
import { ShoppingBag, Home, Settings, Store } from 'lucide-react';

const Header = () => {
  const menuItems = [
    { icon: <Home size={24} />, text: 'Home' },
    { icon: <ShoppingBag size={24} />, text: 'Product' },
    { icon: <Settings size={24} />, text: 'Service' },
    { icon: <Store size={24} />, text: 'Store' },
  ];

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gold/20 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-serif tracking-wider text-gold">
            LUXE ELEGANCE
          </div>
          
          <nav>
            <ul className="flex space-x-8">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-white/90 hover:text-gold transition-colors duration-300"
                  >
                    {item.icon}
                    <span className="font-light tracking-wider">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;