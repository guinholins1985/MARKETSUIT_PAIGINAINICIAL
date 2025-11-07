import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import Footer from './components/Footer';
import ModuleWrapper from './components/ModuleWrapper';
import type { Feature } from './types';

const App: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const handleFeatureSelect = (feature: Feature) => {
    window.scrollTo(0, 0);
    setSelectedFeature(feature);
  };

  const handleBack = () => {
    setSelectedFeature(null);
  };

  if (selectedFeature) {
    const ModuleComponent = <p className="text-center text-medium-text bg-light-bg/50 border border-slate-700 rounded-xl p-8">Este módulo ainda não foi implementado.</p>;

    return (
        <ModuleWrapper feature={selectedFeature} onBack={handleBack}>
            {ModuleComponent}
        </ModuleWrapper>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg text-light-text font-sans antialiased relative overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-dark-bg via-slate-900 to-black"></div>
      <div className="absolute top-0 left-[-20%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-3xl filter animate-float"></div>
      <div className="absolute bottom-0 right-[-20%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-3xl filter animate-float animation-delay-3000"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <FeaturesGrid onFeatureSelect={handleFeatureSelect} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
