"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ShieldCheck, Lock, Scale, Users, DollarSign, FileText,
  Shield, Lightbulb, AlertTriangle, MoreHorizontal, BarChart3,
  Building2, TrendingUp, KeyRound, BadgeCheck, Menu, X,
  BookOpen, Hammer,
} from "lucide-react";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck, Lock, Scale, Users, DollarSign, FileText,
  Shield, Lightbulb, AlertTriangle, MoreHorizontal, BarChart3,
  Building2, TrendingUp, KeyRound, BadgeCheck,
};

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 rounded-lg bg-white p-2 shadow-md md:hidden"
        aria-label="Open navigation"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-screen w-[var(--sidebar-width)] overflow-y-auto border-r border-[var(--color-border)] bg-white transition-transform duration-200",
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex items-center justify-between p-5">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-label="ClauseVault home"
          >
            <Logo size="md" showWordmark={true} />
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="rounded p-1 hover:bg-gray-100 md:hidden"
            aria-label="Close navigation"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="px-3 pb-4">
          <div className="mb-2">
            <Link
              href="/clauses"
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === "/clauses"
                  ? "bg-[var(--color-accent-light)] text-[var(--color-accent)]"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <BookOpen className="h-4 w-4" />
              Browse All Clauses
            </Link>
            <Link
              href="/builder"
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === "/builder"
                  ? "bg-[var(--color-accent-light)] text-[var(--color-accent)]"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <Hammer className="h-4 w-4" />
              Document Builder
            </Link>
          </div>

          <div className="mb-2 px-3 pt-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Categories
            </span>
          </div>

          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] ?? FileText;
            const isActive = pathname === `/categories/${cat.slug}`;
            return (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-[var(--color-accent-light)] font-medium text-[var(--color-accent)]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Icon className="h-4 w-4" />
                {cat.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
