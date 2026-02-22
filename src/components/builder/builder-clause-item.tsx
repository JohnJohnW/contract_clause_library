"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { CategoryBadge } from "@/components/clauses/category-badge";
import type { Clause, BuilderClauseEntry } from "@/data/types";

interface BuilderClauseItemProps {
  entry: BuilderClauseEntry;
  clause: Clause;
  index: number;
  onRemove: (clauseId: string) => void;
  onUpdateText: (clauseId: string, text: string) => void;
}

export function BuilderClauseItem({
  entry,
  clause,
  index,
  onRemove,
  onUpdateText,
}: BuilderClauseItemProps) {
  const [expanded, setExpanded] = useState(false);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: entry.clauseId });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const displayText = entry.customText || clause.sampleText;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="rounded-lg border border-gray-200 bg-white"
    >
      <div className="flex items-center gap-3 p-4">
        <button
          {...attributes}
          {...listeners}
          className="cursor-grab touch-none text-gray-400 hover:text-gray-600"
          aria-label="Drag to reorder"
        >
          <GripVertical className="h-5 w-5" />
        </button>

        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-xs font-semibold text-[var(--color-primary)]">
          {index + 1}
        </span>

        <div className="min-w-0 flex-1">
          <p className="font-medium text-gray-900">{clause.title}</p>
          <div className="mt-0.5 flex items-center gap-2">
            <CategoryBadge category={clause.category} />
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          aria-label={expanded ? "Collapse" : "Expand"}
        >
          {expanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>

        <button
          onClick={() => onRemove(entry.clauseId)}
          className="rounded p-1 text-gray-400 hover:bg-red-50 hover:text-red-600"
          aria-label="Remove clause"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {expanded && (
        <div className="border-t border-gray-100 p-4">
          <label className="mb-1.5 block text-xs font-medium text-gray-500">
            Clause text (editable)
          </label>
          <textarea
            value={displayText}
            onChange={(e) => onUpdateText(entry.clauseId, e.target.value)}
            rows={6}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700 focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
          />
        </div>
      )}
    </div>
  );
}
