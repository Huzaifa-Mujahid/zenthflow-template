"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What services does your agency provide?",
    answer: "We offer a comprehensive suite of digital services including custom web development, mobile app creation, UI/UX design, AI integration, digital strategy, branding, and automation solutions. Our goal is to provide end-to-end tech infrastructure for your business."
  },
  {
    question: "How do you approach a new project?",
    answer: "We start with a deep dive into your business goals and technical requirements. From there, we create a strategic plan, followed by design prototypes and iterative development cycles, ensuring full transparency and alignment at every step."
  },
  {
    question: "What is the typical timeline for a project?",
    answer: "Project timelines vary depending on complexity and scope. A standard web application might take 4-8 weeks, while enterprise-level custom software or AI integrations can take 3-6 months. We provide a detailed timeline during the proposal phase."
  },
  {
    question: "How do you handle revisions?",
    answer: "We believe in collaborative development. We include dedicated revision cycles during the design and development phases to ensure the final product aligns perfectly with your vision before launch."
  }
];

export default function FAQ({
  items = faqData,
  titleLines = ["Got questions?", "We've got", "answers"],
  subtitle = "Everything you need to know about our process, services, and how we work together",
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
