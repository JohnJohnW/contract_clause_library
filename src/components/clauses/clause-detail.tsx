import Link from "next/link";
import { ArrowLeft, AlertTriangle, BookOpen, Scale, FileText, Pencil } from "lucide-react";
import { CategoryBadge } from "./category-badge";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copy-button";
import type { Clause, Category } from "@/data/types";

interface ClauseDetailProps {
  clause: Clause;
  category: Category | undefined;
  relatedClauses: (Clause | undefined)[];
}

const riskColors = {
  low: "bg-green-100 text-green-800",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-red-100 text-red-800",
};

export function ClauseDetail({
  clause,
  category,
  relatedClauses,
}: ClauseDetailProps) {
  const validRelated = relatedClauses.filter(
    (c): c is Clause => c !== undefined
  );

  return (
    <div className="mx-auto max-w-4xl">
      <Link
        href={category ? `/categories/${category.slug}` : "/clauses"}
        className="mb-4 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to {category?.name ?? "all clauses"}
      </Link>

      <div className="mb-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <CategoryBadge category={clause.category} />
          <Badge className={riskColors[clause.riskLevel]}>
            {clause.riskLevel} risk if omitted
          </Badge>
          {clause.status === "use-with-caution" && (
            <Badge className="bg-amber-100 text-amber-800">
              Use with caution
            </Badge>
          )}
        </div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">
          {clause.title}
        </h1>
        <p className="text-lg text-gray-500">{clause.summary}</p>
      </div>

      {/* Description */}
      <Card className="mb-5">
        <div className="mb-3 flex items-center gap-2 text-gray-700">
          <BookOpen className="h-4 w-4" />
          <h2 className="font-semibold">Overview</h2>
        </div>
        <div className="whitespace-pre-line text-sm leading-relaxed text-gray-600">
          {clause.description}
        </div>
      </Card>

      {/* Sample Text */}
      <Card className="mb-5">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-700">
            <FileText className="h-4 w-4" />
            <h2 className="font-semibold">Sample Clause Text</h2>
          </div>
          <CopyButton text={clause.sampleText} label="Copy clause" />
        </div>
        <div className="rounded-lg border border-gray-100 bg-gray-50 p-4 text-sm leading-relaxed text-gray-800">
          {clause.sampleText}
        </div>
      </Card>

      {/* Drafting Notes */}
      <Card className="mb-5">
        <div className="mb-3 flex items-center gap-2 text-gray-700">
          <Pencil className="h-4 w-4" />
          <h2 className="font-semibold">Drafting Notes</h2>
        </div>
        <div className="whitespace-pre-line text-sm leading-relaxed text-gray-600">
          {clause.draftingNotes}
        </div>
      </Card>

      {/* Australian Law Context */}
      <Card className="mb-5">
        <div className="mb-3 flex items-center gap-2 text-gray-700">
          <Scale className="h-4 w-4" />
          <h2 className="font-semibold">Australian Law Context</h2>
        </div>
        <div className="whitespace-pre-line text-sm leading-relaxed text-gray-600">
          {clause.australianLawContext}
        </div>
      </Card>

      {/* Metadata */}
      <Card className="mb-5">
        <h2 className="mb-3 font-semibold text-gray-700">Details</h2>
        <dl className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-gray-400">Common in</dt>
            <dd className="text-gray-700">
              {clause.commonIn.join(", ") || "Various agreements"}
            </dd>
          </div>
          <div>
            <dt className="text-gray-400">Jurisdiction</dt>
            <dd className="text-gray-700">{clause.jurisdiction}</dd>
          </div>
          <div>
            <dt className="text-gray-400">Status</dt>
            <dd className="text-gray-700 capitalize">{clause.status.replace(/-/g, " ")}</dd>
          </div>
          <div>
            <dt className="text-gray-400">Last updated</dt>
            <dd className="text-gray-700">{clause.lastUpdated}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-gray-400">Keywords</dt>
            <dd className="flex flex-wrap gap-1.5 pt-1">
              {clause.keywords.map((kw) => (
                <span
                  key={kw}
                  className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
                >
                  {kw}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </Card>

      {/* Related Clauses */}
      {validRelated.length > 0 && (
        <Card>
          <h2 className="mb-3 font-semibold text-gray-700">Related Clauses</h2>
          <div className="space-y-2">
            {validRelated.map((related) => (
              <Link
                key={related.id}
                href={`/clauses/${related.slug}`}
                className="flex items-center justify-between rounded-lg border border-gray-100 p-3 transition-colors hover:bg-gray-50"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {related.title}
                  </p>
                  <p className="text-xs text-gray-500">{related.summary}</p>
                </div>
                <CategoryBadge category={related.category} />
              </Link>
            ))}
          </div>
        </Card>
      )}

      {/* Disclaimer */}
      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
        <div className="flex gap-2">
          <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
          <p className="text-xs text-amber-800">
            This sample clause is provided for educational purposes only and
            does not constitute legal advice. Consult a qualified legal
            practitioner before using any clause in a binding agreement.
          </p>
        </div>
      </div>
    </div>
  );
}
