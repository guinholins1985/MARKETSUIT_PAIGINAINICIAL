import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-dark-bg/70 border-b border-light-bg/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              Market Suite
            </span>
          </div>
          <div className="flex items-center">
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-dark-bg transition-all duration-300 transform hover:scale-105"
            >
              Comece Agora
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
