import type { Clause } from '../types';

export const liabilityClauses: Clause[] = [
  {
    id: 'liability-limitation-of-liability',
    title: 'Limitation of Liability',
    slug: 'limitation-of-liability',
    category: 'liability',
    summary:
      'Caps the total liability of one or both parties under the agreement at a specified amount.',
    description:
      'A limitation of liability clause places a ceiling on the aggregate amount that a party may be required to pay for all claims arising under or in connection with the agreement. This is one of the most heavily negotiated clauses in commercial contracts, as it directly affects the risk allocation between the parties.\n\nThe cap may be expressed as a fixed dollar amount, a multiple of fees paid, or by reference to the value of insurance cover. It is common to exclude certain categories of liability from the cap, such as liability for death or personal injury, fraud, wilful misconduct, or breaches of confidentiality or IP obligations.\n\nUnder Australian Consumer Law, parties cannot exclude or limit liability for failures to comply with consumer guarantees, except to the extent permitted by section 64A of the ACL. This means that any limitation of liability clause must be carefully drafted to carve out statutory rights that cannot be limited.',
    sampleText:
      'Subject to clauses [X] and [Y], the maximum aggregate liability of each party arising out of or in connection with this Agreement, whether in contract, tort (including negligence), statute, or otherwise, must not exceed the total Fees paid or payable under this Agreement in the twelve (12) month period immediately preceding the event giving rise to the liability. Nothing in this Agreement excludes or limits a party\'s liability for: (a) death or personal injury caused by its negligence; (b) fraud or wilful misconduct; (c) any liability that cannot be excluded or limited by applicable law, including liability under the Australian Consumer Law to the extent it applies; or (d) breach of its obligations under clause [Confidentiality] or clause [IP].',
    draftingNotes:
      'Consider whether the cap should be mutual or different for each party. Common cap formulations include: total fees paid, 12 months\' fees, or a fixed sum. Ensure carve-outs are appropriate and include at minimum: death/personal injury, fraud, wilful misconduct, and non-excludable statutory liability. Consider whether IP indemnity obligations should be subject to or excluded from the cap. The cap should be commercially proportionate to the risk profile.',
    australianLawContext:
      'Limitations of liability are generally enforceable in Australia between commercial parties. However, section 64A of the Australian Consumer Law limits the ability to exclude consumer guarantees (ss 51-64 ACL). For services, liability for breach of guarantees other than guarantees of due care and skill and fitness for purpose may be limited to re-supply or payment of re-supply cost. The unfair contract terms regime (Part 2-3 ACL, as amended) may also apply to limitation clauses in standard form contracts with consumers or small businesses.',
    relatedClauses: [
      'liability-liability-cap',
      'liability-exclusion-of-consequential-damages',
      'general-indemnification',
    ],
    riskLevel: 'high',
    keywords: [
      'limitation of liability',
      'liability cap',
      'aggregate liability',
      'maximum liability',
      'risk allocation',
    ],
    commonIn: [
      'service agreements',
      'IT agreements',
      'supply agreements',
      'consultancy agreements',
      'outsourcing contracts',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'liability-force-majeure-liability',
    title: 'Force Majeure Liability Exclusion',
    slug: 'force-majeure-liability',
    category: 'liability',
    summary:
      'Excludes liability for failure to perform caused by force majeure events.',
    description:
      'A force majeure liability exclusion clause works in conjunction with a force majeure clause to clarify that a party is not liable for any loss, damage, or delay caused by or arising from a force majeure event. While the force majeure clause itself addresses the suspension or excuse of performance, the liability exclusion provides additional protection by expressly excluding claims for damages.\n\nThis clause is particularly important because, even where performance is excused under a force majeure clause, the affected party may still face claims for consequential losses suffered by the other party during the period of non-performance. The liability exclusion prevents such claims, subject to any agreed exceptions.\n\nPractitioners should ensure this clause is consistent with the force majeure definition and the overall liability framework of the agreement.',
    sampleText:
      'Neither party is liable to the other party for any loss, damage, cost, or expense of any nature arising from or in connection with a failure to perform, or delay in performing, any obligation under this Agreement to the extent that such failure or delay is caused by a Force Majeure Event, provided that the affected party has complied with its notification and mitigation obligations under clause [Force Majeure]. For the avoidance of doubt, this exclusion does not apply to any obligation to pay money that was due and payable prior to the occurrence of the Force Majeure Event.',
    draftingNotes:
      'Ensure this clause cross-references and is consistent with the force majeure clause. Consider whether payment obligations should be excluded from the force majeure protection. Address whether the exclusion applies to indirect and consequential losses as well as direct losses. Consider whether the exclusion should be subject to the affected party having taken reasonable steps to mitigate.',
    australianLawContext:
      'Force majeure liability exclusions are governed by general Australian contract law principles. There is no implied force majeure doctrine in Australian law; all such protections must be express. The related doctrine of frustration (Codelfa Construction Pty Ltd v State Rail Authority of NSW (1982) 149 CLR 337) may discharge the contract entirely, but does not provide for partial excuse of performance. Force majeure liability exclusions are particularly relevant in construction and infrastructure contracts governed by AS standards.',
    relatedClauses: [
      'general-force-majeure',
      'liability-limitation-of-liability',
      'liability-exclusion-of-consequential-damages',
    ],
    riskLevel: 'medium',
    keywords: [
      'force majeure',
      'liability exclusion',
      'excuse of performance',
      'unforeseeable events',
      'delay',
    ],
    commonIn: [
      'construction contracts',
      'supply agreements',
      'event contracts',
      'infrastructure contracts',
      'service agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'liability-warranty-disclaimer',
    title: 'Warranty Disclaimer',
    slug: 'warranty-disclaimer',
    category: 'liability',
    summary:
      'Excludes implied warranties and conditions to the maximum extent permitted by law.',
    description:
      'A warranty disclaimer clause seeks to exclude or limit implied warranties, conditions, and representations that might otherwise be implied into the agreement by common law or statute. This is an important risk management tool for suppliers and service providers, as implied terms can create obligations and liabilities that were not expressly negotiated.\n\nHowever, in Australia, the ability to disclaim warranties is significantly constrained by the Australian Consumer Law. Consumer guarantees under the ACL (including guarantees as to acceptable quality, fitness for purpose, and due care and skill) cannot be excluded by contract where the ACL applies. Any warranty disclaimer must therefore include a carve-out preserving the consumer\'s statutory rights.\n\nThe clause should clearly state which warranties are being disclaimed, acknowledge the limitations imposed by applicable law, and avoid overly broad language that may be characterised as an unfair contract term.',
    sampleText:
      'Except as expressly set out in this Agreement, and to the maximum extent permitted by applicable law, the Supplier excludes all conditions, warranties, guarantees, rights, and remedies implied by custom, statute, or the general law, including any implied warranty of merchantability, fitness for a particular purpose, or non-infringement. Nothing in this clause purports to exclude, restrict, or modify the application of any provision of the Australian Consumer Law (Schedule 2 to the Competition and Consumer Act 2010 (Cth)), or any equivalent state or territory legislation, the exclusion of which is prohibited by that legislation.',
    draftingNotes:
      'Always include a carve-out for non-excludable consumer guarantees under the Australian Consumer Law. Consider whether the disclaimer applies only to implied terms or also extends to representations made during negotiations. The disclaimer should not be so broad as to contradict express warranties given elsewhere in the agreement. In standard form contracts with consumers or small businesses, assess whether the disclaimer may constitute an unfair contract term.',
    australianLawContext:
      'The Australian Consumer Law (Schedule 2 to the Competition and Consumer Act 2010 (Cth)) implies consumer guarantees into contracts for the supply of goods and services to consumers. Sections 51-64 set out these guarantees, including acceptable quality (s 54), fitness for purpose (s 55), and due care and skill (s 60). Section 64 provides that these guarantees cannot be excluded by contract. Section 64A permits limitation (but not exclusion) of liability for breach of certain guarantees where the goods or services are not of a kind ordinarily acquired for personal use. The unfair contract terms regime (Part 2-3 ACL) may void broad warranty disclaimers in standard form contracts.',
    relatedClauses: [
      'warranties-product-warranty',
      'warranties-warranty-exclusions',
      'liability-limitation-of-liability',
    ],
    riskLevel: 'high',
    keywords: [
      'warranty disclaimer',
      'implied warranties',
      'consumer guarantees',
      'exclusion of liability',
      'ACL',
    ],
    commonIn: [
      'software licence agreements',
      'supply agreements',
      'service agreements',
      'technology agreements',
      'distribution agreements',
    ],
    status: 'use-with-caution',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'liability-liability-cap',
    title: 'Liability Cap',
    slug: 'liability-cap',
    category: 'liability',
    summary:
      'Sets a specific monetary ceiling on the total amount recoverable for claims under the agreement.',
    description:
      'A liability cap clause establishes a defined maximum amount that a party may be required to pay in respect of all claims arising under or in connection with the agreement. While similar to a limitation of liability, a liability cap may be structured differently, for example as a fixed sum, a percentage of contract value, or by reference to insurance proceeds.\n\nLiability caps are commonly structured in tiers, with different caps applying to different categories of liability. For example, general claims may be capped at 100% of annual fees, while liability for IP infringement or data breach may be capped at a higher multiple, and certain categories of liability (such as fraud or death) may be uncapped.\n\nThe cap must be commercially reasonable and proportionate to the value of the agreement and the risks involved. A cap that is disproportionately low may be vulnerable to challenge under the unfair contract terms provisions of the ACL in consumer and small business contexts.',
    sampleText:
      'The total aggregate liability of each party under or in connection with this Agreement shall not exceed the following amounts: (a) for General Claims: an amount equal to the total Fees paid or payable under this Agreement during the twelve (12) months immediately preceding the first event giving rise to the claim; (b) for IP Infringement Claims and Data Breach Claims: an amount equal to [two (2)] times the annual Fees; and (c) for Excluded Claims (being liability for death or personal injury, fraud, wilful misconduct, or breach of non-excludable statutory obligations): unlimited. "General Claims" means all claims other than IP Infringement Claims, Data Breach Claims, and Excluded Claims.',
    draftingNotes:
      'Structure the cap in tiers to reflect different risk categories. Define each claim category clearly. Consider whether the cap is per-claim or aggregate. Ensure excluded claims include at minimum: death/personal injury, fraud, and non-excludable statutory liability. Consider whether the cap should be mutual or asymmetric. The cap should bear a reasonable relationship to the contract value.',
    australianLawContext:
      'Liability caps are generally enforceable between commercial parties in Australia. However, they may be subject to challenge under the unfair contract terms regime (Part 2-3 ACL) in standard form contracts with consumers or small businesses, particularly if the cap is disproportionately low. The ACL also limits the ability to cap liability for breach of consumer guarantees under section 64A. Proportionate liability legislation in each state and territory may also affect how liability is allocated among multiple wrongdoers.',
    relatedClauses: [
      'liability-limitation-of-liability',
      'liability-exclusion-of-consequential-damages',
      'general-indemnification',
    ],
    riskLevel: 'high',
    keywords: [
      'liability cap',
      'maximum liability',
      'aggregate cap',
      'tiered liability',
      'excluded claims',
    ],
    commonIn: [
      'IT agreements',
      'service agreements',
      'outsourcing contracts',
      'consultancy agreements',
      'supply agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'liability-exclusion-of-consequential-damages',
    title: 'Exclusion of Consequential Loss',
    slug: 'exclusion-of-consequential-damages',
    category: 'liability',
    summary:
      'Excludes liability for indirect, special, or consequential loss arising from the agreement.',
    description:
      'An exclusion of consequential loss clause limits the types of loss that may be claimed by the innocent party in the event of breach. It typically excludes liability for indirect, special, or consequential damages, including loss of profit, loss of revenue, loss of business opportunity, loss of goodwill, and loss of anticipated savings.\n\nThe distinction between direct and consequential loss in Australian law has been the subject of significant judicial consideration. In Environmental Systems Pty Ltd v Peerless Holdings Pty Ltd [2008] VSCA 26, the Victorian Court of Appeal held that loss of profits could be either a direct or indirect consequence of breach, depending on the circumstances. This means that the categorisation of loss types depends on the particular facts rather than being inherently direct or indirect.\n\nGiven this uncertainty, best practice is to list the specific types of loss being excluded rather than relying solely on the label "consequential loss." This provides greater certainty and avoids disputes about characterisation.',
    sampleText:
      'Neither party is liable to the other party for any indirect, special, or consequential loss or damage arising out of or in connection with this Agreement, including but not limited to: (a) loss of profit or anticipated profit; (b) loss of revenue or anticipated revenue; (c) loss of business or business opportunity; (d) loss of goodwill or reputation; (e) loss of anticipated savings; or (f) loss of or corruption of data, whether or not such loss was foreseeable or the party was advised of the possibility of such loss. This exclusion does not apply to liability arising from a party\'s fraud, wilful misconduct, or breach of its confidentiality or intellectual property obligations under this Agreement.',
    draftingNotes:
      'List specific categories of excluded loss rather than relying solely on "consequential loss," given the uncertainty in Australian case law about what constitutes consequential loss. Include carve-outs for fraud, wilful misconduct, and key obligations such as confidentiality and IP. Consider whether data loss should be excluded, particularly in IT and data-related agreements where data loss may be the primary risk. Ensure this clause is consistent with the overall limitation of liability framework.',
    australianLawContext:
      'The characterisation of consequential loss under Australian law is uncertain. In Environmental Systems Pty Ltd v Peerless Holdings Pty Ltd [2008] VSCA 26, the Victorian Court of Appeal held that the term "consequential loss" may be interpreted by reference to the second limb of Hadley v Baxendale (1854), meaning losses not arising naturally but from special circumstances known to the parties. However, some courts have adopted broader interpretations. Best practice is to list specific excluded categories of loss. The Australian Consumer Law limitations on excluding liability for consumer guarantees also apply.',
    relatedClauses: [
      'liability-limitation-of-liability',
      'liability-liability-cap',
      'general-indemnification',
    ],
    riskLevel: 'high',
    keywords: [
      'consequential loss',
      'indirect loss',
      'loss of profit',
      'exclusion of liability',
      'special damages',
    ],
    commonIn: [
      'service agreements',
      'IT agreements',
      'supply agreements',
      'construction contracts',
      'consultancy agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'liability-third-party-indemnity',
    title: 'Third Party Indemnity',
    slug: 'third-party-indemnity',
    category: 'liability',
    summary:
      'Requires one party to indemnify the other against claims brought by third parties in connection with the agreement.',
    description:
      'A third party indemnity clause provides protection against claims by persons who are not parties to the agreement but who may suffer loss or damage as a result of acts or omissions in the performance of the contract. This is particularly important where one party\'s activities may expose the other to claims from customers, end users, employees, regulators, or other third parties.\n\nThe indemnity typically covers the cost of defending third party claims (including legal costs), any amounts paid in settlement or judgment, and related costs and expenses. The clause should include procedural requirements such as prompt notification of claims, the right to control the defence, and restrictions on settlement without consent.\n\nIn Australian practice, the enforceability and scope of indemnities are subject to common law principles, including the requirement for clear and unambiguous language to extend an indemnity to cover a party\'s own negligence.',
    sampleText:
      'The Supplier indemnifies the Customer against all losses, liabilities, damages, costs, and expenses (including reasonable legal costs) arising from or in connection with any claim by a third party that: (a) the Services were performed negligently or in breach of this Agreement; (b) the Deliverables infringe the intellectual property rights of a third party; or (c) any act or omission of the Supplier or its Personnel caused loss, damage, or injury to a third party. The Customer must: (i) promptly notify the Supplier in writing of any third party claim; (ii) allow the Supplier to control the defence and settlement of such claim (at the Supplier\'s cost); and (iii) provide reasonable assistance to the Supplier in the defence of the claim. The Supplier must not settle any third party claim without the Customer\'s prior written consent, such consent not to be unreasonably withheld.',
    draftingNotes:
      'Define the categories of third party claims covered by the indemnity. Include procedural requirements for claim notification, control of defence, and settlement. Consider whether the indemnity should be subject to the overall liability cap. Address the allocation of costs for defence and settlement. Ensure the language is sufficiently clear to cover the indemnifying party\'s own negligence if that is the intent (Andar Transport Pty Ltd v Brambles Ltd (2004) 217 CLR 424).',
    australianLawContext:
      'The enforceability of indemnity provisions in Australia requires clear and unambiguous language, particularly where the indemnity is intended to cover the indemnifying party\'s own negligence (Andar Transport Pty Ltd v Brambles Ltd (2004) 217 CLR 424). Proportionate liability legislation in each state and territory (e.g., Civil Liability Act 2002 (NSW) Part 4, Civil Liability Act 2003 (Qld) Chapter 2 Part 2) may limit the effectiveness of indemnities by apportioning liability among concurrent wrongdoers, although contractual indemnities may operate outside the proportionate liability regime in some circumstances.',
    relatedClauses: [
      'general-indemnification',
      'liability-limitation-of-liability',
      'intellectual-property-ip-ownership',
    ],
    riskLevel: 'high',
    keywords: [
      'third party',
      'indemnity',
      'claims',
      'defence',
      'settlement',
      'hold harmless',
    ],
    commonIn: [
      'service agreements',
      'IT agreements',
      'construction contracts',
      'product supply agreements',
      'professional services agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
];
