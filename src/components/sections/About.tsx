import { useTranslation } from "react-i18next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const { t } = useTranslation();
  const paragraphs = t("about.paragraphs", { returnObjects: true }) as string[];

  return (
    <section id="about" className="section-shell" aria-labelledby="about-title">
      <SectionHeading
        id="about-title"
        title={t("about.title")}
        subtitle={t("about.subtitle")}
      />
      <div className="surface w-full space-y-5 p-6 md:p-8">
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 32)}
            className="max-w-none text-base leading-relaxed text-ink-700 dark:text-ink-200 md:text-lg"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
