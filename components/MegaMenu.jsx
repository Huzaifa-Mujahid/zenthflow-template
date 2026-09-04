"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesShowcaseData } from "@/data/servicesData";

export default function MegaMenu({ onClose }) {
  const [activeService, setActiveService] = useState(servicesShowcaseData[0]);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (service) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveService(service);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveService(servicesShowcaseData[0]);
    }, 200);
  };

  const handlePanelEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div 
      className="bg-[#111] rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden flex w-[900px]"
      onMouseLeave={handleMouseLeave}
    >
      {/* Left Panel - Services */}
      <div className="w-[230px] flex flex-col p-3 border-r border-white/10">
        {servicesShowcaseData.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.id}`}
            onMouseEnter={() => handleMouseEnter(service)}
            onFocus={() => handleMouseEnter(service)}
            onClick={onClose}
            className={`px-4 py-3 text-sm font-body font-medium transition-colors rounded-xl flex items-center justify-between ${
              activeService.id === service.id
                ? "bg-white/5 text-white"
                : "text-[#c4c7c8] hover:bg-white/5 hover:text-white"
            }`}
          >
            {service.title}
            {activeService.id === service.id && (
              <motion.div
                layoutId="activeIndicator"
                className="w-1 h-4 bg-white rounded-full absolute left-0"
              />
            )}
          </Link>
        ))}
      </div>

      {/* Middle Panel - Sub Services */}
      <div 
        className="w-[280px] p-6 relative bg-[#111] border-r border-white/10"
        onMouseEnter={handlePanelEnter}
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex flex-col h-full"
          >
            <h3 className="text-white font-display text-lg mb-4 pb-2 border-b border-white/10 uppercase" style={{ fontFamily: "var(--font-geist)" }}>
              {activeService.title}
            </h3>
            
            <div className="flex flex-col gap-2 flex-grow">
              {activeService.subServices?.map((sub, index) => (
                <Link
                  key={index}
                  href={`/services/${activeService.id}/${sub.id}`}
                  onClick={onClose}
                  className="group flex items-center justify-between text-base text-[#a8a8a8] hover:text-white transition-colors py-1.5"
                >
                  <span>{sub.title}</span>
                  <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </Link>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10">
              <Link 
                href={`/services/${activeService.id}`}
                onClick={onClose}
                className="group inline-flex items-center gap-2 text-sm text-white font-medium hover:opacity-80 transition-opacity"
              >
                View All {activeService.title}
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Panel - Image */}
      <div 
        className="w-[390px] p-3 relative bg-[#111] overflow-hidden"
        onMouseEnter={handlePanelEnter}
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-950 border border-white/8"
            style={{ boxShadow: "0 15px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)" }}
          >
            <Image
              src={activeService.image}
              alt={activeService.title}
              fill
              className="object-cover"
              sizes="390px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white text-sm font-medium leading-relaxed line-clamp-2">
                {activeService.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
