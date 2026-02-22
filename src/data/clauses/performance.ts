import type { Clause } from '../types';

export const performanceClauses: Clause[] = [
  {
    id: 'performance-performance-metrics',
    title: 'Performance Metrics',
    slug: 'performance-metrics',
    category: 'performance',
    summary:
      'Establishes measurable criteria against which a party\'s performance under the contract is assessed.',
    description:
      'A performance metrics clause defines the quantitative and qualitative standards that a service provider or contracting party must meet during the term of the agreement. These metrics provide an objective basis for evaluating whether obligations are being fulfilled satisfactorily and form the foundation of performance-based contracting.\n\nPerformance metrics are essential in service agreements, outsourcing contracts, and government procurement arrangements where accountability and transparency are paramount. They should be specific, measurable, achievable, relevant, and time-bound (SMART) to avoid disputes about whether performance standards have been met.\n\nWhen drafting performance metrics, parties should consider how data will be collected and reported, who bears the cost of measurement, and what consequences flow from failure to meet the specified thresholds. It is also important to build in a mechanism for reviewing and updating metrics over time to reflect changing business needs.',
    sampleText:
      'The Supplier shall perform the Services in accordance with the Performance Metrics set out in Schedule [X] (Performance Metrics). The parties acknowledge that the Performance Metrics represent the minimum acceptable standards of performance. The Supplier shall implement and maintain systems and processes necessary to measure, monitor, and report on its performance against each Performance Metric. The Supplier shall provide the Principal with a written performance report within ten (10) Business Days after the end of each Reporting Period, detailing actual performance against each Performance Metric. Where the Supplier fails to meet any Performance Metric in two (2) or more consecutive Reporting Periods, the Principal may issue a rectification notice requiring the Supplier to submit a remediation plan within fifteen (15) Business Days.',
    draftingNotes:
      'Ensure metrics are clearly defined in a schedule with specific numerical thresholds where possible. Consider whether metrics should be weighted and whether aggregate or individual metric failure triggers consequences. Align reporting periods with business cycles. Include a dispute resolution mechanism for contested measurements.',
    australianLawContext:
      'Performance metrics clauses are governed by general Australian contract law principles. Under the common law, obligations must be sufficiently certain to be enforceable. In government procurement, the Commonwealth Procurement Rules require value-for-money outcomes, often supported by measurable performance standards. Courts have held that vague or aspirational performance standards may be unenforceable for want of certainty (Whitlock v Brew (1968) 118 CLR 445).',
    relatedClauses: [
      'performance-service-level-agreement',
      'performance-key-performance-indicators',
      'performance-remedies-for-non-performance',
      'performance-continuous-improvement',
    ],
    riskLevel: 'medium',
    keywords: [
      'performance metrics',
      'KPIs',
      'measurement',
      'reporting',
      'service standards',
      'benchmarks',
    ],
    commonIn: [
      'Service agreements',
      'Outsourcing contracts',
      'Government procurement contracts',
      'IT services agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'performance-service-level-agreement',
    title: 'Service Level Agreement',
    slug: 'service-level-agreement',
    category: 'performance',
    summary:
      'Defines the agreed levels of service quality, availability, and responsiveness that a provider must deliver.',
    description:
      'A service level agreement (SLA) clause sets out the specific service standards that a provider commits to achieving. SLAs typically address matters such as system availability and uptime, response and resolution times for incidents, throughput and processing times, and quality benchmarks. They provide a contractual framework for managing expectations and ensuring accountability.\n\nSLAs are particularly important in technology, telecommunications, and managed services contracts where service continuity is critical to the customer\'s business operations. A well-drafted SLA will include clear definitions of service levels, measurement methodologies, exclusions (such as scheduled maintenance or force majeure events), and the consequences of failing to meet agreed levels.\n\nParties should also consider including service credits or rebate mechanisms as a commercial remedy for SLA breaches, distinct from any right to claim damages at law. This provides the customer with an immediate financial remedy without needing to establish loss.',
    sampleText:
      'The Service Provider shall deliver the Services in accordance with the service levels specified in Schedule [X] (Service Level Agreement). The Service Provider warrants that system availability shall be no less than 99.5% during each calendar month, measured in accordance with the methodology set out in the SLA. Where the Service Provider fails to meet any Critical Service Level, the Customer shall be entitled to service credits calculated in accordance with the Service Credit Table at Annexure [Y]. Service credits shall be applied as a deduction against the next invoice and shall not exceed [fifteen percent (15%)] of the monthly Fees. The accrual of service credits does not limit the Customer\'s right to pursue any other remedy available at law or in equity for breach of this Agreement.',
    draftingNotes:
      'Define service levels with precision, including measurement windows, exclusions, and calculation methodology. Consider tiering service levels as Critical, Major, and Minor to reflect relative importance. Cap service credits at a reasonable percentage of fees to maintain commercial viability. Ensure the SLA schedule is updated if services change.',
    australianLawContext:
      'SLA clauses are enforceable under general Australian contract law. Service credits are typically characterised as an agreed adjustment to fees rather than liquidated damages, which avoids the penalty doctrine (Andrews v Australia and New Zealand Banking Group Ltd (2012) 247 CLR 205). However, if service credits are structured as penalties for breach, they may be unenforceable. The Australian Consumer Law (Schedule 2, Competition and Consumer Act 2010 (Cth)) also implies guarantees of due care and skill (s 60) and fitness for purpose (s 61) in services contracts.',
    relatedClauses: [
      'performance-performance-metrics',
      'performance-remedies-for-non-performance',
      'performance-key-performance-indicators',
      'performance-continuous-improvement',
    ],
    riskLevel: 'medium',
    keywords: [
      'SLA',
      'service levels',
      'uptime',
      'availability',
      'service credits',
      'response time',
    ],
    commonIn: [
      'IT services agreements',
      'Managed services contracts',
      'Telecommunications agreements',
      'Cloud computing agreements',
      'Outsourcing contracts',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'performance-performance-reviews-service',
    title: 'Performance Reviews (Service)',
    slug: 'performance-reviews-service',
    category: 'performance',
    summary:
      'Provides a structured framework for periodic review and assessment of a service provider\'s performance.',
    description:
      'A performance reviews clause establishes the process and frequency for formal evaluation of a service provider\'s delivery against contractual obligations. Regular performance reviews enable the parties to identify issues early, discuss trends in service quality, agree on corrective actions, and foster a collaborative relationship.\n\nPerformance reviews are typically conducted quarterly or semi-annually and may involve representatives from both parties meeting to discuss performance data, customer satisfaction feedback, and operational matters. The clause should specify who attends, the agenda framework, and how outcomes and action items are recorded and followed up.\n\nIn longer-term contracts, performance reviews also serve as a governance mechanism, providing a forum for discussing scope changes, continuous improvement initiatives, and contract variations. They are particularly valuable where the relationship is complex or involves multiple service streams.',
    sampleText:
      'The parties shall conduct formal performance reviews on a quarterly basis (or at such other intervals as agreed in writing) to assess the Service Provider\'s performance against the Performance Metrics and Service Levels. Each performance review shall be attended by senior representatives of each party with authority to agree upon action items. The Service Provider shall prepare and circulate a performance review report at least five (5) Business Days prior to each review meeting, including data on actual performance against each metric, a summary of incidents and complaints, and a status update on outstanding action items. The parties shall maintain written minutes of each performance review meeting. Where a performance review identifies a material performance deficiency, the Service Provider shall prepare a remediation plan within ten (10) Business Days.',
    draftingNotes:
      'Specify the frequency of reviews and allow flexibility to convene ad hoc reviews if performance issues arise. Define the seniority level of attendees to ensure decision-making authority is present. Consider whether the customer has the right to attend the provider\'s premises for reviews. Link review outcomes to escalation and termination provisions.',
    australianLawContext:
      'Performance review clauses are governed by general Australian contract law. While there is no specific legislation mandating service performance reviews in commercial contracts, they are considered best practice in government procurement under the Commonwealth Procurement Rules. Courts may consider evidence from performance reviews when assessing whether a party has complied with its obligations or whether termination for poor performance was justified.',
    relatedClauses: [
      'performance-performance-metrics',
      'performance-service-level-agreement',
      'performance-remedies-for-non-performance',
      'performance-continuous-improvement',
    ],
    riskLevel: 'low',
    keywords: [
      'performance review',
      'service review',
      'governance',
      'reporting',
      'monitoring',
      'assessment',
    ],
    commonIn: [
      'Managed services agreements',
      'Outsourcing contracts',
      'Government contracts',
      'Long-term service agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'performance-remedies-for-non-performance',
    title: 'Remedies for Non-Performance',
    slug: 'remedies-for-non-performance',
    category: 'performance',
    summary:
      'Sets out the contractual consequences and remedies available when a party fails to meet its performance obligations.',
    description:
      'A remedies for non-performance clause specifies the actions available to the aggrieved party when the other party fails to perform its contractual obligations to the required standard. These remedies may include cure periods, step-in rights, fee reductions, liquidated damages, and ultimately termination for persistent or material non-performance.\n\nThis clause provides a graduated response mechanism that encourages remediation before escalation. It is important to structure remedies proportionately so that minor defaults attract lesser consequences while material or repeated failures may justify more significant action, including termination.\n\nWhen drafting this clause, parties should be mindful of the penalty doctrine in Australian law, which renders unenforceable any contractual provision that imposes a consequence disproportionate to the legitimate interest of the innocent party in performance. Remedies should be genuinely pre-estimated or structured as fee adjustments rather than punitive measures.',
    sampleText:
      'Where the Service Provider fails to meet a Performance Metric or Service Level (a Performance Failure), the Principal may issue a written notice specifying the nature of the Performance Failure (a Performance Failure Notice). Upon receipt of a Performance Failure Notice, the Service Provider shall: (a) investigate the cause of the Performance Failure within five (5) Business Days; (b) submit a remediation plan to the Principal for approval within ten (10) Business Days; and (c) implement the approved remediation plan at its own cost. If the Service Provider fails to remedy the Performance Failure within the timeframe specified in the remediation plan, the Principal may, without limiting its other rights: (i) reduce the Fees payable in proportion to the shortfall; (ii) exercise step-in rights under clause [X]; or (iii) terminate this Agreement.',
    draftingNotes:
      'Ensure fee reductions and liquidated damages reflect a genuine pre-estimate of loss to avoid being characterised as penalties. Provide reasonable cure periods before escalation. Consider whether step-in rights are practical and include indemnities for the provider\'s cooperation during step-in. Cross-reference termination provisions.',
    australianLawContext:
      'The enforceability of contractual remedies for non-performance is subject to the penalty doctrine as clarified by the High Court in Paciocco v Australia and New Zealand Banking Group Ltd (2016) 258 CLR 525, which confirmed that a provision will be a penalty if it is out of all proportion to the legitimate interests of the innocent party. Fee adjustments structured as genuine price reductions (rather than damages for breach) are generally not subject to the penalty doctrine. The right to terminate for breach is also subject to the common law requirement that the breach be sufficiently serious (Koompahtoo Local Aboriginal Land Council v Sanpine Pty Ltd (2007) 233 CLR 115).',
    relatedClauses: [
      'performance-performance-metrics',
      'performance-service-level-agreement',
      'performance-performance-reviews-service',
      'liability-limitation-of-liability',
    ],
    riskLevel: 'high',
    keywords: [
      'remedies',
      'non-performance',
      'cure period',
      'step-in rights',
      'termination',
      'fee reduction',
      'liquidated damages',
    ],
    commonIn: [
      'Service agreements',
      'Outsourcing contracts',
      'Construction contracts',
      'Government procurement contracts',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'performance-continuous-improvement',
    title: 'Continuous Improvement',
    slug: 'continuous-improvement',
    category: 'performance',
    summary:
      'Requires the service provider to identify and implement ongoing improvements to service quality and efficiency.',
    description:
      'A continuous improvement clause imposes an obligation on the service provider to proactively seek and implement improvements to the services over the term of the contract. This may include process efficiencies, technology upgrades, cost reductions, and enhanced service quality. Continuous improvement provisions are particularly important in long-term contracts where the market, technology, and best practices evolve over time.\n\nThe clause typically requires the provider to develop and maintain a continuous improvement plan, propose improvements at regular intervals, and share the benefits of improvements with the customer (for example, through reduced fees or enhanced service levels). It may also establish an innovation fund or set aside a percentage of fees to support improvement initiatives.\n\nWhen drafting this clause, parties should consider how improvement proposals will be evaluated and approved, who bears the cost of implementation, how intellectual property in improvements will be owned, and how the benefits will be shared between the parties.',
    sampleText:
      'The Service Provider shall establish and maintain a continuous improvement programme designed to improve the quality, efficiency, and cost-effectiveness of the Services throughout the Term. The Service Provider shall, no less than annually, submit a Continuous Improvement Plan to the Principal identifying: (a) proposed improvements to the Services, including process enhancements, technology upgrades, and efficiency gains; (b) the anticipated benefits of each proposed improvement, including any projected cost savings; and (c) an implementation timeline and resource requirements. The parties shall share the financial benefits of any implemented improvement equally, unless otherwise agreed in writing. The Service Provider shall not implement any improvement that materially alters the scope or nature of the Services without the prior written approval of the Principal.',
    draftingNotes:
      'Consider whether continuous improvement obligations should be aspirational or binding. If binding, ensure the obligation is sufficiently certain to be enforceable. Address intellectual property ownership in improvements developed by the provider. Specify how cost savings are calculated and shared. Consider including benchmarking provisions to assess whether the provider\'s services remain competitive.',
    australianLawContext:
      'Continuous improvement clauses must be sufficiently certain to be enforceable under Australian contract law. An obligation to use "best endeavours" or "reasonable endeavours" to improve services may be enforceable, but purely aspirational language (such as an obligation to "strive for excellence") is unlikely to create binding obligations (Mineralogy Pty Ltd v Sino Iron Pty Ltd (No 6) [2015] FCA 825). In government contracts, continuous improvement is often a requirement under value-for-money principles in the Commonwealth Procurement Rules.',
    relatedClauses: [
      'performance-performance-metrics',
      'performance-service-level-agreement',
      'performance-performance-reviews-service',
      'performance-key-performance-indicators',
    ],
    riskLevel: 'low',
    keywords: [
      'continuous improvement',
      'innovation',
      'efficiency',
      'cost savings',
      'benchmarking',
      'best practice',
    ],
    commonIn: [
      'Long-term service agreements',
      'Outsourcing contracts',
      'Government contracts',
      'Managed services agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'performance-key-performance-indicators',
    title: 'Key Performance Indicators',
    slug: 'key-performance-indicators',
    category: 'performance',
    summary:
      'Defines specific, measurable indicators used to evaluate whether a party is meeting its contractual performance targets.',
    description:
      'A key performance indicators (KPI) clause identifies the specific metrics that will be used to measure and evaluate a party\'s performance under the contract. While closely related to general performance metrics, KPIs are typically a subset of the most critical measures that reflect the core objectives of the engagement. KPIs are often tied to financial incentives or consequences, such as performance bonuses, service credits, or abatement of fees.\n\nKPIs should be carefully selected to reflect outcomes rather than inputs, and should be within the control of the party being measured. They should be aligned with the customer\'s strategic objectives and reviewed periodically to ensure they remain relevant. Common categories include quality, timeliness, cost, customer satisfaction, and compliance.\n\nThe clause should specify how each KPI is defined, the target or threshold for each KPI, the methodology for measurement and reporting, and the consequences of meeting, exceeding, or failing to meet each KPI. A well-structured KPI regime incentivises high performance and provides early warning of potential issues.',
    sampleText:
      'The Service Provider\'s performance shall be measured against the Key Performance Indicators (KPIs) specified in Schedule [X]. Each KPI shall have a Target Level, a Minimum Level, and a measurement methodology as set out in that Schedule. The Service Provider shall report on its performance against each KPI in the monthly performance report. Where the Service Provider achieves the Target Level for all KPIs in a Reporting Period, the Service Provider shall be entitled to a performance bonus of [two percent (2%)] of the Fees for that period. Where the Service Provider fails to achieve the Minimum Level for any KPI in two (2) consecutive Reporting Periods, the Principal may require the Service Provider to undertake a root cause analysis and implement corrective measures at the Service Provider\'s cost.',
    draftingNotes:
      'Limit the number of KPIs to those that are genuinely critical -- too many KPIs dilute focus. Ensure KPIs measure outcomes within the provider\'s control, not factors influenced by the customer or third parties. Define clear escalation paths for persistent KPI failures. Consider weighting KPIs to reflect relative importance. Review and update KPIs periodically to reflect changing priorities.',
    australianLawContext:
      'KPI clauses are enforceable under Australian contract law provided the KPIs are defined with sufficient certainty. Performance bonuses linked to KPI achievement are generally enforceable as agreed consideration. Abatement of fees for KPI failure should be structured as a genuine price adjustment rather than a penalty (Paciocco v Australia and New Zealand Banking Group Ltd (2016) 258 CLR 525). In government procurement, the use of KPIs is encouraged by the Commonwealth Procurement Rules and relevant state procurement policies to ensure value for money and accountability.',
    relatedClauses: [
      'performance-performance-metrics',
      'performance-service-level-agreement',
      'performance-remedies-for-non-performance',
      'performance-continuous-improvement',
    ],
    riskLevel: 'medium',
    keywords: [
      'KPIs',
      'key performance indicators',
      'targets',
      'performance bonus',
      'measurement',
      'reporting',
    ],
    commonIn: [
      'Service agreements',
      'Outsourcing contracts',
      'Government contracts',
      'IT services agreements',
      'Facilities management contracts',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
];
