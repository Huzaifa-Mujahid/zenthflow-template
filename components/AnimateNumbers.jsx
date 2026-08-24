"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

function AnimatedDigit({ digit }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const animatedValue = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  
  useEffect(() => {
    if (isInView) {
      animatedValue.set(parseInt(digit));
    }
  }, [isInView, digit, animatedValue]);

  // Translate up by v * 10% of the 10-digit container's height
  const y = useTransform(animatedValue, (v) => `-${v * 10}%`);

  return (
    <div 
      ref={ref} 
      className="relative inline-flex overflow-hidden" 
      style={{ height: "1em", verticalAlign: "bottom" }}
    >
      {/* Invisible placeholder to reserve the correct width for the digit */}
      <span className="invisible">{digit}</span>
      <motion.div 
        style={{ y }} 
        className="absolute left-0 top-0 w-full flex flex-col items-center"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <span key={num} className="flex items-center justify-center w-full" style={{ height: "1em" }}>
            {num}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function AnimateNumbers({ value, suffix = "" }) {
  // Extract number and suffix dynamically if the value itself contains '+' or '%'
  let numStr = String(value);
  let extraSuffix = suffix;
  
  // If the passed value has trailing non-digit chars, extract them as suffix
  const match = numStr.match(/^([\d,.]+)(.*)$/);
  if (match) {
    numStr = match[1];
    if (match[2] && !extraSuffix) {
      extraSuffix = match[2];
    }
  }

  const digits = numStr.split("");

  return (
    <span className="inline-flex font-tabular-nums items-center" style={{ lineHeight: "1em" }}>
      {digits.map((char, index) => {
        if (!isNaN(parseInt(char))) {
          return <AnimatedDigit key={index} digit={char} />;
        }
        // For non-number characters (like ',' or '.')
        return (
          <span key={index} className="inline-block">
            {char}
          </span>
        );
      })}
      {extraSuffix && (
        <span className="inline-block ml-[0.05em]">
          {extraSuffix}
        </span>
      )}
    </span>
  );
}
