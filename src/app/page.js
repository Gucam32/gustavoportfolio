"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Trajetoria from "@/components/sections/Trajetoria";
import Filosofia from "@/components/sections/Filosofia";
import Direito from "@/components/sections/Direito";
import Experiencias from "@/components/sections/Experiencias";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import Inspiration from "@/components/sections/Inspiration";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { scrollY } = useScroll({
    smooth: true,
    smoothTime: 0.6
  });
  
  // Calculate opacity for hero background
  const bgOpacity = useTransform(
    scrollY,
    [0, window.innerHeight * 0.5], // Start fading at 50% of viewport height
    [1, 0]
  );

  useEffect(() => {
    // Add smooth scroll behavior to html element
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen text-white">
      <motion.div 
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/bg.jpg')",
          opacity: bgOpacity
        }}
      />
      <div className="relative z-10">
        <Navbar scrollPosition={scrollPosition} />
        <Hero scrollPosition={scrollPosition} />
        <Trajetoria />
        <Filosofia />
        <Direito />
        <Inspiration /> 
        <Experiencias />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
