import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400">
          Sua Suíte de Marketing Completa com IA
        </h1>
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-medium-text mb-10">
          Crie anúncios perfeitos para marketplaces com ferramentas essenciais e a potência do Gemini. Otimize seu tempo, maximize suas vendas.
        </p>
        <a
          href="#features"
          className="inline-block px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          Explorar Ferramentas
        </a>
      </div>
    </section>
  );
};

export default Hero;
