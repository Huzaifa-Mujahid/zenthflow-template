"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, ShoppingCart, Cpu, Heart, Home, Hotel, ArrowRight } from "lucide-react";

const industries = [
  {
    id: "professional-services",
    title: "Professional Services",
    icon: Building2,
    headline: "Websites That Build Trust Before the First Meeting",
    description: "Law firms, consultancies, and agencies need websites that establish credibility instantly. Your visitors are comparing you against competitors — your site needs to communicate expertise, authority, and trust within seconds.",
    challenges: [
      "Complex service offerings that need clear explanation",
      "Multi-location businesses requiring local SEO",
      "Partner profiles and team pages that humanize the brand",
      "Lead generation forms that capture qualified inquiries"
    ],
    approach: "We design professional, authority-driven layouts with clear service hierarchies, team showcases, and trust signals — client logos, case studies, and testimonials placed strategically to convert visitors into consultation requests."
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    icon: ShoppingCart,
    headline: "Storefronts Built to Convert Browsers Into Buyers",
    description: "Online retail is brutally competitive — every friction point costs you revenue. Slow product pages, confusing checkout flows, and poor mobile experiences kill conversion rates. We build ecommerce websites engineered for speed, clarity, and maximum average order value.",
    challenges: [
      "Large product catalogs requiring fast search and filtering",
      "Mobile checkout optimization for impulse purchases",
      "Product imagery that loads fast without sacrificing quality",
      "Cross-sell and upsell opportunities throughout the journey"
    ],
    approach: "We build lightning-fast product listing pages with instant search, streamlined checkout flows that minimize cart abandonment, and performance-optimized image systems that keep heavy visuals from slowing down the buying experience."
  },
  {
    id: "saas-tech",
    title: "SaaS & Tech",
    icon: Cpu,
    headline: "Product-Led Websites That Drive Free Trial Signups",
    description: "SaaS companies live and die by their conversion funnels. Your website isn't a brochure — it's a sales engine that needs to educate, build trust, and push visitors toward signup. Every page must answer 'why should I try this?' in under 10 seconds.",
    challenges: [
      "Complex features that need simple, visual explanations",
      "Pricing page design that reduces decision paralysis",
      "Integration showcases and technical documentation",
      "Free trial funnels with minimal friction"
    ],
    approach: "We design product-focused layouts with interactive demos, comparison tables, and clear CTAs — structuring every page around the conversion funnel from awareness to signup to paid upgrade."
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: Heart,
    headline: "Patient-Centric Digital Experiences",
    description: "Healthcare websites carry a unique responsibility — patients trust you with their wellbeing before they ever walk through the door. Your site needs to feel professional, compassionate, and instantly informative while meeting strict accessibility and compliance standards.",
    challenges: [
      "HIPAA-compliant contact and intake forms",
      "Doctor/provider directories with filtering",
      "Insurance and service information architecture",
      "Patient education content that builds trust"
    ],
    approach: "We design clean, accessible layouts that prioritize patient comfort — clear service navigation, provider profiles with specialties, streamlined appointment booking, and educational content organized for quick answers to common health questions."
  },
  {
    id: "real-estate",
    title: "Real Estate",
    icon: Home,
    headline: "Property Sites That Sell Lifestyle, Not Just Listings",
    description: "Property sites live or die on visuals and speed — buyers scroll listings on their phones, and a slow gallery or clumsy search sends them straight to a competitor.",
    challenges: [
      "Heavy property imagery that needs to load instantly",
      "Advanced search with multiple filter parameters",
      "Virtual tour integration that feels seamless",
      "Mobile-first galleries for on-the-go browsing"
    ],
    approach: "We design image-forward, fast-loading listing layouts with intuitive search and filtering, mobile-first galleries, and clear inquiry paths — engineered so heavy imagery still loads quickly and every listing stays crawlable."
  },
  {
    id: "hospitality",
    title: "Hospitality",
    icon: Hotel,
    headline: "Booking-Driven Websites That Fill Rooms & Tables",
    description: "Hotels, restaurants, and travel businesses need websites that create desire and drive immediate action. Your site is the first taste of the experience you offer — it needs to be immersive, aspirational, and effortless to book through.",
    challenges: [
      "Visual storytelling that captures atmosphere and mood",
      "Direct booking integration that competes with OTAs",
      "Menu, room, or package displays that update dynamically",
      "Location-based content for local discovery"
    ],
    approach: "We design immersive, full-bleed visual experiences with integrated booking systems, dynamic pricing displays, and location-aware content — turning browsers into direct bookings without the OTA commission fees."
  }
];

export default function IndustryShowcase() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <section className="py-6 px-3 sm:px-4 lg:px-5 bg-black relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto rounded-[24px] border border-neutral-800 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url("/sections-bg/blur copper.png")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.4 }} />
        <div className="absolute inset-0 bg-[#0D0D0D]/50 pointer-events-none" />
        <div className="relative z-10 px-5 md:px-20 pt-10 pb-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-label text-[#a8a8a8] block mb-5">Industries We Serve</span>
            <h2
              className="font-display chrome-text uppercase mb-4"
              style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
            >
              Built for Your Industry
            </h2>
            <p className="text-[#8e9192] text-lg leading-relaxed max-w-2xl mb-12">
              Whether you operate in any of these sectors, your website needs tailored strategy. We design service architectures and lead funnels specifically aligned with how your buyers make decisions.
            </p>
          </motion.div>

          {/* Industry Tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeIndustry.id === industry.id
                      ? "bg-white text-black shadow-[0_6px_12px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,1),inset_0_-2px_0_rgba(0,0,0,0.2)]"
                      : "bg-white/5 text-[#a8a8a8] hover:bg-white/10 hover:text-white border border-white/5"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.5} />
                  {industry.title}
                </button>
              );
            })}
          </div>

          {/* Active Industry Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              {/* Left - Headline & Description */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  {(() => {
                    const Icon = activeIndustry.icon;
                    return <Icon size={24} className="text-[#c4c7c8]" strokeWidth={1.5} />;
                  })()}
                  <span className="text-[#a8a8a8] text-sm font-label uppercase tracking-widest">{activeIndustry.title}</span>
                </div>
                <h3 className="text-white text-2xl md:text-3xl font-medium leading-tight mb-6">
                  {activeIndustry.headline}
                </h3>
                <p className="text-[#a8a8a8] text-base leading-relaxed mb-8">
                  {activeIndustry.description}
                </p>

                {/* Challenges */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                  <h4 className="text-white text-sm font-medium mb-4 uppercase tracking-wider">Key Challenges</h4>
                  <ul className="flex flex-col gap-3">
                    {activeIndustry.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#a8a8a8] text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right - Approach */}
              <div className="flex flex-col justify-between">
                <div className="bg-gradient-to-br from-white/5 to-transparent rounded-2xl p-8 border border-white/5 h-full">
                  <span className="font-label text-[#a8a8a8] block mb-4">Our Approach</span>
                  <p className="text-white text-lg leading-relaxed mb-8">
                    {activeIndustry.approach}
                  </p>
                  <div className="flex items-center gap-2 text-white text-sm font-medium group cursor-pointer">
                    <span>Discuss your project</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
