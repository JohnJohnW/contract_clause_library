"use client";

import { useState, useMemo } from "react";
import { ClauseCard } from "./clause-card";
import { ClauseSearch } from "./clause-search";
import { searchClauses, filterByCategory } from "@/lib/clauses";
import type { Clause, Category, CategorySlug } from "@/data/types";
import { cn } from "@/lib/utils";

interface ClauseListProps {
  clauses: Clause[];
  categories: Category[];
  showCategoryFilter?: boolean;
}

export function ClauseList({
  clauses,
  categories,
  showCategoryFilter = true,
}: ClauseListProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategorySlug | null>(
    null
  );

  const filtered = useMemo(() => {
    let result = clauses;
    if (showCategoryFilter) {
      result = filterByCategory(result, activeCategory);
    }
    result = searchClauses(query, result);
    return result;
  }, [clauses, query, activeCategory, showCategoryFilter]);

  return (
    <div>
      <div className="mb-4">
        <ClauseSearch value={query} onChange={setQuery} />
      </div>

      {showCategoryFilter && (
        <div className="mb-5 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium transition-colors",
              activeCategory === null
                ? "bg-[var(--color-accent)] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            )}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() =>
                setActiveCategory(
                  activeCategory === cat.slug ? null : cat.slug
                )
              }
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                activeCategory === cat.slug
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="py-12 text-center text-gray-400">
          No clauses found.{" "}
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-[var(--color-accent)] hover:underline"
            >
              Clear search
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {filtered.map((clause) => (
            <ClauseCard key={clause.id} clause={clause} />
          ))}
        </div>
      )}
    </div>
  );
}
