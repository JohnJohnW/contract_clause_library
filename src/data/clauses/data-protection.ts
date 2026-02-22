import type { Clause } from '../types';

export const dataProtectionClauses: Clause[] = [
  {
    id: 'data-protection-data-privacy',
    title: 'Data Privacy',
    slug: 'data-privacy',
    category: 'data-protection',
    summary:
      'Requires the parties to handle personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.',
    description:
      'A data privacy clause establishes the framework for the collection, use, storage, disclosure, and destruction of personal information in connection with the agreement. In Australia, the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs) set out the obligations of APP entities (organisations and Australian Government agencies) in relation to personal information. The APPs address matters including the collection of solicited and unsolicited personal information, notification requirements, use and disclosure limitations, data quality, data security, and access and correction rights.\n\nThis clause is essential in any agreement where personal information will be exchanged between the parties or where one party will handle personal information on behalf of the other. It should clearly allocate responsibilities for privacy compliance, specify the types of personal information that may be collected and the purposes for which it may be used, and impose obligations regarding data security and breach notification.\n\nPractitioners should consider whether the agreement involves the handling of sensitive information (as defined in the Privacy Act), which attracts additional protections, or the transfer of personal information overseas, which is subject to the cross-border disclosure principle in APP 8. State and territory health records legislation may impose additional obligations where health information is involved.',
    sampleText:
      'Each party must comply with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs) in connection with any personal information collected, used, stored, disclosed, or otherwise handled in the performance of this Agreement. The Receiving Party must not collect personal information unless the collection is reasonably necessary for the purposes of this Agreement and must take reasonable steps to notify individuals of the matters required by APP 5. The Receiving Party must not use or disclose personal information for any purpose other than the purpose for which it was collected, unless the individual has consented or a permitted general situation or permitted health situation applies. Each party must take reasonable steps to protect personal information from misuse, interference, and loss, and from unauthorised access, modification, or disclosure.',
    draftingNotes:
      'Define "personal information" and "sensitive information" by reference to the Privacy Act 1988 (Cth). Specify the types of personal information to be handled and the permitted purposes. Address cross-border disclosure obligations under APP 8, including any requirement for the disclosing party to take reasonable steps to ensure the overseas recipient complies with the APPs. Consider including specific data security obligations (e.g., encryption, access controls). Address the interaction with the Notifiable Data Breaches scheme (Part IIIC of the Privacy Act). Consider whether state or territory health records legislation applies. Include provisions for the return or destruction of personal information upon termination.',
    australianLawContext:
      'The Privacy Act 1988 (Cth) applies to organisations with an annual turnover of more than $3 million, as well as certain other organisations regardless of turnover (e.g., health service providers, organisations that trade in personal information). The 13 Australian Privacy Principles (APPs) are set out in Schedule 1 to the Privacy Act and cover the full lifecycle of personal information handling. The Office of the Australian Information Commissioner (OAIC) administers and enforces the Privacy Act. Civil penalties of up to $50 million may apply for serious or repeated interferences with privacy. The Privacy Act is currently under review following the Attorney-General\'s Privacy Act Review Report 2022.',
    relatedClauses: [
      'data-protection-data-breach-notification',
      'data-protection-data-retention',
      'data-protection-data-processing-agreement',
      'data-protection-data-subject-rights',
      'security-information-security',
    ],
    riskLevel: 'high',
    keywords: [
      'privacy',
      'personal information',
      'APPs',
      'Australian Privacy Principles',
      'data handling',
      'Privacy Act',
    ],
    commonIn: [
      'service agreements',
      'outsourcing agreements',
      'SaaS agreements',
      'employment contracts',
      'health services agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'data-protection-data-breach-notification',
    title: 'Data Breach Notification',
    slug: 'data-breach-notification',
    category: 'data-protection',
    summary:
      'Requires a party to notify the other party and, where required, the Australian Information Commissioner and affected individuals of eligible data breaches involving personal information.',
    description:
      'A data breach notification clause establishes the obligations of the parties in the event of a data breach involving personal information handled in connection with the agreement. Since February 2018, the Notifiable Data Breaches (NDB) scheme under Part IIIC of the Privacy Act 1988 (Cth) has required APP entities to notify the Australian Information Commissioner and affected individuals of eligible data breaches. An eligible data breach occurs where there is unauthorised access to, unauthorised disclosure of, or loss of personal information, and a reasonable person would conclude that the breach is likely to result in serious harm to any of the affected individuals.\n\nThe clause should impose contractual obligations that complement the statutory NDB scheme, particularly where one party is handling personal information on behalf of another. It should specify notification timeframes, the information to be included in breach notifications, and the steps to be taken to contain and remediate the breach.\n\nPractitioners should ensure that the contractual notification timeframe is shorter than the statutory timeframe (which requires notification as soon as practicable, and in any event within 30 days after the entity becomes aware of an eligible data breach) to allow the responsible entity sufficient time to assess the breach and comply with its statutory obligations.',
    sampleText:
      'The Supplier must notify the Customer in writing without undue delay and in any event within 24 hours of becoming aware of any Data Breach. For the purposes of this clause, "Data Breach" means any unauthorised access to, unauthorised disclosure of, or loss of, Personal Information held by the Supplier in connection with this Agreement. The notification must include: (a) a description of the nature of the Data Breach; (b) the categories and approximate number of individuals affected; (c) the likely consequences of the Data Breach; and (d) the measures taken or proposed to be taken to contain, investigate, and remediate the Data Breach. The Supplier must cooperate with the Customer in relation to any assessment or notification required under Part IIIC of the Privacy Act 1988 (Cth) and must not make any public statement or notification to individuals regarding the Data Breach without the prior written consent of the Customer.',
    draftingNotes:
      'Set the contractual notification timeframe to be shorter than the statutory 30-day period (e.g., 24 or 48 hours) to allow the responsible entity time to assess the breach. Define "Data Breach" clearly, distinguishing between suspected and confirmed breaches if appropriate. Specify the content of breach notifications. Address the allocation of costs for breach investigation, containment, and remediation. Consider including an obligation for the Supplier to maintain an incident response plan. Address the coordination of notifications to the OAIC and affected individuals, particularly where the Customer is the APP entity with statutory notification obligations. Consider requiring the Supplier to assist with remediation efforts, including credit monitoring for affected individuals.',
    australianLawContext:
      'Part IIIC of the Privacy Act 1988 (Cth) establishes the Notifiable Data Breaches scheme. APP entities must conduct an assessment within 30 days of becoming aware of grounds to suspect an eligible data breach, and must notify the Australian Information Commissioner and affected individuals if an eligible data breach is confirmed. Failure to comply with the NDB scheme may result in civil penalties. The OAIC has published guidance on the NDB scheme, including on conducting data breach assessments and preparing notifications. The Privacy Act Review Report 2022 recommended strengthening the NDB scheme.',
    relatedClauses: [
      'data-protection-data-privacy',
      'data-protection-data-processing-agreement',
      'security-information-security',
      'compliance-regulatory-compliance',
    ],
    riskLevel: 'high',
    keywords: [
      'data breach',
      'notifiable data breach',
      'NDB',
      'breach notification',
      'incident response',
      'OAIC',
    ],
    commonIn: [
      'outsourcing agreements',
      'SaaS agreements',
      'managed services agreements',
      'data sharing agreements',
      'cloud services agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'data-protection-data-retention',
    title: 'Data Retention and Destruction',
    slug: 'data-retention',
    category: 'data-protection',
    summary:
      'Specifies the period for which data must be retained and the obligations for secure destruction or de-identification of data upon expiry of the retention period or termination of the agreement.',
    description:
      'A data retention and destruction clause addresses the obligations of the parties regarding the retention, archival, and destruction or de-identification of personal information and other data collected or generated in connection with the agreement. APP 11 of the Privacy Act 1988 (Cth) requires APP entities to take reasonable steps to destroy or de-identify personal information that is no longer needed for any purpose for which it may be used or disclosed under the APPs.\n\nThe clause should specify the retention periods applicable to different categories of data, taking into account statutory requirements (such as taxation record-keeping requirements under the Income Tax Assessment Act 1997 (Cth) and the Corporations Act 2001 (Cth)), regulatory expectations, and operational needs. Upon expiry of the retention period or termination of the agreement, the clause should require the secure destruction or de-identification of the data and the provision of a certificate of destruction.\n\nPractitioners should consider the interaction between data retention obligations and legal hold or litigation preservation obligations. The clause should also address the format and method of destruction to ensure that data cannot be recovered or reconstructed.',
    sampleText:
      'The Supplier must retain Personal Information and Confidential Information collected or generated in connection with this Agreement only for so long as is reasonably necessary for the purposes of this Agreement or as required by applicable Law. Upon the earlier of: (a) the expiry of the applicable retention period; or (b) termination or expiry of this Agreement, the Supplier must, at the Customer\'s election, either securely destroy or de-identify all Personal Information and Confidential Information in its possession or control, or return it to the Customer. Destruction must be carried out using methods that render the information permanently unrecoverable. The Supplier must provide the Customer with a written certificate of destruction within 30 days of completing the destruction process.',
    draftingNotes:
      'Define the retention periods applicable to different categories of data, ensuring consistency with statutory requirements (e.g., 5 years for tax records under the Income Tax Assessment Act 1997 (Cth), 7 years for financial records under the Corporations Act 2001 (Cth)). Specify the method of destruction (e.g., secure shredding for physical records, cryptographic erasure or overwriting for electronic data). Address data held by subcontractors and in backup systems. Include a carve-out for data that must be retained to comply with legal obligations or to respond to legal proceedings. Consider whether the Customer should have a right to direct return of data rather than destruction. Address the timing of destruction and the provision of a certificate of destruction.',
    australianLawContext:
      'APP 11.2 of the Privacy Act 1988 (Cth) requires APP entities to take reasonable steps to destroy or de-identify personal information that is no longer needed. Various statutes impose mandatory minimum retention periods, including the Income Tax Assessment Act 1997 (Cth) (5 years for tax records), the Corporations Act 2001 (Cth) (7 years for financial records), and state and territory records legislation for government agencies. The OAIC has published guidance on the secure destruction of personal information. The Archives Act 1983 (Cth) imposes additional requirements on Commonwealth Government agencies.',
    relatedClauses: [
      'data-protection-data-privacy',
      'data-protection-data-processing-agreement',
      'data-protection-access-to-data',
      'security-information-security',
    ],
    riskLevel: 'medium',
    keywords: [
      'data retention',
      'data destruction',
      'de-identification',
      'records management',
      'certificate of destruction',
      'APP 11',
    ],
    commonIn: [
      'outsourcing agreements',
      'managed services agreements',
      'data sharing agreements',
      'cloud services agreements',
      'research agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'data-protection-data-processing-agreement',
    title: 'Data Processing Agreement',
    slug: 'data-processing-agreement',
    category: 'data-protection',
    summary:
      'Establishes the terms on which one party processes personal information on behalf of another, specifying the scope, purpose, and security requirements for processing.',
    description:
      'A data processing agreement (DPA) sets out the terms governing the handling of personal information by a party (the processor) on behalf of another party (the controller). While the Australian Privacy Act 1988 (Cth) does not use the controller/processor terminology of the EU GDPR, the concept of one entity handling personal information on behalf of another is well recognised, and APP 8 and section 95B impose obligations on entities that disclose personal information to third parties, including overseas recipients.\n\nA DPA is essential in outsourcing, cloud computing, and managed services arrangements where the service provider will access, store, or process personal information on behalf of the customer. The agreement should clearly delineate the roles and responsibilities of the parties, specify the types of personal information to be processed and the permitted purposes, and impose security obligations on the processor.\n\nPractitioners should consider the interaction with APP 6 (use or disclosure of personal information), APP 8 (cross-border disclosure), and APP 11 (security and destruction). Where the agreement involves the transfer of personal information to an overseas recipient, the DPA should address the requirements of APP 8, including the obligation to take reasonable steps to ensure the overseas recipient complies with the APPs.',
    sampleText:
      'The Supplier acknowledges that, in performing the Services, it will process Personal Information on behalf of the Customer. The Supplier must process Personal Information only in accordance with the Customer\'s documented instructions and only to the extent reasonably necessary for the performance of the Services. The Supplier must not process Personal Information for any other purpose without the prior written consent of the Customer. The Supplier must implement and maintain appropriate technical and organisational measures to protect Personal Information against unauthorised access, loss, destruction, or alteration. The Supplier must ensure that any personnel authorised to process Personal Information are subject to binding obligations of confidentiality. The Supplier must not engage any sub-processor without the prior written consent of the Customer.',
    draftingNotes:
      'Clearly define the scope of processing, including the types of personal information, the categories of individuals, and the permitted purposes. Specify the security measures required (consider referencing an information security schedule or ISO 27001 certification). Address sub-processing, including a requirement for prior written consent and flow-down of obligations. Include audit rights in relation to the processor\'s compliance. Address cross-border transfers under APP 8. Include provisions for cooperation with the controller in responding to access requests, complaints, and data breach notifications. Address data return or destruction upon termination. Although the Privacy Act does not mandate a formal DPA structure (unlike the GDPR), commercial best practice and the OAIC\'s guidance strongly support detailed contractual arrangements.',
    australianLawContext:
      'While the Privacy Act 1988 (Cth) does not adopt the controller/processor framework of the GDPR, the APPs impose obligations on APP entities that disclose personal information to others. APP 6 restricts use and disclosure to the primary purpose of collection or related secondary purposes. APP 8 requires entities that disclose personal information to overseas recipients to take reasonable steps to ensure compliance with the APPs, and the disclosing entity remains accountable for any acts or practices of the overseas recipient that breach the APPs. The OAIC has published guidance on outsourcing and cloud computing, recommending detailed contractual provisions. The Privacy Act Review Report 2022 proposed introducing a controller/processor framework.',
    relatedClauses: [
      'data-protection-data-privacy',
      'data-protection-data-breach-notification',
      'data-protection-data-retention',
      'data-protection-access-to-data',
      'compliance-audit-rights',
    ],
    riskLevel: 'high',
    keywords: [
      'data processing',
      'processor',
      'controller',
      'sub-processor',
      'personal information',
      'outsourcing',
      'APP 8',
    ],
    commonIn: [
      'outsourcing agreements',
      'cloud services agreements',
      'SaaS agreements',
      'managed services agreements',
      'data sharing agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'data-protection-access-to-data',
    title: 'Access to Data',
    slug: 'access-to-data',
    category: 'data-protection',
    summary:
      'Establishes the rights and procedures for a party to access, extract, and port data held by the other party during and upon termination of the agreement.',
    description:
      'An access to data clause addresses the rights of a party (typically the customer) to access, retrieve, and export data that is held or managed by the other party (typically the service provider) in connection with the agreement. This clause is particularly important in cloud computing, SaaS, outsourcing, and managed services arrangements, where the customer\'s data may be stored on the service provider\'s systems and may be critical to the customer\'s business operations.\n\nThe clause should address ongoing access during the term of the agreement, as well as data extraction and portability upon termination or expiry. It should specify the format in which data will be made available, the timeframe for provision of data, and the costs (if any) associated with data extraction and migration.\n\nPractitioners should consider the risk of vendor lock-in and ensure that the clause provides for the return of data in a format that is usable by the customer or a successor service provider. The clause should also address the service provider\'s obligation to cooperate with transition activities and to maintain data availability during any transition period. Where the data includes personal information, the clause should be consistent with the access and correction obligations under APP 12 and APP 13 of the Privacy Act 1988 (Cth).',
    sampleText:
      'The Customer retains ownership of all Customer Data at all times. The Supplier must provide the Customer with reasonable access to Customer Data throughout the term of this Agreement, including the ability to extract and download Customer Data in a commonly used, machine-readable format. Upon termination or expiry of this Agreement, the Supplier must, at the Customer\'s request and within 30 days of such termination or expiry, provide the Customer with a complete copy of all Customer Data in the format specified in Schedule [X] or, if no format is specified, in a commonly used, machine-readable format. The Supplier must cooperate in good faith with any data migration or transition activities. The Supplier must maintain the availability of Customer Data for a period of not less than 90 days following termination to facilitate the transition.',
    draftingNotes:
      'Define "Customer Data" clearly, distinguishing between data provided by the customer, data generated through the customer\'s use of the services, and derived or aggregated data. Specify the format for data extraction (e.g., CSV, JSON, XML, or an industry-standard format). Address the frequency and method of access during the term (e.g., API access, self-service export functionality). Include a transition assistance period following termination, during which the service provider must maintain data availability. Allocate costs for data extraction and migration activities. Address the interaction with data retention and destruction obligations. Consider whether to require the service provider to assist with data cleansing and validation during migration.',
    australianLawContext:
      'APP 12 of the Privacy Act 1988 (Cth) requires APP entities to give individuals access to their personal information on request, subject to certain exceptions. APP 13 requires APP entities to take reasonable steps to correct personal information to ensure it is accurate, up-to-date, complete, relevant, and not misleading. The Consumer Data Right (CDR) under Part IVD of the Competition and Consumer Act 2010 (Cth) provides for data portability in designated sectors (currently banking, energy, and telecommunications). The OAIC has published guidance on data access and correction obligations. The Privacy Act Review Report 2022 proposed expanding individual rights, including a right to erasure.',
    relatedClauses: [
      'data-protection-data-privacy',
      'data-protection-data-retention',
      'data-protection-data-subject-rights',
      'intellectual-property-ownership',
    ],
    riskLevel: 'medium',
    keywords: [
      'data access',
      'data portability',
      'data extraction',
      'vendor lock-in',
      'transition',
      'Customer Data',
      'CDR',
    ],
    commonIn: [
      'cloud services agreements',
      'SaaS agreements',
      'outsourcing agreements',
      'managed services agreements',
      'IT services agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'data-protection-data-subject-rights',
    title: 'Data Subject Rights',
    slug: 'data-subject-rights',
    category: 'data-protection',
    summary:
      'Establishes obligations for the parties to facilitate the exercise of individual rights in relation to personal information, including rights of access, correction, and complaint.',
    description:
      'A data subject rights clause addresses the obligations of the parties to facilitate and respond to requests from individuals exercising their rights in relation to personal information. Under the Australian Privacy Principles, individuals have the right to access their personal information (APP 12), to request correction of inaccurate, out-of-date, incomplete, irrelevant, or misleading personal information (APP 13), and to make complaints about interferences with their privacy (APP 1.4).\n\nThe clause should establish clear processes for receiving, escalating, and responding to individual rights requests, and should allocate responsibilities between the parties. In arrangements where one party handles personal information on behalf of another, the clause should require the processor to cooperate with and assist the controller in responding to individual rights requests.\n\nPractitioners should be aware that the Privacy Act Review Report 2022 proposed the introduction of additional individual rights, including a right to erasure, a right to object to processing, and a right not to be subject to solely automated decision-making. These proposals, if enacted, would expand the scope of obligations addressed by this clause. The clause should be drafted with sufficient flexibility to accommodate potential legislative amendments.',
    sampleText:
      'The Supplier must cooperate with and assist the Customer in responding to any request received from an individual to exercise their rights under the Privacy Act 1988 (Cth) and the Australian Privacy Principles, including requests for access to or correction of personal information. The Supplier must promptly refer to the Customer any such request received directly by the Supplier, and must not respond to any individual request without the prior written consent of the Customer. The Supplier must implement appropriate technical and organisational measures to enable the Customer to fulfil its obligations to respond to individual rights requests within the timeframes prescribed by applicable Law. The Supplier must maintain records sufficient to demonstrate compliance with this clause.',
    draftingNotes:
      'Define the process for handling individual rights requests, including timeframes for referral and response. Under APP 12, entities must generally respond to access requests within 30 days. Specify whether the Supplier may respond to individual requests directly or must refer them to the Customer. Include obligations for the Supplier to implement technical measures that facilitate the extraction and correction of personal information. Address the allocation of costs associated with responding to requests. Consider the potential introduction of additional individual rights following the Privacy Act Review. Include provisions for handling complaints referred to the OAIC. Address the coordination of responses where multiple parties hold the same personal information.',
    australianLawContext:
      'APP 12 of the Privacy Act 1988 (Cth) establishes the right of individuals to access their personal information held by an APP entity, subject to specified exceptions. APP 13 requires APP entities to take reasonable steps to correct personal information that is inaccurate, out-of-date, incomplete, irrelevant, or misleading. APP 1.4 requires APP entities to have a clearly expressed and up-to-date privacy policy and to implement practices and procedures to deal with complaints. The OAIC may investigate complaints and make determinations, including ordering compensation. The Privacy Act Review Report 2022 proposed additional individual rights, including rights to erasure, to object to processing, and not to be subject to automated decision-making.',
    relatedClauses: [
      'data-protection-data-privacy',
      'data-protection-data-processing-agreement',
      'data-protection-access-to-data',
      'data-protection-data-breach-notification',
    ],
    riskLevel: 'medium',
    keywords: [
      'data subject rights',
      'access request',
      'correction',
      'APP 12',
      'APP 13',
      'individual rights',
      'privacy complaints',
    ],
    commonIn: [
      'outsourcing agreements',
      'SaaS agreements',
      'managed services agreements',
      'data sharing agreements',
      'health services agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
];
