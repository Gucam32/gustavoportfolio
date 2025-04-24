import React from 'react';
import { motion } from 'framer-motion';

const PorqueDireito = () => {
  return (
    <section id="porque-direito" className="py-24 px-6 relative bg-transparent">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex items-center mb-16">
          <div className="h-px flex-grow bg-gradient-to-r from-transparent to-amber-400/50"></div>
          <div className="px-6 relative">
            <h2 className="text-4xl md:text-5xl font-serif text-amber-100/90">
              Por que Direito?
            </h2>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-amber-400/70 rounded-full"></div>
          </div>
          <div className="h-px flex-grow bg-gradient-to-l from-transparent to-amber-400/50"></div>
        </div>

        <div className="space-y-8">
          <div className="p-8 rounded-lg bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm shadow-lg border-l-4 border-amber-700/50">
            <h3 className="text-2xl mb-6 font-serif text-amber-200">
              O Momento Decisivo
            </h3>
            <p className="leading-relaxed text-amber-50/90 mb-6">
              Aos 11 anos, durante uma aula de inglês em uma escola local de Sete Lagoas, 
              vivenciei um momento que mudaria minha perspectiva de vida. Em um exercício 
              aparentemente simples de compartilhar habilidades com a turma, 
              enquanto meus colegas falavam sobre tocar instrumentos, praticar esportes 
              e outras atividades, me vi em um momento de profunda reflexão.
            </p>
            <p className="leading-relaxed text-amber-50/90">
              Naquele instante, percebi que não tinha uma habilidade específica para 
              compartilhar. Foi um momento de clareza que me levou a uma decisão fundamental: 
              eu precisava conquistar meu espaço no mundo.
            </p>
            <div className="mt-8 border-l-2 border-amber-500/30 pl-6">
              <p className="text-lg italic text-amber-100/80">
                "A partir daquele dia, decidi que queria me destacar, fazer a diferença. 
                Esta busca por significado me conduziu ao Direito, onde encontrei minha vocação 
                para transformar realidades através do conhecimento jurídico."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm shadow-lg border-r-4 border-amber-700/50">
              <h3 className="text-2xl mb-4 font-serif text-amber-200">
                Transformação Pessoal
              </h3>
              <p className="leading-relaxed text-amber-50/90">
                Aquele momento de aparente vulnerabilidade se transformou em força motriz. 
                O Direito surgiu como o caminho perfeito para canalizar meu desejo de 
                fazer a diferença, permitindo que eu desenvolvesse habilidades únicas 
                e significativas.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm shadow-lg border-l-4 border-amber-700/50">
              <h3 className="text-2xl mb-4 font-serif text-amber-200">
                Propósito Encontrado
              </h3>
              <p className="leading-relaxed text-amber-50/90">
                No Direito, encontrei não apenas uma profissão, mas uma missão. 
                A capacidade de defender causas, promover justiça e impactar 
                positivamente a vida das pessoas tornou-se minha forma de deixar 
                uma marca significativa no mundo.
              </p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-4 right-4 text-amber-800/20 text-2xl">
          §
        </div>
      </div>
    </section>
  );
};

export default PorqueDireito;