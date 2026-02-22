"use client";

import { DocumentBuilder } from "@/components/builder/document-builder";

export default function BuilderPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Document Builder
        </h1>
        <p className="text-gray-500">
          Add clauses, reorder them via drag and drop, and export as a Word
          document.
        </p>
      </div>
      <DocumentBuilder />
    </div>
  );
}
