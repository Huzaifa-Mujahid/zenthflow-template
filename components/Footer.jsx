"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { socialsData } from "@/data/socials";

const pagesLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

const servicesLinks = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "Web Applications", href: "/services/web-applications" },
  { label: "Branding & Identity", href: "/services/branding-identity" },
  { label: "SEO & Growth", href: "/services/seo-growth" },
  { label: "Social Media Marketing", href: "/services/social-media" },
];

export default function Footer() {
  return (
    <div className="px-2 md:px-5 pb-5">
      <footer
        className="relative overflow-hidden bg-[#0A0A0A] text-white pt-20 pb-6 rounded-3xl"
        style={{
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 pointer-events-none mix-blend-screen" 
          style={{ 
              backgroundImage: 'url("/sections-bg/copper.png")', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              opacity: 0.25 
          }} 
        />

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
            
            {/* Newsletter / Left Side */}
            <div className="max-w-md w-full">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-8 leading-tight tracking-tight text-white">
                Stay updated with ZenithFlow news
              </h3>
              
              {/* Input form */}
              <div className="relative flex items-center w-full mb-8">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-[#111111] border border-white/10 rounded-full py-4 px-6 text-sm text-white outline-none focus:border-white/30 transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black p-2.5 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center">
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </button>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 flex-wrap">
                {socialsData.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links / Right Side */}
            <div className="flex flex-col sm:flex-row gap-16 lg:gap-24 xl:gap-32 pt-2">
              
              {/* Column 1: Pages */}
              <div className="flex flex-col gap-4">
                {pagesLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-[17px] tracking-wide"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Column 2: Services */}
              <div className="flex flex-col gap-4">
                {servicesLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-[17px] tracking-wide"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

            </div>
          </div>

          {/* Huge Title Section */}
          <div className="w-full mb-10 flex justify-center items-center overflow-hidden">
              <h1 className="text-[11vw] xl:text-[150px] font-bold tracking-tighter leading-none text-white whitespace-nowrap">
                  ZENITHFLOW STUDIOS
              </h1>
          </div>

          {/* Divider */}
          <div className="h-[1px] w-full bg-white/10 mb-6" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/60">
            <p>ZenithFlow Studios © {new Date().getFullYear()}. All rights reserved.</p>
            <div className="flex gap-4 items-center">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="w-px h-3 bg-white/20"></span>
              <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
