import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiArrowDown, HiDownload, HiMail } from "react-icons/hi";
import profileImage from "@/assets/img/profile.jpg";
import { Button } from "@/components/ui/Button";
import { ResumeDownloadModal } from "@/components/ui/ResumeDownloadModal";
import { profile } from "@/data/profile";

export function Hero() {
  const { t, i18n } = useTranslation();
  const isPt = i18n.language.startsWith("pt");
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <section
      id="top"
      className="grid-atmosphere relative overflow-hidden border-b border-ink-200/70 dark:border-ink-800"
    >
      <div className="section-shell grid items-center gap-10 pb-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:pb-10">
        <div className="animate-fade-up min-w-0">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink-950 dark:text-ink-50 sm:text-5xl md:text-6xl lg:text-7xl">
            {t("hero.headline")}
          </h1>
          <p className="mt-4 font-display text-lg font-medium text-accent-muted dark:text-accent-soft sm:text-xl md:text-2xl">
            {t("hero.role")}
          </p>
          <p className="mt-2 text-sm font-medium text-ink-500 dark:text-ink-400 md:text-base">
            {t("hero.stack")}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-600 dark:text-ink-300 md:text-lg">
            {t("hero.summary")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              type="button"
              variant="primary"
              className="w-full sm:w-auto"
              onClick={() => setResumeModalOpen(true)}
            >
              <HiDownload />
              {t("hero.downloadResume")}
            </Button>
            <Button href="#contact" variant="secondary" className="w-full sm:w-auto">
              <HiMail />
              {t("hero.contact")}
            </Button>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-500 dark:text-ink-400">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium transition hover:text-accent-muted"
            >
              <FaLinkedinIn />
              {t("hero.linkedin")}
            </a>
            <span aria-hidden>•</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium transition hover:text-accent-muted"
            >
              <FaGithub />
              GitHub
            </a>
            <span aria-hidden className="hidden sm:inline">
              •
            </span>
            <span className="w-full sm:w-auto">
              {isPt ? profile.location.pt : profile.location.en}
            </span>
          </div>
        </div>

        <div className="animate-fade-in relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
          <div className="absolute -inset-4 rounded-[2rem] bg-accent/10 blur-2xl" aria-hidden />
          <img
            src={profileImage}
            alt={`${profile.name} — Senior Frontend Engineer`}
            className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-soft ring-1 ring-ink-200 dark:ring-ink-700"
            width={640}
            height={800}
          />
        </div>
      </div>

      <div className="flex justify-center pb-6 md:pb-8">
        <a
          href="#experience"
          className="group inline-flex flex-col items-center gap-1.5 rounded-md px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 transition hover:text-accent-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft dark:text-ink-400 dark:hover:text-accent-soft"
        >
          {t("hero.viewWork")}
          <HiArrowDown
            className="animate-bounce text-base text-accent-muted transition group-hover:translate-y-0.5 dark:text-accent-soft"
            aria-hidden
          />
        </a>
      </div>

      <ResumeDownloadModal
        open={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </section>
  );
}
