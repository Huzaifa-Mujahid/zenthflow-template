"use client";

import RoundedPageHero from "@/components/RoundedPageHero";
import CTABanner from "@/components/CTABanner";

function Section({ number, title, children }) {
  return (
    <section className="mb-10 last:mb-0">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="text-[#e8602e] text-lg font-bold font-headline shrink-0" style={{ fontFamily: "var(--font-geist)" }}>
          {number}
        </span>
        <h2 className="text-2xl md:text-3xl font-headline font-bold text-white uppercase tracking-tight" style={{ fontFamily: "var(--font-geist)" }}>
          {title}
        </h2>
      </div>
      <div className="text-[#b8b8b8] text-base md:text-lg leading-relaxed space-y-4 pl-0 md:pl-9">
        {children}
      </div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* ── HERO (matches privacy policy / blog style) ─────────── */}
      <RoundedPageHero
        titleLines={["Terms &", "Conditions"]}
        subtitle="The following terms govern the services provided by ZENITHFLOW STUDIOS. By engaging our services, you agree to the terms outlined below."
      />

      {/* ── ROUNDED CONTENT SECTION ───────────────── */}
      <div className="w-full relative p-3 sm:p-4 lg:p-5">
        <div className="relative w-full bg-[#0D0D0D] rounded-[32px] overflow-hidden border border-neutral-800 shadow-2xl pb-16 min-h-[40vh]">
          {/* Diamond Gray Background Image (Matching Blog/Portfolio Style) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(20,20,20,0.6) 50%, rgba(0,0,0,0.85) 100%)",
            }}
          />

          <section className="relative z-10 px-5 md:px-10 lg:px-20 max-w-[1100px] mx-auto py-16 md:py-24">
            <Section number="01" title="Service Agreement">
              <p>
                Our estimates and proposals are based on a clear understanding of
                your requirements and agreed timelines. Any modifications,
                including minor changes, may result in additional costs.
                Acceptance can be made via email, verbal confirmation, payment,
                or signing the agreement.
              </p>
            </Section>

            <Section number="02" title="Scope of Services">
              <p>
                We provide PPC Advertising, SEO (Technical &amp; Local), Social
                Media Marketing, Content Marketing, and Website Design/Development
                based on agreed deliverables outlined in the proposal.
              </p>
            </Section>

            <Section number="03" title="Client Responsibilities">
              <p>
                Clients must provide accurate requirements, credentials, and
                access in a timely manner. Delays in information may lead to
                project timeline extensions or additional charges.
              </p>
            </Section>

            <Section number="04" title="Changes & Revisions">
              <p>
                Minor revisions are included within the agreed scope. However,
                additional features, redesigns after approval, or changes after
                &ldquo;Go-Live&rdquo; will incur extra charges.
              </p>
            </Section>

            <Section number="06" title="Payments & Refunds">
              <p>
                Payments must be made as per agreed terms. Delayed payments may
                result in service suspension. All payments are non-refundable
                unless required by applicable law.
              </p>
            </Section>

            <Section number="07" title="Intellectual Property">
              <p>
                Work remains the property of ZENITHFLOW STUDIOS until
                full payment is received. Reselling or duplicating our proprietary
                code without permission is prohibited.
              </p>
            </Section>

            <Section number="11" title="Limitation of Liability">
              <p>
                We are not liable for indirect damages, loss of revenue, or
                business due to service interruptions or issues arising from
                third-party tools (Google, etc.).
              </p>
            </Section>

            <Section number="15" title="Updates to Terms">
              <p>
                We reserve the right to update these Terms &amp; Conditions at any
                time. Continued use of our services indicates acceptance of the
                updated terms.
              </p>
            </Section>
          </section>
        </div>
      </div>

      {/* ── CTA BANNER ─────────────────────────────── */}
      <CTABanner />
    </div>
  );
}
