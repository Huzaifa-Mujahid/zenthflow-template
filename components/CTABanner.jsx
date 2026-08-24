"use client";

import { motion } from "framer-motion";
import OrangeButton from "@/components/OrangeButton";

export default function CTABanner() {
  return (
    <section className="py-14 px-5 md:px-20 max-w-[1440px] mx-auto mb-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-80px" }}
        className="text-center relative py-10"
      >
        <div className="relative z-10">
          <span className="font-label text-[#a8a8a8] block mb-6 tracking-widest text-xs uppercase">
            Get Started
          </span>
          <h2
            className="font-display chrome-text mb-10 text-center"
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: "clamp(34px, 6vw, 88px)",
            }}
          >
            Transform Your
            <br />
            <span className="block">Ideas Today</span>
          </h2>

          <OrangeButton href="/contact" label="BOOK CONSULTATION" />
        </div>
      </motion.div>
    </section>
  );
}
