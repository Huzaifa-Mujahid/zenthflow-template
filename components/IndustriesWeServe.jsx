"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Stethoscope, 
  Store,
  Car,
  Landmark, 
  Briefcase, 
  GraduationCap,
  HardHat,
  ShieldCheck,
  Activity,
  Home
} from "lucide-react"; 

const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: <Stethoscope className="w-14 h-14 text-[#C57035]" strokeWidth={1.2} />,
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173ff9e5e3c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "retail",
    name: "Retail & CPG",
    icon: <Store className="w-14 h-14 text-[#C57035]" strokeWidth={1.2} />,
    imageUrl: "https://images.unsplash.com/photo-1556740749-887f6717d5e4?q=80&w=1950&auto=format&fit=crop",
  },
  {
    id: "automotive",
    name: "Automotive",
    icon: <Car className="w-14 h-14 text-[#C57035]" strokeWidth={1.2} />,
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
  },
  {
    id: "finance",
    name: "Finance & Banking",
    icon: <Landmark className="w-14 h-14 text-[#C57035]" strokeWidth={1.2} />,
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1950&auto=format&fit=crop",
  },
  {
    id: "education",
    name: "Education",
    icon: <GraduationCap className="w-14 h-14 text-[#C57035]" strokeWidth={1.2} />,
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "professional",
    name: "Professional Services",
    icon: <Briefcase className="w-14 h-14 text-[#C57035]" strokeWidth={1.2} />,
    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "contractors",
    name: "General Contractors",
    icon: <HardHat className="w-14 h-14 text-[#C57035]" strokeWidth={1.2} />,
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "insurance",
    name: "Insurance Solutions",
    icon: <ShieldCheck className="w-14 h-14 text-[#C57035]" strokeWidth={1.2} />,
    imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "trainers",
    name: "Personal Trainers",
    icon: <Activity className="w-14 h-14 text-[#C57035]" strokeWidth={1.2} />,
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: <Home className="w-14 h-14 text-[#C57035]" strokeWidth={1.2} />,
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function IndustriesWeServe() {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeIndustry = industries[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 bg-black overflow-hidden font-sans relative">
      <div className="mx-3 sm:mx-4 lg:mx-5 bg-[#0D0D0D] rounded-t-[24px] rounded-b-[24px] border border-neutral-800 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url("/sections-bg/blur copper.png")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25 }} />
        <div className="relative z-10 container mx-auto px-6 md:px-8 max-w-[1300px] py-8 md:py-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Column */}
          <div className="w-full lg:w-[45%] flex flex-col z-10">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display chrome-text mb-6"
              style={{
                fontFamily: "var(--font-geist)",
                fontSize: "clamp(36px, 4vw, 60px)",
                lineHeight: 1.1,
              }}
            >
              Industries we serve
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#8e9192] text-[17px] leading-relaxed mb-10 max-w-[480px]"
            >
              We partner with global enterprises across industries to solve complex challenges through practical, scalable technology services aligned with their business goals, helping them adapt, grow, and lead in a fast-changing world.
            </motion.p>

            {/* Vertical Slot Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-6 mb-10 pl-2"
            >
              {/* Active Icon Container */}
              <div className="w-16 h-16 shrink-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndustry.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeIndustry.icon}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Sliding List */}
              <div className="relative h-[144px] overflow-hidden w-full select-none">
                <motion.div 
                  className="absolute left-0 w-full"
                  animate={{ y: (1 - activeIndex) * 48 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {industries.map((ind, i) => {
                    const isActive = i === activeIndex;
                    return (
                      <div 
                        key={ind.id} 
                        className="h-[48px] flex items-center cursor-pointer"
                        onClick={() => setActiveIndex(i)}
                      >
                        <span 
                          className={`text-[22px] md:text-[24px] tracking-wide transition-all duration-300 ${
                            isActive 
                              ? "font-bold text-white" 
                              : "font-medium text-[#8e9192] hover:text-white"
                          }`}
                        >
                          {ind.name}
                        </span>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>

            {/* Learn More Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <button className="relative group overflow-hidden bg-gradient-to-b from-[#d8d8d8] to-[#ffffff] text-black px-8 py-3.5 rounded-[10px] text-sm font-semibold tracking-wide w-full sm:w-auto border border-[#C57035]/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(197,112,53,0.4)] hover:-translate-y-0.5 hover:border-[#C57035]">
                <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[150%]">LEARN MORE</span>
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-[150%] group-hover:translate-y-0">LEARN MORE</span>
              </button>
            </motion.div>
          </div>

{/* Right Column (Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[55%]"
          >
            <div className="relative h-[350px] lg:h-[400px] w-full rounded-[2rem] overflow-hidden">
              <Image
                src="/Industry.jpg"
                alt="Industries"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at center, rgba(197,112,53,0.35) 0%, rgba(197,112,53,0.1) 45%, transparent 75%)", mixBlendMode: "screen", filter: "blur(18px)" }} />
            </div>
          </motion.div>

        </div>
        </div>
      </div>
    </section>
  );
}
