import React, { useState, useCallback } from 'react';
import { GoogleGenAI, Type } from '@google/genai';

const SpinnerIcon = () => (
    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4}></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

const ClipboardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

interface ShoppingAdResult {
    tituloOtimizado: string;
    descricaoOtimizada: string;
    palavrasChavePositivas: string[];
    palavrasChaveNegativas: string[];
}

const GoogleShoppingAdGenerator: React.FC = () => {
    const [productName, setProductName] = useState<string>('');
    const [productDescription, setProductDescription] = useState<string>('');
    const [targetAudience, setTargetAudience] = useState<string>('');
    const [result, setResult] = useState<ShoppingAdResult | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [copied, setCopied] = useState<boolean>(false);

    const handleSubmit = useCallback(async () => {
        if (!productName.trim() || !productDescription.trim()) {
            setError('Por favor, preencha o nome e a descrição do produto.');
            return;
        }
        setError('');
        setIsLoading(true);
        setResult(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const prompt = `Crie um anúncio otimizado para Google Shopping.
- Nome do Produto: "${productName}"
- Descrição do Produto: "${productDescription}"
- Público-Alvo: "${targetAudience || 'Não especificado'}"`;

            const response = await ai.models.generateContent({
              model: 'gemini-2.5-flash',
              contents: prompt,
              config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        tituloOtimizado: {
                            type: Type.STRING,
                            description: 'Um título de produto otimizado para Google Shopping com no máximo 150 caracteres.',
                        },
                        descricaoOtimizada: {
                            type: Type.STRING,
                            description: 'Uma descrição de produto otimizada e rica em palavras-chave para Google Shopping, com um tamanho ideal entre 500 e 1000 caracteres.'
                        },
                        palavrasChavePositivas: {
                            type: Type.ARRAY,
                            items: { type: Type.STRING },
                            description: 'Uma lista de 5 a 10 palavras-chave positivas relevantes para a campanha.'
                        },
                        palavrasChaveNegativas: {
                            type: Type.ARRAY,
                            items: { type: Type.STRING },
                            description: 'Uma lista de 5 a 10 palavras-chave negativas para evitar cliques irrelevantes.'
                        }
                    },
                    required: ["tituloOtimizado", "descricaoOtimizada", "palavrasChavePositivas", "palavrasChaveNegativas"]
                }
              }
            });
            
            const jsonResponse = JSON.parse(response.text.trim());
            setResult(jsonResponse);

        } catch (e) {
            console.error(e);
            setError('Ocorreu um erro ao gerar o anúncio. Tente novamente.');
        } finally {
            setIsLoading(false);
        }
    }, [productName, productDescription, targetAudience]);
    
    const getResultText = useCallback(() => {
        if (!result) return '';
        return `**Título Otimizado:**\n${result.tituloOtimizado}\n\n**Descrição Otimizada:**\n${result.descricaoOtimizada}\n\n**Palavras-chave Positivas:**\n- ${result.palavrasChavePositivas.join('\n- ')}\n\n**Palavras-chave Negativas:**\n- ${result.palavrasChaveNegativas.join('\n- ')}`;
    }, [result]);

    const handleCopy = useCallback(() => {
        const textToCopy = getResultText();
        if (!textToCopy) return;
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }).catch(err => console.error('Falha ao copiar texto: ', err));
    }, [getResultText]);

    return (
        <div className="space-y-8">
            <div className="bg-light-bg/50 border border-slate-700 rounded-xl p-6 sm:p-8 space-y-6">
                <div>
                    <label htmlFor="productName" className="block text-base font-semibold text-light-text mb-3">1. Nome do Produto</label>
                    <input 
                      id="productName" 
                      type="text"
                      value={productName} 
                      onChange={e => setProductName(e.target.value)} 
                      className="block w-full bg-slate-900/70 border border-slate-600 rounded-lg px-4 py-2.5 text-medium-text focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 placeholder:text-slate-500" 
                      placeholder="Ex: Tênis Runner Pro X" 
                    />
                </div>
                <div>
                    <label htmlFor="productDescription" className="block text-base font-semibold text-light-text mb-3">2. Descrição do Produto</label>
                    <textarea 
                      id="productDescription" 
                      rows={4} 
                      value={productDescription} 
                      onChange={e => setProductDescription(e.target.value)} 
                      className="block w-full bg-slate-900/70 border border-slate-600 rounded-lg px-4 py-2.5 text-medium-text focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 placeholder:text-slate-500" 
                      placeholder="Ex: Tênis de corrida com tecnologia de amortecimento de última geração, ideal para maratonistas. Leve, respirável e com design aerodinâmico." 
                    />
                </div>
                 <div>
                    <label htmlFor="targetAudience" className="block text-base font-semibold text-light-text mb-3">3. Público-Alvo (Opcional)</label>
                    <input 
                      id="targetAudience" 
                      type="text"
                      value={targetAudience} 
                      onChange={e => setTargetAudience(e.target.value)} 
                      className="block w-full bg-slate-900/70 border border-slate-600 rounded-lg px-4 py-2.5 text-medium-text focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 placeholder:text-slate-500" 
                      placeholder="Ex: Corredores de longa distância, atletas profissionais" 
                    />
                </div>

                <button 
                  onClick={handleSubmit} 
                  disabled={isLoading} 
                  className="w-full flex justify-center items-center gap-3 px-6 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                >
                    {isLoading ? <SpinnerIcon/> : 'Gerar Anúncio'}
                </button>

                {error && <p className="text-red-400 text-center text-sm">{error}</p>}
            </div>

            {isLoading && (
                <div className="text-center py-10 flex flex-col items-center justify-center gap-4">
                    <SpinnerIcon />
                    <p className="text-medium-text">A IA está otimizando seu anúncio...</p>
                </div>
            )}
            
            {result && (
                <div className="mt-8 sm:mt-10 animate-fade-in">
                    <h2 className="text-2xl font-bold text-center mb-6">Seu anúncio para Google Shopping!</h2>
                    <div className="bg-dark-bg border border-slate-700 rounded-xl p-6 relative space-y-6">
                         <button 
                           onClick={handleCopy} 
                           className="absolute top-3 right-3 p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
                           aria-label="Copiar anúncio"
                         >
                            {copied ? <CheckIcon/> : <ClipboardIcon/>}
                         </button>
                         <div>
                            <h3 className="text-lg font-semibold text-primary mb-2">Título Otimizado</h3>
                            <p className="text-light-text">{result.tituloOtimizado}</p>
                         </div>
                         <div>
                            <h3 className="text-lg font-semibold text-primary mb-2">Descrição Otimizada</h3>
                            <p className="text-light-text">{result.descricaoOtimizada}</p>
                         </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-semibold text-primary mb-2">Palavras-chave Positivas</h3>
                                <div className="flex flex-wrap gap-2">
                                    {result.palavrasChavePositivas.map((keyword, i) => (
                                        <span key={i} className="bg-green-500/10 text-green-300 text-sm font-medium px-2.5 py-1 rounded-full">{keyword}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-primary mb-2">Palavras-chave Negativas</h3>
                                 <div className="flex flex-wrap gap-2">
                                    {result.palavrasChaveNegativas.map((keyword, i) => (
                                        <span key={i} className="bg-red-500/10 text-red-300 text-sm font-medium px-2.5 py-1 rounded-full">{keyword}</span>
                                    ))}
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GoogleShoppingAdGenerator;