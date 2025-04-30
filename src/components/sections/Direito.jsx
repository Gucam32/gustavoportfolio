import React from "react";
import Image from "next/image";

const Direito = () => {
  return (
    <section id="direito" className="py-24 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('/placeholder')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex items-center mb-16">
          <div className="h-px flex-grow bg-amber-300"></div>
          <h2 className="text-4xl md:text-5xl px-6 font-serif">
            Amor pelo Direito
          </h2>
          <div className="h-px flex-grow bg-amber-300"></div>
        </div>

        <div className="bg-slate-900 bg-opacity-80 p-8 rounded-lg shadow-xl mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="w-48 h-48 mx-auto rounded-full bg-slate-800 overflow-hidden relative">
                <Image
                  src="/gustavo.png"
                  alt="Gustavo Campos"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 192px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-300/10 to-amber-600/10 mix-blend-overlay" />
              </div>
            </div>

            <div className="md:w-2/3">
              <h3 className="text-2xl mb-4 font-serif">
                A Descoberta da Vocação
              </h3>
              <p className="leading-relaxed mb-4">
                Meu fascínio pelo Direito surgiu da percepção de que as normas
                jurídicas são mais que simples regras de conduta – são
                expressões dos valores fundamentais de uma sociedade e
                instrumentos para a transformação social.
              </p>
              <p className="leading-relaxed">
                Ao estudar os grandes juristas e suas contribuições para o
                pensamento jurídico, compreendi que o Direito é uma ciência
                viva, em constante evolução, que demanda não apenas conhecimento
                técnico, mas também sensibilidade humanística e compromisso
                ético.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-300"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 8v4l2 2"></path>
              </svg>
            </div>
            <h4 className="text-xl text-center mb-4">Direito Penal</h4>
            <p className="text-center">
              Área de especial interesse pelo seu papel na proteção de bens
              jurídicos fundamentais e na garantia do justo processo.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-300"
              >
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            </div>
            <h4 className="text-xl text-center mb-4">Filosofia do Direito</h4>
            <p className="text-center">
              Exploração dos fundamentos filosóficos que sustentam os sistemas
              jurídicos e suas justificações morais.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-300"
              >
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </div>
            <h4 className="text-xl text-center mb-4">Direitos Humanos</h4>
            <p className="text-center">
              Estudo da proteção internacional e constitucional dos direitos
              fundamentais e sua efetivação prática.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Direito;
