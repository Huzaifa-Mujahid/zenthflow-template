"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Globe, Loader2, ChevronDown, ChevronUp, ArrowUpRight, Gauge, Accessibility, SearchCheck, ShieldCheck } from "lucide-react";

const scoreIcons = {
  performance: Gauge,
  accessibility: Accessibility,
  seo: SearchCheck,
  "best-practices": ShieldCheck,
};

const scoreColors = {
  high: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400" },
  medium: { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-400" },
  low: { bg: "bg-red-500/10", border: "border-red-500/30", text: "text-red-400" },
};

function getScoreLevel(score) {
  if (score >= 90) return "high";
  if (score >= 50) return "medium";
  return "low";
}

function ScoreRing({ score, size = 80 }) {
  const level = getScoreLevel(score);
  const color = level === "high" ? "#34d399" : level === "medium" ? "#fbbf24" : "#f87171";
  const circumference = 2 * Math.PI * 34;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
        <motion.circle
          cx="40"
          cy="40"
          r="34"
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-lg font-bold">{score}</span>
      </div>
    </div>
  );
}

export default function WebsiteAudit({ initialUrl = "" }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef(null);

  const prevInitialUrl = useRef("");

  useEffect(() => {
    if (initialUrl && initialUrl !== prevInitialUrl.current) {
      prevInitialUrl.current = initialUrl;
      setUrl(initialUrl);
      setResults(null);
      setError(null);
      setLoading(false);
      setProgress(0);
      if (progressInterval.current) clearInterval(progressInterval.current);
      setTimeout(() => runAudit(initialUrl), 100);
    }
  }, [initialUrl]);

  const runAudit = async (auditUrl) => {
    if (!auditUrl.trim()) return;

    let formattedUrl = auditUrl.trim();
    if (!formattedUrl.startsWith("http://") && !formattedUrl.startsWith("https://")) {
      formattedUrl = "https://" + formattedUrl;
    }

    setLoading(true);
    setError(null);
    setResults(null);
    setProgress(0);

    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval.current);
          return 90;
        }
        return prev + Math.random() * 4;
      });
    }, 500);

    try {
      const res = await fetch(`/api/audit?url=${encodeURIComponent(formattedUrl)}&strategy=mobile`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to audit website");
      }

      setProgress(100);
      setTimeout(() => setProgress(0), 500);
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      clearInterval(progressInterval.current);
      setLoading(false);
    }
  };

  const handleAudit = async (e) => {
    e.preventDefault();
    runAudit(url);
  };

  return (
    <section id="free-audit" className="py-16 px-3 sm:px-4 lg:px-5 bg-black relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto rounded-[24px] border border-neutral-800 overflow-hidden relative">
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ 
            backgroundImage: 'url("/sections-bg/blur copper.png")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            opacity: 0.15 
          }} 
        />
        <div className="relative z-10 px-5 md:px-20 py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="font-label text-[#a8a8a8] block mb-5">Complimentary Website Audit</span>
            <h2
              className="font-display chrome-text uppercase mb-4"
              style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
            >
              How Fast Is Your Website?
            </h2>
            <p className="text-[#8e9192] text-lg max-w-2xl mx-auto">
              Input your website URL to receive a complimentary performance analysis powered by Google PageSpeed Insights.
            </p>
          </motion.div>

          {/* Input Form */}
          <motion.form
            onSubmit={handleAudit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Globe size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666] z-10 pointer-events-none" />
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter your website URL (e.g., google.com)"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-[#666] focus:outline-none focus:border-white/30 transition-colors text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={loading || !url.trim()}
                className="bg-white text-black px-6 py-4 rounded-xl font-medium text-sm hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Search size={18} />
                )}
                {loading ? "Analyzing..." : "Audit"}
              </button>
            </div>
          </motion.form>

          {/* Percentage Loader */}
          <AnimatePresence>
            {loading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="max-w-2xl mx-auto mb-12 flex flex-col items-center gap-4"
              >
                <div className="relative w-24 h-24">
                  <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
                    <circle
                      cx="50" cy="50" r="42" fill="none"
                      stroke="#C57035"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 42}`}
                      strokeDashoffset={`${2 * Math.PI * 42 * (1 - progress / 100)}`}
                      className="transition-all duration-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">{Math.round(progress)}%</span>
                  </div>
                </div>
                <p className="text-[#8e9192] text-sm">Analyzing your website...</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="max-w-2xl mx-auto mb-8 bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm text-center"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results */}
          <AnimatePresence>
            {results && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                {/* Score Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {Object.entries(results.scores).map(([key, data]) => {
                    const Icon = scoreIcons[key] || Gauge;
                    const level = getScoreLevel(data.score);
                    const colors = scoreColors[level];
                    return (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 * Object.keys(results.scores).indexOf(key) }}
                        className={`${colors.bg} ${colors.border} border rounded-2xl p-5 flex flex-col items-center gap-3`}
                      >
                        <Icon size={20} className={colors.text} />
                        <ScoreRing score={data.score} />
                        <span className="text-[#a8a8a8] text-xs text-center capitalize">{key.replace("-", " ")}</span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Core Web Vitals */}
                <div className="bg-white/5 rounded-2xl border border-white/5 p-6 mb-6">
                  <h3 className="text-white font-medium mb-4">Core Web Vitals</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(results.metrics).map(([key, data]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-[#666] text-xs mb-1">{data.title}</span>
                        <span className="text-white text-sm font-medium">{data.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Opportunities Toggle */}
                {results.opportunities?.length > 0 && (
                  <div className="bg-white/5 rounded-2xl border border-white/5 overflow-hidden">
                    <button
                      onClick={() => setShowDetails(!showDetails)}
                      className="w-full px-6 py-4 flex items-center justify-between text-white text-sm font-medium hover:bg-white/5 transition-colors"
                    >
                      <span>{results.opportunities.length} Improvement Opportunities Found</span>
                      {showDetails ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    <AnimatePresence>
                      {showDetails && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 flex flex-col gap-3">
                            {results.opportunities.map((opp, i) => (
                              <div key={i} className="flex items-start gap-3 text-sm">
                                <ArrowUpRight size={14} className="text-[#666] mt-0.5 shrink-0" />
                                <div>
                                  <span className="text-white">{opp.title}</span>
                                  <span className="text-[#666] ml-2">({opp.savings})</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
