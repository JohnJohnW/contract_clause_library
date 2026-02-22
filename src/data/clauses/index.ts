import type { Clause } from '../types';
import { complianceClauses } from './compliance';
import { dataProtectionClauses } from './data-protection';
import { disputeResolutionClauses } from './dispute-resolution';
import { employmentClauses } from './employment';
import { financeClauses } from './finance';
import { generalClauses } from './general';
import { insuranceClauses } from './insurance';
import { intellectualPropertyClauses } from './intellectual-property';
import { liabilityClauses } from './liability';
import { miscellaneousClauses } from './miscellaneous';
import { performanceClauses } from './performance';
import { realEstateClauses } from './real-estate';
import { salesAndMarketingClauses } from './sales-and-marketing';
import { securityClauses } from './security';
import { warrantiesClauses } from './warranties';

export const allClauses: Clause[] = [
  ...complianceClauses,
  ...dataProtectionClauses,
  ...disputeResolutionClauses,
  ...employmentClauses,
  ...financeClauses,
  ...generalClauses,
  ...insuranceClauses,
  ...intellectualPropertyClauses,
  ...liabilityClauses,
  ...miscellaneousClauses,
  ...performanceClauses,
  ...realEstateClauses,
  ...salesAndMarketingClauses,
  ...securityClauses,
  ...warrantiesClauses,
];
