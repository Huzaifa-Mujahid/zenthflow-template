"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// ── Animation Variants ────────────────────────────────────────────────────────

const imageLeftVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const imageRightVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const textFromRightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
  },
};

const textFromLeftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
  },
};

const imageFullVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const textOverlayVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const gridItemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const showcaseVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.1 },
  },
};

const showcaseItemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

// ── Static Image Card ─────────────────────────────────────────────────────────
// w-full h-auto → image shows at natural proportions, zero crop, zero clip.

function StaticImageCard({ src, alt, className = "", cardStyle = {}, imgWidth = 800, imgHeight = 600 }) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden bg-neutral-950 border border-white/8 ${className}`}
      style={{
        boxShadow: "0 15px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)",
        ...cardStyle,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={imgWidth}
        height={imgHeight}
        className="w-full h-auto block"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

// ── Text Block ─────────────────────────────────────────────────────────────────

function TextBlock({ tag, title, headline, description, solvesWhat, features, variants, isServicePage }) {
  const TitleTag = isServicePage ? "h2" : "h4";
  const HeadlineTag = isServicePage ? "h1" : "h3";

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="flex flex-col justify-center gap-5"
    >
      {!isServicePage && (
        <span className="font-label text-[#a8a8a8] text-[10px]">{tag}</span>
      )}

      <div>
        <TitleTag
          className="font-headline text-[13px] uppercase tracking-widest text-[#a8a8a8] mb-3"
          style={{ fontFamily: "var(--font-geist)" }}
        >
          {title}
        </TitleTag>
        <HeadlineTag
          className="font-display chrome-text uppercase leading-[1.05]"
          style={{
            fontFamily: "var(--font-geist)",
            fontSize: "clamp(28px, 3.5vw, 52px)",
          }}
        >
          {headline}
        </HeadlineTag>
      </div>

      <div
        className="w-10 h-px"
        style={{ background: "rgba(255,255,255,0.2)" }}
      />

      {/* Problem → Solution statement */}
      {!isServicePage && solvesWhat && (
        <div
          style={{
            borderLeft: "2px solid rgba(255,255,255,0.18)",
            paddingLeft: "14px",
          }}
        >
          <p
            className="font-body leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontStyle: "italic" }}
          >
            {solvesWhat}
          </p>
        </div>
      )}

      <p className="font-body text-[#8e9192] text-lg leading-relaxed max-w-md">
        {description}
      </p>

      {/* Feature bullets */}
      {features?.length > 0 && (
        <ul className="flex flex-col gap-[10px] mt-1">
          {features.map((feat, i) => (
            <motion.li 
              key={i} 
              className="flex items-start gap-3 group cursor-pointer"
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                style={{ marginTop: "4px", flexShrink: 0 }}
                className="text-white/35 group-hover:text-white transition-colors duration-300"
              >
                <path
                  d="M1 6l3 3 7-7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-body text-[#8e9192] group-hover:text-white transition-colors duration-300 text-sm md:text-base leading-relaxed">
                {feat}
              </span>
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

// ── Layout: Image Left (explicit layout type) ──────────────────────────────────

function ImageLeftLayout({ service }) {
  const images = service.images || [service.image];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <motion.div
        variants={imageLeftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative flex gap-4"
      >
        {images.map((src, i) => (
          <div key={src} className="flex-1">
            <StaticImageCard src={src} alt={`${service.title} ${i + 1}`} />
          </div>
        ))}
      </motion.div>
      <TextBlock {...service} variants={textFromRightVariants} isServicePage={service.isServicePage} />
    </div>
  );
}

// ── Layout: Image Right (explicit layout type) ─────────────────────────────────

function ImageRightLayout({ service }) {
  const images = service.images || [service.image];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="order-2 lg:order-1">
        <TextBlock {...service} variants={textFromLeftVariants} isServicePage={service.isServicePage} />
      </div>
      <motion.div
        variants={imageRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative order-1 lg:order-2 flex gap-4"
      >
        {images.map((src, i) => (
          <div key={src} className="flex-1">
            <StaticImageCard src={src} alt={`${service.title} ${i + 1}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ── Layout: Image Full ─────────────────────────────────────────────────────────

function ImageFullLayout({ service }) {
  const images = service.images || [service.image];
  return (
    <div className="relative">
      <motion.div
        variants={imageFullVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/8 bg-neutral-950"
      >
        <Image
          src={images[0]}
          alt={service.title}
          width={1400}
          height={600}
          className="w-full h-auto block"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)",
          }}
        />
        <motion.div
          variants={textOverlayVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="absolute inset-0 flex flex-col justify-end p-8 md:p-16"
        >
          {!service.isServicePage && (
            <span className="font-label text-[#a8a8a8] text-[10px] mb-3 block">
              {service.tag}
            </span>
          )}
          <h2
            className="font-headline text-[13px] uppercase tracking-widest text-[#a8a8a8] mb-3"
            style={{ fontFamily: "var(--font-geist)" }}
          >
            {service.title}
          </h2>
          <h1
            className="font-display text-white uppercase leading-[1.05] mb-4"
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: "clamp(24px, 3vw, 48px)",
            }}
          >
            {service.headline}
          </h1>
          <p className="font-body text-[#c4c7c8] text-sm leading-relaxed max-w-lg">
            {service.description}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

// ── 2-Image Unique Combo Block ─────────────────────────────────────────────────
// Primary card full-width, secondary card 72% width, right-edge aligned, overlapping.
// Used for services with exactly 2 images in grid/showcase layouts.

function DuoImageBlock({ images, title }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div
      ref={containerRef}
      variants={gridContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="flex flex-col group"
      style={{ maxWidth: "300px" }}
    >
      {/* Primary image — 85% width, left-anchored */}
      <motion.div variants={gridItemVariants} style={{ width: "85%" }}>
        <motion.div style={{ y: y1 }} className="transition-all duration-500 group-hover:opacity-40 hover:!opacity-100 hover:scale-[1.03] hover:z-10 relative z-0">
          <StaticImageCard
            src={images[0]}
            alt={`${title} 1`}
            cardStyle={{
              boxShadow:
                "0 22px 50px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.1)",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Secondary image — 72% width, right-anchored, negative top margin (overlap) */}
      <motion.div
        variants={gridItemVariants}
        style={{
          width: "72%",
          alignSelf: "flex-end",
          marginTop: "-15%",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.div style={{ y: y2 }} className="transition-all duration-500 group-hover:opacity-40 hover:!opacity-100 hover:scale-[1.03] hover:z-10 relative z-0">
          <StaticImageCard
            src={images[1]}
            alt={`${title} 2`}
            cardStyle={{
              boxShadow:
                "0 16px 35px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)",
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// ── 3-Image Cascade Block (Service 2 — Web Applications) ────────────────────────
// Premium cascading waterfall: images stagger in from alternating directions,
// each card overlaps the previous — zero crop, full natural image size.

const cascadeContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.22, delayChildren: 0.08 },
  },
};

const cascade1Variants = {
  hidden:   { opacity: 0, x: 70,  y: -24, rotate:  2 },
  visible:  { opacity: 1, x: 0,   y: 0,   rotate:  0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};
const cascade2Variants = {
  hidden:   { opacity: 0, x: 80,  y: 20,  rotate: -1.5 },
  visible:  { opacity: 1, x: 0,   y: 0,   rotate:  0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};
const cascade3Variants = {
  hidden:   { opacity: 0, x: -60, y: 20,  rotate:  1.5 },
  visible:  { opacity: 1, x: 0,   y: 0,   rotate:  0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

function ThreeImageCascade({ images, title }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <motion.div
      ref={containerRef}
      variants={cascadeContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative flex flex-col group"
      style={{ maxWidth: "330px" }}
    >
      {/* Image 1 — full width, slides in from top-right */}
      <motion.div
        variants={cascade1Variants}
        style={{ width: "100%", position: "relative", zIndex: 3 }}
      >
        <motion.div style={{ y: y1 }} className="transition-all duration-500 group-hover:opacity-40 hover:!opacity-100 hover:scale-[1.03] hover:z-10 relative z-0">
          <StaticImageCard
            src={images[0]}
            alt={`${title} 1`}
            cardStyle={{
              boxShadow:
                "0 28px 60px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.1)",
            }}
          />
          {/* Numbered badge */}
          <div
            className="absolute top-3 left-3 z-20 flex items-center gap-2"
            style={{
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "999px",
              padding: "3px 10px 3px 6px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-geist)",
                fontSize: "9px",
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              01
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Image 2 — 72% width, right-anchored, slides in from right */}
      <motion.div
        variants={cascade2Variants}
        style={{
          width: "72%",
          alignSelf: "flex-end",
          marginTop: "-16%",
          position: "relative",
          zIndex: 4,
        }}
      >
        <motion.div style={{ y: y2 }} className="transition-all duration-500 group-hover:opacity-40 hover:!opacity-100 hover:scale-[1.03] hover:z-10 relative z-0">
          <StaticImageCard
            src={images[1]}
            alt={`${title} 2`}
            cardStyle={{
              boxShadow:
                "0 22px 50px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)",
            }}
          />
          <div
            className="absolute top-3 left-3 z-20 flex items-center gap-2"
            style={{
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "999px",
              padding: "3px 10px 3px 6px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-geist)",
                fontSize: "9px",
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              02
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Image 3 — 60% width, left-anchored, slides in from left */}
      <motion.div
        variants={cascade3Variants}
        style={{
          width: "60%",
          alignSelf: "flex-start",
          marginTop: "-13%",
          position: "relative",
          zIndex: 5,
        }}
      >
        <motion.div style={{ y: y3 }} className="transition-all duration-500 group-hover:opacity-40 hover:!opacity-100 hover:scale-[1.03] hover:z-10 relative z-0">
          <StaticImageCard
            src={images[2]}
            alt={`${title} 3`}
            cardStyle={{
              boxShadow:
                "0 18px 45px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.07)",
            }}
          />
          <div
            className="absolute top-3 left-3 z-20 flex items-center gap-2"
            style={{
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "999px",
              padding: "3px 10px 3px 6px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-geist)",
                fontSize: "9px",
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              03
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Ambient glow behind the stack */}
      <div
        className="absolute -inset-6 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(255,255,255,0.03) 0%, transparent 70%)",
          filter: "blur(25px)",
        }}
      />
    </motion.div>
  );
}

function FourImageMasonry({ images, title }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -75]);

  return (
    <motion.div
      ref={containerRef}
      variants={gridContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-2 gap-3 group"
    >
      {/* Left column */}
      <div className="flex flex-col gap-3">
        <motion.div variants={gridItemVariants}>
          <motion.div style={{ y: y1 }} className="transition-all duration-500 group-hover:opacity-30 hover:!opacity-100 hover:scale-[1.03] hover:z-10 relative z-0">
            <StaticImageCard
              src={images[0]}
              alt={`${title} 1`}
              cardStyle={{
                boxShadow:
                  "0 20px 50px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.1)",
              }}
            />
          </motion.div>
        </motion.div>
        <motion.div variants={gridItemVariants}>
          <motion.div style={{ y: y3 }} className="transition-all duration-500 group-hover:opacity-30 hover:!opacity-100 hover:scale-[1.03] hover:z-10 relative z-0">
            <StaticImageCard
              src={images[2]}
              alt={`${title} 3`}
              cardStyle={{
                boxShadow:
                  "0 14px 35px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Right column — offset top for editorial stagger */}
      <div className="flex flex-col gap-3 pt-6">
        <motion.div variants={gridItemVariants}>
          <motion.div style={{ y: y2 }} className="transition-all duration-500 group-hover:opacity-30 hover:!opacity-100 hover:scale-[1.03] hover:z-10 relative z-0">
            <StaticImageCard
              src={images[1]}
              alt={`${title} 2`}
              cardStyle={{
                boxShadow:
                  "0 18px 45px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)",
              }}
            />
          </motion.div>
        </motion.div>
        <motion.div variants={gridItemVariants}>
          <motion.div style={{ y: y4 }} className="transition-all duration-500 group-hover:opacity-30 hover:!opacity-100 hover:scale-[1.03] hover:z-10 relative z-0">
            <StaticImageCard
              src={images[3]}
              alt={`${title} 4`}
              cardStyle={{
                boxShadow:
                  "0 14px 35px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ImageGridLayout({ service, index }) {
  const images = service.images || [service.image];
  const count = images.length;

  // index 1,3,5,… → images on right; index 2,4,6,… → images on left
  const imagesOnLeft = index % 2 === 0;

  // Entrance animation direction matches image side
  const imageMotionVariants = imagesOnLeft ? imageLeftVariants : imageRightVariants;
  const textMotionVariants  = imagesOnLeft ? textFromRightVariants : textFromLeftVariants;

  // ── 1-image: single large feature image ─────────────────────────────────────
  if (count === 1) {
    const imageBlock = (
      <motion.div
        variants={imageMotionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative rounded-2xl overflow-hidden bg-neutral-950 border border-white/8"
        style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)" }}
      >
        <Image
          src={images[0]}
          alt={service.title}
          width={1200}
          height={800}
          className="w-full h-auto block"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    );

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {imagesOnLeft ? (
          <>
            {imageBlock}
            <TextBlock {...service} variants={textMotionVariants} isServicePage={service.isServicePage} />
          </>
        ) : (
          <>
            <TextBlock {...service} variants={textMotionVariants} isServicePage={service.isServicePage} />
            {imageBlock}
          </>
        )}
      </div>
    );
  }

  // ── 2-image: unique overlapping duo ─────────────────────────────────────────
  if (count === 2) {
    const duoBlock = (
      <motion.div
        variants={imageMotionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className={imagesOnLeft ? "" : "flex justify-end"}
      >
        <DuoImageBlock images={images} title={service.title} />
      </motion.div>
    );

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {imagesOnLeft ? (
          <>
            {duoBlock}
            <TextBlock {...service} variants={textMotionVariants} isServicePage={service.isServicePage} />
          </>
        ) : (
          <>
            <TextBlock {...service} variants={textMotionVariants} isServicePage={service.isServicePage} />
            {duoBlock}
          </>
        )}
      </div>
    );
  }

  // ── 3-image: premium cascading waterfall ────────────────────────────────────
  if (count === 3) {
    const imageBlock = <ThreeImageCascade images={images} title={service.title} />;

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {imagesOnLeft ? (
          <>
            {imageBlock}
            <TextBlock {...service} variants={textMotionVariants} isServicePage={service.isServicePage} />
          </>
        ) : (
          <>
            <TextBlock {...service} variants={textMotionVariants} isServicePage={service.isServicePage} />
            {imageBlock}
          </>
        )}
      </div>
    );
  }

  // ── 4-image: 2-column masonry with pt-8 stagger on second col ───────────────
  if (count === 4) {
    const imageBlock = <FourImageMasonry images={images} title={service.title} />;

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {imagesOnLeft ? (
          <>
            {imageBlock}
            <TextBlock {...service} variants={textMotionVariants} isServicePage={service.isServicePage} />
          </>
        ) : (
          <>
            <TextBlock {...service} variants={textMotionVariants} isServicePage={service.isServicePage} />
            {imageBlock}
          </>
        )}
      </div>
    );
  }

  // ── Fallback: vertical stack ─────────────────────────────────────────────────
  const imageBlock = (
    <motion.div
      variants={gridContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="flex flex-col gap-5"
    >
      {images.map((src, i) => (
        <motion.div key={i} variants={gridItemVariants}>
          <StaticImageCard src={src} alt={`${service.title} ${i + 1}`} />
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
      {imagesOnLeft ? (
        <>
          {imageBlock}
          <TextBlock {...service} variants={textMotionVariants} isServicePage={service.isServicePage} />
        </>
      ) : (
        <>
          <TextBlock {...service} variants={textMotionVariants} isServicePage={service.isServicePage} />
          {imageBlock}
        </>
      )}
    </div>
  );
}

// ── Image Showcase Layout ──────────────────────────────────────────────────────
// Used for services 6 & 7 (2 images each).
// index 5 (Service 6) → odd → images RIGHT
// index 6 (Service 7) → even → images LEFT
// Same unique DuoImageBlock combo, staggered entrance.

function ImageShowcaseLayout({ service, index }) {
  const images = service.images || [service.image];
  const imagesOnLeft = index % 2 === 0;
  const textMotionVariants = imagesOnLeft ? textFromRightVariants : textFromLeftVariants;
  const imageMotionVariants = imagesOnLeft ? imageLeftVariants : imageRightVariants;

  const duoBlock = (
    <motion.div
      variants={imageMotionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={imagesOnLeft ? "" : "flex justify-end"}
    >
      <DuoImageBlock images={images} title={service.title} />
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {imagesOnLeft ? (
        <>
          {duoBlock}
          <TextBlock {...service} variants={textMotionVariants} />
        </>
      ) : (
        <>
          <TextBlock {...service} variants={textMotionVariants} />
          {duoBlock}
        </>
      )}
    </div>
  );
}

// ── Layout: Website Scroll (Fan-Out Spread) ────────────────────────────────────
// Section-level card cycling animation kept. Internal image micro-anims removed.

function WebsiteScrollLayout({ service, index }) {
  const images = service.images || [service.image];
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length, isHovered]);

  return (
    <section
      ref={sectionRef}
      className="py-10 md:py-16 px-5 md:px-12 max-w-[1400px] mx-auto relative overflow-hidden"
    >
      <div
        className="absolute top-8 right-8 font-display text-[120px] leading-none select-none pointer-events-none hidden lg:block"
        style={{
          fontFamily: "var(--font-geist)",
          color: "rgba(255,255,255,0.02)",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <TextBlock {...service} variants={textFromLeftVariants} />

        {/* Fan-out stacked cards */}
        <div 
          className="relative flex items-center justify-start sm:justify-center pl-6 sm:pl-0 mt-10 lg:mt-0 cursor-pointer h-[240px] sm:h-[280px] lg:h-[340px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[420px] h-full">

            {images.map((src, i) => {
              const pos = (i - activeIndex + images.length) % images.length;
              const zIndex = images.length - pos;
              
              const xOffset = isHovered ? pos * 45 : pos * 20;
              const yOffset = isHovered ? pos * -8 : pos * 15;
              const rotateAmt = isHovered ? pos * 6 : pos * 2.5;

              return (
                <motion.div
                  key={src}
                  animate={{
                    x: xOffset,
                    y: yOffset,
                    rotate: rotateAmt,
                    scale: 1 - pos * 0.05,
                  }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    zIndex,
                    position: "absolute",
                    inset: 0,
                    transformOrigin: "bottom left",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-[12px] md:rounded-[20px] overflow-hidden bg-neutral-950"
                    style={{
                      boxShadow:
                        pos === 0
                          ? "0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.25)"
                          : "0 10px 20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)",
                      transition: "box-shadow 0.8s ease",
                    }}
                  >
                    <motion.div 
                      className="w-full"
                      animate={{
                        y: pos === 0 ? ["0%", "-50%", "0%"] : "0%"
                      }}
                      transition={pos === 0 ? {
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                      } : { duration: 0.8 }}
                    >
                      <Image
                        src={src}
                        alt={`${service.title} ${i + 1}`}
                        width={400}
                        height={1200}
                        sizes="(max-width: 768px) 100vw, 420px"
                        className="w-full h-auto object-contain"
                      />
                    </motion.div>
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 40%)",
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-black pointer-events-none"
                      animate={{ opacity: pos === 0 ? 0 : pos * 0.15 }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Service Section ────────────────────────────────────────────────────────────

export default function ServiceSection({ service, index }) {
  const { layout } = service;

  if (layout === "website-scroll") {
    return <WebsiteScrollLayout service={service} index={index} />;
  }

  return (
    <section className="py-10 md:py-16 px-5 md:px-12 max-w-[1400px] mx-auto relative">
      <div
        className="absolute top-8 right-8 font-display text-[120px] leading-none select-none pointer-events-none hidden lg:block"
        style={{
          fontFamily: "var(--font-geist)",
          color: "rgba(255,255,255,0.02)",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {layout === "image-left"     && <ImageLeftLayout     service={service} />}
      {layout === "image-right"    && <ImageRightLayout    service={service} />}
      {layout === "image-full"     && <ImageFullLayout     service={service} />}
      {layout === "image-grid"     && <ImageGridLayout     service={service} index={index} />}
      {layout === "image-showcase" && <ImageShowcaseLayout service={service} index={index} />}
    </section>
  );
}
