import React from 'react';
import { ShoppingBag, Home, Settings, Store, Facebook, Instagram, Twitter, Youtube, MessageSquare } from 'lucide-react';
import Header from './components/Header';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div 
        className="fixed top-0 left-0 w-full h-full opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 0
        }}
      />
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-16 mt-20">
          <ProductSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;