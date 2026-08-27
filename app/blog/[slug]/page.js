import { notFound } from "next/navigation";
import BlogPostLayout from "@/components/BlogPostLayout";
import { getAllPosts, getPostBySlug } from "@/data/blogData";

/* ── Page ── */
export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <BlogPostLayout
      title={post.title}
      category={post.category}
      author={post.author}
      date={post.date}
      heroImage={post.heroImage}
      content={post.content}
      takeaways={post.takeaways ?? []}
      quote={post.quote}
      principles={post.principles}
      ctaBanner={post.ctaBanner}
      faqs={post.faqs ?? []}
      slug={post.slug}
      description={post.description}
    />
  );
}

/* ── Static params for all posts ── */
export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

/* ── Metadata ── */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return {
      title: "Blog | ORBITIX DIGITAL",
      description: "Read the latest insights from ORBITIX DIGITAL.",
    };
  }
  return {
    title: `${post.title} | ORBITIX DIGITAL Blog`,
    description: post.description,
    alternates: {
      canonical: `https://orbitixdigital.com/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `https://orbitixdigital.com/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}
