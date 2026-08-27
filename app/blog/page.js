"use client";

import Link from "next/link";
import { getAllPosts } from "@/data/blogData";
import RoundedPageHero from "@/components/RoundedPageHero";
import CTABanner from "@/components/CTABanner";
import OrangeButton from "@/components/OrangeButton";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-black min-h-screen">
      {/* ── HERO ───────────────────────────────────── */}
      <RoundedPageHero
        titleLines={["Our Latest Insights", "& Updates"]}
        subtitle="Read our latest articles, industry insights, and digital strategies to stay ahead of the curve."
      />

      {/* Blog Posts Grid */}
      <div className="w-full relative p-3 sm:p-4 lg:p-5">
        <div className="relative w-full bg-[#0D0D0D] rounded-[32px] overflow-hidden border border-neutral-800 shadow-2xl pb-16 min-h-[40vh]">
          {/* Diamond Gray Background Image (Matching Portfolio Style) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "url('/sections-bg/diomond gray.png')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              opacity: 0.8,
            }}
          />

          <section className="relative z-10 px-5 md:px-10 lg:px-20 max-w-[1440px] mx-auto py-20">
            <h2 className="text-white text-3xl md:text-4xl font-headline font-bold mb-12 uppercase text-center md:text-left" style={{ fontFamily: "var(--font-geist)" }}>
              Recent blog posts
            </h2>

            {posts.length === 0 ? (
              <p className="text-[#8e9192] text-lg">
                No posts published yet — check back soon.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, idx) => (
                  <Link
                    key={idx}
                    href={`/blog/${post.slug}`}
                    className="flex flex-col group cursor-pointer bg-black/40 backdrop-blur-sm p-4 rounded-2xl border border-white/5 hover:bg-black/60 hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-full aspect-[4/3] rounded-[16px] overflow-hidden mb-5 relative">
                      {post.heroImage ? (
                        <img
                          src={post.heroImage}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-neutral-800 via-neutral-900 to-black" />
                      )}
                    </div>
                    <h3 className="text-white text-xl font-headline font-semibold mb-3 leading-snug" style={{ fontFamily: "var(--font-geist)" }}>
                      {post.title}
                    </h3>
                    <p className="text-[#8e9192] text-base font-body mb-6 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-800 border border-white/20 flex items-center justify-center text-sm text-neutral-300 font-medium">
                        {post.author?.[0] || "Z"}
                      </div>
                      <p className="text-sm text-neutral-400 font-body">
                        <span className="text-white font-medium">{post.author}</span>
                        <br />
                        {post.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {posts.length > 3 && (
              <div className="mt-16 flex justify-center">
                <OrangeButton href="#" label="Load more..." variant="white" />
              </div>
            )}
          </section>
        </div>
      </div>

      {/* ── CTA BANNER ─────────────────────────────── */}
      <CTABanner />
    </div>
  );
}
