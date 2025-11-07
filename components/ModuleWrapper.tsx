import React from 'react';
import Header from './Header';
import Footer from './Footer';
import type { Feature } from '../types';

const BackArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

interface ModuleWrapperProps {
    feature: Feature;
    onBack: () => void;
    children: React.ReactNode;
}

const ModuleWrapper: React.FC<ModuleWrapperProps> = ({ feature, onBack, children }) => {
    return (
        <div className="min-h-screen bg-dark-bg text-light-text font-sans antialiased relative overflow-x-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-dark-bg via-slate-900 to-black"></div>
            <div className="absolute top-0 left-[-20%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-3xl filter animate-float"></div>
            <div className="absolute bottom-0 right-[-20%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-3xl filter animate-float animation-delay-3000"></div>
            
            <div className="relative z-10 flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                    <div className="max-w-4xl mx-auto">
                        <button 
                            onClick={onBack} 
                            className="flex items-center gap-2 text-medium-text hover:text-light-text transition-colors duration-200 mb-6 sm:mb-8"
                            aria-label="Voltar para todas as ferramentas"
                        >
                            <BackArrowIcon />
                            Voltar para todas as ferramentas
                        </button>

                        <div className="text-center mb-8 sm:mb-12">
                            <div className="mb-4 inline-block p-4 bg-slate-700/50 rounded-lg text-primary">
                                {feature.icon}
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-light-text">{feature.title}</h1>
                            <p className="mt-3 text-base sm:text-lg text-medium-text max-w-2xl mx-auto">{feature.description}</p>
                        </div>
                        
                        {children}

                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default ModuleWrapper;
