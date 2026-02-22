"use client";

import { Plus, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface BuilderToolbarProps {
  title: string;
  onTitleChange: (title: string) => void;
  onAddClauses: () => void;
  onExport: () => void;
  onClear: () => void;
  clauseCount: number;
}

export function BuilderToolbar({
  title,
  onTitleChange,
  onAddClauses,
  onExport,
  onClear,
  clauseCount,
}: BuilderToolbarProps) {
  return (
    <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-5">
      <div>
        <label
          htmlFor="doc-title"
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          Document Title
        </label>
        <Input
          id="doc-title"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder="e.g. Service Agreement — Acme Pty Ltd"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <Button onClick={onAddClauses}>
          <Plus className="h-4 w-4" />
          Add Clauses
        </Button>
        <Button
          variant="secondary"
          onClick={onExport}
          disabled={clauseCount === 0}
        >
          <Download className="h-4 w-4" />
          Export to Word
        </Button>
        <Button
          variant="ghost"
          onClick={onClear}
          disabled={clauseCount === 0}
        >
          <Trash2 className="h-4 w-4" />
          Clear
        </Button>
      </div>
    </div>
  );
}
