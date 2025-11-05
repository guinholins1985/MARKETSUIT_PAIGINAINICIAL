import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-light-text font-sans antialiased relative overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-dark-bg via-slate-900 to-black"></div>
      <div className="absolute top-0 left-[-20%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-3xl filter animate-float"></div>
      <div className="absolute bottom-0 right-[-20%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-3xl filter animate-float animation-delay-3000"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <FeaturesGrid />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
