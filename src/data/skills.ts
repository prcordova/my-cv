import type { SkillCategory } from "@/types/content";

export const skillsEn: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    highlighted: true,
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "Styled Components",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    id: "react-ecosystem",
    title: "React Ecosystem & Architecture",
    highlighted: true,
    items: [
      "React Hooks",
      "React Query",
      "Zustand",
      "Component Architecture",
      "Reusable Components",
      "Design Systems",
      "SSR",
      "State Management",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "C# / .NET",
      "REST APIs",
      "JWT",
      "OAuth2",
      "Webhooks",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    items: [
      "Microsoft SQL Server",
      "T-SQL",
      "Stored Procedures",
      "MongoDB",
      "MongoDB Atlas",
      "Redis",
    ],
  },
  {
    id: "testing",
    title: "Testing & Quality",
    items: [
      "Jest",
      "React Testing Library",
      "Cypress",
      "Playwright",
      "Unit Testing",
      "Integration Testing",
      "E2E Testing",
    ],
  },
  {
    id: "performance",
    title: "Performance & SEO",
    items: [
      "Lighthouse",
      "Core Web Vitals",
      "Code Splitting",
      "Lazy Loading",
      "Memoization",
      "Debounce",
      "SEO Optimization",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Infrastructure",
    items: [
      "Docker",
      "Docker Compose",
      "GHCR",
      "Jenkins",
      "CI/CD",
      "AWS S3",
      "Cloudflare",
      "Vercel",
    ],
  },
  {
    id: "security",
    title: "Security",
    items: [
      "LGPD",
      "Authentication",
      "Authorization",
      "OWASP Top 10",
      "Burp Suite",
      "Web Security Testing",
    ],
  },
  {
    id: "payments",
    title: "Payments & Integrations",
    items: [
      "Stripe",
      "Mercado Pago",
      "Payment APIs",
      "Checkout",
      "Subscriptions",
      "Webhooks",
    ],
  },
  {
    id: "workflow",
    title: "Development Workflow",
    items: [
      "Git",
      "GitHub",
      "Pull Requests",
      "Code Review",
      "Rebase",
      "Cherry-pick",
      "Merge",
      "CI/CD",
    ],
  },
];

export const skillsPt: SkillCategory[] = skillsEn.map((category) => {
  const titles: Record<string, string> = {
    frontend: "Engenharia Frontend",
    "react-ecosystem": "Ecossistema React & Arquitetura",
    backend: "Backend",
    databases: "Bancos de Dados",
    testing: "Testes & Qualidade",
    performance: "Performance & SEO",
    devops: "DevOps & Infraestrutura",
    security: "Segurança",
    payments: "Pagamentos & Integrações",
    workflow: "Fluxo de Desenvolvimento",
  };

  return {
    ...category,
    title: titles[category.id] ?? category.title,
  };
});
