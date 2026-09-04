"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Plus } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Wilber Moran",
    image: "/clients/Wilber Moran.png",
    quote: "I hired Orbitix Digital for Google Maps SEO and website development, and I'm genuinely impressed with the results. They built a clean, professional website and did a great job optimizing our Google Maps profile.",
  },
  {
    id: 2,
    name: "newpropainting",
    image: "/clients/newpropainting.png",
    quote: "Orbitix Digital did an amazing job building my website. The whole process was smooth, professional, and way easier than I expected. They really listened to what I wanted and brought my vision to life. The site looks clean and modern.",
  },
  {
    id: 3,
    name: "Pito Alemany",
    image: null,
    quote: "Kelvin from Orbitix Digital is highly professional and knowledgeable. He and his team created an excellent website for my handyman business, and I'm extremely satisfied with the results.",
  },
  {
    id: 4,
    name: "Jose Fernando Herrera",
    image: "/clients/Jose fernando Herrera.png",
    quote: "Highly recommend Orbitix Digital for anyone looking for professional Local SEO services and website development. Eric and his team are true experts in Google Maps SEO, Google Business Profile optimization, and custom website development.",
  },
  {
    id: 5,
    name: "David Hake",
    image: null,
    quote: "Eric and his guys were stand up, A-1 guys. They are the first people in the digital marketing business to be straight up and honest in their business dealings with me. They doubled my business workload in the first week.",
  },
  {
    id: 6,
    name: "Adnan Hussain",
    image: "/clients/Adnan Hussain.png",
    quote: "I hired Orbitix Digital for my real estate business. They are very professional and respond quickly!",
  },
  {
    id: 7,
    name: "Abdon Neto",
    image: "/clients/Abdon neto.png",
    quote: "We hired Orbitix Digital to optimize our Google Maps, so far they are doing a perfect job. They also created a one page website for our handyman business. Very professional and knowledgeable.",
  },
  {
    id: 8,
    name: "Sun Snawder",
    image: "/clients/Sun Snawder.png",
    quote: "Eric Wilson did an amazing job. I was really worried about my Google Business profile, but Eric helped me get it reinstated and put my business on the right way in Google Maps.",
  },
  {
    id: 9,
    name: "Ananias Gingerich",
    image: null,
    quote: "I'm really happy with the service. I just started with them 30 days ago and they started ranking my business on Google already. I highly recommend them.",
  },
  {
    id: 10,
    name: "Pronto Handyman LLC",
    image: "/clients/Pronto Handyman llc.png",
    quote: "The best marketing company I ever had, highly recommended.",
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIds, setExpandedIds] = useState({});

  const toggleExpand = (id) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // For responsive viewing, we might show 1 to 4 cards. Let's just do a simple slider logic.
  // The design shows 4 cards visible at once.
  const cardsToShow = 4;
  const maxIndex = Math.max(0, testimonials.length - cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <section className="py-6 px-3 sm:px-4 lg:px-5 bg-black text-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto bg-[#0D0D0D] rounded-t-[24px] rounded-b-[24px] border border-neutral-800 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url("/sections-bg/copper 3.png")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25 }} />
        <div className="relative z-10 px-5 md:px-20 py-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 gap-6 py-2"
      >
        <div>
          <h2
            className="font-display font-medium text-4xl md:text-[56px] leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-geist)" }}
          >
            Why they love<br />working with us
          </h2>
        </div>
        <div className="max-w-sm">
          <p className="text-[#a8a8a8] text-sm md:text-base leading-relaxed">
            We don&apos;t just complete projects — we cultivate lasting success. Here&apos;s what our partners have to say about working with us.
          </p>
        </div>
      </motion.div>

      {/* Cards Slider */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden"
      >
        <motion.div
          className="flex gap-6 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`min-w-[100%] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(25%-18px)] bg-[#1A1A1A] rounded-2xl p-6 flex flex-col justify-between min-h-[400px] border border-white/5 hover:border-white/10 transition-colors ${
                expandedIds[testimonial.id] ? "h-auto" : "h-[400px]"
              }`}
            >
              {/* Card Top */}
              <div className="flex justify-between items-start mb-8">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-xl overflow-hidden relative">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-neutral-700 to-neutral-900 flex items-center justify-center">
                      <span className="text-neutral-500 font-medium">{testimonial.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Quote */}
              <div className="flex-grow flex flex-col gap-3">
                <div className="flex items-start gap-2">
                  <Quote className="w-5 h-5 text-[#E63946] shrink-0 fill-[#E63946] transform rotate-180 opacity-90 mt-1" />
                  <p
                    className={`text-sm md:text-base text-white/90 leading-relaxed font-medium ${
                      expandedIds[testimonial.id] ? "" : "line-clamp-6"
                    }`}
                  >
                    {testimonial.quote}
                  </p>
                </div>
                {testimonial.quote.length > 150 && (
                  <button
                    onClick={() => toggleExpand(testimonial.id)}
                    className="self-start text-[#E63946] text-sm font-semibold hover:underline transition-colors mt-auto"
                  >
                    {expandedIds[testimonial.id] ? "Read less" : "Read more"}
                  </button>
                )}
              </div>

              {/* Author */}
              <div className="mt-2 pt-3 border-t border-white/10">
                <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-between items-center mt-6"
      >
        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-white scale-125" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-[#1A1A1A] hover:bg-[#2A2A2A] flex items-center justify-center text-white transition-colors border border-white/5"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-[#1A1A1A] hover:bg-[#2A2A2A] flex items-center justify-center text-white transition-colors border border-white/5"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
      </div>
      </div>
    </section>
  );
}
