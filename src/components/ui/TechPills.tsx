interface TechPillsProps {
  items: string[];
  emphasized?: boolean;
}

export function TechPills({ items, emphasized = false }: TechPillsProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={
            emphasized
              ? "rounded-md bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent-muted dark:text-accent-soft"
              : "rounded-md bg-ink-100 px-2.5 py-1 text-xs font-medium text-ink-700 dark:bg-ink-800 dark:text-ink-200"
          }
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
