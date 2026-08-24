import { servicesShowcaseData } from "@/data/servicesData";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesShowcaseData.find((s) => s.id === slug);

  if (!service) {
    return {
      title: "Service Not Found | ORBITIX DIGITAL",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.title} | ORBITIX DIGITAL`,
    description: service.description,
    openGraph: {
      title: `${service.title} | ORBITIX DIGITAL`,
      description: service.description,
      images: service.image ? [{ url: service.image }] : [],
    },
  };
}

export default function ServiceLayout({ children }) {
  return children;
}
