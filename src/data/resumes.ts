import resumePt from "@/assets/Pedro-Cordova-Curriculo-PT.pdf";
import resumeEn from "@/assets/Pedro-Cordova-Resume-EN.pdf";

export const resumes = {
  en: {
    href: resumeEn,
    fileName: "Pedro-Cordova-Resume-EN.pdf",
    labelKey: "contact.resumeEn" as const,
  },
  pt: {
    href: resumePt,
    fileName: "Pedro-Cordova-Curriculo-PT.pdf",
    labelKey: "contact.resumePt" as const,
  },
} as const;

export type ResumeLocale = keyof typeof resumes;

export function getResumeForLocale(locale: string) {
  return locale.toLowerCase().startsWith("pt") ? resumes.pt : resumes.en;
}
