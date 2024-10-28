import React from 'react';

const products = [
  {
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80",
    name: "Royal Collection",
    description: "Masterfully crafted with the finest Italian leather, this signature piece embodies timeless elegance and sophistication.",
    price: "$12,500"
  },
  {
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80",
    name: "Imperial Elite",
    description: "A testament to luxury, featuring hand-stitched details and our signature gold-plated hardware.",
    price: "$15,800"
  },
  {
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80",
    name: "Sovereign Series",
    description: "Limited edition masterpiece, combining exotic leather with contemporary design elements.",
    price: "$18,900"
  }
];

const ProductSection = () => {
  return (
    <div className="space-y-32">
      {products.map((product, index) => (
        <div 
          key={index}
          className={`flex items-center gap-16 ${
            index % 2 === 0 ? '' : 'flex-row-reverse'
          }`}
        >
          <div className="w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-1/2 space-y-6">
            <h2 className="text-4xl font-serif text-gold">{product.name}</h2>
            <p className="text-xl text-white/80 leading-relaxed">
              {product.description}
            </p>
            <div className="text-2xl font-light text-gold">{product.price}</div>
            <button className="px-8 py-3 bg-transparent border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 tracking-wider">
              Discover More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSection;