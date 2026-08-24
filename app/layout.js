import { Geist } from "next/font/google";
import Script from "next/script";
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
  title: "ORBITIX DIGITAL | Full Service Digital Agency & Business Systems Company",
  description:
    "ORBITIX DIGITAL is a full service digital agency and business systems company serving clients globally. We provide branding, website development, web applications, AI automation, SEO, and social media management.",
  keywords:
    "full service digital agency, business systems company, digital solutions company, branding web development AI automation, website development and SEO company, social media management company",
  verification: {
    google: "RhVQgAkCQ_L7e9Eer20iAob5Vz4g815U5ouwRcVKF-Q",
  },
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
  },
  openGraph: {
    title: "ORBITIX DIGITAL | Full Service Digital Agency",
    description:
      "ORBITIX DIGITAL is a premium full service digital agency offering business systems, web development, AI automation, and SEO solutions for businesses worldwide.",
    type: "website",
    url: "https://orbitixdigital.com",
    siteName: "ORBITIX DIGITAL",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geist.variable}`}
    >
      <head>
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-F562ZNDNBT" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F562ZNDNBT');
          `
        }} />
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
                  "description": "A full service digital agency and business systems company serving clients worldwide, offering web development, AI automation, branding, and SEO services."
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://orbitixdigital.com/#localbusiness",
                  "name": "ORBITIX DIGITAL",
                  "url": "https://orbitixdigital.com",
                  "telephone": "+923237099044",
                  "email": "precision@orbitixdigital.com",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Kareem Park",
                    "addressLocality": "Lahore",
                    "addressRegion": "Punjab",
                    "addressCountry": "PK"
                  },
                  "areaServed": "Worldwide",
                  "description": "Providing digital solutions, business growth systems, website development, and AI automation for businesses worldwide."
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
