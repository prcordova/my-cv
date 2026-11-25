import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiMenuAlt3, HiOutlineMoon, HiOutlineSun, HiX } from "react-icons/hi";
import { profile } from "@/data/profile";
import { useTheme } from "@/hooks/useTheme";
import { persistLocale, type AppLocale } from "@/lib/locale";

const links = [
  "about",
  "experience",
  "cases",
  "products",
  "skills",
  "results",
  "education",
  "contact",
] as const;

export function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const isPt = i18n.language.startsWith("pt");

  const toggleLanguage = () => {
    const next: AppLocale = isPt ? "en" : "pt";
    void i18n.changeLanguage(next);
    persistLocale(next);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200/70 bg-ink-50/85 backdrop-blur-md dark:border-ink-800/80 dark:bg-ink-950/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-ink-950 dark:text-ink-50"
        >
          {profile.name}
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="rounded-md px-2.5 py-1.5 text-sm font-medium text-ink-600 transition hover:text-ink-950 dark:text-ink-300 dark:hover:text-white"
            >
              {t(`nav.${link}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex size-9 items-center justify-center rounded-md border border-ink-200 text-xs font-semibold uppercase tracking-wide text-ink-700 transition hover:border-ink-400 dark:border-ink-700 dark:text-ink-200"
            aria-label={t("a11y.toggleLanguage")}
          >
            {isPt ? "EN" : "PT"}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex size-9 items-center justify-center rounded-md border border-ink-200 text-ink-700 transition hover:border-ink-400 dark:border-ink-700 dark:text-ink-200"
            aria-label={t("a11y.toggleTheme")}
          >
            {theme === "dark" ? <HiOutlineSun size={18} /> : <HiOutlineMoon size={18} />}
          </button>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-md border border-ink-200 text-ink-700 lg:hidden dark:border-ink-700 dark:text-ink-200"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? t("a11y.closeMenu") : t("a11y.openMenu")}
          >
            {open ? <HiX size={18} /> : <HiMenuAlt3 size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="border-t border-ink-200 px-5 py-4 lg:hidden dark:border-ink-800"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-900"
                  onClick={() => setOpen(false)}
                >
                  {t(`nav.${link}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
