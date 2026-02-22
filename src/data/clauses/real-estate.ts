import type { Clause } from '../types';

export const realEstateClauses: Clause[] = [
  {
    id: 'real-estate-lease-agreement',
    title: 'Lease Agreement',
    slug: 'lease-agreement',
    category: 'real-estate',
    summary:
      'Establishes the core terms governing the grant of a leasehold interest in real property from the landlord to the tenant.',
    description:
      'A lease agreement clause sets out the fundamental terms upon which a landlord grants a tenant exclusive possession of premises for a defined term. This clause typically addresses the identification of the premises, the term of the lease (including any options to renew), the permitted use of the premises, and the rent payable. It forms the backbone of the landlord-tenant relationship and must comply with applicable state and territory legislation.\n\nIn Australia, leases of real property are governed by a combination of state property legislation, common law, and (for retail premises) retail lease legislation. The specific legislative requirements vary between jurisdictions, and parties must ensure compliance with the relevant Act, including requirements for disclosure statements, registration of leases, and prescribed terms.\n\nKey considerations include whether the lease must be registered (generally required for leases exceeding three years), whether a disclosure statement must be provided (required for retail shop leases), and whether the premises fall within the scope of retail lease legislation, which imposes minimum protections for tenants.',
    sampleText:
      'The Landlord hereby grants to the Tenant a lease of the Premises described in Item [X] of the Reference Schedule for the Term commencing on the Commencement Date and expiring on the Expiry Date, subject to the terms and conditions of this Lease. The Tenant shall use the Premises solely for the Permitted Use specified in the Reference Schedule and shall not change the use without the prior written consent of the Landlord. The Tenant shall pay the Rent specified in the Reference Schedule, together with all Outgoings attributable to the Premises, in the manner and at the times specified in this Lease. The Tenant acknowledges that it has inspected the Premises and accepts them in their current condition, subject to the Landlord\'s obligations under this Lease and any applicable legislation.',
    draftingNotes:
      'Use a reference schedule to identify key commercial terms (premises, term, rent, permitted use) for ease of reference. Ensure compliance with the relevant state retail leases legislation if the lease is a retail shop lease. Consider whether a disclosure statement is required and the consequences of failing to provide one. Address whether the lease is to be registered and who bears the cost of registration.',
    australianLawContext:
      'Leases of real property in Australia are governed by state and territory legislation, including the Property Law Act 1974 (Qld), Conveyancing Act 1919 (NSW), Property Law Act 1958 (Vic), and equivalent Acts in other jurisdictions. Retail premises leases are subject to additional regulation under the Retail Shop Leases Act 1994 (Qld), Retail Leases Act 2003 (Vic), Retail Leases Act 1994 (NSW), and equivalent legislation. These Acts impose mandatory disclosure obligations, minimum lease terms, and restrictions on the recovery of certain costs from tenants. Leases exceeding three years generally must be registered under the relevant land title legislation (e.g., Land Title Act 1994 (Qld)).',
    relatedClauses: [
      'real-estate-maintenance-obligations',
      'real-estate-option-to-renew',
      'real-estate-rent-escalation',
      'real-estate-sublease',
    ],
    riskLevel: 'high',
    keywords: [
      'lease',
      'tenancy',
      'premises',
      'rent',
      'landlord',
      'tenant',
      'term',
      'permitted use',
    ],
    commonIn: [
      'Commercial leases',
      'Retail shop leases',
      'Industrial leases',
      'Office leases',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'real-estate-maintenance-obligations',
    title: 'Maintenance Obligations',
    slug: 'maintenance-obligations',
    category: 'real-estate',
    summary:
      'Allocates responsibility for the repair and maintenance of the leased premises between the landlord and the tenant.',
    description:
      'A maintenance obligations clause clearly delineates which party is responsible for maintaining, repairing, and replacing various components of the leased premises. Typically, the landlord retains responsibility for structural repairs and maintenance of the building\'s core systems (roof, foundations, external walls), while the tenant is responsible for internal maintenance, fit-out, and keeping the premises in good repair and condition.\n\nThe allocation of maintenance responsibilities has significant financial implications for both parties and should be negotiated carefully. In retail leases, state legislation may restrict the types of maintenance costs that can be passed to the tenant, particularly in relation to capital or structural repairs.\n\nParties should consider including provisions for routine maintenance schedules, the standard of repair required, notification obligations when maintenance is needed, the landlord\'s right of access to conduct repairs, and the tenant\'s obligation to yield up the premises in good condition at the end of the lease (subject to fair wear and tear).',
    sampleText:
      'The Tenant shall, at its own cost, maintain and keep the interior of the Premises (including all fixtures, fittings, and services installed by the Tenant) in good repair and condition, fair wear and tear excepted. The Landlord shall be responsible for the maintenance and repair of the structural elements of the Building, including the roof, foundations, external walls, and common services, provided that the Landlord shall not be liable for any damage caused by the act, neglect, or default of the Tenant or its invitees. The Tenant shall promptly notify the Landlord of any defect or disrepair in the Premises that is the Landlord\'s responsibility. The Tenant shall permit the Landlord and its agents to enter the Premises upon reasonable notice to carry out inspections, repairs, or maintenance.',
    draftingNotes:
      'Clearly define the boundary between landlord and tenant maintenance responsibilities, particularly for building services (HVAC, lifts, fire systems). Address whether fair wear and tear is excepted from the tenant\'s repair obligations. In retail leases, ensure compliance with statutory restrictions on tenant maintenance contributions. Consider requiring the tenant to maintain a maintenance log and provide evidence of compliance.',
    australianLawContext:
      'Maintenance obligations in commercial leases are primarily governed by the terms of the lease itself, subject to common law principles. In retail leases, state legislation imposes restrictions on the landlord\'s ability to recover certain maintenance costs from tenants. For example, under the Retail Shop Leases Act 1994 (Qld), a landlord cannot require a tenant to pay for capital or structural repairs except in limited circumstances (s 38). The Retail Leases Act 2003 (Vic) similarly restricts the recovery of capital costs from tenants (s 52). Residential tenancies legislation (e.g., Residential Tenancies and Rooming Accommodation Act 2008 (Qld)) imposes minimum maintenance obligations on landlords that cannot be contracted out of.',
    relatedClauses: [
      'real-estate-lease-agreement',
      'real-estate-common-area-maintenance',
      'real-estate-option-to-renew',
      'real-estate-sublease',
    ],
    riskLevel: 'medium',
    keywords: [
      'maintenance',
      'repair',
      'structural',
      'fit-out',
      'fair wear and tear',
      'make good',
    ],
    commonIn: [
      'Commercial leases',
      'Retail shop leases',
      'Industrial leases',
      'Office leases',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'real-estate-sublease',
    title: 'Sublease',
    slug: 'sublease',
    category: 'real-estate',
    summary:
      'Governs the tenant\'s right to sublease all or part of the leased premises to a third party.',
    description:
      'A sublease clause addresses whether and on what conditions a tenant may grant a sublease of the premises (or part thereof) to a subtenant. Most commercial leases either prohibit subleasing outright or require the landlord\'s prior written consent, which may be subject to conditions such as the subtenant meeting financial covenant requirements and the sublease being on terms consistent with the head lease.\n\nSublease provisions protect the landlord\'s interest in the quality and creditworthiness of occupants, while providing the tenant with flexibility to manage surplus space. The original tenant typically remains liable under the head lease notwithstanding any sublease, meaning the tenant bears the risk of the subtenant\'s default.\n\nIn retail leases, some state legislation restricts the landlord\'s ability to unreasonably withhold consent to an assignment or sublease, and may prescribe the grounds on which consent can be refused. Parties should also consider whether any sublease requires registration and whether the subtenant will have direct obligations to the landlord.',
    sampleText:
      'The Tenant shall not sublease, part with possession of, or grant any licence to occupy the whole or any part of the Premises without the prior written consent of the Landlord, such consent not to be unreasonably withheld or delayed. Any request for consent to sublease shall be accompanied by: (a) the identity and financial particulars of the proposed subtenant; (b) a copy of the proposed sublease; and (c) evidence that the proposed subtenant will use the Premises for the Permitted Use. The Landlord may impose reasonable conditions on its consent, including that the sublease be on terms consistent with this Lease. The granting of any sublease shall not release the Tenant from its obligations under this Lease, and the Tenant shall remain liable for the performance of all tenant covenants.',
    draftingNotes:
      'Consider whether the clause should permit subleasing of part of the premises or only the whole. Address whether the landlord\'s consent is required (and whether it may be unreasonably withheld). Specify what information the tenant must provide to support a sublease application. Ensure the tenant remains liable under the head lease despite any sublease. Consider whether a direct covenant from the subtenant to the landlord is required.',
    australianLawContext:
      'Sublease provisions are governed by the terms of the head lease and applicable state legislation. Under the Retail Shop Leases Act 1994 (Qld), a landlord must not unreasonably withhold consent to the assignment of a retail shop lease (s 50), and similar protections apply in other states. The Property Law Act 1974 (Qld) provides that a covenant against assignment or subletting without consent includes an implied proviso that consent shall not be unreasonably withheld (s 121). The tenant remains liable under the head lease unless released by the landlord, and the sublease must not exceed the term of the head lease.',
    relatedClauses: [
      'real-estate-lease-agreement',
      'real-estate-option-to-renew',
      'real-estate-maintenance-obligations',
      'real-estate-rent-escalation',
    ],
    riskLevel: 'medium',
    keywords: [
      'sublease',
      'subletting',
      'assignment',
      'consent',
      'subtenant',
      'licence to occupy',
    ],
    commonIn: [
      'Commercial leases',
      'Retail shop leases',
      'Office leases',
      'Industrial leases',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'real-estate-option-to-renew',
    title: 'Option to Renew',
    slug: 'option-to-renew',
    category: 'real-estate',
    summary:
      'Grants the tenant a right to extend the lease for an additional term, subject to specified conditions.',
    description:
      'An option to renew clause provides the tenant with the contractual right to extend the lease for one or more additional terms beyond the initial term. The exercise of the option is typically conditional upon the tenant not being in breach of the lease, providing written notice within a prescribed timeframe, and agreeing to enter into a new lease on the same terms (except for rent, which is usually subject to a market review or agreed escalation mechanism).\n\nOptions to renew are valuable to tenants as they provide security of tenure and protect the tenant\'s investment in fit-out and goodwill associated with the premises. From the landlord\'s perspective, options limit the ability to re-let the premises or redevelop the property, and care should be taken in granting long option periods.\n\nThe exercise of an option to renew is typically a unilateral right of the tenant, meaning the landlord cannot refuse renewal if the conditions are met. The notice requirements for exercise must be strictly complied with, as failure to exercise the option within the prescribed period will result in the option lapsing.',
    sampleText:
      'The Landlord grants to the Tenant an option to renew this Lease for a further term of [insert] years (the Renewal Term) on the same terms and conditions as this Lease, except that: (a) the Rent for the Renewal Term shall be determined in accordance with clause [X] (Market Rent Review); and (b) no further option to renew shall be granted unless expressly stated. The Tenant may exercise the option by giving the Landlord not less than [six (6)] months\' and not more than [twelve (12)] months\' written notice prior to the Expiry Date, provided that at the date of exercise of the option: (i) the Tenant is not in breach of any material term of this Lease; and (ii) the Tenant has performed and observed all tenant covenants. Time is of the essence in respect of the exercise of the option.',
    draftingNotes:
      'Time is of the essence for option exercise -- ensure the notice period is clearly defined. Specify the conditions precedent to exercising the option (e.g., no subsisting breach). Address how rent will be determined for the renewal term (market review, CPI, or fixed increase). Consider whether multiple renewal options should be granted and whether successive options are available. In retail leases, check whether statutory minimum terms affect the option structure.',
    australianLawContext:
      'Options to renew are strictly construed under Australian contract law, and time is generally of the essence for exercise of the option (Legione v Hateley (1983) 152 CLR 406). Failure to exercise the option strictly in accordance with its terms will result in the option lapsing. Under the Retail Shop Leases Act 1994 (Qld), the landlord must give the tenant written notice of the impending expiry of the option period not less than six months before the last date for exercise (s 46). Similar notification obligations exist in other states, including the Retail Leases Act 2003 (Vic) (s 28) and the Retail Leases Act 1994 (NSW) (s 44). Failure by the landlord to give the required notice may extend the option exercise period.',
    relatedClauses: [
      'real-estate-lease-agreement',
      'real-estate-rent-escalation',
      'real-estate-maintenance-obligations',
      'real-estate-sublease',
    ],
    riskLevel: 'medium',
    keywords: [
      'option to renew',
      'renewal',
      'extension',
      'further term',
      'market review',
      'notice',
    ],
    commonIn: [
      'Commercial leases',
      'Retail shop leases',
      'Office leases',
      'Industrial leases',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'real-estate-rent-escalation',
    title: 'Rent Escalation',
    slug: 'rent-escalation',
    category: 'real-estate',
    summary:
      'Provides for periodic increases in rent during the lease term, whether by fixed percentage, CPI adjustment, or market review.',
    description:
      'A rent escalation clause sets out the mechanism by which rent will increase during the term of the lease. Common escalation methods include fixed annual percentage increases, adjustments based on the Consumer Price Index (CPI), market rent reviews (where rent is adjusted to reflect the current market rent for comparable premises), or a combination of these methods.\n\nRent escalation protects the landlord against inflation and ensures that the rent remains aligned with market conditions over the term of a long lease. From the tenant\'s perspective, predictable escalation mechanisms (such as fixed increases or CPI) provide certainty for budgeting, whereas market reviews introduce uncertainty but may result in rent decreases if the market softens.\n\nIn retail leases, state legislation may impose specific requirements and restrictions on rent review mechanisms. For example, ratchet clauses (which prevent rent from decreasing on a market review) may be prohibited, and the methodology for conducting market reviews may be prescribed.',
    sampleText:
      'The Rent shall be reviewed on each Review Date specified in the Reference Schedule in accordance with the following mechanism: (a) for each annual review, the Rent shall increase by the greater of: (i) [three percent (3%)] of the Rent payable immediately prior to the Review Date; or (ii) the percentage increase in the Consumer Price Index (All Groups, [Capital City]) published by the Australian Bureau of Statistics for the twelve (12) month period ending on the quarter immediately preceding the Review Date; and (b) for each market rent review, the Rent shall be adjusted to the Current Market Rent of the Premises as agreed between the parties or, failing agreement within thirty (30) days, as determined by a valuer appointed in accordance with clause [X].',
    draftingNotes:
      'Clearly specify the review dates, the escalation methodology, and the index or reference point for CPI adjustments. For market reviews, define "current market rent" and prescribe the process for determination (including the appointment of a valuer and whether the determination is binding). In retail leases, check whether ratchet clauses are prohibited and whether specific rent review methodologies are prescribed. Consider capping CPI increases to protect the tenant against excessive inflation.',
    australianLawContext:
      'Rent escalation clauses in retail leases are regulated by state legislation. Under the Retail Shop Leases Act 1994 (Qld), ratchet clauses (which prevent rent from falling on review) are prohibited (s 27A), and the lease must specify the basis on which rent is to be reviewed. The Retail Leases Act 2003 (Vic) similarly prohibits ratchet clauses (s 35) and requires that market rent be determined by a specialist retail valuer. The Retail Leases Act 1994 (NSW) prohibits rent reviews based on turnover alone (s 18) and regulates market review determinations (s 19). CPI-based escalations reference the Consumer Price Index published by the Australian Bureau of Statistics.',
    relatedClauses: [
      'real-estate-lease-agreement',
      'real-estate-option-to-renew',
      'real-estate-maintenance-obligations',
      'real-estate-common-area-maintenance',
    ],
    riskLevel: 'medium',
    keywords: [
      'rent review',
      'escalation',
      'CPI',
      'market rent',
      'rent increase',
      'valuation',
    ],
    commonIn: [
      'Commercial leases',
      'Retail shop leases',
      'Office leases',
      'Industrial leases',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'real-estate-common-area-maintenance',
    title: 'Common Area Maintenance',
    slug: 'common-area-maintenance',
    category: 'real-estate',
    summary:
      'Addresses the maintenance, management, and cost-sharing arrangements for common areas in multi-tenant properties.',
    description:
      'A common area maintenance (CAM) clause governs the landlord\'s obligation to maintain and manage the common areas of a multi-tenant property (such as lobbies, car parks, walkways, gardens, and shared facilities) and the tenant\'s obligation to contribute to the cost of that maintenance. CAM charges typically form part of the tenant\'s outgoings and are apportioned among tenants based on lettable area or another agreed method.\n\nThe scope and transparency of CAM charges are significant commercial considerations. Tenants should scrutinise what costs are included in CAM charges, how they are calculated and apportioned, and whether there are caps or exclusions on certain types of expenditure. Landlords should ensure that the clause provides sufficient flexibility to recover the genuine costs of maintaining common areas to an appropriate standard.\n\nIn retail leases, state legislation typically imposes transparency obligations on landlords, including requirements to provide estimates of outgoings before the lease commences, to provide audited statements of actual outgoings, and to reconcile estimates against actuals with adjustments payable by or credited to the tenant.',
    sampleText:
      'The Landlord shall maintain the Common Areas in good repair and condition and in a manner consistent with the standard of a reasonably well-managed property of a comparable type. The Tenant shall pay to the Landlord the Tenant\'s Proportion of the Common Area Maintenance Costs as an Outgoing in accordance with clause [X]. The Tenant\'s Proportion shall be calculated as the ratio of the Lettable Area of the Premises to the total Lettable Area of the Building. The Landlord shall provide the Tenant with an estimate of Common Area Maintenance Costs prior to the commencement of each financial year and an audited reconciliation statement within three (3) months after the end of each financial year. Any overpayment or underpayment shall be adjusted in the next quarterly instalment.',
    draftingNotes:
      'Define "Common Areas" precisely and list included and excluded areas. Specify which cost categories are recoverable as CAM charges (e.g., cleaning, gardening, security, utilities, insurance) and which are excluded (e.g., capital improvements, costs of vacant premises). In retail leases, ensure compliance with statutory outgoings disclosure and reconciliation requirements. Consider including a cap on annual CAM increases to give the tenant cost certainty.',
    australianLawContext:
      'Common area maintenance charges in retail leases are regulated by state retail leases legislation. Under the Retail Shop Leases Act 1994 (Qld), the landlord must provide a disclosure statement including an estimate of outgoings (s 21) and must provide an audited statement of actual outgoings (s 37). The landlord cannot recover management fees exceeding prescribed limits or capital expenditure unless permitted by the Act. Similar requirements exist under the Retail Leases Act 2003 (Vic) (ss 46-51) and the Retail Leases Act 1994 (NSW) (ss 25-28). For non-retail commercial leases, outgoings recovery is primarily governed by the lease terms, subject to general principles of good faith.',
    relatedClauses: [
      'real-estate-lease-agreement',
      'real-estate-maintenance-obligations',
      'real-estate-rent-escalation',
      'real-estate-option-to-renew',
    ],
    riskLevel: 'medium',
    keywords: [
      'common areas',
      'CAM',
      'outgoings',
      'maintenance costs',
      'lettable area',
      'reconciliation',
    ],
    commonIn: [
      'Shopping centre leases',
      'Retail shop leases',
      'Commercial office leases',
      'Multi-tenant industrial leases',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
];
