"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Zap, Rocket } from "lucide-react";
import ProcessTimeline from "@/components/ProcessTimeline";
import FAQ from "@/components/FAQ";
import IndustryShowcase from "@/components/IndustryShowcase";
import WebsiteAudit from "@/components/WebsiteAudit";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.72, delay, ease: [0.16, 1, 0.3, 1] },
  viewport: { once: true, margin: "-60px" },
});

function SectionLabel({ text }) {
  return (
    <span className="font-label text-[#a8a8a8] block mb-5">
      {text}
    </span>
  );
}

function Divider() {
  return (
    <div className="w-full border-t border-white/5" />
  );
}

const processIcons = [
  <Search strokeWidth={1.5} className="w-8 h-8" />,
  <PenTool strokeWidth={1.5} className="w-8 h-8" />,
  <Code2 strokeWidth={1.5} className="w-8 h-8" />,
  <Zap strokeWidth={1.5} className="w-8 h-8" />,
  <Rocket strokeWidth={1.5} className="w-8 h-8" />,
];

function WhyItMattersSection({ data }) {
  return (
    <section className="px-5 md:px-20 max-w-[1440px] mx-auto py-16 md:py-20">
      <div className="rounded-[24px] border border-white/10 overflow-hidden relative"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(197,112,53,0.08) 50%, rgba(255,255,255,0.05) 100%)"
        }}
      >
        <div className="px-8 md:px-16 py-16 md:py-20">
          <motion.div {...fadeUp()} className="text-center">
            <SectionLabel text={data.title} />
            <h2
              className="font-display chrome-text uppercase mb-8 max-w-4xl mx-auto"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1 }}
            >
              {data.headline}
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="max-w-4xl mx-auto text-center">
            <p className="text-[#a8a8a8] text-lg leading-relaxed mb-6">
              {data.description}
            </p>
            <p className="text-[#a8a8a8] text-lg leading-relaxed mb-8">
              {data.body}
            </p>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
              <p className="text-white text-lg leading-relaxed font-medium">
                {data.highlight}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ process }) {
  const mappedSteps = process.map((item, i) => ({
    title: item.title,
    description: item.body,
    icon: processIcons[i % processIcons.length]
  }));

  return (
    <section className="px-5 md:px-20 max-w-[1440px] mx-auto py-16 md:py-20 overflow-hidden">
      <motion.div {...fadeUp()}>
        <SectionLabel text="How We Work" />
        <h2
          className="font-display chrome-text uppercase mb-12"
          style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
        >
          Our Process
        </h2>
      </motion.div>
      <ProcessTimeline steps={mappedSteps} hideHeader={true} />
    </section>
  );
}

export default function ServicePageContent({ pageContent, showAudit = false }) {
  if (!pageContent) return null;

  const { whyItMatters, process, faqs, industries } = pageContent;

  return (
    <div className="bg-black">
      {whyItMatters && (
        <>
          <Divider />
          <WhyItMattersSection data={whyItMatters} />
        </>
      )}

      {process?.length > 0 && (
        <>
          <Divider />
          <ProcessSection process={process} />
        </>
      )}

      <IndustryShowcase 
        industries={industries} 
        subtitle={industries ? "Every industry has a distinct visual language and set of expectations. We build brand identities engineered for how your specific market thinks, feels, and buys." : undefined}
      />

      {faqs?.length > 0 && (
        <>
          <Divider />
          <FAQ items={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
        </>
      )}

      {showAudit && <WebsiteAudit />}
    </div>
  );
}
