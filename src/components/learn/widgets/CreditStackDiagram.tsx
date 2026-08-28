type CreditStackDiagramProps = {
  layers: { id: string; label: string; detail: string }[];
};

export function CreditStackDiagram({ layers }: CreditStackDiagramProps) {
  return (
    <div className="rounded-md border border-line bg-white p-5">
      <div className="space-y-2">
        {layers.map((layer, index) => (
          <div
            key={layer.id}
            className="flex items-center gap-3 rounded-md border border-line bg-background px-3.5 py-2.5"
          >
            <span className="font-mono text-xs text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-sm font-medium text-foreground">{layer.label}</p>
              <p className="text-xs leading-5 text-muted">{layer.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
