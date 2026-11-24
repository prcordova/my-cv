import type { CaseStudy } from "@/types/content";

export const caseStudiesEn: CaseStudy[] = [
  {
    id: "consortium",
    title: "Enterprise Financial Platform — Consortium System",
    context:
      "Large-scale consortium platform delivered for a major banking client through Sinqia / Evertec Group. The product covers simulations, proposals, credit letters and complex financial workflows.",
    challenge:
      "Evolve a mission-critical enterprise frontend with dense business rules, multiple journeys and continuous delivery expectations — without compromising reliability or maintainability.",
    contribution: [
      "Built and evolved frontend journeys for simulations, proposals, credit letters and collateral/alienation flows.",
      "Implemented reusable components and frontend architecture patterns suited to enterprise product growth.",
      "Integrated backend services and supported investigation across frontend, APIs and database layers.",
      "Helped move the product from MVP foundations into later versions with stronger structure and delivery discipline.",
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "REST APIs",
      "SQL Server",
      "CI/CD",
    ],
    results: [
      "Reliable delivery of complex financial journeys in a regulated enterprise context.",
      "Stronger reusable component foundation for ongoing product evolution.",
    ],
  },
  {
    id: "financial",
    title: "Financial Enterprise Applications",
    context:
      "Enterprise applications in the financial domain, including secondary-market related systems and other corporate platforms with demanding business rules.",
    challenge:
      "Maintain and evolve existing systems while introducing clearer frontend structure, safer integrations and better engineering quality.",
    contribution: [
      "Worked on corporate applications with complex domain logic and multi-step workflows.",
      "Integrated REST APIs and collaborated closely with backend and data teams.",
      "Improved maintainability through reusable UI, careful state handling and code review practices.",
      "Supported debugging and resolution of issues spanning UI, services and databases.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "REST APIs",
      "SQL Server",
      "Docker",
    ],
    results: [
      "More resilient frontend delivery for enterprise financial workflows.",
      "Clearer collaboration across frontend, backend and data layers.",
    ],
  },
  {
    id: "performance",
    title: "Web Performance Optimization",
    context:
      "Critical pages in enterprise applications with poor loading and rendering characteristics impacting user experience and operational efficiency.",
    challenge:
      "Recover performance on high-impact screens without breaking existing business flows or introducing fragile architecture.",
    contribution: [
      "Optimized loading and rendering paths for critical pages.",
      "Reduced unnecessary API traffic with React Query, debounce, caching and memoization.",
      "Applied lazy loading, code splitting and rendering efficiency techniques.",
      "Validated improvements using Lighthouse and Core Web Vitals-oriented practices.",
    ],
    tech: [
      "React",
      "React Query",
      "Code Splitting",
      "Lazy Loading",
      "Memoization",
      "Lighthouse",
    ],
    results: [
      "Critical pages evolved from roughly Lighthouse 20 to 100.",
      "Fewer unnecessary network requests and improved perceived performance.",
    ],
  },
];

export const caseStudiesPt: CaseStudy[] = [
  {
    id: "consortium",
    title: "Plataforma Financeira Enterprise — Sistema de Consórcios",
    context:
      "Plataforma de consórcios em larga escala entregue para um grande cliente bancário via Sinqia / Evertec Group. O produto cobre simulações, propostas, cartas de crédito e fluxos financeiros complexos.",
    challenge:
      "Evoluir um frontend corporativo crítico, com regras de negócio densas, múltiplas jornadas e expectativas contínuas de entrega — sem comprometer confiabilidade ou manutenibilidade.",
    contribution: [
      "Construção e evolução de jornadas de simulações, propostas, cartas de crédito e fluxos de alienação.",
      "Implementação de componentes reutilizáveis e padrões de arquitetura frontend para evolução do produto.",
      "Integração com serviços backend e suporte à investigação entre frontend, APIs e banco de dados.",
      "Apoio na evolução do produto desde bases de MVP até versões posteriores com mais estrutura e disciplina de entrega.",
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "REST APIs",
      "SQL Server",
      "CI/CD",
    ],
    results: [
      "Entrega confiável de jornadas financeiras complexas em contexto enterprise.",
      "Base mais sólida de componentes reutilizáveis para evolução contínua.",
    ],
  },
  {
    id: "financial",
    title: "Aplicações Financeiras Enterprise",
    context:
      "Aplicações corporativas no domínio financeiro, incluindo sistemas relacionados a mercado secundário e outras plataformas com regras de negócio exigentes.",
    challenge:
      "Manter e evoluir sistemas existentes enquanto se introduz estrutura frontend mais clara, integrações mais seguras e melhor qualidade de engenharia.",
    contribution: [
      "Atuação em aplicações corporativas com lógica de domínio complexa e fluxos em múltiplas etapas.",
      "Integração com APIs REST e colaboração próxima com times de backend e dados.",
      "Melhoria de manutenibilidade com UI reutilizável, estado cuidadoso e práticas de code review.",
      "Suporte à resolução de problemas envolvendo UI, serviços e banco de dados.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "REST APIs",
      "SQL Server",
      "Docker",
    ],
    results: [
      "Entrega frontend mais resiliente para fluxos financeiros enterprise.",
      "Colaboração mais clara entre frontend, backend e dados.",
    ],
  },
  {
    id: "performance",
    title: "Otimização de Performance Web",
    context:
      "Páginas críticas em aplicações enterprise com características ruins de carregamento e renderização, impactando experiência e eficiência operacional.",
    challenge:
      "Recuperar performance em telas de alto impacto sem quebrar fluxos de negócio existentes ou introduzir arquitetura frágil.",
    contribution: [
      "Otimização de caminhos de carregamento e renderização em páginas críticas.",
      "Redução de tráfego desnecessário de APIs com React Query, debounce, cache e memoization.",
      "Aplicação de lazy loading, code splitting e técnicas de eficiência de renderização.",
      "Validação de melhorias com Lighthouse e práticas orientadas a Core Web Vitals.",
    ],
    tech: [
      "React",
      "React Query",
      "Code Splitting",
      "Lazy Loading",
      "Memoization",
      "Lighthouse",
    ],
    results: [
      "Páginas críticas evoluíram de aproximadamente 20 para 100 no Lighthouse.",
      "Menos requisições desnecessárias e melhor performance percebida.",
    ],
  },
];
