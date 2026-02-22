import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CategoryBadge } from "./category-badge";
import { Badge } from "@/components/ui/badge";
import type { Clause } from "@/data/types";

interface ClauseCardProps {
  clause: Clause;
}

const riskColors = {
  low: "bg-green-100 text-green-800",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-red-100 text-red-800",
};

export function ClauseCard({ clause }: ClauseCardProps) {
  return (
    <Link
      href={`/clauses/${clause.slug}`}
      className="group block rounded-xl border border-[var(--color-border)] bg-white p-5 transition-all hover:border-[var(--color-accent-light)] hover:shadow-md"
    >
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <CategoryBadge category={clause.category} />
        <Badge className={riskColors[clause.riskLevel]}>
          {clause.riskLevel} risk
        </Badge>
      </div>
      <h3 className="mb-1.5 font-semibold text-gray-900 group-hover:text-[var(--color-accent)]">
        {clause.title}
      </h3>
      <p className="mb-3 text-sm text-gray-500 line-clamp-2">
        {clause.summary}
      </p>
      <div className="flex items-center gap-1 text-xs font-medium text-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100">
        View clause
        <ArrowRight className="h-3 w-3" />
      </div>
    </Link>
  );
}
