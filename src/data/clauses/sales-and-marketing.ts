import type { Clause } from '../types';

export const salesAndMarketingClauses: Clause[] = [
  {
    id: 'sales-and-marketing-exclusive-dealership',
    title: 'Exclusive Dealership',
    slug: 'exclusive-dealership',
    category: 'sales-and-marketing',
    summary:
      'Grants a distributor or dealer the exclusive right to sell specified products within a defined territory.',
    description:
      'An exclusive dealership clause grants one party the sole right to distribute or sell the other party\'s products or services within a defined territory. The principal agrees not to appoint other distributors in that territory and may also agree not to sell directly to customers within the territory.\n\nExclusivity arrangements require careful consideration under Australian competition law. While exclusive distribution arrangements are not per se unlawful, they must not have the purpose or likely effect of substantially lessening competition under section 45 of the Competition and Consumer Act 2010 (Cth). Third-line forcing provisions under section 47 may also be relevant.\n\nThe clause should define the territory, the products covered, the duration of exclusivity, any performance obligations that must be met to maintain exclusivity, and the consequences of failing to meet those obligations.',
    sampleText:
      'The Principal appoints the Distributor as its exclusive distributor of the Products within the Territory for the duration of the Term. During the Term, the Principal must not: (a) appoint any other person as a distributor of the Products in the Territory; or (b) sell the Products directly to customers in the Territory, except as permitted under this Agreement. The Distributor\'s exclusivity is conditional upon the Distributor achieving the Minimum Sales Targets set out in Schedule [X] for each Contract Year. If the Distributor fails to achieve the Minimum Sales Target in any Contract Year, the Principal may, by written notice, convert the appointment to a non-exclusive appointment effective from the commencement of the next Contract Year.',
    draftingNotes:
      'Define the Territory precisely (by geographic area, customer segment, or channel). Include minimum performance obligations to protect the principal if the distributor underperforms. Address whether the principal may sell directly or through online channels. Consider the duration of exclusivity and renewal mechanisms. Assess competition law implications, particularly for market-leading products or narrow markets.',
    australianLawContext:
      'Section 45 of the Competition and Consumer Act 2010 (Cth) prohibits contracts that have the purpose or likely effect of substantially lessening competition. Exclusive distribution arrangements are assessed under this provision. Section 47 addresses exclusive dealing conduct, including third-line forcing. The ACCC provides guidance on distribution arrangements. Exclusive dealing notifications may be lodged with the ACCC under s 93 to obtain immunity from legal action.',
    relatedClauses: [
      'sales-and-marketing-sales-targets',
      'intellectual-property-trademark-use',
      'general-termination',
    ],
    riskLevel: 'medium',
    keywords: [
      'exclusive',
      'dealership',
      'distribution',
      'territory',
      'sole distributor',
      'appointment',
    ],
    commonIn: [
      'distribution agreements',
      'dealership agreements',
      'franchise agreements',
      'agency agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'sales-and-marketing-sales-targets',
    title: 'Sales Targets',
    slug: 'sales-targets',
    category: 'sales-and-marketing',
    summary:
      'Establishes minimum sales volumes or revenue targets that the distributor or dealer must achieve.',
    description:
      'A sales targets clause sets out the minimum levels of sales that a distributor, dealer, or agent must achieve during specified periods. Sales targets serve to protect the principal\'s commercial interests and ensure that the distributor is actively promoting and selling the products.\n\nTargets may be expressed as minimum units sold, minimum revenue, or minimum orders placed. The clause should specify the consequences of failing to meet targets, which may range from loss of exclusivity to termination of the agreement. It should also address how targets are set for future periods, whether by agreement or by the principal acting reasonably.\n\nPractitioners should ensure that sales targets are commercially realistic and achievable, and that the consequences of failure are proportionate. In franchise agreements, sales targets must also comply with the Franchising Code of Conduct.',
    sampleText:
      'The Distributor must achieve the Minimum Sales Targets specified in Schedule [X] for each Contract Year. The Minimum Sales Targets for subsequent Contract Years shall be agreed between the parties in writing not less than sixty (60) days before the commencement of each Contract Year. If the parties are unable to agree, the Minimum Sales Target for the following year shall be the greater of: (a) the Minimum Sales Target for the preceding year; or (b) the actual sales achieved in the preceding year. If the Distributor fails to achieve [eighty percent (80%)] of the Minimum Sales Target in any Contract Year, the Principal may, by written notice: (i) require the Distributor to submit a sales improvement plan; (ii) convert exclusive to non-exclusive appointment; or (iii) terminate this Agreement.',
    draftingNotes:
      'Set targets that are commercially realistic and based on market data. Include a mechanism for adjusting targets for subsequent periods. Consider grace periods or cure mechanisms before triggering termination. Address how external factors (such as market downturns or supply disruptions) are accounted for. In franchise agreements, ensure compliance with the Franchising Code of Conduct disclosure and good faith requirements.',
    australianLawContext:
      'Sales target provisions in distribution and franchise agreements are governed by general Australian contract law. In franchise agreements, the Franchising Code of Conduct (Competition and Consumer (Industry Codes — Franchising) Regulation 2014) imposes disclosure obligations and requires franchisors to act in good faith. The Code requires disclosure of earnings information if provided. Termination for failure to meet sales targets must comply with the notice and cure provisions of the Code.',
    relatedClauses: [
      'sales-and-marketing-exclusive-dealership',
      'performance-key-performance-indicators',
      'general-termination',
    ],
    riskLevel: 'medium',
    keywords: [
      'sales targets',
      'minimum sales',
      'revenue targets',
      'performance',
      'quotas',
    ],
    commonIn: [
      'distribution agreements',
      'franchise agreements',
      'agency agreements',
      'dealership agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'sales-and-marketing-marketing-support',
    title: 'Marketing Support',
    slug: 'marketing-support',
    category: 'sales-and-marketing',
    summary:
      'Establishes the obligations of each party regarding marketing activities, materials, and support.',
    description:
      'A marketing support clause defines each party\'s obligations with respect to marketing, advertising, and promotional activities for the products or services. It may require the principal to provide marketing materials, co-fund advertising campaigns, or make marketing resources available to the distributor.\n\nThe clause should address brand guidelines and approval processes for marketing materials, the allocation of marketing costs, and any reporting requirements. In franchise systems, marketing fund contributions are a significant commercial term and are subject to specific requirements under the Franchising Code of Conduct.\n\nPractitioners should consider the Australian Consumer Law requirements regarding advertising and promotional claims, including prohibitions on misleading or deceptive conduct and false representations.',
    sampleText:
      'The Principal shall provide the Distributor with marketing materials, product information, and sales collateral as reasonably necessary to support the promotion and sale of the Products in the Territory. The Distributor must submit all proposed advertising and promotional materials to the Principal for written approval prior to publication or distribution. The Distributor must not make any representation regarding the Products that is not consistent with the marketing materials provided by the Principal. Each party must ensure that all marketing activities comply with the Australian Consumer Law, including the prohibitions on misleading or deceptive conduct under section 18 and false representations under section 29.',
    draftingNotes:
      'Define who provides marketing materials and who bears the cost. Include a prior approval process for all marketing and advertising. Require compliance with brand guidelines and Australian Consumer Law. Consider whether to establish a joint marketing committee. In franchise systems, address marketing fund contributions and governance in accordance with the Franchising Code of Conduct.',
    australianLawContext:
      'The Australian Consumer Law (Schedule 2 to the Competition and Consumer Act 2010 (Cth)) prohibits misleading or deceptive conduct in trade or commerce (s 18) and specific false representations about goods and services (s 29). Both parties may be liable for misleading advertising. In franchise systems, the Franchising Code of Conduct requires disclosure of marketing fund details and imposes obligations on how marketing funds are managed and audited.',
    relatedClauses: [
      'sales-and-marketing-advertising-funds',
      'intellectual-property-trademark-use',
      'sales-and-marketing-exclusive-dealership',
    ],
    riskLevel: 'low',
    keywords: [
      'marketing',
      'advertising',
      'promotional materials',
      'brand guidelines',
      'approval',
    ],
    commonIn: [
      'distribution agreements',
      'franchise agreements',
      'agency agreements',
      'licensing agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'sales-and-marketing-resale-price-maintenance',
    title: 'Resale Price Maintenance Warning',
    slug: 'resale-price-maintenance',
    category: 'sales-and-marketing',
    summary:
      'Addresses the legal prohibition on resale price maintenance and provides guidance on compliant pricing practices.',
    description:
      'This clause addresses the strict prohibition on resale price maintenance (RPM) under Australian competition law. RPM occurs when a supplier specifies a minimum price at which a distributor or retailer may resell goods or services. It is a per se contravention of the Competition and Consumer Act 2010 (Cth) — meaning it is unlawful regardless of its actual effect on competition.\n\nThe clause serves an educational and compliance function by reminding the parties of the prohibition and confirming that any recommended retail prices are non-binding suggestions only. It should make clear that the distributor is free to set its own resale prices.\n\nThis is categorised as "use with caution" because any pricing-related provision must be carefully drafted to avoid inadvertently creating an RPM arrangement. Even indirect conduct, such as withholding supply from a distributor who discounts below a recommended price, may constitute RPM.',
    sampleText:
      'Nothing in this Agreement requires or authorises the Distributor to resell the Products at any particular price. Any recommended retail price provided by the Principal is a non-binding recommendation only, and the Distributor is at all times free to determine its own resale prices. The Principal must not: (a) make the supply of Products conditional upon the Distributor agreeing to resell at a specified price; (b) withhold supply or discriminate against the Distributor on the basis of the prices at which the Distributor resells the Products; or (c) engage in any conduct that would constitute resale price maintenance within the meaning of Part VIII of the Competition and Consumer Act 2010 (Cth). Both parties must comply with all applicable provisions of the Competition and Consumer Act 2010 (Cth) regarding pricing practices.',
    draftingNotes:
      'This clause should be included in all distribution, agency, and franchise agreements as a compliance safeguard. Ensure that recommended retail prices are clearly identified as non-binding. Train sales teams to avoid conduct that could be characterised as RPM. Consider the distinction between RPM (prohibited per se) and maximum resale price restrictions (which may be assessed under the general competition provisions). Seek specific competition law advice for any pricing-related provisions.',
    australianLawContext:
      'Resale price maintenance is prohibited under Part VIII of the Competition and Consumer Act 2010 (Cth). Section 48 provides that a corporation must not engage in the practice of resale price maintenance. Sections 96-100 define RPM conduct, including specifying minimum resale prices, withholding supply, and using pricing-related conditions. RPM is a per se offence (no assessment of competitive effects is required). The ACCC actively enforces RPM prohibitions and has imposed substantial penalties. The maximum penalty for a corporation is the greater of $50 million, three times the benefit obtained, or 30% of turnover.',
    relatedClauses: [
      'sales-and-marketing-exclusive-dealership',
      'compliance-regulatory-compliance',
      'sales-and-marketing-sales-targets',
    ],
    riskLevel: 'high',
    keywords: [
      'resale price maintenance',
      'RPM',
      'pricing',
      'recommended retail price',
      'competition law',
      'ACCC',
    ],
    commonIn: [
      'distribution agreements',
      'supply agreements',
      'franchise agreements',
      'dealership agreements',
    ],
    status: 'use-with-caution',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'sales-and-marketing-product-returns',
    title: 'Product Returns',
    slug: 'product-returns',
    category: 'sales-and-marketing',
    summary:
      'Establishes the conditions and process for returning products, including defective goods and unsold stock.',
    description:
      'A product returns clause defines when and how products may be returned by the buyer or distributor to the supplier, the condition requirements for returned products, and the remedies available (such as replacement, credit, or refund). This clause is important for managing inventory risk, defective goods, and customer satisfaction.\n\nThe clause should distinguish between returns of defective products (which are typically accepted without restriction and may trigger warranty or consumer guarantee obligations) and returns of non-defective products (which may be subject to restocking fees, time limits, and condition requirements).\n\nUnder the Australian Consumer Law, consumers have statutory rights to return goods that fail to meet consumer guarantees, and these rights cannot be excluded by contract. The returns clause should therefore complement, rather than restrict, statutory return rights.',
    sampleText:
      'The Buyer may return Products that are defective or do not conform to the specifications set out in Schedule [X] within thirty (30) days of delivery, provided the Buyer notifies the Supplier in writing of the defect or non-conformity within seven (7) days of discovery. Upon receipt of a valid return, the Supplier shall, at the Buyer\'s election: (a) replace the defective Products at no additional cost; or (b) refund the purchase price of the defective Products. Non-defective Products may be returned within fourteen (14) days of delivery, subject to a restocking fee of [ten percent (10%)] of the purchase price, provided the Products are in original condition and packaging. Nothing in this clause limits any right or remedy available to the Buyer under the Australian Consumer Law.',
    draftingNotes:
      'Distinguish between defective and non-defective returns. Include time limits and condition requirements for returns. Address who bears the cost of return shipping. Include an ACL savings provision. Consider the impact of returned stock on sales targets and commissions. In perishable goods agreements, address shelf life and spoilage.',
    australianLawContext:
      'The Australian Consumer Law provides consumer guarantees that cannot be excluded by contract. For goods that fail to meet consumer guarantees, the consumer is entitled to a remedy (repair, replacement, or refund depending on whether the failure is major or minor) under ss 259-263 ACL. Businesses must not make false or misleading representations about return rights (s 29(1)(m) ACL). The ACCC has published guidance on consumer return rights.',
    relatedClauses: [
      'warranties-product-warranty',
      'finance-refund-policy',
      'warranties-warranty-claim-procedure',
    ],
    riskLevel: 'medium',
    keywords: [
      'product returns',
      'defective goods',
      'restocking fee',
      'replacement',
      'refund',
      'consumer rights',
    ],
    commonIn: [
      'supply agreements',
      'distribution agreements',
      'retail agreements',
      'e-commerce terms',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'sales-and-marketing-advertising-funds',
    title: 'Advertising Fund',
    slug: 'advertising-funds',
    category: 'sales-and-marketing',
    summary:
      'Establishes a collective advertising fund to which parties contribute for joint marketing initiatives.',
    description:
      'An advertising fund clause establishes a pooled fund to which franchise network members, distributors, or other participants contribute for the purposes of collective advertising, marketing, and brand promotion. The fund is typically managed by the franchisor or principal and is used for national or regional advertising campaigns, digital marketing, market research, and other promotional activities.\n\nIn franchise systems, advertising fund provisions are subject to specific requirements under the Franchising Code of Conduct, including obligations regarding transparency, financial reporting, and the use of fund monies. The franchisor must provide franchisees with audited financial statements for the fund.\n\nThe clause should specify the contribution rate, payment frequency, how the fund is managed and governed, what the fund may be used for, and the reporting and audit requirements.',
    sampleText:
      'The Franchisee must contribute to the Advertising Fund an amount equal to [two percent (2%)] of the Franchisee\'s gross revenue for each calendar month, payable within fourteen (14) days of the end of each month. The Franchisor shall administer the Advertising Fund and shall apply the Fund exclusively for the purposes of advertising, marketing, and promotion of the brand and the network. The Franchisor shall not use Fund monies for its own general operating expenses. The Franchisor shall provide the Franchisee with an audited financial statement of the Advertising Fund within ninety (90) days of the end of each financial year. The Franchisor shall consult with franchisees regarding the marketing strategy and shall establish an advisory committee of franchisee representatives.',
    draftingNotes:
      'Specify the contribution rate clearly (percentage of gross revenue or fixed amount). Define what constitutes eligible expenditure from the fund. Include audit and reporting obligations. Consider establishing a franchisee advisory committee. Ensure compliance with the Franchising Code of Conduct requirements. Address what happens to the fund upon termination of the franchise agreement.',
    australianLawContext:
      'The Franchising Code of Conduct (Competition and Consumer (Industry Codes — Franchising) Regulation 2014) requires disclosure of marketing fund details in the disclosure document. The franchisor must provide audited financial statements of marketing funds annually. The Code requires the franchisor to act in good faith in administering the fund. The ACCC has investigated and taken enforcement action in relation to misuse of marketing funds by franchisors.',
    relatedClauses: [
      'sales-and-marketing-marketing-support',
      'sales-and-marketing-exclusive-dealership',
      'finance-payment-terms',
    ],
    riskLevel: 'medium',
    keywords: [
      'advertising fund',
      'marketing fund',
      'contributions',
      'franchise marketing',
      'collective advertising',
    ],
    commonIn: [
      'franchise agreements',
      'cooperative marketing agreements',
      'distribution networks',
      'dealership agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
];
