import Script from "next/script";
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
  title: "ZENITHFLOW STUDIOS | Premium Digital Agency & Business Technology Partners",
  description:
    "ZENITHFLOW STUDIOS is a premium digital agency and business technology partner serving clients worldwide. We deliver branding, website development, web applications, AI automation, SEO, and social media management solutions.",
  keywords:
    "premium digital agency, business technology partner, digital solutions provider, branding web development AI automation, website development and SEO company, social media management agency",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "ZENITHFLOW STUDIOS | Premium Digital Agency",
    description:
      "ZENITHFLOW STUDIOS is a full-service digital agency specializing in business systems, web development, AI automation, and SEO solutions for ambitious businesses worldwide.",
    type: "website",
    url: "https://zenithflowstudios.com",
    siteName: "ZENITHFLOW STUDIOS",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S11FHY2NDK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S11FHY2NDK');
          `}
        </Script>
        <meta
          name="google-site-verification"
          content="q63Wjmk06QTHw6WQoktQrPiXS_iRp5V5VCEhioYi9V4"
        />
        <link rel="preload" as="image" href="/herosection%20images/1.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://zenithflowstudios.com/#organization",
                  "name": "ZENITHFLOW STUDIOS",
                  "url": "https://zenithflowstudios.com",
                  "logo": "https://zenithflowstudios.com/logo.png",
                  "sameAs": [
                    "https://www.facebook.com/zenithflowstudios",
                    "https://www.instagram.com/zenithflowstudios"
                  ],
                  "description": "A premium digital agency and business technology partner serving clients worldwide, offering web development, AI automation, branding, and SEO services."
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://zenithflowstudios.com/#localbusiness",
                  "name": "ZENITHFLOW STUDIOS",
                  "url": "https://zenithflowstudios.com",
                   "telephone": "+15551234567",
                   "email": "info@zenithflowstudios.com",
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
