import Link from "next/link";
import {
  ShieldCheck, Lock, Scale, Users, DollarSign, FileText,
  Shield, Lightbulb, AlertTriangle, MoreHorizontal, BarChart3,
  Building2, TrendingUp, KeyRound, BadgeCheck, ArrowRight,
} from "lucide-react";
import { categories } from "@/data/categories";
import { allClauses } from "@/data/clauses";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck, Lock, Scale, Users, DollarSign, FileText,
  Shield, Lightbulb, AlertTriangle, MoreHorizontal, BarChart3,
  Building2, TrendingUp, KeyRound, BadgeCheck,
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl">
      {/* Hero */}
      <div className="mb-12">
        {/* Eyebrow */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary-light)] px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
            Australian Legal Tech
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight text-[var(--color-primary)] md:text-5xl">
          Draft smarter.{" "}
          <span className="text-[var(--color-accent)]">Export faster.</span>
        </h1>

        {/* Sub-tagline */}
        <p className="mb-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]">
          Browse {allClauses.length} ready-to-use contract clauses across{" "}
          {categories.length} categories, drafted for Australian commercial
          agreements. Assemble, customise, and export in minutes.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/clauses"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            Browse All Clauses
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/builder"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg)]"
          >
            Document Builder
          </Link>
        </div>

        {/* Stat strip */}
        <div className="mt-6 flex gap-8 border-t border-[var(--color-border)] pt-5">
          <div>
            <p className="font-heading text-2xl font-bold text-[var(--color-primary)]">
              {allClauses.length}+
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">Clauses</p>
          </div>
          <div>
            <p className="font-heading text-2xl font-bold text-[var(--color-primary)]">
              {categories.length}
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">Categories</p>
          </div>
          <div>
            <p className="font-heading text-2xl font-bold text-[var(--color-primary)]">AU</p>
            <p className="text-xs text-[var(--color-text-muted)]">Law focus</p>
          </div>
        </div>
      </div>

      {/* Categories grid */}
      <h2 className="mb-4 font-heading text-lg font-semibold text-gray-800">Categories</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon] ?? FileText;
          const count = allClauses.filter((c) => c.category === cat.slug).length;
          return (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="group rounded-xl border border-[var(--color-border)] bg-white p-5 transition-all hover:border-[var(--color-accent-light)] hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className={`rounded-lg p-2 ${cat.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-[var(--color-accent)]">
                  {cat.name}
                </h3>
              </div>
              <p className="mb-3 text-sm text-gray-500">{cat.description}</p>
              <span className="text-xs font-medium text-gray-400">
                {count} clause{count !== 1 ? "s" : ""}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
