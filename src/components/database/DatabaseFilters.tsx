type DatabaseFiltersProps = {
  assetTypes: readonly string[];
  chains: readonly string[];
  layers: readonly string[];
  statuses: readonly string[];
};

export function DatabaseFilters({
  assetTypes,
  chains,
  layers,
  statuses,
}: DatabaseFiltersProps) {
  return (
    <form className="space-y-4">
      <label className="sr-only" htmlFor="project-search">
        Search projects
      </label>
      <input
        id="project-search"
        name="search"
        placeholder="Search projects..."
        className="h-11 w-full rounded-md border border-line bg-white px-4 text-sm text-foreground outline-none transition-colors placeholder:text-zinc-400 focus:border-accent"
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <FilterSelect label="Layer" name="layer" options={layers} />
        <FilterSelect label="Asset Type" name="assetType" options={assetTypes} />
        <FilterSelect label="Chain" name="chain" options={chains} />
        <FilterSelect label="Status" name="status" options={statuses} />
      </div>
    </form>
  );
}

function FilterSelect({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: readonly string[];
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <select
        defaultValue=""
        name={name}
        className="h-11 w-full rounded-md border border-line bg-white px-3 text-sm text-muted outline-none transition-colors focus:border-accent"
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
