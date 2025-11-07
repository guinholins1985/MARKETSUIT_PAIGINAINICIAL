import React from 'react';
import type { Feature } from '../types';

interface FeatureCardProps extends Omit<Feature, 'pro'> {
  onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative bg-light-bg/50 border border-slate-700 rounded-xl p-5 sm:p-6 transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 text-left w-full h-full"
      aria-label={`Abrir ferramenta: ${title}`}
    >
      <div className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-4 inline-block p-3 bg-slate-700/50 rounded-lg text-primary group-hover:text-sky-300 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-light-text mb-2">{title}</h3>
        <p className="text-medium-text text-sm sm:text-base leading-relaxed flex-grow">{description}</p>
      </div>
    </button>
  );
};

export default FeatureCard;
