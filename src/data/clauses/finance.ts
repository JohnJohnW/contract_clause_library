import type { Clause } from '../types';

export const financeClauses: Clause[] = [
  {
    id: 'finance-payment-terms',
    title: 'Payment Terms',
    slug: 'payment-terms',
    category: 'finance',
    summary:
      'Establishes the timing, method, and conditions for payment obligations between the parties.',
    description:
      'A payment terms clause defines the fundamental commercial mechanics of the agreement, including when payments are due, how they are calculated, the method of payment, and the currency in which payments must be made. Clear payment terms are essential to managing cash flow and reducing the risk of disputes.\n\nIn Australian commercial practice, payment terms typically range from 7 to 30 days from the date of invoice, though longer terms are common in certain industries. The clause should specify whether payment is due on receipt of invoice, at the end of month, or on a fixed date. It should also address whether GST is included or excluded from stated prices.\n\nPractitioners should consider the interaction between contractual payment terms and statutory requirements, including the Security of Payment legislation in each state and territory for construction contracts, and the Payment Times Reporting Act 2020 (Cth) for large businesses.',
    sampleText:
      'The Customer must pay each correctly rendered invoice within thirty (30) days of the date of that invoice. All invoices must be submitted in a form reasonably acceptable to the Customer and must include: (a) a description of the goods or services supplied; (b) the applicable fees or charges; (c) the GST component (if any); and (d) the Supplier\'s ABN. Payment must be made by electronic funds transfer to the bank account nominated by the Supplier. All amounts stated in this Agreement are exclusive of GST unless otherwise indicated. Where GST is payable on a taxable supply made under this Agreement, the recipient must pay an additional amount equal to the GST payable on that supply.',
    draftingNotes:
      'Specify the payment period clearly (e.g., 14, 21, or 30 days). Consider whether payment is due from the date of invoice or the date of receipt. Include GST treatment and require the supplier to hold a valid ABN. Consider whether progress payments or milestone-based payments are appropriate. For construction contracts, ensure compliance with the relevant state Security of Payment legislation. Address disputed invoices separately to avoid payment disputes delaying undisputed amounts.',
    australianLawContext:
      'The A New Tax System (Goods and Services Tax) Act 1999 (Cth) requires businesses registered for GST to issue tax invoices and account for GST on taxable supplies. The Payment Times Reporting Act 2020 (Cth) requires large businesses and government enterprises to report on their payment terms and practices. State Security of Payment legislation (e.g., Building and Construction Industry Security of Payment Act 1999 (NSW), Building Industry Fairness (Security of Payment) Act 2017 (Qld)) provides statutory mechanisms for progress payments in the construction industry.',
    relatedClauses: [
      'finance-late-payment-penalties',
      'finance-tax-obligations',
      'finance-price-adjustment',
    ],
    riskLevel: 'high',
    keywords: [
      'payment',
      'invoice',
      'payment terms',
      'GST',
      'fees',
      'electronic funds transfer',
    ],
    commonIn: [
      'supply agreements',
      'service agreements',
      'construction contracts',
      'licence agreements',
      'consulting agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'finance-late-payment-penalties',
    title: 'Late Payment Interest',
    slug: 'late-payment-penalties',
    category: 'finance',
    summary:
      'Imposes interest charges or penalties on amounts that remain unpaid after the due date.',
    description:
      'A late payment interest clause provides a financial incentive for the debtor to pay on time and compensates the creditor for the time value of money during the period of default. In Australia, unless the contract provides otherwise, interest on late payments is not automatically available at common law and must be expressly agreed or awarded by a court.\n\nThe clause should specify the applicable interest rate, how it is calculated (simple or compound), the date from which interest accrues, and whether the right to charge interest is in addition to or in substitution for other remedies. Common approaches include a fixed rate (e.g., 2% per month) or a margin above a reference rate (e.g., the RBA cash rate plus 4%).\n\nDrafters must be mindful of the penalty doctrine, which may render unenforceable an interest provision that is disproportionate to the legitimate interest of the innocent party. A commercially reasonable interest rate that reflects the cost of late payment is more likely to be upheld.',
    sampleText:
      'If the Customer fails to pay any amount due under this Agreement by the due date for payment, the Supplier may charge interest on the outstanding amount at a rate equal to the Reserve Bank of Australia cash rate (as published from time to time) plus four percent (4%) per annum, calculated daily and compounding monthly from the due date for payment until the date of actual payment in full. The right to charge interest under this clause is without prejudice to any other right or remedy of the Supplier arising from the failure to pay. The Supplier may also recover from the Customer its reasonable costs of collection, including legal costs on a solicitor-own client basis.',
    draftingNotes:
      'Ensure the interest rate is commercially reasonable to avoid the penalty doctrine. Consider using a reference rate (such as the RBA cash rate) plus a margin rather than a fixed rate, so the provision adjusts with market conditions. Specify whether interest compounds and, if so, at what intervals. Consider including a right to recover collection costs. Distinguish between interest on overdue invoices and any suspension of services for non-payment.',
    australianLawContext:
      'At common law, interest on late payment is not automatically available; it must be provided for contractually or awarded by a court under statutory provisions such as the Civil Procedure Act 2005 (NSW) s 100 or the Penalty Interest Rates Act 1983 (Vic). The penalty doctrine (Paciocco v ANZ Banking Group Ltd (2016) 258 CLR 525) may apply to late payment interest provisions that are disproportionate to the creditor\'s legitimate interest. A commercially reasonable rate reflecting the cost of funds and administration is generally enforceable.',
    relatedClauses: [
      'finance-payment-terms',
      'finance-advance-payments',
      'general-termination',
    ],
    riskLevel: 'medium',
    keywords: [
      'late payment',
      'interest',
      'penalty',
      'overdue',
      'default interest',
      'collection costs',
    ],
    commonIn: [
      'supply agreements',
      'service agreements',
      'construction contracts',
      'loan agreements',
      'lease agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'finance-price-adjustment',
    title: 'Price Adjustment',
    slug: 'price-adjustment',
    category: 'finance',
    summary:
      'Provides a mechanism for adjusting contract prices over time, typically linked to an index or agreed formula.',
    description:
      'A price adjustment clause allows the contract price to be varied during the term of the agreement to account for changes in costs, market conditions, or other relevant factors. This is particularly important in long-term contracts where fixed pricing may become commercially unreasonable for one or both parties.\n\nCommon approaches include annual CPI adjustments, cost-plus mechanisms, and benchmarking against market rates. The clause should clearly specify the trigger for adjustment, the methodology or index used, the frequency of adjustments, and any cap on the maximum adjustment in a given period.\n\nIn Australian practice, CPI-linked adjustments are common and typically reference the All Groups Consumer Price Index published by the Australian Bureau of Statistics. Practitioners should also consider whether adjustments should be automatic or subject to negotiation, and what happens if the parties cannot agree on an adjustment.',
    sampleText:
      'The Fees are subject to annual adjustment on each anniversary of the Commencement Date. The adjustment shall be calculated by reference to the percentage change in the All Groups Consumer Price Index (CPI) for the capital city in which the Services are primarily performed, as published by the Australian Bureau of Statistics, for the twelve (12) month period ending on the most recently published quarter prior to the adjustment date. No downward adjustment shall be made. The Supplier must give the Customer not less than thirty (30) days\' written notice of any price adjustment, together with details of the CPI figures relied upon. Any adjustment under this clause does not limit the Customer\'s right to negotiate pricing under any contract renewal.',
    draftingNotes:
      'Specify which CPI measure is used (All Groups, weighted average of eight capital cities, or a specific city). Consider whether to apply a cap on annual increases (e.g., CPI or 3%, whichever is lower). Address whether adjustments are one-way (increases only) or two-way. In volatile markets, consider whether more frequent adjustments are warranted. Ensure the notice period is sufficient for the customer to budget accordingly.',
    australianLawContext:
      'CPI data in Australia is published quarterly by the Australian Bureau of Statistics (ABS). The most commonly referenced index is the All Groups CPI for the weighted average of eight capital cities. Price adjustment clauses are enforceable under general Australian contract law, provided the mechanism is sufficiently certain and does not give one party an unfettered discretion to set the price (Biotechnology Australia Pty Ltd v Pace (1988) 15 NSWLR 130).',
    relatedClauses: [
      'finance-payment-terms',
      'finance-tax-obligations',
      'performance-service-level-agreement',
    ],
    riskLevel: 'medium',
    keywords: [
      'price adjustment',
      'CPI',
      'escalation',
      'indexation',
      'annual review',
      'cost increase',
    ],
    commonIn: [
      'long-term service agreements',
      'facility management contracts',
      'lease agreements',
      'supply agreements',
      'outsourcing contracts',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'finance-advance-payments',
    title: 'Advance Payments',
    slug: 'advance-payments',
    category: 'finance',
    summary:
      'Requires the customer to make upfront payments before goods are delivered or services are performed.',
    description:
      'An advance payment clause requires the customer to pay a deposit or prepayment prior to the commencement of work or delivery of goods. Advance payments serve to demonstrate the customer\'s commitment, provide working capital to the supplier, and allocate financial risk in the early stages of the contract.\n\nThe clause should address the amount or percentage of the advance payment, when it is due, whether it is refundable or non-refundable, and how it will be applied against future invoices. In substantial contracts, the customer may require the supplier to provide an advance payment guarantee or bank guarantee to secure the repayment of the advance in the event of non-performance.\n\nPractitioners should consider the Australian Consumer Law implications where the contract involves a consumer, as advance payment forfeiture provisions may constitute unfair contract terms in standard form consumer or small business contracts.',
    sampleText:
      'The Customer must pay an advance payment equal to [twenty percent (20%)] of the total Contract Price within fourteen (14) days of execution of this Agreement. The advance payment shall be applied proportionally against each progress payment claim submitted by the Supplier, such that the advance payment is fully recouped by the time the final progress payment is due. If this Agreement is terminated for any reason prior to the advance payment being fully recouped, the Supplier must refund the unrecouped balance within thirty (30) days of termination. The Customer may require the Supplier to provide an unconditional bank guarantee from an Australian authorised deposit-taking institution in respect of the advance payment.',
    draftingNotes:
      'Specify the advance payment amount as a fixed sum or percentage. Address clearly whether the advance is refundable on termination and under what circumstances. Consider requiring a bank guarantee or parent company guarantee to secure repayment. Define the recoupment mechanism clearly to avoid disputes. Ensure the clause is consistent with any termination and payment provisions elsewhere in the agreement.',
    australianLawContext:
      'Advance payment provisions are enforceable under general Australian contract law. However, forfeiture of advance payments upon termination may be subject to equitable relief against forfeiture (Legione v Hateley (1983) 152 CLR 406). The unfair contract terms regime under the Australian Consumer Law (Part 2-3, as amended) may apply to advance payment forfeiture provisions in standard form contracts with consumers or small businesses. Bank guarantees issued by Australian authorised deposit-taking institutions (ADIs) regulated by APRA are the standard form of security.',
    relatedClauses: [
      'finance-payment-terms',
      'finance-refund-policy',
      'general-termination',
    ],
    riskLevel: 'medium',
    keywords: [
      'advance payment',
      'deposit',
      'prepayment',
      'bank guarantee',
      'recoupment',
      'security',
    ],
    commonIn: [
      'construction contracts',
      'bespoke manufacturing agreements',
      'project agreements',
      'event contracts',
      'IT development agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'finance-refund-policy',
    title: 'Refund Policy',
    slug: 'refund-policy',
    category: 'finance',
    summary:
      'Sets out the circumstances in which payments may be refunded and the process for claiming refunds.',
    description:
      'A refund policy clause establishes the conditions under which a party is entitled to a refund of amounts paid, the process for requesting and processing refunds, and any limitations on the right to a refund. This clause is particularly important in consumer-facing contracts and agreements involving prepaid services or subscriptions.\n\nUnder Australian Consumer Law, consumers have statutory rights to refunds where goods or services fail to meet consumer guarantees, regardless of any contractual limitation. The refund policy should therefore be drafted to complement, rather than purport to override, these statutory rights.\n\nThe clause should specify any time limits for claiming a refund, whether refunds are provided as cash, credit, or exchange, and any administrative fees or deductions that may apply. In subscription and SaaS agreements, the clause may address pro-rata refunds for unused periods following early termination.',
    sampleText:
      'The Customer may request a refund of Fees paid in respect of Services not yet performed by providing written notice to the Supplier within [fourteen (14)] days of the event giving rise to the refund claim. The Supplier must process any approved refund within thirty (30) days of receiving a valid refund request. Any refund will be calculated on a pro-rata basis having regard to the proportion of Services already performed. Nothing in this clause limits or excludes any right or remedy that the Customer may have under the Australian Consumer Law, including the right to a refund for a major failure to comply with a consumer guarantee.',
    draftingNotes:
      'Ensure the refund policy does not purport to exclude or limit statutory consumer guarantee rights under the Australian Consumer Law. Consider whether the refund should be full or pro-rata. Address the method of refund (original payment method, credit note, etc.). In subscription models, clarify whether refunds are available for partial periods. Include a reasonable time limit for processing refunds.',
    australianLawContext:
      'The Australian Consumer Law (Schedule 2 to the Competition and Consumer Act 2010 (Cth)) provides consumer guarantees that cannot be excluded by contract. For a major failure, consumers are entitled to reject goods or services and obtain a refund (ss 259-263 ACL). For a minor failure, the supplier has the right to remedy the failure. Section 64A limits the ability to exclude or modify consumer guarantees. Businesses must not make false or misleading representations about refund rights (s 29(1)(m) ACL).',
    relatedClauses: [
      'finance-payment-terms',
      'finance-advance-payments',
      'warranties-product-warranty',
    ],
    riskLevel: 'medium',
    keywords: [
      'refund',
      'refund policy',
      'consumer guarantee',
      'cancellation',
      'pro-rata',
      'reimbursement',
    ],
    commonIn: [
      'consumer contracts',
      'subscription agreements',
      'SaaS agreements',
      'event contracts',
      'service agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'finance-tax-obligations',
    title: 'Tax Obligations',
    slug: 'tax-obligations',
    category: 'finance',
    summary:
      'Allocates responsibility for taxes, duties, and government charges arising from the agreement.',
    description:
      'A tax obligations clause clarifies which party is responsible for various taxes, duties, and government charges that may arise in connection with the agreement. In Australia, the primary consideration is the treatment of GST, but the clause may also address income tax withholding, stamp duty, customs duties, and payroll tax.\n\nThe clause typically provides that the stated contract price is exclusive of GST, and that where a taxable supply is made, the recipient must pay an additional amount equal to the GST. It should also require the supplier to provide a valid tax invoice to enable the recipient to claim input tax credits.\n\nIn cross-border transactions, additional considerations include withholding tax on royalties and service fees, transfer pricing, and the application of double tax agreements. Practitioners should ensure the clause is consistent with the relevant provisions of the A New Tax System (Goods and Services Tax) Act 1999 (Cth) and other applicable taxation legislation.',
    sampleText:
      'Each party is responsible for its own income tax and other taxes assessed on its net income. All amounts payable under this Agreement are exclusive of GST unless expressly stated otherwise. If GST is payable on a taxable supply made under or in connection with this Agreement, the party providing the consideration for that supply must pay an additional amount equal to the GST payable, provided that the supplier has issued a valid tax invoice. Each party must maintain its registration under the A New Tax System (Goods and Services Tax) Act 1999 (Cth) for the duration of this Agreement. Any stamp duty, registration fees, or similar government charges arising from the execution of this Agreement shall be borne by [the Customer/each party equally].',
    draftingNotes:
      'Confirm whether prices are GST-inclusive or GST-exclusive and state this clearly. Require the provision of valid tax invoices to support input tax credit claims. Address which party bears stamp duty (noting that stamp duty has been abolished in many Australian jurisdictions for most commercial transactions). In employment-adjacent arrangements, consider payroll tax implications. For cross-border transactions, address withholding tax and the application of relevant double tax agreements.',
    australianLawContext:
      'The A New Tax System (Goods and Services Tax) Act 1999 (Cth) imposes GST at 10% on taxable supplies. Division 29 requires the supplier to issue a tax invoice. The Income Tax Assessment Act 1997 (Cth) and the Income Tax Assessment Act 1936 (Cth) govern income tax. Stamp duty varies by state and territory, having been largely abolished for commercial transactions in most jurisdictions. The Payroll Tax Act (in each state and territory) may apply to payments to contractors in certain circumstances.',
    relatedClauses: [
      'finance-payment-terms',
      'finance-price-adjustment',
      'compliance-regulatory-compliance',
    ],
    riskLevel: 'medium',
    keywords: [
      'tax',
      'GST',
      'stamp duty',
      'tax invoice',
      'ABN',
      'withholding tax',
      'payroll tax',
    ],
    commonIn: [
      'all commercial agreements',
      'supply agreements',
      'service agreements',
      'licence agreements',
      'construction contracts',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
];
