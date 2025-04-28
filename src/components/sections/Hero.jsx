import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ scrollPosition }) => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6 lg:px-16">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)',
          transform: `translateY(${scrollPosition * 0.4}px)`
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 max-w-4xl text-center"
      >
        <div className="mx-auto w-20 h-px bg-amber-300 mb-8" />
        <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-wide leading-tight font-serif font-semibold">
          Gustavo Henrique
          <br />
          <span className="text-amber-200">França Campos</span>
        </h1>
        
        <div className="mt-8 mb-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-amber-300/80 to-transparent" />
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl md:text-2xl font-light text-amber-50/90 max-w-2xl mx-auto"
        >
          Estudante de Direito com foco em justiça social 
          e transformação através do conhecimento jurídico
        </motion.p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-12 z-10"
      >
        <div className="flex items-center space-x-4 text-amber-200/80">
          <div className="w-8 h-px bg-amber-300/50" />
          <span className="uppercase tracking-widest text-sm">Explorar</span>
          <div className="w-8 h-px bg-amber-300/50" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;