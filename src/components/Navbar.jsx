import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = ({ scrollPosition }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerOpacity = Math.min(scrollPosition / 100, 1);
  const headerBlur = Math.min(scrollPosition / 50, 10);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/20"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${headerOpacity * 0.4})`,
        backdropFilter: `blur(${headerBlur}px)`,
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
          <a href="#trajetoria" className="hover:text-amber-300 transition-colors border-b-2 border-transparent hover:border-amber-300">Trajetória</a>
          <a href="#filosofia" className="hover:text-amber-300 transition-colors border-b-2 border-transparent hover:border-amber-300">Filosofia</a>
          <a href="#direito" className="hover:text-amber-300 transition-colors border-b-2 border-transparent hover:border-amber-300">Direito</a>
          <a href="#experiencias" className="hover:text-amber-300 transition-colors border-b-2 border-transparent hover:border-amber-300">Experiências</a>
        </div>
        
        <button 
          className="md:hidden text-white z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <span className={`transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''} absolute w-6 h-0.5 bg-white`}></span>
            <span className={`transition-all duration-200 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'} absolute w-6 h-0.5 bg-white`}></span>
            <span className={`transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''} absolute w-6 h-0.5 bg-white`}></span>
          </div>
        </button>
      </div>
      
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ zIndex: 40 }}
      >
        <div className={`flex flex-col justify-center items-center h-full space-y-8 transform transition-all duration-300 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {['trajetoria', 'filosofia', 'direito', 'experiencias'].map((item, index) => (
            <a
              key={item}
              href={`#${item}`}
              className={`text-2xl font-serif text-white hover:text-amber-300 transition-all duration-300 transform ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;