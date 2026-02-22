import type { Clause } from '../types';

export const insuranceClauses: Clause[] = [
  {
    id: 'insurance-insurance-requirements',
    title: 'Insurance Requirements',
    slug: 'insurance-requirements',
    category: 'insurance',
    summary:
      'Specifies the types and minimum levels of insurance coverage that a party must obtain and maintain throughout the term of the agreement.',
    description:
      'An insurance requirements clause mandates that one or both parties procure and maintain specified insurance policies as a condition of the agreement. The clause sets out the types of cover required (such as public liability, professional indemnity, workers\' compensation, and product liability), the minimum sums insured, and the obligation to maintain cover for a specified period following the completion of the services or the expiry of the agreement.\n\nIn the Australian market, insurance requirements must be calibrated to the risks associated with the particular transaction and the regulatory requirements applicable to the relevant industry. For example, certain professions are required by law or regulation to hold professional indemnity insurance, and workers\' compensation insurance is mandatory in all Australian states and territories under their respective workers\' compensation legislation.\n\nDrafters should ensure that the specified types and levels of cover are commercially reasonable and proportionate to the value of the contract and the risks involved. Overly onerous insurance requirements may increase costs unnecessarily or may be impracticable for smaller contractors or suppliers.',
    sampleText:
      'The Contractor must, at its own cost, effect and maintain for the Term and for a period of twelve (12) months after the expiry or termination of this Agreement, the following insurances with an insurer authorised by the Australian Prudential Regulation Authority (APRA) to carry on insurance business in Australia: (a) public liability insurance for an amount of not less than $20,000,000 per occurrence; (b) professional indemnity insurance for an amount of not less than $10,000,000 per claim and in the aggregate; (c) workers\' compensation insurance as required by applicable legislation in each State or Territory in which the Services are performed; and (d) motor vehicle insurance covering all vehicles used in connection with the Services. All policies must be on terms reasonably acceptable to the Principal.',
    draftingNotes:
      'Adjust the minimum sums insured to reflect the nature and value of the services or goods being provided. Verify that the required insurance types are available in the Australian market at reasonable premiums. Consider whether the tail period for professional indemnity insurance should be extended beyond twelve months for high-risk engagements. Specify whether the policies must be on an occurrence or claims-made basis. Ensure workers\' compensation requirements address all relevant state and territory legislation.',
    australianLawContext:
      'The Insurance Act 1973 (Cth) and the Insurance Contracts Act 1984 (Cth) provide the overarching regulatory framework for general insurance in Australia. APRA regulates insurers under the Insurance Act 1973 (Cth). Workers\' compensation insurance is mandatory under state and territory legislation, including the Workers Compensation Act 1987 (NSW), Workplace Injury Rehabilitation and Compensation Act 2013 (Vic), and Workers\' Compensation and Rehabilitation Act 2003 (Qld). Section 54 of the Insurance Contracts Act 1984 (Cth) restricts an insurer\'s ability to refuse a claim based on acts or omissions of the insured that did not cause the loss.',
    relatedClauses: [
      'insurance-proof-of-insurance',
      'insurance-additional-insured',
      'insurance-notice-of-cancellation',
    ],
    riskLevel: 'high',
    keywords: [
      'insurance',
      'public liability',
      'professional indemnity',
      'workers compensation',
      'APRA',
      'minimum cover',
    ],
    commonIn: [
      'Construction contracts',
      'Service agreements',
      'Government contracts',
      'Facility management agreements',
      'Consultancy agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'insurance-proof-of-insurance',
    title: 'Proof of Insurance',
    slug: 'proof-of-insurance',
    category: 'insurance',
    summary:
      'Requires a party to provide evidence of its insurance coverage, typically by way of certificates of currency, upon request.',
    description:
      'A proof of insurance clause establishes the obligation for a party to demonstrate that it holds the insurance coverage required under the agreement. This is typically satisfied by providing certificates of currency issued by the insurer or insurance broker, which confirm the type of cover, the sum insured, the period of insurance, and any relevant endorsements or exclusions.\n\nThe clause serves a risk management function by enabling the other party to verify that the required coverage is in place before work commences and throughout the term of the agreement. In Australian commercial practice, certificates of currency are the standard form of proof, though the clause may also require the production of policy schedules or full policy wordings upon reasonable request.\n\nDrafters should specify the timing for providing proof of insurance (for example, prior to commencement of the services, annually upon renewal, and upon request) and the consequences of failing to provide evidence. Some clauses include a right for the other party to effect insurance on behalf of the defaulting party and recover the cost as a debt.',
    sampleText:
      'The Contractor must, prior to commencing the Services and thereafter on each anniversary of the Commencement Date and within fourteen (14) days of any reasonable request by the Principal, provide to the Principal current certificates of currency for each insurance policy required to be maintained under this Agreement. Each certificate of currency must be issued by the relevant insurer or an authorised insurance broker and must specify the type of cover, the sum insured, the period of insurance, and the name of the insured. If the Contractor fails to provide evidence of insurance in accordance with this clause, the Principal may, at its discretion, effect such insurance and recover the cost from the Contractor as a debt due and payable.',
    draftingNotes:
      'Consider whether certificates of currency alone are sufficient or whether the Principal should also have the right to request copies of policy schedules or full policy wordings. Specify whether the right to effect insurance on behalf of the Contractor is a right or an obligation. Address whether the Principal should receive notice from the insurer directly in the event of cancellation or material alteration of the policy. Ensure the timing requirements are practical and enforceable.',
    australianLawContext:
      'Under the Insurance Contracts Act 1984 (Cth), an insurer must issue documentation confirming the terms of the policy. Section 74 of that Act requires an insurer to provide the insured with certain documentation. Certificates of currency are a market standard in Australian commercial transactions and are typically issued by insurance brokers regulated under the Corporations Act 2001 (Cth) and holding an Australian Financial Services Licence (AFSL). The right to effect insurance on behalf of a defaulting party is a common contractual mechanism and is generally enforceable as a matter of contract law.',
    relatedClauses: [
      'insurance-insurance-requirements',
      'insurance-notice-of-cancellation',
      'insurance-additional-insured',
    ],
    riskLevel: 'low',
    keywords: [
      'proof of insurance',
      'certificate of currency',
      'evidence of insurance',
      'policy schedule',
      'insurance broker',
    ],
    commonIn: [
      'Construction contracts',
      'Service agreements',
      'Government contracts',
      'Lease agreements',
      'Subcontractor agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'insurance-subrogation',
    title: 'Subrogation',
    slug: 'subrogation',
    category: 'insurance',
    summary:
      'Addresses the insurer\'s right to pursue recovery from third parties after paying a claim and any waiver of that right between the contracting parties.',
    description:
      'A subrogation clause deals with the rights of an insurer to step into the shoes of the insured party and pursue claims against third parties who may be responsible for the loss. In commercial agreements, parties frequently agree to waive their rights of subrogation against each other, meaning that if one party suffers a loss that is covered by its own insurance, its insurer cannot recover the amount of the claim from the other party to the agreement.\n\nThe purpose of a mutual waiver of subrogation is to ensure that losses are borne by the parties\' respective insurance policies rather than being the subject of cross-claims between the parties. This promotes a more efficient and less adversarial approach to risk management and reduces the transaction costs associated with litigation.\n\nDrafters should be aware that a waiver of subrogation must be permitted by the relevant insurance policy, as some policies contain conditions that may be breached if the insured waives its rights of recovery without the insurer\'s consent. It is advisable to procure the insurer\'s agreement to the waiver, often by way of an endorsement on the policy.',
    sampleText:
      'Each party waives, and must procure that its insurers waive, all rights of subrogation that they may have against the other party and its officers, employees, and agents in respect of any loss or damage covered by the insurance policies required to be maintained under this Agreement. Each party must use reasonable endeavours to ensure that its insurance policies contain a provision permitting this waiver of subrogation or, where such provision is not included, must obtain a specific endorsement from its insurer confirming the waiver. This clause does not apply to losses arising from the wilful misconduct or fraud of a party.',
    draftingNotes:
      'Ensure that the parties\' insurance policies permit waiver of subrogation rights, as an unauthorised waiver may void coverage or constitute a breach of the policy conditions. Consider carving out wilful misconduct and fraud from the waiver. Verify that the waiver extends to officers, employees, and agents of both parties. Consider whether the waiver should apply to all insurance policies or only specified policies. Address the practical steps required to obtain insurer consent to the waiver.',
    australianLawContext:
      'Subrogation rights in Australia are governed by both common law and the Insurance Contracts Act 1984 (Cth). Section 65 of that Act provides that an insurer who has paid a claim is subrogated to the rights of the insured against third parties. Section 67 limits the insurer\'s right of subrogation against family members and certain other persons. Contractual waivers of subrogation are generally enforceable in Australia, but must be consistent with the terms of the relevant insurance policy. Section 54 of the Insurance Contracts Act 1984 (Cth) may protect an insured from having a claim refused solely because of a waiver of subrogation, depending on the circumstances.',
    relatedClauses: [
      'insurance-insurance-requirements',
      'insurance-additional-insured',
      'general-indemnification',
    ],
    riskLevel: 'medium',
    keywords: [
      'subrogation',
      'waiver of subrogation',
      'insurer rights',
      'recovery',
      'insurance claim',
      'indemnity',
    ],
    commonIn: [
      'Construction contracts',
      'Joint venture agreements',
      'Lease agreements',
      'Major project contracts',
      'Alliance agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'insurance-additional-insured',
    title: 'Additional Insured',
    slug: 'additional-insured',
    category: 'insurance',
    summary:
      'Requires a party to have the other party noted as an additional insured on its insurance policies, providing direct coverage to the named party.',
    description:
      'An additional insured clause requires one party to arrange for the other party to be noted as an additional insured on specified insurance policies. This gives the additional insured party direct rights under the policy, meaning it can claim directly against the insurer in the event of a covered loss, without having to pursue the other contracting party for an indemnity first.\n\nBeing noted as an additional insured provides a significant risk management benefit, as it ensures that the named party has independent coverage under the policy. This is particularly valuable in construction, infrastructure, and major project contracts where multiple parties are involved and the risk of loss or injury is significant.\n\nDrafters should specify which policies the additional insured endorsement applies to, the scope of coverage provided, and whether the endorsement should be on a primary and non-contributory basis (meaning the policy responds before any insurance held by the additional insured). It is also important to ensure that the insurer has agreed to the endorsement, as adding an additional insured requires the insurer\'s consent.',
    sampleText:
      'The Contractor must ensure that the Principal and its officers, employees, and agents are noted as additional insureds on the Contractor\'s public liability insurance policy and, to the extent obtainable on commercially reasonable terms, on such other insurance policies as the Principal may reasonably require. The additional insured endorsement must provide that: (a) the coverage afforded to the additional insured is no less favourable than that afforded to the named insured; (b) the policy responds on a primary basis and not as excess or contributory insurance to any policy held by the additional insured; and (c) the insurer waives any right of subrogation against the additional insured. The Contractor must provide evidence of the additional insured endorsement to the Principal upon request.',
    draftingNotes:
      'Confirm with the Contractor\'s insurer or broker that the additional insured endorsement is available and obtain confirmation of the terms. Consider whether the endorsement should apply to all policies or only specified policies such as public liability. Specify whether the additional insured coverage extends to the Principal\'s vicarious liability for the Contractor\'s acts or omissions. Address any additional premium costs associated with the endorsement and which party bears those costs. Consider whether cross-liability and severability of interest provisions are required.',
    australianLawContext:
      'Under the Insurance Contracts Act 1984 (Cth), a "third party beneficiary" (which includes an additional insured) has certain rights under section 48 to recover directly from the insurer. Section 48 provides that a person who is not a party to a contract of general insurance but who is specified or referred to in the contract as a person to whom the insurance cover extends may recover the amount of the person\'s loss from the insurer. APRA\'s prudential standards may also be relevant to the terms on which additional insured endorsements are provided. The scope of coverage afforded to an additional insured depends on the specific policy wording and endorsement terms.',
    relatedClauses: [
      'insurance-insurance-requirements',
      'insurance-proof-of-insurance',
      'insurance-subrogation',
    ],
    riskLevel: 'medium',
    keywords: [
      'additional insured',
      'insurance endorsement',
      'named insured',
      'primary coverage',
      'cross-liability',
      'policy extension',
    ],
    commonIn: [
      'Construction contracts',
      'Infrastructure contracts',
      'Joint venture agreements',
      'Major project contracts',
      'Subcontractor agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'insurance-notice-of-cancellation',
    title: 'Notice of Cancellation',
    slug: 'notice-of-cancellation',
    category: 'insurance',
    summary:
      'Requires a party to notify the other party if any required insurance policy is cancelled, materially altered, or not renewed.',
    description:
      'A notice of cancellation clause requires the insured party to promptly notify the other contracting party if any of the insurance policies required under the agreement are cancelled, allowed to lapse, or materially altered in a way that reduces the scope or level of coverage. This clause is an essential component of insurance provisions, as it enables the other party to take protective action if the required insurance coverage is no longer in place.\n\nThe notification obligation typically extends to any proposed cancellation by the insurer as well as any voluntary cancellation or non-renewal by the insured party. In some cases, the clause may also require the insured party to procure that its insurer provides direct notice to the other contracting party, although this is dependent on the insurer\'s willingness to provide such an undertaking.\n\nDrafters should set out a specific timeframe for notification and address the consequences of a failure to maintain the required insurance. Common remedies include a right to terminate the agreement, a right to effect replacement insurance at the defaulting party\'s cost, and a right to withhold payments until evidence of compliant insurance is provided.',
    sampleText:
      'The Contractor must notify the Principal in writing within seven (7) days of becoming aware of: (a) the cancellation, non-renewal, or material alteration of any insurance policy required to be maintained under this Agreement; or (b) any event or circumstance that may give rise to a claim under any such policy which could materially affect the coverage available. Where practicable, the Contractor must use reasonable endeavours to procure that its insurer provides not less than thirty (30) days\' prior written notice to the Principal before any cancellation or material alteration of a required policy takes effect. If the Contractor fails to maintain any required insurance, the Principal may, without prejudice to any other rights, suspend performance or terminate this Agreement.',
    draftingNotes:
      'Ensure the notification timeframe is practical and that the Contractor is able to comply with the obligation. Consider whether direct notice from the insurer to the Principal is achievable in the Australian insurance market, as not all insurers will agree to provide third-party notification. Address what constitutes a "material alteration" to provide certainty. Specify the consequences of non-compliance clearly, including suspension and termination rights. Consider whether the Principal should have a right to withhold payments pending reinstatement of compliant coverage.',
    australianLawContext:
      'The Insurance Contracts Act 1984 (Cth) governs the cancellation of insurance contracts in Australia. Section 59 provides for cancellation by the insurer, requiring written notice to the insured. Section 62 allows the insured to cancel the contract at any time. The duty of utmost good faith under section 13 of the Insurance Contracts Act 1984 (Cth) may be relevant to the insured\'s obligations to disclose material changes to the other contracting party. There is no statutory obligation on an insurer to notify a third party (such as a principal) of cancellation, so this must be addressed contractually and with the insurer\'s cooperation.',
    relatedClauses: [
      'insurance-insurance-requirements',
      'insurance-proof-of-insurance',
      'general-termination',
    ],
    riskLevel: 'medium',
    keywords: [
      'notice of cancellation',
      'insurance cancellation',
      'non-renewal',
      'material alteration',
      'insurance lapse',
      'policy notification',
    ],
    commonIn: [
      'Construction contracts',
      'Service agreements',
      'Government contracts',
      'Lease agreements',
      'Subcontractor agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'insurance-self-insurance',
    title: 'Self-Insurance',
    slug: 'self-insurance',
    category: 'insurance',
    summary:
      'Permits a party to self-insure specified risks in lieu of procuring external insurance coverage, subject to meeting certain financial and regulatory requirements.',
    description:
      'A self-insurance clause allows a party to retain certain risks rather than transferring them to an external insurer, effectively agreeing to bear losses from its own resources. This is typically permitted only for parties with sufficient financial capacity, and the clause usually imposes conditions to ensure that the self-insuring party can meet its obligations if a loss occurs.\n\nSelf-insurance is common among large corporations, government entities, and well-capitalised organisations that have the financial strength to absorb losses that would otherwise be covered by insurance. In Australia, certain statutory schemes also recognise self-insurance, particularly in the workers\' compensation context, where employers may apply for self-insurer licences under state and territory legislation.\n\nDrafters should carefully define the scope of risks that may be self-insured and specify the financial thresholds or conditions that must be satisfied. The clause should require the self-insuring party to maintain adequate reserves or provide other financial assurance (such as a bank guarantee or parent company guarantee) to demonstrate its capacity to meet potential claims. The clause should also address what happens if the self-insuring party\'s financial position deteriorates.',
    sampleText:
      'Notwithstanding clause [X] (Insurance Requirements), a party may elect to self-insure any or all of the risks required to be insured under this Agreement, provided that: (a) the self-insuring party has, and maintains for the duration of the self-insurance arrangement, a net tangible asset base of not less than $[amount] as certified by its auditors; (b) the self-insuring party provides the other party with evidence satisfactory to the other party, acting reasonably, of its capacity to meet potential claims; (c) the self-insuring party\'s obligations under this Agreement in respect of any self-insured risk are no less than the obligations that would apply if the risk were insured with an APRA-authorised insurer; and (d) the self-insuring party notifies the other party immediately if its financial position changes materially.',
    draftingNotes:
      'Set the net tangible asset threshold at an appropriate level having regard to the risks being self-insured. Consider requiring periodic financial reporting or auditor certification of the self-insuring party\'s financial capacity. Address whether the right to self-insure extends to workers\' compensation and, if so, ensure the party holds a self-insurer licence under the relevant state or territory legislation. Include a fallback requiring the party to procure external insurance if it ceases to meet the financial thresholds. Consider whether a parent company guarantee or bank guarantee should be required as additional security.',
    australianLawContext:
      'Self-insurance for workers\' compensation is regulated at the state and territory level. In New South Wales, the Workers Compensation Act 1987 (NSW) and the Workplace Injury Management and Workers Compensation Act 1998 (NSW) govern self-insurer licences. Similar schemes exist in other states, such as the Workplace Injury Rehabilitation and Compensation Act 2013 (Vic) and the Workers\' Compensation and Rehabilitation Act 2003 (Qld). Self-insurance arrangements for other classes of risk are not specifically regulated but are subject to the general contractual and commercial law framework. The financial capacity requirements should be assessed having regard to the Australian Accounting Standards and auditing requirements under the Corporations Act 2001 (Cth).',
    relatedClauses: [
      'insurance-insurance-requirements',
      'insurance-proof-of-insurance',
      'liability-limitation-of-liability',
    ],
    riskLevel: 'high',
    keywords: [
      'self-insurance',
      'self-insurer',
      'risk retention',
      'financial capacity',
      'net tangible assets',
      'workers compensation self-insurer',
    ],
    commonIn: [
      'Government contracts',
      'Major project contracts',
      'Corporate group agreements',
      'Infrastructure contracts',
      'Large-scale service agreements',
    ],
    status: 'use-with-caution',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
];
