"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, Globe, ArrowRight } from "lucide-react";
import Image from "next/image";
import HeroTitle from "@/components/HeroTitle";
import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Stats from "@/components/Stats";
import WebsiteAudit from "@/components/WebsiteAudit";
import CTABanner from "@/components/CTABanner";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const whyPoints = [
  {
    title: "Unrivaled Precision",
    desc: "Every pixel and every line of code is optimized for peak performance and visual impact.",
  },
  {
    title: "Strategic Dominance",
    desc: "We build market-dominating digital assets that convert visitors into customers, systematically.",
  },
  {
    title: "Future-Proof Technology",
    desc: "Leveraging the latest in AI and modern architecture to keep your brand ahead of the curve.",
  },
  {
    title: "Full Transparency",
    desc: "Radical honesty at every stage — from engineering metrics to collaborative design cycles.",
  },
  {
    title: "Quality Delivery",
    desc: "No false promises. We deliver exactly what we build — premium quality, on time, every time.",
  },
];

const marqueeItems = [
  "WEB DEVELOPMENT",
  "BRANDING",
  "UI/UX DESIGN",
  "MOBILE APPS",
  "SEO",
  "VIDEO EDITING",
  "AUTOMATION",
  "AI INTEGRATION",
  "DIGITAL STRATEGY",
];

const brandLogos = [
  { src: "amazon-removebg-preview.webp", alt: "Amazon" },
  { src: "google-removebg-preview.webp", alt: "Google" },
  { src: "supabase-removebg-preview.webp", alt: "Supabase" },
  { src: "vercel-removebg-preview.webp", alt: "Vercel" },
  { src: "amazon-removebg-preview.webp", alt: "Amazon" },
  { src: "google-removebg-preview.webp", alt: "Google" },
  { src: "supabase-removebg-preview.webp", alt: "Supabase" },
  { src: "vercel-removebg-preview.webp", alt: "Vercel" },
];



// ── Main Page ─────────────────────────────────────────

const heroBgImages = [
  "/herosection images/1.png",
];

export default function HomePage() {
  const marqueeContent = marqueeItems.join(" · ") + " · ";
  const [heroIndex, setHeroIndex] = useState(0);
  const [auditUrl, setAuditUrl] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroBgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const textIsDark = true;

  const heroHeadingLines = [
    { text: "We build", highlightWord: null },
    { text: "tech infrastructure", highlightWord: null },
    { text: "for the future", highlightWord: null },
    { text: "of business", highlightWord: "business" },
  ];

  return (
    <div className="bg-black">
      {/* ── HERO ───────────────────────────────────── */}
      <section className="w-full relative bg-neutral-950 p-3 sm:p-4 lg:p-5 min-h-[95vh] flex flex-col">
        <div className="relative w-full flex-grow bg-[#0D0D0D] rounded-[32px] overflow-hidden border border-neutral-800 shadow-2xl flex flex-col justify-center p-8 sm:p-12 lg:p-16">
          
          {/* Background Image Overlay */}
          <AnimatePresence mode="wait">
            <motion.div
              key={heroIndex}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.5, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{
                backgroundImage: `url("${heroBgImages[heroIndex]}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </AnimatePresence>

          {/* Left-side dim overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 60%)",
            }}
          />

          {/* Grid Overlay for texture */}
          <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              backgroundPosition: 'center',
              maskImage: 'radial-gradient(circle at center, black 10%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 10%, transparent 80%)'
            }}></div>
          </div>

          {/* Card Content */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-10 mt-10">
            {/* Left - Main Content */}
            <div className="flex flex-col items-start text-left max-w-3xl">
              {/* Main Heading — Vertically Stacked Lines */}
              <h1
                className="font-bold tracking-tight uppercase"
                style={{ lineHeight: 1.05 }}
              >
                <span className="sr-only">We build tech infrastructure for the future of business</span>
                <span aria-hidden="true" className="flex flex-col gap-0">
                  {heroHeadingLines.map((line, i) => (
                    <span key={i} className="block overflow-hidden">
                      <motion.span
                        className="block"
                        style={{ fontSize: "clamp(24px, 3.5vw, 52px)" }}
                        initial={{ y: "110%", opacity: 0, filter: "blur(8px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{
                          duration: 0.85,
                          ease: [0.16, 1, 0.3, 1],
                          delay: 0.08 + i * 0.12,
                        }}
                      >
                        {line.highlightWord ? (
                          <>
                            <span
                              className="inline-block"
                              style={{
                                backgroundImage: "linear-gradient(to bottom, #ffffff 0%, #b8b8b8 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                marginRight: "0.25em",
                              }}
                            >
                              {line.text.replace(line.highlightWord, "")}
                            </span>
                            <span
                              className="inline-block text-[0.9em] rounded-lg px-3 sm:px-4 py-1 text-black"
                              style={{
                                background: "linear-gradient(to bottom, #ffffff 0%, #b8b8b8 100%)",
                                boxShadow: "inset 0 0 0 1px #d1d5db, inset 0 -1px #d1d5db",
                                marginBottom: "0.15em",
                              }}
                            >
                              {line.highlightWord}
                            </span>
                          </>
                        ) : (
                          <span
                            className="inline-block"
                            style={{
                              backgroundImage: "linear-gradient(to bottom, #ffffff 0%, #b8b8b8 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }}
                          >
                            {line.text}
                          </span>
                        )}
                      </motion.span>
                    </span>
                  ))}
                </span>
              </h1>

              {/* Sub Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="font-body text-[#a8a8a8] text-base sm:text-lg leading-relaxed max-w-xl mt-6"
              >
                Helping businesses launch, grow, and dominate with custom software,
                web apps, and strategic digital marketing.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-start gap-4 mt-10"
              >
                <Link href="/contact">
                  <button className="relative group overflow-hidden bg-gradient-to-b from-[#d8d8d8] to-[#ffffff] text-black px-8 py-3.5 rounded-[10px] text-sm font-semibold tracking-wide w-full sm:w-auto border border-[#C57035]/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(197,112,53,0.4)] hover:-translate-y-0.5 hover:border-[#C57035]">
                    <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[150%]">Book a Call</span>
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-[150%] group-hover:translate-y-0">Book a Call</span>
                  </button>
                </Link>
                <Link href="/portfolio">
                  <button className="relative group overflow-hidden px-8 py-3.5 rounded-[10px] text-sm font-semibold tracking-wide w-full sm:w-auto transition-all duration-300 hover:-translate-y-0.5 text-[#c4c7c8] hover:text-[#C57035] border border-[#d1d5db] hover:border-[#C57035] hover:shadow-[0_0_15px_rgba(197,112,53,0.25)]">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#C57035]/20 to-[#B85D19]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[10px]"></div>
                    <span className="relative z-10 block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[150%]">View Projects</span>
                    <span className="absolute inset-0 z-10 flex items-center justify-center translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">View Projects</span>
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Right - Free Audit Input */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="w-full max-w-sm"
            >
              <p className="text-[#c4c7c8] text-sm mb-3 font-semibold">Get Free Audit of Your Website</p>
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Globe size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666] z-10 pointer-events-none" />
                  <input
                    type="text"
                    value={auditUrl}
                    onChange={(e) => setAuditUrl(e.target.value)}
                    placeholder="Enter your website URL"
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-3 py-2.5 text-white placeholder-[#666] focus:outline-none focus:border-white/30 transition-colors text-sm"
                  />
                </div>
                <button
                  onClick={() => {
                    if (auditUrl.trim()) {
                      const section = document.getElementById('free-audit');
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  disabled={!auditUrl.trim()}
                  className="bg-gradient-to-b from-[#d8d8d8] to-[#ffffff] text-black px-4 py-2.5 rounded-lg text-sm font-semibold hover:shadow-[0_0_12px_rgba(255,255,255,0.3)] transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Analyze <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BRAND LOGOS MARQUEE ───────────────────── */}
      <section className="py-8 border-y border-white/5 overflow-hidden bg-black/50 backdrop-blur-sm relative">
        {/* Fading edges for smooth enter/exit */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="marquee-track flex items-center gap-20 md:gap-32 opacity-60 hover:opacity-100 transition-opacity duration-500"
        >
          {/* Group 1 */}
          <div className="flex items-center gap-20 md:gap-32">
            {brandLogos.map((logo, idx) => (
              <Image 
                key={`logo-1-${idx}`} 
                src={`/brand-logo/${logo.src}`} 
                alt={logo.alt}
                width={160}
                height={64}
                sizes="160px"
                className="h-12 md:h-16 w-auto object-contain filter grayscale transition-all duration-300" 
              />
            ))}
          </div>
          {/* Group 2 (Duplicate for seamless loop) */}
          <div className="flex items-center gap-20 md:gap-32">
            {brandLogos.map((logo, idx) => (
              <Image 
                key={`logo-2-${idx}`} 
                src={`/brand-logo/${logo.src}`} 
                alt={logo.alt}
                width={160}
                height={64}
                sizes="160px"
                className="h-12 md:h-16 w-auto object-contain filter grayscale transition-all duration-300" 
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── OUR SERVICES ───────────────────────────── */}
      <AppleCardsCarouselDemo />

      {/* ── INDUSTRIES WE SERVE ────────────────────── */}
      <IndustriesWeServe />

      {/* ── STATS / BY THE NUMBERS ─────────────────── */}
      <Stats />

      {/* ── TESTIMONIALS ───────────────────────────── */}
      <Testimonials />

      {/* ── WHY US ─────────────────────────────────── */}
      <section className="py-6 px-3 sm:px-4 lg:px-5 bg-black relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto bg-[#0D0D0D] rounded-t-[24px] rounded-b-[24px] border border-neutral-800 relative">
          <div className="absolute inset-0 pointer-events-none rounded-t-[24px] rounded-b-[24px]" style={{ backgroundImage: 'url("/sections-bg/copper 2.png")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25 }} />
          {/* Grid Overlay */}
          <div className="absolute inset-0 pointer-events-none rounded-t-[24px] rounded-b-[24px] flex justify-center items-center opacity-30">
             <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(192, 192, 192, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(192, 192, 192, 0.15) 1px, transparent 1px)', backgroundSize: '45px 45px', backgroundPosition: 'center', maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)' }}></div>
          </div>
          <div className="flex flex-col lg:flex-row gap-20 items-start relative z-10 px-5 md:px-20 pt-6 pb-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-5/12 sticky top-16"
          >
            <h2
              className="font-display chrome-text mb-6"
              style={{
                fontFamily: "var(--font-geist)",
                fontSize: "clamp(36px, 5vw, 72px)",
              }}
            >
              Why Orbitix Digital?
            </h2>
            <p className="font-body text-[#8e9192] text-base leading-relaxed">
              Not every agency is built the same. ORBITIX DIGITAL combines technical
              depth with aesthetic precision — delivering work that lasts.
            </p>

            {/* Trust Image */}
            <div className="mt-10 relative w-full max-w-sm">
              <div
                className="rounded-[16px] overflow-hidden relative aspect-[16/9] group"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
                }}
              >
                <div className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-80" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
                <Image
                  src="/services/trust.webp"
                  alt="Trust"
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>
            </div>
          </motion.div>

          {/* Right */}
          <div className="lg:w-7/12 flex flex-col gap-8">
            {whyPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, margin: "-60px" }}
                className="flex gap-6 items-start group"
              >
                <div
                  className="w-10 h-10 shrink-0 flex items-center justify-center transition-all duration-300 group-hover:border-white/40"
                  style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: "8px" }}
                >
                  <CheckCircle size={18} className="text-white" />
                </div>
                <div>
                  <h4
                    className="font-headline text-lg text-white mb-2"
                    style={{ fontFamily: "var(--font-geist)" }}
                  >
                    {point.title}
                  </h4>
                  <p className="font-body text-base text-[#8e9192] leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* ── WEBSITE AUDIT ──────────────────────────── */}
      <WebsiteAudit />

      {/* ── FAQ ────────────────────────────────────── */}
      <FAQ />

      {/* ── CTA BANNER ─────────────────────────────── */}
      <CTABanner />
    </div>
  );
}
