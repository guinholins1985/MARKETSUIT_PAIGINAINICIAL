import React, { useState, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';

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

const CaptionGenerator: React.FC = () => {
    const [description, setDescription] = useState<string>('');
    const [platforms, setPlatforms] = useState<string[]>(['Instagram']);
    const [result, setResult] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [copied, setCopied] = useState<boolean>(false);

    const socialPlatforms = ['Instagram', 'Facebook', 'TikTok', 'LinkedIn', 'Twitter / X'];

    const handlePlatformChange = useCallback((platform: string) => {
        setPlatforms(prev => 
            prev.includes(platform) 
                ? prev.filter(p => p !== platform) 
                : [...prev, platform]
        );
    }, []);

    const handleSubmit = useCallback(async () => {
        if (!description.trim() || platforms.length === 0) {
            setError('Por favor, descreva o post e selecione ao menos uma rede social.');
            return;
        }
        setError('');
        setIsLoading(true);
        setResult('');

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const prompt = `Você é um especialista em marketing de redes sociais. Crie 3 legendas criativas e de alta conversão para um post no(a) ${platforms.join(', ')} sobre o seguinte tópico: "${description}". 
            
Para cada legenda:
1.  Use um tom de voz apropriado para a(s) plataforma(s) selecionada(s).
2.  Inclua uma chamada para ação (CTA) clara.
3.  Adicione 5 hashtags relevantes e populares.
4.  Formate a resposta de forma clara, separando cada opção de legenda com um título (ex: "**Opção 1**").`;

            const response = await ai.models.generateContent({
              model: 'gemini-2.5-flash',
              contents: prompt,
            });
            
            setResult(response.text.trim());

        } catch (e) {
            console.error(e);
            setError('Ocorreu um erro ao gerar as legendas. Tente novamente.');
        } finally {
            setIsLoading(false);
        }
    }, [description, platforms]);

    const handleCopy = useCallback(() => {
        if (!result) return;
        navigator.clipboard.writeText(result).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }).catch(err => console.error('Falha ao copiar texto: ', err));
    }, [result]);

    return (
        <div className="space-y-8">
            <div className="bg-light-bg/50 border border-slate-700 rounded-xl p-6 sm:p-8 space-y-6">
                <div>
                    <label htmlFor="description" className="block text-base font-semibold text-light-text mb-3">1. Descreva o seu post</label>
                    <textarea 
                      id="description" 
                      rows={4} 
                      value={description} 
                      onChange={e => setDescription(e.target.value)} 
                      className="block w-full bg-slate-900/70 border border-slate-600 rounded-lg px-4 py-2.5 text-medium-text focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 placeholder:text-slate-500" 
                      placeholder="Ex: Lançamento de um novo tênis de corrida com tecnologia de amortecimento de última geração, ideal para maratonistas." 
                    />
                </div>

                <div>
                    <label className="block text-base font-semibold text-light-text mb-3">2. Selecione as redes sociais</label>
                    <div className="flex flex-wrap gap-3">
                        {socialPlatforms.map(p => (
                            <button 
                              key={p} 
                              onClick={() => handlePlatformChange(p)} 
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border-2 ${platforms.includes(p) ? 'bg-primary border-primary text-white' : 'bg-slate-700 border-slate-600 hover:border-slate-500 text-slate-300'}`}
                            >
                                {p}
                            </button>
                        ))}
                    </div>
                </div>

                <button 
                  onClick={handleSubmit} 
                  disabled={isLoading} 
                  className="w-full flex justify-center items-center gap-3 px-6 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                >
                    {isLoading ? <SpinnerIcon/> : 'Gerar Legendas'}
                </button>

                {error && <p className="text-red-400 text-center text-sm">{error}</p>}
            </div>

            {isLoading && (
                <div className="text-center py-10 flex flex-col items-center justify-center gap-4">
                    <SpinnerIcon />
                    <p className="text-medium-text">A IA está criando suas legendas...</p>
                </div>
            )}
            
            {result && (
                <div className="mt-8 sm:mt-10 animate-fade-in">
                    <h2 className="text-2xl font-bold text-center mb-6">Aqui estão suas legendas!</h2>
                    <div className="bg-dark-bg border border-slate-700 rounded-xl p-6 relative">
                         <button 
                           onClick={handleCopy} 
                           className="absolute top-3 right-3 p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
                           aria-label="Copiar legendas"
                         >
                            {copied ? <CheckIcon/> : <ClipboardIcon/>}
                         </button>
                         <pre className="whitespace-pre-wrap font-sans text-light-text text-base leading-relaxed overflow-x-auto">{result}</pre>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CaptionGenerator;