"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Gem,
  Eye,
  Code2,
  Database,
  Server,
  Terminal,
  GitBranch,
  Cpu,
} from "lucide-react";
import RoundedPageHero from "@/components/RoundedPageHero";
import CTABanner from "@/components/CTABanner";

/* ─── DATA ───────────────────────────────────────────────── */

const values = [
  {
    title: "Pixel Perfect",
    desc: "Obsessive attention to craft. Every element and every line of code is refined for maximum performance and visual excellence.",
    icon: Gem,
    num: "01",
  },
  {
    title: "ROI Driven",
    desc: "Results above all else. We engineer high-converting digital products that transform visitors into paying customers, methodically.",
    icon: Zap,
    num: "02",
  },
  {
    title: "Future Proof",
    desc: "Cutting-edge technology always. Harnessing the latest in AI and modern frameworks to keep your brand ahead of the curve.",
    icon: Eye,
    num: "03",
  },
];

const stack = [
  { label: "Next.js", category: "Frontend", icon: Code2 },
  { label: "React.js", category: "Frontend", icon: Code2 },
  { label: "PostgreSQL", category: "Database", icon: Database },
  { label: "Django", category: "Backend", icon: Server },
  { label: "Python", category: "Automation", icon: Terminal },
  { label: "n8n", category: "Workflows", icon: GitBranch },
  { label: "AI Agents", category: "Automation", icon: Cpu },
  { label: "Node.js", category: "Backend", icon: Server },
];

/* ─── ANIMATION VARIANTS ─────────────────────────────────── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
  viewport: { once: true, margin: "-80px" },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  viewport: { once: true, margin: "-80px" },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  viewport: { once: true, margin: "-80px" },
});

/* ─── PAGE ───────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">

      {/* ── HERO ── */}
      <RoundedPageHero
        titleLines={["WHO WE ARE"]}
        subtitle="The journey, the team, and the dedication powering ORBITIX DIGITAL — a collective committed to crafting digital solutions that propel businesses forward."
      />

      {/* ── VALUES ── */}
      <div className="w-full relative bg-neutral-950 p-3 sm:p-4 lg:p-5">
        <div className="relative w-full bg-[#0D0D0D] rounded-[32px] overflow-hidden border border-neutral-800 shadow-2xl">
          {/* Blue Copper Background Image */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "url('/sections-bg/copper box.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.55,
            }}
          />

          {/* Dark overlay so content stays readable */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "rgba(0,0,0,0.40)" }}
          />

          <section className="relative z-10 py-16 md:py-24">
            <div className="max-w-[1440px] mx-auto px-5 md:px-20">
              <motion.div {...fadeUp()} className="text-center mb-20">
                <span className="font-label text-[#a8a8a8] block mb-4 uppercase">
                  Core Philosophy
                </span>
                <h2
                  className="font-display chrome-text"
                  style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
                >
                  Our Values
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((v, i) => (
                  <motion.div
                    key={v.title}
                    {...fadeUp(i * 0.15)}
                    className="glass-card h-[350px] p-10 relative group overflow-hidden flex flex-col justify-end cursor-default"
                  >
                    <div
                      className="absolute -right-6 -top-6 text-white/[0.04] font-bold font-display transition-all duration-500 group-hover:text-white/[0.08]"
                      style={{ fontSize: "110px" }}
                    >
                      {v.num}
                    </div>

                    {/* Center Content (Default state) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 group-hover:-translate-y-10 group-hover:opacity-0">
                      <v.icon size={48} className="text-[#8a8f92] mb-6" />
                      <h3 className="font-headline text-2xl uppercase text-white">
                        {v.title}
                      </h3>
                    </div>

                    {/* Reveal Content (Hover state) */}
                    <div className="relative z-10 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-center">
                      <h3 className="font-headline text-2xl mb-4 uppercase text-[#8a8f92]">
                        {v.title}
                      </h3>
                      <p className="font-body text-white/80 leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ── TECH STACK ── */}
      <div className="w-full relative bg-neutral-950 p-3 sm:p-4 lg:p-5">
        <div className="relative w-full bg-[#0D0D0D] rounded-[32px] overflow-hidden border border-neutral-800 shadow-2xl">
          {/* Blur Copper Background Image */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "url('/sections-bg/blur copper.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.30,
            }}
          />

          {/* Dark overlay so content stays readable */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "rgba(0,0,0,0.45)" }}
          />

          <section className="relative z-10 py-16 md:py-24">
            <div className="max-w-[1440px] mx-auto px-5 md:px-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                <motion.div {...fadeLeft()}>
                  <span className="font-label text-[#a8a8a8] block mb-4 uppercase">
                    The Arsenal
                  </span>
                  <h2
                    className="font-display chrome-text"
                    style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
                  >
                    Built With<br />The Best Stack
                  </h2>
                  <p className="font-body text-[#8e9192] text-lg mt-6 leading-relaxed">
                    Every tool in our stack is selected for performance, scalability,
                    and developer experience. We leverage the same technology that
                    powers modern SaaS platforms and AI systems — because our
                    clients deserve nothing less.
                  </p>
                </motion.div>

                <motion.div
                  {...fadeRight(0.1)}
                  className="grid grid-cols-2 gap-4"
                >
                  {stack.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: i * 0.06,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        viewport={{ once: true }}
                        className="glass-card p-5 flex flex-col gap-2 group hover:border-[#8a8f92]/30 transition-colors duration-300"
                      >
                        <div className="flex items-center gap-2">
                          <Icon size={16} className="text-[#8a8f92]" />
                          <span className="font-label text-[#8a8f92] text-[10px]">
                            {item.category}
                          </span>
                        </div>
                        <span className="font-headline text-white text-base">
                          {item.label}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ── CTA ── */}
      <CTABanner />

    </div>
  );
}
