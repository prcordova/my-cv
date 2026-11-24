import { useTranslation } from "react-i18next";
import { profile } from "@/data/profile";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-200 py-8 dark:border-ink-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-sm text-ink-500 md:flex-row md:items-center md:justify-between md:px-8 dark:text-ink-400">
        <p>
          © {year} {profile.name}
        </p>
        <p>{t("footer.rights")}</p>
      </div>
    </footer>
  );
}
