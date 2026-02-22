export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-6 font-heading text-3xl font-bold tracking-tight text-[var(--color-primary)]">
        About ClauseVault
      </h1>

      <section className="mb-8">
        <h2 className="mb-3 font-heading text-xl font-semibold text-gray-800">
          What is ClauseVault?
        </h2>
        <p className="mb-3 text-gray-600">
          ClauseVault is an educational tool that provides sample contract
          clauses drafted for Australian commercial agreements. It is designed
          to help law students, junior practitioners, and business professionals
          understand common contractual provisions and how they are typically
          drafted.
        </p>
        <p className="text-gray-600">
          Users can browse clauses by category, search for specific provisions,
          and use the Document Builder to assemble selected clauses into a
          downloadable Word document.
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="mb-3 text-xl font-semibold text-amber-900">
          Important Legal Disclaimer
        </h2>
        <div className="space-y-3 text-sm text-amber-800">
          <p>
            <strong>This resource does not constitute legal advice.</strong> The
            clause samples provided are for general informational and
            educational purposes only. They are not tailored to any specific
            transaction, relationship, or set of circumstances.
          </p>
          <p>
            The sample clauses are drafted with reference to Australian law and
            practice but may not be suitable for your specific situation, state
            or territory jurisdiction, or industry requirements.
          </p>
          <p>
            <strong>
              You should always consult a qualified legal practitioner
            </strong>{" "}
            before using, adapting, or relying upon any clause in a binding
            agreement. No solicitor-client relationship is created by your use
            of this resource.
          </p>
          <p>
            The author and publisher of this library accept no liability for any
            loss or damage arising from the use of or reliance upon any content
            provided herein.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-heading text-xl font-semibold text-gray-800">
          How to Use
        </h2>
        <ol className="list-inside list-decimal space-y-2 text-gray-600">
          <li>
            <strong>Browse</strong> clauses by category using the sidebar, or
            search for specific terms.
          </li>
          <li>
            <strong>Read</strong> the clause detail page to understand its
            purpose, drafting notes, and Australian law context.
          </li>
          <li>
            <strong>Build</strong> a document by adding clauses to the Document
            Builder, then reorder them via drag and drop.
          </li>
          <li>
            <strong>Export</strong> your assembled document as a Word (.docx)
            file for further editing.
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-heading text-xl font-semibold text-gray-800">
          Australian Law Context
        </h2>
        <p className="text-gray-600">
          Each clause includes notes on relevant Australian legislation and
          legal principles. Key statutes frequently referenced include the{" "}
          <em>Competition and Consumer Act 2010</em> (Cth), the{" "}
          <em>Privacy Act 1988</em> (Cth), the{" "}
          <em>Corporations Act 2001</em> (Cth), and various state and territory
          legislation. These references are provided for educational context and
          are not exhaustive.
        </p>
      </section>
    </div>
  );
}
