import type { EducationItem } from "@/types/content";

export const educationEn: EducationItem[] = [
  {
    id: "puc",
    institution: "PUC Minas",
    program: "Postgraduate degree in Software Engineering",
    status: "Expected completion: December 2026",
  },
  {
    id: "uniasselvi",
    institution: "Uniasselvi",
    program: "Technologist in Systems Analysis and Development",
    status: "Completed: June 2021",
  },
];

export const educationPt: EducationItem[] = [
  {
    id: "puc",
    institution: "PUC Minas",
    program: "Pós-graduação em Engenharia de Software",
    status: "Previsão de conclusão: Dezembro 2026",
  },
  {
    id: "uniasselvi",
    institution: "Uniasselvi",
    program: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    status: "Concluído: Junho 2021",
  },
];

export const languageProficiency = {
  en: {
    label: "English",
    level: "B2 — Upper-Intermediate / Professional Communication",
  },
  pt: {
    label: "Inglês",
    level: "B2 — Intermediário Superior / Comunicação Profissional",
  },
} as const;
