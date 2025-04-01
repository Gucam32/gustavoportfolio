import React from 'react';

const Inspiration = () => {
  return (
    <section id="inspiration" className="py-24 px-6 bg-slate-800/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center mb-16">
          <div className="h-px flex-grow bg-gradient-to-r from-transparent to-amber-400/50"></div>
          <div className="px-6 relative">
            <h2 className="text-4xl md:text-5xl font-serif text-amber-100/90">
              Inspirações
            </h2>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-amber-400/70 rounded-full"></div>
          </div>
          <div className="h-px flex-grow bg-gradient-to-l from-transparent to-amber-400/50"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm shadow-lg rounded-lg p-6 border-l-4 border-amber-700/50">
            <h3 className="text-2xl mb-4 font-serif text-amber-200">Rui Barbosa</h3>
            <p className="leading-relaxed text-amber-50/90 mb-4">
              "A regra da igualdade não consiste senão em quinhoar desigualmente aos desiguais, na medida em que se desigualam."
            </p>
            <div className="text-sm text-amber-300/80 italic">
              Orador, jurista e escritor brasileiro
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm shadow-lg rounded-lg p-6 border-l-4 border-amber-700/50">
            <h3 className="text-2xl mb-4 font-serif text-amber-200">Miguel Reale</h3>
            <p className="leading-relaxed text-amber-50/90 mb-4">
              "O Direito é uma integração normativa de fatos segundo valores."
            </p>
            <div className="text-sm text-amber-300/80 italic">
              Jurista, filósofo e professor brasileiro
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm shadow-lg rounded-lg p-6 border-l-4 border-amber-700/50">
            <h3 className="text-2xl mb-4 font-serif text-amber-200">Hans Kelsen</h3>
            <p className="leading-relaxed text-amber-50/90 mb-4">
              "A justiça é uma ideia irracional. Por mais indispensável que seja para a volição e a ação dos homens, não está sujeita à cognição."
            </p>
            <div className="text-sm text-amber-300/80 italic">
              Jurista e filósofo austríaco
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 text-amber-200/80">
            <div className="w-8 h-px bg-amber-300/50"></div>
            <span className="text-sm uppercase tracking-wider">Grandes Mestres do Direito</span>
            <div className="w-8 h-px bg-amber-300/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;