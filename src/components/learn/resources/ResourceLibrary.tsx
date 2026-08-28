"use client";

import { useMemo, useState } from "react";
import { ResourceCard } from "@/components/learn/resources/ResourceCard";
import { RESOURCE_CATEGORIES } from "@/data/learn/types";
import type { ResourceCategory, ResourceEntry } from "@/data/learn/types";

type ResourceLibraryProps = {
  resources: ResourceEntry[];
};

export function ResourceLibrary({ resources }: ResourceLibraryProps) {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory | null>(null);

  const categories = useMemo(
    () => RESOURCE_CATEGORIES.filter((category) => resources.some((r) => r.categories.includes(category))),
    [resources],
  );

  const visibleCategories = activeCategory ? [activeCategory] : categories;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          aria-pressed={activeCategory === null}
          className={`rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${
            activeCategory === null
              ? "border-accent bg-accent/[0.06] text-foreground"
              : "border-line text-muted hover:border-accent/50"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={`rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${
              activeCategory === category
                ? "border-accent bg-accent/[0.06] text-foreground"
                : "border-line text-muted hover:border-accent/50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-10">
        {visibleCategories.map((category) => {
          const categoryResources = resources.filter((r) => r.categories.includes(category));
          if (categoryResources.length === 0) return null;

          return (
            <div key={category}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-foreground">
                {category}
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {categoryResources.map((resource) => (
                  <ResourceCard key={`${category}-${resource.id}`} resource={resource} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
