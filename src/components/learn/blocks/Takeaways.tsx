type TakeawaysProps = {
  items: string[];
};

export function Takeaways({ items }: TakeawaysProps) {
  return (
    <div className="rounded-md border border-accent/30 bg-accent/[0.04] p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
        What you should know
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-6 text-foreground">
            <span aria-hidden="true" className="shrink-0 text-accent">
              →
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
