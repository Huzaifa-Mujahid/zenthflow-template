"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { servicesShowcaseData } from "@/data/servicesData";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full relative bg-neutral-950 py-3 sm:py-4 lg:py-5 flex flex-col gap-0">

      {/* ── Branding card — header only, no overflow-hidden on carousel ── */}
      <div className="relative mx-3 sm:mx-4 lg:mx-5 bg-[#0D0D0D] rounded-[32px] border border-neutral-800 shadow-2xl flex flex-col px-8 sm:px-12 lg:px-16 pt-10 sm:pt-12 lg:pt-14 pb-6">
        {/* Silver Background Image Overlay */}
        <div
          className="absolute inset-0 rounded-[32px] pointer-events-none overflow-hidden"
          style={{
            backgroundImage: 'url("/sections-bg/copper.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.5,
          }}
        />

        {/* Grid Overlay for texture */}
        <div className="absolute inset-0 rounded-[32px] pointer-events-none flex justify-center items-center opacity-20 overflow-hidden">
          <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            backgroundPosition: 'center',
            maskImage: 'radial-gradient(circle at center, black 10%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 10%, transparent 80%)'
          }}></div>
        </div>

        {/* Left-side dim overlay */}
        <div
          className="absolute inset-0 rounded-[32px] pointer-events-none"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 60%)",
          }}
        />

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8"
        >
          <h2
            className="font-display chrome-text text-4xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-geist)" }}
          >
            Our Services
          </h2>
          <p className="font-body text-white/40 text-sm md:text-base max-w-sm">
            Explore our full range of services — custom websites, web applications, branding, SEO, and AI automation designed to fuel business growth.
          </p>
        </motion.div>

        {/* ── Carousel — sits here so it can overflow the card edges ── */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 -mx-8 sm:-mx-12 lg:-mx-16 flex-1 flex flex-col justify-center"
        >
          <Carousel items={cards} />
        </motion.div>

        {/* Bottom rounded border continues visually */}
        <div className="absolute inset-x-0 bottom-0 h-8 bg-[#0D0D0D] rounded-b-[32px] pointer-events-none" />
      </div>
    </section>
  );
}

const ServiceContent = ({ service }) => {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          {service.description}
        </p>
        <ul className="mt-8 flex flex-col gap-3 max-w-3xl mx-auto">
          {service.features.slice(0, 3).map((f, i) => (
            <li
              key={i}
              className="text-neutral-500 dark:text-neutral-300 text-sm md:text-base font-sans flex gap-2"
            >
              <span className="text-neutral-400 dark:text-neutral-500">•</span>
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-10 max-w-3xl mx-auto">
          <Link href={`/services/${service.id}`}>
            <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-sans text-sm font-semibold hover:opacity-80 transition-opacity">
              View Service
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

const data = servicesShowcaseData.map((service) => ({
  category: service.tag,
  title: service.title,
  src: service.image,
  description: service.description,
  features: service.features,
  content: <ServiceContent service={service} />,
}));