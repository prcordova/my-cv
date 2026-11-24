import { useTranslation } from "react-i18next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Results() {
  const { t } = useTranslation();
  const qualitative = t("results.qualitative", {
    returnObjects: true,
  }) as string[];

  return (
    <section
      id="results"
      className="border-y border-ink-200/70 bg-white/40 dark:border-ink-800 dark:bg-ink-900/20"
      aria-labelledby="results-title"
    >
      <div className="section-shell">
        <SectionHeading
          id="results-title"
          title={t("results.title")}
          subtitle={t("results.subtitle")}
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="surface relative overflow-hidden p-8 md:p-10">
            <div
              className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-accent/10 to-transparent"
              aria-hidden
            />
            <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">
              {t("results.lighthouseLabel")}
            </p>
            <div className="mt-6 flex items-end gap-4">
              <span className="font-display text-5xl font-semibold text-ink-400 md:text-6xl">
                {t("results.lighthouseFrom")}
              </span>
              <span className="mb-3 text-2xl text-accent" aria-hidden>
                →
              </span>
              <span className="font-display text-6xl font-semibold text-accent-muted dark:text-accent-soft md:text-7xl">
                {t("results.lighthouseTo")}
              </span>
            </div>
            <p className="relative mt-6 max-w-xl text-sm leading-relaxed text-ink-600 dark:text-ink-300 md:text-base">
              {t("results.lighthouseNote")}
            </p>
          </article>

          <article className="surface p-6 md:p-8">
            <ul className="space-y-4">
              {qualitative.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-ink-700 dark:text-ink-200 md:text-base"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
