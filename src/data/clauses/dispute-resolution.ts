import type { Clause } from '../types';

export const disputeResolutionClauses: Clause[] = [
  {
    id: 'dispute-resolution-arbitration',
    title: 'Arbitration',
    slug: 'arbitration',
    category: 'dispute-resolution',
    summary:
      'Requires the parties to refer disputes to binding arbitration rather than litigation, specifying the arbitral rules, seat, and number of arbitrators.',
    description:
      'An arbitration clause provides that disputes arising out of or in connection with the agreement will be resolved by binding arbitration rather than court litigation. Arbitration offers several advantages, including confidentiality, flexibility of procedure, the ability to select arbitrators with relevant expertise, and (in international disputes) the enforceability of arbitral awards under the New York Convention.\n\nIn Australia, domestic commercial arbitration is governed by the Commercial Arbitration Acts of each state and territory, which are based on the UNCITRAL Model Law on International Commercial Arbitration. International arbitration is governed by the International Arbitration Act 1974 (Cth). The Australian Centre for International Commercial Arbitration (ACICA) is Australia\'s leading international arbitral institution and administers arbitrations under the ACICA Arbitration Rules.\n\nThe clause should specify the arbitral institution and rules, the seat (or legal place) of the arbitration, the number of arbitrators, the language of the arbitration, and any procedural preferences. Practitioners should consider whether to include a multi-tiered dispute resolution mechanism that requires negotiation or mediation before arbitration, and whether to carve out certain types of disputes (such as applications for injunctive relief) from the arbitration obligation.',
    sampleText:
      'Any dispute arising out of or in connection with this Agreement, including any question regarding its existence, validity, or termination, must be referred to and finally resolved by arbitration administered by the Australian Centre for International Commercial Arbitration (ACICA) in accordance with the ACICA Arbitration Rules. The seat of the arbitration shall be Sydney, New South Wales, Australia. The arbitral tribunal shall consist of a single arbitrator appointed in accordance with the ACICA Arbitration Rules. The language of the arbitration shall be English. The award of the arbitral tribunal shall be final and binding on the parties and may be entered as a judgment in any court of competent jurisdiction. Nothing in this clause prevents a party from seeking urgent interim or interlocutory relief from a court of competent jurisdiction.',
    draftingNotes:
      'Select the appropriate arbitral institution and rules (e.g., ACICA, ICC, SIAC, or ad hoc arbitration under the UNCITRAL Arbitration Rules). Specify the seat of the arbitration, as this determines the procedural law governing the arbitration and the courts that have supervisory jurisdiction. Consider the number of arbitrators (one for smaller disputes, three for larger or more complex matters). Include a carve-out for urgent interlocutory relief to preserve the ability to seek injunctions from a court. Consider whether the clause should include a confidentiality provision specific to the arbitration. Address the allocation of arbitration costs. Consider the interaction with any governing law and jurisdiction clause. For international agreements, ensure the clause is compatible with the New York Convention for enforcement purposes.',
    australianLawContext:
      'The International Arbitration Act 1974 (Cth) gives effect to the UNCITRAL Model Law and the New York Convention in Australia, providing a framework for the recognition and enforcement of international arbitral awards. The Commercial Arbitration Acts of each state and territory (e.g., Commercial Arbitration Act 2010 (NSW), Commercial Arbitration Act 2011 (Vic)) govern domestic arbitration and are also based on the Model Law. ACICA is Australia\'s leading international arbitration institution and has its own rules. Australian courts have generally adopted a pro-arbitration approach, giving effect to arbitration agreements and limiting the grounds for setting aside or refusing enforcement of awards.',
    relatedClauses: [
      'dispute-resolution-governing-law',
      'dispute-resolution-jurisdiction',
      'dispute-resolution-mediation',
      'dispute-resolution-dispute-escalation',
      'dispute-resolution-cost-of-dispute-resolution',
    ],
    riskLevel: 'medium',
    keywords: [
      'arbitration',
      'ACICA',
      'arbitral award',
      'binding arbitration',
      'UNCITRAL',
      'New York Convention',
      'alternative dispute resolution',
    ],
    commonIn: [
      'international commercial agreements',
      'joint venture agreements',
      'construction contracts',
      'licensing agreements',
      'shareholder agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'dispute-resolution-governing-law',
    title: 'Governing Law',
    slug: 'governing-law',
    category: 'dispute-resolution',
    summary:
      'Specifies the law that governs the interpretation, validity, and enforcement of the agreement.',
    description:
      'A governing law clause (also referred to as a choice of law or applicable law clause) specifies the body of law that will govern the agreement, including questions of interpretation, validity, performance, and enforcement. In Australia, the parties are generally free to choose the governing law of their agreement, and Australian courts will give effect to a valid choice of law clause.\n\nThe choice of governing law is important because it determines the substantive legal principles that apply to the interpretation of the contract, the rights and obligations of the parties, and the remedies available in the event of a breach. In the Australian context, there can be material differences between Commonwealth, state, and territory legislation, and the governing law clause should specify both the country and the relevant state or territory.\n\nPractitioners should consider the governing law in conjunction with the jurisdiction and dispute resolution clauses. It is generally advisable (though not mandatory) for the governing law and the jurisdiction to be aligned. In international agreements, the choice of governing law may also be influenced by considerations of neutrality, the sophistication of the relevant legal system, and the enforceability of judgments or arbitral awards.',
    sampleText:
      'This Agreement is governed by and must be construed in accordance with the laws of New South Wales, Australia. Each party irrevocably submits to the non-exclusive jurisdiction of the courts of New South Wales and the Federal Court of Australia, and any courts competent to hear appeals from those courts, in respect of any proceedings arising out of or in connection with this Agreement. Each party irrevocably waives any objection to the venue of any proceedings on the ground that the proceedings have been brought in an inconvenient forum.',
    draftingNotes:
      'Specify the governing law by reference to a particular state or territory (e.g., "the laws of New South Wales, Australia") rather than simply "the laws of Australia", as many relevant laws are enacted at the state and territory level. Consider whether the jurisdiction clause should provide for exclusive or non-exclusive jurisdiction. If exclusive jurisdiction is chosen, be aware that this may be unenforceable in some circumstances or may conflict with arbitration provisions. Include a waiver of inconvenient forum objections. Consider the interaction with any arbitration clause. In international agreements, consider whether the United Nations Convention on Contracts for the International Sale of Goods (CISG) should be excluded (it applies by default to international sale of goods contracts between parties in Contracting States).',
    australianLawContext:
      'Australian courts apply the common law choice of law rules to determine the applicable law in the absence of a valid choice of law clause. The rules differ depending on whether the claim is contractual, tortious, or statutory. For contracts, the governing law is generally determined by the parties\' choice or, in the absence of choice, the law of the jurisdiction with the closest and most real connection to the contract. Australian courts will generally give effect to a valid choice of law clause, subject to the application of mandatory statutory provisions (such as the Australian Consumer Law). The Foreign States Immunities Act 1985 (Cth) may be relevant where a foreign government entity is a party.',
    relatedClauses: [
      'dispute-resolution-jurisdiction',
      'dispute-resolution-arbitration',
      'dispute-resolution-mediation',
    ],
    riskLevel: 'low',
    keywords: [
      'governing law',
      'choice of law',
      'applicable law',
      'jurisdiction',
      'construction',
      'interpretation',
    ],
    commonIn: [
      'commercial agreements',
      'service agreements',
      'supply agreements',
      'licence agreements',
      'joint venture agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'dispute-resolution-jurisdiction',
    title: 'Jurisdiction',
    slug: 'jurisdiction',
    category: 'dispute-resolution',
    summary:
      'Identifies the courts that will have jurisdiction to hear and determine disputes arising under or in connection with the agreement.',
    description:
      'A jurisdiction clause (also referred to as a forum selection clause or submission to jurisdiction clause) specifies the court or courts that will have jurisdiction to hear and determine disputes arising out of or in connection with the agreement. The clause may provide for exclusive jurisdiction (only the nominated court may hear disputes) or non-exclusive jurisdiction (the nominated court may hear disputes, but the parties are not precluded from commencing proceedings in another court).\n\nIn Australia, jurisdiction clauses are generally enforceable, although the court retains a residual discretion to decline jurisdiction where it would be inappropriate to exercise it (for example, on forum non conveniens grounds). The choice of jurisdiction is important because it determines the procedural rules that will apply, the availability of certain remedies, and the enforceability of any resulting judgment.\n\nPractitioners should consider the jurisdiction clause in conjunction with the governing law clause. While it is not strictly necessary for the two to be aligned, choosing a forum that applies the governing law of the contract can avoid the complexity of a court being required to apply foreign law. In international agreements, the jurisdiction clause may interact with arbitration provisions, and carve-outs for specific types of claims (such as intellectual property disputes or applications for interlocutory relief) should be considered.',
    sampleText:
      'Each party irrevocably submits to the exclusive jurisdiction of the courts of Victoria, Australia, and the Federal Court of Australia sitting in Victoria, and any courts competent to hear appeals from those courts, in respect of all proceedings arising out of or in connection with this Agreement. Each party irrevocably waives any objection to the venue of any proceedings on the ground that the proceedings have been brought in an inconvenient forum. Nothing in this clause limits the right of a party to seek interim or interlocutory relief in any court of competent jurisdiction.',
    draftingNotes:
      'Decide between exclusive and non-exclusive jurisdiction. Exclusive jurisdiction provides certainty but may limit flexibility. Non-exclusive jurisdiction allows proceedings in other courts but may result in parallel proceedings. Include references to both the relevant state or territory courts and the Federal Court of Australia, as subject matter jurisdiction may vary. Include a waiver of inconvenient forum objections. Consider including a carve-out for applications for interlocutory or injunctive relief. Ensure consistency with the governing law clause and any arbitration clause. In international agreements, consider the enforceability of jurisdiction clauses under the relevant international conventions and bilateral treaties.',
    australianLawContext:
      'Australian courts will generally give effect to jurisdiction clauses, but retain a discretion to decline jurisdiction in appropriate cases. The High Court of Australia in Akai Pty Ltd v People\'s Insurance Co Ltd (1996) 188 CLR 418 held that exclusive jurisdiction clauses are prima facie enforceable but may be displaced by strong reasons. The Federal Court of Australia has jurisdiction under Commonwealth legislation, including the Corporations Act 2001 (Cth), the Competition and Consumer Act 2010 (Cth), and various intellectual property statutes. State and territory Supreme Courts have inherent jurisdiction in civil matters. The Service and Execution of Process Act 1992 (Cth) facilitates the service and enforcement of process between states and territories.',
    relatedClauses: [
      'dispute-resolution-governing-law',
      'dispute-resolution-arbitration',
      'dispute-resolution-mediation',
    ],
    riskLevel: 'low',
    keywords: [
      'jurisdiction',
      'forum selection',
      'exclusive jurisdiction',
      'non-exclusive jurisdiction',
      'submission',
      'forum non conveniens',
    ],
    commonIn: [
      'commercial agreements',
      'service agreements',
      'supply agreements',
      'licence agreements',
      'international agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'dispute-resolution-mediation',
    title: 'Mediation',
    slug: 'mediation',
    category: 'dispute-resolution',
    summary:
      'Requires the parties to attempt to resolve disputes through mediation before commencing arbitration or litigation.',
    description:
      'A mediation clause requires the parties to submit disputes to mediation as a prerequisite to commencing arbitration or court proceedings. Mediation is a voluntary, confidential process in which an independent mediator assists the parties in reaching a mutually acceptable resolution. Unlike arbitration or litigation, mediation is non-binding unless the parties reach a settlement agreement, which can then be recorded as a binding contract.\n\nMediation offers significant advantages, including preservation of commercial relationships, cost savings, speed, and flexibility. In Australia, courts increasingly encourage (and in some cases require) parties to attempt mediation before proceeding to trial. Many Australian courts have power to refer disputes to mediation, and failure to participate in good faith in mediation may have costs consequences.\n\nThe clause should specify the mediation rules and institution (such as the Australian Disputes Centre (ADC) or Resolution Institute), the process for appointing the mediator, the timeframe within which mediation must be completed, and the consequences if mediation does not result in a resolution. Practitioners should draft the clause to ensure it does not operate as a barrier to seeking urgent interlocutory relief.',
    sampleText:
      'If a dispute arises out of or in connection with this Agreement, a party must not commence arbitration or court proceedings (except proceedings seeking urgent interlocutory relief) unless it has first complied with this clause. The party claiming that a dispute has arisen must give written notice to the other party specifying the nature of the dispute. Within 14 days of receipt of such notice, senior representatives of the parties must meet and use reasonable endeavours to resolve the dispute through negotiation. If the dispute is not resolved within 28 days of the notice, the parties must submit the dispute to mediation administered by the Australian Disputes Centre (ADC) in accordance with the ADC Mediation Guidelines. The mediator shall be appointed by agreement of the parties or, failing agreement within 7 days, by the ADC. Each party must participate in the mediation in good faith.',
    draftingNotes:
      'Specify the mediation institution and rules. Common choices in Australia include the Australian Disputes Centre (ADC), Resolution Institute, and the Law Society mediation panels. Set realistic timeframes for each stage of the dispute resolution process. Include an obligation to participate in good faith, as a bare obligation to mediate may not be enforceable. Include a carve-out for urgent interlocutory relief. Specify the allocation of mediation costs (typically shared equally). Consider whether the mediation should be conducted in a particular location. Address confidentiality of the mediation process and any information disclosed during mediation. Consider whether the clause should form part of a multi-tiered dispute resolution mechanism (negotiation, then mediation, then arbitration or litigation).',
    australianLawContext:
      'Australian courts have the power to refer disputes to mediation under their respective court rules and legislation (e.g., Civil Procedure Act 2005 (NSW) s 26, Supreme Court Act 1986 (Vic) s 24A). The enforceability of mediation clauses depends on the specificity of the obligation; clauses that impose a mere "agreement to agree" may not be enforceable, while clauses that specify a defined mediation process with a recognised institution are more likely to be enforced. The High Court of Australia in United Group Rail Services Ltd v Rail Corporation New South Wales (2009) 127 Con LR 202 considered the enforceability of dispute resolution clauses. Mediation is confidential, and evidence of mediation communications is generally inadmissible under the Evidence Act 1995 (Cth) and equivalent state legislation.',
    relatedClauses: [
      'dispute-resolution-arbitration',
      'dispute-resolution-dispute-escalation',
      'dispute-resolution-governing-law',
      'dispute-resolution-cost-of-dispute-resolution',
    ],
    riskLevel: 'low',
    keywords: [
      'mediation',
      'ADR',
      'alternative dispute resolution',
      'negotiation',
      'settlement',
      'good faith',
      'mediator',
    ],
    commonIn: [
      'commercial agreements',
      'construction contracts',
      'franchise agreements',
      'partnership agreements',
      'joint venture agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'dispute-resolution-dispute-escalation',
    title: 'Dispute Escalation',
    slug: 'dispute-escalation',
    category: 'dispute-resolution',
    summary:
      'Establishes a structured, multi-tiered process for the escalation and resolution of disputes, from operational management through to senior executive negotiation.',
    description:
      'A dispute escalation clause establishes a structured, multi-tiered process for the resolution of disputes before they are referred to formal dispute resolution mechanisms such as mediation, arbitration, or litigation. The clause typically provides for disputes to be escalated through successive levels of management within each party\'s organisation, with specified timeframes at each level.\n\nThe rationale for a dispute escalation mechanism is that many commercial disputes can be resolved efficiently through direct negotiation between the parties\' representatives, without the cost and disruption of formal dispute resolution. By requiring disputes to be escalated to progressively more senior levels of management, the clause ensures that decision-makers with appropriate authority are involved in the resolution process.\n\nThe clause should specify the management levels involved at each tier, the timeframe for each tier, and the trigger for escalation to the next tier. It should also specify what happens if the dispute is not resolved through the escalation process (i.e., referral to mediation, arbitration, or litigation). Practitioners should ensure that the escalation process does not create unreasonable delays, particularly in time-sensitive situations.',
    sampleText:
      'If a dispute arises out of or in connection with this Agreement, the parties must attempt to resolve the dispute in accordance with the following escalation process before commencing formal dispute resolution proceedings: (a) Tier 1: within 5 Business Days of a party giving written notice of the dispute, the project managers (or equivalent operational representatives) of each party must meet and attempt to resolve the dispute; (b) Tier 2: if the dispute is not resolved within 10 Business Days of the Tier 1 meeting, the matter must be escalated to the senior managers of each party, who must meet and attempt to resolve the dispute within a further 10 Business Days; (c) Tier 3: if the dispute remains unresolved, the matter must be escalated to the chief executive officers (or nominees) of each party, who must meet and attempt to resolve the dispute within a further 10 Business Days. If the dispute is not resolved through this escalation process, either party may refer the dispute to mediation in accordance with clause [X].',
    draftingNotes:
      'Define the management levels involved at each tier with sufficient specificity (by title or role). Set realistic but not excessive timeframes for each tier. Consider the total timeframe for the escalation process and ensure it does not create undue delay. Include an obligation to participate in good faith at each tier. Ensure that the escalation process integrates with the mediation, arbitration, or litigation clause. Include a carve-out for urgent interlocutory relief and for disputes that are not amenable to resolution through negotiation (e.g., disputes about matters of law). Consider whether the escalation process should be mandatory or merely optional. Address the situation where a party fails to participate in the escalation process.',
    australianLawContext:
      'Australian courts have considered the enforceability of multi-tiered dispute resolution clauses. The key principle is that a clause must impose sufficiently certain and defined obligations to be enforceable. In United Group Rail Services Ltd v Rail Corporation New South Wales (2009) 127 Con LR 202, the NSW Court of Appeal held that a dispute resolution clause requiring good faith negotiation was enforceable as a condition precedent to litigation. Clauses that are vague or impose merely an "agreement to agree" may not be enforceable. Practitioners should draft each tier of the escalation process with sufficient detail and specificity to enhance enforceability.',
    relatedClauses: [
      'dispute-resolution-mediation',
      'dispute-resolution-arbitration',
      'dispute-resolution-governing-law',
      'dispute-resolution-cost-of-dispute-resolution',
    ],
    riskLevel: 'low',
    keywords: [
      'dispute escalation',
      'tiered dispute resolution',
      'negotiation',
      'escalation process',
      'senior management',
      'good faith',
    ],
    commonIn: [
      'construction contracts',
      'outsourcing agreements',
      'managed services agreements',
      'joint venture agreements',
      'government contracts',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'dispute-resolution-cost-of-dispute-resolution',
    title: 'Costs of Dispute Resolution',
    slug: 'cost-of-dispute-resolution',
    category: 'dispute-resolution',
    summary:
      'Allocates the costs of dispute resolution proceedings, including legal fees, arbitration or mediation fees, and expert costs, between the parties.',
    description:
      'A costs of dispute resolution clause addresses the allocation of costs associated with the resolution of disputes, including legal fees, arbitration or mediation fees, expert fees, and other disbursements. In the absence of a contractual provision, the allocation of costs in Australian litigation generally follows the principle that "costs follow the event" (i.e., the unsuccessful party pays the reasonable costs of the successful party). However, in arbitration and mediation, the allocation of costs is governed by the applicable arbitral rules and any agreement between the parties.\n\nThe clause may adopt various approaches to cost allocation, including: each party bears its own costs regardless of the outcome; costs follow the event (the losing party pays); costs are shared equally; or the tribunal or court has discretion to allocate costs. The chosen approach may influence the parties\' behaviour in relation to dispute resolution, including their willingness to settle.\n\nPractitioners should consider the cost allocation approach in the context of the overall dispute resolution mechanism. In mediation, costs are typically shared equally, as the process is collaborative. In arbitration and litigation, a costs-follow-the-event approach provides an incentive for parties to assess their claims realistically and to engage in settlement discussions.',
    sampleText:
      'Unless otherwise agreed, the costs of any mediation under this Agreement will be shared equally by the parties, and each party will bear its own costs of legal representation in connection with the mediation. In any arbitration or litigation arising out of or in connection with this Agreement, costs (including reasonable legal fees and disbursements) will be allocated by the arbitral tribunal or court in its discretion, having regard to the outcome of the proceedings and the conduct of the parties. Without limiting the foregoing, if a party has failed to participate in good faith in any dispute resolution process required under this Agreement before commencing proceedings, the tribunal or court may take that failure into account in allocating costs. The parties acknowledge that any offer of compromise or Calderbank offer made by a party may be taken into account by the tribunal or court in determining costs.',
    draftingNotes:
      'Consider the cost allocation approach for each stage of the dispute resolution process separately (negotiation, mediation, arbitration, litigation). For mediation, sharing costs equally is standard practice. For arbitration, the ACICA Arbitration Rules and other institutional rules contain default provisions on costs that may be varied by agreement. Consider whether to include a provision allowing for indemnity costs in cases of unreasonable conduct. Address the impact of Calderbank offers (offers to settle made "without prejudice save as to costs") on costs allocation. Consider whether to include a cap on recoverable costs. Address the costs of experts, witnesses, and interpreters. Ensure the costs provision is consistent with the overall dispute resolution mechanism.',
    australianLawContext:
      'In Australian litigation, costs generally follow the event under the relevant court rules (e.g., Uniform Civil Procedure Rules 2005 (NSW) r 42.1, Supreme Court (General Civil Procedure) Rules 2015 (Vic) r 63.01). The court has a broad discretion to depart from this general rule. Calderbank offers (named after Calderbank v Calderbank [1975] 3 All ER 333) may be taken into account in costs determinations. In arbitration, the allocation of costs is governed by the applicable arbitral rules and the tribunal\'s discretion. The ACICA Arbitration Rules provide that the tribunal may apportion costs between the parties. The Civil Dispute Resolution Act 2011 (Cth) requires parties in civil proceedings in the Federal Court and Federal Circuit Court to file genuine steps statements, and failure to take genuine steps may have costs consequences.',
    relatedClauses: [
      'dispute-resolution-arbitration',
      'dispute-resolution-mediation',
      'dispute-resolution-dispute-escalation',
      'dispute-resolution-jurisdiction',
    ],
    riskLevel: 'medium',
    keywords: [
      'costs',
      'legal fees',
      'arbitration costs',
      'mediation costs',
      'Calderbank offer',
      'costs follow the event',
      'indemnity costs',
    ],
    commonIn: [
      'commercial agreements',
      'construction contracts',
      'joint venture agreements',
      'shareholder agreements',
      'franchise agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
];
