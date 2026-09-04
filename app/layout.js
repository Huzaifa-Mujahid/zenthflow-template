import { Geist } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmoothScroll from "@/components/SmoothScroll";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata = {
  title: "ORBITIX DIGITAL | Premium Digital Agency & Business Technology Partners",
  description:
    "ORBITIX DIGITAL is a premium digital agency and business technology partner serving clients worldwide. We deliver branding, website development, web applications, AI automation, SEO, and social media management solutions.",
  keywords:
    "premium digital agency, business technology partner, digital solutions provider, branding web development AI automation, website development and SEO company, social media management agency",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "ORBITIX DIGITAL | Premium Digital Agency",
    description:
      "ORBITIX DIGITAL is a full-service digital agency specializing in business systems, web development, AI automation, and SEO solutions for ambitious businesses worldwide.",
    type: "website",
    url: "https://orbitixdigital.com",
    siteName: "ORBITIX DIGITAL",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#000000",
};

export const formatDetection = {
  telephone: "no",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geist.variable}`}
    >
      <head>

        <link rel="preload" as="image" href="/herosection%20images/1.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://orbitixdigital.com/#organization",
                  "name": "ORBITIX DIGITAL",
                  "url": "https://orbitixdigital.com",
                  "logo": "https://orbitixdigital.com/logo.png",
                  "sameAs": [
                    "https://instagram.com/orbitixdigital",
                    "https://www.linkedin.com/company/orbitixdigital"
                  ],
                  "description": "A premium digital agency and business technology partner serving clients worldwide, offering web development, AI automation, branding, and SEO services."
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://orbitixdigital.com/#localbusiness",
                  "name": "ORBITIX DIGITAL",
                  "url": "https://orbitixdigital.com",
                   "telephone": "+15105005817",
                   "email": "info@orbitixdigital.com",
                   "address": {
                     "@type": "PostalAddress",
                     "streetAddress": "Albany, New York 12207",
                     "addressCountry": "US"
                   },
                  "areaServed": "Worldwide",
                  "description": "Delivering comprehensive digital solutions, business growth systems, website development, and AI automation for enterprises worldwide."
                }
              ]
            })
          }}
        />
      </head>
      <body className="bg-black text-[#e5e2e1] antialiased overflow-x-hidden">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
