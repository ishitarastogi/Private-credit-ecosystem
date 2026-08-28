type ListItem = string | { label: string; detail?: string };

type ListBlockProps = {
  style?: "bullet" | "numbered" | "check";
  title?: string;
  items: ListItem[];
};

const markers: Record<NonNullable<ListBlockProps["style"]>, string> = {
  bullet: "•",
  numbered: "",
  check: "✓",
};

export function ListBlock({ style = "bullet", title, items }: ListBlockProps) {
  return (
    <div>
      {title && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
          {title}
        </p>
      )}
      <ul className={title ? "mt-3 space-y-2" : "space-y-2"}>
        {items.map((item, index) => {
          const label = typeof item === "string" ? item : item.label;
          const detail = typeof item === "string" ? undefined : item.detail;
          const marker = style === "numbered" ? `${index + 1}.` : markers[style];

          return (
            <li key={label} className="flex gap-2.5 text-sm leading-6 text-muted">
              <span
                aria-hidden="true"
                className={`shrink-0 ${
                  style === "check" ? "text-accent" : "text-zinc-400"
                }`}
              >
                {marker}
              </span>
              <span>
                <span className="text-foreground">{label}</span>
                {detail && <span className="text-muted"> — {detail}</span>}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
