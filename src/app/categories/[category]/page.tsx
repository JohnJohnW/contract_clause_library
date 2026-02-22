import { notFound } from "next/navigation";
import { allClauses } from "@/data/clauses";
import { categories, getCategoryBySlug } from "@/data/categories";
import { ClauseList } from "@/components/clauses/clause-list";

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const clauses = allClauses.filter((c) => c.category === slug);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {category.name}
        </h1>
        <p className="text-gray-500">{category.description}</p>
        <p className="mt-1 text-sm text-gray-400">
          {clauses.length} clause{clauses.length !== 1 ? "s" : ""}
        </p>
      </div>
      <ClauseList clauses={clauses} categories={categories} showCategoryFilter={false} />
    </div>
  );
}
