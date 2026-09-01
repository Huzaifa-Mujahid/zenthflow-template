"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import ServiceSection from "@/components/ServiceSection";
import ServicePageContent from "@/components/ServicePageContent";
import CTABanner from "@/components/CTABanner";
import RoundedPageHero from "@/components/RoundedPageHero";
import { servicesShowcaseData } from "@/data/servicesData";

export default function ServicePage({ params }) {
  const unwrappedParams = use(params);
  const slugArray = unwrappedParams.slug;

  const serviceId = slugArray[0];
  const subServiceId = slugArray[1];

  const index = servicesShowcaseData.findIndex((s) => s.id === serviceId);
  const service = servicesShowcaseData[index];

  if (!service) {
    notFound();
  }

  // Sub-service page
  if (subServiceId) {
    const subService = service.subServices?.find((sub) => sub.id === subServiceId);
    if (!subService) {
      notFound();
    }

    return (
      <div className="bg-black min-h-screen">
        <RoundedPageHero
          titleLines={[subService.title]}
          subtitle={subService.description || service.description}
        />

        {subService.serviceSection && (
          <ServiceSection service={{...subService.serviceSection, isServicePage: true}} index={0} />
        )}

        {subService.pageContent && (
          <ServicePageContent pageContent={subService.pageContent} />
        )}

        <CTABanner />
      </div>
    );
  }

  // Main service page
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

      <RoundedPageHero
        titleLines={[service.title]}
        subtitle={service.description}
      />

      <ServiceSection service={{...service, isServicePage: true}} index={index} />

      <ServicePageContent pageContent={service.pageContent} />

      <CTABanner />
    </div>
  );
}
