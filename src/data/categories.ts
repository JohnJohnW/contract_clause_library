import type { Category } from './types';

export const categories: Category[] = [
  {
    slug: 'compliance',
    name: 'Compliance',
    description: 'Clauses ensuring adherence to laws, regulations, and industry standards.',
    icon: 'ShieldCheck',
    color: 'bg-emerald-100 text-emerald-800',
  },
  {
    slug: 'data-protection',
    name: 'Data Protection',
    description: 'Clauses governing the collection, use, storage, and disclosure of personal information.',
    icon: 'Lock',
    color: 'bg-blue-100 text-blue-800',
  },
  {
    slug: 'dispute-resolution',
    name: 'Dispute Resolution',
    description: 'Clauses establishing how disagreements between parties will be resolved.',
    icon: 'Scale',
    color: 'bg-purple-100 text-purple-800',
  },
  {
    slug: 'employment',
    name: 'Employment',
    description: 'Clauses relating to the terms and conditions of employment relationships.',
    icon: 'Users',
    color: 'bg-orange-100 text-orange-800',
  },
  {
    slug: 'finance',
    name: 'Finance',
    description: 'Clauses governing payment terms, pricing, and financial obligations.',
    icon: 'DollarSign',
    color: 'bg-green-100 text-green-800',
  },
  {
    slug: 'general',
    name: 'General',
    description: 'Boilerplate clauses commonly found in most commercial agreements.',
    icon: 'FileText',
    color: 'bg-gray-100 text-gray-800',
  },
  {
    slug: 'insurance',
    name: 'Insurance',
    description: 'Clauses requiring parties to obtain and maintain insurance coverage.',
    icon: 'Shield',
    color: 'bg-cyan-100 text-cyan-800',
  },
  {
    slug: 'intellectual-property',
    name: 'Intellectual Property',
    description: 'Clauses addressing ownership, licensing, and protection of intellectual property.',
    icon: 'Lightbulb',
    color: 'bg-yellow-100 text-yellow-800',
  },
  {
    slug: 'liability',
    name: 'Liability',
    description: 'Clauses that allocate risk and limit or exclude liability between parties.',
    icon: 'AlertTriangle',
    color: 'bg-red-100 text-red-800',
  },
  {
    slug: 'miscellaneous',
    name: 'Miscellaneous',
    description: 'Standard provisions that address procedural and administrative matters.',
    icon: 'MoreHorizontal',
    color: 'bg-slate-100 text-slate-800',
  },
  {
    slug: 'performance',
    name: 'Performance',
    description: 'Clauses setting standards, metrics, and obligations for service delivery.',
    icon: 'BarChart3',
    color: 'bg-indigo-100 text-indigo-800',
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    description: 'Clauses specific to property leases, licences, and real estate transactions.',
    icon: 'Building2',
    color: 'bg-amber-100 text-amber-800',
  },
  {
    slug: 'sales-and-marketing',
    name: 'Sales & Marketing',
    description: 'Clauses governing sales arrangements, distribution, and marketing obligations.',
    icon: 'TrendingUp',
    color: 'bg-pink-100 text-pink-800',
  },
  {
    slug: 'security',
    name: 'Security',
    description: 'Clauses establishing requirements for information and physical security.',
    icon: 'KeyRound',
    color: 'bg-violet-100 text-violet-800',
  },
  {
    slug: 'warranties',
    name: 'Warranties',
    description: 'Clauses providing assurances about the quality, fitness, or condition of goods or services.',
    icon: 'BadgeCheck',
    color: 'bg-teal-100 text-teal-800',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
