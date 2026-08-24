"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#000000",
        color: "#ffffff",
        fontFamily: "var(--font-geist), sans-serif",
        textAlign: "center",
        padding: "2rem",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)' }} />

      {/* Animated 404 Text */}
      <div
        className="font-display"
        style={{
          fontSize: "clamp(6rem, 20vw, 12rem)",
          fontWeight: "900",
          background: "linear-gradient(135deg, #ffffff, #8a8f92, #444748)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          lineHeight: 1,
          marginBottom: "1rem",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(-30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        404
      </div>

      <h1
        className="font-display uppercase tracking-widest"
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          fontWeight: "700",
          marginBottom: "1rem",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
        }}
      >
        Page Not Found
      </h1>

      <p
        className="font-body"
        style={{
          fontSize: "1.1rem",
          color: "#8e9192",
          maxWidth: "400px",
          marginBottom: "2.5rem",
          lineHeight: 1.6,
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
        }}
      >
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="font-label uppercase tracking-widest"
        style={{
          padding: "1rem 2.5rem",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "#e5e5e5",
          textDecoration: "none",
          borderRadius: "8px",
          fontSize: "0.9rem",
          fontWeight: "500",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.background = "linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(255,255,255,0.05))";
          e.currentTarget.style.boxShadow = "0 8px 30px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.background = "linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(255,255,255,0.03))";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)";
        }}
      >
        Return to Home
      </Link>
    </div>
  );
}
