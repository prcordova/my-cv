import { useTranslation } from "react-i18next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechPills } from "@/components/ui/TechPills";
import { useLocaleContent } from "@/hooks/useLocaleContent";

export function CaseStudies() {
  const { t } = useTranslation();
  const { caseStudies } = useLocaleContent();

  return (
    <section id="cases" className="section-shell" aria-labelledby="cases-title">
      <SectionHeading
        id="cases-title"
        title={t("cases.title")}
        subtitle={t("cases.subtitle")}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {caseStudies.map((item, index) => (
          <article
            key={item.id}
            className="surface flex flex-col p-6 transition duration-300 hover:-translate-y-1"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <h3 className="font-display text-xl font-semibold text-ink-950 dark:text-ink-50">
              {item.title}
            </h3>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              <div>
                <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-500">
                  {t("cases.context")}
                </h4>
                <p>{item.context}</p>
              </div>
              <div>
                <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-500">
                  {t("cases.challenge")}
                </h4>
                <p>{item.challenge}</p>
              </div>
              <div>
                <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-500">
                  {t("cases.contribution")}
                </h4>
                <ul className="space-y-2">
                  {item.contribution.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-500">
                  {t("cases.results")}
                </h4>
                <ul className="space-y-2">
                  {item.results.map((result) => (
                    <li key={result} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-soft" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-auto pt-6">
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-500">
                {t("cases.tech")}
              </h4>
              <TechPills items={item.tech} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
