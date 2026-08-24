"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import RoundedPageHero from "@/components/RoundedPageHero";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  viewport: { once: true, margin: "-80px" },
});

const contactInfo = [
  {
    icon: Mail,
    label: "Direct Communication",
    value: "info@orbitixdigital.com",
    href: "mailto:info@orbitixdigital.com",
  },
  {
    icon: Phone,
    label: "Technical Support",
    value: "+1 (510) 500-5817",
    href: "tel:+15105005817",
  },
  {
    icon: MapPin,
    label: "Global Hub",
    value: "Albany, New York 12207",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", services: [], message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errs = {};
    if (!formData.name) errs.name = true;
    if (!formData.email) errs.email = true;
    if (formData.services.length === 0) errs.services = true;
    if (!formData.message) errs.message = true;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Message sent! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", services: [], message: "" });
    }
  };

  return (
    <div className="bg-black min-h-screen">
      {/* ── HERO ── */}
      <RoundedPageHero
        titleLines={["Let's Build", "Something Great"]}
        subtitle="Have a project in mind? Share your goals and our team will respond within 24 hours."
      />

      {/* ── CONTACT FORM ── */}
      <div className="w-full relative bg-neutral-950 p-3 sm:p-4 lg:p-5">
        <div className="relative w-full bg-[#0D0D0D] rounded-[32px] overflow-hidden border border-neutral-800 shadow-2xl">
          {/* Copper Box Background Image */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "url('/sections-bg/copper box.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.32,
            }}
          />

          {/* Dark overlay so content stays readable */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "rgba(0,0,0,0.45)" }}
          />

          <section className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-20 pt-16 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  {...fadeUp(i * 0.1)}
                  className="glass-card-no-hover p-6 flex items-center gap-5"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-lg shrink-0">
                    <Icon size={20} className="text-[#8a8f92]" />
                  </div>
                  <div>
                    <p className="font-label text-[#a8a8a8] text-xs mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-headline text-white text-base hover:text-[#8a8f92] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-headline text-white text-base">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              {...fadeUp(0.3)}
              className="glass-card-no-hover px-6 py-4 flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-[#8a8f92]" />
              <span className="font-label text-[#a8a8a8] text-xs">
                We respond within 24 hours
              </span>
            </motion.div>
            <motion.p {...fadeUp(0.35)} className="font-body text-[#8e9192] text-sm leading-relaxed mt-4">
              From concept to launch, we partner with you at every stage. Tell us about your goals, timeline, and budget — and we&apos;ll craft a solution that fits. No pressure, no hidden fees, just honest conversations and premium delivery.
            </motion.p>
          </div>

          {/* Form */}
          <motion.form
            {...fadeUp(0.15)}
            onSubmit={handleSubmit}
            className="glass-card-no-hover p-8 space-y-5"
          >
            <div className="relative">
              <label className="block font-label text-[#a8a8a8] mb-2 uppercase text-xs">
                Your Name
              </label>
              <input
                type="text"
                className={`input-field ${errors.name ? 'error' : ''}`}
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="relative">
              <label className="block font-label text-[#a8a8a8] mb-2 uppercase text-xs">
                Your Email
              </label>
              <input
                type="email"
                className={`input-field ${errors.email ? 'error' : ''}`}
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="relative">
              <label className="block font-label text-[#a8a8a8] mb-3 uppercase text-xs">
                Services You Need
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Website Development",
                  "Web Applications",
                  "Branding & Identity",
                  "SEO & Growth",
                  "Social Media Marketing",
                  "Video Editing & Production",
                  "AI & Automation"
                ].map((service) => (
                  <label key={service} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                      formData.services.includes(service)
                        ? "bg-[#ff4d00] border-[#ff4d00]"
                        : `border-white/20 group-hover:border-white/50 ${errors.services ? 'border-red-500' : ''}`
                    }`}>
                      {formData.services.includes(service) && (
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={formData.services.includes(service)}
                      onChange={(e) => {
                        const newServices = e.target.checked
                          ? [...formData.services, service]
                          : formData.services.filter(s => s !== service);
                        setFormData({ ...formData, services: newServices });
                      }}
                    />
                    <span className={`text-sm ${formData.services.includes(service) ? 'text-white' : 'text-[#8e9192] group-hover:text-[#a8a8a8]'} transition-colors`}>
                      {service}
                    </span>
                  </label>
                ))}
              </div>
              {errors.services && (
                <p className="text-red-500 text-xs mt-2">Please select at least one service.</p>
              )}
            </div>

            <div className="relative">
              <label className="block font-label text-[#a8a8a8] mb-2 uppercase text-xs">
                Message
              </label>
              <textarea
                className={`input-field resize-none h-32 ${errors.message ? 'error' : ''}`}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="btn-filled w-full py-4 flex items-center justify-center gap-2">
              Send Message <Send size={16} />
            </button>
          </motion.form>
        </div>
          </section>
        </div>
      </div>
    </div>
  );
}
