type Option = { value: string; label: string };

type DatabaseFiltersProps = {
  search: string;
  onSearchChange: (value: string) => void;
  layerOptions: Option[];
  layer: string;
  onLayerChange: (value: string) => void;
  statusOptions: string[];
  status: string;
  onStatusChange: (value: string) => void;
  accessOptions: string[];
  access: string;
  onAccessChange: (value: string) => void;
  assetClassOptions: string[];
  assetClass: string;
  onAssetClassChange: (value: string) => void;
};

export function DatabaseFilters({
  search,
  onSearchChange,
  layerOptions,
  layer,
  onLayerChange,
  statusOptions,
  status,
  onStatusChange,
  accessOptions,
  access,
  onAccessChange,
  assetClassOptions,
  assetClass,
  onAssetClassChange,
}: DatabaseFiltersProps) {
  return (
    <div className="space-y-4">
      <label className="sr-only" htmlFor="project-search">
        Search project, product, or ticker
      </label>
      <input
        id="project-search"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search project, product, or ticker..."
        className="h-11 w-full rounded-md border border-line bg-white px-4 text-sm text-foreground outline-none transition-colors placeholder:text-zinc-400 focus:border-accent"
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <FilterSelect
          label="Layer"
          value={layer}
          onChange={onLayerChange}
          options={layerOptions}
        />
        <FilterSelect
          label="Status"
          value={status}
          onChange={onStatusChange}
          options={statusOptions.map((option) => ({ value: option, label: option }))}
        />
        <FilterSelect
          label="Access Model"
          value={access}
          onChange={onAccessChange}
          options={accessOptions.map((option) => ({ value: option, label: option }))}
        />
        <FilterSelect
          label="Asset Class"
          value={assetClass}
          onChange={onAssetClassChange}
          options={assetClassOptions.map((option) => ({ value: option, label: option }))}
        />
      </div>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 w-full rounded-md border border-line bg-white px-3 text-sm text-muted outline-none transition-colors focus:border-accent"
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
