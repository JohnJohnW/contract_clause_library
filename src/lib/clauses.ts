import { allClauses } from "@/data/clauses";
import type { Clause, CategorySlug } from "@/data/types";

export function getClauseBySlug(slug: string): Clause | undefined {
  return allClauses.find((c) => c.slug === slug);
}

export function getClauseById(id: string): Clause | undefined {
  return allClauses.find((c) => c.id === id);
}

export function getClausesByCategory(category: CategorySlug): Clause[] {
  return allClauses.filter((c) => c.category === category);
}

export function getRelatedClauses(clause: Clause): Clause[] {
  return clause.relatedClauses
    .map((id) => getClauseById(id))
    .filter((c): c is Clause => c !== undefined);
}

export function searchClauses(query: string, clauses?: Clause[]): Clause[] {
  const source = clauses ?? allClauses;
  if (!query.trim()) return source;

  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 0);

  return source.filter((clause) => {
    const searchable = [
      clause.title,
      clause.summary,
      ...clause.keywords,
      clause.category,
    ]
      .join(" ")
      .toLowerCase();

    return terms.every((term) => searchable.includes(term));
  });
}

export function filterByCategory(
  clauses: Clause[],
  category: CategorySlug | null
): Clause[] {
  if (!category) return clauses;
  return clauses.filter((c) => c.category === category);
}
