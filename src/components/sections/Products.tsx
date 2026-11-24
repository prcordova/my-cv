import { useTranslation } from "react-i18next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechPills } from "@/components/ui/TechPills";
import { useLocaleContent } from "@/hooks/useLocaleContent";

export function Products() {
  const { t } = useTranslation();
  const { personalFocus } = useLocaleContent();

  return (
    <section
      id="products"
      className="border-y border-ink-200/70 bg-white/40 dark:border-ink-800 dark:bg-ink-900/20"
      aria-labelledby="products-title"
    >
      <div className="section-shell">
        <SectionHeading
          id="products-title"
          title={t("products.title")}
          subtitle={t("products.subtitle")}
        />

        <p className="mb-8 max-w-3xl text-sm leading-relaxed text-ink-500 dark:text-ink-400">
          {t("products.note")}
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {personalFocus.map((item) => (
            <article key={item.id} className="surface p-6">
              <h3 className="font-display text-lg font-semibold text-ink-950 dark:text-ink-50">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                {item.description}
              </p>
              <div className="mt-5">
                <TechPills items={item.tech} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
