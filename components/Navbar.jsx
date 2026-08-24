"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesShowcaseData } from "@/data/servicesData";
import { socialsData } from "@/data/socials";
import OrangeButton from "@/components/OrangeButton";

const navLinks = [
  { href: "/", label: "Home", num: "01" },
  { href: "#", label: "Services", num: "02", hasDropdown: true },
  { href: "/portfolio", label: "Portfolio", num: "03" },
  { href: "/about", label: "About", num: "04" },
  { href: "/blog", label: "Blog", num: "05" },
  { href: "/contact", label: "Contact", num: "06" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Framer Motion Variants
  const menuVariants = {
    closed: { 
      opacity: 0,
      clipPath: "inset(0% 0% 100% 0%)",
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
    },
    open: { 
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  const linkVariants = {
    closed: { y: "100%", opacity: 0 },
    open: (i) => ({
      y: "0%",
      opacity: 1,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 * i + 0.2 }
    })
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'top-0 bg-[#0D0D0D]/80 backdrop-blur-lg border-b border-white/5 py-4' : 'top-0 pt-4 sm:pt-6 lg:pt-7 px-3 sm:px-4 lg:px-5 bg-transparent py-5 sm:py-8'}`}
      >
        <div className={`max-w-[1280px] mx-auto flex items-center justify-between gap-4 md:gap-8 px-6 md:px-12 ${scrolled ? 'py-0' : ''}`}>
          {/* Logo */}
          <Link href="/" className="relative group flex items-center z-[60] flex-none">
            <Image
              src="/logo.png"
              alt="ORBITIX DIGITAL"
              width={200}
              height={64}
              className="h-12 md:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Links (Hidden when menu is open to focus on the overlay) */}
          <div className={`hidden md:flex items-center justify-center gap-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} bg-transparent border border-white/10 rounded-[14px] px-2 lg:px-3 py-1.5`}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.hasDropdown && pathname.startsWith('/services'));
              return (
                <div key={link.label} className="relative group/nav">
                  <Link
                    href={link.href}
                    className={`relative group font-label text-[12px] overflow-hidden px-3 lg:px-5 py-2.5 rounded-[10px] transition-all duration-150 hover:shadow-[0_6px_12px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,1),inset_0_-2px_0_rgba(0,0,0,0.2)] hover:-translate-y-0.5 inline-flex items-center ${isActive ? 'shadow-[0_6px_12px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,1),inset_0_-2px_0_rgba(0,0,0,0.2)] -translate-y-0.5' : ''}`}
                    onClick={(e) => link.hasDropdown && e.preventDefault()}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-b from-[#ffffff] to-[#b8b8b8] transition-opacity duration-150 rounded-[10px] ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                    <span className={`relative z-10 flex items-center transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[150%] ${isActive ? "text-black font-bold" : "text-white"}`}>
                      {link.label} {link.hasDropdown && <ChevronDown size={14} className="ml-1" />}
                    </span>
                    <span className={`absolute inset-0 z-10 flex items-center justify-center translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 text-black ${isActive ? 'font-bold' : ''}`}>
                      {link.label} {link.hasDropdown && <ChevronDown size={14} className="ml-1" />}
                    </span>
                  </Link>

                  {/* Dropdown */}
                  {link.hasDropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:pointer-events-auto transition-all duration-300 z-50">
                      <div className="bg-[#111] rounded-2xl shadow-2xl p-2 w-72 border border-white/10 relative overflow-hidden">
                         <div className="relative z-10 flex flex-col gap-1">
                           {servicesShowcaseData.map((service) => (
                             <Link 
                               key={service.id} 
                               href={`/services/${service.id}`} 
                               className="block px-4 py-3 text-sm text-[#c4c7c8] hover:text-white hover:bg-white/5 rounded-xl transition-colors font-body font-medium"
                             >
                               {service.title}
                             </Link>
                           ))}
                         </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Section: CTA + Menu Toggle */}
          <div className="flex-none flex items-center gap-3 md:gap-8 z-[60]">
            <div className={`hidden md:block transition-opacity duration-300 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <OrangeButton label="Book A Call" size="sm" />
            </div>

            {/* Premium Hamburger Toggle */}
            <button
              className="group relative w-12 h-12 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-105 md:hidden"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {menuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <X size={20} className="text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Menu size={20} className="text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-Screen Premium Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-[#050505] overflow-hidden flex flex-col justify-center"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-[0.02] rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white opacity-[0.02] rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-[1440px] w-full mx-auto px-5 md:px-20 h-full flex flex-col md:flex-row items-center pt-24 pb-12 relative z-10">
              
              {/* Navigation Links */}
              <div className="w-full md:w-2/3 flex flex-col justify-center h-full gap-2 md:gap-4 overflow-y-auto pt-10 pb-20 no-scrollbar">
                <span className="font-label text-[#a8a8a8] mb-4 md:mb-8 tracking-widest uppercase">Navigation</span>
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href || (link.hasDropdown && pathname.startsWith('/services'));
                  return (
                    <div key={link.label} className="overflow-hidden flex flex-col">
                      <motion.div custom={i} variants={linkVariants} initial="closed" animate="open" exit="closed">
                        <Link
                          href={link.href}
                          className="group flex items-baseline gap-4 md:gap-8 py-2 md:py-4 w-fit"
                          onClick={(e) => {
                            if (!link.hasDropdown) setMenuOpen(false);
                            else e.preventDefault();
                          }}
                        >
                          <span className="font-label text-sm md:text-base text-[#444748] transition-colors duration-500 group-hover:text-white">
                            {link.num}
                          </span>
                          <h2 
                            className={`font-display text-[10vw] md:text-[6vw] leading-none uppercase transition-all duration-500 ${isActive ? "chrome-text" : "text-[#c4c7c8] group-hover:chrome-text group-hover:translate-x-4"}`}
                            style={{ fontFamily: "var(--font-geist)" }}
                          >
                            {link.label}
                          </h2>
                          {!link.hasDropdown && <ArrowUpRight size={24} className="opacity-0 -translate-x-4 translate-y-4 text-white transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />}
                        </Link>
                      </motion.div>
                      {link.hasDropdown && (
                         <motion.div custom={i} variants={linkVariants} initial="closed" animate="open" exit="closed" className="pl-12 md:pl-20 flex flex-col gap-3 pb-4">
                           {servicesShowcaseData.map((service, idx) => (
                              <Link 
                                key={service.id} 
                                href={`/services/${service.id}`}
                                className="font-display text-[5vw] md:text-[2vw] text-[#a8a8a8] hover:text-white uppercase transition-colors"
                                onClick={() => setMenuOpen(false)}
                                style={{ fontFamily: "var(--font-geist)" }}
                              >
                                {service.title}
                              </Link>
                           ))}
                         </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Info / Contact Widget */}
              <div className="w-full md:w-1/3 mt-12 md:mt-0 flex flex-col justify-end md:justify-center border-t md:border-t-0 md:border-l border-[rgba(255,255,255,0.08)] pt-8 md:pt-0 md:pl-16 h-full md:h-auto">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-col gap-10"
                >
                  <div>
                    <span className="font-label text-[#a8a8a8] mb-4 block tracking-widest uppercase">Contact</span>
                    <a href="mailto:hello@orbitixdigital.com" className="font-body text-xl text-white hover:chrome-text transition-all duration-300 mb-2 block">
hello@orbitixdigital.com
                    </a>
                    <a href="tel:+15105005817" className="font-body text-lg text-[#c4c7c8] hover:text-white transition-all duration-300">
                      +1 (510) 500-5817
                    </a>
                  </div>

                  <div>
                    <span className="font-label text-[#a8a8a8] mb-4 block tracking-widest uppercase">Socials</span>
                    <div className="flex gap-4 flex-wrap">
                      {socialsData.map(({ href, icon: Icon, label }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
                          <Icon size={20} />
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

