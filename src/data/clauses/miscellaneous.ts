import type { Clause } from '../types';

export const miscellaneousClauses: Clause[] = [
  {
    id: 'miscellaneous-entire-agreement-misc',
    title: 'Entire Agreement (Boilerplate)',
    slug: 'entire-agreement-misc',
    category: 'miscellaneous',
    summary:
      'Confirms the written agreement supersedes all prior discussions and constitutes the complete understanding between the parties.',
    description:
      'This boilerplate version of the entire agreement clause serves the same function as its counterpart in the General category but is typically included as part of the miscellaneous or general provisions section at the end of the agreement. It confirms that the written document constitutes the whole agreement and supersedes all prior negotiations, representations, and understandings.\n\nIn Australian commercial practice, this clause is nearly universal in formal written agreements. It serves to prevent a party from seeking to rely on pre-contractual statements or promises that were not included in the final written document. However, it does not prevent claims under section 18 of the Australian Consumer Law for misleading or deceptive conduct.\n\nThis version may be used where the General category\'s entire agreement clause is not included, or where a shorter boilerplate formulation is preferred in the miscellaneous section.',
    sampleText:
      'This Agreement constitutes the entire agreement between the parties with respect to its subject matter and supersedes all prior negotiations, representations, warranties, understandings, and agreements between the parties, whether written or oral. Each party acknowledges that it has not relied on any representation, warranty, or undertaking that is not set out in this Agreement. Nothing in this clause limits or excludes any liability for fraud or any right or remedy under the Australian Consumer Law that cannot be excluded by agreement.',
    draftingNotes:
      'Ensure the ACL carve-out is included. Consider whether side letters, schedules, or related agreements should be expressly incorporated. Keep this clause concise as it typically appears in the boilerplate section. If the agreement is preceded by a heads of agreement or letter of intent, expressly state that those documents are superseded.',
    australianLawContext:
      'Entire agreement clauses are generally enforceable in Australia but do not prevent claims for misleading or deceptive conduct under s 18 of the Australian Consumer Law. The clause may be relevant to questions of contractual interpretation and the existence of collateral contracts (Campbell v Backoffice Investments Pty Ltd (2009) 238 CLR 304). The unfair contract terms regime may apply in standard form contracts with consumers or small businesses.',
    relatedClauses: [
      'general-entire-agreement',
      'miscellaneous-amendments',
      'miscellaneous-severability',
    ],
    riskLevel: 'low',
    keywords: [
      'entire agreement',
      'whole agreement',
      'supersedes',
      'merger clause',
      'integration',
    ],
    commonIn: [
      'all commercial agreements',
      'service agreements',
      'supply agreements',
      'licence agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'miscellaneous-amendments',
    title: 'Amendments',
    slug: 'amendments',
    category: 'miscellaneous',
    summary:
      'Requires that any changes to the agreement must be made in writing and signed by both parties.',
    description:
      'An amendments clause requires that any variation to the terms of the agreement must be made in writing and signed by or on behalf of both parties. This prevents informal or oral modifications from having contractual effect and provides certainty about the current terms of the agreement.\n\nIn Australian contract law, the effectiveness of "no oral modification" clauses has historically been debated. However, the practical effect of such clauses is to create a clear evidentiary record and to put the parties on notice that informal discussions or correspondence do not constitute binding amendments unless formalised.\n\nThe clause may also address the process for proposing amendments, including any required notice periods, approval processes, or change management procedures. In more complex agreements, a formal change order process may be established.',
    sampleText:
      'No amendment, variation, or modification of this Agreement is effective unless it is in writing and signed by authorised representatives of both parties. No oral agreement, course of dealing, or trade usage shall operate to modify or amend this Agreement. Each party must ensure that its authorised representative has the authority to bind that party in respect of any amendment. Any proposed amendment must be submitted in writing and must clearly identify the clauses to be amended and the nature of the proposed change.',
    draftingNotes:
      'Consider whether the clause should specify who constitutes an "authorised representative" for the purposes of signing amendments. In complex agreements, consider establishing a formal change management process. Address whether email correspondence can constitute a written amendment or whether original signatures are required. Consider the interaction with any electronic execution provisions.',
    australianLawContext:
      'The enforceability of "no oral modification" clauses in Australia is supported by general contract law principles, though Australian courts have not definitively ruled on all aspects. The UK Supreme Court in MWB Business Exchange Centres Ltd v Rock Advertising Ltd [2018] UKSC 24 upheld such clauses, and Australian courts are likely to follow similar reasoning. The Electronic Transactions Act 1999 (Cth) and corresponding state legislation provide that a requirement for writing may be satisfied by electronic communication in certain circumstances.',
    relatedClauses: [
      'miscellaneous-entire-agreement-misc',
      'miscellaneous-notices',
      'miscellaneous-waiver',
    ],
    riskLevel: 'low',
    keywords: [
      'amendments',
      'variations',
      'modifications',
      'written consent',
      'change management',
    ],
    commonIn: [
      'all commercial agreements',
      'service agreements',
      'supply agreements',
      'construction contracts',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'miscellaneous-notices',
    title: 'Notices',
    slug: 'notices',
    category: 'miscellaneous',
    summary:
      'Specifies how formal communications between the parties must be delivered to be effective.',
    description:
      'A notices clause establishes the requirements for formal communications between the parties, including the method of delivery, the addresses for service, and when a notice is deemed to have been received. This is critical for time-sensitive communications such as termination notices, breach notices, and dispute notifications.\n\nThe clause typically specifies permissible methods of delivery (such as personal delivery, registered post, and email) and the deemed time of receipt for each method. In Australian practice, it is common to include both a physical address and an email address, with provisions for updating contact details.\n\nPractitioners should consider the interaction between contractual notice requirements and the Electronic Transactions Act 1999 (Cth), which provides a framework for the legal validity of electronic communications. The clause should also address what happens if a party changes its address without providing notice.',
    sampleText:
      'Any notice, demand, or other communication required or permitted to be given under this Agreement must be in writing and is taken to be duly given if: (a) delivered personally to the addressee; (b) sent by prepaid registered post to the address of the addressee set out in this Agreement or as last notified in writing; or (c) sent by email to the email address of the addressee set out in this Agreement or as last notified in writing. A notice is deemed to be received: (i) if delivered personally, at the time of delivery; (ii) if sent by registered post within Australia, on the third Business Day after posting; (iii) if sent by registered post to an address outside Australia, on the seventh Business Day after posting; or (iv) if sent by email, at the time the email enters the recipient\'s information system, unless the sender receives an automated message indicating non-delivery.',
    draftingNotes:
      'Specify all permissible methods of delivery. Define deemed receipt times clearly for each method. Include a mechanism for updating contact details. Consider whether certain critical notices (e.g., termination notices) should be required to be sent by a specific method. Address the treatment of notices sent outside business hours. Consider whether notices by email alone should be sufficient for all purposes or only for routine communications.',
    australianLawContext:
      'The Electronic Transactions Act 1999 (Cth) and corresponding state and territory legislation provide that a requirement for writing may be met by electronic communication, and that a document may be given by electronic communication, unless the law or contract provides otherwise. Courts have generally upheld contractual notice provisions as to method and deemed receipt (Fancourt v Mercantile Credits Ltd (1983) 154 CLR 87). Service by email is increasingly accepted, though best practice is to include it expressly in the clause.',
    relatedClauses: [
      'miscellaneous-amendments',
      'general-termination',
      'miscellaneous-counterparts',
    ],
    riskLevel: 'low',
    keywords: [
      'notices',
      'service',
      'delivery',
      'deemed receipt',
      'email notice',
      'registered post',
    ],
    commonIn: [
      'all commercial agreements',
      'service agreements',
      'supply agreements',
      'lease agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'miscellaneous-severability',
    title: 'Severability',
    slug: 'severability',
    category: 'miscellaneous',
    summary:
      'Ensures that if any provision of the agreement is found to be invalid, the remaining provisions continue in force.',
    description:
      'A severability clause provides that if any provision of the agreement is held to be invalid, illegal, or unenforceable by a court or tribunal, that provision is severed from the agreement and the remaining provisions continue in full force and effect. This is a standard protective provision that prevents the entire agreement from failing due to a defect in one clause.\n\nThe clause may also provide for the invalid provision to be replaced with a valid provision that achieves the original commercial intent as closely as possible. This "reading down" or "blue pencil" approach gives the agreement greater resilience.\n\nIn Australian contract law, courts have the power to sever invalid provisions in certain circumstances, but an express severability clause provides greater certainty and demonstrates the parties\' intention that the agreement should continue even if part of it is found to be defective.',
    sampleText:
      'If any provision of this Agreement is held to be invalid, illegal, or unenforceable by any court of competent jurisdiction, that provision is severed from this Agreement and the remaining provisions continue in full force and effect. Where a provision is severed, the parties must negotiate in good faith to replace the severed provision with a valid and enforceable provision that achieves, to the greatest extent possible, the economic, business, and other purposes of the severed provision. The invalidity or unenforceability of any provision in one jurisdiction does not affect the validity or enforceability of that provision in any other jurisdiction.',
    draftingNotes:
      'Consider whether the clause should include a "reading down" mechanism or simply sever the invalid provision. The obligation to negotiate a replacement should be qualified to avoid creating an unenforceable "agreement to agree." Consider including a provision that addresses the situation where the severed clause is fundamental to the agreement. In multi-jurisdictional agreements, include a provision preserving validity in other jurisdictions.',
    australianLawContext:
      'Australian courts have the power to sever void or illegal provisions from contracts under common law principles. Restraint of trade clauses, for example, may be severed or read down to a reasonable scope (Nordenfelt v Maxim Nordenfelt Guns and Ammunition Co Ltd [1894] AC 535, as applied in Australia). Express severability clauses are common and provide greater certainty. The unfair contract terms regime under the ACL provides that void terms are severed rather than invalidating the entire contract (s 250 ACL).',
    relatedClauses: [
      'miscellaneous-entire-agreement-misc',
      'miscellaneous-amendments',
      'miscellaneous-waiver',
    ],
    riskLevel: 'low',
    keywords: [
      'severability',
      'invalidity',
      'unenforceable',
      'severed',
      'reading down',
      'blue pencil',
    ],
    commonIn: [
      'all commercial agreements',
      'service agreements',
      'employment contracts',
      'restraint of trade agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'miscellaneous-waiver',
    title: 'Waiver',
    slug: 'waiver',
    category: 'miscellaneous',
    summary:
      'Provides that a failure to exercise a right does not constitute a waiver of that right.',
    description:
      'A waiver clause clarifies that a party\'s failure to exercise, or delay in exercising, any right or remedy under the agreement does not operate as a waiver of that right or remedy, and does not prevent the party from exercising that right or remedy in the future. This is an important protective provision that preserves the parties\' contractual rights even in circumstances where enforcement has been inconsistent.\n\nWithout this clause, a party that consistently fails to enforce a particular term may be found to have waived its right to enforce that term through the common law doctrines of waiver, estoppel, or election. The clause provides a contractual override of these equitable principles, though its effectiveness may be limited in extreme cases.\n\nThe clause also typically provides that any waiver must be in writing to be effective, preventing informal or inadvertent waivers.',
    sampleText:
      'A failure or delay by a party to exercise any right or remedy under this Agreement does not constitute a waiver of that right or remedy, nor does it prevent or restrict the future exercise of that or any other right or remedy. A single or partial exercise of a right or remedy does not prevent any further exercise of that right or remedy or the exercise of any other right or remedy. Any waiver of a breach of any provision of this Agreement must be in writing and signed by the party granting the waiver. A waiver of any breach of any provision of this Agreement does not constitute a waiver of any subsequent breach of that or any other provision.',
    draftingNotes:
      'Require waivers to be in writing to prevent disputes about whether a right has been informally waived. Consider whether the clause should specify that a waiver of a particular breach does not constitute a waiver of any subsequent breach. The clause should be mutual. Keep the language clear and concise.',
    australianLawContext:
      'Waiver in Australian contract law may arise through election (choosing between inconsistent rights), estoppel (where conduct induces reliance), or as an express or implied agreement to relinquish a right. The doctrine of promissory estoppel (Waltons Stores (Interstate) Ltd v Maher (1988) 164 CLR 387) may prevent a party from enforcing a right where the other party has relied on the first party\'s conduct. Anti-waiver clauses provide contractual protection but may not override equitable principles in all circumstances.',
    relatedClauses: [
      'miscellaneous-amendments',
      'miscellaneous-severability',
      'general-termination',
    ],
    riskLevel: 'low',
    keywords: [
      'waiver',
      'non-waiver',
      'failure to exercise',
      'election',
      'estoppel',
      'preservation of rights',
    ],
    commonIn: [
      'all commercial agreements',
      'service agreements',
      'supply agreements',
      'loan agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'miscellaneous-counterparts',
    title: 'Counterparts',
    slug: 'counterparts',
    category: 'miscellaneous',
    summary:
      'Permits the agreement to be executed in multiple counterparts, each of which constitutes an original.',
    description:
      'A counterparts clause allows the agreement to be signed in separate identical copies, each of which is treated as an original, and all of which together constitute one and the same agreement. This is a practical provision that facilitates execution where the parties are in different locations and cannot sign the same physical document.\n\nWith the widespread adoption of electronic signatures and remote execution, counterparts clauses have become even more important. The clause typically provides that the agreement may be executed by way of exchange of electronic copies (such as PDF scans) and that electronic signatures are valid and binding.\n\nIn Australian practice, the Electronic Transactions Act 1999 (Cth) and corresponding state and territory legislation support the validity of electronic signatures and electronic execution, subject to certain exceptions.',
    sampleText:
      'This Agreement may be executed in any number of counterparts, each of which when executed is an original, and all of which together constitute one and the same agreement. A party may execute this Agreement by signing any counterpart. Delivery of an executed counterpart of this Agreement by email (including PDF attachment) or other electronic means has the same force and effect as delivery of an originally executed counterpart. Where this Agreement is executed electronically, each party agrees that its electronic signature is intended to authenticate this Agreement and to have the same force and effect as a manuscript signature.',
    draftingNotes:
      'Include express provisions for electronic execution and exchange of scanned copies. Consider whether any regulatory or filing requirements mandate original wet-ink signatures. Ensure the clause is consistent with the Electronic Transactions Act 1999 (Cth). In deeds, additional formalities may apply (e.g., the requirement for a witness in some jurisdictions), so counterparts provisions for deeds should be drafted carefully.',
    australianLawContext:
      'The Electronic Transactions Act 1999 (Cth) and corresponding state and territory legislation provide that a requirement for a signature may be met by an electronic method that identifies the person and indicates their intention, provided it is reliable or proven to be reliable (s 10). For deeds, the position varies by jurisdiction: some states require witnessing and delivery. Counterparts clauses are standard in Australian commercial practice and are generally upheld by courts.',
    relatedClauses: [
      'miscellaneous-notices',
      'miscellaneous-amendments',
      'miscellaneous-entire-agreement-misc',
    ],
    riskLevel: 'low',
    keywords: [
      'counterparts',
      'execution',
      'electronic signature',
      'PDF',
      'multiple copies',
      'original',
    ],
    commonIn: [
      'all commercial agreements',
      'deeds',
      'settlement agreements',
      'share sale agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
];
