type ComparisonTableProps = {
  title?: string;
  subjects: string[];
  rows: { attribute: string; values: string[] }[];
};

export function ComparisonTable({ title, subjects, rows }: ComparisonTableProps) {
  return (
    <div>
      {title && (
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
          {title}
        </p>
      )}
      <div className="overflow-x-auto border border-line bg-white">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-line text-xs uppercase text-muted">
              <th className="px-4 py-3 font-semibold" />
              {subjects.map((subject) => (
                <th key={subject} className="px-4 py-3 font-semibold text-foreground">
                  {subject}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.attribute} className="border-b border-line align-top last:border-b-0">
                <td className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                  {row.attribute}
                </td>
                {row.values.map((value, index) => (
                  <td key={subjects[index]} className="px-4 py-3 text-muted">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
