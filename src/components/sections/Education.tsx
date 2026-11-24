import { useTranslation } from "react-i18next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLocaleContent } from "@/hooks/useLocaleContent";

export function Education() {
  const { t } = useTranslation();
  const { education, language } = useLocaleContent();

  return (
    <section id="education" className="section-shell" aria-labelledby="education-title">
      <SectionHeading
        id="education-title"
        title={t("education.title")}
        subtitle={t("education.subtitle")}
      />

      <div className="grid gap-5 md:grid-cols-3 md:items-stretch">
        {education.map((item) => (
          <article key={item.id} className="surface flex h-full flex-col p-6">
            <h3 className="font-display text-lg font-semibold text-ink-950 dark:text-ink-50">
              {item.institution}
            </h3>
            <p className="mt-2 text-sm font-medium text-accent-muted dark:text-accent-soft">
              {item.program}
            </p>
            <p className="mt-auto pt-4 text-sm text-ink-500 dark:text-ink-400">
              {item.status}
            </p>
          </article>
        ))}

        <article className="surface flex h-full flex-col p-6">
          <h3 className="font-display text-lg font-semibold text-ink-950 dark:text-ink-50">
            {t("education.languages")}
          </h3>
          <p className="mt-2 text-sm font-medium text-accent-muted dark:text-accent-soft">
            {language.label}
          </p>
          <p className="mt-auto pt-4 text-sm text-ink-500 dark:text-ink-400">
            {language.level}
          </p>
        </article>
      </div>
    </section>
  );
}
