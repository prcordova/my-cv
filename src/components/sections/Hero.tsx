import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiArrowDown, HiDownload, HiMail } from "react-icons/hi";
import resumeEn from "@/assets/PedroCordova-Resume.pdf";
import profileImage from "@/img/profile.jpg";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export function Hero() {
  const { t, i18n } = useTranslation();
  const isPt = i18n.language.startsWith("pt");

  return (
    <section
      id="top"
      className="grid-atmosphere relative overflow-hidden border-b border-ink-200/70 dark:border-ink-800"
    >
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fade-up">
          <h1 className="font-display text-5xl font-semibold tracking-tight text-ink-950 dark:text-ink-50 md:text-6xl lg:text-7xl">
            {t("hero.headline")}
          </h1>
          <p className="mt-4 font-display text-xl font-medium text-accent-muted dark:text-accent-soft md:text-2xl">
            {t("hero.role")}
          </p>
          <p className="mt-2 text-sm font-medium text-ink-500 dark:text-ink-400 md:text-base">
            {t("hero.stack")}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-600 dark:text-ink-300 md:text-lg">
            {t("hero.summary")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#experience" variant="primary">
              <HiArrowDown />
              {t("hero.viewWork")}
            </Button>
            <Button href={resumeEn} download variant="secondary">
              <HiDownload />
              {t("hero.downloadResume")}
            </Button>
            <Button href="#contact" variant="ghost">
              <HiMail />
              {t("hero.contact")}
            </Button>
            <Button
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
            >
              <FaLinkedinIn />
              {t("hero.linkedin")}
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-ink-500 dark:text-ink-400">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-accent-muted"
            >
              <FaGithub />
              GitHub
            </a>
            <span aria-hidden>•</span>
            <span>{isPt ? profile.location.pt : profile.location.en}</span>
          </div>
        </div>

        <div className="animate-fade-in relative mx-auto w-full max-w-md">
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
    </section>
  );
}
