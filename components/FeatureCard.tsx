import React from 'react';
import type { Feature } from '../types';

const FeatureCard: React.FC<Omit<Feature, 'pro'>> = ({ icon, title, description }) => {
  return (
    <div className="group relative bg-light-bg/50 border border-slate-700 rounded-xl p-6 transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
      <div className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
      <div className="relative z-10">
        <div className="mb-4 inline-block p-3 bg-slate-700/50 rounded-lg text-primary group-hover:text-sky-300 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-light-text mb-2">{title}</h3>
        <p className="text-medium-text text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
