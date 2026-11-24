interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <h2
        id={id}
        className="font-display text-3xl font-semibold tracking-tight text-ink-950 dark:text-ink-50 md:text-4xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base leading-relaxed text-ink-600 dark:text-ink-300 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
