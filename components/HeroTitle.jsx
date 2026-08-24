"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * HeroTitle — animates each character in using GSAP stagger
 * Props:
 *   text: string  (e.g. "OUR WORK")
 *   className: string (tailwind/CSS classes for the h1 wrapper)
 *   delay: number (seconds before animation starts)
 */
export default function HeroTitle({ text, className = "", delay = 0.2 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = text.split(" ");
    container.innerHTML = "";

    words.forEach((word, wi) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "inline-block mr-[0.3em] last:mr-0";

      word.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.className = "stagger-char";
        span.style.display = "inline-block";
        wordSpan.appendChild(span);
      });

      container.appendChild(wordSpan);

      // Space between words
      if (wi < words.length - 1) {
        const spaceSpan = document.createElement("span");
        spaceSpan.innerHTML = "&nbsp;";
        container.appendChild(spaceSpan);
      }
    });

    const chars = container.querySelectorAll(".stagger-char");
    gsap.fromTo(
      chars,
      { opacity: 0, y: 40, rotateX: -20 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.9,
        stagger: 0.035,
        ease: "power4.out",
        delay,
      }
    );
  }, [text, delay]);

  return (
    <h1
      ref={containerRef}
      className={`font-display uppercase ${className}`}
      style={{
        fontFamily: "var(--font-geist)",
        perspective: "600px",
      }}
    >
      {text}
    </h1>
  );
}
