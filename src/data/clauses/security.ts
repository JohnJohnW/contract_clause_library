import type { Clause } from '../types';

export const securityClauses: Clause[] = [
  {
    id: 'security-security-requirements',
    title: 'Security Requirements',
    slug: 'security-requirements',
    category: 'security',
    summary:
      'Establishes the information security standards and practices that must be maintained by the parties.',
    description:
      'A security requirements clause sets out the baseline information security obligations that the parties must meet in connection with the agreement. This typically includes requirements for implementing and maintaining appropriate technical and organisational security measures to protect information assets, systems, and data.\n\nThe clause should reference applicable security standards and frameworks, such as the Australian Signals Directorate\'s Essential Eight, ISO/IEC 27001, or industry-specific standards. It should also address the classification and handling of information according to sensitivity levels, the management of access controls, and the implementation of security monitoring and incident detection capabilities.\n\nIn contracts involving critical infrastructure or government data, additional security requirements may apply under the Security of Critical Infrastructure Act 2018 (Cth) and the Australian Government Information Security Manual (ISM).',
    sampleText:
      'The Service Provider must implement and maintain information security measures that are consistent with recognised industry standards, including at a minimum the Australian Signals Directorate\'s Essential Eight Maturity Model at Maturity Level [Two/Three]. The Service Provider must: (a) maintain an information security management system (ISMS) that addresses the risks to the confidentiality, integrity, and availability of information processed under this Agreement; (b) conduct regular risk assessments and vulnerability testing at least annually; (c) implement appropriate access controls to ensure that only authorised personnel have access to the Customer\'s data and systems; and (d) maintain security logs and monitoring systems capable of detecting and alerting on security incidents. The Service Provider must comply with any additional security requirements specified in Schedule [X].',
    draftingNotes:
      'Specify the applicable security framework or standard (e.g., Essential Eight, ISO 27001, NIST). Consider requiring independent certification or third-party security assessments. Define the maturity level required. Address the service provider\'s obligation to maintain security measures throughout the term. Include a mechanism for updating security requirements as threats evolve. Cross-reference with data protection and audit provisions.',
    australianLawContext:
      'The Australian Signals Directorate (ASD) publishes the Essential Eight strategies to mitigate cyber security incidents, recommended for all Australian organisations. The Information Security Manual (ISM) provides security guidance for government entities. The Privacy Act 1988 (Cth) APP 11 requires entities to take reasonable steps to protect personal information from misuse, interference, loss, and unauthorised access. The Security of Critical Infrastructure Act 2018 (Cth) imposes obligations on operators of critical infrastructure assets.',
    relatedClauses: [
      'security-data-encryption',
      'security-access-controls',
      'security-security-audits',
      'data-protection-data-privacy',
    ],
    riskLevel: 'high',
    keywords: [
      'information security',
      'cyber security',
      'Essential Eight',
      'ISO 27001',
      'ISMS',
      'security standards',
    ],
    commonIn: [
      'IT services agreements',
      'cloud computing agreements',
      'outsourcing contracts',
      'government contracts',
      'managed services agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'security-security-breach-notification',
    title: 'Security Breach Notification',
    slug: 'security-breach-notification',
    category: 'security',
    summary:
      'Requires prompt notification of security incidents and breaches affecting data or systems.',
    description:
      'A security breach notification clause establishes the obligations of the parties regarding the detection, notification, and response to security incidents and breaches. This is essential for managing cyber security risk and ensuring timely action to contain and remediate incidents.\n\nThe clause should define what constitutes a security incident and a security breach, the timeframe for notification, the content of the notification, and the ongoing reporting obligations during incident response. It should also address the coordination of incident response activities between the parties.\n\nIn Australia, the Notifiable Data Breaches (NDB) scheme under Part IIIC of the Privacy Act 1988 (Cth) requires entities to notify affected individuals and the OAIC of eligible data breaches involving personal information. The contractual notification clause should complement these statutory obligations.',
    sampleText:
      'The Service Provider must notify the Customer of any Security Incident affecting the Customer\'s data, systems, or the services provided under this Agreement as soon as practicable and in any event within twenty-four (24) hours of becoming aware of the Security Incident. The notification must include: (a) a description of the nature and scope of the incident; (b) the types and estimated quantity of data affected; (c) the measures being taken to contain and investigate the incident; and (d) a contact point for further information. The Service Provider must provide regular updates during the investigation and remediation of the incident. The Service Provider must cooperate fully with the Customer in managing the incident, including supporting the Customer\'s obligations under the Notifiable Data Breaches scheme under Part IIIC of the Privacy Act 1988 (Cth).',
    draftingNotes:
      'Define "Security Incident" and "Security Breach" clearly, distinguishing between suspected and confirmed incidents. Specify a tight notification timeframe (24-72 hours is common). Require comprehensive initial notification with ongoing updates. Address who controls the incident response process. Include obligations to preserve forensic evidence. Cross-reference with statutory NDB obligations.',
    australianLawContext:
      'The Notifiable Data Breaches scheme (Part IIIC, Privacy Act 1988 (Cth)) requires entities to notify the OAIC and affected individuals of eligible data breaches involving personal information where there is a likely risk of serious harm. Section 26WE defines "eligible data breach." The OAIC has published guidance on NDB obligations. Additional reporting obligations may apply under the Security of Critical Infrastructure Act 2018 (Cth) for operators of critical infrastructure.',
    relatedClauses: [
      'security-incident-response',
      'security-security-requirements',
      'data-protection-data-breach-notification',
    ],
    riskLevel: 'high',
    keywords: [
      'security breach',
      'incident notification',
      'data breach',
      'NDB scheme',
      'cyber incident',
      'notification',
    ],
    commonIn: [
      'IT services agreements',
      'cloud computing agreements',
      'data processing agreements',
      'outsourcing contracts',
      'managed services agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'security-security-audits',
    title: 'Security Audits',
    slug: 'security-audits',
    category: 'security',
    summary:
      'Grants the right to conduct or require independent security assessments of systems and practices.',
    description:
      'A security audits clause provides a mechanism for verifying that the security measures and controls implemented by a party meet the agreed standards and are operating effectively. This may involve the right to conduct internal audits, require third-party penetration testing, or request copies of independent audit reports (such as SOC 2 or ISO 27001 certification).\n\nThe clause should address the scope of security audits, the frequency and scheduling, access to systems and personnel, confidentiality of audit findings, and the obligation to remediate any identified vulnerabilities or deficiencies.\n\nIn practice, many service providers prefer to provide copies of existing third-party audit reports (such as SOC 2 Type II reports) rather than granting direct access to their systems for customer-specific audits, as this is more scalable and protects their other customers.',
    sampleText:
      'The Customer may, upon not less than fifteen (15) Business Days\' prior written notice, conduct or commission an independent third party to conduct a security audit of the Service Provider\'s information security practices, systems, and controls to verify compliance with the security requirements of this Agreement. Alternatively, the Service Provider must, at its own cost, obtain and maintain a SOC 2 Type II report (or equivalent) from a reputable independent auditor and provide a copy to the Customer annually. The Service Provider must remediate any material security deficiency identified in an audit within thirty (30) days (or such shorter period as is reasonable having regard to the severity of the deficiency). The Customer\'s audit rights are limited to one audit per twelve-month period unless a Security Incident has occurred.',
    draftingNotes:
      'Balance the customer\'s need for assurance with the provider\'s operational constraints. Consider accepting SOC 2 or ISO 27001 certification as an alternative to direct audits. Limit audit frequency to avoid excessive disruption. Include confidentiality obligations for audit findings. Address cost allocation (typically the requesting party bears costs unless deficiencies are found). Set reasonable remediation timeframes based on severity.',
    australianLawContext:
      'Security audit provisions are governed by general Australian contract law. In regulated industries, security audits may be required by prudential standards (e.g., APRA CPS 234 for APRA-regulated entities). Government contracts typically include security audit rights under the Protective Security Policy Framework (PSPF). The Privacy Act 1988 (Cth) APP 11 requires entities to take reasonable steps to protect personal information, and security audits are an important mechanism for demonstrating compliance.',
    relatedClauses: [
      'security-security-requirements',
      'compliance-audit-rights',
      'security-access-controls',
    ],
    riskLevel: 'medium',
    keywords: [
      'security audit',
      'penetration testing',
      'SOC 2',
      'ISO 27001',
      'vulnerability assessment',
      'compliance',
    ],
    commonIn: [
      'IT services agreements',
      'cloud computing agreements',
      'outsourcing contracts',
      'government contracts',
      'financial services agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'security-data-encryption',
    title: 'Data Encryption',
    slug: 'data-encryption',
    category: 'security',
    summary:
      'Requires the use of encryption to protect data in transit and at rest.',
    description:
      'A data encryption clause imposes obligations on the parties to encrypt sensitive data both in transit (when being transmitted over networks) and at rest (when stored on servers, databases, or portable media). Encryption is a fundamental security control that protects data from unauthorised access, even if other security measures are compromised.\n\nThe clause should specify the minimum encryption standards, such as AES-256 for data at rest and TLS 1.2 or higher for data in transit. It should also address key management practices, including the generation, storage, rotation, and destruction of encryption keys.\n\nIn Australian practice, encryption is recommended as a key security control by the Australian Signals Directorate and is relevant to demonstrating compliance with the Privacy Act 1988 (Cth) APP 11 requirement to take reasonable steps to protect personal information.',
    sampleText:
      'The Service Provider must encrypt all Customer Data: (a) in transit, using TLS 1.2 or higher (or equivalent industry-standard encryption protocol); and (b) at rest, using AES-256 encryption (or equivalent industry-standard encryption algorithm). The Service Provider must implement and maintain encryption key management practices consistent with recognised industry standards, including secure key generation, storage, rotation, and destruction. Encryption keys must not be stored together with the encrypted data. The Service Provider must ensure that encryption is applied to all portable storage media and devices that may contain Customer Data. The Service Provider must notify the Customer promptly if it becomes aware of any compromise of encryption keys.',
    draftingNotes:
      'Specify minimum encryption standards by name and version (e.g., AES-256, TLS 1.2+). Address both data in transit and data at rest. Include key management obligations. Consider whether to require hardware security modules (HSMs) for key storage. Address encryption of backup media and portable devices. Review encryption requirements periodically to ensure they remain current as standards evolve.',
    australianLawContext:
      'The Australian Signals Directorate recommends encryption as part of the Essential Eight and the broader Information Security Manual (ISM). The Privacy Act 1988 (Cth) APP 11.1 requires entities to take reasonable steps to protect personal information, and encryption is considered a key reasonable step. The OAIC has indicated that a failure to encrypt personal information may be relevant to whether a data breach is an "eligible data breach" under the NDB scheme.',
    relatedClauses: [
      'security-security-requirements',
      'security-access-controls',
      'data-protection-data-privacy',
    ],
    riskLevel: 'high',
    keywords: [
      'encryption',
      'AES-256',
      'TLS',
      'data at rest',
      'data in transit',
      'key management',
    ],
    commonIn: [
      'IT services agreements',
      'cloud computing agreements',
      'data processing agreements',
      'healthcare IT agreements',
      'financial services agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'security-access-controls',
    title: 'Access Controls',
    slug: 'access-controls',
    category: 'security',
    summary:
      'Requires implementation of access control measures to restrict system and data access to authorised personnel.',
    description:
      'An access controls clause requires the parties to implement and maintain appropriate measures to control who can access systems, data, and facilities. Access controls are a fundamental component of information security and operate on the principle of least privilege — users should only have access to the information and resources necessary for their role.\n\nThe clause should address logical access controls (such as authentication, authorisation, and identity management) and physical access controls (such as restricted access to data centres and server rooms). It should also cover access provisioning and de-provisioning processes, the use of multi-factor authentication, privileged access management, and regular access reviews.\n\nIn Australian practice, access controls are a core requirement of the ASD Essential Eight (specifically the "Restrict Administrative Privileges" strategy) and are essential for compliance with the Privacy Act 1988 (Cth).',
    sampleText:
      'The Service Provider must implement and maintain access controls that ensure only authorised personnel have access to the Customer\'s data and systems. At a minimum, the Service Provider must: (a) implement multi-factor authentication for all remote access and all access to systems containing Customer Data; (b) apply the principle of least privilege, granting personnel only the minimum access necessary to perform their duties; (c) maintain a register of all personnel with access to Customer Data and systems, including the level of access granted; (d) conduct access reviews at least quarterly and promptly revoke access for personnel who no longer require it; and (e) implement separate privileged access accounts for administrative functions, with enhanced logging and monitoring.',
    draftingNotes:
      'Require multi-factor authentication as a minimum for sensitive access. Define access levels and approval processes. Include de-provisioning obligations (particularly when personnel leave or change roles). Require access reviews at regular intervals. Address privileged access management separately due to its higher risk profile. Consider requiring background checks for personnel with access to sensitive data.',
    australianLawContext:
      'The ASD Essential Eight includes "Restrict Administrative Privileges" as a key mitigation strategy. APP 11 of the Privacy Act 1988 (Cth) requires reasonable steps to protect personal information, which includes implementing appropriate access controls. APRA CPS 234 requires APRA-regulated entities to implement information security controls including access management. The Australian Government Information Security Manual (ISM) provides detailed guidance on access control implementation for government systems.',
    relatedClauses: [
      'security-security-requirements',
      'security-data-encryption',
      'security-security-audits',
    ],
    riskLevel: 'high',
    keywords: [
      'access controls',
      'authentication',
      'authorisation',
      'multi-factor authentication',
      'least privilege',
      'identity management',
    ],
    commonIn: [
      'IT services agreements',
      'cloud computing agreements',
      'outsourcing contracts',
      'government contracts',
      'financial services agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'security-incident-response',
    title: 'Incident Response',
    slug: 'incident-response',
    category: 'security',
    summary:
      'Establishes the procedures and responsibilities for responding to and managing security incidents.',
    description:
      'An incident response clause defines the framework for how the parties will detect, respond to, contain, investigate, and recover from security incidents. A well-defined incident response process is critical for minimising the impact of security breaches and ensuring compliance with notification obligations.\n\nThe clause should address the establishment and maintenance of an incident response plan, the roles and responsibilities of each party, communication protocols, forensic investigation procedures, evidence preservation, and post-incident review processes. It should also address the coordination between the parties\' respective incident response teams.\n\nIn Australia, the requirement for incident response planning is supported by the Privacy Act 1988 (Cth), the ASD Essential Eight (which includes incident detection and response), and the Security of Critical Infrastructure Act 2018 (Cth) for critical infrastructure operators.',
    sampleText:
      'The Service Provider must develop, implement, and maintain an Incident Response Plan that is consistent with recognised industry standards and addresses the detection, containment, investigation, remediation, and recovery from Security Incidents. The Incident Response Plan must be tested at least annually through tabletop exercises or simulations. In the event of a Security Incident, the Service Provider must: (a) immediately activate the Incident Response Plan; (b) take all reasonable steps to contain and mitigate the incident; (c) preserve all relevant forensic evidence; (d) cooperate fully with the Customer\'s incident response team; and (e) conduct a post-incident review and provide the Customer with a written report including root cause analysis and recommendations for preventing recurrence.',
    draftingNotes:
      'Require the service provider to maintain a documented incident response plan. Specify testing requirements (annual tabletop exercises at minimum). Address evidence preservation obligations for potential legal proceedings. Define the roles and responsibilities of each party\'s incident response team. Include post-incident review and reporting obligations. Cross-reference with the security breach notification clause.',
    australianLawContext:
      'Incident response planning is recommended by the ASD Essential Eight and the broader ISM. The Privacy Act 1988 (Cth) requires entities to have processes in place for handling data breaches under the NDB scheme. The Security of Critical Infrastructure Act 2018 (Cth) requires operators of critical infrastructure to maintain and comply with incident response plans. APRA CPS 234 requires APRA-regulated entities to maintain an information security incident management process.',
    relatedClauses: [
      'security-security-breach-notification',
      'security-security-requirements',
      'security-security-audits',
    ],
    riskLevel: 'high',
    keywords: [
      'incident response',
      'security incident',
      'forensic investigation',
      'containment',
      'recovery',
      'post-incident review',
    ],
    commonIn: [
      'IT services agreements',
      'cloud computing agreements',
      'outsourcing contracts',
      'government contracts',
      'critical infrastructure contracts',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
];
