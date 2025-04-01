import React from 'react';

const Experiencias = () => {
  return (
    <section id="experiencias" className="py-24 px-6 bg-slate-800">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center mb-16">
          <div className="h-px flex-grow bg-amber-300"></div>
          <h2 className="text-4xl md:text-5xl px-6 font-serif">Experiências</h2>
          <div className="h-px flex-grow bg-amber-300"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 rounded-lg shadow-xl overflow-hidden">
            <div className="h-48 bg-slate-700 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-amber-300">
                  <path d="M19.42 9c-.14-3.92-3.5-7-7.42-7s-7.28 3.08-7.42 7"></path>
                  <path d="M13 13l-3 3-3-3"></path>
                  <path d="M10 12v8"></path>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl mb-4 font-serif">Evento de Debate Esportivo</h3>
              <p className="leading-relaxed mb-4">
                Organizei e moderei debates sobre questões jurídicas no esporte, explorando temas como contratos de atletas, direito de imagem e responsabilidade civil em eventos esportivos.
              </p>
              <p className="text-sm text-amber-300 mb-2">Conquistas:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm opacity-80">
                <li>Reuniu mais de 100 participantes da faculdade</li>
                <li>Contou com a presença de advogados especializados em direito desportivo</li>
                <li>Recebeu reconhecimento institucional pela iniciativa inovadora</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-slate-900 rounded-lg shadow-xl overflow-hidden">
            <div className="h-48 bg-slate-700 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-amber-300">
                  <path d="M19.42 9c-.14-3.92-3.5-7-7.42-7s-7.28 3.08-7.42 7"></path>
                  <path d="M13 13l-3 3-3-3"></path>
                  <path d="M10 12v8"></path>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl mb-4 font-serif">1ª Liga Acadêmica de Direito Penal</h3>
              <p className="leading-relaxed mb-4">
                Lidero o processo contínuo da primeira Liga Acadêmica de Direito Penal da instituição AFYA, 
                um espaço dedicado ao aprofundamento de estudos e pesquisas na área criminal. Desde sua 
                criação, a Liga já reuniu diversos alunos e professores em torno de debates e produções acadêmicas.
              </p>
              <p className="text-sm text-amber-300 mb-2">Realizações em andamento:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm opacity-80">
                <li>Organização regular de grupos de estudo e simulações de júri</li>
                <li>Desenvolvimento do periódico para publicação de artigos científicos</li>
                <li>Encontros semanais com participação ativa de professores e alunos</li>
              </ul>
            </div>
          </div>
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
            
            <div className="bg-slate-800 p-4 rounded-lg text-center">
              <div className="text-amber-300 text-lg font-medium">Liderança</div>
            </div>
            
            <div className="bg-slate-800 p-4 rounded-lg text-center">
              <div className="text-amber-300 text-lg font-medium">Escrita</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencias;