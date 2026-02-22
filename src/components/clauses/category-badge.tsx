import { Badge } from "@/components/ui/badge";
import { getCategoryBySlug } from "@/data/categories";
import type { CategorySlug } from "@/data/types";

interface CategoryBadgeProps {
  category: CategorySlug;
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  const cat = getCategoryBySlug(category);
  if (!cat) return null;

  return <Badge className={cat.color}>{cat.name}</Badge>;
}
