import { useEffect, useId, useRef, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { HiX } from "react-icons/hi";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scrollLock";

interface ModalProps {
  open: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ open, title, description, onClose, children }: ModalProps) {
  const { t } = useTranslation();
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    lockBodyScroll();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    dialogRef.current?.focus();

    return () => {
      unlockBodyScroll();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-ink-950/55 backdrop-blur-sm"
        aria-label={t("a11y.closeModal")}
        onClick={onClose}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        tabIndex={-1}
        className="relative z-10 w-full max-w-md animate-fade-up rounded-2xl border border-ink-200 bg-ink-50 p-6 shadow-soft outline-none dark:border-ink-700 dark:bg-ink-900"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2
              id={titleId}
              className="font-display text-xl font-semibold text-ink-950 dark:text-ink-50"
            >
              {title}
            </h2>
            {description ? (
              <p
                id={descriptionId}
                className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300"
              >
                {description}
              </p>
            ) : null}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-ink-200 text-ink-700 transition hover:border-ink-400 dark:border-ink-700 dark:text-ink-200"
            aria-label={t("a11y.closeModal")}
          >
            <HiX size={18} />
          </button>
        </div>

        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
