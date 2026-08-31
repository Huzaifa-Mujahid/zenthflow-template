import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    new URL(url);
  } catch {
    return NextResponse.json({ error: "Invalid URL format" }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY;
  const strategy = searchParams.get("strategy") || "mobile";

  const categories = ["performance", "accessibility", "seo", "best-practices"];
  const categoryParams = categories.map((c) => `category=${c}`).join("&");

  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&${categoryParams}&strategy=${strategy}&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl, {
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.error?.message || "Failed to audit website" },
        { status: response.status }
      );
    }

    const data = await response.json();

    const scores = {};
    categories.forEach((cat) => {
      const catData = data.lighthouseResult?.categories?.[cat];
      scores[cat] = {
        score: Math.round((catData?.score || 0) * 100),
        title: catData?.title || cat,
      };
    });

    const metrics = {};
    const metricKeys = [
      "first-contentful-paint",
      "largest-contentful-paint",
      "total-blocking-time",
      "cumulative-layout-shift",
      "speed-index",
      "interactive",
    ];

    metricKeys.forEach((key) => {
      const metric = data.lighthouseResult?.audits?.[key];
      if (metric) {
        metrics[key] = {
          value: metric.displayValue || metric.numericValue?.toString(),
          score: metric.score,
          title: metric.title,
        };
      }
    });

    const opportunities = [];
    const opportunityAudits = data.lighthouseResult?.audits || {};
    Object.values(opportunityAudits).forEach((audit) => {
      if (audit.details?.type === "opportunity" && audit.details?.overallSavingsMs > 0) {
        opportunities.push({
          title: audit.title,
          description: audit.description,
          savings: audit.displayValue,
        });
      }
    });

    return NextResponse.json({
      url,
      strategy,
      scores,
      metrics,
      opportunities: opportunities.slice(0, 5),
      fetchedAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to connect to PageSpeed API" },
      { status: 500 }
    );
  }
}
