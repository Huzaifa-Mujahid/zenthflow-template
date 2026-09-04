"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What type of solutions do you specialize in?",
    answer: "We specialize in a wide spectrum of digital solutions including bespoke web development, mobile application design, UI/UX engineering, AI-powered automation, strategic digital consulting, brand identity creation, and workflow optimization — all tailored to build robust technology foundations for your organization."
  },
  {
    question: "What does your project workflow look like?",
    answer: "Our process begins with a thorough understanding of your organizational goals and technical landscape. We then architect a comprehensive strategy, move into design prototyping, and execute through iterative development sprints — maintaining complete visibility and alignment at every checkpoint."
  },
  {
    question: "How long does a typical engagement take?",
    answer: "Engagement durations depend on project scope and complexity. A standard web application generally spans 4-8 weeks, whereas enterprise-grade custom software or AI implementations may extend to 3-6 months. We outline a precise timeline as part of our initial proposal."
  },
  {
    question: "Do you accommodate modification requests?",
    answer: "Absolutely. We champion a co-creative approach and build structured revision windows into both the design and development phases, ensuring the final deliverable mirrors your exact expectations prior to deployment."
  },
  {
    question: "How is your pricing structured?",
    answer: "We steer away from inflexible, standardized packages. Instead, we craft bespoke, value-driven solutions calibrated to your particular objectives and financial parameters. Reach out to us for a customized proposal and we'll manage the rest."
  }
];

export default function FAQ({
  items = faqData,
  titleLines = ["Got questions?", "We've got", "answers"],
  subtitle = "Everything you need to know about our process, capabilities, and how we collaborate with our partners",
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-6 px-3 sm:px-4 lg:px-5 bg-black relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto bg-[#0D0D0D] rounded-t-[24px] rounded-b-[24px] border border-neutral-800 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url("/sections-bg/copper dot.png")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25 }} />
      <div className="relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 px-5 md:px-20 pt-6 pb-10">
        
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-5/12 flex flex-col items-start lg:sticky top-24 h-fit"
        >
          <h2 className="text-[40px] md:text-[56px] leading-[1.05] font-medium tracking-tight mb-6 text-white">
            {titleLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < titleLines.length - 1 && <br />}
              </span>
            ))}
          </h2>
          
          <p className="text-[#8e9192] text-lg leading-relaxed max-w-sm">
            {subtitle}
          </p>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-7/12 flex flex-col gap-4"
        >
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.08 * index, ease: [0.16, 1, 0.3, 1] }}
              className="text-black rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_rgba(197,112,53,0.4)]"
              style={{ background: "linear-gradient(160deg, #ffffff 0%, #ededed 25%, #d8d8d8 55%, #c4c4c4 100%)" }}
              onClick={() => toggleFaq(index)}
            >
              <div className="px-6 py-6 md:px-8 md:py-8 flex justify-between items-center">
                <h3 className="text-xl md:text-[22px] font-medium pr-8 leading-tight text-black">
                  {item.question}
                </h3>
                <div className="shrink-0 text-black">
                  {openIndex === index ? <Minus size={24} strokeWidth={1.5} /> : <Plus size={24} strokeWidth={1.5} />}
                </div>
              </div>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-[#4b5563] text-base md:text-lg leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
      </div>
    </section>
  );
}
