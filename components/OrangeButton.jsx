"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * OrangeButton
 * A bright orange premium CTA button with a fast slide-up text animation on hover.
 *
 * Props:
 *  - href      {string}          – link destination (default: "/contact")
 *  - label     {string}          – button text (default: "Book A Call")
 *  - size      {"sm" | "md"}     – button size (default: "md")
 *  - className {string}          – extra Tailwind/CSS classes for the wrapper <Link>
 */
export default function OrangeButton({
  href = "/contact",
  label = "Book A Call",
  size = "md",
  className = "",
}) {
  const sizes = {
    sm: "h-10 px-6 text-[12px] tracking-widest",
    md: "h-14 px-10 text-sm tracking-[0.18em]",
  };

  return (
    <Link href={href} className={className}>
      <button
        className={`
          relative group overflow-hidden rounded-[10px]
          font-semibold text-white
          transition-all duration-300
          hover:-translate-y-0.5
          ${sizes[size]}
        `}
        style={{
          background:
            "linear-gradient(135deg, #e8602e 0%, #c94a1a 50%, #b83e0f 100%)",
          boxShadow:
            "0 0 0 1px rgba(232,96,46,0.5), 0 4px 24px rgba(232,96,46,0.35), 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "0 0 0 1px rgba(232,96,46,0.8), 0 6px 36px rgba(232,96,46,0.55), inset 0 1px 0 rgba(255,255,255,0.2)";
          e.currentTarget.style.background =
            "linear-gradient(135deg, #f06a35 0%, #d95420 50%, #c84610 100%)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow =
            "0 0 0 1px rgba(232,96,46,0.5), 0 4px 24px rgba(232,96,46,0.35), inset 0 1px 0 rgba(255,255,255,0.15)";
          e.currentTarget.style.background =
            "linear-gradient(135deg, #e8602e 0%, #c94a1a 50%, #b83e0f 100%)";
        }}
      >
        {/* Ghost span — invisible, defines button width from actual label text */}
        <span
          aria-hidden="true"
          className="flex items-center gap-2 opacity-0 pointer-events-none whitespace-nowrap select-none"
        >
          {label} <ArrowRight className="w-4 h-4 shrink-0" />
        </span>

        {/* Slide-out span (visible at rest) */}
        <span aria-hidden="true" className="invisible flex items-center gap-2">
          {label} <ArrowRight className="w-4 h-4 shrink-0" />
        </span>

        <span
          className="
            absolute inset-0 flex items-center justify-center gap-2
            transition-transform duration-300
            ease-[cubic-bezier(0.76,0,0.24,1)]
            group-hover:-translate-y-full
          "
        >
          {label} <ArrowRight className="w-4 h-4 shrink-0" />
        </span>

        {/* Slide-in span (appears on hover) */}
        <span
          className="
            absolute inset-0 flex items-center justify-center gap-2
            transition-transform duration-300
            ease-[cubic-bezier(0.76,0,0.24,1)]
            translate-y-full group-hover:translate-y-0
            whitespace-nowrap
          "
        >
          {label}{" "}
          <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </button>
    </Link>
  );
}
