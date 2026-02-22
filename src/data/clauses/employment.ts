import type { Clause } from '../types';

export const employmentClauses: Clause[] = [
  {
    id: 'employment-non-competition',
    title: 'Non-Competition',
    slug: 'non-competition',
    category: 'employment',
    summary:
      'Restricts a party (typically an employee or contractor) from engaging in competing business activities for a specified period after the termination of the relationship.',
    description:
      'A non-competition clause (also known as a restraint of trade clause) restricts a party from carrying on or being engaged, concerned, or interested in a business that competes with the other party\'s business for a specified period after the termination of the employment or contractual relationship. In Australia, restraint of trade clauses are prima facie void and unenforceable at common law, but may be enforced if the restraint goes no further than is reasonably necessary to protect the legitimate business interests of the party seeking to enforce it.\n\nThe enforceability of non-competition clauses in Australia is assessed by reference to the principles established in Nordenfelt v Maxim Nordenfelt Guns and Ammunition Co Ltd [1894] AC 535 and subsequent Australian authorities. The court will consider the reasonableness of the restraint by reference to its duration, geographical scope, and the scope of the restricted activities. A restraint that is broader than reasonably necessary to protect the legitimate interests (such as trade secrets, confidential information, and customer connections) will be unenforceable.\n\nPractitioners should draft non-competition clauses using a cascading structure (also known as a "ladder" or "waterfall" clause) that specifies alternative durations, geographical areas, and restricted activities in descending order of breadth. This approach allows the court to sever unreasonable elements of the restraint and enforce the clause to the extent that it is reasonable, rather than striking it down entirely.',
    sampleText:
      'The Employee must not, during the Restraint Period and within the Restraint Area, without the prior written consent of the Employer, directly or indirectly carry on, be engaged in, be concerned with, or be interested in (whether as principal, agent, partner, shareholder, director, employee, consultant, or otherwise) any business that is the same as or substantially similar to, or competitive with, the Business. For the purposes of this clause: (a) "Restraint Period" means the period of 12 months (or, if that period is held to be unenforceable, 9 months, or if that period is also held to be unenforceable, 6 months) from the date of termination; and (b) "Restraint Area" means the State of [State] (or, if that area is held to be unenforceable, the metropolitan area of [City], or if that area is also held to be unenforceable, a 10-kilometre radius from the Employee\'s principal place of work). This clause does not prevent the Employee from holding shares in a publicly listed company that do not exceed 5% of the issued share capital.',
    draftingNotes:
      'Use a cascading structure with multiple alternative restraint periods and geographical areas to maximise enforceability. Define the "Business" or the restricted activities with precision, as an overly broad description of the restricted activities will undermine enforceability. Consider the seniority of the employee and the nature of the business when setting the scope of the restraint. Ensure the restraint is linked to a legitimate business interest (e.g., protection of confidential information, trade secrets, or customer connections). Include a carve-out for passive shareholdings in listed companies. Consider whether the restraint should be supported by separate consideration (particularly for existing employees). State and territory legislation may modify the common law position (e.g., Restraints of Trade Act 1976 (NSW) allows courts to read down unreasonable restraints).',
    australianLawContext:
      'Restraint of trade clauses are prima facie void and unenforceable at common law: Nordenfelt v Maxim Nordenfelt Guns and Ammunition Co Ltd [1894] AC 535. The onus is on the party seeking to enforce the restraint to demonstrate that it is reasonably necessary to protect a legitimate business interest and that the restraint is reasonable in the interests of the parties and the public. In New South Wales, the Restraints of Trade Act 1976 (NSW) modifies the common law by allowing courts to read down an unreasonable restraint to a level that is reasonable, rather than declaring it entirely void. The Fair Work Act 2009 (Cth) does not specifically regulate restraint of trade clauses, but the general protections provisions (Part 3-1) may be relevant if a restraint is used for an adverse action purpose.',
    relatedClauses: [
      'employment-non-solicitation',
      'intellectual-property-confidentiality',
      'employment-severance-pay',
    ],
    riskLevel: 'high',
    keywords: [
      'non-competition',
      'restraint of trade',
      'post-employment restraint',
      'cascading restraint',
      'Nordenfelt',
      'restrictive covenant',
    ],
    commonIn: [
      'employment contracts',
      'executive service agreements',
      'partnership agreements',
      'shareholder agreements',
      'business sale agreements',
    ],
    status: 'use-with-caution',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'employment-non-solicitation',
    title: 'Non-Solicitation',
    slug: 'non-solicitation',
    category: 'employment',
    summary:
      'Restricts a party from soliciting or enticing away employees, contractors, clients, or customers of the other party for a specified period after the termination of the relationship.',
    description:
      'A non-solicitation clause restricts a party (typically a departing employee, contractor, or business seller) from soliciting or enticing away the employees, contractors, clients, or customers of the other party for a specified period after the termination of the relationship. Non-solicitation clauses are a form of restraint of trade and are subject to the same legal principles as non-competition clauses in Australia.\n\nNon-solicitation clauses are generally considered less restrictive than non-competition clauses because they do not prevent the restrained party from working in the same industry or carrying on a competing business; they merely prohibit active solicitation of specific individuals or entities. As a result, non-solicitation clauses may be more readily enforced by Australian courts.\n\nThe clause should clearly distinguish between solicitation (active approach or inducement) and mere acceptance of an approach initiated by the employee, contractor, client, or customer. A clause that prohibits both solicitation and dealing may be broader than reasonably necessary and may be at risk of being held unenforceable. Practitioners should consider whether separate non-solicitation provisions are needed for employees/contractors and for clients/customers, as the legitimate interests being protected may differ.',
    sampleText:
      'The Employee must not, during the Restraint Period, without the prior written consent of the Employer, directly or indirectly: (a) solicit, canvass, approach, or entice away, or endeavour to solicit, canvass, approach, or entice away, any person who was a client or customer of the Employer at any time during the 12 months immediately preceding the date of termination, for the purpose of offering goods or services that are competitive with the Business; or (b) solicit, induce, encourage, or entice away, or endeavour to solicit, induce, encourage, or entice away, any person who was an employee or contractor of the Employer at any time during the 12 months immediately preceding the date of termination. For the purposes of this clause, "Restraint Period" means the period of 12 months (or, if that period is held to be unenforceable, 6 months) from the date of termination.',
    draftingNotes:
      'Distinguish clearly between solicitation (active approach) and dealing (any interaction, whether solicited or not). A "non-dealing" clause is significantly broader than a non-solicitation clause and may be more difficult to enforce. Define the class of protected persons with precision (e.g., clients or customers with whom the employee had material dealings during a specified period, rather than all clients or customers). Use a cascading structure for the restraint period. Consider whether the clause should apply only to clients, customers, employees, and contractors with whom the restrained party had personal dealings, or to a broader class. Ensure consistency with any non-competition clause. In the employment context, consider the interaction with the general protections provisions of the Fair Work Act 2009 (Cth).',
    australianLawContext:
      'Non-solicitation clauses are a species of restraint of trade and are subject to the principles in Nordenfelt v Maxim Nordenfelt Guns and Ammunition Co Ltd [1894] AC 535. The legitimate interest protected by a non-solicitation of clients clause is the protection of customer connections and goodwill; the legitimate interest protected by a non-solicitation of employees clause is the protection of a stable, trained workforce. In New South Wales, the Restraints of Trade Act 1976 (NSW) allows courts to read down unreasonable restraints. Australian courts have generally been more willing to enforce non-solicitation clauses than non-competition clauses, provided the scope of the restraint is reasonable.',
    relatedClauses: [
      'employment-non-competition',
      'intellectual-property-confidentiality',
      'employment-severance-pay',
    ],
    riskLevel: 'medium',
    keywords: [
      'non-solicitation',
      'restraint of trade',
      'client solicitation',
      'employee solicitation',
      'restrictive covenant',
      'customer connections',
    ],
    commonIn: [
      'employment contracts',
      'executive service agreements',
      'contractor agreements',
      'business sale agreements',
      'partnership agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'employment-severance-pay',
    title: 'Severance Pay',
    slug: 'severance-pay',
    category: 'employment',
    summary:
      'Provides for payment to an employee upon termination of employment, in addition to any statutory entitlements under the Fair Work Act 2009 (Cth).',
    description:
      'A severance pay clause (also referred to as a redundancy pay or termination payment clause) specifies the payments and benefits to which an employee is entitled upon termination of employment, in addition to any statutory entitlements. Under the Fair Work Act 2009 (Cth), employees covered by the National Employment Standards (NES) are entitled to a minimum period of notice (or payment in lieu) and, in the case of redundancy, to a statutory redundancy pay entitlement based on their period of continuous service.\n\nContractual severance pay provisions may supplement the statutory entitlements by providing for additional payments, extended notice periods, accelerated vesting of share options or incentive awards, continuation of benefits, and outplacement support. Severance pay clauses are most commonly found in executive service agreements and senior management contracts, where the entitlements may be significantly more generous than the statutory minimum.\n\nPractitioners should be aware of the limits on termination payments imposed by the Corporations Act 2001 (Cth). Section 200B prohibits a company from giving a person a benefit in connection with their retirement from a managerial or executive office unless the benefit is approved by shareholders or falls within a prescribed exception. The prescribed exceptions include benefits that do not exceed one year\'s average base salary. Any severance pay provision for an officer of a company should be structured to comply with these requirements.',
    sampleText:
      'If the Employer terminates the Employee\'s employment other than for Cause (as defined in clause [X]), the Employee will be entitled to receive, in addition to any statutory entitlements under the Fair Work Act 2009 (Cth) and the National Employment Standards: (a) a severance payment equal to [number] months\' Base Salary (less applicable tax); (b) payment in lieu of any accrued but untaken annual leave and long service leave entitlements; (c) continuation of private health insurance benefits for a period of [number] months following the date of termination; and (d) access to outplacement services for a period of [number] months, at the Employer\'s cost. Payment of the severance payment is conditional upon the Employee executing a deed of release in a form satisfactory to the Employer. The total value of benefits provided under this clause must not exceed the limits prescribed by section 200B and Part 2D.2 of the Corporations Act 2001 (Cth), unless shareholder approval has been obtained.',
    draftingNotes:
      'Clearly define the circumstances in which severance pay is payable (e.g., termination without cause, redundancy) and the circumstances in which it is not payable (e.g., termination for cause, resignation). Specify the components of the severance package (cash payment, continuation of benefits, outplacement support). Ensure compliance with section 200B of the Corporations Act 2001 (Cth) for officers of companies, including the one-year average base salary cap. Consider whether the severance payment should be conditional upon the execution of a deed of release. Address the interaction with statutory notice and redundancy pay entitlements under the NES. Consider the tax treatment of severance payments, including the application of the employment termination payment (ETP) tax rules. Ensure consistency with any applicable enterprise agreement or modern award.',
    australianLawContext:
      'The National Employment Standards (NES) under the Fair Work Act 2009 (Cth) provide minimum entitlements for notice of termination (s 117) and redundancy pay (s 119). Redundancy pay under the NES ranges from 4 weeks\' pay (for 1-2 years of service) to 16 weeks\' pay (for 9-10 years of service), with a reduction for employees with more than 10 years of service. Section 200B of the Corporations Act 2001 (Cth) restricts termination benefits for officers and senior managers to no more than one year\'s average base salary without shareholder approval. The Income Tax Assessment Act 1997 (Cth) contains specific provisions for the taxation of employment termination payments, including concessional tax treatment up to specified caps.',
    relatedClauses: [
      'employment-non-competition',
      'employment-non-solicitation',
      'employment-probation-period',
      'employment-employee-benefits',
    ],
    riskLevel: 'high',
    keywords: [
      'severance pay',
      'redundancy pay',
      'termination payment',
      'NES',
      'section 200B',
      'employment termination payment',
    ],
    commonIn: [
      'executive service agreements',
      'employment contracts',
      'enterprise agreements',
      'senior management agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'employment-probation-period',
    title: 'Probation Period',
    slug: 'probation-period',
    category: 'employment',
    summary:
      'Establishes an initial period of employment during which the employer may assess the employee\'s suitability and either party may terminate with reduced notice.',
    description:
      'A probation period clause establishes an initial period of employment (commonly 3 to 6 months) during which the employer assesses the employee\'s suitability for the role, and either party may terminate the employment with a shorter notice period than would otherwise apply. Probation periods are not specifically regulated by the Fair Work Act 2009 (Cth), but the Act\'s unfair dismissal provisions are relevant: an employee of a non-small business employer is not eligible to make an unfair dismissal claim until they have completed the "minimum employment period" of 6 months (or 12 months for small business employers with fewer than 15 employees).\n\nIt is important to note that the expiry of a probationary period does not confer any additional legal protections on the employee beyond those provided by statute. However, probation periods serve a practical function by establishing a structured framework for the assessment and review of a new employee\'s performance, and by signalling the parties\' expectations regarding the initial period of employment.\n\nPractitioners should ensure that the probation period clause is consistent with the applicable modern award or enterprise agreement, as these instruments may contain specific provisions regarding probation. The clause should specify the duration of the probation period, the notice period during probation, and the process for performance review and assessment.',
    sampleText:
      'The Employee\'s employment is subject to a probation period of 6 months commencing on the Start Date (Probation Period). During the Probation Period, either party may terminate the employment by giving 1 week\'s written notice (or, in the case of the Employer, payment in lieu of notice). The Employer will conduct a performance review prior to the expiry of the Probation Period to assess the Employee\'s suitability for ongoing employment. The Employer may, at its discretion, extend the Probation Period for a further period of up to 3 months by giving the Employee written notice before the expiry of the initial Probation Period. Successful completion of the Probation Period does not guarantee ongoing employment and does not alter the at-will nature of the employment relationship, which may be terminated in accordance with this Agreement at any time.',
    draftingNotes:
      'Set the probation period at no more than 6 months to align with the minimum employment period for unfair dismissal eligibility under the Fair Work Act 2009 (Cth). Consider whether to include a power to extend the probation period and, if so, for how long. Specify the notice period during probation (commonly 1 week). Include an obligation for the employer to conduct a performance review prior to the expiry of the probation period. Note that the statutory notice requirements under the NES (s 117) apply regardless of whether the employee is on probation. Ensure consistency with any applicable modern award or enterprise agreement. Be aware that certain protections (such as the general protections provisions of the Fair Work Act) apply from the commencement of employment, regardless of any probation period.',
    australianLawContext:
      'The Fair Work Act 2009 (Cth) does not specifically regulate probation periods. However, the minimum employment period for unfair dismissal eligibility is 6 months for non-small business employers and 12 months for small business employers (s 383). The Small Business Fair Dismissal Code provides additional protections for small business employers. The NES minimum notice requirements (s 117) apply to all employees, including those on probation. The general protections provisions (Part 3-1) apply from the commencement of employment and prohibit adverse action for prescribed reasons (e.g., temporary absence due to illness, union membership). Modern awards may contain specific provisions regarding probation periods.',
    relatedClauses: [
      'employment-performance-reviews',
      'employment-severance-pay',
      'employment-employee-benefits',
    ],
    riskLevel: 'low',
    keywords: [
      'probation',
      'probation period',
      'minimum employment period',
      'unfair dismissal',
      'trial period',
      'performance review',
    ],
    commonIn: [
      'employment contracts',
      'executive service agreements',
      'letter of offer',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'employment-employee-benefits',
    title: 'Employee Benefits',
    slug: 'employee-benefits',
    category: 'employment',
    summary:
      'Specifies the non-salary benefits provided to an employee, including superannuation, leave entitlements, and other benefits beyond the statutory minimums.',
    description:
      'An employee benefits clause specifies the range of non-salary benefits and entitlements provided to an employee in connection with their employment. In Australia, the National Employment Standards (NES) under the Fair Work Act 2009 (Cth) establish minimum entitlements for matters including annual leave, personal/carer\'s leave, parental leave, long service leave, and public holidays. The Superannuation Guarantee (Administration) Act 1992 (Cth) requires employers to make superannuation contributions at the prescribed rate (currently 11.5% of ordinary time earnings, increasing to 12% from 1 July 2025).\n\nContractual benefits clauses may supplement the statutory minimums by providing additional entitlements such as additional annual leave, salary sacrifice arrangements, motor vehicle or car allowance, private health insurance, professional development allowances, employee assistance programmes, and bonus or incentive schemes. The clause should clearly specify each benefit, its value or scope, any eligibility conditions, and the terms on which it may be varied or withdrawn.\n\nPractitioners should ensure that the benefits clause is consistent with the applicable modern award or enterprise agreement, and that any contractual benefits are expressed to be in addition to (or, where more favourable, in substitution for) statutory and award entitlements. The interaction between contractual benefits and salary packaging or salary sacrifice arrangements should also be addressed.',
    sampleText:
      'In addition to the Employee\'s Base Salary, the Employer will provide the following benefits during the term of employment: (a) Superannuation: the Employer will make superannuation contributions in accordance with the Superannuation Guarantee (Administration) Act 1992 (Cth) at the applicable rate to a complying superannuation fund nominated by the Employee; (b) Annual Leave: the Employee is entitled to 4 weeks\' paid annual leave per annum in accordance with the NES, plus an additional 1 week of ex gratia leave; (c) Personal/Carer\'s Leave: the Employee is entitled to 10 days\' paid personal/carer\'s leave per annum in accordance with the NES; (d) Motor Vehicle Allowance: a motor vehicle allowance of $[amount] per annum, payable monthly in arrears; and (e) Professional Development: a professional development allowance of up to $[amount] per annum for approved courses and conferences. Benefits may be subject to salary sacrifice arrangements as agreed between the parties.',
    draftingNotes:
      'Specify each benefit clearly, including its value, eligibility conditions, and any conditions for variation or withdrawal. Ensure compliance with the NES minimum entitlements and the applicable modern award or enterprise agreement. Address the employer\'s superannuation guarantee obligations, including the applicable contribution rate and the employee\'s right to nominate a complying fund. Consider the fringe benefits tax (FBT) implications of non-salary benefits (e.g., motor vehicles, entertainment, car parking). Address salary sacrifice arrangements and their interaction with superannuation, leave entitlements, and workers\' compensation. Specify whether benefits continue during periods of leave (e.g., parental leave). Include a clause reserving the employer\'s right to vary discretionary benefits.',
    australianLawContext:
      'The National Employment Standards (NES) under the Fair Work Act 2009 (Cth) provide minimum entitlements including 4 weeks\' annual leave (s 87), 10 days\' personal/carer\'s leave (s 96), and up to 12 months\' unpaid parental leave (s 70). The Superannuation Guarantee (Administration) Act 1992 (Cth) requires employers to make superannuation contributions at the prescribed rate. The Fringe Benefits Tax Assessment Act 1986 (Cth) imposes FBT on certain non-cash benefits provided to employees. Long service leave entitlements are governed by state and territory legislation (e.g., Long Service Leave Act 2018 (Vic), Long Service Leave Act 1955 (NSW)). Modern awards may provide additional minimum entitlements above the NES.',
    relatedClauses: [
      'employment-severance-pay',
      'employment-performance-reviews',
      'employment-probation-period',
      'finance-payment-terms',
    ],
    riskLevel: 'low',
    keywords: [
      'employee benefits',
      'superannuation',
      'annual leave',
      'NES',
      'salary sacrifice',
      'fringe benefits',
      'allowances',
    ],
    commonIn: [
      'employment contracts',
      'executive service agreements',
      'enterprise agreements',
      'letters of offer',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'employment-performance-reviews',
    title: 'Performance Reviews',
    slug: 'performance-reviews',
    category: 'employment',
    summary:
      'Establishes a structured process for the regular assessment and review of an employee\'s performance against agreed objectives and key performance indicators.',
    description:
      'A performance review clause establishes the framework for the regular assessment of an employee\'s performance, typically against pre-agreed objectives, key performance indicators (KPIs), or competency standards. Performance reviews serve multiple purposes: they provide a structured mechanism for feedback and professional development, they inform decisions about remuneration adjustments and promotions, and they create a documented record that may be relevant in the event of a performance management process or termination.\n\nThe clause should specify the frequency of performance reviews (commonly annually, with interim reviews at the halfway point), the criteria against which performance will be assessed, the process for setting objectives, and the consequences of underperformance. In the Australian employment law context, a well-documented performance review process is important for managing underperformance fairly and in compliance with the unfair dismissal provisions of the Fair Work Act 2009 (Cth).\n\nPractitioners should consider the interaction between the performance review clause and any bonus or incentive provisions, as performance reviews may inform bonus determinations. The clause should also address the process for revising objectives during the review period and the employee\'s right to respond to the assessment. Where performance-based remuneration is a significant component of the total package, the performance review clause takes on heightened importance.',
    sampleText:
      'The Employer will conduct a formal performance review of the Employee at least annually, and may conduct interim reviews at any time. Performance will be assessed against the objectives and key performance indicators agreed between the Employee and the Employee\'s manager at the commencement of each review period, or as varied by agreement during the review period. The Employee will be given a reasonable opportunity to prepare for and participate in each performance review, and to provide written comments on the assessment. If a performance review identifies areas of underperformance, the Employer may implement a performance improvement plan setting out the areas requiring improvement, the expected standard, the support to be provided, and the timeframe for improvement. Nothing in this clause limits the Employer\'s right to manage the Employee\'s performance in accordance with its policies or to terminate the employment in accordance with this Agreement.',
    draftingNotes:
      'Specify the frequency of performance reviews (annual reviews are standard, with interim reviews as needed). Define the criteria for assessment, including objectives, KPIs, and competency standards. Include a process for setting and revising objectives at the commencement of each review period. Provide for the employee to participate in the review process and to respond to the assessment. Address the process for managing underperformance, including the use of performance improvement plans (PIPs). Ensure the performance review process is consistent with the employer\'s policies and the requirements of procedural fairness under the unfair dismissal provisions of the Fair Work Act 2009 (Cth). Link performance review outcomes to remuneration adjustments and bonus determinations where appropriate. Document performance reviews in writing and retain records.',
    australianLawContext:
      'The Fair Work Act 2009 (Cth) does not mandate a specific performance review process, but the unfair dismissal provisions (Part 3-2) require that a dismissal not be harsh, unjust, or unreasonable. The Fair Work Commission will consider whether the employee was notified of the performance concerns and given an opportunity to respond (s 387(b) and (c)). A well-documented performance review process, including the use of performance improvement plans, supports the procedural fairness of any subsequent performance-based termination. The Fair Work Commission has emphasised in numerous decisions the importance of a fair and transparent performance management process. The general protections provisions (Part 3-1) also apply, and performance management must not be used as a pretext for adverse action based on a prohibited reason.',
    relatedClauses: [
      'employment-probation-period',
      'employment-employee-benefits',
      'employment-severance-pay',
      'employment-non-competition',
    ],
    riskLevel: 'low',
    keywords: [
      'performance review',
      'performance management',
      'KPIs',
      'objectives',
      'performance improvement plan',
      'PIP',
      'appraisal',
    ],
    commonIn: [
      'employment contracts',
      'executive service agreements',
      'enterprise agreements',
      'HR policies',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
];
