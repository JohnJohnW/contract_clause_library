"use client";

import { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDocumentBuilder } from "@/lib/hooks/use-document-builder";
import { getClauseById } from "@/lib/clauses";
import { exportToDocx } from "@/lib/export";
import { BuilderToolbar } from "./builder-toolbar";
import { BuilderClauseItem } from "./builder-clause-item";
import { ClausePickerModal } from "./clause-picker-modal";
import { FileText } from "lucide-react";
import type { Clause } from "@/data/types";

export function DocumentBuilder() {
  const {
    title,
    clauses,
    hydrated,
    setTitle,
    addClause,
    removeClause,
    reorderClauses,
    updateClauseText,
    clearAll,
    hasClause,
  } = useDocumentBuilder();

  const [pickerOpen, setPickerOpen] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const ids = clauses.map((c) => c.clauseId);
    const oldIndex = ids.indexOf(active.id as string);
    const newIndex = ids.indexOf(over.id as string);

    const newIds = [...ids];
    newIds.splice(oldIndex, 1);
    newIds.splice(newIndex, 0, active.id as string);
    reorderClauses(newIds);
  }

  async function handleExport() {
    const clauseMap = new Map<string, Clause>();
    clauses.forEach((entry) => {
      const clause = getClauseById(entry.clauseId);
      if (clause) clauseMap.set(entry.clauseId, clause);
    });

    await exportToDocx({
      title,
      entries: clauses,
      clauses: clauseMap,
    });
  }

  if (!hydrated) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-32 rounded-xl bg-gray-100" />
        <div className="h-48 rounded-xl bg-gray-100" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <BuilderToolbar
        title={title}
        onTitleChange={setTitle}
        onAddClauses={() => setPickerOpen(true)}
        onExport={handleExport}
        onClear={clearAll}
        clauseCount={clauses.length}
      />

      {clauses.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50/50 py-16">
          <FileText className="mb-3 h-10 w-10 text-gray-300" />
          <p className="mb-1 text-sm font-medium text-gray-500">
            No clauses added yet
          </p>
          <p className="text-xs text-gray-400">
            Click &quot;Add Clauses&quot; to start building your document.
          </p>
        </div>
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={clauses.map((c) => c.clauseId)}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-2">
              {clauses.map((entry, index) => {
                const clause = getClauseById(entry.clauseId);
                if (!clause) return null;
                return (
                  <BuilderClauseItem
                    key={entry.clauseId}
                    entry={entry}
                    clause={clause}
                    index={index}
                    onRemove={removeClause}
                    onUpdateText={updateClauseText}
                  />
                );
              })}
            </div>
          </SortableContext>
        </DndContext>
      )}

      <ClausePickerModal
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        onAdd={addClause}
        onRemove={removeClause}
        hasClause={hasClause}
      />
    </div>
  );
}
