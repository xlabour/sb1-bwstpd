import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MessageSquare } from 'lucide-react';

const Footer = () => {
  const menuStructure = [
    {
      title: 'Collections',
      items: ['New Arrivals', 'Bestsellers', 'Limited Edition', 'Classic Line']
    },
    {
      title: 'Customer Service',
      items: ['Contact Us', 'Shipping & Returns', 'Care Guide', 'FAQ']
    },
    {
      title: 'About Us',
      items: ['Our Heritage', 'Craftsmanship', 'Sustainability', 'Press']
    },
    {
      title: 'Legal',
      items: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
    }
  ];

  const socialIcons = [
    { icon: <Facebook size={20} />, label: 'Facebook' },
    { icon: <Instagram size={20} />, label: 'Instagram' },
    { icon: <Twitter size={20} />, label: 'Twitter' },
    { icon: <Youtube size={20} />, label: 'Youtube' },
    { icon: <MessageSquare size={20} />, label: 'TikTok' }
  ];

  return (
    <footer className="bg-black/90 border-t border-gold/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-8 mb-12">
          {menuStructure.map((section, index) => (
            <div key={index}>
              <h3 className="text-gold font-serif text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-white/70 hover:text-gold transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gold/20 pt-8">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-serif tracking-wider text-gold">
              LUXE ELEGANCE
            </div>
            <div className="flex space-x-6">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white/70 hover:text-gold transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="text-center text-white/50 text-sm mt-8">
            © 2024 Luxe Elegance. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;