"use client";;
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconCheck,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({
  items,
  initialScroll = 0
}) => {
  const carouselRef = React.useRef(null);
  const wrapperRef  = React.useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isDownRef    = useRef(false);
  const startXRef    = useRef(0);
  const startScrollRef = useRef(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollLeft = initialScroll;
  }, [initialScroll]);

  const getCardStep = () => {
    if (typeof window === "undefined") return 260;
    const vw = window.innerWidth * 0.18;
    const w = Math.min(260, Math.max(200, vw));
    return w + 24;
  };

  const nudge = (dir) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollBy({ left: dir * getCardStep(), behavior: "smooth" });
  };

  const handleCardClose = (index) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollTo({ left: getCardStep() * (index + 1), behavior: "smooth" });
    setCurrentIndex(index);
  };

  const onPointerDown = (e) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    isDownRef.current = true;
    startXRef.current = e.pageX;
    startScrollRef.current = carousel.scrollLeft;
  };

  const onPointerMove = (e) => {
    if (!isDownRef.current) return;
    const carousel = carouselRef.current;
    if (!carousel) return;
    const walk = e.pageX - startXRef.current;
    carousel.scrollLeft = startScrollRef.current - walk;
  };

  const endDrag = () => {
    isDownRef.current = false;
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full" ref={wrapperRef}>

        <div
          ref={carouselRef}
          className="flex w-full overflow-x-scroll [scrollbar-width:none] [-ms-overflow-style:none] cursor-grab active:cursor-grabbing select-none"
          style={{ WebkitOverflowScrolling: "touch" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}>

          <div className="flex flex-row justify-start gap-4 md:gap-6 pl-4 sm:pl-8 md:pl-12 pr-12 md:pr-24 py-8 md:py-12">
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
                key={"card" + index}>
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute inset-y-0 left-2 md:left-6 right-2 md:right-6 z-40 flex items-center justify-between pointer-events-none">
          <button
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-neutral-800 border border-white/10 hover:bg-neutral-700 transition-colors"
            onClick={() => nudge(-1)}
            aria-label="Previous">
            <IconArrowNarrowLeft className="h-5 w-5 text-white/70" />
          </button>
          <button
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-neutral-800 border border-white/10 hover:bg-neutral-700 transition-colors"
            onClick={() => nudge(1)}
            aria-label="Next">
            <IconArrowNarrowRight className="h-5 w-5 text-white/70" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false
}) => {
  return (
    <motion.div
      layoutId={layout ? `card-${card.title}` : undefined}
      className="group relative z-10 flex flex-col items-start justify-start overflow-hidden bg-[#0D0D0D] border border-neutral-800"
      style={{
        width: "clamp(200px, 18vw, 260px)",
        height: "clamp(320px, 42vh, 420px)",
        borderRadius: "16px",
        boxShadow: "0 15px 45px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
        flexShrink: 0,
      }}>

      {/* Bottom fade — behind the title so text shows clearly */}
      <div
        className="pointer-events-none absolute inset-0 z-30"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.35) 45%, transparent 72%)" }}
      />
      {/* Hover dark overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-30 bg-black/85 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Bottom content — service name */}
      <div className="relative z-40 w-full mt-auto">
        {/* Hover details — service details appear above the title */}
        <div className="w-full px-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="max-h-0 overflow-y-auto transition-[max-height] duration-500 group-hover:max-h-56 [scrollbar-width:none] [-ms-overflow-style:none]">
            <p className="font-sans text-white/70 text-xs leading-relaxed">
              {card.description}
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {card.features?.slice(0, 4).map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 font-sans text-white/85 text-xs leading-relaxed">
                  <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C57035]" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Title at bottom */}
        <div className="w-full p-5">
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-left font-sans font-bold text-white [text-wrap:balance] leading-[1.15] text-lg md:text-xl">
            {card.title}
          </motion.p>
        </div>
      </div>

      <BlurImage
        src={card.src}
        alt={card.title}
        fill
        className="absolute inset-0 z-10 object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
    </motion.div>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}) => {
  const [isLoading, setLoading] = useState(true);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoading(false);
    }
  }, []);

  return (
    <img
      ref={imgRef}
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest} />
  );
};
