import type { Clause } from '../types';

export const generalClauses: Clause[] = [
  {
    id: 'general-confidentiality',
    title: 'Confidentiality',
    slug: 'confidentiality',
    category: 'general',
    summary:
      'Imposes obligations on parties to protect confidential information disclosed during the course of the agreement.',
    description:
      'A confidentiality clause establishes the framework for how sensitive business information shared between the parties is to be treated. It defines what constitutes Confidential Information, sets out the obligations of the receiving party, and specifies permitted disclosures. In Australian commercial agreements, confidentiality provisions are essential to protect trade secrets, proprietary data, and other commercially sensitive material.\n\nThe clause typically operates alongside equitable obligations of confidence recognised at common law. However, a well-drafted contractual provision provides greater certainty by clearly delineating the scope of the obligation, the duration of the restriction, and the remedies available for breach. It is important to ensure that the definition of Confidential Information is neither too broad (which may render it unenforceable) nor too narrow (which may leave gaps in protection).\n\nWhen drafting, consider whether carve-outs are needed for information that is already in the public domain, independently developed, or required to be disclosed by law or regulation. The clause should also address the return or destruction of confidential materials upon termination of the agreement.',
    sampleText:
      'Each party (Receiving Party) must keep confidential all Confidential Information of the other party (Disclosing Party) and must not, without the prior written consent of the Disclosing Party, disclose or permit the disclosure of any Confidential Information to any person except: (a) to the Receiving Party\'s officers, employees, advisers and agents who have a need to know for the purposes of this Agreement and who are bound by obligations of confidentiality no less onerous than those contained herein; or (b) as required by law, any court of competent jurisdiction, or any governmental or regulatory authority. The Receiving Party must use Confidential Information solely for the purposes of this Agreement and must take all reasonable steps to protect the confidentiality of such information. This obligation survives termination of this Agreement for a period of five (5) years.',
    draftingNotes:
      'Define "Confidential Information" precisely in the definitions section. Consider whether a mutual or unilateral obligation is appropriate. Adjust the survival period based on the nature of the information. For highly sensitive material, consider requiring the return or certified destruction of all copies upon termination. Ensure carve-outs align with any regulatory disclosure obligations the parties may have.',
    australianLawContext:
      'Confidentiality obligations in Australia are supported by the equitable doctrine of breach of confidence established in Coco v AN Clark (Engineers) Ltd [1969] RPC 41, as applied in Australian courts. Statutory protections may also arise under the Corporations Act 2001 (Cth) for corporate information and the Privacy Act 1988 (Cth) where personal information is involved. The clause should be drafted with consideration of the implied duty of good faith recognised in certain Australian commercial contracts.',
    relatedClauses: [
      'intellectual-property-ip-confidentiality',
      'general-entire-agreement',
      'general-termination',
    ],
    riskLevel: 'medium',
    keywords: [
      'confidentiality',
      'non-disclosure',
      'NDA',
      'trade secrets',
      'proprietary information',
      'confidential information',
    ],
    commonIn: [
      'Service agreements',
      'Joint venture agreements',
      'Employment contracts',
      'Licence agreements',
      'Supply agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'general-termination',
    title: 'Termination',
    slug: 'termination',
    category: 'general',
    summary:
      'Sets out the circumstances and procedures under which either party may bring the agreement to an end.',
    description:
      'A termination clause establishes the mechanisms by which the agreement may be ended, either by effluxion of time, mutual consent, or the occurrence of specified events. It provides certainty to both parties about the grounds for termination and the process to be followed. In Australian commercial practice, a clearly drafted termination provision is critical to managing risk and ensuring an orderly unwinding of the contractual relationship.\n\nThe clause typically addresses termination for convenience (where a party may terminate without cause upon notice), termination for cause (upon breach or insolvency), and the consequences of termination including accrued rights, payment of outstanding amounts, and return of property. It is important to distinguish between material and non-material breaches, and to provide a cure period where appropriate.\n\nDrafters should consider the interaction between contractual termination rights and statutory rights, such as those under the Australian Consumer Law. The clause should also address what provisions survive termination, as obligations such as confidentiality, indemnification, and intellectual property ownership typically need to endure beyond the life of the agreement.',
    sampleText:
      'Either party may terminate this Agreement: (a) for convenience, by giving not less than thirty (30) days\' prior written notice to the other party; (b) immediately by written notice if the other party commits a material breach of this Agreement and, where such breach is capable of remedy, fails to remedy it within fourteen (14) days after receiving written notice specifying the breach and requiring its remedy; or (c) immediately by written notice if the other party becomes Insolvent, being the occurrence of any event described in section 459C(2) of the Corporations Act 2001 (Cth) or the appointment of an administrator under Part 5.3A of that Act. Upon termination, all rights and obligations of the parties cease except for those which by their nature are intended to survive termination, including clauses relating to confidentiality, indemnification, and liability.',
    draftingNotes:
      'Adjust the notice period for termination for convenience to reflect the nature of the agreement and the time reasonably required for the parties to transition. Consider whether termination for convenience should be available to both parties or only one. Specify clearly which provisions survive termination. Ensure insolvency trigger events are comprehensive and align with current provisions of the Corporations Act 2001 (Cth).',
    australianLawContext:
      'Termination rights must be exercised consistently with the implied duty of good faith, which Australian courts have recognised in certain categories of commercial contracts (see Renard Constructions (ME) Pty Ltd v Minister for Public Works (1992) 26 NSWLR 234). The Corporations Act 2001 (Cth) governs insolvency events. Ipso facto reform under the Treasury Laws Amendment (2017 Enterprise Incentives No. 2) Act 2017 restricts enforcement of certain contractual rights triggered solely by insolvency. Unfair contract terms provisions under the Australian Consumer Law (Schedule 2 to the Competition and Consumer Act 2010 (Cth)) may also apply to termination provisions in standard form contracts.',
    relatedClauses: [
      'general-force-majeure',
      'general-entire-agreement',
      'liability-limitation-of-liability',
    ],
    riskLevel: 'high',
    keywords: [
      'termination',
      'termination for convenience',
      'termination for cause',
      'breach',
      'insolvency',
      'notice period',
    ],
    commonIn: [
      'Service agreements',
      'Supply agreements',
      'Licence agreements',
      'Distribution agreements',
      'Construction contracts',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'general-indemnification',
    title: 'Indemnification',
    slug: 'indemnification',
    category: 'general',
    summary:
      'Requires one party to compensate the other for specified losses, damages, or liabilities arising from the agreement.',
    description:
      'An indemnification clause allocates risk by requiring one party (the indemnifying party) to hold harmless and compensate the other party (the indemnified party) for certain losses, liabilities, costs, and expenses. This is distinct from a claim for damages for breach of contract, as an indemnity operates as a primary obligation to pay, rather than a secondary obligation arising from breach.\n\nIn Australian contract law, the distinction between a common law indemnity (arising from breach) and a contractual indemnity (a standalone promise to pay) is significant. A well-drafted indemnity clause should make clear whether it covers first-party losses, third-party claims, or both, and should specify the types of loss covered. It is also important to set out any procedural requirements, such as prompt notification of claims and cooperation in defence.\n\nDrafters must be mindful of the interaction between indemnities and limitation of liability clauses. The indemnity should expressly state whether it is subject to any cap on liability. Under Australian Consumer Law, indemnity provisions that purport to exclude or limit liability for consumer guarantees may be void.',
    sampleText:
      'The Supplier indemnifies and holds harmless the Customer and its officers, employees, and agents (each an Indemnified Party) from and against all losses, liabilities, damages, costs, and expenses (including reasonable legal costs on a solicitor-own client basis) arising out of or in connection with: (a) any breach by the Supplier of its obligations under this Agreement; (b) any negligent or wilful act or omission of the Supplier or its Personnel in the performance of the Services; or (c) any claim by a third party that the Services or any Deliverable infringes the intellectual property rights of that third party. The Supplier must notify the Customer promptly upon becoming aware of any claim to which this indemnity may apply and must not settle any such claim without the Customer\'s prior written consent.',
    draftingNotes:
      'Consider whether the indemnity should be mutual or one-way. Specify whether the indemnity is subject to the overall limitation of liability. Include procedural requirements such as notification obligations, cooperation, and control of defence. Consider whether legal costs should be on a party-party or solicitor-own client basis. Ensure the indemnity does not inadvertently exclude liability that cannot be excluded under the Australian Consumer Law.',
    australianLawContext:
      'The enforceability of indemnity clauses in Australia is governed by common law principles. The High Court in Andar Transport Pty Ltd v Brambles Ltd (2004) 217 CLR 424 confirmed that clear and unambiguous language is required to extend an indemnity to cover a party\'s own negligence. Section 64A of the Australian Consumer Law limits the ability to exclude or modify consumer guarantees, which may affect the scope of indemnities in consumer contracts. Proportionate liability legislation in each state and territory may also affect the allocation of liability under an indemnity.',
    relatedClauses: [
      'liability-limitation-of-liability',
      'liability-third-party-indemnity',
      'general-termination',
    ],
    riskLevel: 'high',
    keywords: [
      'indemnity',
      'indemnification',
      'hold harmless',
      'compensation',
      'losses',
      'third party claims',
    ],
    commonIn: [
      'Service agreements',
      'Construction contracts',
      'IT agreements',
      'Supply agreements',
      'Professional services agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'general-assignment',
    title: 'Assignment',
    slug: 'assignment',
    category: 'general',
    summary:
      'Restricts or permits the transfer of rights and obligations under the agreement to a third party.',
    description:
      'An assignment clause governs whether and how a party may transfer its rights, obligations, or the benefit of the agreement to a third party. In Australian commercial agreements, it is common to restrict assignment without the prior written consent of the other party, as the identity and capability of each contracting party is often material to the bargain.\n\nThe clause should distinguish between assignment of the benefit of the contract (which is generally permissible at common law unless restricted) and novation (which substitutes a new party for an existing party, extinguishing the original obligations). It is also important to address whether the restriction applies to changes of control, as a change in the ultimate ownership of a corporate entity may have a similar practical effect to an assignment.\n\nDrafters should consider whether certain assignments should be permitted without consent, such as assignments to related bodies corporate (as defined in the Corporations Act 2001 (Cth)) or assignments in connection with a restructure or sale of all or substantially all of the assigning party\'s assets.',
    sampleText:
      'A party must not assign, novate, or otherwise transfer any of its rights or obligations under this Agreement without the prior written consent of the other party, such consent not to be unreasonably withheld or delayed. Notwithstanding the foregoing, either party may assign this Agreement to a Related Body Corporate (as defined in section 9 of the Corporations Act 2001 (Cth)) without the consent of the other party, provided that the assigning party gives written notice to the other party within fourteen (14) days of such assignment, and the assignee assumes all obligations of the assigning party under this Agreement. Any purported assignment in breach of this clause is void and of no effect.',
    draftingNotes:
      'Consider whether the consent requirement should apply to both parties or only one. Decide whether "not to be unreasonably withheld" should be included, as this gives the assigning party greater flexibility. Address whether a change of control constitutes an assignment. Consider requiring the assignee to execute a deed of assumption. Ensure the clause covers both the benefit and burden of the contract.',
    australianLawContext:
      'At common law in Australia, the benefit of a contract is generally assignable unless the contract provides otherwise, but the burden of a contract cannot be assigned without the consent of the other party (Tolhurst v Associated Portland Cement Manufacturers (1900) Ltd [1902] 2 KB 660, applied in Australia). The Corporations Act 2001 (Cth) s 9 defines "Related Body Corporate". Anti-assignment clauses are generally enforceable, and a purported assignment in breach will be ineffective against the non-assigning party (Linden Gardens Trust Ltd v Lenesta Sludge Disposals Ltd [1994] 1 AC 85, applied in Australian courts).',
    relatedClauses: [
      'general-entire-agreement',
      'miscellaneous-amendments',
      'miscellaneous-notices',
    ],
    riskLevel: 'medium',
    keywords: [
      'assignment',
      'novation',
      'transfer',
      'change of control',
      'related body corporate',
      'consent',
    ],
    commonIn: [
      'Service agreements',
      'Licence agreements',
      'Joint venture agreements',
      'Franchise agreements',
      'Supply agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'general-force-majeure',
    title: 'Force Majeure',
    slug: 'force-majeure',
    category: 'general',
    summary:
      'Excuses a party from performing its obligations when performance is prevented by extraordinary events beyond its reasonable control.',
    description:
      'A force majeure clause relieves a party from liability for failure to perform its contractual obligations where performance is prevented, hindered, or delayed by events beyond the party\'s reasonable control. Unlike some civil law jurisdictions, Australian common law does not imply a force majeure doctrine into contracts; therefore, express contractual provision is essential.\n\nThe clause should clearly define what constitutes a force majeure event, typically including natural disasters, war, terrorism, pandemics, government action, and other events that are unforeseeable and beyond the reasonable control of the affected party. It should also set out the procedural requirements, such as prompt notification to the other party, the obligation to mitigate the effects of the event, and the consequences if the force majeure event continues for an extended period.\n\nDrafters should carefully consider whether certain events, such as pandemics, epidemics, or government lockdowns, should be expressly included in the definition. The clause should also address the relationship between force majeure and the common law doctrine of frustration, which may discharge the contract entirely if the event renders performance impossible or radically different from what was contemplated.',
    sampleText:
      'Neither party is liable for any failure to perform, or delay in performing, its obligations under this Agreement to the extent that such failure or delay results from a Force Majeure Event. A Force Majeure Event means any event beyond the reasonable control of the affected party, including but not limited to: acts of God, flood, fire, earthquake, epidemic, pandemic, acts of war or terrorism, civil unrest, strikes or industrial action (other than of the affected party\'s own employees), or any law, regulation, or order of any government authority. The affected party must: (a) notify the other party in writing as soon as reasonably practicable after becoming aware of the Force Majeure Event; (b) use all reasonable endeavours to mitigate the effect of the Force Majeure Event; and (c) resume performance as soon as reasonably practicable after the Force Majeure Event ceases.',
    draftingNotes:
      'Tailor the list of force majeure events to the specific agreement and industry. Consider whether the clause should include a long-stop termination right if the force majeure event continues beyond a specified period (e.g., 90 or 180 days). Address whether payment obligations are excused during a force majeure event. Consider whether the clause should expressly exclude events that were foreseeable at the time of contracting. Ensure the mitigation obligation is appropriately calibrated.',
    australianLawContext:
      'Australian common law does not recognise force majeure as an implied term; it must be expressly included in the contract. The related doctrine of frustration may apply where an unforeseen event renders contractual performance impossible or radically different (Codelfa Construction Pty Ltd v State Rail Authority of NSW (1982) 149 CLR 337). However, frustration is narrow in scope and discharges the contract entirely, unlike force majeure which typically suspends performance. The COVID-19 pandemic prompted significant judicial and commercial consideration of force majeure clauses in Australia.',
    relatedClauses: [
      'general-termination',
      'liability-force-majeure-liability',
      'liability-limitation-of-liability',
    ],
    riskLevel: 'medium',
    keywords: [
      'force majeure',
      'act of God',
      'pandemic',
      'frustration',
      'impossibility',
      'beyond reasonable control',
    ],
    commonIn: [
      'Construction contracts',
      'Supply agreements',
      'Service agreements',
      'Event contracts',
      'Distribution agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'general-entire-agreement',
    title: 'Entire Agreement',
    slug: 'entire-agreement',
    category: 'general',
    summary:
      'Confirms that the written agreement constitutes the complete understanding between the parties and supersedes all prior negotiations and representations.',
    description:
      'An entire agreement clause (also known as a merger or integration clause) establishes that the written contract represents the whole agreement between the parties and supersedes all prior discussions, negotiations, representations, and agreements. Its primary purpose is to prevent a party from relying on statements or promises made during pre-contractual negotiations that are not reflected in the final written agreement.\n\nIn Australian contract law, this clause operates to limit the scope of the contractual obligations to those expressly set out in the written document. However, it is important to note that entire agreement clauses do not necessarily prevent claims based on misleading or deceptive conduct under section 18 of the Australian Consumer Law, as statutory rights generally cannot be excluded by contract.\n\nDrafters should consider whether the clause should include an acknowledgement that neither party has relied on any representations not contained in the agreement. Such a "no reliance" statement strengthens the clause but must be carefully worded to avoid being characterised as an unfair contract term in standard form contracts.',
    sampleText:
      'This Agreement, together with any schedules and annexures, constitutes the entire agreement between the parties with respect to its subject matter and supersedes all prior negotiations, representations, understandings, and agreements between the parties, whether written or oral. Each party acknowledges that in entering into this Agreement it has not relied on, and shall have no right or remedy in respect of, any statement, representation, assurance, or warranty (whether made negligently or innocently) other than as expressly set out in this Agreement. Nothing in this clause excludes or limits any liability for fraud or any right or remedy arising under the Australian Consumer Law that cannot be excluded, restricted, or modified by agreement.',
    draftingNotes:
      'Include the Australian Consumer Law carve-out to ensure the clause does not purport to exclude non-excludable statutory rights. Consider whether schedules, annexures, and other documents should be expressly incorporated. If there are side letters or related agreements, ensure these are either incorporated by reference or expressly excluded. The "no reliance" acknowledgement strengthens the clause but should be reviewed for enforceability in the context of standard form contracts subject to unfair contract terms provisions.',
    australianLawContext:
      'Entire agreement clauses are generally enforceable in Australia but do not prevent claims under section 18 of the Australian Consumer Law (Schedule 2 to the Competition and Consumer Act 2010 (Cth)) for misleading or deceptive conduct. In Campbell v Backoffice Investments Pty Ltd (2009) 238 CLR 304, the High Court held that an entire agreement clause is relevant but not determinative when considering whether a collateral contract exists. The unfair contract terms regime (Part 2-3 of the Australian Consumer Law, as amended by the Treasury Laws Amendment (More Competition, Better Prices) Act 2022 (Cth)) may render certain entire agreement provisions void in standard form contracts.',
    relatedClauses: [
      'miscellaneous-entire-agreement-misc',
      'miscellaneous-amendments',
      'general-confidentiality',
    ],
    riskLevel: 'low',
    keywords: [
      'entire agreement',
      'merger clause',
      'integration clause',
      'supersedes',
      'prior negotiations',
      'whole agreement',
    ],
    commonIn: [
      'All commercial agreements',
      'Service agreements',
      'Supply agreements',
      'Licence agreements',
      'Sale of business contracts',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
];
