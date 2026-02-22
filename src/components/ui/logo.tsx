import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { icon: 20, text: "text-sm" },
  md: { icon: 26, text: "text-xl" },
  lg: { icon: 34, text: "text-2xl" },
};

export function Logo({ size = "md", showWordmark = true, className }: LogoProps) {
  const { icon, text } = sizeMap[size];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        {/* Three stacked bars — full width, 3/4, 1/2 — decreasing right */}
        <rect x="4" y="6"  width="24" height="6" rx="3" fill="#1e3a5f" />
        <rect x="4" y="15" width="17" height="6" rx="3" fill="#1e3a5f" />
        <rect x="4" y="24" width="11" height="6" rx="3" fill="#2563eb" />
      </svg>

      {showWordmark && (
        <span
          className={cn(
            "font-heading font-bold tracking-tight text-[var(--color-primary)]",
            text
          )}
        >
          ClauseVault
        </span>
      )}
    </div>
  );
}
