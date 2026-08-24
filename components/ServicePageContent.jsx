"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Zap, Rocket } from "lucide-react";
import ProcessTimeline from "@/components/ProcessTimeline";
import FAQ from "@/components/FAQ";

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

export default function ServicePageContent({ pageContent }) {
  if (!pageContent) return null;

  const { process, faqs } = pageContent;

  return (
    <div className="bg-black">
      {process?.length > 0 && (
        <>
          <Divider />
          <ProcessSection process={process} />
        </>
      )}

      {faqs?.length > 0 && (
        <>
          <Divider />
          <FAQ items={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
        </>
      )}
    </div>
  );
}
