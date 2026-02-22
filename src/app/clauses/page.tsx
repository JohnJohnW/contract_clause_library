import { allClauses } from "@/data/clauses";
import { categories } from "@/data/categories";
import { ClauseList } from "@/components/clauses/clause-list";

export default function ClausesPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          All Clauses
        </h1>
        <p className="text-gray-500">
          Browse all {allClauses.length} clauses or filter by category.
        </p>
      </div>
      <ClauseList clauses={allClauses} categories={categories} />
    </div>
  );
}
