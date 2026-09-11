import { servicesShowcaseData } from "@/data/servicesData";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const slugArray = Array.isArray(slug) ? slug : [slug];
  
  const serviceId = slugArray[0];
  const subServiceId = slugArray[1];

  const service = servicesShowcaseData.find((s) => s.id === serviceId);

  if (!service) {
    return {
      title: "Service Not Found | ZENITHFLOW STUDIOS",
      description: "The requested service could not be found.",
    };
  }

  if (subServiceId) {
    const subService = service.subServices?.find((sub) => sub.id === subServiceId);
    if (!subService) {
      return {
      title: "Service Not Found | ZENITHFLOW STUDIOS",
        description: "The requested service could not be found.",
      };
    }
    return {
        title: `${subService.title} | ZENITHFLOW STUDIOS`,
      description: service.description,
      openGraph: {
      title: `${subService.title} | ZENITHFLOW STUDIOS`,
        description: service.description,
        images: service.image ? [{ url: service.image }] : [],
      },
    };
  }

  return {
      title: `${service.title} | ZENITHFLOW STUDIOS`,
    description: service.description,
    openGraph: {
    title: `${service.title} | ZENITHFLOW STUDIOS`,
      description: service.description,
      images: service.image ? [{ url: service.image }] : [],
    },
  };
}

export default function ServiceLayout({ children }) {
  return children;
}
