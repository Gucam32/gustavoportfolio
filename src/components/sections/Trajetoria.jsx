import React from "react";

const Trajetoria = () => {
  return (
    <section id="trajetoria" className="py-24 px-6 relative bg-transparent">
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section header */}
        <div className="flex items-center mb-16">
          <div className="h-px flex-grow bg-gradient-to-r from-transparent to-amber-400/50"></div>
          <div className="px-6 relative">
            <h2 className="text-4xl md:text-5xl font-serif text-amber-100/90">
              Trajetória
            </h2>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-amber-400/70 rounded-full"></div>
          </div>
          <div className="h-px flex-grow bg-gradient-to-l from-transparent to-amber-400/50"></div>
        </div>

        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-gradient-to-b from-amber-800/40 via-amber-600/40 to-amber-800/40 transform md:translate-x-px"></div>

          <div className="mb-16 md:ml-0 md:mr-auto md:pr-8 md:w-1/2 relative">
            <div className="hidden md:block absolute right-0 top-6 w-4 h-4 rounded-full bg-amber-400/80 transform translate-x-1/2 shadow-lg shadow-amber-400/30"></div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm shadow-lg border-l-4 border-amber-700/50">
              <h3 className="text-2xl mb-4 font-serif text-amber-200">
                Origens
              </h3>
              <p className="leading-relaxed text-amber-50">
                Nascido em Belo Horizonte e criado em Sete Lagoas, Minas Gerais, desde cedo
                demonstrei interesse pelos debates sobre justiça e sociedade.
                Minha jornada começou com questionamentos sobre os fundamentos
                das relações humanas e os princípios que regem nossa convivência
                social.
              </p>
            </div>
          </div>

          <div className="mb-16 md:ml-auto md:mr-0 md:pl-8 md:w-1/2 relative">
            <div className="hidden md:block absolute left-0 top-6 w-4 h-4 rounded-full bg-amber-400/80 transform -translate-x-1/2 shadow-lg shadow-amber-400/30"></div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm shadow-lg border-r-4 border-amber-700/50">
              <h3 className="text-2xl mb-4 font-serif text-amber-200">
                Educação Fundamental
              </h3>
              <p className="leading-relaxed text-amber-50">
                Durante minha formação básica, desenvolvi habilidades de
                oratória e argumentação que me permitiram destacar em debates e
                apresentações. A leitura de clássicos da literatura brasileira e
                mundial ampliou minha visão crítica sobre a sociedade.
              </p>
            </div>
          </div>

          <div className="md:ml-0 md:mr-auto md:pr-8 md:w-1/2 relative">
            <div className="hidden md:block absolute right-0 top-6 w-4 h-4 rounded-full bg-amber-400/80 transform translate-x-1/2 shadow-lg shadow-amber-400/30"></div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm shadow-lg border-l-4 border-amber-700/50">
              <h3 className="text-2xl mb-4 font-serif text-amber-200">
                Faculdade Santo Agostinho - AFYA
              </h3>
              <p className="leading-relaxed text-amber-50">
                Atualmente cursando Direito na Faculdade Santo Agostinho - AFYA
                em Sete Lagoas, onde encontrei ambiente propício para
                desenvolver minhas ideias e contribuir com a comunidade
                acadêmica através de projetos inovadores.
              </p>

              {/* Decorative legal symbol with adjusted opacity */}
              <div className="absolute bottom-4 right-4 text-amber-800/20 text-2xl">
                §
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trajetoria;
