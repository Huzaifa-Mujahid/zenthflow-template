"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import RoundedPageHero from "@/components/RoundedPageHero";

// ── Projects Data ─────────────────────────────────────

const projects = [
  {
    id: 6,
    title: "Enrique Garcia",
    category: "General Contractor",
    description: "General contractor website crafted to establish credibility and drive project inquiries. Features service showcases, project highlights, and compelling CTAs that convert visitors into scheduled consultations.",
    image: "/portfolio/Enrique Garcia.webp",
    size: "normal",
  },
  {
    id: 7,
    title: "Home Automations",
    category: "Smart Home Technology",
    description: "Smart home technology website designed to position the brand as a premium automation provider. Showcases solutions, packages, and expertise through a refined modern UI that drives quote requests.",
    image: "/portfolio/Home Automations.webp",
    size: "normal",
  },
  {
    id: 8,
    title: "GN Mechanical Services",
    category: "Commercial Appliances",
    description: "Commercial appliance services website built for B2B lead generation. Highlights repair and installation capabilities with dedicated service pages optimized for local commercial search.",
    image: "/portfolio/GN Mechanical Services.webp",
    size: "normal",
  },
  {
    id: 9,
    title: "Qualprax",
    category: "Masonry Contractor",
    description: "Masonry contractor website developed to showcase craftsmanship and secure residential projects. Features a visual portfolio, service breakdowns, and conversion-optimized contact flows.",
    image: "/portfolio/Qualprax.webp",
    size: "normal",
  },
  {
    id: 10,
    title: "GC Contracting Services",
    category: "Epoxy Flooring",
    description: "Epoxy flooring company website designed to generate estimates and bookings. Combines striking visuals of finished floors with trust signals and streamlined quote request forms.",
    image: "/portfolio/GC Contracting Services.webp",
    size: "normal",
  },
  {
    id: 11,
    title: "Laverne's Unique Wheels",
    category: "Transportation Company",
    description: "Transportation company website built to capture ride bookings and reinforce customer confidence. Mobile-first design with transparent service information and instant access to contact options.",
    image: "/portfolio/Laverne's Unique Wheels.webp",
    size: "normal",
  },
  {
    id: 12,
    title: "Man Beck",
    category: "Fence & Pavers Company",
    description: "Fence and pavers company website showcasing outdoor craftsmanship through project galleries. Optimized for local search with dedicated service area pages and prominent call-to-action placement.",
    image: "/portfolio/Man Beck.webp",
    size: "normal",
  },
  {
    id: 13,
    title: "Tough Gutter",
    category: "Gutter Installation Company",
    description: "Gutter installation website engineered to convert homeowners searching for protection solutions. Features service explainers, before-and-after visuals, and frictionless estimate requests.",
    image: "/portfolio/Tough Gutter.webp",
    size: "normal",
  },
  {
    id: 14,
    title: "Pedro's Concrete",
    category: "Concrete Contractor",
    description: "Concrete contractor website designed to showcase driveways, patios, and structural work. Built for local SEO dominance with a project gallery that converts browsers into booked jobs.",
    image: "/portfolio/Pedro's Concrete.webp",
    size: "normal",
  },
  {
    id: 15,
    title: "Jump Starts And Lockouts",
    category: "Locksmith Services",
    description: "Emergency roadside and locksmith website optimized for urgent searches. Prominent click-to-call placement, fast load times, and clear service coverage ensure customers reach help instantly.",
    image: "/portfolio/Jump Starts And Lockouts.webp",
    size: "normal",
  },
  {
    id: 16,
    title: "Divine House Cleaning",
    category: "Cleaning Company",
    description: "House cleaning company website built to convert visitors into recurring clients. Features service packages, transparent pricing cues, and trust-building testimonials in a fresh, clean layout.",
    image: "/portfolio/Divine House Cleaning.webp",
    size: "normal",
  },
  {
    id: 17,
    title: "New Pro Painting",
    category: "Painting Contractor",
    description: "Painting contractor website showcasing interior and exterior work with vibrant project imagery. Structured for local rankings and equipped with quote forms that drive estimate requests.",
    image: "/portfolio/New Pro Painting.webp",
    size: "normal",
  },
  {
    id: 18,
    title: "Villaobos Prime Services",
    category: "General Contractor",
    description: "General contractor website developed to establish credibility and capture construction leads. Clean service architecture, project showcases, and strategic CTAs guide visitors to consultation booking.",
    image: "/portfolio/Villaobos Prime Services.webp",
    size: "normal",
  },
  {
    id: 19,
    title: "Ranchland Roofing",
    category: "Roofing Contractor",
    description: "Roofing contractor website engineered for high-demand lead periods. Features inspection booking, material showcases, and trust signals that reassure homeowners making significant investment decisions.",
    image: "/portfolio/Ranchland Roofing.webp",
    size: "normal",
  },
  {
    id: 20,
    title: "Rapid A&O Insurance Solutions",
    category: "Insurance Consulting",
    description: "Insurance consulting website designed to simplify complex offerings and drive policy inquiries. Clear plan breakdowns, agent credibility sections, and multiple contact pathways maximize conversions.",
    image: "/portfolio/Rapid AO Insurance.webp",
    size: "normal",
  },
  {
    id: 21,
    title: "Nextprogen Builders",
    category: "Construction Company",
    description: "Construction company website positioning the brand as a contemporary building partner. Portfolio-driven layout with capability pages that resonate with both residential and commercial clients.",
    image: "/portfolio/Nextprogen Builders.webp",
    size: "normal",
  },
  {
    id: 22,
    title: "Jerry Appliance Repair",
    category: "Appliance Repair",
    description: "Appliance repair website built for speed-to-call conversions. Service-specific landing structure captures high-intent local searches while reviews and guarantees build instant trust.",
    image: "/portfolio/Jerry Appliance Repair.webp",
    size: "normal",
  },
  {
    id: 23,
    title: "Valencias Concrete",
    category: "Concrete Contractor",
    description: "Concrete and hardscape contractor website showcasing decorative and structural work. Visual-first galleries paired with localized service pages turn online traffic into scheduled estimates.",
    image: "/portfolio/Valencias Concrete.webp",
    size: "normal",
  },
  {
    id: 24,
    title: "TJ Mechanical",
    category: "Commercial Refrigeration",
    description: "Commercial refrigeration website targeting restaurant and retail operators. Technical service clarity, emergency response messaging, and B2B-focused CTAs drive qualified service calls.",
    image: "/portfolio/TJ Mechanical.png",
    size: "normal",
  },
  {
    id: 25,
    title: "MAM Contracting",
    category: "Contracting Company",
    description: "NYC contracting company website built to compete in a dense urban market. Project credentials, compliance-ready presentation, and direct inquiry flows win bids and secure new builds.",
    image: "/portfolio/MAM Contracting.png",
    size: "normal",
  },
  {
    id: 26,
    title: "Classic Builders",
    category: "Construction Company",
    description: "Construction company website blending heritage branding with modern conversion design. Comprehensive project history and service depth position the firm for larger, higher-value contracts.",
    image: "/portfolio/classic builders.png",
    size: "normal",
  },
  {
    id: 27,
    title: "Premier Diamond Construction LLC",
    category: "Construction Company",
    description: "Premium construction website crafted to reflect the quality of the builds themselves. Elegant project showcases, detailed capabilities, and polished brand presence attract high-value clients.",
    image: "/portfolio/Premier Diamond Construction LLC.png",
    size: "normal",
  },
  {
    id: 28,
    title: "Meraz Family Painting",
    category: "Painting Contractor",
    description: "Family-owned painting business website emphasizing personal service and quality finishes. Local SEO structure and review integration convert neighborhood searches into booked jobs.",
    image: "/portfolio/Meraz Family Painting.png",
    size: "normal",
  },
  {
    id: 29,
    title: "BRD Handyman - Better Done Right",
    category: "Handyman Services",
    description: "Handyman services website built around convenience and reliability. Task-based service listings, transparent communication cues, and easy booking make hiring feel effortless for homeowners.",
    image: "/portfolio/BRD- Handyman- Better Done Right.png",
    size: "normal",
  },
];

// ── Project Card ──────────────────────────────────────

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card p-4 group project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <div
        className="relative overflow-hidden"
        style={{
          height: project.size === "tall" ? "360px" : project.size === "wide" ? "220px" : "260px",
        }}
      >
        {/* Background / Image */}
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700"
            style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
          />
        ) : (
          <div
            className="absolute inset-0 transition-transform duration-700"
            style={{
              background: project.pattern,
              transform: hovered ? "scale(1.06)" : "scale(1)",
            }}
          />
        )}

        {/* Decorative grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />

        {/* Center icon / logo area (Only for placeholder pattern) */}
        {!project.image && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="text-center transition-all duration-500"
              style={{ opacity: hovered ? 0 : 0.4 }}
            >
              <div
                className="font-display chrome-text text-5xl mb-2"
                style={{ fontFamily: "var(--font-geist)" }}
              >
                ZFS
              </div>
            </div>
          </div>
        )}

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center backdrop-blur-sm transition-all duration-400"
          style={{
            background: "rgba(0,0,0,0.7)",
            opacity: hovered ? 1 : 0,
          }}
        >
          {project.link ? (
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="btn-filled px-8 py-3 text-sm flex items-center gap-2">
                Visit Website <ArrowUpRight size={14} />
              </button>
            </Link>
          ) : (
            <button className="btn-filled px-8 py-3 text-sm flex items-center gap-2">
              View Project <ArrowUpRight size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Info */}
      <div
        className="mt-5 flex justify-between items-start px-1 pb-1"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "16px" }}
      >
        <div className="flex-1 pr-3">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="font-label"
              style={{
                color: "#e8602e",
                fontSize: "9px",
                letterSpacing: "0.15em",
                border: "1px solid rgba(232,96,46,0.35)",
                padding: "2px 8px",
                borderRadius: "4px",
              }}
            >
              {project.category}
            </span>
          </div>
          <h3
            className="font-headline text-base text-white uppercase"
            style={{ fontFamily: "var(--font-geist)", letterSpacing: "-0.01em" }}
          >
            {project.title}
          </h3>
        </div>
        {project.link ? (
          <Link href={project.link} target="_blank" rel="noopener noreferrer" className="shrink-0 mt-1">
            <div
              className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.04)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              <ArrowUpRight size={14} className="text-[#a8a8a8]" />
            </div>
          </Link>
        ) : (
          <div
            className="w-8 h-8 flex items-center justify-center rounded-full shrink-0 mt-1"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <ArrowUpRight size={14} className="text-[#a8a8a8]" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────

export default function PortfolioPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* ── HERO ───────────────────────────────────── */}
      <RoundedPageHero
        titleLines={["Turning vision", "into visibility"]}
        subtitle="Discover our portfolio of search-driven digital systems and premium designs that have empowered leading brands to dominate their respective markets."
      />

      {/* Copper Background Wrapper: Grid */}
      <div className="w-full relative p-3 sm:p-4 lg:p-5">
        <div className="relative w-full bg-[#0D0D0D] rounded-[32px] overflow-hidden border border-neutral-800 shadow-2xl">
          {/* Copper Time Background Image */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "url('/sections-bg/copper 3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              opacity: 0.35,
            }}
          />

          {/* Dark overlay so content stays readable */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "rgba(0,0,0,0.60)" }}
          />

          {/* Grid */}
          <section className="relative z-10 px-5 md:px-20 max-w-[1440px] mx-auto pb-32 pt-16">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </AnimatePresence>
            </motion.div>
          </section>
        </div>
      </div>

      {/* ── CTA BANNER ─────────────────────────────── */}
      <CTABanner />

    </div>
  );
}
