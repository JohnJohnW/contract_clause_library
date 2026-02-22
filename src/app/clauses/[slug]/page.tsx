import { notFound } from "next/navigation";
import { allClauses } from "@/data/clauses";
import { getCategoryBySlug } from "@/data/categories";
import { ClauseDetail } from "@/components/clauses/clause-detail";

export function generateStaticParams() {
  return allClauses.map((clause) => ({ slug: clause.slug }));
}

export default async function ClauseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const clause = allClauses.find((c) => c.slug === slug);
  if (!clause) notFound();

  const category = getCategoryBySlug(clause.category);
  const relatedClauses = clause.relatedClauses
    .map((id) => allClauses.find((c) => c.id === id))
    .filter(Boolean);

  return (
    <ClauseDetail
      clause={clause}
      category={category}
      relatedClauses={relatedClauses}
    />
  );
}
