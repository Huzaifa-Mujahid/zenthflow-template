"use client";

import { motion } from "framer-motion";

/**
 * RoundedPageHero
 * Rounded full-width hero card (same style as the Portfolio hero).
 *
 * Props:
 *  - titleLines {string[]} – heading lines stacked vertically (e.g. ["Turning vision", "into visibility"])
 *  - subtitle   {string}   – paragraph below the heading
 *  - bgImage    {string}   – background image path (default: "/herosection images/all.png")
 */
export default function RoundedPageHero({
  titleLines = [],
  subtitle = "",
  bgImage = "/herosection images/all.png",
}) {
  return (
    <section className="w-full relative bg-neutral-950 p-3 sm:p-4 lg:p-5 min-h-[75vh] flex flex-col">
      <div className="relative w-full flex-grow bg-[#0D0D0D] rounded-[32px] overflow-hidden border border-neutral-800 shadow-2xl flex flex-col justify-center p-8 sm:p-12 lg:p-16">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.85, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            backgroundImage: `url("${bgImage}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0.2) 100%)",
          }}
        />

        <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              backgroundPosition: "center",
              maskImage:
                "radial-gradient(circle at center, black 10%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 10%, transparent 80%)",
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto pt-16">
          <h1 className="font-bold tracking-tight" style={{ lineHeight: 1.05 }}>
            <span className="sr-only">{titleLines.join(" ")}</span>
            <span aria-hidden="true" className="flex flex-col gap-0">
              {titleLines.map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    style={{ fontSize: "clamp(34px, 5vw, 68px)" }}
                    initial={{ y: "110%", opacity: 0, filter: "blur(8px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.85,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.08 + i * 0.12,
                    }}
                  >
                    <span
                      className="inline-block"
                      style={{
                        backgroundImage:
                          "linear-gradient(to bottom, #ffffff 0%, #b8b8b8 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {line}
                    </span>
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="font-body text-[#a8a8a8] text-base sm:text-lg leading-relaxed max-w-xl mt-6"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
