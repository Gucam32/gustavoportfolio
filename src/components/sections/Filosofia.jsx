import React from 'react';

const Filosofia = () => {
  return (
    <section id="filosofia" className="py-24 px-6 bg-slate-800">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center mb-16">
          <div className="h-px flex-grow bg-amber-300"></div>
          <h2 className="text-4xl md:text-5xl px-6 font-serif">Filosofia e Moral</h2>
          <div className="h-px flex-grow bg-amber-300"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg bg-slate-900 shadow-lg flex flex-col">
            <h3 className="text-2xl mb-4 font-serif">Visão de Mundo</h3>
            <div className="h-1 w-16 bg-amber-300 mb-6"></div>
            <p className="leading-relaxed flex-grow">
              Acredito na interseção entre justiça social e responsabilidade individual. Minha perspectiva se fundamenta na ideia de que o verdadeiro progresso social ocorre quando harmonizamos liberdades individuais com o bem-estar coletivo, criando instituições que promovam equidade sem sacrificar a autonomia.
            </p>
            <div className="mt-4 text-amber-300">
              "A justiça é o equilíbrio entre direito e dever."
            </div>
          </div>
          
          <div className="p-6 rounded-lg bg-slate-900 shadow-lg flex flex-col">
            <h3 className="text-2xl mb-4 font-serif">Princípios Morais</h3>
            <div className="h-1 w-16 bg-amber-300 mb-6"></div>
            <p className="leading-relaxed flex-grow">
              Defendo o racionalismo crítico como método para avaliar questões morais, reconhecendo tanto a importância de princípios universais quanto dos contextos particulares. Busco conciliar a dimensão objetiva da ética com a subjetividade das experiências humanas.
            </p>
            <div className="mt-4 text-amber-300">
              "A moral sem contexto é cega; o contexto sem moral é vazio."
            </div>
          </div>
          
          <div className="md:col-span-2 p-6 rounded-lg bg-slate-900 shadow-lg">
            <h3 className="text-2xl mb-4 font-serif">Referências Filosóficas</h3>
            <div className="h-1 w-16 bg-amber-300 mb-6"></div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-800 p-4 rounded">
                <p className="text-lg font-medium mb-2">Justiça como Equidade</p>
                <p className="text-sm opacity-80">Inspirado por John Rawls, busco compreender como instituições justas devem ser estruturadas para promover igualdade de oportunidades.</p>
              </div>
              <div className="bg-slate-800 p-4 rounded">
                <p className="text-lg font-medium mb-2">Ética da Alteridade</p>
                <p className="text-sm opacity-80">De Emmanuel Levinas, extraio a importância da responsabilidade para com o outro como fundamento da ética.</p>
              </div>
              <div className="bg-slate-800 p-4 rounded">
                <p className="text-lg font-medium mb-2">Filosofia Brasileira</p>
                <p className="text-sm opacity-80">Busco diálogo com pensadores nacionais como Miguel Reale e sua teoria tridimensional do Direito.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filosofia; 