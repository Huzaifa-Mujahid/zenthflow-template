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

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* ── HERO (matches blog page style) ─────────── */}
      <RoundedPageHero
        titleLines={["Privacy", "Policy"]}
        subtitle="How ORBITIX DIGITAL collects, uses, and protects your personal information — including when you opt in to receive SMS communications from us."
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
            <p className="text-[#e5e2e1] text-base md:text-lg leading-relaxed mb-14 font-body">
              ORBITIX DIGITAL values your privacy and is committed
              to protecting your personal information. This Privacy Policy
              explains how we collect, use, and protect your information,
              including when you opt in to receive SMS communications from us.
            </p>

            <Section number="1" title="Information We Collect">
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#e8602e]">
                <li>Name, phone number, and email address</li>
                <li>Business information (if applicable)</li>
                <li>
                  Any information you voluntarily provide through our website,
                  forms, or communications
                </li>
              </ul>
            </Section>

            <Section number="2" title="How We Use Your Information">
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#e8602e]">
                <li>
                  Provide and manage our services (SEO, social media management,
                  website development, etc.)
                </li>
                <li>
                  Communicate with you regarding appointments, updates, and
                  support
                </li>
                <li>Send transactional and service-related messages</li>
                <li>
                  Deliver SMS communications only if you have opted in
                </li>
              </ul>
            </Section>

            <Section number="3" title="SMS Communications & Consent">
              <p>
                By providing your phone number and opting in, you consent to
                receive SMS messages from ORBITIX DIGITAL. These may
                include:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#e8602e]">
                <li>Appointment reminders</li>
                <li>Follow-ups</li>
                <li>Customer support messages</li>
                <li>Service updates</li>
              </ul>
              <p>
                Message frequency may vary. Standard message and data rates may
                apply.
              </p>
              <p>
                You can opt out at any time by replying{" "}
                <span className="text-white font-semibold">STOP</span> to
                unsubscribe or <span className="text-white font-semibold">HELP</span>{" "}
                for assistance.
              </p>
            </Section>

            <Section number="4" title="Data Sharing and Disclosure">
              <p>
                We do not sell, rent, or share your personal information,
                including phone numbers, email or any other information related
                to your business with third parties for marketing or promotional
                purposes.
              </p>
              <p>
                We may share information only with service providers who help us
                operate our business (e.g., communication platforms like Zoom
                Phone) or when required by law. All third parties are required to
                keep your information confidential.
              </p>
            </Section>

            <Section number="5" title="Data Security">
              <p>
                We implement appropriate technical and organizational measures to
                protect your personal information from unauthorized access,
                disclosure, or misuse.
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
