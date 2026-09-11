"use client";

import { motion } from "framer-motion";
import {
  Clock,
  User,
  Calendar,
  Quote,
  CheckCircle2,
  Tag,
} from "lucide-react";
import OrangeButton from "@/components/OrangeButton";
import RoundedPageHero from "@/components/RoundedPageHero";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

/* ─────────────────────────────────────────────────────────────
   FADE-IN WRAPPER  (simple scroll-triggered animation)
───────────────────────────────────────────────────────────── */
function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   QUOTE BLOCK
───────────────────────────────────────────────────────────── */
function QuoteBlock({ quote, author, role }) {
  return (
    <FadeIn className="my-12">
      <blockquote className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
        <span className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-[#e8602e] to-[#c94a1a]" />
        <Quote
          size={40}
          className="mb-4 text-[#e8602e] opacity-60"
          strokeWidth={1.5}
        />
        <p className="text-xl md:text-2xl font-medium leading-relaxed text-white/90 italic">
          &ldquo;{quote}&rdquo;
        </p>
        {author && (
          <footer className="mt-6 flex items-center gap-3">
            <span className="h-px w-8 bg-white/20" />
            <div>
              <p className="text-sm font-semibold text-white">{author}</p>
              {role && <p className="text-xs text-neutral-500 mt-0.5">{role}</p>}
            </div>
          </footer>
        )}
      </blockquote>
    </FadeIn>
  );
}

/* ─────────────────────────────────────────────────────────────
   KEY TAKEAWAYS BOX
───────────────────────────────────────────────────────────── */
function KeyTakeaways({ title = "Key Takeaways", items = [] }) {
  return (
    <FadeIn className="my-12">
      <div className="rounded-2xl border border-white/10 bg-[#111111] p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-[#e8602e]/15 flex items-center justify-center">
            <CheckCircle2 size={16} className="text-[#e8602e]" />
          </div>
          <h4 className="text-lg font-bold text-white tracking-tight">
            {title}
          </h4>
        </div>
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#e8602e] shrink-0" />
              <span className="text-neutral-300 leading-relaxed text-[15px]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}

/* ─────────────────────────────────────────────────────────────
   NUMBERED PRINCIPLES
───────────────────────────────────────────────────────────── */
function NumberedPrinciples({ title = "Core Principles", items = [] }) {
  return (
    <FadeIn className="my-12">
      <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">
        {title}
      </h3>
      <ol className="space-y-6">
        {items.map((item, i) => (
          <li key={i} className="flex gap-5 group">
            <span
              className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-[#e8602e] border border-[#e8602e]/25 bg-[#e8602e]/8 transition-colors duration-300 group-hover:bg-[#e8602e]/15"
              style={{ background: "rgba(232, 96, 46, 0.08)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="pt-1">
              <p className="text-neutral-200 leading-relaxed text-[15px]">
                <strong className="text-white font-semibold">{item.title}: </strong>
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </FadeIn>
  );
}

/* ─────────────────────────────────────────────────────────────
   ARTICLE JSON-LD  (BlogPosting schema for search engines)
───────────────────────────────────────────────────────────── */
function ArticleJsonLd({ title, description, date, author, slug }) {
  if (!slug) return null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    datePublished: date,
    dateModified: date,
    author: { "@type": "Organization", name: author },
    publisher: {
      "@type": "Organization",
      name: "ZENITHFLOW STUDIOS",
      logo: {
        "@type": "ImageObject",
        url: "https://zenithflowstudios.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://zenithflowstudios.com/blog/${slug}`,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* ─────────────────────────────────────────────────────────────
   FAQ JSON-LD  (FAQPage schema for AI citations — visible part
   is rendered by the <FAQ /> component)
───────────────────────────────────────────────────────────── */
function FaqJsonLd({ faqs = [] }) {
  if (!faqs || faqs.length === 0) return null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* ─────────────────────────────────────────────────────────────
   DIVIDER
───────────────────────────────────────────────────────────── */
function Divider() {
  return <hr className="border-0 border-t border-white/8 my-10" style={{ borderColor: "rgba(255,255,255,0.08)" }} />;
}

/* ─────────────────────────────────────────────────────────────
   MAIN  BlogPostLayout
   ───────────────────────────────────────────────────────────
   Props:
      title        string
      category     string
      author       string
      date         string
       heroImage    string (optional, reserved)
      content      ReactNode | array of content blocks
      ctaBanner    { headline, subtitle, buttonLabel, buttonHref } (reserved)
      relatedPosts array of { title, excerpt, category, date, image, href }
      takeaways    string[]
      quote        { quote, author, role }
      principles   { title, items: [{title, description}] }
      faqs         [{ q, a }]
      slug         string
      description  string
───────────────────────────────────────────────────────────── */
export default function BlogPostLayout({
  title = "Blog Post Title",
  category = "Blog",
   author = "ZENITHFLOW Team",
  date = "January 10, 2025",
  heroImage = null,
  content = null,
  ctaBanner = null,
  takeaways = [],
  quote = null,
  principles = null,
  faqs = [],
  slug = "",
  description = "",
}) {
  const faqItems = (faqs || []).map((f) => ({ question: f.q, answer: f.a }));
  const meta = `${category} · ${author} · ${date}`;

  return (
    <article className="bg-black text-white">
      <ArticleJsonLd
        title={title}
        description={description}
        date={date}
        author={author}
        slug={slug}
      />

      {/* ── HERO (matches blog listing page style) ─────────── */}
      <RoundedPageHero titleLines={[title]} subtitle={meta} />

      {/* ── MAIN CONTENT AREA ────────────────────────────── */}
      <div className="w-full px-5 pb-8">
        <div className="max-w-3xl mx-auto">
          {content && <FadeIn className="prose-dark mb-4">{content}</FadeIn>}

          {takeaways.length > 0 && <KeyTakeaways items={takeaways} />}

          {quote && (
            <QuoteBlock quote={quote.quote} author={quote.author} role={quote.role} />
          )}

          {principles && (
            <NumberedPrinciples
              title={principles.title}
              items={principles.items}
            />
          )}

          <Divider />
        </div>
      </div>

      {/* ── FAQ (visible component + FAQPage JSON-LD) ─────── */}
      {faqItems.length > 0 && (
        <>
          <FaqJsonLd faqs={faqs} />
          <FAQ items={faqItems} titleLines={["Frequently", "Asked", "Questions"]} />
        </>
      )}

      {/* ── FINAL CTA (Transform Your Ideas Today) ─────────── */}
      <CTABanner />
    </article>
  );
}
