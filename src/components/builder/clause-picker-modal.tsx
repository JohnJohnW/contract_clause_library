"use client";

import { useState, useMemo } from "react";
import { Check, Plus } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { ClauseSearch } from "@/components/clauses/clause-search";
import { CategoryBadge } from "@/components/clauses/category-badge";
import { searchClauses } from "@/lib/clauses";
import { allClauses } from "@/data/clauses";
import { categories } from "@/data/categories";
import type { CategorySlug } from "@/data/types";
import { cn } from "@/lib/utils";

interface ClausePickerModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (clauseId: string) => void;
  onRemove: (clauseId: string) => void;
  hasClause: (clauseId: string) => boolean;
}

export function ClausePickerModal({
  open,
  onClose,
  onAdd,
  onRemove,
  hasClause,
}: ClausePickerModalProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategorySlug | null>(
    null
  );

  const filtered = useMemo(() => {
    let results = allClauses;
    if (activeCategory) {
      results = results.filter((c) => c.category === activeCategory);
    }
    return searchClauses(query, results);
  }, [query, activeCategory]);

  return (
    <Modal open={open} onClose={onClose} title="Add Clauses" className="max-w-3xl">
      <div className="mb-4">
        <ClauseSearch value={query} onChange={setQuery} />
      </div>

      <div className="mb-4 flex flex-wrap gap-1.5">
        <button
          onClick={() => setActiveCategory(null)}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
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
              "rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
              activeCategory === cat.slug
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            )}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="space-y-1.5">
        {filtered.length === 0 ? (
          <p className="py-8 text-center text-sm text-gray-400">
            No clauses found.
          </p>
        ) : (
          filtered.map((clause) => {
            const added = hasClause(clause.id);
            return (
              <button
                key={clause.id}
                onClick={() =>
                  added ? onRemove(clause.id) : onAdd(clause.id)
                }
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-colors",
                  added
                    ? "border-[var(--color-accent-light)] bg-[var(--color-accent-light)]"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                )}
              >
                <div
                  className={cn(
                    "flex h-6 w-6 items-center justify-center rounded-full",
                    added
                      ? "bg-[var(--color-accent)] text-white"
                      : "bg-gray-100 text-gray-400"
                  )}
                >
                  {added ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    <Plus className="h-3.5 w-3.5" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {clause.title}
                  </p>
                  <p className="truncate text-xs text-gray-500">
                    {clause.summary}
                  </p>
                </div>
                <CategoryBadge category={clause.category} />
              </button>
            );
          })
        )}
      </div>
    </Modal>
  );
}
