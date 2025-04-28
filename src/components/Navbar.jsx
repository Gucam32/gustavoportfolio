import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = ({ scrollPosition }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const headerOpacity = Math.min(scrollPosition / 100, 1);
  const headerBlur = Math.min(scrollPosition / 50, 10);

  const menuItems = [
    { id: 'trajetoria', label: 'Trajetória' },
    { id: 'filosofia', label: 'Filosofia' },
    { id: 'direito', label: 'Direito' },
    { id: 'experiencias', label: 'Experiências' },
    { id: 'lugares', label: 'Lugares' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMenuOpen ? 'border-none' : 'border-b border-white/20'
      }`}
      style={{
        backgroundColor: isMenuOpen ? 'transparent' : `rgba(0, 0, 0, ${headerOpacity * 0.4})`,
        backdropFilter: isMenuOpen ? 'none' : `blur(${headerBlur}px)`,
      }}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Logo"
            width={35}
            height={35}
            className="rounded-full filter brightness-100"
          />
          <div className="flex flex-col">
            <span className="text-xl font-serif tracking-wide text-white">Gustavo Campos</span>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-6 font-serif text-base">
          {menuItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              className="hover:text-amber-300 transition-colors border-b-2 border-transparent hover:border-amber-300"
            >
              {item.label}
            </a>
          ))}
        </div>
        
        <button 
          className="md:hidden text-white z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <span className={`transform transition-all duration-500 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''} absolute w-6 h-0.5 bg-white`}></span>
            <span className={`transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'} absolute w-6 h-0.5 bg-white`}></span>
            <span className={`transform transition-all duration-500 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''} absolute w-6 h-0.5 bg-white`}></span>
          </div>
        </button>
      </div>
      
      {/* Full-screen Mobile Menu with Blur Effect */}
      <div 
        className={`fixed inset-0 bg-black/90 backdrop-blur-xl transition-all duration-700 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ zIndex: 40 }}
      >
        <div className="flex flex-col justify-center items-center h-full px-6">
          {menuItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="w-full text-center py-6 text-3xl font-serif text-white hover:text-amber-300 transition-all duration-500 ease-out transform"
              style={{ 
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${150 + index * 150}ms` 
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          
          {/* Decorative elements */}
          <div 
            className="absolute top-0 left-0 w-32 h-32 rounded-full bg-amber-500/20 blur-3xl"
            style={{ 
              opacity: isMenuOpen ? 0.5 : 0,
              transform: isMenuOpen ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 1s ease-out',
              transitionDelay: '400ms'
            }}
          ></div>
          
          <div 
            className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-amber-500/10 blur-3xl"
            style={{ 
              opacity: isMenuOpen ? 0.5 : 0,
              transform: isMenuOpen ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 1s ease-out',
              transitionDelay: '600ms'
            }}
          ></div>
          
          <div 
            className="absolute bottom-10 w-full text-center text-white/70 text-sm opacity-0"
            style={{ 
              opacity: isMenuOpen ? 0.7 : 0,
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.5s ease-out',
              transitionDelay: '800ms'
            }}
          >
            <p className="font-serif">© {new Date().getFullYear()} Gustavo Campos</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;