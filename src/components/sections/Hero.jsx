import React from "react";
import { motion } from "framer-motion";

const Hero = ({ scrollPosition }) => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0"></div>
      <div
        className="absolute inset-0 opacity-30 z-0"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7) contrast(1.1)",
          transform: `translateY(${scrollPosition * 0.4}px)`,
        }}
      />

      {/* Elegant grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Subtle decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1 w-[700px] h-[400px] border border-amber-100/20"
        style={{
          transform: `translateY(${scrollPosition * -0.1}px)`,
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1 w-[800px] h-[500px] border border-amber-100/10"
      />

      {/* Main content */}
      <div className="z-10 px-8 relative w-full max-w-5xl mx-auto text-center">
        {/* Top accent */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute left-1/2 -translate-x-1/2 top-[-100px] h-px bg-gradient-to-r from-amber-300/60 via-amber-300/40 to-transparent"
        />

        {/* Main text container with centered layout */}
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-10"
          ></motion.div>

          {/* Centered name and description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <div className="mb-4">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
              >
                <span className="font-playfair font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-none">
                  Gustavo Henrique
                </span>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.4 }}
              >
                <span className="font-playfair italic font-medium text-4xl md:text-5xl lg:text-6xl tracking-tight text-amber-200/90 block mt-2">
                  França Campos
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12 md:mt-16"
            >
              <div className="mb-5 flex items-center justify-center space-x-4">
                <div className="h-px w-12 bg-amber-300/40"></div>
                <div className="h-[3px] w-[3px] rounded-full bg-amber-300/60"></div>
                <div className="h-px w-12 bg-amber-300/40"></div>
              </div>
              <p className="font-playfair text-base md:text-lg font-normal text-amber-50/80 leading-relaxed tracking-wide max-w-xl mx-auto">
                Estudante de direito com foco em justiça social e transformação
                através do conhecimento jurídico
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Elegant navigation indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center space-y-3">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-amber-200/40 to-amber-200/20"></div>
          <span className="font-playfair italic text-xs tracking-widest text-amber-200/70">
            découvrir
          </span>
        </div>
      </motion.div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-amber-300/30 to-transparent z-10"
      />
    </section>
  );
};

export default Hero;
