type CalloutProps = {
  tone: "info" | "warning" | "key-concept";
  title?: string;
  text: string;
};

const toneStyles: Record<CalloutProps["tone"], string> = {
  info: "border-line bg-background text-muted",
  "key-concept": "border-accent/30 bg-accent/[0.05] text-foreground",
  warning: "border-amber-300 bg-amber-50 text-amber-900",
};

const titleStyles: Record<CalloutProps["tone"], string> = {
  info: "text-foreground",
  "key-concept": "text-accent",
  warning: "text-amber-900",
};

export function Callout({ tone, title, text }: CalloutProps) {
  return (
    <div className={`rounded-md border px-4 py-3.5 text-sm leading-6 ${toneStyles[tone]}`}>
      {title && (
        <p className={`text-xs font-semibold uppercase tracking-[0.1em] ${titleStyles[tone]}`}>
          {title}
        </p>
      )}
      <p className={title ? "mt-1.5" : ""}>{text}</p>
    </div>
  );
}
