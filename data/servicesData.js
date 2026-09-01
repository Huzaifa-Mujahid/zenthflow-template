// ── ORBITIX DIGITAL Services Data ─────────────────────────────────────────────────────
// Each service maps to actual images in /public/services/
// layout: "image-left" | "image-right" | "image-full" | "image-grid" | "website-scroll" | "image-showcase"

export const servicesShowcaseData = [
  {
    id: "website-development",
    tag: "Service 01",
    title: "Website Development",
    headline: "Websites That Command Authority",
    description:
      "We engineer high-performance, custom website solutions that leave lasting impressions. Every pixel is intentional — from zero-latency loading to buttery-smooth interactions.",
    solvesWhat:
      "Visitors bounce in 3 seconds because your site feels cheap. We build business website development projects that stop them dead and turn curiosity into clients.",
    features: [
      "95+ PageSpeed scores — faster than 97% of competitors",
      "Mobile-first, Core Web Vitals optimized from day one",
      "Custom CMS and ecommerce development",
      "Micro-animations & landing page design",
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
      { id: "web-development", title: "Web Development" },
      { id: "landing-pages", title: "Landing Pages" },
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
      { id: "shopify", title: "Shopify" },
      { id: "ecommerce-development", title: "E-commerce Development" },
      { id: "website-migration", title: "Website Migration" },
    ],
    layout: "website-scroll",

    pageContent: {
      intro:
        "Most businesses treat their website as a brochure. We build it as a working asset — one that loads fast, ranks on Google, and actually converts visitors into enquiries. Whether you're starting from scratch or rebuilding something that hasn't been performing, we handle the entire project from design to deployment.",

      included: [
        {
          label: "Custom design, no templates",
          detail:
            "Every page is designed from scratch based on your brand and business goals — not adapted from a theme.",
        },
        {
          label: "Next.js or custom stack",
          detail:
            "We build on Next.js for most projects — it gives us full control over performance and functionality. WordPress is available if specifically needed.",
        },
        {
          label: "CMS integration",
          detail:
            "You get a content management system so your team can update text, images, and blog posts without touching code.",
        },
        {
          label: "Core Web Vitals optimization",
          detail:
            "We target 95+ PageSpeed scores before handoff — not as an afterthought. Performance is built into the architecture from day one.",
        },
        {
          label: "Mobile-first responsive layout",
          detail:
            "Built for every screen size and tested on real devices — not just resized in a browser.",
        },
        {
          label: "On-page SEO foundation",
          detail:
            "Meta tags, structured data, sitemap, and robots.txt — all set up correctly from the start so your site is ready to rank.",
        },
      ],

      notIncluded:
        "Domain registration, hosting, and third-party software subscriptions are separate costs. We'll tell you exactly what you'll need and where to get it.",

      process: [
        {
          step: "01",
          title: "Discovery",
          body: "We map your goals, target audience, competitor landscape, and must-have features before anything is designed. This is the most important part.",
        },
        {
          step: "02",
          title: "Wireframes & Design",
          body: "You approve the page structure and visual direction before we write a single line of code. No surprises at the end.",
        },
        {
          step: "03",
          title: "Development",
          body: "We build in sprints and share progress previews every few days. You're never left waiting on a black box.",
        },
        {
          step: "04",
          title: "Review & Revisions",
          body: "Two rounds of revisions are included. We address feedback systematically — page by page, section by section.",
        },
        {
          step: "05",
          title: "Handoff & Training",
          body: "You get the live site, CMS access, and a short walkthrough video so your team knows how to manage it going forward.",
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
          a: "We can, but we don't default to it. Most of our builds use Next.js because it gives us full control over performance and functionality. If you have an existing WordPress site that just needs updating, we'll work with what you have.",
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
    headline: "Custom Web App Development",
    description:
      "From SaaS platforms to complex business tools — we build web applications with real-time capabilities, seamless UX, and architecture that scales as you grow.",
    solvesWhat:
      "Off-the-shelf tools force your team to work around their limitations. We engineer business portal solutions built around exactly what you need — no compromises, no workarounds.",
    features: [
      "Real-time dashboards with live data & instant updates",
      "Secure auth systems + granular role-based access control",
      "Serverless architecture that handles 10× traffic spikes",
      "Full third-party API integrations with your existing stack",
    ],
    images: ["/services/webapp_3.webp"],
    image: "/services/webapp_3.webp",
    subServices: [
      { id: "saas-dashboards", title: "SaaS Dashboards" },
      { id: "client-portals", title: "Client Portals" },
      { id: "booking-systems", title: "Booking Systems" },
      { id: "api-development", title: "API Development" },
      { id: "saas-mvp-development", title: "SaaS and MVP Development" },
    ],
    layout: "image-grid",

    pageContent: {
      intro:
        "A web application is different from a website — it's software that runs in a browser and does actual work for your business. That could be a customer portal, an internal operations tool, a SaaS dashboard, a booking system, or anything that needs logic, user accounts, and real data behind it. When a spreadsheet or a tool like Notion is doing work it was never built for, that's usually the signal.",

      included: [
        {
          label: "Custom UI/UX design",
          detail:
            "Interfaces designed around how your actual users work — not adapted from generic dashboard templates.",
        },
        {
          label: "Authentication system",
          detail:
            "Secure login, user roles, and permissions — built properly with JWT, session management, and role-based access control.",
        },
        {
          label: "Real-time functionality",
          detail:
            "Live data updates, notifications, and collaborative features where the business case requires them.",
        },
        {
          label: "Third-party API integrations",
          detail:
            "Connect to payment gateways, CRMs, ERPs, and any external service your business already relies on.",
        },
        {
          label: "Serverless / cloud architecture",
          detail:
            "Scales automatically under traffic spikes — no separate ops team or server management required on your end.",
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
          body: "We map every user type, every action they take, and every piece of data that moves through the system — before writing a single spec.",
        },
        {
          step: "02",
          title: "Architecture design",
          body: "Data models, API structure, and third-party integrations are decided upfront. Nothing gets rearchitected mid-build because we skipped this.",
        },
        {
          step: "03",
          title: "Phased development",
          body: "We build in functional phases so you can test real features early — not wait six weeks for a complete but untested system.",
        },
        {
          step: "04",
          title: "QA & security testing",
          body: "Every auth flow, data input, and edge case is tested. We look for what breaks it, not just what works.",
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
      { id: "logo-design", title: "Logo Design" },
      { id: "brand-guidelines", title: "Brand Guidelines" },
      { id: "visual-identity", title: "Visual Identity" },
      { id: "brand-strategy", title: "Brand Strategy" },
    ],
    layout: "image-grid",

    pageContent: {
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
    headline: "Dominate Search Results",
    description:
      "Data-driven technical SEO and automation funnels that compound your organic visibility. We turn search engines into a predictable, scalable revenue engine.",
    solvesWhat:
      "You're invisible on Google — which means your competitors take every customer who searches for what you offer. We exist to change that.",
    features: [
      "Full technical SEO audit — find and eliminate every ranking leak",
      "Local SEO targeting buyer-intent keywords",
      "On-page optimization + E-E-A-T content that Google rewards",
      "Transparent monthly ranking reports with clear ROI attribution",
    ],
    images: ["/services/seo_1.webp"],
    image: "/services/seo_1.webp",
    subServices: [
      { id: "local-seo", title: "Local SEO" },
      { id: "technical-seo", title: "Technical SEO" },
      { id: "on-site-seo", title: "On-Site SEO" },
      { id: "seo-audits", title: "SEO Audits" },
      { id: "all-seo-services", title: "All SEO Services" },
      { id: "google-business-profile", title: "Google Business Profile" },
    ],
    layout: "image-grid",

    pageContent: {
      intro:
        "SEO is not a magic trick and it doesn't produce results in two weeks. What it does — when done correctly — is make your business findable by people who are already searching for what you offer. We work on the technical foundation, the keyword strategy, and the content together, because fixing only one of the three doesn't move rankings.",

      included: [
        {
          label: "Technical SEO audit",
          detail:
            "A full review of crawl errors, page speed issues, duplicate content, broken links, missing metadata, and Core Web Vitals — delivered as a prioritized fix list, not just a report.",
        },
        {
          label: "Keyword strategy",
          detail:
            "We research what your actual customers search for, map terms to pages, and target buyer-intent keywords rather than high-volume terms that attract the wrong traffic.",
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
          body: "We crawl your entire site and identify every technical issue holding back rankings — in priority order, not just an alphabetical list of problems.",
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
      { id: "facebook", title: "Facebook" },
      { id: "instagram", title: "Instagram" },
      { id: "youtube", title: "YouTube" },
      { id: "linkedin", title: "LinkedIn" },
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
    headline: "Stories That Move. Brands That Stick.",
    description:
      "From raw footage to cinematic masterpieces — we craft compelling video content that captivates audiences and positions your brand as a market leader.",
    solvesWhat:
      "Amateurish video destroys credibility in the first 2 seconds. Cinematic content builds brands that audiences remember and trust.",
    features: [
      "Reels & short-form videos optimized for algorithm reach",
      "Brand films + ad creatives engineered to convert on first watch",
      "Professional color grading, sound design, and motion graphics",
      "Fast delivery — raw footage to polished cut in under 72 hours",
    ],
    images: ["/services/video_2.webp"],
    image: "/services/video_2.webp",
    subServices: [
      { id: "short-form-content", title: "Short-form Content" },
      { id: "brand-films", title: "Brand Films" },
      { id: "ad-creatives", title: "Ad Creatives" },
      { id: "motion-graphics", title: "Motion Graphics" },
    ],
    layout: "image-grid",

    pageContent: {
      intro:
        "Most businesses produce weak video for one of two reasons: either the editing is amateurish, or the content has no structure — it looks like raw footage rather than a story. We handle both. Whether you're shooting it yourself or we're coordinating the production, the output is video that actually holds attention past the first three seconds.",

      included: [
        {
          label: "Short-form content",
          detail:
            "Reels, TikToks, and YouTube Shorts — edited for platform algorithms, with captions, pacing, and hooks designed to retain viewers, not just get an initial click.",
        },
        {
          label: "Brand films",
          detail:
            "Longer-format content for your website, investor presentations, or launch campaigns — scripted, structured, and produced to a broadcast standard.",
        },
        {
          label: "Ad creatives",
          detail:
            "Video ads built to convert — opening hook, offer presentation, and clear CTA engineered into the edit, not added as an afterthought.",
        },
        {
          label: "Professional color grading",
          detail:
            "A real color treatment on every deliverable — not just auto-correct. Consistent look and feel across all content in the same campaign.",
        },
        {
          label: "Sound design",
          detail:
            "Licensed music, sound effects, and audio cleanup — no home-video audio quality in anything we deliver.",
        },
        {
          label: "Motion graphics",
          detail:
            "Lower thirds, title cards, logo reveals, and animated infographics where the story benefits from them.",
        },
      ],

      notIncluded:
        "Filming on location is not included by default — we edit footage you provide. If you need a full production (camera crew, director, location management), we can coordinate that as a separate scope.",

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
        "If you have footage on a hard drive that hasn't been edited, or you're producing content regularly but the quality isn't where it needs to be — send us a sample and let's talk about what a better output looks like. Turnaround on most short-form edits is 48–72 hours from receiving footage.",

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
    headline: "AI Automation Services",
    description:
      "Custom AI models and business automation services that eliminate repetitive tasks, reduce operational costs, and scale your output without scaling your team.",
    solvesWhat:
      "Your team burns hours on tasks a machine could do in seconds. We automate the grunt work so your best people focus on what actually grows the business.",
    features: [
      "Chatbot development resolving 80% of support tickets",
      "Workflow automation cutting operational costs by 40%+",
      "AI-powered content & report generation at scale",
      "Custom model training on your proprietary business data",
    ],
    images: ["/services/ai_1.webp"],
    image: "/services/ai_1.webp",
    subServices: [
      { id: "ai-development", title: "AI Development" },
      { id: "ai-agents", title: "AI Agents" },
      { id: "ai-chatbots", title: "AI Chatbots" },
    ],
    layout: "image-grid",

    pageContent: {
      intro:
        "Most businesses have processes that repeat themselves constantly — customer questions that always get the same answer, data that gets copied from one tool to another, reports someone builds manually every week. Automation handles those. AI adds decision-making and language intelligence on top. The result is that your team stops spending time on work that shouldn't require human attention.",

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
