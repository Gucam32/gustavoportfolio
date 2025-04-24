export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-slate-900">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-3xl font-serif tracking-wider mb-4 md:mb-0">GHC</div>
          
          <div className="flex space-x-6">

            <a 
              href="https://www.instagram.com/gustavof.campos/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-amber-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-amber-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="h-px w-full bg-slate-800 mb-8"></div>
        
        <div className="text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} Gustavo Henrique França Campos. Todos os direitos reservados.</p>
          <p className="mt-2">Estudante de Direito na Faculdade Santo Agostinho - AFYA</p>
        </div>
        
        <div className="mt-8 flex justify-center">
          <div className="flex items-center space-x-2 text-amber-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span className="text-sm">Este portfolio é uma representação artística e profissional</span>
          </div>
        </div>
      </div>
    </footer>
  );
}