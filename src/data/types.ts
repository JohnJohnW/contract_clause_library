export type CategorySlug =
  | 'compliance'
  | 'data-protection'
  | 'dispute-resolution'
  | 'employment'
  | 'finance'
  | 'general'
  | 'insurance'
  | 'intellectual-property'
  | 'liability'
  | 'miscellaneous'
  | 'performance'
  | 'real-estate'
  | 'sales-and-marketing'
  | 'security'
  | 'warranties';

export type RiskLevel = 'low' | 'medium' | 'high';
export type Jurisdiction = 'AU' | 'AU-QLD' | 'AU-NSW' | 'AU-VIC' | 'general';
export type ClauseStatus = 'standard' | 'recommended' | 'use-with-caution';

export interface Clause {
  id: string;
  title: string;
  slug: string;
  category: CategorySlug;
  summary: string;
  description: string;
  sampleText: string;
  draftingNotes: string;
  australianLawContext: string;
  relatedClauses: string[];
  riskLevel: RiskLevel;
  keywords: string[];
  commonIn: string[];
  status: ClauseStatus;
  jurisdiction: Jurisdiction;
  lastUpdated: string;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface BuilderDocument {
  id: string;
  title: string;
  clauses: BuilderClauseEntry[];
  createdAt: string;
  updatedAt: string;
}

export interface BuilderClauseEntry {
  clauseId: string;
  order: number;
  customText?: string;
  notes?: string;
}
