"use client";

import { use } from "react";

import { notFound } from "next/navigation";
import ServiceSection from "@/components/ServiceSection";
import ServicePageContent from "@/components/ServicePageContent";
import CTABanner from "@/components/CTABanner";
import RoundedPageHero from "@/components/RoundedPageHero";
import { servicesShowcaseData } from "@/data/servicesData";

/* ─── PAGE ───────────────────────────────────────────────── */
export default function ServicePage({ params }) {
  const unwrappedParams = use(params);
  const index = servicesShowcaseData.findIndex((s) => s.id === unwrappedParams.slug);
  const service = servicesShowcaseData[index];

  if (!service) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://orbitixdigital.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://orbitixdigital.com/services" },
      { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://orbitixdigital.com/services/${service.id}` }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": { "@type": "LocalBusiness", "name": "ORBITIX DIGITAL" },
    "areaServed": { "@type": "Country", "name": "Worldwide" },
    "description": service.description
  };

  const faqSchema = service.pageContent?.faqs?.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.pageContent.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  } : null;

  return (
    <div className="bg-black min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* ── HERO ── */}
      <RoundedPageHero
        titleLines={[service.title]}
        subtitle={service.description}
      />

      {/* ── SERVICE DETAILS (Reusing Home Page Component) ── */}
      <ServiceSection service={{...service, isServicePage: true}} index={index} />

      {/* ── SEO PAGE CONTENT ── */}
      <ServicePageContent pageContent={service.pageContent} />

      {/* ── CTA ── */}
      <CTABanner />
    </div>
  );
}
