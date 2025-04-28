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
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  className="h-24 w-auto object-contain"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl mb-4 font-serif">Professor de Inglês - Fisk Sete Lagoas</h3>
              <p className="leading-relaxed mb-4">
                Atuei como professor de inglês durante 8 meses, desenvolvendo planos de aula e 
                ministrando classes para alunos de diferentes faixas etárias. Contribuí para o 
                desenvolvimento linguístico e cultural dos estudantes através de metodologias dinâmicas.
              </p>
              <p className="text-sm text-amber-300 mb-2">Realizações:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm opacity-80">
                <li>Planejamento e execução de aulas para diferentes níveis</li>
                <li>Acompanhamento personalizado do progresso dos alunos</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-slate-900 rounded-lg shadow-xl overflow-hidden">
            <div className="h-48 bg-slate-700 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  className="h-24 w-auto object-contain"
                />
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

          <div className="bg-slate-900 rounded-lg shadow-xl overflow-hidden md:col-span-2">
            <div className="h-48 bg-slate-700 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Logo TEMAS" 
                  className="h-24 w-auto object-contain"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl mb-4 font-serif">TEMAS 19 - China: Tribunal Militar do Extremo Oriente</h3>
              <p className="leading-relaxed mb-4">
                Participei da simulação temática do tribunal militar para o extremo oriente como 
                Juiz Henry Reimburguer da França, responsável pelo julgamento de generais do alto 
                escalão militar japonês. A experiência proporcionou a aplicação prática de 
                conhecimentos em história e geopolítica para representar fielmente os interesses 
                do personagem durante os debates.
              </p>
              <p className="text-sm text-amber-300 mb-2">Habilidades Aprimoradas:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm opacity-80">
                <li>Retórica e estruturação lógica de argumentos</li>
                <li>Identificação e contra-argumentação de falácias</li>
                <li>Aplicação prática de conhecimentos históricos e geopolíticos</li>
                <li>Tomada de decisão em cenários complexos</li>
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
            
            <div className= "bg-slate-800 p-4 rounded-lg text-center">
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