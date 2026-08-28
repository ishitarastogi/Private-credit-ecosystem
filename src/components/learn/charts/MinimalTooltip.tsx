type MinimalTooltipProps = {
  active?: boolean;
  label?: string | number;
  payload?: { name?: string; value?: number | string; color?: string }[];
  formatValue?: (value: number | string) => string;
};

export function MinimalTooltip({ active, label, payload, formatValue }: MinimalTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="rounded-md border border-line bg-white px-3 py-2 text-xs shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
      {label !== undefined && (
        <p className="font-medium text-foreground">{label}</p>
      )}
      {payload.map((entry) => (
        <p key={entry.name} className="mt-0.5 flex items-center gap-1.5 text-muted">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-sm"
            style={{ backgroundColor: entry.color }}
          />
          {entry.name}: {entry.value !== undefined && formatValue ? formatValue(entry.value) : entry.value}
        </p>
      ))}
    </div>
  );
}
