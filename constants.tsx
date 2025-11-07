import React from 'react';
import type { Feature } from './types';
import CaptionGenerator from './components/modules/CaptionGenerator';
import GoogleShoppingAdGenerator from './components/modules/GoogleShoppingAdGenerator';

const CubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9.75l-9-5.25" />
  </svg>
);

const CalculatorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7V2.25a2.25 2.25 0 012.25-2.25h1.5A2.25 2.25 0 0115 2.25V7.5h1.5a2.25 2.25 0 012.25 2.25v1.5a2.25 2.25 0 01-2.25 2.25h-1.5a2.25 2.25 0 01-2.25-2.25V7.5H9z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12.75a2.25 2.25 0 012.25-2.25h1.5a2.25 2.25 0 012.25 2.25v1.5a2.25 2.25 0 01-2.25 2.25h-1.5a2.25 2.25 0 01-2.25-2.25V12.75zM9 15V9.75a2.25 2.25 0 012.25-2.25h1.5A2.25 2.25 0 0115 9.75V15M9 15h6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15a2.25 2.25 0 00-2.25 2.25v1.5A2.25 2.25 0 009 21h6a2.25 2.25 0 002.25-2.25v-1.5A2.25 2.25 0 0015 15H9z" />
  </svg>
);

const QuestionMarkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
    </svg>
);

const PencilIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
);

const WandIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.998 15.998 0 011.622-3.385m5.043.025a15.998 15.998 0 001.622-3.385m3.388 1.62a15.998 15.998 0 00-1.622-3.385m-5.043.025a15.998 15.998 0 01-3.388-1.621m7.5 4.242a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.998 15.998 0 011.622-3.385" />
  </svg>
);

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286z" />
    </svg>
);

const ImageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
);

const RocketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.978 14.978 0 00-5.84-2.56m5.84 2.56a14.978 14.978 0 00-2.56-5.84m-2.56 5.84a6 6 0 01-7.38-5.84m4.82 5.84a14.978 14.978 0 00-2.56-5.84m-2.56 5.84A6 6 0 012.63 8.41m4.82 5.84a14.978 14.978 0 00-5.84-2.56M14.37 15.59a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.978 14.978 0 00-5.84-2.56m5.84 2.56a14.978 14.978 0 00-2.56-5.84m-2.56 5.84a6 6 0 01-7.38-5.84m4.82 5.84a14.978 14.978 0 00-2.56-5.84m-2.56 5.84A6 6 0 012.63 8.41" />
    </svg>
);

const TargetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527c.44-.314.989-.227 1.32.148l.788.894c.33.374.394.904.148 1.32l-.527.737c-.25.35-.272.806-.108 1.204.166.397.506.71.93.78l.894.149c.542.09.94.56.94 1.11v1.093c0 .55-.398 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.93.78-.164.398-.142.854.108 1.204l.527.738c.314.44.227.988-.148 1.32l-.894.788c-.374.33-.904.394-1.32.148l-.737-.527c-.35-.25-.806-.272-1.204-.108-.397.166-.71.506-.78.93l-.149.894c-.09.542-.56.94-1.11.94h-1.093c-.55 0-1.02-.398-1.11-.94l-.149-.894c-.07-.424-.384-.764-.78-.93-.398-.164-.855-.142-1.205.108l-.737.527c-.44.314-.989.227-1.32-.148l-.788-.894c-.33-.374-.394-.904-.148-1.32l.527-.737c.25-.35.272.806.108-1.204-.166-.397-.506-.71-.93-.78l-.894-.149c-.542-.09-.94-.56-.94-1.11v-1.093c0 .55.398-1.02.94-1.11l.894-.149c.424-.07.764-.383.93-.78.164-.398.142-.854-.108-1.204l-.527-.738c-.314.44-.227-.988.148-1.32l.894-.788c.374-.33.904-.394 1.32-.148l.737.527c.35.25.806-.272 1.204.108.397-.166.71-.506.78-.93l.149-.894z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const MegaphoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
    </svg>
);

const ChartBarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
);

const SmileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 9.75h.008v.008H9V9.75zm6 0h.008v.008H15V9.75z" />
    </svg>
);

const MobileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
);

const TagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
    </svg>
);

const CurrencyDollarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 11.21 12.768 11 12 11c-.768 0-1.536.21-2.121.621L9 12.232m0 0L6.879 14.38a2.25 2.25 0 00-.621 1.562V18m0-3.618v.003c0 .814.662 1.477 1.477 1.477h1.445a.75.75 0 00.53-.22l2.34-2.34a.75.75 0 000-1.06l-2.34-2.34a.75.75 0 00-1.06 0l-2.34 2.34a.75.75 0 00-.22.53v1.445c0 .206.035.408.104.602z" />
    </svg>
);

const DocumentTextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625a3.375 3.375 0 00-3.375 3.375v11.25a3.375 3.375 0 003.375 3.375h9.75a3.375 3.375 0 003.375-3.375V9.75" />
    </svg>
);

const VideoCameraIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
    </svg>
);

const TicketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
    </svg>
);

const ShoppingCartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l1.823-6.836A1.125 1.125 0 0018.028 4.5H4.23z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3H4.875c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125h15c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H7.5m3-9h.008v.008H10.5v-.008zm4.5 0h.008v.008H15v-.008z" />
    </svg>
);


export const FEATURES: Feature[] = [
  {
    icon: <CubeIcon />,
    title: "Gerador de Mockups 3D com IA",
    description: "Transforme uma imagem 2D do seu produto em uma visualização 3D ou 360° imersiva e profissional.",
  },
  {
    icon: <CalculatorIcon />,
    title: "Calculadora de Lucratividade com IA",
    description: "Simule cenários, compare marketplaces e receba uma estratégia completa para otimizar suas vendas.",
  },
  {
    icon: <QuestionMarkIcon />,
    title: "Gerador de FAQ para E-commerce",
    description: "Faça upload da imagem de um produto e nossa IA criará 40 perguntas e respostas frequentes.",
  },
  {
    icon: <PencilIcon />,
    title: "Impulso Criativo: Gerador de Legendas",
    description: "Descreva o seu post, escolha as redes sociais e deixe a IA criar legendas perfeitas para você.",
    component: CaptionGenerator,
  },
  {
    icon: <WandIcon />,
    title: "Removedor de Marcas D'água",
    description: "Inteligência Artificial avançada para limpar e aprimorar a qualidade de suas imagens.",
  },
  {
    icon: <ShieldIcon />,
    title: "Gerador de Política de Trocas",
    description: "Crie uma política profissional para sua loja em segundos com o poder da IA do Gemini.",
  },
  {
    icon: <ImageIcon />,
    title: "Gerador de Banners Promocionais",
    description: "Crie banners profissionais para marketplaces em segundos. Basta preencher as informações da sua campanha.",
  },
  {
    icon: <RocketIcon />,
    title: "Gerador de Conteúdo de Marketing",
    description: "Faça upload de uma imagem ou cole um link e a IA gerará textos de alta conversão para suas necessidades.",
  },
  {
    icon: <TargetIcon />,
    title: "Otimizador de Anúncios IA",
    description: "Cole a URL do seu produto e deixe a IA analisar e criar um anúncio otimizado para a máxima performance.",
  },
  {
    icon: <MegaphoneIcon />,
    title: "Gerador de Anúncios com IA",
    description: "Crie textos de anúncios de alta conversão para Google Ads e Meta Ads em segundos.",
  },
  {
    icon: <ShoppingCartIcon />,
    title: "Gerador de Anúncios Google Shopping",
    description: "Crie títulos, descrições e palavras-chave otimizadas para seus produtos no Google Shopping.",
    component: GoogleShoppingAdGenerator,
  },
  {
    icon: <ChartBarIcon />,
    title: "Gerador de Infográficos com IA",
    description: "Cole a URL de um produto e deixe a IA criar um infográfico de benefícios impressionante.",
  },
  {
    icon: <SmileIcon />,
    title: "Gerador de Memes IA",
    description: "Transforme imagens em conteúdo viral com humor e criatividade gerados por inteligência artificial.",
  },
  {
    icon: <MobileIcon />,
    title: "Gerador de Imagens para Stories",
    description: "Envie um produto, descreva um cenário e deixe a IA fazer a mágica para criar visuais incríveis.",
  },
  {
    icon: <TicketIcon />,
    title: "Gerador de Cupom de Desconto",
    description: "Crie, gerencie e valide cupons de desconto para suas campanhas.",
  },
  {
    icon: <TagIcon />,
    title: "Gerador de Nomes e Slogans",
    description: "Crie nomes e slogans memoráveis com base em seu público. Inclui análise de disponibilidade de domínio.",
  },
  {
    icon: <CurrencyDollarIcon />,
    title: "Preço Dinâmico com IA",
    description: "Simule preços ideais com base em custos, concorrência e demanda, com monitoramento em tempo real.",
  },
  {
    icon: <DocumentTextIcon />,
    title: "Conteúdo para Blogs e Redes Sociais",
    description: "Produza artigos e posts otimizados para SEO e engajamento em blogs e redes sociais automaticamente.",
  },
  {
    icon: <VideoCameraIcon />,
    title: "Roteirista de Lives com IA",
    description: "Crie scripts detalhados para lives de lançamento, com timing, interações e prompts para engajar sua audiência.",
  }
];