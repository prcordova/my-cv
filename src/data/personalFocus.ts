import type { PersonalFocus } from "@/types/content";

/**
 * Capability-focused personal engineering practice.
 * No invented product names — framed as independent product development experience.
 */
export const personalFocusEn: PersonalFocus[] = [
  {
    id: "saas",
    title: "SaaS Platforms",
    description:
      "Independent product work covering multi-user applications, subscription flows, authentication and cloud deployment for SaaS-style platforms.",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "JWT", "Vercel"],
  },
  {
    id: "marketplace",
    title: "Marketplaces & Multi-user Apps",
    description:
      "Personal engineering practice building multi-role experiences, user management and operational flows typical of marketplace products.",
    tech: ["TypeScript", "REST APIs", "Auth", "MongoDB Atlas", "Docker"],
  },
  {
    id: "payments",
    title: "Payments & Billing Integrations",
    description:
      "Hands-on experience integrating payment providers, checkout flows, subscriptions and webhook-driven billing events.",
    tech: ["Stripe", "Mercado Pago", "Webhooks", "Node.js", "Express"],
  },
  {
    id: "cloud",
    title: "APIs, Data & Cloud Delivery",
    description:
      "End-to-end ownership across backend APIs, document databases and cloud infrastructure for shipping independent digital products.",
    tech: ["Node.js", "MongoDB", "AWS S3", "Cloudflare", "Docker"],
  },
];

export const personalFocusPt: PersonalFocus[] = [
  {
    id: "saas",
    title: "Plataformas SaaS",
    description:
      "Trabalho independente em produtos com aplicações multiusuário, assinaturas, autenticação e deploy em cloud no formato SaaS.",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "JWT", "Vercel"],
  },
  {
    id: "marketplace",
    title: "Marketplaces & Apps Multiusuário",
    description:
      "Prática de engenharia pessoal construindo experiências multi-perfil, gestão de usuários e fluxos operacionais típicos de marketplaces.",
    tech: ["TypeScript", "REST APIs", "Auth", "MongoDB Atlas", "Docker"],
  },
  {
    id: "payments",
    title: "Pagamentos & Billing",
    description:
      "Experiência prática integrando provedores de pagamento, checkout, assinaturas e eventos de billing via webhooks.",
    tech: ["Stripe", "Mercado Pago", "Webhooks", "Node.js", "Express"],
  },
  {
    id: "cloud",
    title: "APIs, Dados & Entrega em Cloud",
    description:
      "Ownership ponta a ponta em APIs backend, bancos documentais e infraestrutura cloud para publicar produtos digitais independentes.",
    tech: ["Node.js", "MongoDB", "AWS S3", "Cloudflare", "Docker"],
  },
];
