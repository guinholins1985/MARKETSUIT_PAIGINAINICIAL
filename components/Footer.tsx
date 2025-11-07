import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg/50 border-t border-light-bg/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="text-center text-medium-text">
          <p>&copy; {new Date().getFullYear()} Market Suite. Todos os direitos reservados.</p>
          <p className="text-sm mt-1">Potencializado com IA Gemini</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;