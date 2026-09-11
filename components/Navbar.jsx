"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesShowcaseData } from "@/data/servicesData";
import { socialsData } from "@/data/socials";
import OrangeButton from "@/components/OrangeButton";
import MegaMenu from "@/components/MegaMenu";

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
  const [expandedMobileService, setExpandedMobileService] = useState(null);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
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

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 100);
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
              alt="ZENITHFLOW STUDIOS"
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
                <div 
                  key={link.label} 
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && handleDropdownEnter()}
                  onMouseLeave={() => link.hasDropdown && handleDropdownLeave()}
                >
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
                    <div 
                      className={`fixed left-1/2 -translate-x-1/2 top-[80px] pt-6 transition-all duration-300 z-50 ${servicesDropdownOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <MegaMenu onClose={() => setServicesDropdownOpen(false)} />
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

            <div className="max-w-[1440px] w-full mx-auto px-5 md:px-20 h-full overflow-y-auto flex flex-col md:flex-row md:items-center md:pt-24 pt-28 pb-12 relative z-10">
              
              {/* Navigation Links */}
              <div className="w-full md:w-2/3 flex flex-col md:justify-center gap-2 md:gap-4 md:h-full pt-6 pb-10 no-scrollbar">
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
                             <div key={service.id} className="flex flex-col">
                               <div 
                                 className="flex items-center justify-between cursor-pointer group/mobile-service"
                                 onClick={() => setExpandedMobileService(expandedMobileService === service.id ? null : service.id)}
                               >
                                 <Link 
                                   href={`/services/${service.id}`}
                                   className="font-display text-[5vw] md:text-[2vw] text-[#a8a8a8] hover:text-white uppercase transition-colors"
                                   onClick={(e) => {
                                     // Optional: Prevent default if we just want to expand, but for SEO it's an actual link
                                     // If we don't prevent default, it will navigate. 
                                     // The user requested: Click to expand/collapse. Let's make the text clickable to navigate, 
                                     // and a specific button or clicking the row to expand.
                                     // Since it's mobile, we'll navigate on text click, expand on arrow click.
                                     // We will allow navigating, and just close the menu.
                                     setMenuOpen(false);
                                   }}
                                   style={{ fontFamily: "var(--font-geist)" }}
                                 >
                                   {service.title}
                                 </Link>
                                 <button 
                                   className="p-2 text-[#a8a8a8] hover:text-white"
                                   onClick={(e) => {
                                     e.stopPropagation();
                                     setExpandedMobileService(expandedMobileService === service.id ? null : service.id);
                                   }}
                                 >
                                   <ChevronDown 
                                     size={16} 
                                     className={`transition-transform duration-300 ${expandedMobileService === service.id ? 'rotate-180' : 'rotate-0'}`} 
                                   />
                                 </button>
                               </div>
                               
                               <AnimatePresence>
                                 {expandedMobileService === service.id && (
                                   <motion.div 
                                     initial={{ height: 0, opacity: 0 }}
                                     animate={{ height: "auto", opacity: 1 }}
                                     exit={{ height: 0, opacity: 0 }}
                                     transition={{ duration: 0.3 }}
                                     className="overflow-hidden flex flex-col gap-2 pl-4 pt-2 border-l border-white/10 ml-2"
                                   >
                                     {service.subServices?.map((sub, subIdx) => (
                                       <Link
                                         key={subIdx}
                                         href={`/services/${service.id}`}
                                         onClick={() => setMenuOpen(false)}
                                         className="text-sm md:text-base text-[#777] hover:text-white transition-colors py-1 flex items-center gap-2 group/sub"
                                       >
                                         <span>{sub}</span>
                                         <ArrowUpRight size={12} className="opacity-0 -translate-x-2 translate-y-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 group-hover/sub:translate-y-0 transition-all duration-300" />
                                       </Link>
                                     ))}
                                   </motion.div>
                                 )}
                               </AnimatePresence>
                             </div>
                           ))}
                         </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Info / Contact Widget */}
              <div className="w-full md:w-1/3 mt-8 md:mt-0 flex flex-col md:justify-center border-t md:border-t-0 md:border-l border-[rgba(255,255,255,0.08)] pt-8 md:pt-0 md:pl-16 md:h-full">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-col gap-10"
                >
                  <div>
                    <span className="font-label text-[#a8a8a8] mb-4 block tracking-widest uppercase">Contact</span>
                    <a href="mailto:info@zenithflowstudios.com" className="font-body text-xl text-white hover:chrome-text transition-all duration-300 mb-2 block">
                      info@zenithflowstudios.com
                    </a>
                    <a href="tel:+15551234567" className="font-body text-lg text-[#c4c7c8] hover:text-white transition-all duration-300">
                      +1 (555) 123-4567
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

