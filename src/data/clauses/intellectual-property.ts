import type { Clause } from '../types';

export const intellectualPropertyClauses: Clause[] = [
  {
    id: 'intellectual-property-ip-ownership',
    title: 'IP Ownership',
    slug: 'ip-ownership',
    category: 'intellectual-property',
    summary:
      'Defines which party owns the intellectual property created in the course of performing the agreement.',
    description:
      'An IP ownership clause is one of the most critical provisions in any agreement involving the creation of new intellectual property. It determines who owns the copyright, patents, designs, and other IP rights in materials developed during the contract. In the absence of a clear contractual allocation, ownership defaults may be unfavourable or uncertain.\n\nUnder Australian law, the general rule is that the creator of a work owns the copyright, and the inventor of a patentable invention owns the right to apply for a patent. However, there are exceptions: where a work is created by an employee in the course of employment, the employer typically owns the copyright under section 35(6) of the Copyright Act 1968 (Cth). No equivalent automatic assignment exists for independent contractors.\n\nThe clause should distinguish between pre-existing IP (background IP), IP created during the agreement (foreground IP), and any improvements or derivatives. It should clearly state who owns each category and what licence rights are granted to the non-owning party.',
    sampleText:
      'All Intellectual Property Rights in any materials, works, inventions, or deliverables created by the Supplier specifically for the Customer under this Agreement (Foreground IP) shall vest in the Customer upon creation. The Supplier hereby assigns to the Customer, with full title guarantee, all Intellectual Property Rights in the Foreground IP. The Supplier retains ownership of all Intellectual Property Rights in its pre-existing materials, tools, methodologies, and know-how (Background IP). The Supplier grants to the Customer a non-exclusive, perpetual, irrevocable, royalty-free licence to use, reproduce, and adapt the Background IP to the extent reasonably necessary for the Customer to fully use and benefit from the Foreground IP and the Deliverables.',
    draftingNotes:
      'Define "Intellectual Property Rights" broadly to capture copyright, patents, designs, trade marks, circuit layout rights, and trade secrets. Clearly distinguish between Background IP and Foreground IP. Consider whether assignment or licence is appropriate for each category. Ensure the assignment clause satisfies the formal requirements of the relevant IP statutes (e.g., written assignment for copyright under s 196(3) of the Copyright Act 1968). Consider moral rights waivers or consents under Part IX of the Copyright Act.',
    australianLawContext:
      'The Copyright Act 1968 (Cth) governs copyright ownership. Section 35(6) provides that the employer owns copyright in works created by employees in the course of employment. For contractors, ownership remains with the creator unless assigned. The Patents Act 1990 (Cth) provides that the inventor is the default owner of a patent application. The Designs Act 2003 (Cth) and Trade Marks Act 1995 (Cth) govern designs and trade marks respectively. Section 196(3) of the Copyright Act requires copyright assignments to be in writing signed by or on behalf of the assignor.',
    relatedClauses: [
      'intellectual-property-licence-grant',
      'intellectual-property-copyright-assignment',
      'intellectual-property-ip-confidentiality',
    ],
    riskLevel: 'high',
    keywords: [
      'IP ownership',
      'intellectual property',
      'foreground IP',
      'background IP',
      'assignment',
      'copyright',
    ],
    commonIn: [
      'IT development agreements',
      'consultancy agreements',
      'research agreements',
      'design contracts',
      'content creation agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'intellectual-property-patent-assignment',
    title: 'Patent Assignment',
    slug: 'patent-assignment',
    category: 'intellectual-property',
    summary:
      'Provides for the assignment of patent rights from one party to another.',
    description:
      'A patent assignment clause transfers ownership of patent rights, including the right to apply for patents, from the assignor to the assignee. This is commonly used in employment agreements, consultancy contracts, and research collaboration agreements where one party develops patentable inventions for the benefit of another.\n\nUnder the Patents Act 1990 (Cth), patents and patent applications may be assigned, but the assignment must be in writing to be effective. The assignor should also undertake to execute all further documents and do all things reasonably necessary to perfect the assignment and assist with patent prosecution.\n\nPractitioners should consider whether the assignment covers existing patents, future patents arising from the engagement, or both. The clause should also address the obligation of the inventor to disclose potentially patentable inventions and to cooperate with the patent application process.',
    sampleText:
      'The Inventor hereby assigns to the Company, with full title guarantee, all right, title, and interest in and to any invention, discovery, or improvement (whether or not patentable) conceived, developed, or reduced to practice by the Inventor in the course of performing the Services under this Agreement (Assigned Inventions). The Inventor must promptly disclose to the Company full details of any Assigned Invention. The Inventor must, at the Company\'s cost, execute all documents and do all things reasonably necessary to: (a) vest the Assigned Inventions in the Company; (b) assist the Company in applying for, obtaining, and maintaining patent protection for the Assigned Inventions in any jurisdiction; and (c) assist the Company in enforcing its rights in the Assigned Inventions.',
    draftingNotes:
      'Ensure the assignment is in writing as required by the Patents Act 1990 (Cth). Define the scope of inventions covered. Include an obligation to disclose inventions promptly. Address who bears the cost of patent prosecution and maintenance. Consider whether the clause should cover inventions created outside working hours or using the inventor\'s own resources. Include a power of attorney as a backup mechanism for executing patent-related documents.',
    australianLawContext:
      'The Patents Act 1990 (Cth) governs the registration, ownership, and assignment of patents in Australia. Section 13(1) provides that a patent gives the patentee the exclusive right to exploit the invention. Section 14 addresses ownership of inventions. Patents and patent applications may be assigned under s 100, but the assignment must be in writing. IP Australia administers the patent system. Australia is a member of the Patent Cooperation Treaty (PCT) and the Paris Convention, facilitating international patent applications.',
    relatedClauses: [
      'intellectual-property-ip-ownership',
      'intellectual-property-copyright-assignment',
      'intellectual-property-ip-confidentiality',
    ],
    riskLevel: 'high',
    keywords: [
      'patent',
      'patent assignment',
      'invention',
      'patent application',
      'disclosure',
      'prosecution',
    ],
    commonIn: [
      'employment agreements',
      'consultancy agreements',
      'research collaboration agreements',
      'technology transfer agreements',
      'joint venture agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'intellectual-property-trademark-use',
    title: 'Trade Mark Use',
    slug: 'trademark-use',
    category: 'intellectual-property',
    summary:
      'Governs the use of trade marks and branding by one party in connection with the other party\'s goods or services.',
    description:
      'A trade mark use clause regulates how a party may use the other party\'s trade marks, logos, and branding in connection with the agreement. This is common in distribution, franchise, licensing, and co-branding arrangements. The clause establishes the scope of permitted use, quality control requirements, and the obligations that attach to the use of trade marks.\n\nUnder the Trade Marks Act 1995 (Cth), a trade mark owner has exclusive rights to use the mark in relation to the goods or services for which it is registered. Licensing must be controlled by the owner to maintain the validity of the registration, as uncontrolled licensing may result in the mark becoming vulnerable to removal for non-use or deceptive use.\n\nThe clause should require the licensee to use the marks in accordance with brand guidelines, obtain prior approval for new uses, and refrain from registering confusingly similar marks. It should also address what happens to trade mark use upon termination of the agreement.',
    sampleText:
      'The Licensor grants the Licensee a non-exclusive, non-transferable licence to use the Trade Marks listed in Schedule [X] solely in connection with the marketing and sale of the Products in the Territory during the Term. The Licensee must use the Trade Marks strictly in accordance with the Licensor\'s brand guidelines as notified from time to time. The Licensee must not alter, modify, or obscure the Trade Marks without the Licensor\'s prior written consent. The Licensee must submit samples of all marketing materials bearing the Trade Marks to the Licensor for approval prior to publication. The Licensee acknowledges the Licensor\'s ownership of the Trade Marks and must not register or apply to register any trade mark that is identical or deceptively similar to the Trade Marks.',
    draftingNotes:
      'Specify the trade marks covered (by reference to a schedule listing marks and registration numbers). Define the Territory and permitted use clearly. Include quality control obligations to protect the validity of the marks. Require prior approval for new uses or marketing materials. Address the obligation to cease use upon termination and destroy or return branded materials. Consider recordal of the licence with IP Australia.',
    australianLawContext:
      'The Trade Marks Act 1995 (Cth) governs the registration, use, and licensing of trade marks in Australia. Section 20 grants the registered owner exclusive rights to use the mark. Section 8 allows authorised use by licensees, but the owner must exercise quality control to maintain registration. IP Australia administers the trade marks register. Unregistered trade marks may be protected under the common law of passing off and section 18 of the Australian Consumer Law (misleading or deceptive conduct). Trade mark licences may be recorded on the register under s 109.',
    relatedClauses: [
      'intellectual-property-ip-ownership',
      'intellectual-property-licence-grant',
      'sales-and-marketing-exclusive-dealership',
    ],
    riskLevel: 'medium',
    keywords: [
      'trade mark',
      'trademark',
      'branding',
      'logo',
      'brand guidelines',
      'licence',
    ],
    commonIn: [
      'franchise agreements',
      'distribution agreements',
      'licence agreements',
      'co-branding agreements',
      'sponsorship agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'intellectual-property-copyright-assignment',
    title: 'Copyright Assignment',
    slug: 'copyright-assignment',
    category: 'intellectual-property',
    summary:
      'Transfers copyright ownership from the creator to another party.',
    description:
      'A copyright assignment clause transfers all copyright and related rights in specified works from the assignor (typically the creator) to the assignee. This is essential in agreements where one party commissions the creation of original works, such as software, written content, designs, photographs, or artistic works.\n\nUnder section 196 of the Copyright Act 1968 (Cth), copyright is personal property and may be assigned in whole or in part. However, the assignment must be in writing signed by or on behalf of the assignor. An assignment of future copyright (i.e., copyright in works not yet created) is also possible under the Act.\n\nThe clause should also address moral rights, which are personal to the author and cannot be assigned. However, the author may consent to acts or omissions that would otherwise infringe moral rights under Part IX of the Copyright Act. A moral rights consent is typically included alongside the copyright assignment.',
    sampleText:
      'The Author hereby assigns to the Client all copyright and other intellectual property rights in the Works, including all rights of reproduction, adaptation, communication to the public, and making available online, throughout the world for the full duration of copyright. This assignment takes effect immediately upon creation of each Work. The Author warrants that the Works are original and do not infringe the intellectual property rights of any third party. The Author provides genuine consent pursuant to Part IX of the Copyright Act 1968 (Cth) to any act or omission by the Client or its licensees that would otherwise infringe the Author\'s moral rights in the Works, including the right to be attributed as the author and the right of integrity.',
    draftingNotes:
      'Ensure the assignment is in writing and signed by the assignor as required by s 196(3) of the Copyright Act 1968 (Cth). Cover both existing and future works. Address moral rights separately, as these cannot be assigned but may be subject to consent. Include representations that the works are original and non-infringing. Consider whether to include a licence-back to the author for personal portfolio use. In employment contexts, check whether s 35(6) already vests copyright in the employer.',
    australianLawContext:
      'Copyright in Australia is governed by the Copyright Act 1968 (Cth). Copyright subsists automatically upon creation of an original work; no registration is required. Section 196 permits assignment of copyright, which must be in writing (s 196(3)). Moral rights (right of attribution, right of integrity, right against false attribution) are protected under Part IX and cannot be assigned, but the author may give genuine consent to specified acts. Australia is a signatory to the Berne Convention and the TRIPS Agreement.',
    relatedClauses: [
      'intellectual-property-ip-ownership',
      'intellectual-property-patent-assignment',
      'intellectual-property-ip-confidentiality',
    ],
    riskLevel: 'high',
    keywords: [
      'copyright',
      'assignment',
      'moral rights',
      'original works',
      'authorship',
      'reproduction rights',
    ],
    commonIn: [
      'content creation agreements',
      'software development agreements',
      'design contracts',
      'publishing agreements',
      'consultancy agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'intellectual-property-licence-grant',
    title: 'Licence Grant',
    slug: 'licence-grant',
    category: 'intellectual-property',
    summary:
      'Grants permission to use specified intellectual property rights without transferring ownership.',
    description:
      'A licence grant clause authorises one party to use, reproduce, modify, or otherwise exploit the other party\'s intellectual property without transferring ownership. Licensing is the most common mechanism for granting IP rights in commercial agreements and is used extensively in software, technology, content, and brand licensing.\n\nThe clause should clearly define the scope of the licence, including the rights granted, the field of use, the territory, the duration, and whether the licence is exclusive, sole, or non-exclusive. It should also address sublicensing, assignability, and the conditions under which the licence may be revoked or terminated.\n\nIn Australian practice, IP licences should be drafted with reference to the specific IP statutes governing the relevant rights. For example, copyright licences may be exclusive (in which case they must be in writing under the Copyright Act 1968), while patent licences may be recorded on the register maintained by IP Australia.',
    sampleText:
      'The Licensor grants to the Licensee a [non-exclusive/exclusive] licence to use the Licensed IP as described in Schedule [X] for the Permitted Purpose in the Territory during the Term. The Licensee must not sublicense, assign, or transfer the Licensed IP or any rights under this licence without the Licensor\'s prior written consent. The Licensee must use the Licensed IP in accordance with any reasonable conditions or guidelines notified by the Licensor from time to time. The Licensee acknowledges that this licence does not transfer any ownership interest in the Licensed IP, and all rights not expressly granted are reserved by the Licensor. Upon termination of this Agreement, the Licensee must immediately cease all use of the Licensed IP.',
    draftingNotes:
      'Specify whether the licence is exclusive, sole, or non-exclusive, and define these terms. An exclusive copyright licence must be in writing under the Copyright Act 1968 (Cth). Clearly define the Permitted Purpose to prevent scope creep. Consider whether sublicensing should be permitted and under what conditions. Address what happens to the licence upon termination, including any transition period. For software licences, address the number of users, installations, or other usage metrics.',
    australianLawContext:
      'Under the Copyright Act 1968 (Cth), an exclusive licence must be in writing signed by or on behalf of the copyright owner (s 10). A non-exclusive licence may be oral or implied. Patent licences may be recorded on the register under the Patents Act 1990 (Cth). Trade mark licences should include quality control provisions to protect the validity of the registration. The Competition and Consumer Act 2010 (Cth) may be relevant where licence terms include restrictions on competition (e.g., exclusive territories, resale restrictions).',
    relatedClauses: [
      'intellectual-property-ip-ownership',
      'intellectual-property-trademark-use',
      'intellectual-property-ip-confidentiality',
    ],
    riskLevel: 'medium',
    keywords: [
      'licence',
      'license',
      'grant',
      'exclusive',
      'non-exclusive',
      'sublicence',
      'permitted purpose',
    ],
    commonIn: [
      'software licence agreements',
      'technology licence agreements',
      'franchise agreements',
      'content licence agreements',
      'patent licence agreements',
    ],
    status: 'standard',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
  {
    id: 'intellectual-property-ip-confidentiality',
    title: 'IP Confidentiality',
    slug: 'ip-confidentiality',
    category: 'intellectual-property',
    summary:
      'Imposes specific confidentiality obligations with respect to trade secrets and proprietary intellectual property.',
    description:
      'An IP confidentiality clause provides heightened protection for trade secrets, proprietary know-how, and other confidential intellectual property that may be disclosed during the course of the agreement. While a general confidentiality clause provides broad protection, an IP-specific confidentiality clause may impose additional obligations tailored to the nature and sensitivity of the intellectual property involved.\n\nTrade secrets in Australia are protected under the equitable doctrine of breach of confidence, but contractual protection provides greater certainty and allows the parties to specify the scope, duration, and consequences of breach. The clause should address the identification and marking of confidential IP, restrictions on reverse engineering, obligations regarding return or destruction of materials, and the survival of confidentiality obligations beyond termination.\n\nIn technology and research agreements, this clause may also address restrictions on the use of residual knowledge (i.e., general skills, ideas, and experience retained in the unaided memory of individuals who have had access to confidential IP).',
    sampleText:
      'Each party must keep strictly confidential all Confidential IP of the other party and must not, without the prior written consent of the Disclosing Party, disclose, copy, or use any Confidential IP except as strictly necessary for the performance of this Agreement. "Confidential IP" means all trade secrets, proprietary know-how, inventions (whether or not patentable), source code, algorithms, technical data, formulations, designs, and any other intellectual property that is identified as confidential or that a reasonable person would consider to be confidential. The Receiving Party must not reverse engineer, decompile, or disassemble any Confidential IP. This obligation survives termination of this Agreement indefinitely in respect of trade secrets and for a period of seven (7) years in respect of all other Confidential IP.',
    draftingNotes:
      'Define "Confidential IP" separately from general confidential information to allow for heightened protections. Consider imposing a longer or indefinite survival period for trade secrets. Address reverse engineering restrictions explicitly. Include an obligation to return or certify destruction of Confidential IP materials upon termination. Consider whether a residual knowledge clause is appropriate for technology development engagements.',
    australianLawContext:
      'Trade secrets in Australia are protected under the equitable doctrine of breach of confidence (Coco v AN Clark (Engineers) Ltd [1969] RPC 41, as applied in Australian courts). The elements are: (1) the information must have the necessary quality of confidence; (2) it must have been imparted in circumstances importing an obligation of confidence; and (3) there must be an unauthorised use of the information. Contractual provisions complement equitable protection by providing certainty. There is no standalone trade secrets statute in Australia, unlike the US Defend Trade Secrets Act or the EU Trade Secrets Directive.',
    relatedClauses: [
      'general-confidentiality',
      'intellectual-property-ip-ownership',
      'intellectual-property-licence-grant',
    ],
    riskLevel: 'high',
    keywords: [
      'trade secrets',
      'IP confidentiality',
      'proprietary information',
      'reverse engineering',
      'know-how',
      'source code',
    ],
    commonIn: [
      'technology agreements',
      'research agreements',
      'software development agreements',
      'consultancy agreements',
      'joint venture agreements',
    ],
    status: 'recommended',
    jurisdiction: 'AU',
    lastUpdated: '2025-02-01',
  },
];
