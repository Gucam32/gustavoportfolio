import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experiencias = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  const experiences = {
    temas: {
      title: "TEMAS 19 - China",
      description: `Participei da simulação temática do tribunal militar para o extremo oriente como 
        Juiz Henry Reimburguer da França, responsável pelo julgamento de generais do alto 
        escalão militar japonês. Foi colocado em prática meus conhecimentos de história e 
        geopolítica para defender os interesses do personagem que interpretei em debate.`,
      achievements: [
        "Desenvolvimento de retórica e argumentação jurídica",
        "Estruturação lógica de argumentos",
        "Identificação e contra-argumentação de falácias",
        "Aplicação prática de conhecimentos históricos"
      ],
      coverImage: "/experiences/temas/abertura.jpg",
      photos: [
        { url: "/experiences/temas/gustavo1.jpg", caption: "" },
        { url: "/experiences/temas/gustavo2.jpg", caption: "" },
        { url: "/experiences/temas/gustavo3.jpg", caption: "" }
      ]
    },
    quantium: {
      title: "Consultor Jurídico - Quantium Labs",
      description: `Atuei na área jurídica da empresa de desenvolvimento de software, elaborando e 
        revisando contratos, termos de uso e políticas de privacidade. Contribuí para 
        a conformidade legal das operações e proteção dos interesses da empresa.`,
      achievements: [
        "Elaboração de contratos de prestação de serviços",
        "Desenvolvimento de termos de uso e políticas de privacidade",
        "Análise e gestão de documentação jurídica"
      ],
      coverImage: "/experiences/quantium/banner.jpg",
      photos: [
        { url: "/experiences/quantium/aline.jpg", caption: "Apresentação de produto na ACI" },
      ]
    },
    fisk: {
      title: "Professor de Inglês - Fisk Sete Lagoas",
      description: `Atuei como professor de inglês durante 8 meses, desenvolvendo planos de aula e 
        ministrando classes para alunos de diferentes faixas etárias. Contribuí para o 
        desenvolvimento linguístico e cultural dos estudantes através de metodologias dinâmicas.`,
      achievements: [
        "Planejamento e execução de aulas para diferentes níveis",
        "Acompanhamento personalizado do progresso dos alunos"
      ],
      coverImage: "/experiences/professoringles/banneringles.png",
      photos: [
        { url: "/experiences/fisk1.jpg", caption: "Sala de aula" },
        { url: "/experiences/fisk2.jpg", caption: "Atividades em grupo" }
      ]
    },
    liga: {
      title: "1ª Liga Acadêmica de Direito Penal",
      description: `Lidero o processo contínuo da primeira Liga Acadêmica de Direito Penal da instituição AFYA, 
        um espaço dedicado ao aprofundamento de estudos e pesquisas na área criminal. Desde sua 
        criação, a Liga já reuniu diversos alunos e professores em torno de debates e produções acadêmicas.`,
      achievements: [
        "Organização regular de grupos de estudo e simulações de júri",
        "Desenvolvimento do periódico para publicação de artigos científicos",
        "Encontros semanais com participação ativa de professores e alunos"
      ],
      coverImage: "/experiences/liga/logo.jpeg",
      photos: [
        { url: "/experiences/liga1.jpg", caption: "Simulação de júri" },
        { url: "/experiences/liga2.jpg", caption: "Grupo de estudos" }
      ]
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };

  return (
    <section id="experiencias" className="py-24 px-6 bg-slate-800">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center mb-16">
          <div className="h-px flex-grow bg-amber-300"></div>
          <h2 className="text-4xl md:text-5xl px-6 font-serif">Experiências</h2>
          <div className="h-px flex-grow bg-amber-300"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(experiences).map(([key, exp]) => (
            <motion.div
              key={key}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-slate-900 rounded-lg shadow-xl overflow-hidden"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={exp.coverImage}
                  alt={exp.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-4 font-serif">{exp.title}</h3>
                <p className="leading-relaxed mb-4">{exp.description}</p>
                {exp.achievements && (
                  <>
                    <p className="text-sm text-amber-300 mb-2">Realizações:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm opacity-80 mb-4">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </>
                )}
                {(key !== 'fisk' && key !== 'liga') && (
                  <button
                    onClick={() => setSelectedExp(key)}
                    className="bg-slate-800 hover:bg-slate-700 text-amber-300 px-4 py-2 rounded-full
                      shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
                  >
                    Ver mais fotos
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 p-8 bg-slate-900 rounded-lg shadow-xl">
          <h3 className="text-2xl mb-6 font-serif text-center">Competências Desenvolvidas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg text-center">
              <div className="text-amber-300 text-lg font-medium">Oratória</div>
            </div>
            
            <div className="bg-slate-800 p-4 rounded-lg text-center">
              <div className="text-amber-300 text-lg font-medium">Pesquisa</div>
            </div>
            
            <div className= "bg-slate-800 p-4 rounded-lg text-center">
              <div className="text-amber-300 text-lg font-medium">Liderança</div>
            </div>
            
            <div className="bg-slate-800 p-4 rounded-lg text-center">
              <div className="text-amber-300 text-lg font-medium">Escrita</div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {selectedExp && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedExp(null)}
                className="fixed inset-0 bg-black/90 z-50 backdrop-blur-sm"
              />
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-4 md:inset-16 z-50 bg-slate-900 rounded-lg overflow-hidden"
              >
                <div className="h-full overflow-y-auto">
                  <button
                    onClick={() => setSelectedExp(null)}
                    className="absolute top-4 right-4 text-white p-2 z-10 hover:text-amber-300 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {experiences[selectedExp].photos.map((photo, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="relative aspect-video"
                        >
                          <img
                            src={photo.url}
                            alt={photo.caption}
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-sm text-white">{photo.caption}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experiencias;