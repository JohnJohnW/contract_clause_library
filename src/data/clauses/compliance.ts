import type { Clause } from '../types';

export const complianceClauses: Clause[] = [
  {
    id: 'compliance-regulatory-compliance',
    title: 'Regulatory Compliance',
    slug: 'regulatory-compliance',
    category: 'compliance',
    summary:
      'Requires each party to comply with all applicable laws, regulations, and industry standards relevant to the performance of their obligations under the agreement.',
    description:
      'A regulatory compliance clause imposes a general obligation on the parties to conduct their activities in accordance with all applicable Commonwealth, state, and territory legislation, subordinate legislation, codes of practice, and industry standards. This is a foundational clause that establishes a baseline expectation of lawful conduct throughout the term of the agreement.\n\nSuch clauses are particularly important in regulated industries such as financial services, healthcare, telecommunications, and mining, where non-compliance can result in significant civil and criminal penalties. The clause may require parties to maintain all necessary licences, permits, and authorisations, and to promptly notify the other party of any regulatory changes that may affect the agreement.\n\nWhen drafting, practitioners should consider whether to include specific obligations relating to key regulatory regimes (such as the Competition and Consumer Act 2010 (Cth) or applicable workplace health and safety legislation) or whether a general compliance obligation is sufficient. The scope of the compliance obligation should be carefully tailored to the nature of the transaction and the regulatory environment in which the parties operate.',
    sampleText:
      'Each party must, at its own cost, comply with all applicable Laws in connection with the performance of its obligations under this Agreement. For the purposes of this clause, "Laws" means all Commonwealth, state, and territory legislation, subordinate legislation, regulations, by-laws, orders, awards, proclamations, mandatory codes of conduct, and industry standards applicable to the relevant party. Each party must obtain and maintain in full force and effect all licences, permits, consents, and authorisations necessary for the lawful performance of its obligations. A party must promptly notify the other party in writing of any material change in applicable Laws that may adversely affect the performance of this Agreement.',
    draftingNotes:
      'Consider defining "Laws" broadly to capture subordinate legislation, codes of practice, and industry standards. Where the agreement involves a regulated industry, consider adding specific compliance obligations. Include an obligation to maintain licences and permits. Consider whether breach of this clause should give rise to an immediate termination right or whether a cure period is appropriate. In cross-border transactions, clarify which jurisdiction\'s laws are captured.',
    australianLawContext:
      'The Competition and Consumer Act 2010 (Cth) (including the Australian Consumer Law in Schedule 2) is a key regulatory framework. The Corporations Act 2001 (Cth) imposes obligations on companies and their officers. Various industry-specific regulators (ASIC, APRA, ACCC, ACMA) administer compliance frameworks. Penalties for non-compliance can be significant under Commonwealth legislation, including civil penalty provisions and criminal offences.',
    relatedClauses: [
      'compliance-anti-bribery',
      'compliance-environmental-compliance',
      'compliance-health-and-safety',
      'compliance-audit-rights',
    ],
    riskLevel: 'high',
    keywords: [
      'regulatory',
      'compliance',
      'laws',
      'licences',
      'permits',
      'obligations',
      'industry standards',
    ],
    commonIn: [
      'supply agreements',
      'service agreements',
      'construction contracts',
      'government contracts',
      'franchise agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'compliance-anti-bribery',
    title: 'Anti-Bribery and Anti-Corruption',
    slug: 'anti-bribery',
    category: 'compliance',
    summary:
      'Prohibits the parties from engaging in bribery, corruption, or improper payments, and requires compliance with applicable anti-corruption legislation.',
    description:
      'An anti-bribery and anti-corruption clause is essential in modern commercial agreements, particularly those involving government contracting, international trade, or supply chains with exposure to corruption risk. The clause typically prohibits the offering, promising, giving, or receiving of bribes, facilitation payments, secret commissions, or other improper advantages, whether directly or through intermediaries.\n\nUnder Australian law, both domestic and foreign bribery are criminal offences. Division 70 of the Criminal Code Act 1995 (Cth) creates offences for bribing foreign public officials, while state and territory criminal legislation addresses domestic bribery and corruption. Corporations may also face liability under the Corporations Act 2001 (Cth) for failing to maintain adequate compliance systems.\n\nThe clause should require parties to maintain adequate anti-corruption policies and procedures, provide training to relevant personnel, and keep records sufficient to demonstrate compliance. Consider including representations and warranties regarding past conduct, as well as an obligation to report any suspected breach. A right of termination for breach of this clause is strongly recommended, given the severity of the legal and reputational consequences of non-compliance.',
    sampleText:
      'Each party warrants that it has not, and undertakes that it will not, directly or indirectly, offer, promise, give, or authorise the giving of any bribe, facilitation payment, secret commission, or other improper advantage to any person (including any public official, whether domestic or foreign) in connection with this Agreement. Each party must maintain and enforce adequate policies and procedures designed to prevent bribery and corruption. A party must promptly notify the other party in writing if it becomes aware of any actual or suspected breach of this clause. Breach of this clause constitutes a material breach entitling the non-breaching party to terminate this Agreement immediately by written notice.',
    draftingNotes:
      'Define key terms such as "bribe", "facilitation payment", "public official", and "improper advantage" clearly. Consider whether to prohibit facilitation payments outright or to adopt a risk-based approach. Include a right to terminate for breach without a cure period. Consider requiring periodic compliance certifications from the counterparty. In supply chain agreements, consider imposing flow-down obligations requiring the counterparty to include equivalent provisions in its subcontracts. Address record-keeping and audit rights in relation to anti-corruption compliance.',
    australianLawContext:
      'Division 70 of the Criminal Code Act 1995 (Cth) creates offences for bribing foreign public officials, with penalties including imprisonment for up to 10 years and substantial fines for corporations. State and territory legislation (e.g., Crimes Act 1900 (NSW), Criminal Code Act 1899 (Qld)) addresses domestic bribery. The Criminal Code also contains offences relating to secret commissions. Australia is a signatory to the OECD Anti-Bribery Convention and the United Nations Convention against Corruption.',
    relatedClauses: [
      'compliance-regulatory-compliance',
      'compliance-audit-rights',
      'compliance-export-control',
    ],
    riskLevel: 'high',
    keywords: [
      'anti-bribery',
      'anti-corruption',
      'facilitation payments',
      'secret commissions',
      'foreign public official',
      'ABAC',
    ],
    commonIn: [
      'government contracts',
      'international supply agreements',
      'joint venture agreements',
      'agency agreements',
      'consultancy agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'compliance-audit-rights',
    title: 'Audit Rights',
    slug: 'audit-rights',
    category: 'compliance',
    summary:
      'Grants one or both parties the right to audit the other party\'s records, systems, and processes to verify compliance with contractual obligations.',
    description:
      'An audit rights clause provides a mechanism for verifying that a party is performing its contractual obligations, including compliance with applicable laws, financial obligations, data protection requirements, and service levels. The clause typically grants the auditing party (or its authorised representatives) access to relevant records, premises, personnel, and systems, subject to reasonable notice and confidentiality obligations.\n\nAudit rights are particularly important in outsourcing arrangements, managed services agreements, supply chain contracts, and any agreement where one party relies on the other to handle sensitive information or perform critical functions. The clause should address the scope, frequency, and methodology of audits, as well as the allocation of costs.\n\nPractitioners should balance the auditing party\'s legitimate need for oversight against the audited party\'s operational requirements and confidentiality concerns. Consider including provisions for the audited party to remedy any deficiencies identified during the audit, and address what happens if a material non-compliance is discovered (including potential termination rights and indemnification).',
    sampleText:
      'The Supplier must maintain complete and accurate records in connection with the performance of its obligations under this Agreement. The Customer (or its authorised representative) may, upon not less than 10 Business Days\' prior written notice, conduct an audit of the Supplier\'s records, systems, processes, and premises to verify compliance with this Agreement. Audits will be conducted during normal business hours and in a manner that minimises disruption to the Supplier\'s operations. The Supplier must provide all reasonable assistance and access requested by the Customer for the purposes of an audit. The costs of each audit will be borne by the Customer, unless the audit reveals a material non-compliance, in which case the Supplier must bear the reasonable costs of the audit and promptly remedy the non-compliance.',
    draftingNotes:
      'Specify the minimum notice period for audits (commonly 10-30 business days). Define the scope of records and systems subject to audit. Consider limiting the frequency of audits (e.g., no more than once per annum) unless a material breach is suspected. Address confidentiality of audit findings. Consider whether the auditing party may engage third-party auditors and, if so, require them to enter into confidentiality undertakings. Include a remediation period for deficiencies and consequences for failure to remedy. Consider the interaction with data protection obligations if personal information is involved.',
    australianLawContext:
      'Audit rights provisions should be consistent with the Privacy Act 1988 (Cth) and Australian Privacy Principles where personal information is involved. In regulated industries, audit rights may complement obligations under prudential standards (e.g., APRA CPS 231 for outsourcing by regulated financial institutions). Government contracts typically include extensive audit rights under Commonwealth Procurement Rules and relevant state/territory procurement frameworks.',
    relatedClauses: [
      'compliance-regulatory-compliance',
      'compliance-anti-bribery',
      'data-protection-data-privacy',
      'performance-service-level-agreement',
    ],
    riskLevel: 'medium',
    keywords: [
      'audit',
      'inspection',
      'records',
      'verification',
      'access',
      'compliance monitoring',
    ],
    commonIn: [
      'outsourcing agreements',
      'managed services agreements',
      'supply agreements',
      'government contracts',
      'franchise agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'compliance-export-control',
    title: 'Export Controls and Sanctions',
    slug: 'export-control',
    category: 'compliance',
    summary:
      'Requires the parties to comply with applicable export control laws, trade sanctions, and restrictions on the transfer of controlled goods, technology, and services.',
    description:
      'An export control and sanctions clause addresses the parties\' obligations with respect to the international transfer of goods, technology, software, and services that may be subject to export controls or trade sanctions. In Australia, the Defence Trade Controls Act 2012 (Cth) regulates the export and supply of defence and strategic goods and technology listed in the Defence and Strategic Goods List. The Customs Act 1901 (Cth) and associated regulations impose additional export controls.\n\nThe clause is critical in agreements involving the supply of technology, dual-use goods, defence materiel, or services to foreign entities. It should require parties to obtain all necessary export permits and approvals, and to refrain from exporting or re-exporting controlled items to sanctioned destinations, entities, or individuals. Australia maintains autonomous sanctions under the Autonomous Sanctions Act 2011 (Cth), and parties must also comply with United Nations Security Council sanctions implemented through Commonwealth legislation.\n\nPractitioners should consider the specific goods, technology, or services being supplied, and whether they fall within controlled categories. The clause should address end-use and end-user restrictions, and may require the provision of end-user certificates or other assurances.',
    sampleText:
      'Each party must comply with all applicable export control laws, trade sanctions, and embargo regulations, including the Defence Trade Controls Act 2012 (Cth), the Customs Act 1901 (Cth), the Autonomous Sanctions Act 2011 (Cth), and any regulations made under those Acts. Neither party may export, re-export, or transfer any goods, technology, software, or services supplied under this Agreement to any destination, entity, or individual subject to applicable sanctions or export restrictions without first obtaining all required governmental approvals and permits. Each party represents and warrants that it is not listed on any applicable sanctions list maintained by the Australian Government or the United Nations Security Council.',
    draftingNotes:
      'Identify the specific export control regimes applicable to the goods, technology, or services being supplied. Consider whether to require end-user certificates or statements. Address deemed exports (i.e., disclosure of controlled technology to foreign nationals within Australia). Include representations regarding sanctions list status. Consider imposing flow-down obligations requiring counterparties to include equivalent provisions in subcontracts. Include a right of termination for breach. In technology licensing agreements, address restrictions on the transfer of technical data and source code.',
    australianLawContext:
      'The Defence Trade Controls Act 2012 (Cth) regulates the supply and export of goods and technology on the Defence and Strategic Goods List (DSGL). The Customs Act 1901 (Cth) provides a general framework for export controls. The Autonomous Sanctions Act 2011 (Cth) implements Australian autonomous sanctions, while the Charter of the United Nations Act 1945 (Cth) gives effect to UN Security Council sanctions. The Department of Defence administers export permits under the Defence Trade Controls Act. Penalties for non-compliance include criminal sanctions and significant fines.',
    relatedClauses: [
      'compliance-regulatory-compliance',
      'compliance-anti-bribery',
      'intellectual-property-technology-licence',
    ],
    riskLevel: 'high',
    keywords: [
      'export controls',
      'sanctions',
      'embargo',
      'defence trade controls',
      'DSGL',
      'controlled goods',
      'dual-use',
    ],
    commonIn: [
      'technology licence agreements',
      'defence contracts',
      'international supply agreements',
      'research collaboration agreements',
      'distribution agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'compliance-environmental-compliance',
    title: 'Environmental Compliance',
    slug: 'environmental-compliance',
    category: 'compliance',
    summary:
      'Requires the parties to comply with applicable environmental legislation and to minimise adverse environmental impacts arising from the performance of the agreement.',
    description:
      'An environmental compliance clause imposes obligations on the parties to conduct their activities in accordance with applicable environmental laws, regulations, and standards. In Australia, environmental regulation operates at both the Commonwealth and state/territory level. The Environment Protection and Biodiversity Conservation Act 1999 (Cth) (EPBC Act) is the principal Commonwealth environmental legislation, addressing matters of national environmental significance, including the protection of threatened species, ecological communities, and heritage places.\n\nState and territory legislation (such as the Environmental Protection Act 1994 (Qld), the Protection of the Environment Operations Act 1997 (NSW), and the Environment Protection Act 2017 (Vic)) imposes detailed requirements for pollution control, waste management, contaminated land remediation, and environmental impact assessment. Parties should also consider obligations arising under climate change legislation and voluntary sustainability frameworks.\n\nThe clause should require parties to hold all necessary environmental approvals, permits, and licences, to implement environmental management systems, and to report environmental incidents promptly. In construction, mining, and infrastructure contracts, environmental compliance obligations are often extensive and may be linked to specific environmental management plans.',
    sampleText:
      'Each party must comply with all applicable Environmental Laws in the performance of its obligations under this Agreement. For the purposes of this clause, "Environmental Laws" means all Commonwealth, state, and territory legislation, regulations, and mandatory codes of practice relating to the protection of the environment, including the Environment Protection and Biodiversity Conservation Act 1999 (Cth) and applicable state or territory environmental protection legislation. Each party must obtain and maintain all environmental approvals, permits, and licences required for its activities. A party must promptly notify the other party in writing of any environmental incident, including any spill, contamination, or unauthorised emission, arising in connection with this Agreement.',
    draftingNotes:
      'Define "Environmental Laws" broadly to capture Commonwealth and state/territory legislation. Consider whether to require the preparation and implementation of an environmental management plan. Include incident notification obligations with specific timeframes. Address liability for contamination and remediation costs. Consider whether environmental performance should be subject to key performance indicators. In construction and mining contracts, link environmental obligations to specific site conditions and approval requirements. Consider the interaction with workplace health and safety obligations.',
    australianLawContext:
      'The Environment Protection and Biodiversity Conservation Act 1999 (Cth) (EPBC Act) protects matters of national environmental significance and requires approval for actions that may have a significant impact. State and territory environmental protection legislation (e.g., Environmental Protection Act 1994 (Qld), Protection of the Environment Operations Act 1997 (NSW), Environment Protection Act 2017 (Vic)) imposes licensing, reporting, and remediation obligations. The National Greenhouse and Energy Reporting Act 2007 (Cth) requires reporting of greenhouse gas emissions. Penalties for environmental offences can be substantial, including both civil and criminal liability.',
    relatedClauses: [
      'compliance-regulatory-compliance',
      'compliance-health-and-safety',
      'liability-indemnification',
    ],
    riskLevel: 'high',
    keywords: [
      'environment',
      'environmental compliance',
      'EPBC Act',
      'pollution',
      'contamination',
      'emissions',
      'sustainability',
    ],
    commonIn: [
      'construction contracts',
      'mining agreements',
      'infrastructure contracts',
      'supply agreements',
      'property leases',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'compliance-health-and-safety',
    title: 'Health and Safety',
    slug: 'health-and-safety',
    category: 'compliance',
    summary:
      'Requires the parties to comply with applicable work health and safety legislation and to take all reasonably practicable steps to ensure the health and safety of workers and others.',
    description:
      'A health and safety clause establishes the parties\' obligations with respect to workplace health and safety (WHS) in connection with the performance of the agreement. In Australia, the model Work Health and Safety Act 2011 has been adopted (with some variations) by the Commonwealth and most states and territories, creating a harmonised national framework. The legislation imposes a primary duty of care on persons conducting a business or undertaking (PCBUs) to ensure, so far as is reasonably practicable, the health and safety of workers and other persons who may be affected by the work.\n\nThe clause is critical in agreements involving physical work activities, such as construction, maintenance, logistics, and manufacturing. It should address the allocation of WHS responsibilities between the parties, the management of shared workplaces, the preparation and implementation of safety management plans, and the reporting and investigation of safety incidents and near-misses.\n\nPractitioners should consider the specific WHS risks associated with the relevant activities and ensure that the clause reflects the duty of care obligations imposed by the WHS legislation. In principal-contractor and subcontractor arrangements, the clause should address the coordination of safety management and the flow-down of WHS obligations through the supply chain.',
    sampleText:
      'Each party must comply with the Work Health and Safety Act 2011 (Cth) (or equivalent state or territory legislation) and all associated regulations, codes of practice, and safety standards applicable to its activities under this Agreement. Each party must, so far as is reasonably practicable, ensure the health and safety of its workers and any other persons who may be affected by its activities. The Supplier must prepare, implement, and maintain a safety management plan appropriate to the nature and risks of the work. The Supplier must promptly notify the Customer of any notifiable incident (as defined in the WHS Act) arising in connection with the performance of this Agreement and must cooperate fully with any investigation.',
    draftingNotes:
      'Identify the applicable WHS legislation for each jurisdiction in which work will be performed. Define the parties\' respective WHS responsibilities clearly, particularly in multi-party or shared-workplace arrangements. Require the preparation of work-specific safety management plans. Include incident notification obligations consistent with statutory requirements (noting that notifiable incidents must generally be reported to the regulator). Address the provision of safety induction and training. Consider whether to include WHS performance metrics and consequences for poor safety performance. In high-risk industries, address specific hazards (e.g., asbestos, confined spaces, working at heights).',
    australianLawContext:
      'The Work Health and Safety Act 2011 (Cth) and corresponding state and territory legislation (except Victoria and Western Australia, which maintain separate frameworks) impose duties on PCBUs, officers, and workers. The primary duty requires PCBUs to ensure, so far as is reasonably practicable, the health and safety of workers. Penalties for breaches include substantial fines and imprisonment for Category 1 offences (reckless conduct). SafeWork Australia publishes model codes of practice that provide practical guidance on meeting WHS obligations. Victoria operates under the Occupational Health and Safety Act 2004 (Vic) and Western Australia under the Work Health and Safety Act 2020 (WA).',
    relatedClauses: [
      'compliance-regulatory-compliance',
      'compliance-environmental-compliance',
      'liability-indemnification',
      'insurance-public-liability',
    ],
    riskLevel: 'high',
    keywords: [
      'work health and safety',
      'WHS',
      'OHS',
      'duty of care',
      'PCBU',
      'safety management',
      'notifiable incident',
    ],
    commonIn: [
      'construction contracts',
      'maintenance agreements',
      'labour hire agreements',
      'logistics contracts',
      'facility management agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
];
