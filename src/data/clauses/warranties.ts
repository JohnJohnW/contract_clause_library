import type { Clause } from '../types';

export const warrantiesClauses: Clause[] = [
  {
    id: 'warranties-product-warranty',
    title: 'Product Warranty',
    slug: 'product-warranty',
    category: 'warranties',
    summary:
      'Provides an express warranty that products will meet specified standards of quality and performance.',
    description:
      'A product warranty clause provides the buyer with assurances about the quality, performance, and fitness of products supplied under the agreement. Express product warranties supplement the consumer guarantees implied by the Australian Consumer Law and provide additional or more specific commitments from the supplier.\n\nThe clause typically warrants that the products will be free from defects in materials and workmanship, will conform to the agreed specifications, and will perform in accordance with applicable product documentation. The warranty period is usually specified (commonly 12-24 months from delivery) and the clause should set out the remedies available for warranty claims.\n\nPractitioners should ensure that express warranties do not inadvertently conflict with or fall below the consumer guarantees under the ACL. It is also important to clearly define the scope of the warranty, including any exclusions for misuse, modification, or normal wear and tear.',
    sampleText:
      'The Supplier warrants that the Products: (a) will be free from defects in materials and workmanship; (b) will conform to the specifications set out in Schedule [X]; (c) will be fit for the purpose notified by the Customer to the Supplier prior to the date of this Agreement; and (d) will comply with all applicable Australian Standards and regulatory requirements. This warranty applies for a period of [twenty-four (24)] months from the date of delivery (Warranty Period). If a Product fails to comply with this warranty during the Warranty Period, the Supplier must, at its own cost and at the Customer\'s election, repair or replace the defective Product or refund the purchase price. Nothing in this clause limits any right or remedy under the Australian Consumer Law.',
    draftingNotes:
      'Define the warranty period clearly. Specify the remedies available (repair, replacement, or refund). Include exclusions for misuse, unauthorised modification, and normal wear and tear. Ensure the warranty does not fall below the consumer guarantees under the ACL. Consider whether the warranty should apply to repaired or replacement products (and for how long). Address the process for making warranty claims.',
    australianLawContext:
      'Express product warranties supplement the consumer guarantees under the Australian Consumer Law (ss 54-64 ACL). The ACL implies guarantees as to acceptable quality (s 54), fitness for purpose (s 55), compliance with description (s 56), and repair and spare parts availability (s 58). These guarantees cannot be excluded (s 64). Section 64A permits limitation of remedies for non-consumer goods in certain circumstances. Manufacturers may also be liable under Part 5-4 ACL for goods with safety defects.',
    relatedClauses: [
      'warranties-warranty-claim-procedure',
      'warranties-warranty-exclusions',
      'liability-warranty-disclaimer',
    ],
    riskLevel: 'high',
    keywords: [
      'product warranty',
      'defects',
      'workmanship',
      'specifications',
      'warranty period',
      'quality',
    ],
    commonIn: [
      'supply agreements',
      'manufacturing agreements',
      'distribution agreements',
      'purchase orders',
      'equipment supply contracts',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'warranties-service-warranty',
    title: 'Service Warranty',
    slug: 'service-warranty',
    category: 'warranties',
    summary:
      'Warrants that services will be performed with due care, skill, and in accordance with professional standards.',
    description:
      'A service warranty clause provides the customer with assurances about the quality and standard of services to be performed. The warranty typically covers due care and skill, compliance with agreed specifications and requirements, and adherence to professional standards and best practices.\n\nUnder the Australian Consumer Law, a guarantee of due care and skill is implied into all contracts for the supply of services to consumers (section 60 ACL). An express service warranty may provide additional or more specific commitments, such as compliance with particular industry standards or methodologies.\n\nThe clause should address the duration of the warranty (which may extend beyond completion of the services to cover defects discovered after delivery), the process for notifying warranty claims, and the remedies available (typically re-performance of the defective services at no additional cost).',
    sampleText:
      'The Service Provider warrants that: (a) the Services will be performed with due care and skill in accordance with the standards of a competent and experienced professional in the relevant industry; (b) the Services will be performed in accordance with the specifications and requirements set out in this Agreement; (c) all Deliverables will be fit for the purposes described in this Agreement; and (d) the Services will comply with all applicable laws, regulations, and Australian Standards. If the Services fail to comply with this warranty, the Customer must notify the Service Provider within sixty (60) days of discovery. The Service Provider must, at its own cost, re-perform the defective Services within a reasonable time. If re-performance fails to remedy the defect, the Customer is entitled to a refund of the Fees paid for the defective Services.',
    draftingNotes:
      'Reference the standard of care appropriate to the industry (e.g., "competent and experienced professional"). Include compliance with specifications as a specific warranty. Set a reasonable notification period for warranty claims. Address the remedies for breach (re-performance, credit, or refund). Ensure the warranty is consistent with the overall liability framework. Consider whether to include a warranty period after completion of services.',
    australianLawContext:
      'The Australian Consumer Law implies a guarantee of due care and skill into all service contracts with consumers (s 60 ACL). A guarantee of fitness for purpose is implied where the consumer makes known the purpose (s 61 ACL). These guarantees cannot be excluded (s 64). For services not covered by the ACL, common law principles require a service provider to exercise reasonable care and skill. Professional services may also be subject to industry-specific standards and codes of conduct.',
    relatedClauses: [
      'warranties-product-warranty',
      'warranties-warranty-claim-procedure',
      'performance-service-level-agreement',
    ],
    riskLevel: 'medium',
    keywords: [
      'service warranty',
      'due care and skill',
      'professional standards',
      'fitness for purpose',
      're-performance',
    ],
    commonIn: [
      'service agreements',
      'consultancy agreements',
      'IT services agreements',
      'construction contracts',
      'professional services agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'warranties-warranty-disclaimer-warranties',
    title: 'Warranty Limitations',
    slug: 'warranty-disclaimer-warranties',
    category: 'warranties',
    summary:
      'Clarifies the boundaries of express warranties and preserves non-excludable statutory rights.',
    description:
      'A warranty limitations clause clarifies that the express warranties given in the agreement are the only warranties provided, and that all other implied warranties are excluded to the maximum extent permitted by law. This clause operates in conjunction with the liability category\'s warranty disclaimer but is placed within the warranties section for clarity.\n\nThe critical distinction in Australian practice is between warranties that can be excluded (common law implied terms and certain statutory terms in B2B contracts) and those that cannot (consumer guarantees under the ACL). The clause must therefore include a clear preservation of non-excludable statutory rights.\n\nThis clause is categorised as "use with caution" because overly broad warranty limitations may be found to be unfair contract terms under the ACL, particularly in standard form contracts with consumers or small businesses.',
    sampleText:
      'The warranties set out in this Agreement are the sole and exclusive warranties given by the Supplier in respect of the Products and Services. To the maximum extent permitted by applicable law, all other warranties, conditions, guarantees, rights, and remedies (whether express or implied, including by statute, custom, or the general law) are excluded. Notwithstanding the foregoing, nothing in this clause excludes, restricts, or modifies any consumer guarantee under the Australian Consumer Law (Schedule 2 to the Competition and Consumer Act 2010 (Cth)) to the extent that the Australian Consumer Law applies and prohibits such exclusion, restriction, or modification.',
    draftingNotes:
      'Always include the ACL savings clause. Ensure the limitations are consistent with the express warranties provided elsewhere in the agreement. In consumer and small business contracts, assess whether the limitations may be characterised as unfair contract terms. Consider whether any industry-specific statutory warranties apply. This clause should be reviewed by a qualified legal practitioner for each specific context.',
    australianLawContext:
      'Section 64 of the Australian Consumer Law provides that consumer guarantees (ss 51-64) cannot be excluded by contract. Section 64A permits limitation of remedies for goods or services not ordinarily acquired for personal, domestic, or household use, to re-supply or payment of re-supply costs. The unfair contract terms regime (Part 2-3 ACL, as amended by the Treasury Laws Amendment (More Competition, Better Prices) Act 2022) may void warranty limitation clauses in standard form contracts with consumers or small businesses. Courts will consider whether the limitation creates a significant imbalance in the parties\' rights and obligations.',
    relatedClauses: [
      'liability-warranty-disclaimer',
      'warranties-product-warranty',
      'warranties-warranty-exclusions',
    ],
    riskLevel: 'medium',
    keywords: [
      'warranty limitation',
      'implied warranties',
      'consumer guarantees',
      'ACL',
      'exclusion',
    ],
    commonIn: [
      'supply agreements',
      'software licence agreements',
      'service agreements',
      'equipment supply contracts',
    ],
    status: 'use-with-caution',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'warranties-extended-warranty',
    title: 'Extended Warranty',
    slug: 'extended-warranty',
    category: 'warranties',
    summary:
      'Provides the option to extend the warranty period beyond the standard term for additional consideration.',
    description:
      'An extended warranty clause allows the buyer to extend the warranty coverage beyond the standard warranty period, typically in exchange for an additional fee. Extended warranties provide the buyer with longer protection against defects and failures, and provide the supplier with an additional revenue stream.\n\nThe clause should specify the duration and scope of the extended warranty, the additional fees payable, the process for electing the extended warranty, and any differences between the standard and extended warranty coverage. It should also address whether the extended warranty is renewable.\n\nPractitioners should ensure that extended warranty provisions comply with the Australian Consumer Law, including the prohibition on misrepresenting the buyer\'s rights. Extended warranties offered to consumers must clearly state that consumer guarantee rights under the ACL are separate from and not affected by the extended warranty.',
    sampleText:
      'The Customer may elect to extend the Warranty Period for an additional [twelve (12)] months by notifying the Supplier in writing not less than thirty (30) days prior to the expiry of the initial Warranty Period and paying the Extended Warranty Fee set out in Schedule [X]. The Extended Warranty covers the same defects and non-conformities as the standard warranty. The Extended Warranty may be renewed for successive twelve-month periods on the same terms, subject to payment of the applicable fee. Nothing in this clause affects the Customer\'s rights under the Australian Consumer Law, which may provide remedies beyond the expiry of any contractual warranty period.',
    draftingNotes:
      'Specify the extended warranty duration and fee clearly. Define whether the extended warranty coverage is identical to or differs from the standard warranty. Include a clear ACL savings clause. Address the renewal process. Consider whether the fee should be adjusted for subsequent renewal periods. Ensure that the extended warranty is not presented as the only source of the customer\'s rights — the ACL may provide remedies beyond the warranty period.',
    australianLawContext:
      'Extended warranties offered to consumers must comply with the Australian Consumer Law. Section 29(1)(m) prohibits misrepresenting the existence or content of warranty rights. The ACCC has taken enforcement action against businesses that misrepresent extended warranty benefits or fail to disclose that consumer guarantee rights exist independently of the warranty. The consumer guarantees under the ACL are not limited by any contractual warranty period — goods must be of acceptable quality having regard to their nature and price, which may mean remedies are available well beyond the warranty period.',
    relatedClauses: [
      'warranties-product-warranty',
      'warranties-warranty-claim-procedure',
      'finance-payment-terms',
    ],
    riskLevel: 'low',
    keywords: [
      'extended warranty',
      'warranty extension',
      'additional coverage',
      'warranty renewal',
      'warranty fee',
    ],
    commonIn: [
      'equipment supply agreements',
      'vehicle sale contracts',
      'technology hardware agreements',
      'appliance supply agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'warranties-warranty-exclusions',
    title: 'Warranty Exclusions',
    slug: 'warranty-exclusions',
    category: 'warranties',
    summary:
      'Defines the circumstances in which warranty coverage does not apply.',
    description:
      'A warranty exclusions clause identifies the specific situations in which the supplier\'s warranty obligations do not apply. Common exclusions include damage caused by misuse, negligence, or accident; unauthorised modification or repair; use outside the product\'s specifications or intended purpose; normal wear and tear; and failure to follow maintenance instructions.\n\nWarranty exclusions are important for protecting the supplier from liability for defects that are not attributable to the quality of the product as supplied. However, the exclusions must be clearly defined and must not purport to override non-excludable consumer guarantee rights under the Australian Consumer Law.\n\nPractitioners should ensure that warranty exclusions are reasonable and proportionate, and that they are clearly communicated to the buyer at or before the time of sale.',
    sampleText:
      'The warranty set out in this Agreement does not apply to any Product defect or failure to the extent that it is caused by: (a) misuse, abuse, neglect, or accident; (b) modification, alteration, or repair by any person other than the Supplier or its authorised representative; (c) use of the Product in a manner inconsistent with the Supplier\'s written instructions or specifications; (d) normal wear and tear; (e) failure to perform maintenance in accordance with the Supplier\'s recommended maintenance schedule; or (f) any external cause, including but not limited to power surges, lightning, flood, or fire. The burden of proving that a warranty exclusion applies lies with the Supplier. Nothing in this clause limits any right or remedy under the Australian Consumer Law.',
    draftingNotes:
      'List exclusions specifically rather than using broad catch-all language. Place the burden of proof on the supplier to establish that an exclusion applies. Include an ACL savings clause. Ensure exclusions are reasonable — overly broad exclusions may be challenged as unfair contract terms. Consider whether exclusions should apply differently to different product types within the agreement. Ensure exclusions are consistent with the maintenance obligations imposed on the buyer.',
    australianLawContext:
      'Warranty exclusions are subject to the Australian Consumer Law. Consumer guarantees cannot be excluded by contract (s 64 ACL), but a supplier may not be liable under the guarantee of acceptable quality if the defect was specifically drawn to the consumer\'s attention before supply (s 54(7)). The unfair contract terms regime may void unreasonable warranty exclusions in standard form contracts. The ACCC has taken enforcement action against warranty exclusions that purport to override consumer guarantee rights.',
    relatedClauses: [
      'warranties-product-warranty',
      'warranties-warranty-claim-procedure',
      'liability-warranty-disclaimer',
    ],
    riskLevel: 'medium',
    keywords: [
      'warranty exclusions',
      'misuse',
      'wear and tear',
      'unauthorised modification',
      'limitations',
    ],
    commonIn: [
      'supply agreements',
      'equipment supply contracts',
      'technology agreements',
      'manufacturing agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'warranties-warranty-claim-procedure',
    title: 'Warranty Claim Procedure',
    slug: 'warranty-claim-procedure',
    category: 'warranties',
    summary:
      'Sets out the process for submitting, assessing, and resolving warranty claims.',
    description:
      'A warranty claim procedure clause establishes the step-by-step process that a buyer must follow to make a warranty claim and that the supplier must follow to assess and resolve the claim. A clear procedure reduces disputes, sets expectations, and ensures that claims are handled efficiently.\n\nThe clause should address notification requirements (including time limits and required information), the supplier\'s obligation to assess the claim, the timeframe for assessment and resolution, the remedies available, and the process for returning defective products. It should also address who bears the costs of warranty claims, including shipping, inspection, and repair.\n\nIn consumer contracts, the warranty claim procedure must be consistent with the consumer\'s rights under the Australian Consumer Law, which provides that the supplier must not impose unreasonable conditions on making a claim.',
    sampleText:
      'To make a warranty claim, the Customer must: (a) notify the Supplier in writing within fourteen (14) days of discovering the defect, providing a detailed description of the defect and any supporting evidence; and (b) return the defective Product to the Supplier at the address nominated by the Supplier (or make the Product available for inspection at the Customer\'s premises, at the Supplier\'s election). The Supplier must assess the warranty claim within ten (10) Business Days of receiving the Product or completing the inspection. If the Supplier determines that the claim is valid, the Supplier must, at the Customer\'s election: (i) repair the Product; (ii) replace the Product with a product of equivalent specification; or (iii) refund the purchase price. All costs of a valid warranty claim, including shipping and inspection, shall be borne by the Supplier.',
    draftingNotes:
      'Set reasonable notification and return timeframes. Specify what information must accompany the claim. Define the assessment timeframe. Provide the customer with a choice of remedy where possible. Allocate costs clearly (supplier bears costs for valid claims). Address the process for disputed claims. In consumer contracts, ensure the procedure does not impose unreasonable conditions — the ACCC has taken action against businesses with overly onerous claims processes.',
    australianLawContext:
      'Under the Australian Consumer Law, a consumer is entitled to a remedy (repair, replacement, or refund) for goods that fail to meet consumer guarantees (ss 259-263 ACL). For a major failure, the consumer may choose the remedy; for a minor failure, the supplier may choose between repair, replacement, or refund. The ACCC has issued guidance on consumer rights to a repair, replacement, or refund. Businesses must not impose unreasonable conditions on warranty claims and must not mislead consumers about their rights.',
    relatedClauses: [
      'warranties-product-warranty',
      'warranties-service-warranty',
      'warranties-warranty-exclusions',
    ],
    riskLevel: 'medium',
    keywords: [
      'warranty claim',
      'claims procedure',
      'repair',
      'replacement',
      'refund',
      'notification',
    ],
    commonIn: [
      'supply agreements',
      'equipment supply contracts',
      'consumer contracts',
      'manufacturing agreements',
      'technology agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
];
