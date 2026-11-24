import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiDownload, HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { resumes } from "@/data/resumes";

export function Contact() {
  const { t, i18n } = useTranslation();
  const isPt = i18n.language.startsWith("pt");

  return (
    <section
      id="contact"
      className="border-t border-ink-200/70 bg-ink-100/50 dark:border-ink-800 dark:bg-ink-900/40"
      aria-labelledby="contact-title"
    >
      <div className="section-shell">
        <SectionHeading
          id="contact-title"
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div className="surface grid w-full gap-8 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
          <div className="min-w-0">
            <p className="max-w-xl text-lg leading-relaxed text-ink-700 dark:text-ink-200">
              {t("contact.cta")}
            </p>

            <ul className="mt-8 space-y-4 text-sm text-ink-600 dark:text-ink-300">
              <li className="flex items-start gap-3">
                <HiLocationMarker className="mt-0.5 shrink-0 text-accent" />
                <div className="min-w-0">
                  <p className="font-semibold text-ink-800 dark:text-ink-100">
                    {t("contact.location")}
                  </p>
                  <p>{isPt ? profile.location.pt : profile.location.en}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HiMail className="mt-0.5 shrink-0 text-accent" />
                <div className="min-w-0">
                  <p className="font-semibold text-ink-800 dark:text-ink-100">
                    {t("contact.email")}
                  </p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="break-all transition hover:text-accent-muted"
                  >
                    {profile.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HiPhone className="mt-0.5 shrink-0 text-accent" />
                <div className="min-w-0">
                  <p className="font-semibold text-ink-800 dark:text-ink-100">
                    {t("contact.phone")}
                  </p>
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                    className="transition hover:text-accent-muted"
                  >
                    {profile.phoneDisplay}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="w-full"
            >
              <FaLinkedinIn />
              {t("contact.linkedin")}
            </Button>
            <Button
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="w-full"
            >
              <FaGithub />
              {t("contact.github")}
            </Button>
            <Button href={`mailto:${profile.email}`} variant="ghost" className="w-full">
              <HiMail />
              {t("contact.email")}
            </Button>
            <Button
              href={resumes.en.href}
              download={resumes.en.fileName}
              variant={isPt ? "ghost" : "secondary"}
              className="w-full"
            >
              <HiDownload />
              {t("contact.resumeEn")}
            </Button>
            <Button
              href={resumes.pt.href}
              download={resumes.pt.fileName}
              variant={isPt ? "secondary" : "ghost"}
              className="w-full"
            >
              <HiDownload />
              {t("contact.resumePt")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
