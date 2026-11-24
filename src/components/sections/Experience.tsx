import { useTranslation } from "react-i18next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechPills } from "@/components/ui/TechPills";
import { useLocaleContent } from "@/hooks/useLocaleContent";

export function Experience() {
  const { t } = useTranslation();
  const { experiences } = useLocaleContent();

  return (
    <section
      id="experience"
      className="border-y border-ink-200/70 bg-white/40 dark:border-ink-800 dark:bg-ink-900/20"
      aria-labelledby="experience-title"
    >
      <div className="section-shell">
        <SectionHeading
          id="experience-title"
          title={t("experience.title")}
          subtitle={t("experience.subtitle")}
        />

        <ol className="relative space-y-8">
          <span
            className="absolute bottom-3 left-[7px] top-3 w-px bg-ink-200 dark:bg-ink-700 md:left-[9px]"
            aria-hidden
          />

          {experiences.map((item) => (
            <li key={item.id} className="relative grid grid-cols-[16px_1fr] gap-4 md:grid-cols-[20px_1fr] md:gap-5">
              <span
                className={`relative z-10 mt-7 h-3.5 w-3.5 justify-self-center rounded-full border-2 md:mt-8 md:h-4 md:w-4 ${
                  item.current
                    ? "border-accent bg-accent-soft"
                    : "border-ink-300 bg-ink-50 dark:border-ink-500 dark:bg-ink-950"
                }`}
                aria-hidden
              />

              <article
                className={`surface w-full min-w-0 p-6 md:p-8 ${
                  item.current ? "ring-1 ring-accent/30" : ""
                }`}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-semibold text-ink-950 dark:text-ink-50">
                      {item.company}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent-muted dark:text-accent-soft md:text-base">
                      {item.role}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {item.current ? (
                      <span className="rounded-md bg-accent/10 px-2 py-1 text-xs font-semibold text-accent-muted dark:text-accent-soft">
                        {t("experience.current")}
                      </span>
                    ) : null}
                    <time className="text-sm text-ink-500 dark:text-ink-400">
                      {item.period}
                    </time>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-ink-600 dark:text-ink-300 md:text-base">
                  {item.summary}
                </p>

                {item.clients?.length ? (
                  <div className="mt-5">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                      {t("experience.clients")}
                    </h4>
                    <ul className="mt-2 space-y-1 text-sm text-ink-700 dark:text-ink-200">
                      {item.clients.map((client) => (
                        <li key={client}>• {client}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="mt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                    {t("experience.highlights")}
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm leading-relaxed text-ink-700 dark:text-ink-200">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span className="min-w-0">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-500">
                    {t("experience.tech")}
                  </h4>
                  <TechPills items={item.tech} emphasized={item.current} />
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
