// ── ZENITHFLOW STUDIOS Services Data ─────────────────────────────────────────────────────
// Each service maps to actual images in /public/services/
// layout: "image-left" | "image-right" | "image-full" | "image-grid" | "website-scroll" | "image-showcase"

// Note: icon field uses string names resolved in IndustryShowcase.jsx

const brandingIndustries = [
  {
    id: "professional-services",
    title: "Professional Services",
    icon: "Building2",
    headline: "Brand Identities That Establish Immediate Authority",
    description: "Law firms, consultancies, and agencies sell trust before they sell services. Your brand identity must communicate expertise and reliability at first glance.",
    challenges: [
      "Looking generic and blending in with competitors",
      "Inconsistent branding across presentations and digital touchpoints",
      "Failing to communicate a premium positioning"
    ],
    approach: "We create sophisticated, cohesive brand systems with authoritative typography and curated color palettes that instantly position your firm as an industry leader."
  },
  {
    id: "ecommerce",
    title: "E-commerce & Retail",
    icon: "ShoppingCart",
    headline: "Memorable Brands That Drive Loyalty and Sales",
    description: "In crowded digital marketplaces, your visual identity is your strongest differentiator. A memorable brand builds customer loyalty and increases perceived product value.",
    challenges: [
      "Lack of visual consistency across packaging and website",
      "Failing to connect emotionally with target demographics",
      "Brand assets that don't scale well across different mediums"
    ],
    approach: "We design vibrant, recognizable brand identities that translate seamlessly from your Shopify store to your physical packaging, ensuring a premium unboxing experience."
  },
  {
    id: "saas-tech",
    title: "SaaS & Tech",
    icon: "Cpu",
    headline: "Tech Brands Designed for Trust and Scalability",
    description: "Software companies need to look innovative yet stable. A strong brand identity humanizes your technology and builds the credibility needed to secure enterprise clients.",
    challenges: [
      "Overly complex visual messaging",
      "Struggling to stand out in a sea of similar blue tech logos",
      "Need for scalable design systems across product UI"
    ],
    approach: "We build modern, scalable brand systems with clear visual hierarchies, custom iconography, and a distinct voice that separates your software from the competition."
  },
  {
    id: "healthcare",
    title: "Healthcare & Wellness",
    icon: "Heart",
    headline: "Compassionate Branding That Patients Trust",
    description: "Healthcare brands must balance professionalism with approachability. Your visual identity needs to evoke safety, care, and medical excellence.",
    challenges: [
      "Looking outdated or overly clinical",
      "Inconsistent messaging across patient materials",
      "Building immediate trust with anxious patients"
    ],
    approach: "We craft clean, accessible brand identities using calming color psychology, legible typography, and approachable messaging that puts patients at ease."
  },
  {
    id: "real-estate",
    title: "Real Estate",
    icon: "Home",
    headline: "Premium Branding for High-Value Properties",
    description: "Whether you're a luxury brokerage or a commercial developer, your brand needs to reflect the value of the properties you represent.",
    challenges: [
      "Looking like every other local real estate agent",
      "Inconsistent branding on signage and digital listings",
      "Failing to attract high-net-worth clients"
    ],
    approach: "We design elegant, high-end brand identities that elevate your perceived value, making your firm the obvious choice for premium real estate transactions."
  },
  {
    id: "hospitality",
    title: "Hospitality & Lifestyle",
    icon: "Hotel",
    headline: "Experiential Brands That Captivate Guests",
    description: "Hotels, restaurants, and lifestyle brands sell an experience. Your visual identity should transport your audience and create desire before they even book.",
    challenges: [
      "Failing to capture the unique atmosphere visually",
      "Inconsistent branding across menus, signage, and social media",
      "Lacking a distinct personality"
    ],
    approach: "We build immersive brand identities with rich color palettes, expressive typography, and curated imagery styles that reflect the exact ambiance of your establishment."
  }
];

export const servicesShowcaseData = [
  {
    id: "website-development",
    tag: "Service 01",
    title: "Website Development",
    headline: "Websites That Establish Authority",
    description:
      "We develop high-performance, bespoke website solutions that create lasting impressions. Every detail is purposeful — from instantaneous loading to fluid, refined interactions.",
    solvesWhat:
      "Visitors leave within 3 seconds when your site appears unprofessional. We craft business website development projects that captivate them instantly and transform curiosity into clientele.",
    features: [
      "95+ PageSpeed scores — outperforming 97% of competitors",
      "Mobile-first architecture, Core Web Vitals optimized from inception",
      "Custom CMS and ecommerce solutions",
      "Micro-animations & conversion-focused landing pages",
    ],
    images: [
      "/services/website_1.webp",
      "/services/website_2.webp",
      "/services/website_3.webp",
      "/services/website_4.webp",
      "/services/website_5.webp",
    ],
    image: "/services/website_4.webp",
    subServices: [
      { 
        id: "web-design", 
        title: "Web Design",
        description: "Most websites look great on paper but fail where it matters most — converting traffic into real business. We design fast, responsive, and SEO-friendly websites engineered to engage visitors, rank on search engines, and maximize ROI.",
        serviceSection: {
          tag: "Service 01",
          title: "Web Design",
          headline: "High-Performance Websites That Convert",
          description: "We combine creative UI/UX design with robust engineering to deliver websites that perform flawlessly. Every pixel is intentional — from zero-latency loading to buttery-smooth interactions.",
          solvesWhat: "Visitors form an opinion about your business within 50 milliseconds. We design fast, responsive, and SEO-friendly websites that turn that instant reaction into trust — and trust into revenue.",
          features: [
            "UX & User Flow Mapping — navigation depth reduced to 2 clicks or less",
            "Custom Brand Design — unique layouts, no generic templates",
            "Mobile-First & Accessibility — designed to WCAG standards",
            "Core Web Vitals Optimization — 95+ PageSpeed scores guaranteed"
          ],
          images: [
            "/services/website_1.webp",
            "/services/website_2.webp",
            "/services/website_3.webp",
            "/services/website_4.webp",
            "/services/website_5.webp"
          ],
          image: "/services/website_4.webp",
          layout: "website-scroll"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "Design is the fastest judgment a prospect makes about your business",
            description: "Visitors form an opinion of your site in about 50 milliseconds, before they read a word. That snap judgment becomes their opinion of your company: trustworthy or sketchy, established or fly-by-night, worth their money or not. You never get a neutral first impression, only a good one or a bad one, and design decides which.",
            body: "But looking good is table stakes. A design that ignores how people actually move through a page, where the eye lands, what the thumb can reach, how many fields stand between a visitor and a conversion, is an expensive brochure. And a beautiful site that loads slowly or can't be crawled is worse than that: it's a brochure Google won't show anyone and impatient visitors abandon before it paints.",
            highlight: "We design and build as one discipline. Every layout decision is also a performance decision, an accessibility decision, and an SEO decision, because on the live web they're inseparable."
          },
          intro: "Visitors form an opinion about your business within 50 milliseconds. That instantaneous reaction dictates whether a user stays to explore or bounces to a competitor. A high-converting website requires more than aesthetics — it needs strategic layout, intuitive navigation, and technical perfection.",

          included: [
            {
              label: "UX & User Flow Mapping",
              detail: "We structure your site based on user intent, reducing navigation depth to 2 clicks or less for key pages."
            },
            {
              label: "UI & Custom Brand Design",
              detail: "Unique design tailored to your brand identity — no generic templates or cookie-cutter solutions."
            },
            {
              label: "Scalable Design Systems",
              detail: "Component libraries that keep your branding consistent and make future content updates seamless."
            },
            {
              label: "Mobile-First & Accessibility",
              detail: "Designed to WCAG standards for flawless display across all screen sizes and mobile devices."
            },
            {
              label: "Core Web Vitals Optimization",
              detail: "Lean code and optimized assets to guarantee top-tier speed and performance scores."
            }
          ],

          process: [
            {
              step: "01",
              title: "Discovery & Strategy",
              body: "We analyze your industry, competitive landscape, target audience, and SEO content requirements."
            },
            {
              step: "02",
              title: "Wireframing & UI/UX Design",
              body: "We structure user journeys through wireframes, applying your unique brand elements to high-fidelity mockups."
            },
            {
              step: "03",
              title: "Engineered Development",
              body: "We build your website using clean, semantic, and high-performance code with SEO foundations pre-baked."
            },
            {
              step: "04",
              title: "Testing, Launch & Handoff",
              body: "Rigorous cross-browser QA, 301 redirect mapping for ranking preservation, and complete handoff documentation."
            },
            {
              step: "05",
              title: "Post-Launch Optimization",
              body: "We monitor performance metrics, analyze user behavior, and make data-driven refinements to maximize conversions after your site goes live."
            }
          ],

          faqs: [
            {
              q: "Will a website redesign affect my current Google rankings?",
              a: "Not when handled correctly. We preserve your existing content equity, maintain URL structures, and map proper redirects so your SEO rankings remain protected — and often improve due to better site performance."
            },
            {
              q: "Why choose custom web design over template builders?",
              a: "Template builders often come with heavy code bloat, slow page load times, and rigid structures. Custom development gives you total control over performance, scalability, and user conversion paths."
            },
            {
              q: "Is the final design optimized for mobile devices first?",
              a: "Yes. Google uses mobile-first indexing, and the majority of web traffic comes from mobile screens. Every layout is optimized for mobile responsiveness from the ground up."
            }
          ]
        }
      },
      { 
        id: "web-development", 
        title: "Web Development",
        description: "Custom sites and applications built for search and speed from the first commit. Clean front-end and back-end code, engineered so performance, accessibility, and crawlability are built in — not retrofitted.",
        serviceSection: {
          tag: "Service 03",
          title: "Web Development",
          headline: "Custom Sites Built for Search and Speed From the First Commit",
          description: "Most agency websites are decoration with a database bolted on — pretty in the mockup, slow in the browser, and invisible to Google. We build the other kind: clean code engineered so performance and crawlability are the way the thing was built.",
          solvesWhat: "A page-builder theme with forty plugins loads in six seconds, ships a megabyte of JavaScript, and fails Core Web Vitals. We build with engineering discipline so every future page inherits a site already engineered to rank.",
          features: [
            "Semantic, Accessible HTML — passes WCAG AA",
            "Core Web Vitals — engineered into the build",
            "SEO-First Architecture — crawlable from day one",
            "Clean, Maintainable Code — version-controlled, documented"
          ],
          images: [
            "/services/website_1.webp",
            "/services/website_2.webp",
            "/services/website_3.webp",
            "/services/website_4.webp",
            "/services/website_5.webp"
          ],
          image: "/services/website_4.webp",
          layout: "website-scroll"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "Your website is either an asset that compounds or a liability that leaks",
            description: "A website is the one marketing asset you actually own, and the one most businesses build on the cheapest possible foundation. A page-builder theme loads in six seconds, ships a megabyte of JavaScript, and fails Core Web Vitals on mobile.",
            body: "The fix isn't a plugin — it's engineering discipline. Clean, maintainable code means the next feature ships in days. Semantic HTML means screen readers and crawlers read the same structure. A real build process means images are optimized and the critical rendering path is measured, not guessed.",
            highlight: "We don't build a site and hand it to an SEO team to retrofit. We build it so the technical foundation is right from the first commit — crawlable routes, fast responses, and structured data baked into the templates."
          },
          intro: "Most agency websites are decoration with a database bolted on. We build custom sites and applications with clean code, engineered so performance, accessibility, and crawlability are built in from the first commit — not a post-launch cleanup project.",

          included: [
            {
              label: "Front-End Development",
              detail: "Semantic HTML, scoped CSS, and lean JavaScript. React, Next.js, Astro, or vanilla — component architectures that pass WCAG AA."
            },
            {
              label: "Back-End & APIs",
              detail: "Node.js, Python, PHP, Laravel, Django. Clean APIs, database design, and server-side logic that scales."
            },
            {
              label: "CMS Builds",
              detail: "Headless or traditional — Sanity, Contentful, Storyblok, WordPress. Content editing without the bloat."
            },
            {
              label: "SEO-First Architecture",
              detail: "Crawlable routes, structured data, clean URLs, and a URL architecture that won't need redirects in eighteen months."
            },
            {
              label: "Core Web Vitals",
              detail: "LCP under 2.5s, WCAG 2.1 AA conformance, render-blocking resources eliminated. Measured, not guessed."
            },
            {
              label: "Accessibility",
              detail: "WCAG compliance verified during the build, not audited after. Screen readers and crawlers read the same structure."
            }
          ],

          process: [
            {
              step: "01",
              title: "Scope",
              body: "We map what you're building and why. Goals, features, integrations, and technical constraints committed to a scope you can hold us to."
            },
            {
              step: "02",
              title: "Design & Plan",
              body: "Information architecture, URL structure, data models, and component library planned alongside visual design. What gets designed is what can be built."
            },
            {
              step: "03",
              title: "Build",
              body: "Clean, tested code in a real engineering workflow. Version control, staging, code review, semantic markup, and structured data going in as we code."
            },
            {
              step: "04",
              title: "QA & Verify",
              body: "Core Web Vitals, accessibility, and crawlability verified live. Cross-browser testing and performance checks on real devices."
            },
            {
              step: "05",
              title: "Launch & Monitor",
              body: "Redirects mapped 1:1, rollback plan ready, Search Console and uptime watched from the first hour live."
            }
          ],

          faqs: [
            {
              q: "Do you build custom or use templates?",
              a: "We build custom — clean front-end and back-end code, or lean custom themes on top of a CMS. Page builders like Elementor and Divi ship enormous unused CSS and JavaScript that fail Core Web Vitals."
            },
            {
              q: "Why is 'engineers who do SEO' different?",
              a: "Most teams build a site then hand it to SEO to retrofit. We build it right the first time because the same people who write the code understand how Google reads it."
            },
            {
              q: "Can you work with our existing site?",
              a: "Yes. We audit what you have, identify what to keep, rebuild what's broken, and migrate without losing rankings or traffic."
            },
            {
              q: "What tech stack do you build on?",
              a: "We pick the right tool for the job — React, Next.js, Astro, Vue, Node.js, Python, PHP. No lock-in, just what fits your project."
            }
          ]
        }
      },
      { 
        id: "landing-pages", 
        title: "Landing Pages",
        description: "High-converting landing pages that turn ad spend into revenue. Message-matched, fast-loading, and tracked end to end — built to convert, not decorate.",
        serviceSection: {
          tag: "Service 02",
          title: "Landing Pages",
          headline: "The Single Page That Decides Whether Your Ad Spend Turns Into Revenue",
          description: "You can buy the best traffic in your market and still lose money because the page it lands on is slow, off-message, and asking for too much. A landing page has exactly one job: take the promise your ad made and close it.",
          solvesWhat: "Most businesses point paid traffic at a homepage and wonder why the campaign never breaks even. We build landing pages designed to convert, engineered to load, and wired to measure.",
          features: [
            "Message Match — headline mirrors the ad exactly",
            "Core Web Vitals — sub-2-second load times",
            "Conversion Tracking — every click attributed end to end",
            "A/B Testing — built to improve from day one"
          ],
          images: [
            "/services/website_1.webp",
            "/services/website_2.webp",
            "/services/website_3.webp",
            "/services/website_4.webp",
            "/services/website_5.webp"
          ],
          image: "/services/website_4.webp",
          layout: "website-scroll"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "A focused page beats your homepage every time for campaign traffic",
            description: "Your homepage is built for everyone — first-time visitors, existing customers, job seekers. It has navigation begging visitors to wander and five competing calls to action. That's fine for organic browsing. It's a leak for paid traffic you're paying for by the click.",
            body: "A campaign landing page matches the exact promise of the ad, strips out every path that isn't the conversion, and loads fast enough that nobody bounces before it paints. Doubling your conversion rate halves your cost per acquisition without spending another dollar on media.",
            highlight: "We build landing pages designed to convert, engineered to load, and wired to measure — so every campaign you run starts from a foundation that actually pays back."
          },
          intro: "You can buy the best traffic in your market and still lose money because the page it lands on is slow, off-message, and cluttered. A landing page has exactly one job: take the promise your ad made and close it. We build pages that match the ad, answer objections, and drive one action.",

          included: [
            {
              label: "Message Match",
              detail: "Headline and offer mirrored to each ad group. Dynamic text insertion for keyword-level match."
            },
            {
              label: "Speed & Core Web Vitals",
              detail: "Hand-built for speed with lean code and optimized assets. Sub-2-second load times guaranteed."
            },
            {
              label: "Forms & Tracking",
              detail: "Conversion tracking wired end to end. Every click attributed back to the campaign and keyword."
            },
            {
              label: "A/B Testing Foundation",
              detail: "Built to test from day one. The page keeps lowering your cost per acquisition as it runs."
            },
            {
              label: "Design & Conversion",
              detail: "Above-the-fold clarity, trust signals where doubt happens, and one obvious call to action."
            },
            {
              label: "CRM & Platform Integrations",
              detail: "CRM, email, and ad platforms connected and firing on submit."
            }
          ],

          process: [
            {
              step: "01",
              title: "Scope",
              body: "We learn the offer, the traffic, and the goal. What you're selling, who's clicking, and what a conversion is worth."
            },
            {
              step: "02",
              title: "Design",
              body: "We map the message and persuasion flow. Headline, proof, objections, and CTA designed together — not bolted on after."
            },
            {
              step: "03",
              title: "Build",
              body: "Hand-built for speed and wired for tracking. Lean code, optimized assets, and every conversion path measured."
            },
            {
              step: "04",
              title: "QA & Test",
              body: "Cross-browser testing, speed verification, and tracking QA. We confirm every event fires before ads turn on."
            },
            {
              step: "05",
              title: "Launch & Optimize",
              body: "We launch, verify on real devices, and set up A/B testing so the page keeps improving as the campaign runs."
            }
          ],

          faqs: [
            {
              q: "Why not just send my ads to my homepage?",
              a: "Your homepage is built for everyone and asks visitors to wander. A landing page matches the ad's exact promise, removes every path except the conversion, and converts several times better on the same traffic."
            },
            {
              q: "How is this different from a page builder?",
              a: "Page builders add bloat, slow down loading, and limit what you can track. We hand-build for speed, wire conversion tracking down to the keyword, and treat the page as something to be measured and improved."
            },
            {
              q: "Will you set up conversion tracking?",
              a: "Yes. Every conversion, call, and click is attributed back to the campaign and keyword that drove it. We verify every event before ads turn on."
            },
            {
              q: "Can you A/B test the page after launch?",
              a: "Yes. We set up the first test from day one so the page keeps lowering your cost per acquisition as the campaign runs."
            }
          ]
        }
      },
      { 
        id: "wordpress", 
        title: "WordPress",
        description: "Custom WordPress development with clean code, hardened security, and performance that loads fast and ranks. No bloated page builders, no plugin mess — just a site that works.",
        serviceSection: {
          tag: "Service 04",
          title: "WordPress",
          headline: "WordPress Done Right — The Platform That Runs 40% of the Web",
          description: "Most WordPress sites rely on heavy page builders like Elementor or Divi, 15+ unmaintained plugins, and slow render-blocking scripts. We build custom themes with minimal dependencies, structured fields, and Core Web Vitals compliance for sub-2-second load times.",
          solvesWhat: "A slow, insecure WordPress site costs you visitors, rankings, and revenue. We deliver clean, fast, and secure WordPress builds that convert and rank.",
          features: [
            "Custom WordPress Themes — no page-builder lock-in",
            "WooCommerce Development — performance-tuned stores",
            "Core Web Vitals — passing scores guaranteed",
            "Security Hardening — malware-proof from day one"
          ],
          images: [
            "/services/website_1.webp",
            "/services/website_2.webp",
            "/services/website_3.webp",
            "/services/website_4.webp",
            "/services/website_5.webp"
          ],
          image: "/services/website_4.webp",
          layout: "website-scroll"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "WordPress runs 40% of the web — most of it badly",
            description: "WordPress is the world's most popular CMS, but most implementations are slow, bloated, and vulnerable. Heavy page builders add unnecessary code, unmaintained plugins create security risks, and poor hosting kills performance.",
            body: "A WordPress site built on clean code with minimal plugins loads in under 2 seconds, passes Core Web Vitals, and stays secure without constant maintenance. That's the difference between a site that costs you money and one that makes it.",
            highlight: "We build custom WordPress themes with clean code, structured fields via ACF, and performance optimization baked in from the start — no page-builder bloat, no plugin mess."
          },
          intro: "WordPress powers 40% of the web, but most sites built on it are slow, insecure, and frustrating to manage. Heavy page builders like Elementor and Divi add bloat, 15+ plugins create security vulnerabilities, and poor code structure kills Core Web Vitals scores. We build custom WordPress themes from scratch — clean code, minimal dependencies, and performance that loads fast and ranks.",

          included: [
            {
              label: "Custom WordPress Themes",
              detail: "Purpose-built themes using clean PHP, Block Editor, and ACF — no page-builder lock-in, full ownership."
            },
            {
              label: "WooCommerce Development",
              detail: "Performance-tuned catalogs, cart, and checkout with custom product types, fields, and pricing logic."
            },
            {
              label: "Core Web Vitals Optimization",
              detail: "Sub-2-second load times with optimized images, clean queries, and lean scripts."
            },
            {
              label: "Security Hardening",
              detail: "Malware-proof setup with firewalls, login protection, and regular security audits."
            },
            {
              label: "SEO Foundations",
              detail: "Product & Review schema for Google rich results, semantic structure, and metadata built in."
            },
            {
              label: "Easy Content Editing",
              detail: "Block Editor & ACF setup so your team can update content without touching code."
            }
          ],

          process: [
            {
              step: "01",
              title: "Scope",
              body: "Map site needs, content inventory, and performance baseline. We understand your business goals before writing code."
            },
            {
              step: "02",
              title: "Design & Plan",
              body: "Custom theme design, content architecture with ACF, and minimal plugin stack. You approve before we build."
            },
            {
              step: "03",
              title: "Build",
              body: "Lean code, clean queries, staging environment, and built-in SEO. We build fast and test everything."
            },
            {
              step: "04",
              title: "QA & Review",
              body: "Cross-browser testing, security audit, and performance verification. We catch every issue before launch."
            },
            {
              step: "05",
              title: "Launch & Verify",
              body: "1:1 redirect mapping, security hardening, and post-launch Core Web Vitals check. Your rankings stay safe."
            }
          ],

          faqs: [
            {
              q: "Is WordPress slow and insecure?",
              a: "Not when built correctly. The problem isn't WordPress itself — it's bloated themes, too many plugins, and bad hosting. We build custom themes with clean code, minimal dependencies, and proper security hardening."
            },
            {
              q: "Why not just use Elementor or Divi?",
              a: "Page builders add 300-500KB of unnecessary code, slow down loading, and lock you into their ecosystem. Custom themes give you full control, faster speeds, and no vendor lock-in."
            },
            {
              q: "Will a WordPress rebuild affect my SEO?",
              a: "Not when done correctly. We map every redirect, preserve your content equity, and ensure Google can crawl and index your new site properly."
            },
            {
              q: "Can I update the site myself after launch?",
              area: "Yes. We set up the Block Editor with ACF fields so your team can update text, images, and pages without touching code or relying on a developer."
            }
          ]
        }
      },
      { 
        id: "shopify", 
        title: "Shopify",
        description: "Custom Shopify and Shopify Plus stores built to convert, load fast, and rank. Custom themes, clean checkouts, and integrations wired the right way.",
        serviceSection: {
          tag: "Service 05",
          title: "Shopify",
          headline: "Custom Shopify Stores Built to Convert, Load Fast, and Rank",
          description: "Shopify is the fastest way to launch a serious store and the easiest way to build a mediocre one. We build the other kind: custom themes, clean checkouts, and integrations wired the right way.",
          solvesWhat: "A slow, generic Shopify store leaks revenue at every step. We build custom themes with clean code, optimized checkouts, and product pages built to rank from the first commit.",
          features: [
            "Custom Shopify Themes — Online Store 2.0, no bloat",
            "Checkout Optimization — tuned to remove friction",
            "Product & Collection SEO — structured data built in",
            "Shopify Plus & Headless — Hydrogen, Storefront API"
          ],
          images: [
            "/services/website_1.webp",
            "/services/website_2.webp",
            "/services/website_3.webp",
            "/services/website_4.webp",
            "/services/website_5.webp"
          ],
          image: "/services/website_4.webp",
          layout: "website-scroll"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "Your storefront is your best salesperson, and most Shopify builds hobble it",
            description: "On a Shopify store, every millisecond and every extra click is money. A one-second delay in load time measurably cuts conversion, and every unnecessary field in checkout is another chance for a shopper to abandon a full cart.",
            body: "Shopify wins because it takes payments, security, PCI compliance, hosting, and a checkout that converts off your plate. But that convenience is why so many stores look identical and why so few are built for search. Product and collection pages are where e-commerce SEO is won or lost.",
            highlight: "We treat the storefront as a performance product — custom themes that ship only the code you need, checkout tuned to remove friction, and product pages built to rank from the first commit."
          },
          intro: "Shopify is the fastest way to launch a serious store, but most builds stack a bloated theme on top of dozen apps that inject scripts and kill speed. We build custom themes, clean checkouts, and integrations wired the right way — because we're engineers who do SEO, not marketers who Googled it.",

          included: [
            {
              label: "Custom Shopify Themes",
              detail: "Online Store 2.0 themes with reusable sections, metafields, and lean code your team can edit without a developer."
            },
            {
              label: "Checkout Optimization",
              detail: "Express payments enabled, friction removed, and every step verified with real orders before launch."
            },
            {
              label: "Apps & Integrations",
              detail: "Only apps that earn their weight. ERP, CRM, 3PL, email — wired cleanly without bloat."
            },
            {
              label: "Product & Collection SEO",
              detail: "Structured data, clean URLs, canonical tags, and duplicate-content control baked into the build."
            },
            {
              label: "Shopify Plus & Headless",
              detail: "Hydrogen, Storefront API, and GraphQL for stores that need custom architecture."
            },
            {
              label: "Migrations & Redirections",
              detail: "1:1 redirect mapping so your rankings survive the switch to Shopify."
            }
          ],

          process: [
            {
              step: "01",
              title: "Scope",
              body: "We map your catalog, customers, and constraints. Products, variants, integrations, and where the current store is leaking revenue."
            },
            {
              step: "02",
              title: "Design",
              body: "Conversion-first page design. Product, collection, cart, and checkout designed to sell — not just look pretty."
            },
            {
              step: "03",
              title: "Build",
              body: "Custom theme development with lean code, reusable sections, and integrations wired cleanly. Everything tested in preview."
            },
            {
              step: "04",
              title: "QA & Test",
              body: "Cross-browser testing, speed verification, and real test orders through every payment path before launch."
            },
            {
              step: "05",
              title: "Launch & Monitor",
              body: "Redirects go live, indexation confirmed, and day-one monitoring on speed, orders, and Search Console."
            }
          ],

          faqs: [
            {
              q: "Why Shopify instead of WooCommerce or custom?",
              a: "Shopify handles payments, security, PCI compliance, hosting, and checkout so you don't have to. It scales from first sale to Plus enterprise volume, and its checkout is one of the highest-converting on the market."
            },
            {
              q: "Do I need a custom theme?",
              a: "Premium themes work for simple stores, but they carry code for use cases you'll never touch. Custom themes ship only what you need, load faster, and match your brand exactly."
            },
            {
              q: "Will a Shopify migration hurt my SEO?",
              a: "Not when done correctly. We map every redirect, preserve your content equity, and ensure Google can crawl and index your new store properly."
            },
            {
              q: "Should I go headless with Hydrogen?",
              a: "Headless makes sense for stores needing custom architecture, extreme speed, or unique UX. For most stores, a well-built custom theme on Online Store 2.0 is faster to launch and easier to maintain."
            }
          ]
        }
      },
      { 
        id: "ecommerce-development", 
        title: "E-commerce Development",
        description: "Online stores built to sell, load fast, and rank — from the first commit. Next.js and WooCommerce development with clean code, conversion-tuned checkouts, and SEO foundations baked in.",
        serviceSection: {
          tag: "Service 06",
          title: "E-commerce Development",
          headline: "Online Stores Built to Sell, Load Fast, and Rank",
          description: "Most e-commerce sites are slow, hard to crawl, and leak revenue at checkout because they were assembled from themes and plugins. We build stores as engineering projects — the right platform, a storefront tuned for conversion, and a foundation Google can index cleanly.",
          solvesWhat: "A storefront that takes four seconds to paint loses traffic before the first product appears. A checkout with surprise costs abandons carts. A catalog Google can't crawl never earns organic traffic. We fix all three.",
          features: [
            "Next.js & WooCommerce — clean, fast, scalable",
            "Conversion-Tuned Checkout — friction removed, tracking wired",
            "Product Schema & SEO — built in from the first commit",
            "ERP & Inventory Integration — orders flow without manual work"
          ],
          images: [
            "/services/website_1.webp",
            "/services/website_2.webp",
            "/services/website_3.webp",
            "/services/website_4.webp",
            "/services/website_5.webp"
          ],
          image: "/services/website_4.webp",
          layout: "website-scroll"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "Every second of load time and every extra checkout field is revenue walking out the door",
            description: "An e-commerce site isn't a brochure — it's a machine whose only job is to turn visitors into orders. A storefront that takes four seconds to paint loses traffic before the first product appears. A checkout with surprise shipping or mandatory account signup abandons carts.",
            body: "Fashion brands need fast, image-heavy pages that don't tank Core Web Vitals. Home-goods sellers need variant logic that doesn't spawn duplicate URLs. B2B distributors need customer-specific pricing and quote flows. The platform, data structure, and checkout wiring all decide whether the store scales or collapses.",
            highlight: "We build stores as engineering projects — Next.js for speed, WooCommerce for flexibility, and SEO baked in from the first commit instead of bolted on after launch."
          },
          intro: "Most e-commerce sites are slow, hard to crawl, and leak revenue at checkout. We build stores as engineering projects: the right platform, a storefront tuned for conversion, a checkout that doesn't lose the sale, and a technical foundation Google can index cleanly.",

          included: [
            {
              label: "Next.js Storefronts",
              detail: "Server-side rendered, static-generated, or hybrid — blazing fast product pages that pass Core Web Vitals."
            },
            {
              label: "WooCommerce Development",
              detail: "Custom themes, clean checkout, and plugin architecture that doesn't bloat or break."
            },
            {
              label: "Checkout Optimization",
              detail: "Express payments, guest checkout, and every step verified with real orders before launch."
            },
            {
              label: "Product Schema & SEO",
              detail: "Product, Review, and Offer schema built in. Clean URLs, canonical tags, and crawlable architecture."
            },
            {
              label: "ERP & Inventory Integration",
              detail: "Orders, stock, and customers synced between your store and back-office systems."
            },
            {
              label: "Migration Without Losing Rankings",
              detail: "1:1 redirect mapping, content preservation, and indexation verification on the new platform."
            }
          ],

          process: [
            {
              step: "01",
              title: "Discover",
              body: "We learn your catalog, margins, and operations. SKU count, variant complexity, integrations, and which platform fits your business."
            },
            {
              step: "02",
              title: "Design & Plan",
              body: "Conversion-focused templates, data and URL architecture, and integration plan. The blueprint that keeps the build clean."
            },
            {
              step: "03",
              title: "Build",
              body: "Next.js or WooCommerce, performance from the start, Product schema baked in, and everything tested in staging."
            },
            {
              step: "04",
              title: "QA & Test",
              body: "Checkout, payments, and integrations verified with real test orders. Cross-browser and Core Web Vitals checks."
            },
            {
              step: "05",
              title: "Launch & Monitor",
              body: "Redirects mapped, rankings protected, and day-one monitoring on speed, indexation, and conversions."
            }
          ],

          faqs: [
            {
              q: "Which platform should I use?",
              a: "It depends on your catalog, margins, and integrations. We use Next.js for custom storefronts that need extreme speed, and WooCommerce for content-heavy stores that need flexibility. We model the real long-term cost before recommending."
            },
            {
              q: "Can you migrate my store without losing SEO?",
              a: "Yes. We map every redirect, preserve your content equity, and verify indexation on the new platform. Rankings stay safe."
            },
            {
              q: "Will my store actually be fast?",
              a: "Yes. Core Web Vitals are a build requirement, not a fix. Next.js server-side rendering and optimized assets keep load times under 2 seconds."
            },
            {
              q: "Can you handle B2B and wholesale?",
              a: "Yes. Customer-specific pricing, net terms, quote flows, and bulk ordering — built into WooCommerce or custom Next.js storefronts."
            }
          ]
        }
      },
      { 
        id: "website-migration", 
        title: "Website Migration",
        description: "Replatform, redesign, or rebrand without watching your rankings disappear. Engineering-led migration with full URL mapping, 1:1 redirects, and post-launch monitoring.",
        serviceSection: {
          tag: "Service 07",
          title: "Website Migration",
          headline: "Replatform Without Watching Your Rankings Disappear",
          description: "A migration is the single most dangerous thing you can do to a website that's already working. New platform, new URLs, new templates — and if any one of thousands of moving parts is handled wrong, traffic evaporates in a single deploy.",
          solvesWhat: "Most agencies treat migration as a design project. We treat it as an engineering operation with your search equity as the payload — full URL inventory, 1:1 redirects, and day-one monitoring.",
          features: [
            "Full URL Inventory — every indexed and linked URL mapped",
            "1:1 Redirect Mapping — no blanket redirects to homepage",
            "Staging QA — speed, schema, and crawlability verified",
            "Post-Launch Monitoring — daily tracking through settling period"
          ],
          images: [
            "/services/website_1.webp",
            "/services/website_2.webp",
            "/services/website_3.webp",
            "/services/website_4.webp",
            "/services/website_5.webp"
          ],
          image: "/services/website_4.webp",
          layout: "website-scroll"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "Migrations are where rankings go to die, and it's almost always avoidable",
            description: "Every URL on your current site is a small deposit of trust Google has built over time. A migration moves the whole building, and if you don't carry that trust cleanly, Google treats your new pages as strangers.",
            body: "Broken redirects, dropped content, changed URL patterns, missing metadata, slower templates — each one quietly cuts a wire between your old equity and your new site. The reason migrations fail isn't that they're impossible to do safely. It's that they're run by people focused on how the new site looks, with SEO bolted on at the end.",
            highlight: "Done with discipline, a migration is completely survivable — and often the moment rankings actually improve, because a faster, cleaner site is exactly what Google wants to rank."
          },
          intro: "A migration is the single most dangerous thing you can do to a website that's already working. We treat it as an engineering operation — full URL inventory, 1:1 redirect mapping, staging QA, and post-launch monitoring — so your rankings survive and often improve.",

          included: [
            {
              label: "URL Mapping & Redirects",
              detail: "Full crawl of live site plus historical URLs. 1:1 redirect mapping, 301 permanent redirects, chain and loop elimination."
            },
            {
              label: "Content & Data Migration",
              detail: "Products, pages, media, and metadata migrated and reconciled. Nothing silently dropped."
            },
            {
              label: "Staging & QA",
              detail: "Speed, mobile, schema, and crawlability tested on staging before launch. Redirect dry run end to end."
            },
            {
              label: "Post-Launch Monitoring",
              detail: "Immediate re-crawl, Search Console monitoring, and daily ranking tracking through the settling period."
            },
            {
              label: "Platform Flexibility",
              detail: "WordPress, Shopify, Webflow, Headless CMS, BigCommerce — we migrate onto or off any platform."
            },
            {
              label: "Rollback Planning",
              detail: "Ordered cutover steps with a rollback path. Go-live is boring and controlled, not a gamble."
            }
          ],

          process: [
            {
              step: "01",
              title: "Scope",
              body: "Full URL inventory from crawl, analytics, and Search Console. Equity audit so we know what's on the line."
            },
            {
              step: "02",
              title: "Plan",
              body: "1:1 redirect map, data migration plan, and launch runbook with rollback path. Everything documented before touching production."
            },
            {
              step: "03",
              title: "Build",
              body: "Content and data moved to staging. Template QA, redirect dry run, and reconciliation until everything passes clean."
            },
            {
              step: "04",
              title: "QA & Verify",
              body: "Cross-browser testing, speed checks, and schema verification on staging. Every redirect walked end to end."
            },
            {
              step: "05",
              title: "Launch & Monitor",
              body: "Controlled cutover by the runbook. Immediate re-crawl, daily monitoring, and fast fixes through the settling period."
            }
          ],

          faqs: [
            {
              q: "Will I lose my rankings when I migrate?",
              a: "Not if done right. Ranking loss comes from preventable mistakes — missing redirects, blanket homepage redirects, dropped content. We inventory every URL, map redirects 1:1, QA on staging, and monitor after launch so those failures never happen."
            },
            {
              q: "What's the most common way migrations go wrong?",
              a: "Nobody inventories the old URLs, nobody maps redirects properly, and nobody QAs the staging site against a technical standard. The site launches looking beautiful and starts bleeding traffic."
            },
            {
              q: "How long does a migration take?",
              a: "Depends on site size and complexity. A small site might take 2-4 weeks. A large e-commerce store with thousands of URLs can take 6-8 weeks. We never rush the redirect mapping."
            },
            {
              q: "Can you migrate content and data, not just URLs?",
              a: "Yes. Products, pages, media, metadata, customer accounts, and order history — all migrated and reconciled so nothing goes missing."
            }
          ]
        }
      },
    ],
    layout: "website-scroll",

    pageContent: {
      intro:
        "Most businesses treat their website as a digital brochure. We architect it as a high-performing asset — one that loads instantly, ranks prominently on Google, and effectively converts visitors into qualified leads. Whether you're launching from scratch or revamping an underperforming site, we manage the complete lifecycle from design to deployment.",

      included: [
        {
          label: "Bespoke design, no templates",
          detail:
            "Every page is crafted from the ground up based on your brand identity and business objectives — not adapted from a pre-made theme.",
        },
        {
          label: "Next.js or custom technology stack",
          detail:
            "We build on Next.js for most projects — it provides complete control over performance and functionality. WordPress is available when specifically required.",
        },
        {
          label: "CMS integration",
          detail:
            "You receive a content management system enabling your team to update text, images, and blog posts without touching code.",
        },
        {
          label: "Core Web Vitals optimization",
          detail:
            "We achieve 95+ PageSpeed scores before handoff — not as an afterthought. Performance is embedded into the architecture from inception.",
        },
        {
          label: "Mobile-first responsive layout",
          detail:
            "Engineered for every screen size and validated on real devices — not simply resized in a browser.",
        },
        {
          label: "On-page SEO foundation",
          detail:
            "Meta tags, structured data, sitemap, and robots.txt — all configured correctly from the start so your site is primed to rank.",
        },
      ],

      notIncluded:
        "Domain registration, hosting, and third-party software subscriptions are separate costs. We'll specify exactly what you'll need and where to obtain it.",

      process: [
        {
          step: "01",
          title: "Discovery",
          body: "We map your objectives, target audience, competitive landscape, and essential features before any design work begins. This is the most critical phase.",
        },
        {
          step: "02",
          title: "Wireframes & Design",
          body: "You approve the page structure and visual direction before we write a single line of code. No last-minute surprises.",
        },
        {
          step: "03",
          title: "Development",
          body: "We build in sprints and share progress previews every few days. You're never left waiting on a black box.",
        },
        {
          step: "04",
          title: "Review & Revisions",
          body: "Two rounds of revisions are included. We address feedback methodically — page by page, section by section.",
        },
        {
          step: "05",
          title: "Handoff & Training",
          body: "You receive the live site, CMS access, and a concise walkthrough video so your team knows how to manage it independently.",
        },
      ],

      internalLinks: [
        {
          text: "A well-built site is only valuable if it gets traffic — that's where our",
          linkText: "SEO & Growth",
          href: "/services/seo-growth",
          after: "work typically begins after launch.",
        },
        {
          text: "If your brand identity isn't defined yet, we recommend sorting that first through our",
          linkText: "Branding & Identity",
          href: "/services/branding-identity",
          after:
            "work — otherwise visual decisions get made during development, which slows everything down.",
        },
      ],

      closingCta:
        "If you know what your site needs to do — capture leads, book appointments, showcase a portfolio, or sell products — we can scope it in a single call. Most website projects run 3–6 weeks depending on complexity. Send us a brief and we'll come back with a realistic estimate and fixed price.",

      faqs: [
        {
          q: "Do you build on WordPress?",
          a: "We can, but we don't default to it. Most of our builds use Next.js because it gives us complete control over performance and functionality. If you have an existing WordPress site that just needs updating, we'll work with what you have.",
        },
        {
          q: "What does a website typically cost?",
          a: "Simple informational sites for small businesses start from around $200–$350. E-commerce and feature-heavy sites vary significantly based on scope — we provide a fixed quote after the discovery call, not a range.",
        },
        {
          q: "Who handles hosting?",
          a: "We don't resell hosting. We'll recommend the right provider (usually Vercel or DigitalOcean, depending on your audience) and help you set it up — but the account stays in your name.",
        },
        {
          q: "Can you redesign an existing site without rebuilding from scratch?",
          a: "Sometimes yes, sometimes no — it depends on how the original was built. We'll review your current site before recommending an approach, and we'll be honest if a rebuild is faster and cheaper than a patch job.",
        },
      ],
    },
  },

  {
    id: "web-applications",
    tag: "Service 02",
    title: "Web Applications",
    headline: "Bespoke Web Application Development",
    description:
      "From SaaS platforms to sophisticated business tools — we develop web applications with real-time capabilities, seamless user experience, and scalable architecture that grows with your business.",
    solvesWhat:
      "Off-the-shelf solutions force your team to compromise around their constraints. We engineer bespoke portal solutions built precisely around your requirements — no compromises, no workarounds.",
    features: [
      "Real-time dashboards with live data & instantaneous updates",
      "Secure authentication systems + granular role-based access control",
      "Serverless architecture that handles 10× traffic surges",
      "Comprehensive third-party API integrations with your existing technology stack",
    ],
    images: ["/services/webapp_3.webp"],
    image: "/services/webapp_3.webp",
    subServices: [
      { 
        id: "saas-dashboards", 
        title: "SaaS Dashboards",
        description: "Custom SaaS dashboard development with real-time analytics, role-based access, and interactive data visualizations that turn raw data into actionable insights.",
        serviceSection: {
          tag: "Web 01",
          title: "SaaS Dashboards",
          headline: "Dashboards That Turn Raw Data Into Actionable Decisions",
          description: "A SaaS dashboard isn't just charts on a screen — it's the command center where your team makes decisions. We build custom dashboards with real-time data, interactive filters, and role-based views so every user sees exactly what they need, nothing they don't.",
          solvesWhat: "Your team exports CSVs, patches together spreadsheets, and waits days for reports. The data exists — it's just not organized for decision-making. We build the layer that makes your data useful.",
          features: [
            "Real-time data syncing with live updates",
            "Interactive charts, filters, and drill-downs",
            "Role-based views — different data for different users",
            "Export, reporting, and automated alert systems"
          ],
          images: ["/services/webapp_3.webp"],
          image: "/services/webapp_3.webp",
          layout: "image-grid"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "Your data is useless if the right people can't see it at the right time",
            description: "Most businesses have data scattered across tools — CRM, analytics, billing, support tickets. The problem isn't a lack of data. It's that no one can see the full picture without exporting three reports and spending an afternoon in Excel.",
            body: "A custom dashboard consolidates your data into a single view — real-time, filterable, and role-specific. Your ops team sees operational metrics. Your finance team sees revenue. Your CEO sees everything. The result is faster decisions, fewer surprises, and a team that actually trusts the numbers.",
            highlight: "A dashboard pays for itself the first time it prevents a bad decision that would have cost more than the build."
          },
          intro: "A SaaS dashboard is the interface where your team interacts with data — real-time metrics, KPIs, and operational insights in a single view. We build custom dashboards with live data, interactive filters, and role-based access so every user sees exactly what they need to make decisions.",

          included: [
            {
              label: "Real-Time Data Sync",
              detail: "Live data connections to your databases, APIs, and third-party tools — no manual refresh, no stale numbers."
            },
            {
              label: "Interactive Visualizations",
              detail: "Charts, graphs, tables, and heatmaps that users can filter, sort, and drill into — not static images."
            },
            {
              label: "Role-Based Access Control",
              detail: "Different users see different data. Admins see everything. Managers see their team. Everyone else sees their own metrics."
            },
            {
              label: "Automated Reports & Alerts",
              detail: "Scheduled email reports, threshold alerts, and anomaly detection — so the right person knows when something needs attention."
            },
            {
              label: "Export & Sharing",
              detail: "PDF exports, CSV downloads, and shareable dashboard links — so insights reach people who don't have login access."
            },
            {
              label: "Mobile-Responsive Design",
              detail: "Full functionality on phones and tablets — because decisions don't only happen at a desk."
            }
          ],

          process: [
            {
              step: "01",
              title: "Data Audit",
              body: "We map every data source, every metric that matters, and every user type — so the dashboard shows the right data to the right people."
            },
            {
              step: "02",
              title: "Wireframe & Design",
              body: "Layout, navigation, and visual hierarchy designed around how your team actually makes decisions — not generic chart templates."
            },
            {
              step: "03",
              title: "Build & Integrate",
              body: "Real-time data connections, interactive components, and authentication — built and tested with your actual data."
            },
            {
              step: "04",
              title: "QA & User Testing",
              body: "We test with real users from your team — finding the confusing flows and missing metrics before launch."
            },
            {
              step: "05",
              title: "Deploy & Train",
              body: "Live deployment with user training and documentation — so your team actually uses it on day one."
            }
          ],

          faqs: [
            {
              q: "What data sources can you connect to?",
              a: "Any database, API, or service with a public API — PostgreSQL, MySQL, MongoDB, Stripe, HubSpot, Salesforce, Google Analytics, Airtable, and most platforms with a REST or GraphQL API."
            },
            {
              q: "Can different user roles see different data?",
              a: "Yes. Role-based access control is standard on every dashboard we build. Admins, managers, and end users each get a tailored view."
            },
            {
              q: "How real-time is the data?",
              a: "Depending on the source — real-time (WebSocket or polling every few seconds), near-real-time (every 1–5 minutes), or scheduled (hourly/daily). We match the update frequency to what the business case actually needs."
            },
            {
              q: "Do you build dashboards on top of existing tools?",
              a: "Sometimes. If your data is already in a well-structured tool, we might recommend building on top of it. If the tool is limiting you, we build from scratch. We'll be honest about which approach is right."
            }
          ],

          industries: [
            {
              id: "saas-dash",
              title: "SaaS Companies",
              icon: "Building2",
              headline: "Give Every User the Metrics They Need — In Real Time",
              description: "SaaS companies need dashboards for admins, customers, and investors — each seeing different metrics at different granularity. A custom dashboard handles all three from one codebase.",
              challenges: [
                "Multiple user types needing different metric views",
                "Real-time data that updates without page refresh",
                "Usage analytics that inform product decisions",
                "Investor-ready reporting that looks professional"
              ],
              approach: "We build SaaS dashboards with role-based views — admin panels with full control, customer-facing dashboards with their usage data, and investor reports that update automatically."
            },
            {
              id: "ecommerce-dash",
              title: "E-commerce",
              icon: "Building2",
              headline: "See Revenue, Inventory, and Campaign Performance in One Place",
              description: "E-commerce owners juggle Shopify, Google Analytics, ad platforms, and inventory tools. A custom dashboard pulls everything into one view — real-time revenue, stock levels, and campaign ROI.",
              challenges: [
                "Data scattered across Shopify, ads, and analytics",
                "Inventory alerts that need manual checking",
                "Campaign performance that requires multiple logins",
                "Revenue reporting that takes hours to compile"
              ],
              approach: "We build e-commerce dashboards that consolidate revenue, inventory, and campaign data — with real-time alerts for stockouts and automated daily revenue reports."
            },
            {
              id: "healthcare-dash",
              title: "Healthcare",
              icon: "Building2",
              headline: "Patient Flow and Operational Metrics at a Glance",
              description: "Healthcare operations need real-time visibility into patient flow, resource utilization, and staff performance — data that's currently locked in separate systems.",
              challenges: [
                "Patient flow data across multiple departments",
                "Resource utilization that needs real-time visibility",
                "Staff performance metrics scattered across tools",
                "HIPAA compliance for data visualization"
              ],
              approach: "We build HIPAA-compliant healthcare dashboards that visualize patient flow, resource utilization, and operational metrics — giving administrators the real-time view they need."
            },
            {
              id: "finance-dash",
              title: "Finance & Fintech",
              icon: "Building2",
              headline: "Financial Metrics That Update Without a Spreadsheet",
              description: "Financial teams need real-time visibility into cash flow, P&L, and portfolio performance — but most of that data is locked in accounting tools and requires manual compilation.",
              challenges: [
                "Cash flow data across multiple accounts",
                "P&L reporting that requires manual compilation",
                "Portfolio performance needing real-time updates",
                "Regulatory reporting that demands accuracy"
              ],
              approach: "We build financial dashboards that consolidate cash flow, P&L, and portfolio data — with real-time updates and automated regulatory reporting."
            },
            {
              id: "marketing-dash",
              title: "Marketing Agencies",
              icon: "Building2",
              headline: "Client Reporting That Runs Itself",
              description: "Agencies spend hours compiling client reports from multiple ad platforms. A custom dashboard automates that — pulling campaign data, calculating ROI, and generating client-ready reports.",
              challenges: [
                "Reporting across Google, Meta, TikTok, and LinkedIn",
                "Client-specific views with different KPIs",
                "Automated report generation that saves hours weekly",
                "White-labeled dashboards that look like the agency built them"
              ],
              approach: "We build agency dashboards that pull campaign data from every ad platform, calculate client-specific ROI, and generate automated reports — saving hours of manual work every week."
            },
            {
              id: "logistics-dash",
              title: "Logistics & Operations",
              icon: "Building2",
              headline: "Track Shipments, Inventory, and Fleet in Real Time",
              description: "Logistics operations need real-time visibility into shipments, inventory levels, and fleet status — data that's spread across tracking systems, warehouses, and carrier APIs.",
              challenges: [
                "Shipment tracking across multiple carriers",
                "Inventory levels across warehouses",
                "Fleet status and route optimization data",
                "Exception alerts for delays and disruptions"
              ],
              approach: "We build logistics dashboards that consolidate tracking, inventory, and fleet data — with real-time alerts for delays and automated exception reporting."
            }
          ]
        }
      },
      { 
        id: "client-portals", 
        title: "Client Portals",
        description: "Secure client portal development with role-based access, document sharing, real-time messaging, and project tracking — giving your clients a branded space to interact with your business.",
        serviceSection: {
          tag: "Web 02",
          title: "Client Portals",
          headline: "Branded Client Portals That Replace Email Chains and Shared Drives",
          description: "Your clients shouldn't have to dig through email threads to find a document, check project status, or submit a request. We build secure client portals — branded, role-based, and designed around how your clients actually interact with your business.",
          solvesWhat: "Email is not a project management tool. Shared drives become graveyards. Your clients deserve a single place to see progress, download files, submit requests, and communicate — without the chaos.",
          features: [
            "Branded portal with your logo, colors, and domain",
            "Role-based access — clients see only their data",
            "Document upload, download, and e-signature flows",
            "Real-time project tracking and status updates"
          ],
          images: ["/services/webapp_1.webp"],
          image: "/services/webapp_1.webp",
          layout: "image-grid"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "Your clients shouldn't have to email you to find out what's happening",
            description: "When clients can't see project status, download documents, or submit requests without emailing you, both sides lose time. Your team answers the same questions repeatedly. Your clients feel uninformed.",
            body: "A client portal gives them self-service access to everything they need — project timelines, documents, invoices, and communication — in a branded space that looks like an extension of your business, not a third-party tool. The result: fewer emails, happier clients, and a team that focuses on delivery instead of updates.",
            highlight: "A client portal isn't just a convenience — it's a competitive advantage. Clients choose businesses that make them feel informed and in control."
          },
          intro: "A client portal is a secure, branded web application where your clients interact with your business — viewing projects, downloading documents, submitting requests, and communicating with your team. We build custom portals that replace email chaos with organized self-service.",

          included: [
            {
              label: "Branded Interface",
              detail: "Your logo, your colors, your domain — the portal looks like your business, not someone else's tool."
            },
            {
              label: "Secure Authentication",
              detail: "Login, password reset, two-factor authentication, and session management — built to security standards."
            },
            {
              label: "Role-Based Access",
              detail: "Each client sees only their data. Different permission levels for different users within the same client organization."
            },
            {
              label: "Document Management",
              detail: "Upload, download, preview, and organize files — with version history and e-signature integration where needed."
            },
            {
              label: "Project Tracking",
              detail: "Real-time status updates, task lists, and timeline views — so clients see progress without asking."
            },
            {
              label: "Messaging & Notifications",
              detail: "In-app messaging, email notifications, and activity feeds — keeping communication organized and searchable."
            }
          ],

          process: [
            {
              step: "01",
              title: "User Research",
              body: "We interview your team and, if possible, your clients — understanding what they need to see, do, and access in the portal."
            },
            {
              step: "02",
              title: "Information Architecture",
              body: "Navigation, data structure, and permission levels mapped — so every user type finds what they need without confusion."
            },
            {
              step: "03",
              title: "Design & Prototype",
              detail: "Branded interface designed around your client's workflow — not generic portal templates."
            },
            {
              step: "04",
              title: "Build & Integrate",
              body: "Authentication, document management, project tracking, and messaging — built and tested with your actual client data."
            },
            {
              step: "05",
              title: "Launch & Onboard",
              body: "We help you migrate existing clients into the portal and train your team on how to manage it."
            }
          ],

          faqs: [
            {
              q: "Can we white-label the portal with our branding?",
              a: "Yes. Every portal is built with your logo, colors, and custom domain. Your clients will think you built it yourself."
            },
            {
              q: "How do clients get access?",
              a: "You invite them via email. They create an account, set their password, and land in their personalized dashboard. Bulk invitations are supported for large client bases."
            },
            {
              q: "Can different clients see different things?",
              a: "Yes. Role-based access control ensures each client sees only their own data. Within a client organization, different users can have different permission levels."
            },
            {
              q: "What if we already use a tool like Clientify or Dubsado?",
              a: "If your current tool works, we won't replace it unnecessarily. But if it's limiting your workflow, charging per seat, or missing features you need — a custom portal gives you full control."
            }
          ],

          industries: [
            {
              id: "agencies-portal",
              title: "Agencies & Consultancies",
              icon: "Building2",
              headline: "Replace Email Updates With a Self-Service Client Hub",
              description: "Agencies send the same project updates, share the same documents, and answer the same status questions daily. A client portal automates the routine so your team focuses on strategy.",
              challenges: [
                "Clients emailing for status updates constantly",
                "Documents scattered across email and shared drives",
                "Multiple stakeholders needing different project views",
                "Onboarding new clients with repetitive setup"
              ],
              approach: "We build agency client portals where clients see project timelines, download deliverables, submit feedback, and track invoices — reducing status emails by 80%."
            },
            {
              id: "healthcare-portal",
              title: "Healthcare",
              icon: "Building2",
              headline: "Patient Portals That Reduce Admin Calls",
              description: "Healthcare providers get calls for appointment scheduling, test results, and billing questions. A patient portal handles the routine — reducing admin burden and improving patient experience.",
              challenges: [
                "Patients calling for test results and appointment times",
                "Secure document sharing for medical records",
                "HIPAA compliance for patient data access",
                "Billing and payment integration"
              ],
              approach: "We build HIPAA-compliant patient portals where patients view test results, schedule appointments, message providers, and pay bills — reducing phone calls and improving satisfaction."
            },
            {
              id: "finance-portal",
              title: "Finance & Accounting",
              icon: "Building2",
              headline: "Give Clients Real-Time Access to Their Financial Data",
              description: "Accounting firms and financial advisors spend hours compiling reports for clients. A portal gives clients self-service access to their financial data — real-time, always current.",
              challenges: [
                "Clients requesting reports that could be self-service",
                "Secure sharing of sensitive financial documents",
                "Multiple client accounts needing different views",
                "Integration with accounting software"
              ],
              approach: "We build financial client portals where clients view real-time reports, download statements, submit documents, and track their financial health — without emailing for every update."
            },
            {
              id: "legal-portal",
              title: "Legal",
              icon: "Building2",
              headline: "Case Portals That Keep Clients Informed and Documents Organized",
              description: "Law firms manage cases with documents, deadlines, and communications scattered across email and file systems. A client portal organizes everything in one secure place.",
              challenges: [
                "Case documents needing secure, organized access",
                "Clients asking for case status updates",
                "Deadline tracking that needs client visibility",
                "Conflict checks and intake documentation"
              ],
              approach: "We build legal client portals where clients view case status, access documents, track deadlines, and communicate with their attorney — organized and secure."
            },
            {
              id: "realestate-portal",
              title: "Real Estate",
              icon: "Building2",
              headline: "Property Portals for Buyers, Sellers, and Investors",
              description: "Real estate transactions involve multiple parties — buyers, sellers, agents, lenders — all needing different information at different stages. A portal keeps everyone aligned.",
              challenges: [
                "Multiple parties needing different transaction views",
                "Document sharing for contracts and disclosures",
                "Timeline tracking for closings",
                "Communication between buyers, sellers, and agents"
              ],
              approach: "We build real estate portals where buyers track their purchase timeline, sellers see listing performance, and agents manage transactions — all in one place."
            },
            {
              id: "saas-portal",
              title: "SaaS & Software",
              icon: "Building2",
              headline: "Customer Portals That Reduce Support Tickets",
              description: "SaaS companies handle support requests, onboarding questions, and account management through email. A customer portal deflects routine tickets with self-service knowledge bases and account management.",
              challenges: [
                "Support tickets that could be self-service",
                "Account management requiring manual intervention",
                "Onboarding flows that need human guidance",
                "Feature requests and feedback collection"
              ],
              approach: "We build SaaS customer portals with knowledge bases, account management, and feedback systems — reducing support volume while improving customer satisfaction."
            }
          ]
        }
      },
      { 
        id: "booking-systems", 
        title: "Booking Systems",
        description: "Custom online booking and appointment scheduling systems with real-time availability, automated reminders, payment integration, and multi-location support.",
        serviceSection: {
          tag: "Web 03",
          title: "Booking Systems",
          headline: "Online Booking Systems That Fill Your Calendar Without the Back-and-Forth",
          description: "Every booking you handle via phone, email, or DM is time your team spends scheduling instead of serving. We build custom booking systems with real-time availability, automated confirmations, and payment integration — so clients book themselves and your team focuses on delivery.",
          solvesWhat: "The back-and-forth of scheduling eats hours every week. Double-bookings happen. No-shows cost revenue. A custom booking system eliminates the friction for both your team and your clients.",
          features: [
            "Real-time availability with calendar sync",
            "Automated confirmations, reminders, and follow-ups",
            "Payment collection at booking or deposit",
            "Multi-provider and multi-location scheduling"
          ],
          images: ["/services/webapp_2.webp"],
          image: "/services/webapp_2.webp",
          layout: "image-grid"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "Every manual booking costs you time, money, and credibility",
            description: "When clients have to email or call to book, they don't — they go to someone who lets them book online. And every minute your team spends scheduling is a minute they're not serving clients.",
            body: "A custom booking system handles the entire scheduling workflow: shows real-time availability, prevents double-bookings, sends confirmations and reminders, collects payments, and handles cancellations. The result is a filled calendar, fewer no-shows, and zero time spent on scheduling logistics.",
            highlight: "The best booking system is the one where your team never has to check a calendar again — it's already handled."
          },
          intro: "A booking system is a web application that lets clients self-schedule appointments, classes, or services — with real-time availability, automated confirmations, and payment integration. We build custom booking systems that eliminate scheduling friction and fill your calendar.",

          included: [
            {
              label: "Real-Time Availability",
              detail: "Calendar sync with Google Calendar, Outlook, or your internal system — clients see real-time slots, no double-bookings."
            },
            {
              label: "Automated Reminders",
              detail: "Email and SMS reminders before appointments — reducing no-shows by 30–50% on average."
            },
            {
              label: "Payment Integration",
              detail: "Collect full payment, deposits, or cancellation fees at booking — integrated with Stripe, PayPal, or your payment processor."
            },
            {
              label: "Multi-Provider Scheduling",
              detail: "Multiple staff members with individual availability, skills, and locations — clients book the right person at the right place."
            },
            {
              label: "Recurring & Package Bookings",
              detail: "Weekly classes, monthly subscriptions, or multi-session packages — with automated scheduling and billing."
            },
            {
              label: "Cancellation & Rescheduling",
              detail: "Self-service cancellation and rescheduling with policy enforcement — reducing admin work and no-show losses."
            }
          ],

          process: [
            {
              step: "01",
              title: "Workflow Mapping",
              body: "We map your current scheduling process — who books, what resources are involved, what confirmation looks like, and what happens on cancellation."
            },
            {
              step: "02",
              title: "System Design",
              body: "Calendar logic, availability rules, notification triggers, and payment flow — all designed before development begins."
            },
            {
              step: "03",
              title: "Build & Integrate",
              body: "Booking interface, calendar sync, payment processing, and notification system — built and tested with real scheduling scenarios."
            },
            {
              step: "04",
              title: "QA & Load Testing",
              body: "We test with concurrent bookings, edge cases, and cancellation scenarios — ensuring the system handles real volume."
            },
            {
              step: "05",
              title: "Launch & Migrate",
              body: "Existing appointments migrated, team trained, and clients guided through the new booking flow."
            }
          ],

          faqs: [
            {
              q: "Can we sync with our existing calendar?",
              a: "Yes. We integrate with Google Calendar, Outlook, Apple Calendar, and most calendar APIs — so availability stays in sync across all your tools."
            },
            {
              q: "Can different providers have different availability?",
              a: "Yes. Each provider sets their own schedule, skills, and locations. Clients see only the available slots for the specific provider they're booking."
            },
            {
              q: "Do you handle class bookings or only individual appointments?",
              a: "Both. We build systems for individual appointments, group classes, workshops, and multi-session packages — with capacity limits and waitlists."
            },
            {
              q: "What payment processors do you support?",
              a: "Stripe, PayPal, Square, and most processors with a public API. We integrate the one you already use — no need to switch."
            }
          ],

          industries: [
            {
              id: "healthcare-book",
              title: "Healthcare & Clinics",
              icon: "Building2",
              headline: "Reduce No-Shows and Fill Every Appointment Slot",
              description: "Healthcare clinics lose revenue to no-shows and spend hours on phone scheduling. A booking system with automated reminders and waitlist management fixes both.",
              challenges: [
                "No-show rates costing 10–20% of revenue",
                "Phone scheduling consuming front desk time",
                "Multiple providers with different availability",
                "Insurance and intake form integration"
              ],
              approach: "We build healthcare booking systems with automated reminders, waitlist management, and intake form integration — reducing no-shows and freeing front desk staff."
            },
            {
              id: "hospitality-book",
              title: "Hospitality & Restaurants",
              icon: "Building2",
              headline: "Let Guests Book Tables and Rooms Without Calling",
              description: "Restaurants and hotels handle reservations via phone, DM, and third-party platforms — each adding commission and complexity. A direct booking system keeps the relationship and the margin.",
              challenges: [
                "Third-party booking platforms taking 15–30% commission",
                "Phone reservations consuming staff time",
                "Table management and capacity optimization",
                "Special requests and dietary requirements"
              ],
              approach: "We build direct booking systems for restaurants and hotels — handling reservations, table management, and special requests without third-party commissions."
            },
            {
              id: "fitness-book",
              title: "Fitness & Wellness",
              icon: "Building2",
              headline: "Book Classes, Sessions, and Memberships in One System",
              description: "Gyms and studios manage class bookings, personal training sessions, and memberships through separate tools. A unified booking system handles all three.",
              challenges: [
                "Class bookings with capacity limits and waitlists",
                "Personal training sessions with different durations",
                "Membership management and recurring billing",
                "Instructor availability across multiple locations"
              ],
              approach: "We build fitness booking systems that handle classes, sessions, and memberships — with capacity management, waitlists, and automated billing."
            },
            {
              id: "professional-book",
              title: "Professional Services",
              icon: "Building2",
              headline: "Turn Consultation Requests Into Confirmed Appointments",
              description: "Law firms, accountants, and consultants spend hours scheduling consultations. A booking system lets prospects book directly — qualified, confirmed, and ready.",
              challenges: [
                "Consultation scheduling consuming billable hours",
                "Qualification questions that need answering before booking",
                "Multiple service types with different durations and prices",
                "Integration with CRM and intake systems"
              ],
              approach: "We build professional service booking systems with qualification forms, service-specific scheduling, and CRM integration — turning inquiries into confirmed appointments."
            },
            {
              id: "education-book",
              title: "Education & Tutoring",
              icon: "Building2",
              headline: "Schedule Tutoring, Classes, and Office Hours Automatically",
              description: "Educators and tutoring centers manage schedules through email and spreadsheets. A booking system lets students book sessions based on tutor availability and subject.",
              challenges: [
                "Tutor availability across multiple subjects",
                "Session booking with different durations and prices",
                "Recurring weekly sessions and package deals",
                "Integration with learning management systems"
              ],
              approach: "We build education booking systems where students book by subject, tutor, and time slot — with package deals and recurring session support."
            },
            {
              id: "realestate-book",
              title: "Real Estate",
              icon: "Building2",
              headline: "Let Buyers Book Property Viewings Without the Phone Tag",
              description: "Real estate agents spend hours coordinating property viewings. A booking system lets buyers schedule viewings directly — with agent availability and property details.",
              challenges: [
                "Viewing scheduling across multiple properties and agents",
                "Buyer qualification before showing",
                "Calendar sync for agents in the field",
                "Cancellation and rescheduling management"
              ],
              approach: "We build real estate viewing booking systems where buyers schedule directly — with agent availability, qualification forms, and automated confirmations."
            }
          ]
        }
      },
      { 
        id: "api-development", 
        title: "API Development",
        description: "Custom REST and GraphQL API development with authentication, rate limiting, documentation, and third-party integrations — the backend backbone your web application needs.",
        serviceSection: {
          tag: "Web 04",
          title: "API Development",
          headline: "Backend APIs That Connect Everything and Scale With Your Product",
          description: "A web application without a solid API is a frontend without a backbone. We build RESTful and GraphQL APIs that handle authentication, data processing, third-party integrations, and real-time communication — engineered for reliability, security, and scale.",
          solvesWhat: "Your frontend needs data. Your mobile app needs data. Your integrations need data. Without a well-built API, every connection is a hack. We build the backend layer that makes everything work together.",
          features: [
            "RESTful and GraphQL API architecture",
            "JWT authentication, rate limiting, and security",
            "Third-party API integrations (Stripe, CRM, ERP)",
            "Auto-generated documentation and SDKs"
          ],
          images: ["/services/webapp_4.webp"],
          image: "/services/webapp_4.webp",
          layout: "image-grid"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "The API is the foundation — if it's wrong, everything built on top of it breaks",
            description: "A poorly designed API creates cascading problems: slow responses, security vulnerabilities, broken integrations, and a codebase that becomes impossible to maintain. The frontend can look perfect, but if the API can't handle real traffic or secure real data, nothing works.",
            body: "API design is architecture, not plumbing. The data models, endpoints, authentication strategy, and error handling need to be right from the start — because everything else depends on them. We build APIs that are documented, tested, secure, and designed to scale without being rewritten.",
            highlight: "A well-built API is invisible — it just works. A poorly built one is the first thing your users notice when things go wrong."
          },
          intro: "An API is the backend layer that connects your frontend, mobile app, and third-party integrations. We build RESTful and GraphQL APIs with authentication, security, rate limiting, and documentation — engineered as the reliable foundation your product depends on.",

          included: [
            {
              label: "RESTful & GraphQL APIs",
              detail: "We build the architecture that fits your use case — REST for straightforward CRUD, GraphQL for complex data relationships and client-driven queries."
            },
            {
              label: "Authentication & Security",
              detail: "JWT, OAuth 2.0, API keys, rate limiting, input validation, and CORS — built to security standards from day one."
            },
            {
              label: "Third-Party Integrations",
              detail: "Stripe, PayPal, Twilio, SendGrid, HubSpot, Salesforce, and any API your product needs — with error handling and retry logic."
            },
            {
              label: "Real-Time Endpoints",
              detail: "WebSocket and Server-Sent Events for live data — chat, notifications, live dashboards, and collaborative features."
            },
            {
              label: "Auto-Generated Documentation",
              detail: "Interactive API docs with Swagger or Postman collections — so your frontend team and partners know exactly how to use every endpoint."
            },
            {
              label: "Testing & Monitoring",
              detail: "Automated test suites, health checks, and uptime monitoring — catching issues before your users do."
            }
          ],

          process: [
            {
              step: "01",
              title: "Data Modeling",
              body: "We define your data models, relationships, and access patterns — so the API is built on a solid foundation, not bolted together later."
            },
            {
              step: "02",
              title: "Architecture & Design",
              body: "Endpoint structure, authentication strategy, error handling, and versioning — all designed before code is written."
            },
            {
              step: "03",
              title: "Build & Integrate",
              body: "The API is built with your frontend, third-party services, and real use cases in mind — not in isolation."
            },
            {
              step: "04",
              title: "Security Audit",
              body: "Authentication flows, input validation, rate limiting, and injection protection — tested before launch."
            },
            {
              step: "05",
              title: "Document & Deploy",
              body: "Interactive docs, deployment to your infrastructure, and handoff to your team with full documentation."
            }
          ],

          faqs: [
            {
              q: "REST or GraphQL — which should we use?",
              a: "REST for straightforward CRUD with well-defined resources. GraphQL when clients need flexible queries, you have complex relationships, or multiple frontend types (web, mobile) consume different data subsets. We help you choose based on your actual needs."
            },
            {
              q: "How do you handle API versioning?",
              a: "URL-based versioning (e.g., /v1/, /v2/) for breaking changes, header-based for minor updates. We plan versioning from the start so updates don't break existing clients."
            },
            {
              q: "Can you build an API on top of an existing database?",
              yes: "Yes. We design APIs around your existing data models — or refactor them if the current schema is limiting. We'll be honest about what's faster."
            },
            {
              q: "Do you provide API documentation?",
              a: "Yes. Every API project includes interactive Swagger/OpenAPI documentation and a Postman collection — so your team and partners can start using it immediately."
            }
          ],

          industries: [
            {
              id: "saas-api",
              title: "SaaS & Software",
              icon: "Building2",
              headline: "Build the Backend Your Product Architecture Demands",
              description: "SaaS products need APIs that handle authentication, multi-tenancy, billing integration, and real-time features — all while staying fast and secure as you scale.",
              challenges: [
                "Multi-tenant data isolation and security",
                "Real-time features that need WebSocket infrastructure",
                "Third-party integrations that need reliable error handling",
                "API performance under growing customer load"
              ],
              approach: "We build SaaS backend APIs with multi-tenant architecture, real-time endpoints, and third-party integrations — designed to scale from 10 to 10,000 customers."
            },
            {
              id: "fintech-api",
              title: "Fintech",
              icon: "Building2",
              headline: "Financial APIs Where Security and Accuracy Are Non-Negotiable",
              description: "Fintech APIs handle sensitive financial data — payments, account information, transactions. Security, compliance, and accuracy are not optional features.",
              challenges: [
                "PCI compliance for payment data",
                "Transaction accuracy with zero tolerance for errors",
                "Real-time fraud detection and rate limiting",
                "Integration with banking and payment APIs"
              ],
              approach: "We build fintech APIs with PCI-compliant security, transaction accuracy validation, and integration with banking APIs — engineered for the standards finance demands."
            },
            {
              id: "healthcare-api",
              title: "Healthcare",
              icon: "Building2",
              headline: "HIPAA-Compliant APIs for Health Data Exchange",
              description: "Healthcare APIs exchange sensitive patient data — requiring HIPAA compliance, audit trails, and encryption at every layer.",
              challenges: [
                "HIPAA compliance for patient data exchange",
                "Integration with EHR systems and health databases",
                "Audit trails for every data access",
                "Real-time data for patient monitoring"
              ],
              approach: "We build HIPAA-compliant healthcare APIs with encrypted data exchange, audit trails, and EHR integration — meeting healthcare standards from day one."
            },
            {
              id: "ecommerce-api",
              title: "E-commerce",
              icon: "Building2",
              headline: "APIs That Connect Your Store to Everything",
              description: "E-commerce platforms need APIs that connect storefronts, payment processors, inventory systems, and shipping providers — all in real time.",
              challenges: [
                "Real-time inventory sync across channels",
                "Payment processing with error handling",
                "Shipping integration with rate calculation",
                "Marketplace API integration (Amazon, Etsy)"
              ],
              approach: "We build e-commerce APIs that connect your storefront to payment processors, inventory systems, and shipping providers — real-time, reliable, and scalable."
            },
            {
              id: "logistics-api",
              title: "Logistics",
              icon: "Building2",
              headline: "Real-Time APIs for Tracking, Routing, and Operations",
              description: "Logistics APIs process real-time data — tracking, routing, inventory, and carrier integration — requiring low latency and high reliability.",
              challenges: [
                "Real-time tracking data processing",
                "Route optimization with multiple constraints",
                "Multi-carrier API integration",
                "High-volume data processing"
              ],
              approach: "We build logistics APIs that process tracking data, optimize routes, and integrate with carriers — low-latency, high-reliability, and built for real-time operations."
            },
            {
              id: "startup-api",
              title: "Startups & MVPs",
              icon: "Building2",
              headline: "APIs That Scale From Prototype to Production",
              description: "Startups need APIs that work fast for the MVP but don't need to be rewritten when you hit product-market fit. We build for both stages.",
              challenges: [
                "Speed to market without sacrificing architecture",
                "API design that supports pivots and new features",
                "Third-party integrations that can be swapped",
                "Cost-efficient infrastructure at early stage"
              ],
              approach: "We build startup APIs that launch fast and scale cleanly — with modular architecture that supports pivots and integrations that can be swapped as you grow."
            }
          ]
        }
      },
      { 
        id: "saas-mvp-development", 
        title: "SaaS & MVP Development",
        description: "Full-stack SaaS MVP development — from idea to launch in 6–10 weeks. Custom architecture, authentication, billing, and deployment ready for your first paying customers.",
        serviceSection: {
          tag: "Web 05",
          title: "SaaS & MVP Development",
          headline: "From Idea to Launch-Ready SaaS in 6–10 Weeks",
          description: "You don't need a year and a VC budget to launch a SaaS product. We build MVPs that are lean enough to validate fast and solid enough to scale — with authentication, billing, multi-tenancy, and deployment included. Not a no-code prototype. Real software you can build a business on.",
          solvesWhat: "You have an idea and maybe a design. What you don't have is the engineering team to turn it into a product people pay for. We handle the full build — architecture, frontend, backend, billing, and deployment — so you can focus on customers.",
          features: [
            "Full-stack development — frontend, backend, database, hosting",
            "Authentication, multi-tenancy, and role-based access",
            "Stripe billing integration — subscriptions, trials, upgrades",
            "Launch-ready in 6–10 weeks with real deployment"
          ],
          images: ["/services/webapp_3.webp"],
          image: "/services/webapp_3.webp",
          layout: "image-grid"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "The gap between a SaaS idea and a SaaS product is 10,000 lines of code — and most founders don't have an engineering team",
            description: "Everyone has a SaaS idea. Very few have the technical team to build it. No-code tools get you a prototype. Freelancers get you a codebase that breaks. What you need is a small, senior team that can ship the product your customers will pay for.",
            body: "An MVP isn't a toy — it's the minimum product that solves the problem well enough for someone to pay for it. That means real authentication, real billing, real data security, and a deployment that doesn't fall over when you get your first 100 users. We build that — not a prototype, not a demo — the product itself.",
            highlight: "The goal isn't to build everything. It's to build the right things — and build them well enough that you're not rewriting the codebase six months later."
          },
          intro: "SaaS MVP development is building the minimum product that solves a real problem well enough for customers to pay — with real authentication, billing, multi-tenancy, and deployment. We take founders from idea to launch in 6–10 weeks with software they can build a business on.",

          included: [
            {
              label: "Product Architecture",
              detail: "Data models, tech stack selection, and system architecture — designed for the product you're building, not a generic template."
            },
            {
              label: "Full-Stack Development",
              detail: "Frontend, backend, database, and hosting — one team, one vision, no gaps between layers."
            },
            {
              label: "Authentication & Multi-Tenancy",
              detail: "User registration, login, password reset, roles, and tenant isolation — built properly from day one."
            },
            {
              label: "Billing Integration",
              detail: "Stripe or LemonSqueezy integration — subscriptions, trials, upgrades, downgrades, and cancellation flows."
            },
            {
              label: "Admin Panel",
              detail: "Internal dashboard for user management, analytics, and support — so you can run the business without touching the database."
            },
            {
              label: "Deployment & Infrastructure",
              detail: "Deployed to Vercel, Railway, or AWS with CI/CD — live and accessible to your first customers on launch day."
            }
          ],

          process: [
            {
              step: "01",
              title: "Discovery & Scoping",
              body: "We define the MVP scope — core features, user types, and success criteria. What's in, what's out, and what comes after launch."
            },
            {
              step: "02",
              title: "Architecture & Design",
              body: "Tech stack selection, data modeling, API design, and UI/UX — all decided before a line of code is written."
            },
            {
              step: "03",
              title: "Sprint Development",
              body: "2-week sprints with working demos at the end of each — so you see progress and can adjust direction as you learn."
            },
            {
              step: "04",
              title: "Beta Testing",
              body: "Real users testing the product with real data — finding bugs and UX issues before the public launch."
            },
            {
              step: "05",
              title: "Launch & Support",
              body: "Production deployment, monitoring, and 30 days of post-launch support — so you're not alone when the first users arrive."
            }
          ],

          faqs: [
            {
              q: "How long does it take to build a SaaS MVP?",
              a: "Typically 6–10 weeks from discovery to launch, depending on complexity. A focused MVP with one user type and core features takes 6 weeks. Multiple user types with integrations takes 8–10."
            },
            {
              q: "What tech stack do you use?",
              a: "We choose based on the product — Next.js or React for frontend, Node.js or Python for backend, PostgreSQL or MongoDB for database, and Vercel, Railway, or AWS for hosting. No one-size-fits-all."
            },
            {
              q: "Do you handle billing integration?",
              a: "Yes. Stripe or LemonSqueezy integration is standard — subscriptions, trials, upgrades, and cancellation flows. We set up the billing logic so you can start charging on day one."
            },
            {
              q: "What happens after the MVP launches?",
              a: "We offer post-launch maintenance and feature development. Many founders start with the MVP and add features as they learn from customers. We build the foundation so the second phase doesn't require a rewrite."
            }
          ],

          industries: [
            {
              id: "saas-mvp",
              title: "SaaS Startups",
              icon: "Building2",
              headline: "Launch Your SaaS Before Your Competitor Does",
              description: "SaaS founders need to validate fast. A custom MVP gets you to market with a product that's real enough to charge for — not a no-code prototype that falls apart under real usage.",
              challenges: [
                "Speed to market with limited technical resources",
                "Building for scale without over-engineering",
                "Stripe billing that handles subscriptions cleanly",
                "Architecture that supports feature additions"
              ],
              approach: "We build SaaS MVPs in 6–10 weeks — full-stack, billing-integrated, and deployment-ready — so you can validate with real customers and real revenue."
            },
            {
              id: "fintech-mvp",
              title: "Fintech",
              icon: "Building2",
              headline: "Fintech MVPs With Security Built In From Day One",
              description: "Fintech MVPs need security and compliance baked in from the start — not bolted on later. We build with PCI awareness, encryption, and audit trails from the first commit.",
              challenges: [
                "Security requirements that can't be deferred",
                "Payment integration that needs to work perfectly",
                "Regulatory awareness from the first sprint",
                "User trust that depends on data protection"
              ],
              approach: "We build fintech MVPs with security-first architecture — encryption, audit trails, and payment integration — so you're not retrofitting compliance after launch."
            },
            {
              id: "health-mvp",
              title: "Healthcare",
              icon: "Building2",
              headline: "Health Tech MVPs That Respect Patient Data",
              description: "Health tech startups need MVPs that handle patient data with HIPAA awareness from the start — not a generic SaaS template with security as an afterthought.",
              challenges: [
                "HIPAA awareness even at MVP stage",
                "Patient data handling that requires encryption",
                "Integration with health systems and wearables",
                "Clinical workflows that need user research"
              ],
              approach: "We build health tech MVPs with HIPAA-aware architecture, encrypted data handling, and integration with health APIs — launching with patient data protection from day one."
            },
            {
              id: "edtech-mvp",
              title: "EdTech",
              icon: "Building2",
              headline: "EdTech MVPs That Deliver Learning, Not Just Content",
              description: "EdTech products need more than content delivery — they need progress tracking, assessments, and engagement features that make learning stick.",
              challenges: [
                "Learning management features beyond content hosting",
                "Student engagement and progress tracking",
                "Integration with existing education tools",
                "Multi-role access for students, teachers, and admins"
              ],
              approach: "We build EdTech MVPs with learning management, progress tracking, and multi-role access — launching a product that delivers education, not just information."
            },
            {
              id: "marketplace-mvp",
              title: "Marketplaces",
              icon: "Building2",
              headline: "Two-Sided Marketplace MVPs With Payment Splitting",
              description: "Marketplace MVPs need two user types, payment splitting, and trust features — significantly more complex than a single-tenant SaaS. We build the architecture that handles both sides.",
              challenges: [
                "Two-sided user experience (buyers and sellers)",
                "Payment splitting and escrow",
                "Trust and review systems",
                "Search and matching logic"
              ],
              approach: "We build marketplace MVPs with dual user types, payment splitting, and trust systems — handling the complexity that single-tenant SaaS doesn't have."
            },
            {
              id: "agency-mvp",
              title: "Agencies Building Products",
              icon: "Building2",
              headline: "Turn Your Service Expertise Into a Product",
              description: "Agencies have domain expertise that could be productized — but building software isn't their core competency. We build the product so you can sell the expertise at scale.",
              challenges: [
                "Domain expertise that needs productization",
                "Internal tools that could become external products",
                "Limited technical resources for product development",
                "Need for a technical co-founder alternative"
              ],
              approach: "We build agency products — turning your service expertise into software you can sell at scale, without needing to hire a technical team."
            }
          ]
        }
      },
    ],
    layout: "image-grid",

    pageContent: {
      intro:
        "A web application differs fundamentally from a website — it's software operating within a browser that performs essential functions for your business. This could be a customer portal, an internal operations tool, a SaaS dashboard, a booking system, or any solution requiring logic, user accounts, and real data processing. When a spreadsheet or a tool like Notion is handling work it was never designed for, that's typically the indicator.",

      included: [
        {
          label: "Bespoke UI/UX design",
          detail:
            "Interfaces engineered around how your actual users operate — not adapted from generic dashboard templates.",
        },
        {
          label: "Authentication system",
          detail:
            "Secure login, user roles, and permissions — built properly with JWT, session management, and role-based access control.",
        },
        {
          label: "Real-time functionality",
          detail:
            "Live data updates, notifications, and collaborative features where the business case necessitates them.",
        },
        {
          label: "Third-party API integrations",
          detail:
            "Connect to payment gateways, CRMs, ERPs, and any external service your business already depends on.",
        },
        {
          label: "Serverless / cloud architecture",
          detail:
            "Scales automatically during traffic surges — no separate operations team or server management required on your end.",
        },
        {
          label: "Admin panel",
          detail:
            "Manage users, data, and settings without touching the codebase. Included on all application projects.",
        },
      ],

      process: [
        {
          step: "01",
          title: "Scoping session",
          body: "We map every user type, every action they perform, and every piece of data that flows through the system — before writing a single specification.",
        },
        {
          step: "02",
          title: "Architecture design",
          body: "Data models, API structure, and third-party integrations are determined upfront. Nothing gets rearchitected mid-build because we overlooked this phase.",
        },
        {
          step: "03",
          title: "Phased development",
          body: "We build in functional phases so you can test real features early — not wait six weeks for a complete but untested system.",
        },
        {
          step: "04",
          title: "QA & security testing",
          body: "Every authentication flow, data input, and edge case is tested. We look for what breaks it, not just what works.",
        },
        {
          step: "05",
          title: "Deployment & handoff",
          body: "We deploy, write technical documentation, and brief your team so they can manage the system without depending on us for basic questions.",
        },
      ],

      internalLinks: [
        {
          text: "A lot of the automation work we do connects directly into a web application — either one we've already built, or one we build alongside the",
          linkText: "AI & Automation",
          href: "/services/ai-automation",
          after: "work.",
        },
        {
          text: "If the application also needs a public-facing marketing front-end, that's typically handled in the same project through our",
          linkText: "Website Development",
          href: "/services/website-development",
          after: "service.",
        },
      ],

      closingCta:
        "If your team is working around limitations in off-the-shelf software, or a spreadsheet is running a process it shouldn't be, that's worth a 30-minute conversation. We'll scope it clearly and tell you honestly what it would take to build it properly.",

      faqs: [
        {
          q: "How is a web application different from a website?",
          a: "A website is mostly informational — it shows content. A web application does things: it takes input, processes data, stores it, and responds. Think booking systems, internal dashboards, client portals, or custom tools that replace manual processes.",
        },
        {
          q: "Do you offer ongoing maintenance after launch?",
          a: "Yes. We offer monthly maintenance retainers that cover updates, bug fixes, hosting oversight, and small feature additions. Terms are agreed before project start so there are no surprises.",
        },
        {
          q: "What's the minimum budget for a web application?",
          a: "Simpler tools — a basic booking system or client portal — typically start from $500. More complex platforms with multiple user types and integrations run higher. We quote accurately after the scoping session.",
        },
        {
          q: "Can you work with an existing codebase someone else wrote?",
          a: "Yes, though we'll do a code review first and be honest about whether it's faster to build on what exists or start fresh. We've inherited both clean and messy codebases.",
        },
      ],
    },
  },

  {
    id: "branding-identity",
    tag: "Service 03",
    title: "Branding & Identity",
    headline: "Iconic Branding & Identity Systems",
    description:
      "Complete visual identity systems — from logo design to full brand guidelines — that command authority and create instant recognition across every touchpoint.",
    solvesWhat:
      "Forgettable brands lose business to memorable ones every single day. We make your brand the one people trust on first glance.",
    features: [
      "Full logo suite — primary, secondary, responsive icon marks",
      "Complete brand system: curated colors, typography, voice",
      "Brand guidelines document for perfect consistency everywhere",
      "Social media kit + print-ready assets delivered in 48h",
    ],
    images: ["/services/brand_3.webp"],
    image: "/services/brand_2.webp",
    subServices: [
      { 
        id: "logo-design", 
        title: "Logo Design",
        description: "Custom, timeless logo design that captures your brand's essence. We create scalable vector marks that look perfect on a business card, a website, or a billboard.",
        serviceSection: {
          tag: "Branding 01",
          title: "Logo Design",
          headline: "Custom Logos That Command Attention",
          description: "Your logo is the face of your business. We don't use templates or clip art. We design custom, timeless logo marks that capture your brand's essence and make a powerful first impression.",
          solvesWhat: "A cheap, generic logo tells customers you cut corners. We create professional, unique logos that build immediate trust and position you as a premium option in your industry.",
          features: [
            "Custom Vector Design — infinitely scalable",
            "Multiple Variations — primary, secondary, and icon marks",
            "Full Ownership — you get all source files",
            "Strategic Alignment — designed for your target market"
          ],
          images: [
            "/services/brand_3.webp"
          ],
          image: "/services/brand_3.webp",
          layout: "image-grid"
        },
        pageContent: {
          industries: brandingIndustries,
          whyItMatters: {
            title: "Why It Matters",
            headline: "Your logo is the fastest judgment a prospect makes",
            description: "Before they read your copy or check your prices, prospects see your logo. It takes milliseconds for them to form an opinion about your professionalism, quality, and reliability.",
            body: "A custom logo design isn't just about looking good—it's about communicating your value instantly. If your logo looks like it was bought on a stock site for $10, clients will expect $10 service. A strong brand mark anchors your entire visual identity.",
            highlight: "We design logos that work across every medium—from favicons to vehicle wraps—ensuring your brand always looks its best."
          },
          intro: "We create custom, timeless logo designs that capture your brand's essence. We don't use templates or generic icons. Every logo we design is built from scratch to perfectly represent your business and appeal to your target audience.",
          included: [
            {
              label: "Primary Logo",
              detail: "The main version of your logo, used when space allows for the full design."
            },
            {
              label: "Secondary Marks",
              detail: "Alternative layouts (e.g., stacked or horizontal) for different spaces."
            },
            {
              label: "Brand Icon / Favicon",
              detail: "A simplified mark for social media profiles and website browser tabs."
            },
            {
              label: "Vector Source Files",
              detail: "AI, EPS, and SVG files so your logo can be scaled without losing quality."
            },
            {
              label: "Usage Guidelines",
              detail: "A brief guide on clear space, sizing, and what not to do with your logo."
            }
          ],
          process: [
            {
              step: "01",
              title: "Discovery",
              body: "We analyze your business, audience, and competitors to understand what visual language will resonate."
            },
            {
              step: "02",
              title: "Concept Generation",
              body: "We explore multiple creative directions, sketching and refining ideas that align with your strategy."
            },
            {
              step: "03",
              title: "Presentation",
              body: "We present the strongest concepts, showing how they look in real-world applications."
            },
            {
              step: "04",
              title: "Refinement",
              body: "We refine your chosen concept based on feedback, perfecting every curve and proportion."
            },
            {
              step: "05",
              title: "Final Delivery",
              body: "We export and organize all necessary file formats and hand over full ownership."
            }
          ],
          faqs: [
            {
              q: "Will I own the copyright to my logo?",
              a: "Yes. Once the project is complete and paid in full, you receive full intellectual property rights and all source files."
            },
            {
              q: "Do you use templates or AI to make logos?",
              a: "No. Every logo we design is custom-crafted by our design team specifically for your business."
            },
            {
              q: "What if I need my logo in different colors?",
              a: "We provide your logo in full color, all-black, and all-white (reversed) versions as part of the standard deliverable."
            }
          ]
        }
      },
      { 
        id: "brand-guidelines", 
        title: "Brand Guidelines",
        description: "Comprehensive brand guidelines that ensure your team and partners use your brand assets correctly every single time. Protect your brand equity with clear rules.",
        serviceSection: {
          tag: "Branding 02",
          title: "Brand Guidelines",
          headline: "The Blueprint for Brand Consistency",
          description: "A great logo loses its power if it's used inconsistently. We create detailed brand guidelines (style guides) that define exactly how your fonts, colors, and logos should be used across all platforms.",
          solvesWhat: "When different team members or external vendors guess how to use your brand, it looks messy and unprofessional. A brand manual provides clear rules, ensuring a unified, premium look everywhere.",
          features: [
            "Logo Usage Rules — clear space, sizing, and misuses",
            "Color Palette Specs — HEX, RGB, CMYK, and Pantone",
            "Typography Hierarchy — which fonts to use and where",
            "Brand Voice & Tone — how your brand sounds"
          ],
          images: [
            "/services/brand_3.webp"
          ],
          image: "/services/brand_3.webp",
          layout: "image-grid"
        },
        pageContent: {
          industries: brandingIndustries,
          whyItMatters: {
            title: "Why It Matters",
            headline: "Consistency is the foundation of trust",
            description: "If your website uses one shade of blue, your Instagram uses another, and your business cards use a stretched version of your logo, your brand looks fractured. Consistency builds recognition, and recognition builds trust.",
            body: "A brand guidelines document (or brand book) is the ultimate rulebook for your identity. It empowers your team, social media managers, and external partners to create content that looks unmistakably like you, without needing a designer looking over their shoulder.",
            highlight: "We don't just hand you a logo; we hand you the instruction manual on how to build a recognizable corporate identity."
          },
          intro: "Protect your brand equity with a comprehensive style guide. We document the precise rules for your visual identity—from logo clearance to exact color values—so your brand always looks polished and professional.",
          included: [
            {
              label: "Logo Guidelines",
              detail: "Rules for placement, minimum sizing, clear space, and examples of unacceptable usage."
            },
            {
              label: "Color System",
              detail: "Primary and secondary color palettes defined for both digital (RGB/HEX) and print (CMYK/Pantone)."
            },
            {
              label: "Typography Rules",
              detail: "Font selections, pairing rules, and hierarchy for headings, body copy, and accents."
            },
            {
              label: "Imagery Style",
              detail: "Guidelines on the type of photography, illustrations, or graphics that fit your brand."
            },
            {
              label: "Voice and Tone",
              detail: "A guide on how to write for your brand, ensuring messaging is as consistent as visuals."
            }
          ],
          process: [
            {
              step: "01",
              title: "Audit",
              body: "We review your existing assets and identify where inconsistencies are happening."
            },
            {
              step: "02",
              title: "Systematization",
              body: "We define the exact rules and values for your logos, colors, and typography."
            },
            {
              step: "03",
              title: "Documentation",
              body: "We compile these rules into a clear, easy-to-read PDF or digital brand book."
            },
            {
              step: "04",
              title: "Review",
              body: "We review the guidelines with your team to ensure they are practical and actionable."
            },
            {
              step: "05",
              title: "Handoff",
              body: "You receive the final guidelines document, ready to share with anyone who works on your brand."
            }
          ],
          faqs: [
            {
              q: "Who needs a brand guidelines document?",
              a: "Any business that wants to look professional. It's especially critical if you have multiple employees, work with freelancers, or plan to run marketing campaigns."
            },
            {
              q: "Can you create guidelines for our existing logo?",
              a: "Yes. We can take your current logo and build a comprehensive visual system and rulebook around it."
            },
            {
              q: "How long is a typical brand book?",
              a: "It ranges from a 5-page basic style sheet to a 50+ page comprehensive manual, depending on the complexity of your business."
            }
          ]
        }
      },
      { 
        id: "visual-identity", 
        title: "Visual Identity",
        description: "A cohesive visual identity system that extends far beyond a logo. We craft the colors, typography, imagery, and graphic elements that make your brand instantly recognizable.",
        serviceSection: {
          tag: "Branding 03",
          title: "Visual Identity",
          headline: "Visual Systems That Speak Volumes",
          description: "Your visual identity is the complete aesthetic language of your business. It includes color palettes, typography, patterns, and imagery styles that work together to communicate your brand's unique personality.",
          solvesWhat: "A logo alone isn't enough to fill a website or a brochure. We provide the complete toolkit of visual assets you need to create stunning, cohesive marketing materials.",
          features: [
            "Cohesive Color Palettes — engineered for contrast and emotion",
            "Custom Typography Pairing — legible and distinctive",
            "Graphic Elements — patterns, icons, and shapes",
            "Imagery Direction — photography and illustration styles"
          ],
          images: [
            "/services/brand_3.webp"
          ],
          image: "/services/brand_3.webp",
          layout: "image-grid"
        },
        pageContent: {
          industries: brandingIndustries,
          whyItMatters: {
            title: "Why It Matters",
            headline: "People feel your brand before they read about it",
            description: "Color increases brand recognition by up to 80%. The fonts you choose convey emotion—from traditional and trustworthy to modern and disruptive. Your visual identity sets the mood.",
            body: "When you have a strong visual system, you can remove your logo from an advertisement and people will still know it's you. Think of how recognizable a Tiffany blue box is, or the stark, clean typography of Apple. That's the power of visual identity.",
            highlight: "We design complete visual ecosystems that ensure every touchpoint, from your website to your packaging, feels unmistakably yours."
          },
          intro: "We craft comprehensive visual identity systems that give your business a distinct and memorable look. By carefully selecting colors, typography, and supporting graphics, we ensure your brand communicates the right message instantly.",
          included: [
            {
              label: "Color Psychology",
              detail: "Strategic selection of colors that evoke the desired emotional response from your target audience."
            },
            {
              label: "Typography System",
              detail: "Curated font families that provide clear hierarchy and readable, beautiful text."
            },
            {
              label: "Graphic Elements",
              detail: "Custom patterns, textures, or shapes that add depth to your visual layouts."
            },
            {
              label: "Custom Iconography",
              detail: "A set of bespoke icons tailored to your brand's style for use on websites and apps."
            },
            {
              label: "Photography Direction",
              detail: "Guidelines on lighting, composition, and subject matter for your brand's imagery."
            }
          ],
          process: [
            {
              step: "01",
              title: "Strategic Alignment",
              body: "We define the core attributes of your brand—are you playful, serious, luxury, or accessible?"
            },
            {
              step: "02",
              title: "Moodboarding",
              body: "We compile visual inspiration to align on the aesthetic direction before designing."
            },
            {
              step: "03",
              title: "System Design",
              body: "We build out the color palettes, select typography, and design the supporting graphic elements."
            },
            {
              step: "04",
              title: "Application Testing",
              body: "We apply the new visual identity to mockups (like a website hero or business card) to prove it works."
            },
            {
              step: "05",
              title: "Finalization",
              body: "We package the visual assets and hand them over for immediate use."
            }
          ],
          faqs: [
            {
              q: "What is the difference between a logo and a visual identity?",
              a: "A logo is a single graphic mark. A visual identity is the entire system of colors, fonts, and graphics that surround the logo and make up the overall look of the brand."
            },
            {
              q: "Do you provide the font files?",
              a: "If we use open-source fonts, we provide them. If we select premium licensed fonts, we will provide the links for you to purchase the appropriate licenses."
            },
            {
              q: "Will this help with my website design?",
              a: "Absolutely. A strong visual identity is the blueprint for a beautiful website. It gives web designers exactly what they need to build your site."
            }
          ]
        }
      },
      { 
        id: "brand-strategy", 
        title: "Brand Strategy",
        description: "Data-driven brand strategy that positions your business to win. We define your target audience, core messaging, and market positioning to differentiate you from competitors.",
        serviceSection: {
          tag: "Branding 04",
          title: "Brand Strategy",
          headline: "Position Your Business for Market Leadership",
          description: "Pretty designs don't sell products; clear positioning does. We build the strategic foundation of your brand—defining who you are, who you serve, and why they should care.",
          solvesWhat: "If you sound exactly like your competitors, you'll be forced to compete on price. We uncover your unique value proposition and craft messaging that makes price irrelevant.",
          features: [
            "Market Positioning — find your unique space in the industry",
            "Target Audience Profiles — know exactly who you're talking to",
            "Brand Archetype & Personality — humanize your business",
            "Core Messaging Framework — what to say and how to say it"
          ],
          images: [
            "/services/brand_3.webp"
          ],
          image: "/services/brand_3.webp",
          layout: "image-grid"
        },
        pageContent: {
          industries: brandingIndustries,
          whyItMatters: {
            title: "Why It Matters",
            headline: "Strategy is the difference between a brand and a commodity",
            description: "If you don't define your brand, the market will do it for you. Without a clear strategy, your marketing is just guesswork. You waste money targeting the wrong people with the wrong message.",
            body: "A solid brand strategy acts as a filter for every business decision you make. It tells you what products to launch, how to write your website copy, and how to train your sales team. It's the invisible architecture that supports all your visible marketing efforts.",
            highlight: "We dig deep into market research and psychology to uncover the 'why' behind your business, giving you a competitive advantage that can't be easily copied."
          },
          intro: "We build data-driven brand strategies that position your business to dominate. By defining your target audience, core messaging, and market differentiation, we provide the clarity needed to drive real growth and customer loyalty.",
          included: [
            {
              label: "Competitor Analysis",
              detail: "Identifying gaps in the market and weaknesses in your competitors' positioning."
            },
            {
              label: "Buyer Personas",
              detail: "Detailed profiles of your ideal customers, including their pain points, desires, and buying behaviors."
            },
            {
              label: "Value Proposition",
              detail: "A clear, compelling statement that explains why a customer should choose you."
            },
            {
              label: "Brand Personality",
              detail: "Defining the human traits of your brand—are you the rebel, the caregiver, or the sage?"
            },
            {
              label: "Messaging Framework",
              detail: "Core statements, taglines, and elevator pitches that ensure everyone speaks the same language."
            }
          ],
          process: [
            {
              step: "01",
              title: "Discovery Workshops",
              body: "In-depth sessions with your stakeholders to extract your vision, goals, and institutional knowledge."
            },
            {
              step: "02",
              title: "Market Research",
              body: "We analyze industry trends, competitor positioning, and customer feedback."
            },
            {
              step: "03",
              title: "Strategy Formulation",
              body: "We synthesize the data into a cohesive strategic framework and positioning statement."
            },
            {
              step: "04",
              title: "Messaging Development",
              body: "We write the core copy that communicates your new strategy clearly and persuasively."
            },
            {
              step: "05",
              title: "Strategic Handoff",
              body: "We deliver a comprehensive brand strategy playbook that guides all future marketing."
            }
          ],
          faqs: [
            {
              q: "Do I need strategy if I just want a logo?",
              a: "You can get a logo without a strategy, but it will just be decoration. Strategy ensures your logo actually solves a business problem and appeals to the right people."
            },
            {
              q: "How does brand strategy help with sales?",
              a: "It gives your sales team a clear, compelling narrative. When you know exactly what your customers care about, overcoming objections becomes much easier."
            },
            {
              q: "Is this a one-time project?",
              a: "The core strategy is foundational, but it should evolve as your business grows or as market conditions change. We recommend revisiting it every 2-3 years."
            }
          ]
        }
      }
    ],
    layout: "image-grid",

    pageContent: {
      industries: brandingIndustries,
      intro:
        "Branding is not a logo. It's the complete visual and tonal system that makes your business recognizable — and more importantly, believable. We build brand identities with enough depth to stay consistent across a business card, an Instagram story, a pitch deck, and a 20-foot billboard. The businesses we work with aren't just looking for something that looks good — they want something that holds up.",

      included: [
        {
          label: "Logo suite",
          detail:
            "Primary logo, horizontal variant, and responsive icon mark — three formats designed for different contexts, not three versions of the same thing.",
        },
        {
          label: "Color system",
          detail:
            "A curated palette with primary, secondary, and neutral tones — delivered with HEX, RGB, and CMYK values so it's usable everywhere.",
        },
        {
          label: "Typography selection",
          detail:
            "Two to three typefaces with defined usage rules covering headings, body, labels, and captions.",
        },
        {
          label: "Brand voice guidelines",
          detail:
            "A tone-of-voice document covering how your brand sounds in writing — useful for anyone producing content after the identity is set.",
        },
        {
          label: "Brand guidelines document",
          detail:
            "A single PDF covering spacing rules, misuse examples, background variations, and logo placement. The document your team actually uses.",
        },
        {
          label: "Social media kit + print files",
          detail:
            "Formatted templates for your active platforms, plus business cards, letterhead, and envelopes — delivered in PDF and AI format.",
        },
      ],

      process: [
        {
          step: "01",
          title: "Brand discovery",
          body: "A structured intake covering your business category, target audience, competitors, and references. We're solving a positioning problem, not just making something attractive.",
        },
        {
          step: "02",
          title: "Concept development",
          body: "We present 2–3 distinct creative directions with rationale for each. Not a dozen logo variations — three considered directions you can actually choose between.",
        },
        {
          step: "03",
          title: "Refinement",
          body: "You pick a direction and we refine based on specific feedback. This is where most of the real work happens — the difference between good and right.",
        },
        {
          step: "04",
          title: "System build",
          body: "We extend the chosen mark into the full brand system — colors, type, voice, templates, and every deliverable.",
        },
        {
          step: "05",
          title: "Delivery",
          body: "Everything packaged in organized folders with clear naming. Source files included. No chasing us three months later for the AI file.",
        },
      ],

      internalLinks: [
        {
          text: "Once a brand identity is set, we carry it directly into",
          linkText: "Website Development",
          href: "/services/website-development",
          after:
            "so the visual language stays consistent — instead of being reinterpreted by a different team who wasn't part of the branding process.",
        },
        {
          text: "Consistent social media presence gets significantly easier once brand assets are in place — that's usually where our",
          linkText: "Social Media Marketing",
          href: "/services/social-media",
          after: "work picks up for the same client.",
        },
      ],

      closingCta:
        "If you're using a logo made in Canva, or you've outgrown your current brand and it no longer reflects what your business has become — that's the right time for this conversation. Most branding projects are completed in 2–3 weeks. Reach out with a brief description of your business and we'll respond with a scoping questionnaire.",

      faqs: [
        {
          q: "What if we only need a logo, not the full brand system?",
          a: "We can do logo-only projects, but we'd recommend at minimum adding the color system and typography — without those, the logo gets used inconsistently within a few months and loses most of its impact.",
        },
        {
          q: "What file formats do we receive?",
          a: "SVG, PNG (transparent, multiple sizes), PDF, and AI source files. Print vendors typically ask for PDF or AI — you'll have both.",
        },
        {
          q: "Can you refresh an existing brand rather than replace it?",
          a: "Yes. A brand refresh (evolving existing elements rather than scrapping them) is a different scope. We'll review what you have and recommend whether a refresh or a full rebrand is the right move — and why.",
        },
        {
          q: "How many revision rounds are included?",
          a: "Two rounds of structured revisions after the concept presentation. We don't do unlimited revisions, but we invest heavily in the discovery phase so revisions are about refinement — not about changing direction.",
        },
      ],
    },
  },

  {
    id: "seo-growth",
    tag: "Service 04",
    title: "SEO & Growth",
    headline: "Command Search Results",
    description:
      "Data-driven technical SEO and automation funnels that compound your organic visibility. We transform search engines into a predictable, scalable revenue engine.",
    solvesWhat:
      "You're invisible on Google — which means your competitors capture every customer who searches for what you offer. We exist to change that.",
    features: [
      "Comprehensive technical SEO audit — identify and eliminate every ranking deficiency",
      "Local SEO targeting buyer-intent keywords",
      "On-page optimization + E-E-A-T content that Google rewards",
      "Transparent monthly ranking reports with clear ROI attribution",
    ],
    images: ["/services/seo_1.webp"],
    image: "/services/seo_1.webp",
    subServices: [
      { 
        id: "local-seo", 
        title: "Local SEO",
        description: "Win the searches happening three miles from your door. Google Business Profile optimization, citations, reviews, and localized pages that own your market.",
        serviceSection: {
          tag: "Service 01",
          title: "Local SEO",
          headline: "Win the Searches Happening Three Miles From Your Door",
          description: "Your next customer isn't searching 'plumber.' They're searching 'plumber near me,' and Google is deciding right now whether to show them you or the shop one town over. Local SEO is how you win that decision consistently.",
          solvesWhat: "Most agencies treat local SEO as a checklist of directory listings. It's actually a system — Google Business Profile, citations, reviews, and localized pages — and the businesses that win it own their market.",
          features: [
            "Google Business Profile Optimization — every field tuned",
            "Citations & NAP Consistency — clean across the web",
            "Review & Reputation Management — steady flow of real reviews",
            "Local Landing Pages — built to rank with schema"
          ],
          images: [
            "/services/seo_1.webp"
          ],
          image: "/services/seo_1.webp",
          layout: "image-grid"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "Local intent is the highest-converting traffic on the internet",
            description: "A 'near me' search is a customer with their wallet already out. Google's own data shows the majority of local mobile searches lead to a call, visit, or purchase within a day. That person isn't comparing ten options — they're picking from what Google shows them in the next thirty seconds.",
            body: "The map pack sits on top of organic results and absorbs the majority of clicks for any query with local intent. If you're not in those three, you're fighting for scraps below the fold. Winning the map pack is the single highest-leverage move a local business can make in search.",
            highlight: "Local ranking runs on three signals: proximity, relevance, and prominence. You can't buy proximity, but relevance and prominence are entirely earnable — optimized GBP, consistent citations, real reviews, and localized pages."
          },
          intro: "Your next customer is searching 'plumber near me' right now, and Google is deciding whether to show them you or the shop one town over. Local SEO is how you win that decision — the map pack, localized organic results, and the Google Business Profile that ties it all together.",

          included: [
            {
              label: "Google Business Profile Optimization",
              detail: "Primary and secondary category selection, services, attributes, hours, service areas, Google Posts, Q&A seeding, and suspension recovery."
            },
            {
              label: "Citations & NAP Consistency",
              detail: "Name, address, and phone standardized across the web. Duplicates suppressed, old data corrected, new citations built."
            },
            {
              label: "Reviews & Reputation",
              detail: "Review velocity systems, response workflows, and rating monitoring. Real reviews from real customers, not fakes."
            },
            {
              label: "Local Landing Pages",
              detail: "Location and service pages built in your codebase with LocalBusiness schema. Not thin doorway pages — real content."
            },
            {
              label: "Local Links & Content",
              detail: "Local authority building through community links, local content, and partnerships that reinforce your market presence."
            },
            {
              label: "Geo-Grid Rank Tracking",
              detail: "Before-and-after visibility reports showing exactly where you rank across your actual service area."
            }
          ],

          process: [
            {
              step: "01",
              title: "Audit",
              body: "Local rank grid, profile and citation audit, and competitor teardown. We map exactly where you stand in your market."
            },
            {
              step: "02",
              title: "Prioritize",
              body: "Quick-win shortlist vs. long-term authority building. Budget goes to impact first, compound gains second."
            },
            {
              step: "03",
              title: "Execute",
              body: "GBP fully optimized, citations corrected, location pages and schema shipped in your codebase. Not a PDF of recommendations."
            },
            {
              step: "04",
              title: "Verify",
              body: "Rank grid re-scan, profile insights tracking, and ongoing monitoring. Proof on the map, not just claims."
            },
            {
              step: "05",
              title: "Optimize",
              body: "Monthly review adjustments, new competitor monitoring, and citation drift correction. The system keeps winning."
            }
          ],

          faqs: [
            {
              q: "How is local SEO different from regular SEO?",
              a: "Regular SEO ranks your pages in standard organic results nationally or globally. Local SEO targets 'near me' and city-based searches where Google shows a map pack. It runs on different signals: proximity, GBP, citations, and reviews."
            },
            {
              q: "How long does local SEO take to work?",
              a: "Quick wins like GBP optimization and citation cleanup can move the needle in weeks. Full map pack dominance typically takes 3-6 months depending on competition and market density."
            },
            {
              q: "Do I need a physical storefront?",
              a: "No. Service-area businesses (plumbers, electricians, cleaners) can optimize for their service area without showing a public address. We set up your profile correctly under Google's SAB rules."
            },
            {
              q: "Do reviews really affect rankings?",
              a: "Yes. Review velocity, recency, and response activity are prominent signals in the map pack. A steady flow of real reviews is one of the most impactful things you can do for local rankings."
            }
          ],

          industries: [
            {
              id: "restaurants",
              title: "Restaurants & Hospitality",
              icon: "Building2",
              headline: "Win the Dinner Rush With Map Pack Dominance",
              description: "Diners decide in seconds on their phones. The map pack with photos, hours, and star ratings is the whole battlefield. A missing menu link or outdated holiday hours sends a hungry customer next door.",
              challenges: [
                "Keeping menus, hours, and reservation links current across platforms",
                "Building review velocity to maintain high star ratings",
                "Winning 'restaurant near me' searches at peak dining times",
                "Managing multiple locations with consistent NAP data"
              ],
              approach: "We keep your Google Business Profile relentlessly current with menus, photos, hours, and order links. We build the review velocity that holds your rating up and add Restaurant schema so you win the searches happening at 6pm two blocks away."
            },
            {
              id: "home-services",
              title: "Home Services",
              icon: "Building2",
              headline: "Dominate Your Service Area Before Your Competitors Do",
              description: "Plumbers, electricians, HVAC, and cleaners live or die by local searches. When a pipe bursts at 2am, the first name Google shows gets the call. Being in the map pack isn't optional — it's survival.",
              challenges: [
                "Service-area businesses without a storefront need special GBP setup",
                "Emergency searches demand instant visibility and trust signals",
                "Multiple service types need distinct landing pages and schema",
                "Competing against national directories and aggregators"
              ],
              approach: "We optimize your GBP for service areas, build location-specific landing pages with LocalBusiness schema, and create service pages that rank for every plumbing, electrical, or HVAC search in your market."
            },
            {
              id: "medical-dental",
              title: "Medical & Dental",
              icon: "Building2",
              headline: "New Patient Growth Through Local Search Visibility",
              description: "Patients choose healthcare providers based on proximity, reviews, and trust. A dental practice that ranks in the map pack with 50+ five-star reviews and clear service pages gets the new patient calls.",
              challenges: [
                "HIPAA-compliant forms and patient communication requirements",
                "Insurance and provider directories that need clean structure",
                "Building trust through reviews, credentials, and patient education",
                "Multi-location practices with consistent local presence"
              ],
              approach: "We build provider profiles with specialties, streamline appointment booking, and create patient education content organized for quick answers. Your GBP becomes the trust-building machine that turns searchers into patients."
            },
            {
              id: "law-firms",
              title: "Law Firms",
              icon: "Building2",
              headline: "Capture Clients Searching for Legal Help Nearby",
              description: "When someone needs a lawyer, they search 'divorce attorney near me' or 'personal injury lawyer [city].' The firms in the map pack with strong reviews and clear practice area pages get the consultation calls.",
              challenges: [
                "Practice area pages that rank for specific legal searches",
                "Building authority through case results and attorney profiles",
                "Managing reviews in a sensitive, compliance-aware way",
                "Competing against legal directories like Avvo and FindLaw"
              ],
              approach: "We create practice area pages optimized for each legal service, build attorney profiles that establish expertise, and develop a review strategy that builds credibility without violating bar association rules."
            },
            {
              id: "retail",
              title: "Retail & Stores",
              icon: "Building2",
              headline: "Drive Foot Traffic With Local Search Dominance",
              description: "Physical stores need nearby customers walking through the door. Local SEO puts your store on the map — literally — when shoppers search for what you sell in your area.",
              challenges: [
                "Product inventory visibility in local search results",
                "Store hours, location, and holiday schedules kept accurate",
                "Competing against online retailers and big-box stores",
                "Building local authority through community presence"
              ],
              approach: "We optimize your GBP with product showcases, keep hours and inventory current, and build local content that reinforces your community presence. Your store becomes the obvious choice for nearby shoppers."
            },
            {
              id: "auto-services",
              title: "Auto Services",
              icon: "Building2",
              headline: "Get Found When Drivers Need You Most",
              description: "Auto repair, tire shops, and dealerships win or lose based on local visibility. When someone's check engine light comes on, the first shop Google shows gets the appointment.",
              challenges: [
                "Service menus that need clear, searchable structure",
                "Building trust through certifications and review responses",
                "Managing appointments and quote requests through GBP",
                "Competing against chains with bigger marketing budgets"
              ],
              approach: "We structure your services for searchability, build review systems that showcase your expertise, and optimize your GBP so independent shops compete head-to-head with national chains in local results."
            }
          ]
        }
      },
      { 
        id: "technical-seo", 
        title: "Technical SEO",
        description: "The invisible plumbing that decides whether Google can rank you at all. Crawl optimization, Core Web Vitals, schema, and site architecture — fixed in your codebase, not on paper.",
        serviceSection: {
          tag: "Service 02",
          title: "Technical SEO",
          headline: "The Invisible Plumbing That Decides Whether Google Can Rank You",
          description: "You can write the best content, earn the best links, and still lose because Google can't crawl the page, can't index it, or gives up before it loads. Technical SEO is the layer nobody sees and every ranking depends on.",
          solvesWhat: "Most agencies skip technical SEO because fixing it means touching code. We are the developer — the audit doesn't end in a PDF, it ends in fixes live on your site.",
          features: [
            "Crawl & Index Optimization — log-file analysis, budget recovery",
            "Core Web Vitals — LCP, INP, CLS fixed at the source",
            "Schema & Structured Data — shipped in your codebase",
            "Site Architecture — internal links, canonicals, and clean URLs"
          ],
          images: [
            "/services/seo_1.webp"
          ],
          image: "/services/seo_1.webp",
          layout: "image-grid"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "Google's crawler is the gatekeeper standing in front of every ranking",
            description: "Before a page can rank, Google has to discover it, crawl it, render it, and index it. Every stage is a filter that can silently drop your page before ranking is even on the table.",
            body: "Content and links live downstream of a crawler that has to reach the URL, load the JavaScript, and understand what's on the page. Technical SEO is the least glamorous work and the most neglected — but a single fix to a template can correct thousands of URLs at once.",
            highlight: "Get the plumbing right and every future piece of content inherits a foundation that actually ranks. It's the highest-leverage work in SEO."
          },
          intro: "You can write the best content in your market and still lose because Google can't crawl, render, or index your pages. Technical SEO is the invisible layer every ranking depends on — and the layer most agencies quietly skip because fixing it means touching code.",

          included: [
            {
              label: "Crawl & Index",
              detail: "Log-file analysis, crawl-budget recovery, XML sitemap cleanup, orphan-page discovery, and accidental noindex audits."
            },
            {
              label: "Speed & Core Web Vitals",
              detail: "LCP, INP, and CLS fixes at the template level. Image optimization, script deferral, and critical rendering path improvements."
            },
            {
              label: "Schema & Structured Data",
              detail: "Product, FAQ, LocalBusiness, Article, and BreadcrumbList schema deployed in your codebase for rich results."
            },
            {
              label: "Site Architecture",
              detail: "Internal link structure, canonical rules, pagination handling, and clean URL architecture that won't need redirects later."
            },
            {
              label: "Safe Migrations",
              detail: "Redirect mapping, staging QA, and post-launch monitoring when replatforming or redesigning."
            },
            {
              label: "Log-File Analysis",
              detail: "Real Googlebot behavior — how crawl budget is spent, which pages are ignored, and where traps waste resources."
            }
          ],

          process: [
            {
              step: "01",
              title: "Audit",
              body: "Full technical crawl plus log-file analysis. We map every URL, every error, and every place crawl budget or link equity is leaking."
            },
            {
              step: "02",
              title: "Prioritize",
              body: "Impact vs. effort scoring. What moves rankings now, what protects later, and what can wait. Quick wins ship first."
            },
            {
              step: "03",
              title: "Fix",
              body: "Templates, redirects, schema, and performance — tested in staging and shipped. Not a PDF. Real code changes deployed."
            },
            {
              step: "04",
              title: "QA & Test",
              body: "Every change tested before production. Rollback plans for high-risk fixes. Nothing breaks."
            },
            {
              step: "05",
              title: "Verify & Monitor",
              body: "Re-crawl, Search Console tracking, and ongoing monitoring. New technical debt caught before it costs rankings."
            }
          ],

          faqs: [
            {
              q: "How do I know if I have technical problems?",
              a: "The usual tells: traffic flat or sliding despite good content, pages never showing up in Google, slow load times, or Search Console flagging coverage issues. The free technical audit shows exactly what's wrong."
            },
            {
              q: "Will these changes break my site?",
              a: "No. Every change is tested in staging first. High-risk fixes ship with rollback plans. We're engineers who deploy code, not hand off recommendations."
            },
            {
              q: "Is technical SEO one-time or ongoing?",
              a: "The foundational pass is one-time, but technical debt accumulates. New templates, content, and features introduce new issues. Monitoring catches them before they cost rankings."
            },
            {
              q: "How does technical SEO affect AI Overviews?",
              a: "AI engines read the same code Google does. Clean markup, fast loading, and structured data make your content readable by both Google and AI answer engines like ChatGPT and Perplexity."
            }
          ],

          industries: [
            {
              id: "ecommerce-tech",
              title: "E-commerce",
              icon: "Building2",
              headline: "Tame Thousands of Product Pages Before They Tame You",
              description: "Large catalogs are technical minefields. Faceted navigation spawns millions of crawlable URLs, product variants duplicate content, and pagination buries your best sellers.",
              challenges: [
                "Faceted navigation creating millions of crawlable URLs",
                "Product variants duplicating content",
                "Pagination burying high-value pages",
                "Out-of-stock logic leaking equity"
              ],
              approach: "We tame crawl budget with parameter handling and canonicalization, add Product and Review schema, and keep pagination and out-of-stock logic from leaking equity."
            },
            {
              id: "local-tech",
              title: "Local & Multi-Location",
              icon: "Building2",
              headline: "Fix the Technical Foundations Behind Your Map Rankings",
              description: "Multi-location businesses have technical challenges most agencies miss — duplicate location pages, inconsistent schema, and crawl traps from location finders.",
              challenges: [
                "Duplicate location pages competing against each other",
                "Inconsistent LocalBusiness schema across locations",
                "Location finder scripts creating crawl traps",
                "NAP inconsistencies in code and schema"
              ],
              approach: "We audit location page architecture, fix schema consistency across all locations, and clean up location finder scripts so Google indexes the right pages."
            },
            {
              id: "saas-tech",
              title: "SaaS & Tech",
              icon: "Building2",
              headline: "Make Google Actually Read Your JavaScript App",
              description: "SaaS sites often run on JavaScript frameworks that Google struggles to render. Client-side rendering, heavy bundles, and dynamic content that never gets indexed.",
              challenges: [
                "Client-side rendering that Google can't index",
                "Heavy JavaScript bundles slowing crawl",
                "Dynamic content that never gets indexed",
                "Documentation and marketing competing for crawl"
              ],
              approach: "We implement server-side rendering or static generation, optimize JavaScript delivery, and structure documentation so Google indexes the right content."
            },
            {
              id: "healthcare-tech",
              title: "Healthcare",
              icon: "Building2",
              headline: "Patient-Facing Pages That Google Can Actually Find",
              description: "Healthcare sites have complex information architecture — provider directories, insurance pages, condition content, and appointment systems that all need clean crawl paths.",
              challenges: [
                "Provider directories with filtering that creates crawl traps",
                "Insurance pages competing against service content",
                "Appointment booking systems invisible to crawlers",
                "Patient education content that doesn't get indexed"
              ],
              approach: "We clean up provider directory architecture, structure insurance and service content properly, and ensure appointment systems don't block Google from finding patient-facing pages."
            },
            {
              id: "legal-tech",
              title: "Legal",
              icon: "Building2",
              headline: "Practice Area Pages That Actually Get Indexed",
              description: "Law firm websites often have practice area pages that Google never fully indexes. Thin templates, duplicate content across practice areas, and missing schema leave rankings on the table.",
              challenges: [
                "Practice area pages with thin, template content",
                "Duplicate content across similar practice areas",
                "Missing LegalService and Attorney schema",
                "Location pages that don't rank locally"
              ],
              approach: "We audit practice area page quality, consolidate duplicate content, deploy Attorney and LegalService schema, and fix location page architecture for local rankings."
            },
            {
              id: "realestate-tech",
              title: "Real Estate",
              icon: "Building2",
              headline: "Property Listings Google Can Crawl and Index",
              description: "Real estate sites have heavy imagery, complex search filters, and thousands of property listings that need clean crawl paths. Slow galleries and unindexable search results kill visibility.",
              challenges: [
                "Heavy property imagery slowing page speed",
                "Search filters creating crawl traps",
                "Property listings that don't get indexed",
                "Agent pages competing against listings"
              ],
              approach: "We optimize image delivery, clean up search filter architecture, and structure property listings so Google indexes the right pages without wasting crawl budget."
            }
          ]
        }
      },
      { 
        id: "on-site-seo", 
        title: "On-Site SEO",
        description: "Make every page say clearly what it's for. Titles, headings, internal links, and keyword mapping aligned so Google ranks with confidence.",
        serviceSection: {
          tag: "Service 03",
          title: "On-Site SEO",
          headline: "Make Every Page Say Clearly What It's For",
          description: "On-site SEO is the difference between a page Google sort of understands and one it ranks with confidence. It's the titles, heading structure, internal links, and keyword mapping — all aligned so humans and search engines reach the same conclusion.",
          solvesWhat: "When signals contradict each other, even great content stalls a few spots short. We fix titles, restructure headings, add internal links, and ship schema — live on your pages, not in a spreadsheet.",
          features: [
            "Title & Meta Optimization — pixel-width checked, intent-matched",
            "Keyword & Intent Mapping — one query per page, no cannibalization",
            "Internal Linking — authority routed to money pages",
            "Schema Deployment — structured data shipped in your codebase"
          ],
          images: [
            "/services/seo_1.webp"
          ],
          image: "/services/seo_1.webp",
          layout: "image-grid"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "On-site SEO is the bridge between a crawlable site and content that ranks",
            description: "Technical SEO gets Google to your page. Content gives it something worth ranking. On-site SEO is the layer in between — the part that tells Google exactly what a page is about, which query it answers, and why it deserves the click.",
            body: "Google now reads pages the way a person does. It weighs the title against the H1, the H1 against the body, the body against the query. What it's really scoring is intent match. Match the intent and you rank. Answer a different question and you don't — no matter how good the writing is.",
            highlight: "On-site work is the cheapest, fastest lever in SEO because it improves pages you've already built. A sharper title lifts click-through on rankings you already hold — more traffic with zero new content."
          },
          intro: "On-site SEO is the bridge between a crawlable site and content that ranks. It's the titles, heading structure, internal links, and keyword mapping aligned so a human and a search engine reach the same conclusion about what the page is about.",

          included: [
            {
              label: "Titles & Metadata",
              detail: "Keyword-led titles matched to search intent, pixel-width checks, descriptions written to earn the click, and unique metadata across every page."
            },
            {
              label: "Headings & Structure",
              detail: "H1-H6 hierarchy that reinforces relevance, content organized for both scanners and crawlers, and semantic structure that Google rewards."
            },
            {
              label: "Keyword & Intent Mapping",
              detail: "One target query per page, intent matched to content type, and cannibalization eliminated so pages don't fight each other."
            },
            {
              label: "Internal Linking",
              detail: "Authority routed to money pages, orphaned content reconnected, and anchors rewritten to reinforce relevance."
            },
            {
              label: "Content Optimization",
              detail: "Intent sharpened without gutting copy. Content aligned to what searchers actually want when they type the query."
            },
            {
              label: "Schema Deployment",
              detail: "Product, Review, FAQ, and LocalBusiness schema shipped in your codebase, not handed off as recommendations."
            }
          ],

          process: [
            {
              step: "01",
              title: "Audit",
              body: "Full on-page crawl, intent mapping, and cannibalization check. We read every page the way Google does."
            },
            {
              step: "02",
              title: "Prioritize",
              body: "Striking-distance pages (positions 5-20) get worked first. Impact scoring ties each fix to the revenue it affects."
            },
            {
              step: "03",
              title: "Execute",
              body: "Titles rewritten, headings restructured, internal links added, and schema deployed — live on your pages, not in a spreadsheet."
            },
            {
              step: "04",
              title: "QA & Test",
              body: "Every change tested before deployment. Nothing breaks in production. Content sharpened without gutting your copy."
            },
            {
              step: "05",
              title: "Verify & Track",
              body: "Rank and CTR tracking in Search Console. Before-and-after proof showing exactly which page moved and why."
            }
          ],

          faqs: [
            {
              q: "Is on-site SEO a one-time thing?",
              a: "The foundational pass is largely one-time and every page benefits. But every new page needs a title, a place in the internal-link structure, and an intent it owns. We handle initial cleanup and keep new content aligned as you grow."
            },
            {
              q: "Do you rewrite my content?",
              a: "We sharpen intent match without gutting your copy. Titles, headings, and internal links get rewritten. Body content is optimized for clarity and intent, not rewritten from scratch."
            },
            {
              q: "How is this different from technical SEO?",
              a: "Technical SEO gets Google to your page (crawlability, speed, indexation). On-site SEO tells Google what the page is about and who it's for. Both are needed — one without the other stalls."
            },
            {
              q: "Can on-site SEO improve pages I already rank for?",
              a: "Yes. This is where the fastest lift comes from. Pages ranking positions 5-20 often jump to page one with a sharper title, better intent match, or an internal link."
            }
          ],

          industries: [
            {
              id: "ecommerce-seo",
              title: "E-commerce",
              icon: "Building2",
              headline: "Product Pages That Rank and Convert",
              description: "Category and product pages live or die on intent match. Shoppers researching and shoppers ready to buy need different pages, and thin templated copy reads the same to Google.",
              challenges: [
                "Commercial vs. transactional intent needs separate pages",
                "Thin product descriptions that don't differentiate",
                "Category pages competing with product pages for rankings",
                "Faceted navigation creating duplicate content"
              ],
              approach: "We map commercial and transactional keywords to the right pages, write titles that separate research from buying intent, and add Product and Review schema so listings earn rich results that lift click-through."
            },
            {
              id: "saas-seo",
              title: "SaaS & Tech",
              icon: "Building2",
              headline: "Feature Pages That Capture Bottom-Funnel Searches",
              description: "SaaS companies need every feature, integration, and use-case page to rank for the specific searches buyers make. Generic feature pages don't convert — intent-matched ones do.",
              challenges: [
                "Feature pages that rank but don't convert",
                "Competitor comparison queries left unclaimed",
                "Documentation and help pages cannibalizing marketing content",
                "Pricing page optimization for high-intent searches"
              ],
              approach: "We map feature and integration searches to dedicated pages, build comparison content that captures competitor queries, and optimize pricing pages so high-intent visitors find exactly what they need."
            },
            {
              id: "local-seo-onpage",
              title: "Local Service Businesses",
              icon: "Building2",
              headline: "Service Pages That Win City + Service Searches",
              description: "Local businesses need service pages that rank for 'plumber in [city]' searches. Generic service descriptions don't win local — geo-specific, intent-matched pages do.",
              challenges: [
                "Service pages that don't target specific city searches",
                "Multiple locations competing against each other",
                "Thin location pages that Google ignores",
                "Internal links not routing authority to service pages"
              ],
              approach: "We build service pages optimized for each city and service combination, structure internal links to route authority to money pages, and add LocalBusiness schema so local results compound."
            },
            {
              id: "publishers-seo",
              title: "Publishers & Blogs",
              icon: "Building2",
              headline: "Content That Ranks for Informational Intent",
              description: "Publishers need articles that rank for research queries and drive ad revenue or leads. But most blogs have hundreds of posts competing against each other for the same keywords.",
              challenges: [
                "Topic clusters that don't reinforce each other",
                "Old content decaying and losing rankings",
                "Internal links not routing authority to high-value content",
                "Keyword cannibalization across similar articles"
              ],
              approach: "We audit every article for intent match, rebuild internal link structures to reinforce topic authority, and consolidate or update decaying content so your best posts rank instead of your newest."
            },
            {
              id: "b2b-seo",
              title: "B2B",
              icon: "Building2",
              headline: "Solution Pages That Capture Decision-Maker Searches",
              description: "B2B buyers search for solutions, not products. Your solution pages need to match the specific problems decision-makers type into Google — not just list features.",
              challenges: [
                "Solution pages that list features instead of matching intent",
                "Long sales cycles need content for every stage",
                "Case studies and proof points not placed where doubt creeps in",
                "Multiple stakeholders searching for different things"
              ],
              approach: "We map decision-maker searches to solution pages, structure content for every stage of the B2B journey, and place case studies where they overcome objections — not buried in a blog nobody reads."
            },
            {
              id: "healthcare-seo",
              title: "Healthcare",
              icon: "Building2",
              headline: "Service Pages Patients Actually Find and Trust",
              description: "Healthcare providers need service pages that rank for condition and treatment searches while building trust. Generic medical content doesn't rank or convert — specific, authoritative pages do.",
              challenges: [
                "Medical content needs E-E-A-T signals to rank",
                "Condition and treatment pages competing against each other",
                "Patient education content that builds trust before conversion",
                "Insurance and provider information that needs clean structure"
              ],
              approach: "We build condition and treatment pages with medical authority signals, structure content for patient education that builds trust, and organize insurance and provider information so patients find answers fast."
            }
          ]
        }
      },
      { 
        id: "seo-audits", 
        title: "SEO Audits",
        description: "Find out exactly why you're not ranking, before you spend a dollar fixing it. Evidence-based audit with prioritized roadmap and live fixes — not a 200-page PDF.",
        serviceSection: {
          tag: "Service 05",
          title: "SEO Audits",
          headline: "Find Out Exactly Why You're Not Ranking",
          description: "Most SEO engagements start with a guess and a retainer. Ours start with an audit — a straight, evidence-based answer to why your site isn't performing, prioritized by impact.",
          solvesWhat: "When traffic stalls, businesses burn budget on content and links without diagnosing root causes. We find the actual problems and fix them — in your codebase, not on paper.",
          features: [
            "Full Technical Crawl — every URL, status code, canonical",
            "Search Console & Log Files — real Googlebot behavior",
            "Competitor Benchmark — why they win, how to close the gap",
            "Live Code Fixes — deployed, not just recommended"
          ],
          images: [
            "/services/seo_1.webp"
          ],
          image: "/services/seo_1.webp",
          layout: "image-grid"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "You can't fix what you haven't correctly diagnosed",
            description: "When traffic stalls, the temptation is to publish more, chase links, tweak titles. That's motion without direction — how businesses burn a year of budget with nothing to show.",
            body: "An audit answers one question before any money moves: what is actually holding this site back, in priority order? A site can have great content Google never indexes, rank on page two because two pages compete for the same keyword, or bleed authority through redirect chains from a migration two years ago.",
            highlight: "Done right, the audit isn't a preliminary step. It becomes the plan the entire engagement runs on — connecting symptoms to causes and causes to revenue."
          },
          intro: "Most SEO engagements start with a guess and a retainer. Ours start with an audit — crawl, indexation, Core Web Vitals, on-page structure, content gaps, cannibalization, backlinks, and competitors, all prioritized by impact.",

          included: [
            {
              label: "Crawl & Indexation",
              detail: "Full technical crawl, Search Console coverage cross-reference, log-file review of Googlebot behavior, orphan-page discovery, and robots.txt validation."
            },
            {
              label: "On-Page & Content",
              detail: "Titles, headings, internal links, metadata, and intent match audited against what Google actually sees."
            },
            {
              label: "Content Gaps",
              detail: "Queries your competitors rank for that you don't. Topics your audience searches that you haven't covered."
            },
            {
              label: "Backlink Profile",
              detail: "Authority distribution, toxic links, and link gaps compared to competitors outranking you."
            },
            {
              label: "Competitor Analysis",
              detail: "The specific sites and pages outranking you today — why they win and what it takes to close the gap."
            },
            {
              label: "Prioritized Roadmap",
              detail: "Every finding ranked by impact and effort. Quick wins first, big builds second, cosmetic noise ignored."
            }
          ],

          process: [
            {
              step: "01",
              title: "Discover",
              body: "Deep technical crawl, Search Console history, log files, and competitive data. We gather every signal, not just a tool's crawl."
            },
            {
              step: "02",
              title: "Prioritize",
              body: "Impact vs. effort scoring. Every issue tied to pages, keywords, and revenue it affects. Quick wins ship before big builds."
            },
            {
              step: "03",
              title: "Execute",
              body: "Template fixes, redirects, schema, canonicals, and content — tested in staging and shipped. Not a PDF you find a developer for."
            },
            {
              step: "04",
              title: "QA & Test",
              body: "Every change tested before it touches production. Nothing regresses. Content gaps closed and cannibalization resolved."
            },
            {
              step: "05",
              title: "Verify & Monitor",
              body: "Re-crawl after changes, Search Console tracking for indexation and ranking response. Before-and-after proof of what the audit earned."
            }
          ],

          faqs: [
            {
              q: "Is the audit really free?",
              a: "Yes. We crawl your site, review Search Console and competitive position, and show you the priority issues. It's the best way to see how we think and whether we can help before either commits."
            },
            {
              q: "What's the difference from an automated tool report?",
              a: "Automated tools dump 200 items without context. We combine crawl data, log files, Search Console, and competitive analysis to connect symptoms to causes and causes to revenue."
            },
            {
              q: "What do I actually get?",
              a: "A prioritized roadmap ranked by impact and effort, a competitor benchmark, and live code fixes deployed in your codebase — not just findings."
            },
            {
              q: "Do I have to hire you after the audit?",
              a: "No. The audit stands on its own. If you want to execute the roadmap yourself, you have everything you need. If you want us to implement, we can."
            }
          ],

          industries: [
            {
              id: "local-audit",
              title: "Local Businesses",
              icon: "Building2",
              headline: "Uncover Why You're Losing the Map Pack",
              description: "Traffic stalls locally when GBP signals, location pages, and citations fall out of sync. A single wrong NAP or missing schema caps you in the map pack.",
              challenges: [
                "NAP inconsistencies across directories",
                "Location pages that don't rank for city searches",
                "Citation gaps vs. local competitors",
                "Missing LocalBusiness schema"
              ],
              approach: "Our audit checks LocalBusiness schema, citation consistency, and location-page architecture against competitors ranking in your city, then fixes the gaps directly."
            },
            {
              id: "ecommerce-audit",
              title: "E-commerce",
              icon: "Building2",
              headline: "Find Revenue Leaks in Your Product Pages",
              description: "E-commerce sites have thousands of pages competing for attention. Thin product descriptions, duplicate content from filters, and slow category pages quietly kill rankings.",
              challenges: [
                "Thin product pages that don't differentiate",
                "Faceted navigation creating duplicate content",
                "Category vs. product page cannibalization",
                "Missing Product and Review schema"
              ],
              approach: "We crawl your full catalog, identify thin and duplicate pages, map cannibalization issues, and fix schema so product pages earn rich results that lift click-through."
            },
            {
              id: "saas-audit",
              title: "SaaS & Tech",
              icon: "Building2",
              headline: "Diagnose Why Your Features Pages Don't Rank",
              description: "SaaS sites often have great features that Google doesn't understand. Technical content that's hard to crawl, documentation competing with marketing, and pricing pages that leak.",
              challenges: [
                "Feature pages that rank but don't convert",
                "Documentation cannibalizing marketing content",
                "Pricing page optimization gaps",
                "Technical content that Google can't parse"
              ],
              approach: "We audit your feature and pricing pages against competitor benchmarks, identify documentation cannibalization, and fix the technical content structure so Google understands what you sell."
            },
            {
              id: "publishers-audit",
              title: "Publishers & Media",
              icon: "Building2",
              headline: "Stop Your Content From Competing Against Itself",
              description: "Publishers have hundreds of articles competing for the same keywords. Old content decays, internal links don't route authority, and topic clusters don't reinforce each other.",
              challenges: [
                "Hundreds of articles cannibalizing each other",
                "Decaying content losing rankings over time",
                "Internal links not routing authority",
                "Topic clusters that don't reinforce"
              ],
              approach: "We audit every article for intent match, identify cannibalization clusters, rebuild internal link structures, and consolidate or update decaying content."
            },
            {
              id: "professional-audit",
              title: "Professional Services",
              icon: "Building2",
              headline: "Find Why Competitors Outrank Your Expertise",
              description: "Law firms, consultancies, and agencies have expertise that should rank but doesn't. Generic service pages, missing trust signals, and thin location content leave rankings on the table.",
              challenges: [
                "Service pages that don't match search intent",
                "Missing E-E-A-T signals for expertise",
                "Location pages that don't rank locally",
                "Competitor content that's more thorough"
              ],
              approach: "We audit your service pages against competitors winning your keywords, identify missing trust signals, and fix the content structure so Google recognizes your authority."
            },
            {
              id: "migration-audit",
              title: "Post-Migration Sites",
              icon: "Building2",
              headline: "Diagnose Why Rankings Dropped After Launch",
              description: "Migrations break things silently. Dropped redirects, lost content, changed URL patterns, and missing schema — the damage shows up weeks later when traffic is already bleeding.",
              challenges: [
                "Redirect chains and loops after launch",
                "Dropped pages that were ranking",
                "Missing metadata on new templates",
                "Schema that didn't survive the migration"
              ],
              approach: "We crawl the new site against the old, identify dropped redirects, missing content, and schema gaps, then fix the migration damage before rankings deteriorate further."
            }
          ]
        }
      },
      { 
        id: "all-seo-services", 
        title: "All SEO Services",
        description: "Get found by the people already searching for what you sell. Technical fixes, content strategy, local dominance, and managed SEO — all under one roof.",
        serviceSection: {
          tag: "Service 07",
          title: "All SEO Services",
          headline: "Get Found by the People Already Searching for What You Sell",
          description: "Most SEO is sold as a mystery and delivered as a spreadsheet nobody reads. Ours isn't. We fix the technical problems stopping Google from reading your site, build content around what people actually type, and win the local searches three miles from your door.",
          solvesWhat: "You don't have a content problem. You have a 'Google won't index you' problem. We diagnose why you're not ranking, then fix that — sometimes it's content, often it isn't.",
          features: [
            "Technical SEO — crawlability, speed, indexation",
            "Content Strategy — topical authority around real searches",
            "Local SEO — map pack dominance, street by street",
            "Managed & AI — ongoing optimization and monitoring"
          ],
          images: [
            "/services/seo_1.webp"
          ],
          image: "/services/seo_1.webp",
          layout: "image-grid"
        },
        pageContent: {
          whyItMatters: {
            title: "Why Most SEO Fails",
            headline: "You don't have a content problem. You have a 'Google won't index you' problem.",
            description: "More content isn't the fix if Google can't crawl you. Core Web Vitals in the red mean Google won't show your pages. Cannibalization means two of your own pages fight each other and both lose.",
            body: "Most agencies sell more blog posts. We diagnose the actual problem first. Sometimes it's content. Often it's technical — crawl errors, slow templates, dropped indexation, or internal links that don't route authority.",
            highlight: "We find the real cause before spending a dollar on solutions. That's the difference between SEO that compounds and SEO that burns budget."
          },
          intro: "Most SEO is sold as a mystery and delivered as a spreadsheet nobody reads. We fix the technical problems stopping Google, build content around what people actually type, and win the local searches three miles from your door.",

          included: [
            {
              label: "Technical SEO",
              detail: "Crawl errors, Core Web Vitals, indexation, site architecture, schema, and internal linking — the foundation everything else builds on."
            },
            {
              label: "Content Strategy",
              detail: "Keyword research, topical authority mapping, content clusters, and production targeting buyer-intent searches."
            },
            {
              label: "Local SEO",
              detail: "Google Business Profile, map pack, citations, reviews, and location pages that rank street by street."
            },
            {
              label: "E-commerce SEO",
              detail: "Product pages, category architecture, schema, and checkout conversion — optimized for search and sales."
            },
            {
              label: "Managed & AI",
              detail: "Ongoing optimization, monitoring, and reporting. AI-ready content for ChatGPT, Perplexity, and Gemini visibility."
            },
            {
              label: "Monthly Reporting",
              detail: "Plain-language reporting on rankings, traffic, and leads — not a spreadsheet of impressions nobody reads."
            }
          ],

          process: [
            {
              step: "01",
              title: "Audit",
              body: "Full technical and content audit — crawlability, Core Web Vitals, cannibalization, and the gap between what you offer and what people search."
            },
            {
              step: "02",
              title: "Fix",
              body: "Structural problems before content ones. Crawl errors, speed, indexation, on-page cleanup, and internal linking fixed first."
            },
            {
              step: "03",
              title: "Build",
              body: "Topical authority mapped to real searches. Local and GBP signals. Content clusters that Google trusts."
            },
            {
              step: "04",
              title: "QA & Test",
              body: "Every fix verified. Technical issues resolved, content indexed, and rankings responding before moving forward."
            },
            {
              step: "05",
              title: "Report & Optimize",
              body: "Monthly rankings, traffic, and conversions explained. Strategy adjusts based on what's actually moving."
            }
          ],

          faqs: [
            {
              q: "How long does SEO take?",
              a: "Three to six months for meaningful movement, longer in competitive markets. Faster promises are lies."
            },
            {
              q: "Do you guarantee #1 rankings?",
              a: "No. Nobody can guarantee that. We guarantee a process that works: diagnose the problem, fix the foundation, build authority, and track results. The rankings follow."
            },
            {
              q: "Can you fix my site, or do I need a new one?",
              a: "Usually we can fix what you have. We're engineers who touch code — template fixes, redirects, schema, and performance improvements on your existing site."
            },
            {
              q: "Do you work outside major cities?",
              a: "Yes. Local SEO works the same everywhere. We rank businesses in specific communities, not just metro areas."
            }
          ],

          industries: [
            {
              id: "home-seo-all",
              title: "Home Services",
              icon: "Building2",
              headline: "Win the Near Me Map Pack in Your Service Area",
              description: "For plumbers, HVAC, roofers, and contractors, the next customer is three miles away searching right now. The map pack decides who gets the emergency call.",
              challenges: [
                "Service-area searches need hyperlocal optimization",
                "Emergency searches demand instant visibility",
                "Multiple services need distinct landing pages",
                "Competing against national directories"
              ],
              approach: "We optimize your GBP per service and city, build location landing pages that rank street by street, and create a review flow that builds trust for the emergency call at 9pm."
            },
            {
              id: "legal-seo-all",
              title: "Legal",
              icon: "Building2",
              headline: "Capture Clients Searching for Legal Help Nearby",
              description: "When someone needs a lawyer, they search 'divorce attorney near me.' The firms in the map pack with strong reviews and clear practice area pages get the consultation calls.",
              challenges: [
                "High-competition keywords with expensive CPCs",
                "Practice area pages that don't match intent",
                "Reviews that establish credibility",
                "Competing against directories like Avvo"
              ],
              approach: "We build practice area pages that rank, optimize GBP for legal categories, and develop review strategies that build authority without violating bar association rules."
            },
            {
              id: "restaurant-seo-all",
              title: "Restaurants",
              icon: "Building2",
              headline: "Win the Dinner Rush With Local Search Dominance",
              description: "Diners decide in seconds on their phones. The map pack with photos, hours, and reviews is the whole battlefield. The freshest, most active profile wins.",
              challenges: [
                "Hours, menus, and photos need constant updates",
                "Review recency matters more than total count",
                "Competing against delivery apps and aggregators",
                "Peak-time visibility that drives immediate visits"
              ],
              approach: "We keep your profile relentlessly current, build review velocity off each table turn, and optimize for the searches happening at 6pm two blocks away."
            },
            {
              id: "industrial-seo-all",
              title: "Industrial / B2B",
              icon: "Building2",
              headline: "Dominate Niche B2B Searches That Drive Big Contracts",
              description: "Industrial and B2B companies win on specialized searches. 'Custom CNC machining [city]' or 'industrial cleaning services near me' — these searches drive high-value contracts.",
              challenges: [
                "Specialized searches with low volume but high value",
                "Technical content that Google struggles to parse",
                "Long sales cycles that need content at every stage",
                "Competing against generalist agencies"
              ],
              approach: "We target the specific industrial searches that drive contracts, build technical content that Google understands, and create location pages for every facility you serve."
            },
            {
              id: "ecommerce-seo-all",
              title: "E-commerce & Retail",
              icon: "Building2",
              headline: "Product Pages That Rank and Convert",
              description: "E-commerce SEO needs both search visibility and conversion optimization. Product pages, category architecture, and schema that earn rich results.",
              challenges: [
                "Thousands of product pages competing for attention",
                "Thin descriptions that don't differentiate",
                "Category vs. product page cannibalization",
                "Schema that earns rich results"
              ],
              approach: "We build product pages that rank, optimize category architecture, deploy Product and Review schema, and create content that captures informational searches driving commercial intent."
            },
            {
              id: "professional-seo-all",
              title: "Professional Services",
              icon: "Building2",
              headline: "Establish Authority and Dominate Local Expertise Searches",
              description: "Law firms, consultancies, and agencies need SEO that establishes expertise. Service pages that rank, reviews that build trust, and content that demonstrates authority.",
              challenges: [
                "Service pages that don't match search intent",
                "Reviews that establish professional credibility",
                "Content that demonstrates expertise and authority",
                "Competing against directories and aggregators"
              ],
              approach: "We build service pages that rank for expertise searches, develop review systems that showcase credibility, and create content that positions you as the authority in your market."
            }
          ]
        }
      },
      { 
        id: "google-business-profile", 
        title: "Google Business Profile",
        description: "The highest-leverage asset a local business owns, and the one most often left half-finished. Profile optimization, review systems, and posting cadence that turn searches into calls.",
        serviceSection: {
          tag: "Service 06",
          title: "Google Business Profile",
          headline: "The Highest-Leverage Asset a Local Business Owns",
          description: "For a local business, your Google Business Profile does more work than your website. It's what shows in the map pack, carries your reviews, and what a customer judges before they ever click through.",
          solvesWhat: "Set up properly, it's a lead engine — calls, direction requests, and bookings with no ad spend. Left half-finished, it quietly hands every 'near me' search to a competitor who bothered.",
          features: [
            "Category Optimization — primary and secondary stacked",
            "Review Generation — systems that turn customers into reviews",
            "Weekly Posts & Q&A — active presence Google rewards",
            "NAP Consistency — profile agrees with citations and schema"
          ],
          images: [
            "/services/seo_1.webp"
          ],
          image: "/services/seo_1.webp",
          layout: "image-grid"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "The map pack is prime real estate, and your profile is the only thing that ranks in it",
            description: "When someone searches for what you sell plus a location, Google puts three businesses in a map pack at the top. Those three spots capture the majority of local clicks, calls, and direction taps. Your website doesn't rank there — your Google Business Profile does.",
            body: "Google leans on three things: relevance (does your profile say you do this service), distance (how close you are), and prominence (reviews, activity, consistency). You can't move your building, but relevance and prominence are entirely under your control.",
            highlight: "The profile is a live surface, not a set-and-forget listing. Categories, services, photos, posts, Q&A, and reviews are all ranking inputs — and they all decay. A profile claimed once and never touched loses ground every quarter."
          },
          intro: "For a local business, your Google Business Profile does more work than your website. It's the highest-leverage asset you own — and the one most often left half-finished while competitors who optimize it dominate the map pack.",

          included: [
            {
              label: "Categories & Services",
              detail: "Primary category chosen for your money service, full secondary-category stack from competitor analysis, itemized services with keyword-aware descriptions."
            },
            {
              label: "Reviews & Response",
              detail: "Review-generation systems wired into your workflow, response templates, and reputation monitoring. A steady flow of real reviews."
            },
            {
              label: "Photos & Media",
              detail: "Regular photo updates, product showcases, and media that keeps the profile active and visually compelling."
            },
            {
              label: "Posts & Q&A",
              detail: "Weekly Google Posts, Q&A seeding and monitoring, and activity that tells Google you're an active business."
            },
            {
              label: "NAP & Citations",
              detail: "Name, address, and phone consistent across the web. Profile agrees with your website schema and citations."
            },
            {
              label: "Insights & Reporting",
              detail: "Profile analytics tracked — calls, directions, clicks, and how people found you. Map-pack position monitored."
            }
          ],

          process: [
            {
              step: "01",
              title: "Audit",
              body: "Field-by-field profile audit, map-pack competitor benchmark, and citation NAP scan. We benchmark against the ones beating you."
            },
            {
              step: "02",
              title: "Prioritize",
              body: "Category and review fixes move the needle first. Photos and posts compound over time. Impact-ranked fix list."
            },
            {
              step: "03",
              title: "Execute",
              body: "Full profile optimization, review-generation system, and posting cadence set up. The machinery that keeps it fed."
            },
            {
              step: "04",
              title: "QA & Test",
              body: "Verify every field is live, reviews are flowing, posts are scheduled, and NAP is consistent across the web."
            },
            {
              step: "05",
              title: "Report & Optimize",
              body: "Profile insights tracking, map-pack position monitoring, and monthly reporting on calls, directions, and clicks."
            }
          ],

          faqs: [
            {
              q: "Isn't Google Business Profile free?",
              a: "The profile is free to claim. What isn't free is the work that makes it rank: category research, photo strategy, review systems, weekly posts, Q&A management, and NAP cleanup. Most businesses have the free listing and none of the work."
            },
            {
              q: "How fast do results show?",
              a: "Category and NAP fixes can move the map pack within weeks. Review velocity and post activity compound over 2-3 months. Most clients see measurable improvement in the first month."
            },
            {
              q: "Can you improve rankings without touching my website?",
              a: "Yes. Profile optimization alone can move you into the map pack. But profile + website schema + citations working together is what dominates long-term."
            },
            {
              q: "What about fake or negative reviews?",
              a: "We flag fake reviews for removal, respond to negative reviews professionally, and build a review flow that naturally dilutes negatives with genuine positive feedback."
            }
          ],

          industries: [
            {
              id: "restaurants-gbp",
              title: "Restaurants",
              icon: "Building2",
              headline: "Win the Dinner Rush With a Fresh, Active Profile",
              description: "Diners decide in seconds off photos, hours, and recent reviews. They're searching hungry, on a phone, right now. A stale menu or wrong holiday hours sends them next door.",
              challenges: [
                "Menus, hours, and reservation links need constant updates",
                "Review recency matters more than total count",
                "Photo freshness directly impacts click-through",
                "Competing against delivery apps and aggregators"
              ],
              approach: "We keep menus, photos, and hours current, wire in reservation and order links, and build a review flow off each table turn so recency stays high. In food, the freshest profile usually wins."
            },
            {
              id: "home-gbp",
              title: "Home Services",
              icon: "Building2",
              headline: "Be the First Name Google Shows When a Pipe Bursts",
              description: "Plumbers, electricians, and HVAC techs live or die by the map pack. When a pipe bursts at 2am, the first name Google shows gets the call. Profile optimization is survival.",
              challenges: [
                "Service-area setup that's often done wrong",
                "Emergency searches need instant trust signals",
                "Multiple services need proper categorization",
                "Reviews from jobs that are hard to get"
              ],
              approach: "We optimize your GBP for service areas, stack categories for every service you offer, and build a review system that turns completed jobs into consistent 5-star reviews."
            },
            {
              id: "medical-gbp",
              title: "Medical & Dental",
              icon: "Building2",
              headline: "New Patient Calls Start With Your Profile",
              description: "Patients choose providers based on proximity, reviews, and trust. A dental practice with 50+ five-star reviews and clear service categories gets the new patient calls.",
              challenges: [
                "Insurance and specialty categories need precise setup",
                "Patient reviews require sensitivity and compliance",
                "Provider profiles need individual optimization",
                "Competing against directories like Zocdoc"
              ],
              approach: "We set up precise medical categories, build a HIPAA-aware review system, and optimize provider profiles so your practice dominates local health searches."
            },
            {
              id: "retail-gbp",
              title: "Retail",
              icon: "Building2",
              headline: "Drive Foot Traffic With a Profile That Converts",
              description: "Physical stores need nearby customers walking through the door. A well-optimized GBP with product showcases, accurate hours, and strong reviews puts your store on the map.",
              challenges: [
                "Product inventory visibility in local search",
                "Store hours and holiday schedules that change often",
                "Competing against online retailers and chains",
                "Building local community presence"
              ],
              approach: "We optimize your GBP with product showcases, keep hours current, build review systems, and create a local presence that reinforces your community connection."
            },
            {
              id: "professional-gbp",
              title: "Professional Services",
              icon: "Building2",
              headline: "Dominate Local Searches for Your Expertise",
              description: "Law firms, consultancies, and agencies need their profile to communicate authority. The right categories, strong reviews, and active posts make you the obvious local choice.",
              challenges: [
                "Practice area categories need precise selection",
                "Professional reviews that establish credibility",
                "Service descriptions that match search queries",
                "Competing against directories like Avvo and Clutch"
              ],
              approach: "We select categories that match your highest-value services, build a review system that showcases expertise, and optimize service descriptions for the exact queries clients search."
            },
            {
              id: "multilocation-gbp",
              title: "Multi-Location Brands",
              icon: "Building2",
              headline: "Consistent Dominance Across Every Location",
              description: "Multi-location businesses need every profile optimized and maintained — same quality, same cadence, every location. One neglected location hurts the whole brand.",
              challenges: [
                "Keeping dozens or hundreds of profiles consistent",
                "Local content that doesn't feel templated",
                "Review management across all locations",
                "Brand consistency with local relevance"
              ],
              approach: "We manage every location's profile with the same optimization standards — categories, photos, posts, reviews, and NAP consistency — so every location ranks in its market."
            }
          ]
        }
      },
    ],
    layout: "image-grid",

    pageContent: {
      intro:
        "SEO is not a shortcut and it doesn't deliver results in two weeks. What it does — when executed correctly — is make your business discoverable by people who are actively searching for what you offer. We work on the technical foundation, the keyword strategy, and the content simultaneously, because addressing only one of the three doesn't move rankings.",

      included: [
        {
          label: "Technical SEO audit",
          detail:
            "A thorough review of crawl errors, page speed issues, duplicate content, broken links, missing metadata, and Core Web Vitals — delivered as a prioritized remediation list, not just a report.",
        },
        {
          label: "Keyword strategy",
          detail:
            "We research what your actual customers search for, map terms to pages, and target buyer-intent keywords rather than high-volume terms that attract irrelevant traffic.",
        },
        {
          label: "On-page optimization",
          detail:
            "Title tags, meta descriptions, heading structure, internal linking, image alt text, and schema markup — implemented systematically across every page.",
        },
        {
          label: "Content planning & production",
          detail:
            "A content calendar based on topics your target audience searches for, written to satisfy search intent and build topical authority over time.",
        },
        {
          label: "Monthly reporting",
          detail:
            "Ranking positions, organic traffic, and where possible, lead attribution — explained in plain language, not a 40-slide deck full of numbers without context.",
        },
      ],

      process: [
        {
          step: "01",
          title: "Site audit",
          body: "We crawl your entire site and identify every technical issue hindering rankings — in priority order, not just an alphabetical list of problems.",
        },
        {
          step: "02",
          title: "Keyword research",
          body: "We map your service area, competitors, and target audience to build a keyword list that reflects what actual buyers search — not just what has high search volume.",
        },
        {
          step: "03",
          title: "On-page fixes",
          body: "We implement optimizations across existing pages before adding any new content. The foundation has to be right first.",
        },
        {
          step: "04",
          title: "Content execution",
          body: "We plan and produce content targeting informational and commercial search intent in your category — written for humans, structured for search engines.",
        },
        {
          step: "05",
          title: "Monthly review & adjustment",
          body: "We track rankings, traffic, and leads each month. Strategy adjusts based on what's actually moving — not what was planned six months ago.",
        },
      ],

      internalLinks: [
        {
          text: "SEO compounds fastest when your site is technically solid from the start — if your current site has speed or structural problems, we often recommend",
          linkText: "Website Development",
          href: "/services/website-development",
          after: "work before or alongside the SEO.",
        },
        {
          text: "Organic search and",
          linkText: "Social Media Marketing",
          href: "/services/social-media",
          after:
            "serve different parts of the buyer journey — for many businesses we work with, running both simultaneously produces the fastest results.",
        },
      ],

      closingCta:
        "If you're not appearing on the first page for your main service keywords, or if you're getting traffic that doesn't convert, either of those is worth a conversation. Meaningful ranking movement typically happens within 3–6 months for competitive terms, faster for lower-competition local searches. We'll tell you upfront which category your targets fall into.",

      faqs: [
        {
          q: "How long before we see results?",
          a: "For local searches with low-to-medium competition, we typically see movement within 6–10 weeks. More competitive national keywords take 3–6 months. We'll tell you upfront which category your targets fall into — and we don't take on projects where the timeline expectation is unrealistic.",
        },
        {
          q: "Do we need to already have a website?",
          a: "Yes — SEO is applied to an existing site. If you don't have one, we'd start with Website Development and build the SEO foundation into the architecture from day one.",
        },
        {
          q: "What's included in monthly reporting?",
          a: "Keyword ranking movement, organic traffic (sessions, users), and where possible, lead or conversion attribution. Delivered as a clean summary — not a raw data export.",
        },
        {
          q: "Do you guarantee rankings?",
          a: "No. Any agency that guarantees specific rankings is misleading you — Google's algorithm is not something any agency controls. We guarantee the quality of the work and commit to transparent reporting on what's actually happening each month.",
        },
      ],
    },
  },

  {
    id: "social-media",
    tag: "Service 05",
    title: "Social Media Marketing",
    headline: "Strategic Social Media Management",
    description:
      "Strategic content creation, business social media management, and paid social media campaigns that build genuine audiences and drive measurable ROI.",
    solvesWhat:
      "Random posting with no strategy is just noise. We provide social media management that builds content systems to grow loyal audiences and turn followers into paying customers.",
    features: [
      "30-day content calendar tailored to your exact brand voice",
      "Platform-specific strategy: Instagram, TikTok, LinkedIn, X",
      "Paid ad campaigns with optimized ROAS and A/B testing",
      "Engagement growth + community management included",
    ],
    images: ["/services/social_1.webp"],
    image: "/services/social_1.webp",
    subServices: [
      {
        id: "facebook",
        title: "Facebook Marketing",
        description: "Full-funnel Facebook marketing management — organic content, paid ad campaigns, and community building that turns your page into a consistent lead generation engine.",
        serviceSection: {
          tag: "Social 01",
          title: "Facebook Marketing",
          headline: "Turn Your Facebook Page Into a Lead Generation Engine",
          description: "With over 3 billion monthly active users, Facebook remains the most powerful platform for targeted advertising and community building. We manage everything — from organic content to paid campaigns — with a single goal: measurable business results.",
          solvesWhat: "Most businesses waste their Facebook budget on boosted posts that reach the wrong people. We build data-driven campaigns with precise audience targeting, compelling creative, and conversion tracking that makes every rupee accountable.",
          features: [
            "Facebook Ads Management — targeted campaigns with proven ROAS",
            "Organic Content Strategy — posts that build trust and engagement",
            "Audience Targeting — custom, lookalike, and retargeting audiences",
            "Monthly Analytics Reporting — clear ROI, not vanity metrics"
          ],
          images: ["/services/social_1.webp"],
          image: "/services/social_1.webp",
          layout: "image-grid"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "Facebook is still the most powerful paid social platform on the planet",
            description: "Despite every prediction of its decline, Facebook's advertising infrastructure remains unmatched. The targeting depth, the scale, and the ability to build full-funnel campaigns from awareness to retargeting to conversion make it the backbone of paid social for most industries.",
            body: "The problem isn't the platform. It's how most businesses use it. Boosted posts with no targeting strategy. Ad creative that ignores the feed context. No retargeting for warm audiences. Campaigns measured by likes instead of leads. We fix the fundamentals and build campaigns that compound over time.",
            highlight: "We build Facebook marketing systems — not one-off campaigns. The goal is a self-improving engine where each month's data makes next month's results better."
          },
          intro: "Facebook marketing done right is a full-funnel system: awareness campaigns that reach the right cold audiences, engagement content that builds trust, and retargeting campaigns that close the deal. We manage the entire process — strategy, creative, targeting, testing, and reporting.",
          included: [
            {
              label: "Campaign Strategy",
              detail: "Full-funnel campaign architecture covering awareness, consideration, and conversion stages."
            },
            {
              label: "Audience Research & Targeting",
              detail: "Custom audiences from your customer data, lookalike expansion, and interest/behavior targeting layered for precision."
            },
            {
              label: "Ad Creative Production",
              detail: "Copy, static graphics, and carousel designs built for the Facebook feed — not repurposed from other channels."
            },
            {
              label: "A/B Testing",
              detail: "Systematic creative and audience testing so every iteration lowers your cost per result."
            },
            {
              label: "Retargeting Sequences",
              detail: "Warm audience retargeting for website visitors, video viewers, and page engagers — people who already know you."
            },
            {
              label: "Monthly Performance Reports",
              detail: "Reach, click-through rate, cost per lead, and ROAS — with plain-English analysis, not just a dashboard screenshot."
            }
          ],
          process: [
            {
              step: "01",
              title: "Audit & Strategy",
              body: "We review your existing page, ad account, and pixel setup — then build a campaign strategy aligned to your business goals."
            },
            {
              step: "02",
              title: "Audience & Creative Planning",
              body: "We define your audience segments and develop ad creative for each funnel stage before anything goes live."
            },
            {
              step: "03",
              title: "Campaign Launch",
              body: "Campaigns go live with conversion tracking verified, pixel firing confirmed, and baseline metrics established."
            },
            {
              step: "04",
              title: "Testing & Optimization",
              body: "Weekly creative rotation, audience refinement, and bid optimization based on real performance data."
            },
            {
              step: "05",
              title: "Reporting & Scale",
              body: "Monthly reports with clear insights. What worked, what didn't, and where we scale budget for maximum return."
            }
          ],
          faqs: [
            {
              q: "How much should I budget for Facebook ads?",
              a: "We typically recommend a minimum of $500/month ad spend to generate statistically meaningful data. We work with higher budgets to scale what's proven."
            },
            {
              q: "How long before I see results?",
              a: "Paid campaigns can generate leads within the first week if the offer and targeting are right. Building consistent organic reach takes 2–3 months of quality posting."
            },
            {
              q: "Do you manage the ad account or just advise?",
              a: "We manage everything — campaign setup, creative production, targeting, daily monitoring, and optimization. You get results, not a to-do list."
            }
          ],
          industries: [
            {
              id: "ecommerce-fb",
              title: "E-commerce",
              icon: "ShoppingCart",
              headline: "Facebook Ads That Fill Carts and Drive Revenue",
              description: "For online stores, Facebook's dynamic product ads and retargeting capabilities are unmatched — especially for recovering abandoned carts and reaching warm shoppers.",
              challenges: [
                "High cost-per-purchase eating into margins",
                "Cart abandonment that bleeds revenue",
                "Cold audiences that don't convert immediately",
                "Creative fatigue killing campaign performance"
              ],
              approach: "We build dynamic product ad campaigns, multi-stage retargeting sequences, and lookalike audiences built from your best buyers — so your Facebook spend drives measurable revenue."
            },
            {
              id: "professional-fb",
              title: "Professional Services",
              icon: "Building2",
              headline: "Lead Generation for Service-Based Businesses",
              description: "Law firms, agencies, consultants, and local service businesses can consistently generate qualified leads through Facebook with the right campaign structure.",
              challenges: [
                "Generating quality leads, not just clicks",
                "Educating cold audiences about complex services",
                "Standing out in a crowded professional services space",
                "Tracking leads through to closed deals"
              ],
              approach: "We build lead generation campaigns with Facebook Lead Forms or landing page funnels, targeted at high-intent demographics, with messaging designed to qualify before they click."
            },
            {
              id: "hospitality-fb",
              title: "Hospitality & Events",
              icon: "Hotel",
              headline: "Fill Tables, Rooms, and Event Seats",
              description: "Restaurants, hotels, and event businesses benefit enormously from Facebook's local targeting and event promotion capabilities.",
              challenges: [
                "Reaching local audiences with relevant offers",
                "Promoting limited-time events and specials",
                "Building brand awareness in a competitive local market",
                "Driving direct bookings without OTA commissions"
              ],
              approach: "We use Facebook's local awareness and event promotion formats, combined with retargeting for past visitors, to drive direct bookings and fill seats consistently."
            },
            {
              id: "healthcare-fb",
              title: "Healthcare & Wellness",
              icon: "Heart",
              headline: "Compliant Patient Acquisition Campaigns",
              description: "Healthcare providers need patient-focused Facebook campaigns that build trust, educate, and drive appointment bookings — all within platform compliance guidelines.",
              challenges: [
                "Strict Facebook advertising policies for health content",
                "Building trust with cautious potential patients",
                "HIPAA compliance in retargeting and data handling",
                "Educating patients about services they didn't know they needed"
              ],
              approach: "We build compliant healthcare Facebook campaigns focused on education and trust signals — using content-first strategies that nurture patients from awareness to appointment booking."
            }
          ]
        }
      },
      {
        id: "instagram",
        title: "Instagram Marketing",
        description: "Strategic Instagram management and advertising that builds an engaged following, establishes brand authority, and drives direct business results through organic content and paid campaigns.",
        serviceSection: {
          tag: "Social 02",
          title: "Instagram Marketing",
          headline: "Build an Instagram Presence That Actually Converts",
          description: "Instagram is where brands are built and products are sold. With the right content strategy, posting cadence, and ad campaigns, Instagram becomes a consistent revenue channel — not just a branding exercise.",
          solvesWhat: "Posting pretty pictures isn't a strategy. We build Instagram systems with content pillars, Reels optimization, Stories sequences, and shopping integrations that turn your following into customers.",
          features: [
            "Content Strategy — feed, Reels, and Stories built for your audience",
            "Reels Production — algorithm-optimized short-form video content",
            "Instagram Ads — reach, engagement, and conversion campaigns",
            "Growth Strategy — organic follower acquisition with real accounts"
          ],
          images: ["/services/social_1.webp"],
          image: "/services/social_1.webp",
          layout: "image-grid"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "Instagram is where purchase decisions are made for most consumer categories",
            description: "70% of shoppers turn to Instagram for product discovery. For lifestyle, fashion, food, fitness, and service businesses, Instagram isn't optional — it's where your audience decides if you're worth their money.",
            body: "But a beautiful feed alone doesn't drive revenue. The accounts that convert have a content strategy behind every post: content pillars that balance value and promotion, Reels that hit the algorithm's distribution triggers, and Stories sequences that move followers down a buying journey. Without that architecture, you're posting into the void.",
            highlight: "We build Instagram accounts that grow and convert. The goal isn't a high follower count — it's a high-quality following that buys what you sell."
          },
          intro: "We manage Instagram as a business asset, not a portfolio piece. Every post, Reel, and Story is planned with a specific goal — building trust, driving discovery, or moving warm followers toward a purchase or inquiry.",
          included: [
            {
              label: "Content Pillars & Calendar",
              detail: "A defined content framework covering education, entertainment, social proof, and promotion — planned 30 days in advance."
            },
            {
              label: "Reels Production",
              detail: "Short-form video scripts, hooks, and editing optimized for the Reels algorithm and your specific audience."
            },
            {
              label: "Feed Design & Aesthetics",
              detail: "A consistent visual language for feed posts that makes your profile instantly recognizable and premium."
            },
            {
              label: "Stories Strategy",
              detail: "Daily Stories content including polls, Q&As, countdown timers, and link-based conversion sequences."
            },
            {
              label: "Instagram Ads",
              detail: "Reach, engagement, and conversion campaigns with creative built specifically for the Instagram ad format."
            },
            {
              label: "Hashtag & SEO Strategy",
              detail: "Instagram SEO with keyword-optimized captions and hashtag research to maximize organic discovery."
            }
          ],
          process: [
            {
              step: "01",
              title: "Profile Audit & Strategy",
              body: "We audit your existing account, competitor landscape, and define the content pillars and brand voice for your Instagram."
            },
            {
              step: "02",
              title: "Content Calendar",
              body: "The first 30-day calendar is produced and approved before any posting begins — including Reels scripts and feed designs."
            },
            {
              step: "03",
              title: "Content Production",
              body: "We create all graphics, copy, and Reels according to the approved calendar."
            },
            {
              step: "04",
              title: "Publishing & Engagement",
              body: "We post at optimal times, manage comments, respond to DMs, and engage with relevant accounts on your behalf."
            },
            {
              step: "05",
              title: "Analytics & Iteration",
              body: "Monthly performance review covering reach, engagement rate, follower growth, and Reels performance — with strategy adjustments for month two."
            }
          ],
          faqs: [
            {
              q: "How fast will my follower count grow?",
              a: "Growth depends on your niche, existing following, and content quality. Realistic organic growth with good content is 300–1000 new followers per month. We focus on quality followers who match your target customer."
            },
            {
              q: "Do you produce the Reels or do I film them?",
              a: "Ideally you film the footage and we handle scripting, editing, captions, and posting. For clients who can't film regularly, we develop a content strategy that maximizes graphic and carousels."
            },
            {
              q: "Will Instagram marketing work for a B2B business?",
              a: "Yes, but differently. LinkedIn is often better for direct B2B lead generation. Instagram works well for B2B brand building, employer branding, and industries where buyers research on Instagram before making decisions."
            }
          ],
          industries: [
            {
              id: "fashion-ig",
              title: "Fashion & Lifestyle",
              icon: "ShoppingCart",
              headline: "Instagram as Your Primary Sales Channel",
              description: "Fashion, beauty, and lifestyle brands live on Instagram. The right Reels strategy and shopping integration turns your profile into a storefront that sells 24/7.",
              challenges: [
                "Standing out in a visually saturated feed",
                "Converting followers into buyers",
                "Maintaining consistent aesthetic across a growing catalog",
                "Managing influencer partnerships and UGC"
              ],
              approach: "We build shoppable Instagram profiles with Reels hooks that stop the scroll, product showcasing that drives direct purchases, and UGC strategies that build social proof at scale."
            },
            {
              id: "food-ig",
              title: "Food & Beverage",
              icon: "Hotel",
              headline: "Make Them Hungry. Make Them Come In.",
              description: "Restaurants, cafes, and food brands drive foot traffic and delivery orders through Instagram better than almost any other channel.",
              challenges: [
                "Capturing food aesthetics that make audiences hungry",
                "Consistent content without professional photography budgets",
                "Converting Instagram engagement into reservations",
                "Managing local discovery and location tagging"
              ],
              approach: "We create visually compelling food content with filming guides for your team, editorial-quality editing, and local geo-targeting to drive hungry followers to your door."
            },
            {
              id: "fitness-ig",
              title: "Fitness & Wellness",
              icon: "Heart",
              headline: "Build a Following That Joins, Not Just Watches",
              description: "Personal trainers, gyms, and wellness brands have found Instagram to be the most effective channel for client acquisition — when the content strategy is built right.",
              challenges: [
                "Competing with massive fitness influencers",
                "Converting followers into paying clients or members",
                "Demonstrating expertise through content",
                "Maintaining content output consistently"
              ],
              approach: "We build fitness Instagram strategies around transformation content, educational Reels that demonstrate expertise, and community-building tactics that convert followers into clients."
            },
            {
              id: "professional-ig",
              title: "Professional Services",
              icon: "Building2",
              headline: "Build Authority Before the Sales Call",
              description: "Lawyers, consultants, coaches, and agencies can use Instagram to establish thought leadership and warm up prospects before they ever reach out.",
              challenges: [
                "Making professional services visually engaging",
                "Building trust and credibility through content",
                "Generating qualified inquiries through DMs",
                "Maintaining brand professionalism on a casual platform"
              ],
              approach: "We develop thought leadership content strategies for professional services — carousels that demonstrate expertise, testimonial Reels, and story-based content that warm up leads before the sales call."
            }
          ]
        }
      },
      {
        id: "youtube",
        title: "YouTube Marketing",
        description: "YouTube channel management and video SEO that builds a long-term content asset — evergreen videos that rank in search, grow your subscriber base, and generate qualified leads for years.",
        serviceSection: {
          tag: "Social 03",
          title: "YouTube Marketing",
          headline: "Build a YouTube Channel That Works While You Sleep",
          description: "YouTube is the world's second-largest search engine. Unlike every other social platform, YouTube content compounds — a well-optimized video keeps generating views and leads for years after it's posted.",
          solvesWhat: "Most businesses treat YouTube as a place to upload and forget. We treat it as a search engine — with keyword research, optimized metadata, strong thumbnails, and retention-focused editing that drives real subscriber growth.",
          features: [
            "YouTube SEO — keyword research and metadata optimization",
            "Channel Strategy — content pillars that drive subscribers and leads",
            "Thumbnail & Title Optimization — built for click-through rate",
            "Video Editing — retention-optimized editing for watch time"
          ],
          images: ["/services/social_1.webp"],
          image: "/services/social_1.webp",
          layout: "image-grid"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "YouTube is the only social platform where content appreciates in value over time",
            description: "A well-optimized YouTube video keeps ranking, keeps getting found, and keeps generating leads for two, three, even five years. No other social platform gives you that. Instagram Reels from last month are invisible. A YouTube video with 10,000 views is still climbing.",
            body: "YouTube is also where the buyer does their deepest research. Before making a significant purchase or hiring a service provider, people watch videos. They want to see how the product works, how the team thinks, what other customers experienced. A YouTube channel gives you the chance to answer those questions and build trust before the first conversation.",
            highlight: "We treat your YouTube channel as a long-term business asset — building a content library that generates compounding traffic and leads with every video added."
          },
          intro: "We manage YouTube channels as search assets — building content strategies based on what your target audience is actually searching for, then producing, optimizing, and publishing videos that rank and retain viewers through to the subscribe button and the call to action.",
          included: [
            {
              label: "YouTube SEO & Keyword Research",
              detail: "Video keyword research using YouTube's search data to identify high-opportunity topics your audience is searching for."
            },
            {
              label: "Channel Strategy & Content Calendar",
              detail: "A structured content plan covering educational, product, and trust-building video types across your content pillars."
            },
            {
              label: "Video Editing",
              detail: "Retention-focused editing with hooks, B-roll, text overlays, and pacing optimized for YouTube's watch-time algorithm."
            },
            {
              label: "Thumbnail & Title Production",
              detail: "Custom thumbnails and A/B tested titles designed to maximize click-through rate in search and browse features."
            },
            {
              label: "Description & Metadata Optimization",
              detail: "Keyword-rich descriptions, chapters, tags, and cards configured to maximize search visibility."
            },
            {
              label: "Analytics & Iteration",
              detail: "Monthly performance review covering views, watch time, subscriber growth, and CTR — with strategy adjustments based on what YouTube's algorithm is rewarding."
            }
          ],
          process: [
            {
              step: "01",
              title: "Channel Audit & Strategy",
              body: "We audit your existing channel, analyze competitor channels, and build a content strategy based on what your audience is searching for."
            },
            {
              step: "02",
              title: "Content Calendar",
              body: "We develop a 90-day content calendar with video topics, target keywords, and production schedules."
            },
            {
              step: "03",
              title: "Production & Editing",
              body: "You film, we handle scripting guidance, editing, thumbnail production, and metadata optimization."
            },
            {
              step: "04",
              title: "Upload & Optimization",
              body: "Every video is uploaded with optimized title, description, tags, chapters, end screens, and cards."
            },
            {
              step: "05",
              title: "Performance Review",
              body: "Monthly analytics review with content decisions based on which videos are gaining traction and what adjustments improve performance."
            }
          ],
          faqs: [
            {
              q: "How long until my YouTube channel starts generating results?",
              a: "YouTube SEO typically takes 3–6 months to gain meaningful traction. Channels that build a consistent library of well-optimized videos start seeing compounding growth after 6 months. The earlier you start, the more valuable the asset."
            },
            {
              q: "Do you film the videos or just edit them?",
              a: "We handle editing, optimization, and publishing. You film the footage. We provide filming guidance, scripts, and direction so the raw footage is easy to edit into a polished final video."
            },
            {
              q: "Is YouTube worth it for a small business?",
              a: "For businesses where buyers do research before buying — professional services, SaaS, healthcare, education — YouTube is one of the best long-term investments. A library of 20 well-optimized videos generates traffic and leads indefinitely."
            }
          ],
          industries: [
            {
              id: "saas-yt",
              title: "SaaS & Tech",
              icon: "Cpu",
              headline: "Product Tutorials That Reduce Churn and Drive Signups",
              description: "SaaS companies use YouTube to reduce support load, demonstrate features, and rank for product-comparison keywords that capture buyers at the bottom of the funnel.",
              challenges: [
                "Explaining complex software in an engaging way",
                "Ranking for high-intent comparison keywords",
                "Reducing support tickets with tutorial content",
                "Building trust before free trial signup"
              ],
              approach: "We develop SaaS YouTube channels focused on product tutorials, comparison content, and use-case demonstrations — optimized for the keywords buyers search right before they choose a tool."
            },
            {
              id: "professional-yt",
              title: "Professional Services",
              icon: "Building2",
              headline: "Position Yourself as the Expert Before the Pitch",
              description: "Lawyers, consultants, coaches, and agencies use YouTube to demonstrate deep expertise — building trust with prospects who research extensively before buying.",
              challenges: [
                "Demonstrating expertise without giving everything away free",
                "Building a consistent content output around a busy schedule",
                "Ranking for niche professional service keywords",
                "Converting viewers into consultation inquiries"
              ],
              approach: "We build professional service YouTube strategies around FAQ videos, case study walkthroughs, and educational content — designed to rank for 'how do I...' searches from your ideal clients."
            },
            {
              id: "ecommerce-yt",
              title: "E-commerce",
              icon: "ShoppingCart",
              headline: "Product Videos That Rank in Search and Drive Sales",
              description: "YouTube product reviews, unboxings, and how-to videos are among the highest-converting content formats for e-commerce — and they compound in value over time.",
              challenges: [
                "Competing against large brand channels",
                "Producing product content at scale",
                "Ranking for product-related keywords",
                "Driving viewers from YouTube to purchase"
              ],
              approach: "We develop e-commerce YouTube content strategies around product demonstrations, honest reviews, and how-to content — optimized to rank and drive direct traffic to product pages."
            },
            {
              id: "education-yt",
              title: "Education & Coaching",
              icon: "Building2",
              headline: "Free Content That Fills Your Paid Programs",
              description: "Educators, coaches, and course creators use YouTube as their primary lead generation channel — free value content that builds an audience that buys premium offers.",
              challenges: [
                "Deciding what to give free vs. keep gated",
                "Building a subscriber base that trusts you enough to buy",
                "Monetizing YouTube beyond ad revenue",
                "Competing with established educators in your niche"
              ],
              approach: "We develop educational YouTube content strategies that give genuine value while strategically positioning paid offers — building audiences that convert to students, clients, and community members."
            }
          ]
        }
      },
      {
        id: "linkedin",
        title: "LinkedIn Marketing",
        description: "LinkedIn organic content and paid campaigns that build professional authority, generate B2B leads, and position your business as the go-to expert in your industry.",
        serviceSection: {
          tag: "Social 04",
          title: "LinkedIn Marketing",
          headline: "The B2B Lead Generation Platform Most Companies Use Wrong",
          description: "LinkedIn is the single most powerful platform for reaching decision-makers. But most company pages are graveyards of press releases and corporate updates that nobody engages with. We build LinkedIn presence that generates real pipeline.",
          solvesWhat: "A LinkedIn page with 200 followers and zero engagement is invisible. We develop personal brand strategies for founders, thought leadership content for company pages, and paid campaigns that reach B2B decision-makers with precision.",
          features: [
            "Personal Brand Strategy — founder content that builds authority",
            "Company Page Management — content that generates followers and leads",
            "LinkedIn Ads — Sponsored Content, Message Ads, Lead Gen Forms",
            "Outreach Sequences — targeted connection and nurture campaigns"
          ],
          images: ["/services/social_1.webp"],
          image: "/services/social_1.webp",
          layout: "image-grid"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "LinkedIn is the only platform where your audience is actively in work mode",
            description: "When someone is on LinkedIn, they're thinking about business. They're looking for solutions to work problems, researching vendors, and making professional decisions. That's a fundamentally different mindset from someone scrolling Instagram or Facebook.",
            body: "LinkedIn's targeting capabilities are also unmatched for B2B: job title, seniority level, company size, industry, geography. You can reach the CFO of a 200-person SaaS company in a specific city. No other platform gives you that precision. The problem is most businesses run LinkedIn like a press release channel and wonder why nobody cares.",
            highlight: "We treat LinkedIn as a relationship-building machine — content that positions you as a trusted expert, campaigns that reach exactly the right decision-makers, and outreach that starts conversations that become contracts."
          },
          intro: "We manage LinkedIn as a B2B pipeline engine — building founder personal brands, managing company pages with content that generates real engagement, and running paid campaigns that reach decision-makers at the exact companies you want to work with.",
          included: [
            {
              label: "Personal Brand Strategy",
              detail: "Founder and executive LinkedIn profiles optimized for search, with a content strategy that builds authority and generates inbound leads."
            },
            {
              label: "Company Page Management",
              detail: "Consistent posting cadence on your company page with content designed to grow followers and generate engagement from your target audience."
            },
            {
              label: "Thought Leadership Content",
              detail: "Long-form articles, carousels, and insight posts that demonstrate expertise and get shared in your professional community."
            },
            {
              label: "LinkedIn Ads",
              detail: "Sponsored Content, Message Ads, and Lead Gen Form campaigns with precise job-title and company-size targeting."
            },
            {
              label: "Lead Generation",
              detail: "Connection request sequences, nurture messaging, and content engagement strategies that move prospects into your pipeline."
            },
            {
              label: "Analytics & ROI Tracking",
              detail: "Monthly reporting on impressions, engagement rate, follower growth, lead form completions, and ad performance."
            }
          ],
          process: [
            {
              step: "01",
              title: "Profile & Page Audit",
              body: "We optimize your personal profile and company page for LinkedIn SEO — headline, summary, featured content, and all visible sections."
            },
            {
              step: "02",
              title: "Content Strategy",
              body: "We develop your content pillars, posting schedule, and content formats based on what performs in your industry on LinkedIn."
            },
            {
              step: "03",
              title: "Content Production",
              body: "We write posts, design carousels, and develop long-form articles — all in your voice, approved before publishing."
            },
            {
              step: "04",
              title: "Publishing & Engagement",
              body: "We post at optimal times and manage comment responses to maximize reach through LinkedIn's engagement algorithm."
            },
            {
              step: "05",
              title: "Lead Nurturing & Reporting",
              body: "We track what's driving profile visits, connection requests, and inbound messages — and refine the strategy based on pipeline data."
            }
          ],
          faqs: [
            {
              q: "Should we focus on the company page or personal profiles?",
              a: "Both, but if you have to pick one, personal profiles outperform company pages significantly on LinkedIn. Founder-led content generates 3–5x the reach and engagement. We recommend a combined approach."
            },
            {
              q: "How does LinkedIn advertising compare to Google or Meta?",
              a: "LinkedIn ads are more expensive per click but the targeting precision for B2B audiences is unmatched. For reaching senior decision-makers at specific companies, LinkedIn often delivers a lower cost per qualified lead than any other platform."
            },
            {
              q: "How long does it take to build LinkedIn traction?",
              a: "Consistent quality content typically starts gaining meaningful engagement within 60–90 days. Founder accounts with authentic personal content tend to grow faster than company pages."
            }
          ],
          industries: [
            {
              id: "saas-linkedin",
              title: "SaaS & Tech",
              icon: "Cpu",
              headline: "Reach the Buyers Who Sign Enterprise Contracts",
              description: "SaaS companies use LinkedIn to reach CTOs, VPs of Engineering, and department heads who make software buying decisions for their entire organization.",
              challenges: [
                "Reaching decision-makers, not just end users",
                "Building trust with risk-averse enterprise buyers",
                "Demonstrating product value through content",
                "Nurturing long B2B sales cycles"
              ],
              approach: "We build LinkedIn strategies targeting the exact job titles in your ICP — thought leadership content that builds category authority and paid campaigns that keep your brand visible throughout the long enterprise sales cycle."
            },
            {
              id: "consulting-linkedin",
              title: "Consulting & Professional Services",
              icon: "Building2",
              headline: "Position Your Expertise. Generate Inbound Inquiries.",
              description: "Consultants and professional service firms can generate a consistent flow of qualified inbound inquiries through a disciplined LinkedIn content and outreach strategy.",
              challenges: [
                "Standing out in a crowded professional services market",
                "Generating consistent inbound leads",
                "Demonstrating expertise without giving everything away",
                "Building authority before the prospect reaches out"
              ],
              approach: "We develop personal brand strategies for consulting partners and firm founders — insight-driven content that demonstrates expertise and positions them as the obvious choice when prospects are ready to hire."
            },
            {
              id: "recruitment-linkedin",
              title: "Recruiting & HR",
              icon: "Building2",
              headline: "Build the Talent Pipeline Before You Need It",
              description: "Recruiting firms and HR departments use LinkedIn to build employer brand, attract passive candidates, and establish authority in talent acquisition.",
              challenges: [
                "Attracting passive candidates who aren't actively job searching",
                "Building employer brand that makes top talent want to work with you",
                "Standing out from competitor recruiting firms",
                "Demonstrating cultural fit through content"
              ],
              approach: "We build LinkedIn recruiting strategies that showcase company culture, employee stories, and hiring manager content — creating a talent brand that attracts candidates before they're even looking."
            },
            {
              id: "finance-linkedin",
              title: "Finance & Investment",
              icon: "Building2",
              headline: "Build Trust With High-Net-Worth Decision Makers",
              description: "Financial advisors, investment firms, and fintech companies use LinkedIn to build relationships with high-net-worth individuals and institutional decision-makers.",
              challenges: [
                "Strict regulatory compliance in financial content",
                "Building trust with highly skeptical audiences",
                "Demonstrating expertise without specific investment advice",
                "Reaching the right wealth tier and decision-maker type"
              ],
              approach: "We develop compliance-reviewed LinkedIn content strategies for financial services — market commentary, educational content, and thought leadership that builds trust and generates qualified inquiries."
            }
          ]
        }
      }
    ],
    layout: "image-grid",

    pageContent: {
      intro:
        "Social media produces results when there's a real strategy behind it — a clear understanding of who you're talking to, what they respond to, and what you want them to do next. Random posting, even consistent random posting, doesn't build an audience that buys. A structured content system does. We build the system and run it.",

      included: [
        {
          label: "30-day content calendar",
          detail:
            "Every post planned in advance, aligned to your brand voice and business goals. No last-minute decisions about what to post today.",
        },
        {
          label: "Platform-specific strategy",
          detail:
            "We don't post the same thing everywhere. Instagram, TikTok, LinkedIn, and X each have different formats, algorithms, and audience behaviors — we write and design for each separately.",
        },
        {
          label: "Content creation",
          detail:
            "Copywriting, graphics, and where video is already produced, editing for platform format. We don't just schedule what you send us — we produce the content.",
        },
        {
          label: "Paid advertising",
          detail:
            "Meta and TikTok ad campaigns with defined budgets, A/B tested creatives, and ROAS tracking — managed and optimized monthly, not set-and-forget.",
        },
        {
          label: "Community management",
          detail:
            "Comment replies, DM responses, and engagement with relevant accounts — handled consistently. Not done once a week when someone remembers.",
        },
      ],

      process: [
        {
          step: "01",
          title: "Brand & audience audit",
          body: "We review your existing channels, what's working, who's engaging, and what competitors are doing that you're not. This determines the strategy.",
        },
        {
          step: "02",
          title: "Strategy document",
          body: "A written plan covering platform selection, content pillars, posting frequency, and paid campaign structure. You approve it before anything goes live.",
        },
        {
          step: "03",
          title: "Content production",
          body: "The first month's content is fully produced and approved before any scheduling begins. No scrambling mid-month.",
        },
        {
          step: "04",
          title: "Publishing & management",
          body: "We schedule, post, and manage community engagement on your behalf. You stay informed without being involved in every decision.",
        },
        {
          step: "05",
          title: "Monthly reporting",
          body: "Reach, engagement rate, follower growth, and paid campaign performance — with clear takeaways, not just numbers on a page.",
        },
      ],

      internalLinks: [
        {
          text: "Consistent social content performs significantly better when there's quality video behind it — for most clients, our",
          linkText: "Video Editing & Production",
          href: "/services/video-editing",
          after:
            "and social media work run as a single workflow rather than separate projects.",
        },
        {
          text: "If your brand identity isn't defined, content looks inconsistent from post to post —",
          linkText: "Branding & Identity",
          href: "/services/branding-identity",
          after: "typically resolves this before we start production.",
        },
      ],

      closingCta:
        "The right time to invest in social media management is when you know it matters for your business but you're not doing it consistently — because there's no time, no clear strategy, or both. We take it off your plate entirely. Let's start with a strategy call and build the plan before we talk retainer.",

      faqs: [
        {
          q: "Which platforms do you manage?",
          a: "Instagram, Facebook, TikTok, LinkedIn, and X. We'll recommend which ones to prioritize based on your industry and target audience — not all businesses need to be active on every platform, and spreading thin usually produces worse results than going deep on two.",
        },
        {
          q: "How many posts per month are included?",
          a: "This depends on the package, but a typical setup is 15–20 posts per month per platform. Frequency is agreed in the strategy document before month one — we don't commit to a number that compromises quality.",
        },
        {
          q: "Do you create the graphics and videos, or do we provide them?",
          a: "We create static graphics and carousel designs. For video content, we can edit footage you provide, or coordinate with our Video Editing team to produce it — the latter gives consistently better results.",
        },
        {
          q: "What results should we expect, and when?",
          a: "Organic growth is gradual — meaningful audience growth typically takes 3–4 months of consistent, quality posting. Paid campaigns can generate results in the first week if your offer and targeting are right.",
        },
      ],
    },
  },

  {
    id: "video-editing",
    tag: "Service 06",
    title: "Video Editing & Production",
    headline: "Stories That Resonate. Brands That Endure.",
    description:
      "From raw footage to cinematic masterpieces — we produce compelling video content that captivates audiences and establishes your brand as a market authority.",
    solvesWhat:
      "Subpar video erodes credibility within the first 2 seconds. Cinematic content builds brands that audiences remember and trust.",
    features: [
      "Reels & short-form videos optimized for algorithm reach",
      "Brand films + ad creatives engineered to convert on first viewing",
      "Professional color grading, sound design, and motion graphics",
      "Rapid delivery — raw footage to polished cut in under 72 hours",
    ],
    images: ["/services/video_2.webp"],
    image: "/services/video_2.webp",
    subServices: [
      { 
        id: "short-form-content", 
        title: "Short-form Content",
        description: "Reels, TikToks, and YouTube Shorts edited for algorithm reach — hooks that stop the scroll, pacing that retains, and captions that drive engagement.",
        serviceSection: {
          tag: "Service 01",
          title: "Short-form Content",
          headline: "Scroll-Stopping Reels, TikToks & Shorts",
          description: "Short-form video is the highest-reach format on every platform — but only if the edit holds attention past the first 1.5 seconds. We edit Reels, TikToks, and YouTube Shorts with hooks, pacing, and captions engineered for algorithm performance, not just aesthetics.",
          solvesWhat: "You're posting consistently but the views aren't growing. The problem isn't frequency — it's that the edit doesn't reward the scroll. We fix the hook, the pacing, and the structure so the algorithm has something to work with.",
          features: [
            "Hook-first editing — first frame earns the next 3 seconds",
            "Platform-native pacing for Reels, TikTok & Shorts",
            "Burnt-in captions and text overlays for sound-off viewing",
            "Trending audio integration and format adaptation"
          ],
          images: [
            "/services/video_2.webp"
          ],
          image: "/services/video_2.webp",
          layout: "image-grid"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "The algorithm rewards retention — and retention starts in the edit",
            description: "Every platform ranks video by watch time and completion rate. A weak hook loses 60% of viewers in the first 2 seconds. The difference between 500 views and 50,000 is usually not the topic — it's the edit.",
            body: "Short-form content isn't just 'cutting a long video shorter.' It's a different skill: front-loading the payoff, pacing cuts to attention spans, using text to reinforce the message for sound-off viewers, and designing loops that make people watch twice. Most businesses treat it as an afterthought and get afterthought results.",
            highlight: "We treat every Reel like a micro-ad — because that's exactly what it is. The edit has to earn attention, deliver value, and create a reason to follow, all in under 60 seconds."
          },
          intro: "Short-form video is the highest-reach content format on Instagram, TikTok, and YouTube — but only if the edit actually holds attention. We produce Reels, TikToks, and YouTube Shorts with hooks, pacing, captions, and structure designed to perform, not just look polished.",

          included: [
            {
              label: "Hook-First Editing",
              detail: "The first frame earns the next 3 seconds. We front-load the most compelling visual or statement so the scroll stops before the algorithm moves on."
            },
            {
              label: "Platform-Native Pacing",
              detail: "Each platform has its own rhythm. Reels want fast cuts and visual variety. TikTok rewards raw energy. Shorts need a clear payoff. We edit for each."
            },
            {
              label: "Burnt-In Captions",
              detail: "85% of social video is watched without sound. We add styled captions that reinforce the message and keep viewers watching."
            },
            {
              label: "Trending Audio & Formats",
              detail: "We integrate trending sounds and format templates — not as copycats, but as frameworks that the algorithm already favors."
            },
            {
              label: "Thumbnail & Cover Design",
              detail: "Custom cover images that look good on your grid and entice clicks when the video appears in search or explore."
            },
            {
              label: "Multi-Format Export",
              detail: "Every edit delivered in 9:16 (Reels/TikTok), 1:1 (feed), and 16:9 (YouTube Shorts) — so you can post everywhere without re-editing."
            }
          ],

          process: [
            {
              step: "01",
              title: "Content Strategy",
              body: "We review your existing content, audience data, and competitor accounts to identify what formats and hooks are performing in your niche right now."
            },
            {
              step: "02",
              title: "Footage Selection",
              body: "We review everything you've captured and select the strongest clips — or flag what needs reshooting before the edit begins."
            },
            {
              step: "03",
              title: "First Cut",
              body: "A rough edit with the hook, pacing, and structure locked — so you can see the shape before we go into captions, color, and fine detail."
            },
            {
              step: "04",
              title: "Revisions",
              body: "One round of structural revisions and one round of fine-cut revisions — both included. We refine until the hook hits and the pacing holds."
            },
            {
              step: "05",
              title: "Final Delivery",
              body: "Exported in all required aspect ratios — 9:16, 1:1, 16:9 — with captions, covers, and platform-specific metadata. Ready to post."
            }
          ],

          faqs: [
            {
              q: "How many Reels/TikToks can you produce per month?",
              a: "Depends on the package. Typically 8–20 short-form videos per month on a retainer. Single projects are also welcome — we'll scope a batch of 5–10 to start."
            },
            {
              q: "Do we need to shoot the footage ourselves?",
              b: "Most clients send phone footage or screen recordings — that's enough. If you need help with shot lists or filming direction, we provide that too."
            },
            {
              q: "What's the turnaround time?",
              a: "48–72 hours from receiving footage for a batch of 3–5 videos. Rush delivery available for time-sensitive content."
            },
            {
              q: "Can you match our existing brand style?",
              a: "Yes. We create a style template — fonts, colors, caption style, transitions — and apply it consistently across every video so your content is instantly recognizable."
            }
          ],

          industries: [
            {
              id: "ecommerce-shorts",
              title: "E-commerce & DTC",
              icon: "Building2",
              headline: "Turn Products Into Scroll-Stopping Content",
              description: "E-commerce brands need volume — product showcases, unboxings, testimonials, and trend-reactive content posted daily. Short-form editing turns raw clips into consistent, brand-aligned content.",
              challenges: [
                "High volume of product clips needing consistent editing",
                "Trend-reactive content that needs fast turnaround",
                "Sound-off viewing that demands captions",
                "Multiple platforms requiring different aspect ratios"
              ],
              approach: "We edit your product footage into platform-optimized Reels and TikToks — with hooks, captions, and pacing designed to drive clicks to your store, not just views."
            },
            {
              id: "fitness-shorts",
              title: "Fitness & Wellness",
              icon: "Building2",
              headline: "Turn Workouts Into Viral Content",
              description: "Fitness professionals have endless raw footage — training sessions, transformations, tips. Short-form editing turns that into content that builds audience and attracts clients.",
              challenges: [
                "Raw training footage that needs energy and pacing",
                "Before/after transformations that need visual impact",
                "Educational tips that need to be punchy and clear",
                "Consistent posting schedule across platforms"
              ],
              approach: "We edit your training footage into high-energy Reels and TikToks — with dramatic pacing, text overlays for tips, and hooks that stop the scroll mid-workout."
            },
            {
              id: "food-shorts",
              title: "Food & Hospitality",
              icon: "Building2",
              headline: "Make Every Dish Look Irresistible",
              description: "Restaurants and food brands have the most visually appealing raw material — but phone clips of plating and cooking need professional editing to match the quality of the food.",
              challenges: [
                "Raw kitchen and plating footage needing visual polish",
                "Menu items that need to look irresistible in 15 seconds",
                "Seasonal content with tight publishing windows",
                "Competing with food influencers for attention"
              ],
              approach: "We edit your kitchen and plating footage into mouth-watering Reels — with color grading that makes food pop, pacing that builds anticipation, and hooks that make viewers save the post."
            },
            {
              id: "realestate-shorts",
              title: "Real Estate",
              icon: "Building2",
              headline: "Turn Property Tours Into Listing Magnets",
              description: "Real estate agents have walkthrough footage of every listing — but raw phone tours don't compete with the polished content that gets engagement and inquiries.",
              challenges: [
                "Walkthrough footage that feels flat without editing",
                "Properties that need to feel aspirational, not just documented",
                "Neighborhood and lifestyle content for local reach",
                "Consistent posting across multiple listings"
              ],
              approach: "We edit your property walkthroughs into cinematic mini-tours — with smooth transitions, music, text overlays for key features, and hooks that make buyers stop scrolling."
            },
            {
              id: "education-shorts",
              title: "Education & Coaching",
              icon: "Building2",
              headline: "Turn Expertise Into Platform Authority",
              description: "Educators and coaches have knowledge that performs well in short-form — but long lectures don't translate to Reels without skilled editing and restructuring.",
              challenges: [
                "Long-form teaching content that needs distilling",
                "Complex topics that need visual simplification",
                "Building authority through consistent content",
                "Engaging students who scroll past lectures"
              ],
              approach: "We edit your teaching content into bite-sized Reels — with clear hooks, text overlays for key points, and pacing that respects the viewer's time while delivering real value."
            },
            {
              id: "personalbrand-shorts",
              title: "Personal Brands & Creators",
              icon: "Building2",
              headline: "Scale Your Content Without Scaling Your Time",
              description: "Creators and personal brands need volume — but editing every clip yourself isn't sustainable. Professional short-form editing lets you post consistently without burning out.",
              challenges: [
                "Content backlog that never gets edited",
                "Inconsistent posting due to editing time",
                "Need for distinctive, recognizable editing style",
                "Multiple platforms demanding different formats"
              ],
              approach: "We become your editing team — handling your backlog, establishing a consistent style, and delivering platform-ready content so you can focus on creating, not editing."
            }
          ]
        }
      },
      { 
        id: "brand-films", 
        title: "Brand Films",
        description: "Cinematic brand story videos that position your company as the authority — for websites, investor decks, launch campaigns, and anywhere first impressions matter.",
        serviceSection: {
          tag: "Service 02",
          title: "Brand Films",
          headline: "Cinematic Brand Stories That Position You as the Authority",
          description: "A brand film isn't a longer Reel — it's a different product entirely. It's the video on your homepage that makes a visitor understand who you are, what you do, and why you're the right choice, all in under 90 seconds. We produce and edit brand films that earn trust before the sales conversation starts.",
          solvesWhat: "Your website has no video, or the video is a generic template that could be any company. Prospects leave without understanding what makes you different. A brand film fixes that.",
          features: [
            "Scripted narratives that clarify your positioning",
            "Cinematic production quality — broadcast-grade color and sound",
            "Structured for websites, investor decks, and launch campaigns",
            "Multiple cuts — hero version, social cut, and silent version"
          ],
          images: [
            "/services/video_3.webp"
          ],
          image: "/services/video_3.webp",
          layout: "image-grid"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "Your homepage video is your first handshake — and most companies don't have one",
            description: "80% of website visitors will watch a video if it's above the fold. But most company websites either have no video, or a stock template that says nothing specific. The result is a homepage that explains nothing and converts nobody.",
            body: "A brand film does what text and images can't: it lets a prospect hear your voice, see your team, understand your process, and feel your confidence — all in the time it takes to scroll once. The companies that invest in this asset outperform those that don't, because the video does the说服 work before a sales call ever happens.",
            highlight: "A brand film isn't a cost — it's the highest-ROI asset on your website. It works 24/7, converts without a salesperson, and pays for itself with a single new client."
          },
          intro: "A brand film is the video that lives on your homepage, your pitch deck, and your launch campaign — the one piece of content that makes everyone understand who you are in under 90 seconds. We produce and edit brand films that earn trust before the sales conversation starts.",

          included: [
            {
              label: "Script & Storyboard",
              detail: "We write the narrative and map every shot before production — so the final film has structure, not just pretty footage."
            },
            {
              label: "Cinematic Production",
              detail: "Professional camera work, lighting, and audio — broadcast-grade quality that reflects the standard you want to be associated with."
            },
            {
              label: "Color Grading",
              detail: "A deliberate color treatment that matches your brand palette and creates a cinematic look — not just auto-correction."
            },
            {
              label: "Sound Design & Music",
              detail: "Licensed music, ambient sound, and voiceover integration — the audio does half the emotional work."
            },
            {
              label: "Motion Graphics & Titles",
              detail: "Animated text, lower thirds, and data visualizations where the story benefits from visual reinforcement."
            },
            {
              label: "Multi-Cut Delivery",
              detail: "Hero version (60–90s), social cut (30s), and silent version with captions — so one production serves every channel."
            }
          ],

          process: [
            {
              step: "01",
              title: "Discovery & Script",
              body: "We interview your team, understand your positioning, and write a script that tells the story you need told — not the generic one every competitor could use."
            },
            {
              step: "02",
              title: "Pre-Production",
              body: "Storyboard, shot list, location scout, and scheduling. Every detail planned so the shoot day is efficient and the footage serves the edit."
            },
            {
              step: "03",
              title: "Production",
              body: "Professional shoot with the right crew, equipment, and direction. We capture everything the edit needs — and nothing we don't."
            },
            {
              step: "04",
              title: "Post-Production",
              body: "Rough cut, fine cut, color grading, sound design, and motion graphics. Two rounds of revisions included."
            },
            {
              step: "05",
              title: "Delivery",
              body: "Exported in 4K for web, social-optimized cuts, and silent captions version. Full resolution files and compressed versions for every use case."
            }
          ],

          faqs: [
            {
              q: "Do we need a script, or do you write it?",
              a: "We write it. Our process starts with a discovery call where we extract your positioning, key messages, and tone — then we craft a script that serves the business goal, not just the visuals."
            },
            {
              q: "How long should a brand film be?",
              a: "60–90 seconds for a homepage hero. 30 seconds for social. 2–3 minutes for pitch decks or about pages. We produce one master cut and derive multiple lengths from it."
            },
            {
              q: "What if we don't have a location that looks cinematic?",
              a: "We've filmed in offices, warehouses, and co-working spaces that don't look like much in person — but look great on camera with the right lighting, angles, and color grading. Location is less important than you think."
            },
            {
              q: "How long from start to delivery?",
              a: "Typically 3–4 weeks from discovery call to final delivery. Rush production is available for launch deadlines."
            }
          ],

          industries: [
            {
              id: "saas-brand",
              title: "SaaS & Tech",
              icon: "Building2",
              headline: "Show What the Product Does — Not Just What It Looks Like",
              description: "SaaS companies need to explain complex products quickly. A brand film combines product demos, team footage, and customer outcomes into a narrative that makes the value obvious.",
              challenges: [
                "Complex products that need visual explanation",
                "Competing in a market where every tool looks the same",
                "Investor decks that need a compelling overview video",
                "Homepage that converts without a sales call"
              ],
              approach: "We produce brand films that combine screen captures, product walkthroughs, and team footage into a narrative that shows the product in action and explains why it wins."
            },
            {
              id: "healthcare-brand",
              title: "Healthcare",
              icon: "Building2",
              headline: "Build Patient Trust Before They Walk In",
              description: "Healthcare providers need to convey competence, warmth, and modern standards. A brand film introduces your facility, your team, and your approach — reducing patient anxiety before the first appointment.",
              challenges: [
                "Patients choosing providers based on online presence",
                "Complex services that need human explanation",
                "Regulatory sensitivity around medical claims",
                "Competing with larger hospital systems"
              ],
              approach: "We produce healthcare brand films that showcase your facility, introduce your team, and explain your approach in warm, accessible language — building trust before the first visit."
            },
            {
              id: "finance-brand",
              title: "Finance & Professional Services",
              icon: "Building2",
              headline: "Communicate Trust, Expertise, and Stability",
              description: "Financial firms and professional services sell trust. A brand film communicates expertise, stability, and the human side of the firm — differentiating you from competitors who look identical online.",
              challenges: [
                "Communicating intangible values like trust and expertise",
                "Differentiating from visually identical competitors",
                "Regulatory constraints on marketing claims",
                "Appealing to high-value clients who research thoroughly"
              ],
              approach: "We produce brand films that combine team interviews, client testimonials, and professional environments into a narrative that communicates the trust and expertise your clients need to see."
            },
            {
              id: "realestate-brand",
              title: "Real Estate",
              icon: "Building2",
              headline: "Position Your Agency as the Premium Choice",
              description: "Real estate agencies compete on perception as much as listings. A brand film showcases your team, your market knowledge, and your approach — setting the tone before a single property is shown.",
              challenges: [
                "Competing with hundreds of agencies in the same market",
                "Need for premium perception that justifies commission",
                "Showcasing market expertise, not just listings",
                "Attracting both buyers and sellers"
              ],
              approach: "We produce real estate brand films that showcase your team's expertise, your market knowledge, and your approach to client service — positioning you as the premium choice."
            },
            {
              id: "hospitality-brand",
              title: "Hospitality & Travel",
              icon: "Building2",
              headline: "Sell the Experience, Not Just the Room",
              description: "Hotels, resorts, and travel brands sell experiences. A brand film captures the atmosphere, the service, and the feeling of being there — converting browsers into bookers.",
              challenges: [
                "Competing with platforms that commoditize listings",
                "Conveying atmosphere through a screen",
                "Differentiating from similar properties",
                "Driving direct bookings over platform bookings"
              ],
              approach: "We produce hospitality brand films that capture the atmosphere, the service details, and the guest experience — converting website visitors into direct bookings."
            },
            {
              id: "manufacturing-brand",
              title: "Manufacturing & Industrial",
              icon: "Building2",
              headline: "Show the Scale, Precision, and Quality Behind the Product",
              description: "Manufacturing companies have impressive operations that most prospects never see. A brand film reveals the facility, the process, and the standards — building confidence in your capabilities.",
              challenges: [
                "Complex operations that are hard to explain in text",
                "B2B buyers who vet suppliers thoroughly",
                "Competing with overseas alternatives on quality perception",
                "Trade shows and investor presentations that need video"
              ],
              approach: "We produce manufacturing brand films that showcase your facility, your quality standards, and your team — giving B2B buyers the confidence to choose you over cheaper alternatives."
            }
          ]
        }
      },
      { 
        id: "ad-creatives", 
        title: "Ad Creatives",
        description: "Performance video ads engineered to convert — opening hook, offer presentation, and clear CTA built into the edit for Facebook, Instagram, YouTube, and TikTok.",
        serviceSection: {
          tag: "Service 03",
          title: "Ad Creatives",
          headline: "Video Ads Built to Convert, Not Just Impress",
          description: "A pretty video ad that doesn't convert is an expensive mistake. We build performance video ads where the hook earns attention, the middle delivers the offer, and the CTA drives the action — all structured for the platforms where your audience actually watches.",
          solvesWhat: "Your ad spend is going to video that gets views but not clicks. The creative isn't aligned with the offer, the hook doesn't stop the scroll, or the CTA is buried. We fix the structure so the ad does its job.",
          features: [
            "Hook-first opening — earns the next 3 seconds of attention",
            "Offer-focused narrative — not just brand awareness",
            "CTA engineered into the edit, not added as an afterthought",
            "Platform-specific versions for Facebook, Instagram, YouTube & TikTok"
          ],
          images: [
            "/services/video_4.webp"
          ],
          image: "/services/video_4.webp",
          layout: "image-grid"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "Most video ads get views. Fewer get clicks. Almost none get sales.",
            description: "The difference between an ad that burns budget and one that generates revenue is the creative structure. Hook, narrative, offer, CTA — in that order, each one earned. Skip a step and the ad underperforms.",
            body: "A video ad is not a brand film. It's a direct-response asset with a single job: get the viewer to take the next action. The edit has to earn attention in 1.5 seconds, deliver the value proposition in 10, and make the CTA obvious in 30. Most ads fail because they're structured like brand content — pretty but purposeless.",
            highlight: "Every frame of a performance ad either earns attention, delivers the offer, or drives the CTA. If it does none of those, it's wasting the viewer's time and your budget."
          },
          intro: "Performance video ads are direct-response assets — not brand content. We build video ads for Facebook, Instagram, YouTube, and TikTok with hook-first openings, offer-focused narratives, and CTAs engineered into the edit. The result is creative that converts, not just impresses.",

          included: [
            {
              label: "Hook-First Opening",
              detail: "The first 1.5 seconds earn the next 3. We test multiple hook variations — question, bold claim, visual disruption — and structure the opening to match what your audience responds to."
            },
            {
              label: "Offer Narrative",
              detail: "The middle of the ad delivers the value proposition — problem, solution, proof — in a structure that builds toward the CTA, not away from it."
            },
            {
              label: "CTA Integration",
              detail: "The call-to-action isn't tacked on — it's woven into the narrative. The viewer knows exactly what to do by the time the CTA appears."
            },
            {
              label: "Platform-Specific Versions",
              detail: "Facebook feed, Instagram Stories, YouTube pre-roll, TikTok in-feed — each platform has different specs, attention patterns, and ad formats. We optimize for each."
            },
            {
              label: "A/B Test Variations",
              detail: "Multiple versions of the hook, the pacing, and the CTA — so your media team can test what converts best and allocate spend accordingly."
            },
            {
              label: "Retargeting Cuts",
              detail: "Shorter, more aggressive versions for retargeting audiences who've already seen the first ad — keeping the funnel moving without repeating the same creative."
            }
          ],

          process: [
            {
              step: "01",
              title: "Offer & Audience Analysis",
              body: "We understand your offer, your audience, and your funnel — what you're selling, who you're selling to, and what the ad needs to accomplish at each stage."
            },
            {
              step: "02",
              title: "Creative Strategy",
              body: "Hook concepts, narrative structure, and CTA approach. We plan what the ad will say, how it will say it, and which version goes where."
            },
            {
              step: "03",
              title: "Production & Edit",
              body: "We edit the footage (or coordinate a shoot) into a performance-structured ad — hook, narrative, CTA — with platform specs applied from the start."
            },
            {
              step: "04",
              title: "Test Variations",
              body: "Multiple versions — different hooks, different CTAs, different pacing — so your media team has creative to test and optimize against."
            },
            {
              step: "05",
              title: "Delivery & Optimization",
              body: "All files delivered in platform-ready specs. We review performance data and suggest creative adjustments based on what the numbers show."
            }
          ],

          faqs: [
            {
              q: "What's the difference between an ad creative and a regular video?",
              a: "A regular video can be anything — brand content, education, entertainment. A performance ad has a single job: drive a specific action. The structure is different — hook, offer, CTA — and every frame serves that objective."
            },
            {
              q: "How many variations should we test?",
              a: "We typically deliver 3–5 hook variations and 2–3 CTA variations. That gives your media team enough creative to test without overwhelming the campaign."
            },
            {
              q: "Do you handle the media buying too?",
              a: "We focus on creative. If you need media buying, we can recommend partners or work with your existing team. The ad creative and the ad placement are separate disciplines."
            },
            {
              q: "What's the turnaround time?",
              a: "1–2 weeks from creative strategy to first delivery. Rush production available for launch campaigns — we can deliver in 5 business days."
            }
          ],

          industries: [
            {
              id: "ecommerce-ads",
              title: "E-commerce & DTC",
              icon: "Building2",
              headline: "Turn Ad Spend Into Revenue, Not Just Traffic",
              description: "E-commerce brands spend heavily on video ads — but most creative gets views without conversions. Performance ad editing structures the narrative around the purchase decision, not just the product.",
              challenges: [
                "High ad spend with low return on creative",
                "Creative fatigue — audiences seeing the same ad too many times",
                "Multiple products needing different ad angles",
                "Platform-specific specs that eat production time"
              ],
              approach: "We produce e-commerce ad creatives structured around the purchase decision — hook, product showcase, social proof, CTA — with variations for A/B testing and retargeting."
            },
            {
              id: "saas-ads",
              title: "SaaS & Tech",
              icon: "Building2",
              headline: "Explain the Product, Then Drive the Demo Request",
              description: "SaaS video ads need to explain a complex product quickly and drive a specific action — sign up, book a demo, start a trial. The edit has to balance explanation with conversion.",
              challenges: [
                "Complex products that need visual explanation in 30 seconds",
                "Long sales cycles that need different creative per funnel stage",
                "Technical audiences that skip generic ads",
                "Competing with free trials and freemium offers"
              ],
              approach: "We produce SaaS ad creatives that explain the product in the first 10 seconds, demonstrate value in the next 15, and drive the CTA in the final 5 — structured for each funnel stage."
            },
            {
              id: "healthcare-ads",
              title: "Healthcare & Clinics",
              icon: "Building2",
              headline: "Attract Patients With Confidence, Not Clickbait",
              description: "Healthcare ads need to convey expertise and trust while driving appointment bookings. The creative has to work within regulatory constraints while still being compelling.",
              challenges: [
                "Regulatory constraints on medical claims",
                "Need for trust and authority, not hype",
                "Driving appointment bookings, not just awareness",
                "Competing with larger health systems"
              ],
              approach: "We produce healthcare ad creatives that showcase your expertise, introduce your team, and drive appointment bookings — all within regulatory guidelines."
            },
            {
              id: "education-ads",
              title: "Education & Online Courses",
              icon: "Building2",
              headline: "Turn Course Content Into Enrollment Engines",
              description: "Education businesses need to demonstrate value quickly and drive enrollment. Video ads that show the transformation — before and after — convert better than feature lists.",
              challenges: [
                "Long courses that need to be summarized in 30 seconds",
                "Price objections that need value justification",
                "Competing with free content on YouTube",
                "Driving enrollment, not just interest"
              ],
              approach: "We produce education ad creatives that showcase the transformation, demonstrate the teaching quality, and drive enrollment — structured to overcome price objections in the edit."
            },
            {
              id: "local-ads",
              title: "Local Services",
              icon: "Building2",
              headline: "Turn Your Service Into the Obvious Choice",
              description: "Local businesses — clinics, gyms, salons, restaurants — need ads that drive foot traffic and bookings. The creative has to feel local, authentic, and trustworthy.",
              challenges: [
                "Competing with national brands on local ad platforms",
                "Need for authentic, not overproduced, feel",
                "Driving calls, bookings, and walk-ins",
                "Limited ad budget that needs maximum impact"
              ],
              approach: "We produce local service ads that feel authentic and trustworthy — showcasing your location, your team, and your expertise to drive calls and bookings."
            },
            {
              id: "travel-ads",
              title: "Travel & Lifestyle",
              icon: "Building2",
              headline: "Sell the Feeling, Not Just the Destination",
              description: "Travel and lifestyle brands sell experiences and emotions. Video ads need to capture the feeling of being there — converting aspiration into booking.",
              challenges: [
                "Selling experiences that are hard to convey in 30 seconds",
                "Seasonal content with tight publishing windows",
                "Competing with user-generated content on the same platforms",
                "Driving direct bookings over platform bookings"
              ],
              approach: "We produce travel and lifestyle ad creatives that capture the atmosphere, the experience, and the emotion — converting aspiration into direct bookings."
            }
          ]
        }
      },
      { 
        id: "motion-graphics", 
        title: "Motion Graphics",
        description: "Animated videos, explainer animations, logo reveals, and infographic videos — turning complex ideas into visual stories that hold attention and drive understanding.",
        serviceSection: {
          tag: "Service 04",
          title: "Motion Graphics",
          headline: "Animated Videos That Make Complex Ideas Instantly Clear",
          description: "Some ideas are too complex for live video. A SaaS product workflow, a financial model, a medical process — these need animation to be understood. We produce motion graphics videos that turn abstract concepts into visual stories that hold attention and drive comprehension.",
          solvesWhat: "Your product, process, or idea is hard to explain with words and talking heads alone. Prospects don't understand what you do, or they get lost in the details. Motion graphics make the complex simple.",
          features: [
            "Explainer videos — product, service, or concept walkthroughs",
            "Animated infographics — data and processes visualized",
            "Logo reveals and brand animations",
            "Whiteboard and 2D animation styles"
          ],
          images: [
            "/services/video_1.webp"
          ],
          image: "/services/video_1.webp",
          layout: "image-grid"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "If they can't understand it, they can't buy it",
            description: "Every business has something that's hard to explain with words alone — a product workflow, a data model, a process that spans multiple steps. When prospects don't understand what you do, they move on to someone they do understand.",
            body: "Motion graphics solve the comprehension problem. Animation can show a process unfolding, data visualizing, and concepts connecting in ways that live video and text simply can't. The result is content that educates, persuades, and converts — because the viewer finally gets it.",
            highlight: "The best explainer video isn't the one that looks the most impressive — it's the one where the viewer says 'I get it' at the end. That's what drives the next step."
          },
          intro: "Some ideas need animation to be understood. We produce motion graphics videos — explainer animations, animated infographics, logo reveals, and concept walkthroughs — that turn complex ideas into visual stories your audience actually remembers.",

          included: [
            {
              label: "Explainer Videos",
              detail: "Product, service, or concept walkthroughs — animated to show how something works, why it matters, and what to do next. 60–120 seconds, structured for clarity."
            },
            {
              label: "Animated Infographics",
              detail: "Data, statistics, and processes visualized as animation — turning dry numbers into visual stories that hold attention and drive understanding."
            },
            {
              label: "Logo Reveals & Brand Animations",
              detail: "Animated logo intros, transitions, and brand elements for videos, presentations, and social content — consistent visual identity across every touchpoint."
            },
            {
              label: "Whiteboard Animation",
              detail: "Hand-drawn style animation where concepts build on screen — effective for educational content, pitches, and step-by-step explanations."
            },
            {
              label: "2D Character Animation",
              detail: "Animated characters and scenes that add personality to your message — effective for brands that need warmth and approachability."
            },
            {
              label: "UI & Product Animation",
              detail: "Animated product demos, app walkthroughs, and feature showcases — showing the interface in motion without building a demo."
            }
          ],

          process: [
            {
              step: "01",
              title: "Concept & Script",
              body: "We define the story, the key messages, and the visual approach. Animation starts with a clear script — the visuals serve the narrative, not the other way around."
            },
            {
              step: "02",
              title: "Storyboard & Style",
              body: "We map every scene visually — what the viewer sees at each moment — and lock the visual style before production begins. No surprises."
            },
            {
              step: "03",
              title: "Animation Production",
              body: "Scene-by-scene animation with voiceover, music, and sound design. We build in stages so you can review the structure before we invest in full production."
            },
            {
              step: "04",
              title: "Revisions",
              body: "One round of structural revisions and one round of fine-cut revisions — both included. We refine until the message is clear and the animation is polished."
            },
            {
              step: "05",
              title: "Final Delivery",
              body: "Exported in 4K, 1080p, and social-optimized versions. Source files available if you need to update the content later."
            }
          ],

          faqs: [
            {
              q: "What's the difference between motion graphics and animation?",
              a: "Motion graphics is a subset of animation — typically data visualization, text animation, and abstract visuals. Character animation and storytelling are broader animation styles. We handle both."
            },
            {
              q: "How long should an explainer video be?",
              a: "60–90 seconds is the sweet spot. Under 60 seconds feels rushed for complex topics. Over 2 minutes loses attention. We structure scripts to deliver maximum value in minimum time."
            },
            {
              q: "Do you write the script, or do we need to provide it?",
              a: "We write it. Our process starts with understanding your message, then crafting a script that's clear, concise, and structured for animation. You review and approve before production begins."
            },
            {
              q: "What if we need to update the video later?",
              a: "We deliver source files for all projects. If you need to update data, change a scene, or add a new section, we can do that without starting from scratch."
            }
          ],

          industries: [
            {
              id: "saas-motion",
              title: "SaaS & Tech",
              icon: "Building2",
              headline: "Show How the Product Works Without Building a Demo",
              description: "SaaS products have complex workflows that are hard to explain with screenshots. Animation shows the product in action — features, integrations, and value — without building a demo.",
              challenges: [
                "Complex products that need visual explanation",
                "Features that are hard to capture with screen recording",
                "Need for consistent brand animation across channels",
                "Investor and stakeholder presentations that need polish"
              ],
              approach: "We produce SaaS explainer animations that show the product workflow, highlight key features, and demonstrate integrations — giving prospects the 'aha' moment without a sales call."
            },
            {
              id: "finance-motion",
              title: "Finance & Fintech",
              icon: "Building2",
              headline: "Make Financial Concepts Visual and Accessible",
              description: "Financial products and services are inherently complex. Animation can show data flows, explain investment concepts, and visualize financial models in ways that text and talking heads can't.",
              challenges: [
                "Complex financial concepts that need visual simplification",
                "Regulatory constraints on visual claims",
                "Need for professional, trustworthy animation style",
                "Data-heavy content that needs visual storytelling"
              ],
              approach: "We produce fintech and financial explainer animations that visualize data, explain concepts, and build trust — with a style that communicates professionalism and clarity."
            },
            {
              id: "healthcare-motion",
              title: "Healthcare & MedTech",
              icon: "Building2",
              headline: "Explain Medical Concepts Patients Can Understand",
              description: "Healthcare providers and medtech companies need to explain complex medical concepts to patients and stakeholders. Animation makes the clinical accessible without losing accuracy.",
              challenges: [
                "Medical concepts that need visual simplification",
                "Patient education that needs to be clear and accurate",
                "Regulatory sensitivity around medical animation",
                "Need for clinical accuracy with visual accessibility"
              ],
              approach: "We produce medical explainer animations that visualize procedures, explain conditions, and demonstrate devices — accurate, accessible, and designed for patient comprehension."
            },
            {
              id: "education-motion",
              title: "Education & E-learning",
              icon: "Building2",
              headline: "Turn Curriculum Into Engaging Visual Content",
              description: "Educational content benefits enormously from animation — visual learners retain more, complex topics become accessible, and engagement increases when content moves.",
              challenges: [
                "Dense curriculum that needs visual simplification",
                "Different learning styles needing different visual approaches",
                "Need for consistent animation across a course or program",
                "Engagement challenges with text-heavy content"
              ],
              approach: "We produce educational animations that visualize concepts, illustrate processes, and engage different learning styles — turning curriculum into content students actually watch."
            },
            {
              id: "startup-motion",
              title: "Startups & Fundraising",
              icon: "Building2",
              headline: "Pitch Your Vision With Visual Clarity",
              description: "Startups need to explain their vision, market, and product quickly — to investors, partners, and early customers. A well-produced explainer video does in 90 seconds what a pitch deck takes 20 minutes to cover.",
              challenges: [
                "Complex visions that need immediate clarity",
                "Investor presentations that need compelling video",
                "Explaining market opportunity without a 40-slide deck",
                "Building brand perception from zero"
              ],
              approach: "We produce startup explainer animations that distill your vision, product, and market opportunity into a 90-second video — giving investors and partners the clarity to move forward."
            },
            {
              id: "agency-motion",
              title: "Marketing Agencies",
              icon: "Building2",
              headline: "Add Motion Graphics to Your Client Deliverables",
              description: "Agencies need motion graphics for client campaigns — social content, explainer videos, and ad creatives that go beyond static. We produce animation that fits your client's brand and your campaign strategy.",
              challenges: [
                "Multiple client brands needing different animation styles",
                "Tight campaign deadlines requiring fast turnaround",
                "Need for consistent quality across diverse projects",
                "Scaling production without scaling internal team"
              ],
              approach: "We produce motion graphics for agency clients — matching each brand's style, meeting campaign deadlines, and delivering production-quality animation without the overhead of in-house animators."
            }
          ]
        }
      },
    ],
    layout: "image-grid",

    pageContent: {
      intro:
        "Most businesses produce underwhelming video for one of two reasons: either the editing is unprofessional, or the content lacks structure — it appears as raw footage rather than a cohesive narrative. We address both. Whether you're filming independently or we're coordinating the production, the outcome is video that genuinely holds attention beyond the initial three seconds.",

      included: [
        {
          label: "Short-form content",
          detail:
            "Reels, TikToks, and YouTube Shorts — edited for platform algorithms, with captions, pacing, and hooks designed to retain viewers, not merely generate an initial click.",
        },
        {
          label: "Brand films",
          detail:
            "Longer-format content for your website, investor presentations, or launch campaigns — scripted, structured, and produced to broadcast standards.",
        },
        {
          label: "Ad creatives",
          detail:
            "Video ads built to convert — opening hook, offer presentation, and clear CTA engineered into the edit, not appended as an afterthought.",
        },
        {
          label: "Professional color grading",
          detail:
            "A genuine color treatment on every deliverable — not just auto-correct. Consistent aesthetic across all content within the same campaign.",
        },
        {
          label: "Sound design",
          detail:
            "Licensed music, sound effects, and audio cleanup — no amateur-quality audio in anything we deliver.",
        },
        {
          label: "Motion graphics",
          detail:
            "Lower thirds, title cards, logo reveals, and animated infographics where the narrative benefits from them.",
        },
      ],

      notIncluded:
        "On-location filming is not included by default — we edit footage you provide. If you need a full production (camera crew, director, location management), we can coordinate that as a separate scope.",

      process: [
        {
          step: "01",
          title: "Brief",
          body: "We agree on purpose, target audience, platform, tone, and reference videos before touching the timeline. Clarity here saves significant time later.",
        },
        {
          step: "02",
          title: "Footage review",
          body: "We review everything you've captured and flag anything that needs a reshoot before we begin. Better to know this at the start than after the edit is done.",
        },
        {
          step: "03",
          title: "First cut",
          body: "A rough edit with the full structure — so you can see the shape and pacing of the piece before we go into color, sound, and fine detail.",
        },
        {
          step: "04",
          title: "Revisions",
          body: "One round of structural revisions, one round of fine-cut revisions — both included in every project.",
        },
        {
          step: "05",
          title: "Final delivery",
          body: "Exported in the format your platform needs. Multiple aspect ratios (16:9, 9:16, 1:1) if required — at no extra charge.",
        },
      ],

      internalLinks: [
        {
          text: "Video performs best when there's a distribution plan behind it — our",
          linkText: "Social Media Marketing",
          href: "/services/social-media",
          after:
            "team and video team often work from the same brief, so editing decisions serve the actual posting strategy.",
        },
        {
          text: "For client-facing brand films, having a finalized",
          linkText: "brand identity",
          href: "/services/branding-identity",
          after:
            "means the visual treatment, colors, and fonts in the video are consistent with everything else the client encounters.",
        },
      ],

      closingCta:
        "If you have footage on a hard drive that hasn't been edited, or you're producing content regularly but the quality isn't where it needs to be — send us a sample and let's discuss what a better output looks like. Turnaround on most short-form edits is 48–72 hours from receiving footage.",

      faqs: [
        {
          q: "Do you shoot video, or only edit?",
          a: "Primarily editing. We work with footage you provide. For projects that need full production, we can coordinate a shoot — budget and timeline for that are scoped separately from the editing work.",
        },
        {
          q: "What's the turnaround time?",
          a: "Short-form content (Reels, TikToks): 48–72 hours from receiving footage. Brand films and longer content: 5–7 business days for the first cut. Rush delivery is available at an additional cost.",
        },
        {
          q: "What format should we send footage in?",
          a: "We accept anything — phone footage, DSLR, mirrorless, drone. Higher quality input produces better output, but we work with what you have. Files can be sent via Google Drive or WeTransfer.",
        },
        {
          q: "Can you handle ongoing monthly video production?",
          a: "Yes. We run monthly retainers for regular social content — typically 8–20 short-form videos per month depending on the package. Larger campaigns and brand films are scoped per project.",
        },
      ],
    },
  },

  {
    id: "ai-automation",
    tag: "Service 07",
    title: "AI & Automation",
    headline: "Intelligent Automation Solutions",
    description:
      "Bespoke AI models and business automation services that eliminate repetitive tasks, reduce operational costs, and scale your output without expanding your team.",
    solvesWhat:
      "Your team wastes hours on tasks a machine could accomplish in seconds. We automate the routine work so your best people concentrate on what genuinely grows the business.",
    features: [
      "Chatbot development resolving 80% of support tickets",
      "Workflow automation reducing operational costs by 40%+",
      "AI-powered content & report generation at scale",
      "Custom model training on your proprietary business data",
    ],
    images: ["/services/ai_1.webp"],
    image: "/services/ai_1.webp",
    subServices: [
      { 
        id: "ai-development", 
        title: "AI Development",
        description: "Production AI software you can bet a business on — LLM applications, RAG systems, custom models, and agents engineered like the software they are.",
        serviceSection: {
          tag: "Service 01",
          title: "AI Development",
          headline: "Production AI Software You Can Bet a Business On",
          description: "Most 'AI solutions' work exactly once, on the happy path, in a controlled demo. We build the other kind: LLM applications, RAG systems, and agents engineered with data pipelines, evaluation, guardrails, and real deployment.",
          solvesWhat: "The demo is the easy 20%. Production is the 80% nobody shows you. We engineer the distance between a good demo and dependable AI that earns its place in your product.",
          features: [
            "LLM Applications — chatbots, copilots, and agents",
            "RAG & Retrieval — grounded in your actual data",
            "Evaluation & Guardrails — quality you can measure",
            "Production Deployment — monitored, scalable, affordable"
          ],
          images: [
            "/services/ai_1.webp"
          ],
          image: "/services/ai_1.webp",
          layout: "image-grid"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "The demo is the easy 20%. Production is the 80% nobody shows you",
            description: "Wiring an LLM to a prompt and getting a good answer takes an afternoon. That's the part everyone can do now. The hard part is everything after: grounding the model in your data, evaluating outputs, adding guardrails, and deploying at real volume.",
            body: "A model that's right 85% of the time is a great demo and a liability in production. The 15% is where the lawsuit, the wrong medical summary, or the hallucinated refund lives. Engineering the distance between 85% and dependable is software architecture, not prompt tuning.",
            highlight: "We treat an AI feature the way we'd treat a payments system — because when it's making decisions about your customers, your money, or your compliance, it deserves the same rigor."
          },
          intro: "Most 'AI solutions' work exactly once, in a controlled demo. We build production AI software — LLM applications, RAG systems, custom models, and agents engineered with data pipelines, retrieval, evaluation, guardrails, and real deployment.",

          included: [
            {
              label: "LLM Applications",
              detail: "Chatbots, copilots, and multi-step agents with tool calling, streaming, retries, fallbacks, and cost controls."
            },
            {
              label: "RAG & Retrieval",
              detail: "Data pipelines, embeddings, vector databases, and retrieval strategies that ground the model in your actual data."
            },
            {
              label: "Custom Models & Fine-Tuning",
              detail: "When off-the-shelf isn't enough — fine-tuned models trained on your proprietary data for your specific use case."
            },
            {
              label: "Evaluation & Guardrails",
              detail: "Eval harnesses that score quality, protection against injection and leakage, and drift monitoring from day one."
            },
            {
              label: "Production Deployment",
              detail: "Deployed to your stack with monitoring on quality, latency, and cost. The pilot doesn't end in a slide deck."
            },
            {
              label: "Maintenance & Iteration",
              detail: "AI systems degrade as data shifts and models change. We monitor, catch drift, and iterate as needs evolve."
            }
          ],

          process: [
            {
              step: "01",
              title: "Assess & Scope",
              body: "We find out whether AI is even the right tool. Problem audit, data assessment, feasibility check, and buy-vs-build call."
            },
            {
              step: "02",
              title: "Design",
              body: "Architecture first — data pipelines, retrieval strategy, evaluation plan, guardrails, and cost model. Not just the prompt."
            },
            {
              step: "03",
              title: "Build & Integrate",
              body: "Real integration with your systems, eval-gated build, and staging validation. Working software, not a proof of concept."
            },
            {
              step: "04",
              title: "QA & Test",
              body: "Every output checked against eval benchmarks. Guardrails tested. Cost and latency validated at real volume."
            },
            {
              step: "05",
              title: "Monitor & Iterate",
              body: "Quality and drift monitoring, cost tracking, and continuous iteration. The launch is the start, not the finish."
            }
          ],

          faqs: [
            {
              q: "How are you different from an AI consultant?",
              a: "Consultants advise, prototype, and hand you a plan you have to ship yourself. We're an engineering shop — we design, build, integrate, deploy, and maintain the actual software. The engagement ends with working AI in production."
            },
            {
              q: "Do we need custom AI, or is off-the-shelf fine?",
              a: "We start with the problem and data you have. If a rules engine or simpler feature wins, we say so before you spend on a model. Half of good AI work is talking clients out of AI they don't need."
            },
            {
              q: "How do you keep AI from hallucinating?",
              a: "RAG grounds the model in your data, eval harnesses catch quality slips, guardrails prevent leakage, and fallbacks handle model failures. It's engineering, not magic."
            },
            {
              q: "What does a typical engagement cost?",
              a: "Depends on complexity. A focused RAG application might be 4-6 weeks. A multi-agent system with custom evaluation could be 3-4 months. We scope honestly before you spend."
            }
          ],

          industries: [
            {
              id: "saas-ai",
              title: "SaaS & Tech",
              icon: "Building2",
              headline: "In-Product AI That Ships and Scales",
              description: "SaaS teams want AI features in the product — copilots, natural-language search, smart automations — but shipping them means real infrastructure, not a wrapped API call.",
              challenges: [
                "In-product AI that breaks at customer volume",
                "Retrieval that doesn't ground in product data",
                "Cost controls that hold at scale",
                "Evaluation that catches quality slips"
              ],
              approach: "We build in-product AI copilots and agents grounded in your data, with retrieval, evaluation, caching, and cost controls to run at customer volume."
            },
            {
              id: "healthcare-ai",
              title: "Healthcare",
              icon: "Building2",
              headline: "AI That Meets Compliance and Actually Works",
              description: "Healthcare AI needs HIPAA compliance, clinical accuracy, and guardrails that prevent harmful outputs. A hallucinated medical summary isn't a bug — it's a liability.",
              challenges: [
                "HIPAA compliance for patient data",
                "Clinical accuracy that meets medical standards",
                "Guardrails that prevent harmful outputs",
                "Audit trails for regulatory requirements"
              ],
              approach: "We build healthcare AI with HIPAA-compliant data pipelines, clinical evaluation frameworks, and guardrails that prevent harmful outputs — deployed with full audit trails."
            },
            {
              id: "finance-ai",
              title: "Finance",
              icon: "Building2",
              headline: "AI That Makes Decisions You Can Audit",
              description: "Financial AI needs accuracy, explainability, and compliance. A hallucinated number in a financial report isn't a demo failure — it's a regulatory violation.",
              challenges: [
                "Accuracy requirements with zero tolerance for errors",
                "Explainability for regulatory compliance",
                "Data security for sensitive financial information",
                "Integration with existing financial systems"
              ],
              approach: "We build financial AI with strict accuracy validation, explainable outputs, and compliance-ready audit trails — integrated with your existing financial infrastructure."
            },
            {
              id: "legal-ai",
              title: "Legal",
              icon: "Building2",
              headline: "AI That Researches Without Fabricating Citations",
              description: "Legal AI needs to find real cases, cite real precedents, and never fabricate. A hallucinated citation in a brief isn't a bug — it's malpractice.",
              challenges: [
                "Citation accuracy that can't afford hallucination",
                "Research depth that matches legal standards",
                "Confidentiality for client privilege",
                "Integration with legal databases and workflows"
              ],
              approach: "We build legal AI with verified citation systems, research grounded in real legal databases, and confidentiality controls that protect client privilege."
            },
            {
              id: "logistics-ai",
              title: "Logistics",
              icon: "Building2",
              headline: "AI That Optimizes Operations in Real Time",
              description: "Logistics AI needs to process real-time data, make routing decisions, and handle the chaos of actual operations — weather, delays, and changing demand.",
              challenges: [
                "Real-time data processing at scale",
                "Decision-making under uncertainty",
                "Integration with tracking and inventory systems",
                "Handling edge cases and exceptions"
              ],
              approach: "We build logistics AI that processes real-time operational data, makes routing and allocation decisions, and handles the exceptions that algorithms can't predict."
            },
            {
              id: "b2b-ai",
              title: "B2B Services",
              icon: "Building2",
              headline: "AI That Automates Complex Client Workflows",
              description: "B2B services have repetitive workflows that drain expert time — proposals, reports, client communication. AI can handle the routine so experts focus on strategy.",
              challenges: [
                "Complex workflows that need human oversight",
                "Client data that requires confidentiality",
                "Integration with existing business systems",
                "Quality that matches expert-level output"
              ],
              approach: "We build B2B AI that automates proposal generation, report creation, and client communication — with human-in-the-loop controls and quality that matches your experts."
            }
          ]
        }
      },
      { 
        id: "ai-agents", 
        title: "AI Agents",
        description: "Autonomous software that does the multi-step work — not another chatbot that answers questions. Agents that pull from your systems, take real actions, and know when to ask a human.",
        serviceSection: {
          tag: "Service 02",
          title: "AI Agents",
          headline: "Autonomous Software That Does the Multi-Step Work",
          description: "A chatbot talks. An agent acts. The difference is whether the software can look at a task, decide what to do, use your tools to actually do it, check its own work, and hand you a finished result.",
          solvesWhat: "Getting an agent to reliably complete a ten-step task against your real data is software engineering, not prompt writing. We build agents with tool use, planning, and guardrails — not demos that fall apart.",
          features: [
            "Tool Use & Integration — read/write to your real systems",
            "Planning & Orchestration — break goals into steps, adapt on failure",
            "Human-in-the-Loop — escalation at the exact points where wrong is expensive",
            "Reliability & Evaluation — logged, traced, and monitored from day one"
          ],
          images: [
            "/services/ai_1.webp"
          ],
          image: "/services/ai_1.webp",
          layout: "image-grid"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "The gap between a clever demo and an agent you can trust with real work",
            description: "Almost anyone can wire a language model to a prompt and call it an agent. Getting it to reliably complete multi-step tasks against your real data, handle edge cases, and not invent answers when unsure — that's software engineering.",
            body: "A real agent has three parts most demos skip: tool use (actually reach into your systems), planning (break a goal into steps and adapt), and guardrails (escalate to a human when wrong is expensive). And if a task is deterministic, a plain automation is cheaper and more reliable.",
            highlight: "Agents earn their keep on the messy work — judgment calls, unstructured inputs, tasks where the path changes case to case. We build the right tool for the job."
          },
          intro: "A chatbot talks. An agent acts. We build agents that pull from your systems, take real actions inside them, and know when to stop and ask a human — production agents wired into the software you already run.",

          included: [
            {
              label: "Tool Use & Integration",
              detail: "Read/write integrations with CRMs, ERPs, ticketing, and databases. Typed tool definitions with strict validation and scoped permissions."
            },
            {
              label: "Planning & Orchestration",
              detail: "How the goal breaks into steps, what happens when one fails, and how the agent adapts instead of charging ahead."
            },
            {
              label: "Human-in-the-Loop",
              detail: "Approval gates, escalation rules, and the exact points where a person stays in control instead of the model."
            },
            {
              label: "Reliability & Evaluation",
              detail: "Full audit logging of every tool call, run monitoring for success rates and anomalies, and eval suites that catch drift."
            },
            {
              label: "Monitored Deployment",
              detail: "Deployed with tracing, alerts, and a rollback plan. Every action traced and logged from day one."
            },
            {
              label: "Expanding Autonomy",
              detail: "More handled unsupervised as reliability proves out. The agent gets more capable and more trusted over time."
            }
          ],

          process: [
            {
              step: "01",
              title: "Assess & Scope",
              body: "Task mapping, agent-vs-automation call, and success criteria defined before writing a line. If automation is better, we say so."
            },
            {
              step: "02",
              title: "Design",
              body: "Tool and integration design, orchestration plan, and escalation map. What the agent can touch, how it recovers, what it must escalate."
            },
            {
              step: "03",
              title: "Build & Integrate",
              body: "Production build with real code and real integrations. Staging validation against real and adversarial cases. Monitored rollout."
            },
            {
              step: "04",
              title: "QA & Test",
              body: "Every action traced and logged. Eval suites run against real cases. Guardrails tested at every escalation point."
            },
            {
              step: "05",
              title: "Monitor & Iterate",
              body: "Run monitoring, escalation review, and expanding autonomy. The agent gets better as it earns trust."
            }
          ],

          faqs: [
            {
              q: "What's the difference between an agent and a chatbot?",
              a: "A chatbot answers questions in conversation. An agent takes a goal, decides the steps, uses your tools to carry them out, and adapts when a step fails. If your task is a fixed sequence, we build an automation — cheaper and more reliable."
            },
            {
              q: "How do you keep an agent from doing something wrong?",
              a: "Typed tool definitions with strict validation, scoped permissions, escalation rules at high-stakes decision points, and full audit logging. The agent can only take actions you've explicitly allowed."
            },
            {
              q: "Will an agent replace my team?",
              a: "No. Agents handle the routine cases so your team focuses on judgment-heavy work. They escalate to humans at the exact points where being wrong is expensive."
            },
            {
              q: "How do you connect to our systems?",
              a: "We build typed tool definitions around each integration — CRM, ERP, ticketing, database — with read/write access scoped to what the agent needs. Every call is logged and auditable."
            }
          ],

          industries: [
            {
              id: "ops-ai",
              title: "Operations-Heavy Businesses",
              icon: "Building2",
              headline: "Turn Back-Office Queues Into One-Touch Exceptions",
              description: "The back office is full of multi-step work too messy for rigid automation but too repetitive for a person — reconciling records, chasing missing data, routing exceptions.",
              challenges: [
                "Reconciling records across multiple systems",
                "Chasing missing data and incomplete entries",
                "Routing exceptions that need judgment",
                "Repetitive multi-step workflows eating expert time"
              ],
              approach: "We build ops agents that pull from your systems, resolve routine cases end to end, and escalate only genuine exceptions — turning hours of daily work into one-touch processing."
            },
            {
              id: "saas-agents",
              title: "SaaS & Tech",
              icon: "Building2",
              headline: "In-Product Agents That Take Actions, Not Just Answer",
              description: "SaaS products need agents that do more than chat — they need to look up accounts, process requests, and take actions inside the product without human intervention.",
              challenges: [
                "Agents that need to read and write product data",
                "Multi-step workflows inside the product",
                "Escalation for high-stakes customer actions",
                "Scaling agent usage without cost explosion"
              ],
              approach: "We build in-product agents that take real actions — account lookups, request processing, workflow automation — with scoped permissions and escalation for high-stakes decisions."
            },
            {
              id: "professional-agents",
              title: "Professional Services",
              icon: "Building2",
              headline: "Automate the Research and Prep That Eats Expert Time",
              description: "Law firms, consultancies, and agencies have expert time wasted on research, data gathering, and prep work that follows predictable patterns but needs judgment.",
              challenges: [
                "Research that follows patterns but needs review",
                "Data gathering from multiple sources",
                "Document prep that's repetitive but not identical",
                "Client intake that needs routing and validation"
              ],
              approach: "We build agents that handle research, data gathering, and prep work — pulling from databases, drafting documents, and routing to the right expert for review."
            },
            {
              id: "ecommerce-agents",
              title: "E-commerce",
              icon: "Building2",
              headline: "Resolve Orders, Returns, and Customer Issues Automatically",
              description: "E-commerce operations have repetitive customer service work that follows patterns but needs judgment — order issues, return eligibility, and exception handling.",
              challenges: [
                "Order issues that follow patterns but need case-by-case handling",
                "Return eligibility that requires checking multiple systems",
                "Customer inquiries that need account lookups",
                "Inventory exceptions that need routing"
              ],
              approach: "We build e-commerce agents that resolve order issues, check return eligibility against your rules, and handle customer inquiries with real account lookups."
            },
            {
              id: "logistics-agents",
              title: "Logistics",
              icon: "Building2",
              headline: "Route, Allocate, and Adapt to Real-Time Chaos",
              description: "Logistics operations face real-time changes — delays, weather, demand shifts — that need adaptive decision-making beyond what rigid automation handles.",
              challenges: [
                "Real-time routing that adapts to conditions",
                "Allocation decisions under changing constraints",
                "Exception handling for delays and disruptions",
                "Coordination across multiple systems and partners"
              ],
              approach: "We build logistics agents that process real-time data, make routing and allocation decisions, and handle exceptions that rigid automation can't predict."
            },
            {
              id: "finance-agents",
              title: "Finance",
              icon: "Building2",
              headline: "Automate Reconciliation and Reporting With Audit Trails",
              description: "Financial operations have reconciliation and reporting work that follows rules but needs judgment for exceptions — and every action needs an audit trail.",
              challenges: [
                "Reconciliation across multiple data sources",
                "Reporting that follows templates but needs validation",
                "Exception handling for financial anomalies",
                "Audit trails for every action taken"
              ],
              approach: "We build financial agents that handle reconciliation, generate reports, and flag anomalies — with full audit logging for every action and escalation for high-stakes decisions."
            }
          ]
        }
      },
      { 
        id: "ai-chatbots", 
        title: "AI Chatbots",
        description: "AI chatbots that actually answer the question — grounded in your real content, not a generic bot that guesses. RAG-powered assistants that admit when they don't know.",
        serviceSection: {
          tag: "Service 03",
          title: "AI Chatbots",
          headline: "AI Chatbots That Actually Answer the Question",
          description: "Most business chatbots make customers angrier than no chatbot at all. They loop, deflect, and invent policies you never wrote. We build conversational AI that reads from your actual knowledge base.",
          solvesWhat: "A chatbot that guesses is worse than no chatbot. We build RAG-powered assistants that retrieve from your real content, cite sources, and hand off to humans before damaging the relationship.",
          features: [
            "RAG Grounding — answers from your content, not imagination",
            "Source Traceability — every answer maps to a document",
            "Human Handoff — escalation before it damages trust",
            "Multi-Channel — website, WhatsApp, Slack, Discord, Telegram"
          ],
          images: [
            "/services/ai_1.webp"
          ],
          image: "/services/ai_1.webp",
          layout: "image-grid"
        },
        pageContent: {
          whyItMatters: {
            title: "Why It Matters",
            headline: "A chatbot that guesses is worse than no chatbot at all",
            description: "Drop a stock chatbot on your site and it will confidently invent answers. It quotes prices you don't charge, promises refunds you don't offer, and describes features that don't exist.",
            body: "The fix is grounding. A production chatbot retrieves relevant passages from your real documentation first, then answers strictly from what it found. Every response traces back to the source document, and it says 'let me connect you with someone' when a question falls outside what it knows.",
            highlight: "Accurate answers on the routine majority, clean human handoff on the hard ones — that's what makes conversational AI pay for itself."
          },
          intro: "Most business chatbots make customers angrier than no chatbot at all. We build conversational AI that reads from your actual knowledge base, admits when it doesn't know, and hands off to a human before it damages the relationship.",

          included: [
            {
              label: "Knowledge Grounding",
              detail: "Ingestion pipeline for docs, catalogs, PDFs, and ticket history. Vector embeddings and semantic retrieval tuned to your content."
            },
            {
              label: "Accuracy & Guardrails",
              detail: "Confidence thresholds, refusals, escalation triggers, and source traceability so every answer maps to a document."
            },
            {
              label: "Human Handoff",
              detail: "Clean escalation to humans with full context when the bot isn't sure or the question falls outside its knowledge."
            },
            {
              label: "Channels & Deployment",
              detail: "Website widget, WhatsApp, Slack, Discord, Telegram, SMS — deployed where your customers already are."
            },
            {
              label: "Analytics & Monitoring",
              detail: "Dashboards on what people ask, what the bot resolved, where it escalated, and which content gaps to close."
            },
            {
              label: "Ongoing Tuning",
              detail: "Knowledge base re-synced as content changes, retrieval tuned from real usage, accuracy climbs over time."
            }
          ],

          process: [
            {
              step: "01",
              title: "Assess",
              body: "Conversation audit, content inventory, and scope definition. What customers ask, what your docs answer, and where the bot escalates."
            },
            {
              step: "02",
              title: "Design",
              body: "Conversation flows, brand voice, and guardrail rules. Personality meets discipline — sounds like you without freelancing."
            },
            {
              step: "03",
              title: "Build & Integrate",
              body: "RAG pipeline built, channels wired, helpdesk integrated. Adversarial QA — we try to break it before customers can."
            },
            {
              step: "04",
              title: "QA & Test",
              body: "Every response traced to source content. Adversarial testing against hallucination. Guardrails tested at every escalation point."
            },
            {
              step: "05",
              title: "Monitor & Iterate",
              body: "Transcript review, gap closing, and retrieval tuning. Accuracy climbs as your content and business evolve."
            }
          ],

          faqs: [
            {
              q: "How do you stop the chatbot from making things up?",
              a: "Grounding and guardrails. The bot retrieves from your real content before answering, constrained to respond only from what it found. Confidence thresholds trigger fallback when unsure. We test adversarially before launch."
            },
            {
              q: "How is this different from a cheap off-the-shelf chatbot?",
              a: "Off-the-shelf bots run on base language models with no connection to your business. We build RAG pipelines that retrieve from your actual content, cite sources, and escalate when unsure."
            },
            {
              q: "What content do you need?",
              a: "Help docs, product catalogs, policies, FAQs, and past support tickets. The more content, the better the bot. We identify gaps and tell you what to create."
            },
            {
              q: "Does it replace my support team?",
              a: "No. It handles the routine questions so your team focuses on complex issues. Humans stay in the loop for anything the bot isn't sure about."
            }
          ],

          industries: [
            {
              id: "ecommerce-chat",
              title: "E-commerce",
              icon: "Building2",
              headline: "Turn Pre-Purchase Questions Into Completed Checkouts",
              description: "Shoppers abandon carts over questions nobody's around to answer: is it in stock, will it ship by Friday, does it fit, what's the return window?",
              challenges: [
                "Product questions that need real-time inventory data",
                "Shipping and return policy inquiries at scale",
                "Pre-purchase hesitation that kills conversions",
                "Support volume that overwhelms human teams"
              ],
              approach: "We ground the bot in your live catalog, inventory, and policies so it answers accurately, recommends alternatives for out-of-stock items, and pulls order status on demand."
            },
            {
              id: "saas-chat",
              title: "SaaS & Tech",
              icon: "Building2",
              headline: "Support That Resolves Without Opening a Ticket",
              description: "SaaS users have feature questions, billing issues, and setup problems that follow patterns but need accurate answers from your documentation.",
              challenges: [
                "Technical questions that need accurate documentation",
                "Billing and account issues that follow patterns",
                "Setup and onboarding questions at scale",
                "Support volume that scales with user growth"
              ],
              approach: "We ground the bot in your product documentation, help center, and billing policies so it resolves setup questions, explains features, and escalates complex issues with full context."
            },
            {
              id: "healthcare-chat",
              title: "Healthcare",
              icon: "Building2",
              headline: "Patient Questions Answered Accurately, Every Time",
              description: "Healthcare patients need accurate information about services, insurance, appointments, and policies — and wrong answers have real consequences.",
              challenges: [
                "Medical information that can't be guessed",
                "Insurance and billing questions that vary by patient",
                "Appointment scheduling that needs accurate availability",
                "Compliance requirements for patient communication"
              ],
              approach: "We build healthcare chatbots grounded in your service documentation, insurance policies, and appointment systems — with strict guardrails that escalate clinical questions to staff."
            },
            {
              id: "hospitality-chat",
              title: "Hospitality",
              icon: "Building2",
              headline: "Guest Questions Answered Before They Arrive",
              description: "Hotels and restaurants get the same questions repeatedly: hours, availability, amenities, directions, menu options. A grounded bot answers instantly.",
              challenges: [
                "Repetitive guest questions that consume staff time",
                "Real-time availability and pricing questions",
                "Multi-location information that needs accuracy",
                "Seasonal and event-based content that changes"
              ],
              approach: "We ground the bot in your property information, availability systems, and policies so it answers guest questions accurately, books reservations, and hands off to staff for special requests."
            },
            {
              id: "professional-chat",
              title: "Professional Services",
              icon: "Building2",
              headline: "Qualify Leads and Answer Service Questions Automatically",
              description: "Law firms, consultancies, and agencies get prospect questions that follow patterns — services, pricing, availability, and process — that a bot can handle.",
              challenges: [
                "Prospect questions that qualify or disqualify leads",
                "Service descriptions that need accurate explanation",
                "Pricing and availability questions at scale",
                "Intake that needs routing and validation"
              ],
              approach: "We build professional service chatbots that answer service questions, qualify prospects against your criteria, and route qualified leads to the right person with full context."
            },
            {
              id: "education-chat",
              title: "Education",
              icon: "Building2",
              headline: "Student and Parent Questions Answered 24/7",
              description: "Schools and universities get repetitive questions about admissions, programs, deadlines, and policies — from students and parents across time zones.",
              challenges: [
                "Admissions questions that follow predictable patterns",
                "Program and course information at scale",
                "Deadline and policy questions that need accuracy",
                "International inquiries across time zones"
              ],
              approach: "We ground the bot in your admissions documentation, program catalogs, and policies so it answers student and parent questions accurately, guides applications, and escalates complex cases."
            }
          ]
        }
      },
    ],
    layout: "image-grid",

    pageContent: {
      intro:
        "Most businesses have processes that repeat constantly — customer inquiries that always receive the same response, data that gets transferred from one tool to another, reports someone compiles manually every week. Automation handles those. AI adds decision-making and language intelligence on top. The result is that your team stops spending time on work that shouldn't require human attention.",

      included: [
        {
          label: "Custom AI chatbots",
          detail:
            "Built on OpenAI's API — not generic plug-and-play tools. Trained on your actual products, services, FAQs, and processes. Deployed on your website, WhatsApp, or internal systems.",
        },
        {
          label: "Workflow automation",
          detail:
            "End-to-end process automation using n8n, Make (formerly Integromat), or custom Python scripts — depending on what your existing tools support.",
        },
        {
          label: "CRM integrations",
          detail:
            "Connect lead capture, follow-up sequences, and customer data to your CRM so qualified leads don't fall through the gaps between tools.",
        },
        {
          label: "Lead qualification automation",
          detail:
            "Automated first-response and qualification flows that reply to enquiries 24/7 and pass qualified leads to your sales team with context already gathered.",
        },
        {
          label: "AI content & report generation",
          detail:
            "Automated generation of reports, product descriptions, and repetitive documents at scale — for businesses that produce high volumes of structured content.",
        },
        {
          label: "Custom model work",
          detail:
            "For businesses with proprietary data — we fine-tune or RAG-enable language models to work specifically on your information, not general internet knowledge.",
        },
      ],

      toolsNote:
        "Tools we use: n8n, Make (Integromat), OpenAI API (GPT-4o), Python (FastAPI, LangChain), and Zapier for simpler integrations. We use the right tool for the job — not the one we happen to be most comfortable with.",

      process: [
        {
          step: "01",
          title: "Process audit",
          body: "We map your current workflows and identify where time is actually being lost. Most businesses uncover 3–5 automatable processes they hadn't considered.",
        },
        {
          step: "02",
          title: "Automation blueprint",
          body: "We document exactly what will be built, what triggers it, what it does, and what happens if it fails — before writing any code.",
        },
        {
          step: "03",
          title: "Build & test",
          body: "We build in a staging environment and test with real data before anything touches your live systems. Failures get caught here, not in production.",
        },
        {
          step: "04",
          title: "Integration",
          body: "We connect to your existing tools — CRM, email, Slack, WhatsApp, website — and configure monitoring so you know when something needs attention.",
        },
        {
          step: "05",
          title: "Handoff & training",
          body: "You get documentation and a walkthrough of every automation so your team understands how to manage it without depending on us for basic questions.",
        },
      ],

      internalLinks: [
        {
          text: "Most automation work connects into a custom",
          linkText: "Web Application",
          href: "/services/web-applications",
          after:
            "— either one we've built, or one we build alongside the automation. If the right system isn't in place to capture and move data, we build it.",
        },
        {
          text: "For real estate and e-commerce businesses especially, automation often starts at the website level — capturing the right data at the right moment. Our",
          linkText: "Website Development",
          href: "/services/website-development",
          after: "work is usually where the data collection layer gets built.",
        },
      ],

      closingCta:
        "The best starting point is a process audit — a 45-minute call where we map your current workflows and identify exactly where automation would save the most time. There's no pitch in that call, just a clear picture of what's possible and what it would cost to build. If your team is spending hours a week on something repetitive, let's look at it.",

      faqs: [
        {
          q: "Do we need a technical team to maintain automations after handoff?",
          a: "No. We build with maintainability in mind and provide documentation. For n8n and Make workflows, most non-technical business owners can manage basic adjustments themselves after a walkthrough. For custom-coded automation, we offer a maintenance retainer.",
        },
        {
          q: "What kind of businesses do you typically work with on this?",
          a: "Most commonly real estate agencies, e-commerce stores, medical clinics, and education businesses — anyone dealing with high volumes of repetitive customer interaction or internal data movement. The underlying problems are similar across industries.",
        },
        {
          q: "What tools do you integrate with?",
          a: "WhatsApp (via Twilio or 360Dialog), Gmail, Outlook, Salesforce, HubSpot, Airtable, Notion, Shopify, WooCommerce, and most platforms with a public API. If you're not sure whether your tool is supported, ask us and we'll check.",
        },
        {
          q: "How long does a typical automation project take?",
          a: "A single well-scoped automation — lead capture, follow-up sequence, CRM entry — takes 1–2 weeks. More complex systems with multiple interconnected workflows take 4–8 weeks. We provide a timeline with the blueprint before any work starts.",
        },
      ],
    },
  },
];
