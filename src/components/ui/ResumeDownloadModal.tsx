import { useTranslation } from "react-i18next";
import { HiDownload } from "react-icons/hi";
import { resumes } from "@/data/resumes";
import { Button } from "./Button";
import { Modal } from "./Modal";

interface ResumeDownloadModalProps {
  open: boolean;
  onClose: () => void;
}

export function ResumeDownloadModal({ open, onClose }: ResumeDownloadModalProps) {
  const { t, i18n } = useTranslation();
  const isPt = i18n.language.startsWith("pt");

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={t("resumeModal.title")}
      description={t("resumeModal.description")}
    >
      <div className="flex flex-col gap-3">
        <Button
          href={resumes.en.href}
          download={resumes.en.fileName}
          variant={isPt ? "secondary" : "primary"}
          className="w-full"
          onClick={onClose}
        >
          <HiDownload />
          {t("resumeModal.english")}
        </Button>
        <Button
          href={resumes.pt.href}
          download={resumes.pt.fileName}
          variant={isPt ? "primary" : "secondary"}
          className="w-full"
          onClick={onClose}
        >
          <HiDownload />
          {t("resumeModal.portuguese")}
        </Button>
        <Button type="button" variant="ghost" className="w-full" onClick={onClose}>
          {t("resumeModal.cancel")}
        </Button>
      </div>
    </Modal>
  );
}
