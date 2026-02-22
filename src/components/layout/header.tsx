import Link from "next/link";
import { Info } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-border)] bg-white/80 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <div className="pl-10 md:pl-0">
          <Link href="/" aria-label="ClauseVault home">
            <Logo size="sm" showWordmark={true} />
          </Link>
        </div>
        <Link
          href="/about"
          className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-gray-500 transition-colors hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)]"
        >
          <Info className="h-4 w-4" />
          About
        </Link>
      </div>
    </header>
  );
}
