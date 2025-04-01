import React from 'react';

const Contact = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center mb-16">
          <div className="h-px flex-grow bg-amber-300"></div>
          <h2 className="text-4xl md:text-5xl px-6 font-serif">Contato</h2>
          <div className="h-px flex-grow bg-amber-300"></div>
        </div>
        
        <div className="bg-slate-900 p-8 rounded-lg shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl mb-6 font-serif">Entre em Contato</h3>
              <p className="mb-6 leading-relaxed">
                Estou sempre aberto a novas oportunidades, discussões acadêmicas e projetos colaborativos na área jurídica. Sinta-se à vontade para entrar em contato para trocarmos ideias.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>gustavo.campos@exemplo.com</div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>(31) 9XXXX-XXXX</div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>Faculdade Santo Agostinho - AFYA, Sete Lagoas, MG</div>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-amber-300 focus:ring-1 focus:ring-amber-300 outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-amber-300 focus:ring-1 focus:ring-amber-300 outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full p-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-amber-300 focus:ring-1 focus:ring-amber-300 outline-none transition-colors"
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full py-3 px-6 bg-amber-700 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 