import React from 'react';
import { FEATURES } from '../constants';
import FeatureCard from './FeatureCard';
import type { Feature } from '../types';

const FeaturesGrid: React.FC = () => {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-light-text">
            Um Ecossistema de Ferramentas <span className="text-primary">Inteligentes</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-medium-text max-w-2xl mx-auto">
            Cada módulo foi projetado para resolver um desafio específico do marketing em marketplaces, usando o poder da IA.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FEATURES.map((feature: Feature, index: number) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
