import { useTranslation } from "react-i18next";
import { caseStudiesEn, caseStudiesPt } from "@/data/caseStudies";
import { educationEn, educationPt, languageProficiency } from "@/data/education";
import { experiencesEn, experiencesPt } from "@/data/experiences";
import { personalFocusEn, personalFocusPt } from "@/data/personalFocus";
import { skillsEn, skillsPt } from "@/data/skills";

export function useLocaleContent() {
  const { i18n } = useTranslation();
  const isPt = i18n.language.startsWith("pt");

  return {
    experiences: isPt ? experiencesPt : experiencesEn,
    caseStudies: isPt ? caseStudiesPt : caseStudiesEn,
    skills: isPt ? skillsPt : skillsEn,
    education: isPt ? educationPt : educationEn,
    personalFocus: isPt ? personalFocusPt : personalFocusEn,
    language: isPt ? languageProficiency.pt : languageProficiency.en,
    locale: isPt ? "pt" : "en",
  };
}
