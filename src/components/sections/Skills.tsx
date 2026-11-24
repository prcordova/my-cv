import { useTranslation } from "react-i18next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechPills } from "@/components/ui/TechPills";
import { useLocaleContent } from "@/hooks/useLocaleContent";

export function Skills() {
  const { t } = useTranslation();
  const { skills } = useLocaleContent();

  const highlighted = skills.filter((skill) => skill.highlighted);
  const complementary = skills.filter((skill) => !skill.highlighted);

  return (
    <section id="skills" className="section-shell" aria-labelledby="skills-title">
      <SectionHeading
        id="skills-title"
        title={t("skills.title")}
        subtitle={t("skills.subtitle")}
      />

      <p className="mb-8 text-sm font-semibold text-accent-muted dark:text-accent-soft">
        {t("skills.coreNote")}
      </p>

      <div className="grid gap-5 lg:grid-cols-2">
        {highlighted.map((category) => (
          <article
            key={category.id}
            className="surface p-6 ring-1 ring-accent/20"
          >
            <h3 className="font-display text-lg font-semibold text-ink-950 dark:text-ink-50">
              {category.title}
            </h3>
            <div className="mt-4">
              <TechPills items={category.items} emphasized />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {complementary.map((category) => (
          <article key={category.id} className="surface p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500">
              {category.title}
            </h3>
            <div className="mt-3">
              <TechPills items={category.items} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
