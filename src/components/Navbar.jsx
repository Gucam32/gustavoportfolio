import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    { id: 'home', label: 'Home' },
    { id: 'trajetoria', label: 'Trajetória' },
    { id: 'filosofia', label: 'Filosofia' },
    { id: 'direito', label: 'Direito' },
    { id: 'experiencias', label: 'Experiências' },
    { id: 'lugares', label: 'Lugares' }
  ];

  const menuVariants = {
    initial: {
      opacity: 0,
      height: 0
    },
    animate: {
      opacity: 1,
      height: "100vh",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  const itemVariants = {
    initial: { 
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <nav 
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
          className="md:hidden text-white z-50 relative p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial="initial"
            animate="animate"
            exit="exit"
            variants={menuVariants}
            className="fixed inset-0 bg-black/95 backdrop-blur-lg"
            style={{ zIndex: 40 }}
          >
            <div className="flex flex-col justify-center items-center h-full px-6 space-y-6">
              {menuItems.map((item) => (
                <motion.a
                  key={item.id}
                  variants={itemVariants}
                  href={`#${item.id}`}
                  className="relative w-full text-center py-4 text-2xl font-serif text-white/90 hover:text-amber-300 transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              className="absolute top-0 left-0 w-32 h-32 rounded-full bg-amber-500/20 blur-3xl"
              variants={{
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 0.5, scale: 1 },
                exit: { opacity: 0, scale: 0.8 }
              }}
            />
            
            <motion.div 
              className="absolute bottom-10 w-full text-center text-white/50 text-sm"
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 20 }
              }}
            >
              <p className="font-serif">© {new Date().getFullYear()} Gustavo Campos</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;