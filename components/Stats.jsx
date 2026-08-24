"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import AnimateNumbers from "@/components/AnimateNumbers";

const statsData = [
  {
    number: "150+",
    title: "Projects completed",
    desc: "Trusted among the top 1% of freelancers worldwide."
  },
  {
    number: "120+",
    title: "Clients served",
    desc: "From startups to giants - each treated like our only one."
  },
  {
    number: "100%",
    title: "Client Satisfaction",
    desc: "All 5-star reviews. No compromises. No \"just okay.\""
  },
  {
    number: "7+",
    title: "Years of experience",
    desc: "Expertise in UX, branding, and growth-focused design."
  }
];

export default function Stats() {
  return (
    <section className="bg-black py-20 px-5 md:px-20 text-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12 relative z-10">
        {/* Label */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-3xl font-medium text-white"
        >
          By the Numbers
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col"
            >
              <h3 className="text-6xl lg:text-[80px] font-medium tracking-tighter mb-4 lg:mb-6">
                <AnimateNumbers value={stat.number} />
              </h3>
              
              {/* Divider Line */}
              <div className="w-full border-t border-dotted border-white/30 mb-4 lg:mb-6"></div>
              
              <h4 className="text-xl md:text-2xl font-medium mb-3">
                {stat.title}
              </h4>
              <p className="text-[#a8a8a8] text-base leading-relaxed pr-4">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
