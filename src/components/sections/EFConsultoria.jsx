import React from "react";
import { motion } from "framer-motion";

const EFConsultoria = () => {
  return (
    <section
      id="efconsultoria"
      className="py-24 px-6 relative overflow-hidden"
      aria-label="EstanislauFrança Soluções"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-slate-800"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex items-center mb-16">
          <div className="h-px flex-grow bg-amber-300"></div>
          <h2 className="text-4xl md:text-5xl px-6 font-serif">
            Empreendimento
          </h2>
          <div className="h-px flex-grow bg-amber-300"></div>
        </div>

        {/* Teaser Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mx-auto overflow-hidden rounded-xl shadow-2xl"
        >
          {/* White background with orange accents */}
          <div className="bg-white">
            {/* Orange header bar */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-400 h-3"></div>

            <div className="grid md:grid-cols-2">
              {/* Content side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="max-w-md">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-2"
                  >
                    <span className="text-xs uppercase tracking-wider text-orange-500 font-bold">
                      Em breve
                    </span>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                  >
                    EstanislauFrança
                    <span className="block text-orange-500">Soluções</span>
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-gray-600 mb-8"
                  >
                    Transformamos desafios em oportunidades com estratégias
                    personalizadas e implementação eficiente para empresas que
                    buscam excelência.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                      <span className="text-gray-700">
                        Consultoria Estratégica
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                      <span className="text-gray-700">
                        Otimização de Processos
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                      <span className="text-gray-700">Gestão de Talentos</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-8"
                  >
                    <motion.a
                      href="https://estanislaufranca.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-3 rounded-lg bg-orange-500 text-white font-medium text-sm transition-all overflow-hidden group relative"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 20px -10px rgba(249, 115, 22, 0.4)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">Visitar Website</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.a>
                  </motion.div>
                </div>
              </div>

              {/* Image/Design side */}
              <div className="relative h-64 md:h-auto">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/90 to-amber-400/90 flex items-center justify-center overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Abstract elements */}
                  <motion.div
                    className="absolute w-96 h-96 rounded-full bg-white/10 mix-blend-overlay"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{ top: "10%", right: "-20%" }}
                  />
                  <motion.div
                    className="absolute w-64 h-64 rounded-full bg-white/10 mix-blend-overlay"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                    style={{ bottom: "10%", left: "-10%" }}
                  />

                  {/* Company logo/symbol */}
                  <motion.div
                    className="relative z-10 text-white font-bold"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center">
                      <div className="text-5xl md:text-7xl font-serif">EF</div>
                      <div className="text-sm md:text-base uppercase tracking-widest mt-2">
                        SOLUÇÕES
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Bottom orange bar */}
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 h-3"></div>
          </div>
        </motion.div>

        {/* Launch date indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-amber-200/70"
        >
          <div className="inline-flex items-center space-x-4">
            <div className="h-px w-12 bg-amber-300/40"></div>
            <span className="text-sm uppercase tracking-wider">
              Lançamento em 2025
            </span>
            <div className="h-px w-12 bg-amber-300/40"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EFConsultoria;
