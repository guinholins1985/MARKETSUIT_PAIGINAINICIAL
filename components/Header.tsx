import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-dark-bg/70 border-b border-light-bg/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center">
          {/* Left spacer */}
          <div className="flex-1"></div>

          {/* Centered Logo */}
          <div className="text-center">
            <a href="#" className="inline-block" aria-label="Market Suite Home">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl sm:text-3xl font-bold text-transparent md:text-4xl whitespace-nowrap">
                Market Suite
              </span>
            </a>
          </div>

          {/* Right CTA Button */}
          <div className="flex-1 flex justify-end">
            <a
              href="#features"
              className="transform whitespace-nowrap px-3 py-2 text-xs sm:px-4 sm:text-sm font-medium text-white bg-primary rounded-md transition-all duration-300 hover:scale-105 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-bg"
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
