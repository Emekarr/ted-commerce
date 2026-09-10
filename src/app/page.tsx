"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ProductImage } from "@/components/product-image";
import { TedMark } from "@/components/ted-mark";
import { Search, ImageIcon, Store, SlidersHorizontal, MessageCircle, ScanSearch, LayoutGrid, ShoppingBag } from "lucide-react";

const HERO_WORDS = ["nearby", "by photo", "instantly", "in stock"];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(-1);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setHeroIdx((i) => (i + 1) % HERO_WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);
  const [chatPhase, setChatPhase] = useState(0);
  useEffect(() => {
    const durations = [1400, 900, 1600, 3200];
    let timeout: ReturnType<typeof setTimeout>;
    const schedule = (phase: number) => {
      timeout = setTimeout(() => {
        const next = (phase + 1) % 4;
        setChatPhase(next);
        schedule(next);
      }, durations[phase]);
    };
    schedule(0);
    return () => clearTimeout(timeout);
  }, []);
  const [stackTyping1, setStackTyping1] = useState(true);
  const [stackTyping2, setStackTyping2] = useState(true);
  useEffect(() => {
    const id1 = setInterval(() => setStackTyping1((v) => !v), 2400);
    const id2 = setInterval(() => setStackTyping2((v) => !v), 2600);
    return () => {
      clearInterval(id1);
      clearInterval(id2);
    };
  }, []);

  return (
    <div className="bv-site" style={{ background: "#F8FAF7" }}>
      <header>
        <nav
          className="bv-nav"
          style={{
            padding: "12px 24px 0",
            background: "linear-gradient(180deg, #F8FAF7 0%, rgba(248,250,247,0.85) 80%, rgba(248,250,247,0) 100%)",
            backdropFilter: "blur(8px)",
            position: "sticky",
            top: 0,
            zIndex: 50,
            transform: "translateY(0)",
            transition: "transform 320ms cubic-bezier(.2,.7,.2,1)",
          }}
          aria-label="Primary"
        >
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              padding: "10px 14px 10px 18px",
              background: "#FFFFFF",
              border: "1px solid rgba(17,24,39,0.08)",
              borderRadius: 14,
            }}
          >
            <Link style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0, gap: 9 }} aria-label="Ted home" href="/">
              <span className="ted-wordmark" style={{ fontFamily: "Geist, system-ui", fontWeight: 700, fontSize: 19, letterSpacing: -0.6, color: "#111827" }}>Ted</span>
              <TedMark size={26} />
            </Link>

            <ul className="bv-nav-links" style={{ display: "flex", gap: 2, listStyle: "none", margin: 0, padding: 0, minWidth: 0 }}>
              <li style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
                <a
                  href="#pricing"
                  aria-label="Pricing - Free forever"
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "8px 14px",
                    textDecoration: "none",
                    fontFamily: "Geist, system-ui",
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "#9AA3AF",
                      textDecoration: "line-through",
                      textDecorationThickness: 1.5,
                      textDecorationColor: "#9AA3AF",
                    }}
                  >
                    Pricing
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      top: -6,
                      right: -10,
                      background: "#2EE59D",
                      color: "#053E37",
                      fontSize: 10,
                      fontWeight: 800,
                      letterSpacing: 0.6,
                      textTransform: "uppercase",
                      padding: "3px 7px",
                      borderRadius: 999,
                      lineHeight: 1,
                      boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
                      transform: "rotate(6deg)",
                    }}
                  >
                    Free
                  </span>
                </a>
              </li>
              <li>
                <div
                  className="bv-nav-menu"
                  data-open={resourcesOpen ? "true" : "false"}
                  onMouseEnter={() => setResourcesOpen(true)}
                  onMouseLeave={() => setResourcesOpen(false)}
                >
                  <button className="bv-nav-menu-trigger" type="button" onClick={() => setResourcesOpen((v) => !v)}>
                    Resources
                    <span className="chev" aria-hidden="true">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true" style={{ display: "block" }}>
                        <path d="M2.5 4.2 L6 7.7 L9.5 4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  <div className="bv-nav-menu-panel">
                    <a className="bv-nav-menu-item" href="#faq">
                      <span className="ico" style={{ background: "#FFE6A8", color: "#111827" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", overflow: "visible" }}>
                          <circle cx="12" cy="12" r="9"></circle>
                          <path d="M9.5 9.5 a2.5 2.5 0 0 1 5 0.5 c0 1.5 -2.5 1.8 -2.5 3.5"></path>
                          <circle cx="12" cy="16.5" r="1" fill="#2EE59D" stroke="none"></circle>
                        </svg>
                      </span>
                      <span><span className="label">FAQ</span><span className="sub">Honest answers to common Qs</span></span>
                    </a>
                    <a className="bv-nav-menu-item" href="/contact">
                      <span className="ico" style={{ background: "#D4D8FF", color: "#111827" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", overflow: "visible" }}>
                          <path d="M5 3 H15 L19 7 V21 H5 Z"></path>
                          <path d="M15 3 V7 H19" fill="#2EE59D" stroke="none" strokeLinejoin="round"></path>
                        </svg>
                      </span>
                      <span><span className="label">Blog</span><span className="sub">The Notebook · essays & data</span></span>
                    </a>
                    <a className="bv-nav-menu-item" href="/contact">
                      <span className="ico" style={{ background: "#E8FBF1", color: "#111827" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", overflow: "visible" }}>
                          <path d="M4 6 a3 3 0 0 1 3 -3 H17 a3 3 0 0 1 3 3 V14 a3 3 0 0 1 -3 3 H10 L5.5 21 V17 a3 3 0 0 1 -1.5 -2.5 Z"></path>
                        </svg>
                      </span>
                      <span><span className="label">Help center</span><span className="sub">Step-by-step guides</span></span>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="bv-nav-menu"
                  data-open={companyOpen ? "true" : "false"}
                  onMouseEnter={() => setCompanyOpen(true)}
                  onMouseLeave={() => setCompanyOpen(false)}
                >
                  <button className="bv-nav-menu-trigger" type="button" onClick={() => setCompanyOpen((v) => !v)}>
                    Company
                    <span className="chev" aria-hidden="true">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true" style={{ display: "block" }}>
                        <path d="M2.5 4.2 L6 7.7 L9.5 4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  <div className="bv-nav-menu-panel">
                    <a className="bv-nav-menu-item" href="/about">
                      <span className="ico" style={{ background: "#E8FBF1", color: "#111827" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", overflow: "visible" }}>
                          <circle cx="12" cy="8" r="4"></circle>
                          <path d="M4 21 c0 -4.5 3.5 -8 8 -8 s8 3.5 8 8"></path>
                        </svg>
                      </span>
                      <span><span className="label">About</span><span className="sub">Mission, team, timeline</span></span>
                    </a>
                    <a className="bv-nav-menu-item" href="/careers">
                      <span className="ico" style={{ background: "#FFE6A8", color: "#111827" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", overflow: "visible" }}>
                          <rect x="3" y="7" width="18" height="13" rx="2"></rect>
                          <path d="M9 7 V5 a2 2 0 0 1 2 -2 H13 a2 2 0 0 1 2 2 V7"></path>
                        </svg>
                      </span>
                      <span><span className="label">Careers</span><span className="sub">We are hiring · Remote</span></span>
                    </a>
                    <a className="bv-nav-menu-item" href="/contact">
                      <span className="ico" style={{ background: "#D4D8FF", color: "#111827" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", overflow: "visible" }}>
                          <path d="M3 6 L21 6 L21 18 L3 18 Z"></path>
                          <path d="M3 6 L12 13.5 L21 6"></path>
                        </svg>
                      </span>
                      <span><span className="label">Contact</span><span className="sub">Talk to sales, support, press</span></span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>

            <div className="bv-nav-ctas" style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
              <a className="bv-nav-cta !text-white hover:!text-black" href="#final">
                Vendor? Start selling <span aria-hidden="true">→</span>
              </a>
            </div>

            <button
              className="bv-nav-hamburger"
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="bv-mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="19" y2="6"></line>
                <line x1="3" y1="11" x2="19" y2="11"></line>
                <line x1="3" y1="16" x2="19" y2="16"></line>
              </svg>
            </button>
          </div>
        </nav>

        <div className={`bv-mobile-drawer ${mobileOpen ? "is-open" : ""}`}>
          <div className="bv-mobile-drawer-scrim" onClick={() => setMobileOpen(false)} />
          <div className="bv-mobile-drawer-panel">
            <div className="bv-mobile-drawer-head">
              <span style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 700 }}>
                Ted <TedMark size={26} />
              </span>
              <button className="bv-mobile-drawer-x" onClick={() => setMobileOpen(false)} aria-label="Close">
                ✕
              </button>
            </div>
            <a href="#features" onClick={() => setMobileOpen(false)}>Features</a>
            <a href="#how" onClick={() => setMobileOpen(false)}>How it works</a>
            <a href="#showcase" onClick={() => setMobileOpen(false)}>Your Store</a>
            <a href="#pricing" onClick={() => setMobileOpen(false)}>Free</a>
            <a href="#faq" onClick={() => setMobileOpen(false)}>FAQ</a>
            <a className="bv-mobile-drawer-cta" href="#final" onClick={() => setMobileOpen(false)}>Get started →</a>
          </div>
        </div>
      </header>

      <section className="bv-hero" id="start-free-anchor" style={{ position: "relative", overflow: "hidden", padding: "72px 56px 0" }}>
        <div
          className="bv-hero-inner"
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1240,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            paddingTop: 24,
            paddingBottom: 56,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 12.5,
              fontWeight: 700,
              letterSpacing: 1.1,
              textTransform: "uppercase",
              color: "#075E54",
              background: "#E8FBF1",
              padding: "7px 15px",
              borderRadius: 999,
              marginBottom: 26,
              fontFamily: "Geist, system-ui",
            }}
          >
            Free forever · No payment needed
          </div>

          <h1
            className="bv-h1"
            style={{
              fontSize: 88,
              lineHeight: 1.05,
              letterSpacing: -3.2,
              fontWeight: 600,
              color: "#111827",
              margin: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Geist, system-ui",
              maxWidth: 1100,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0 0.28em",
                textAlign: "center",
                lineHeight: 1.05,
              }}
            >
              <span>Find it</span>
              <span className="bv-h1-bubble" style={{ display: "inline-flex", alignItems: "center" }}>
                <span className="hero-bubble-wrap" style={{ transition: "transform 0.35s cubic-bezier(.2,.7,.2,1)" }}>
                  <span
                    className="bv-h1-pill"
                    key={heroIdx}
                    style={{
                      position: "relative",
                      background: "#2EE59D",
                      color: "#053E37",
                      padding: "6px 22px 12px",
                      borderRadius: "6px 22px 22px",
                      fontStyle: "italic",
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      minWidth: 140,
                      justifyContent: "center",
                      transition: "all 0.4s cubic-bezier(.2,.7,.2,1)",
                      animation: "heroPillIn 0.45s cubic-bezier(.2,.7,.2,1)",
                    }}
                  >
                    <span style={{ display: "inline-block", whiteSpace: "nowrap", transition: "opacity 0.3s, transform 0.3s" }}>{HERO_WORDS[heroIdx]}</span>
                  </span>
                  <style>{`@keyframes heroPillIn{0%{transform:translateY(8px) scale(0.96);opacity:0.6}100%{transform:translateY(0) scale(1);opacity:1}}`}</style>
                </span>
              </span>
              <span>on WhatsApp.</span>
            </span>
          </h1>

          <p
            className="bv-hero-sub"
            style={{
              fontSize: 16,
              lineHeight: 1.55,
              color: "#5B6472",
              maxWidth: 600,
              margin: "32px 0 36px",
              fontWeight: 400,
              fontFamily: "Geist, system-ui",
              textWrap: "pretty",
            }}
          >
            Describe what you&apos;re looking for or send a photo. Ted searches local stores and finds what you want.
          </p>

          <div className="bv-hero-cta-row" style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
            <a className="hero-cta-primary" style={{ textDecoration: "none", color: "white" }} href="#final">
              Text Ted. Get started.<span aria-hidden="true" style={{ opacity: 0.9 }}>→</span>
            </a>
            <a href="#how" style={{ textDecoration: "none" }}>
              <button
                type="button"
                style={{
                  background: "transparent",
                  color: "#111827",
                  border: "1px solid rgba(17,24,39,0.08)",
                  padding: "16px 24px",
                  minHeight: 48,
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 500,
                  cursor: "pointer",
                  fontFamily: "Geist, system-ui",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                Vendor? Start selling
              </button>
            </a>
          </div>
        </div>

        <div
          className="bv-chat-wrap"
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 760,
            margin: "0 auto",
            padding: "32px 0 0",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
            paddingBottom: 0,
            marginBottom: -40,
          }}
        >
          <div style={{ position: "relative", width: "100%", maxWidth: 380, margin: "0 auto", fontFamily: "Geist, system-ui, sans-serif" }}>
            <div style={{ background: "#000", borderRadius: 44, padding: 8, overflow: "hidden", position: "relative", zIndex: 2 }}>
              <div
                style={{
                  background: "#075E54",
                  color: "#fff",
                  padding: "12px 20px 8px",
                  borderRadius: "36px 36px 0 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: 12,
                }}
              >
                <span style={{ fontWeight: 600, fontSize: 13 }}>9:41</span>
                <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                  <span style={{ fontSize: 11 }}>●●●●</span>
                  <svg width="16" height="11" viewBox="0 0 16 11">
                    <path d="M0 11h2V7H0v4Zm4 0h2V4H4v7Zm4 0h2V0H8v11Zm4 0h2V2h-2v9Z" fill="currentColor"></path>
                  </svg>
                  <svg width="22" height="11" viewBox="0 0 22 11">
                    <rect x="0.5" y="0.5" width="18" height="10" rx="2" fill="none" stroke="currentColor"></rect>
                    <rect x="2" y="2" width="14" height="7" rx="1" fill="currentColor"></rect>
                    <rect x="19" y="3.5" width="2" height="4" rx="0.5" fill="currentColor"></rect>
                  </svg>
                </div>
              </div>

              <div style={{ background: "#075E54", color: "#fff", padding: "8px 14px 14px", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 18, color: "#ECE5DD", opacity: 0.85 }}>‹</span>
                <div style={{ width: 36, height: 36, borderRadius: 50, background: "#2EE59D", color: "#053E37", display: "grid", placeItems: "center", overflow: "hidden" }}>
                  <svg width={26} height={26} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ display: "block" }}>
                    <circle cx="11.2" cy="12.2" r="2.3" fill="currentColor" />
                    <path d="M18.1 13.4 Q20.3 8.6 22.5 13.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" className="ted-wink-closed" />
                    <circle cx="20.3" cy="12.2" r="2.3" fill="currentColor" className="ted-wink-open" />
                    <path d="M9.5 20 Q16 25.5 22.5 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14.5, fontWeight: 600 }}>Ted</div>
                  <div style={{ fontSize: 11, opacity: 0.9, display: "inline-flex", alignItems: "center", gap: 5, marginTop: 1 }}>
                    <span style={{ width: 6, height: 6, borderRadius: 50, background: "#2EE59D" }} />
                    answered instantly
                  </div>
                </div>
                <span style={{ fontSize: 18, color: "#ECE5DD", opacity: 0.85, letterSpacing: 2 }}>⋮</span>
              </div>

              <div style={{ background: "#ECE5DD", padding: "14px 12px", display: "flex", flexDirection: "column", gap: 6, height: 460, overflowY: "hidden" }}>
                <style>{`@keyframes waDot{0%,80%,100%{opacity:0.3;transform:translateY(0)}40%{opacity:1;transform:translateY(-3px)}}@keyframes waIn{0%{opacity:0;transform:translateY(6px) scale(0.98)}100%{opacity:1;transform:translateY(0) scale(1)}}`}</style>
                <div
                  style={{
                    alignSelf: "center",
                    background: "rgba(225,245,254,0.92)",
                    color: "#667781",
                    fontSize: 10.5,
                    fontWeight: 600,
                    padding: "3px 10px",
                    borderRadius: 8,
                    letterSpacing: 0.4,
                    marginBottom: 4,
                  }}
                >
                  TODAY
                </div>

                {chatPhase === 0 && (
                  <div style={{ alignSelf: "flex-end", background: "#DCF8C6", borderRadius: "8px 0 8px 8px", padding: "12px 16px", display: "inline-flex", alignItems: "center", gap: 4, boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)", animation: "waIn 0.25s ease" }}>
                    <span style={{ width: 6, height: 6, borderRadius: 999, background: "#667781", display: "inline-block", animation: "waDot 1s infinite" }} />
                    <span style={{ width: 6, height: 6, borderRadius: 999, background: "#667781", display: "inline-block", animation: "waDot 1s 0.15s infinite" }} />
                    <span style={{ width: 6, height: 6, borderRadius: 999, background: "#667781", display: "inline-block", animation: "waDot 1s 0.3s infinite" }} />
                  </div>
                )}

                {chatPhase >= 1 && (
                  <div style={{ alignSelf: "flex-end", background: "#DCF8C6", borderRadius: "8px 0 8px 8px", padding: "8px 10px", maxWidth: "78%", fontSize: 13, boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)", animation: chatPhase === 1 ? "waIn 0.3s cubic-bezier(.2,.7,.2,1)" : undefined }}>
                    <div style={{ fontSize: 13, lineHeight: 1.4 }}>red linen shirt, M, under ₦40k near Yaba?</div>
                    <div style={{ fontSize: 10, color: "#667781", textAlign: "right", marginTop: 4 }}>09:41 ✓✓</div>
                  </div>
                )}

                {chatPhase === 2 && (
                  <div style={{ alignSelf: "flex-start", background: "#fff", borderRadius: "0 8px 8px 8px", padding: "12px 14px", display: "inline-flex", alignItems: "center", gap: 4, boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)", animation: "waIn 0.25s ease" }}>
                    <span style={{ width: 6, height: 6, borderRadius: 999, background: "#075E54", display: "inline-block", animation: "waDot 1s infinite" }} />
                    <span style={{ width: 6, height: 6, borderRadius: 999, background: "#075E54", display: "inline-block", animation: "waDot 1s 0.15s infinite" }} />
                    <span style={{ width: 6, height: 6, borderRadius: 999, background: "#075E54", display: "inline-block", animation: "waDot 1s 0.3s infinite" }} />
                  </div>
                )}

                {chatPhase === 3 && (
                  <>
                    <div style={{ alignSelf: "flex-start", background: "#fff", borderRadius: "0 8px 8px 8px", padding: "8px 10px", maxWidth: "82%", fontSize: 13, boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)", animation: "waIn 0.35s cubic-bezier(.2,.7,.2,1)" }}>
                      Found 3 nearby — all in stock:
                    </div>
                    <div style={{ alignSelf: "flex-start", background: "#fff", borderRadius: 8, padding: 8, maxWidth: "92%", display: "flex", gap: 8, animation: "waIn 0.4s 0.08s both cubic-bezier(.2,.7,.2,1)" }}>
                      <div style={{ flex: 1, background: "#F8FAF7", borderRadius: 10, padding: 6, border: "1px solid rgba(17,24,39,0.06)" }}>
                        <ProductImage src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=200&q=80&auto=format&fit=crop" alt="Shirt · M" style={{ width: "100%", height: 44, objectFit: "cover", borderRadius: 6, display: "block" }} loading="lazy" />
                        <div style={{ fontSize: 10, fontWeight: 600, marginTop: 4 }}>Shirt · M</div>
                        <div style={{ fontSize: 11, fontWeight: 700 }}>₦32k</div>
                        <div style={{ fontSize: 9, color: "#5B6472" }}>Yaba · 0.8km</div>
                      </div>
                      <div style={{ flex: 1, background: "#F8FAF7", borderRadius: 10, padding: 6, border: "1px solid rgba(17,24,39,0.06)" }}>
                        <ProductImage src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=200&q=80&auto=format&fit=crop" alt="Shirt · M" style={{ width: "100%", height: 44, objectFit: "cover", borderRadius: 6, display: "block" }} loading="lazy" />
                        <div style={{ fontSize: 10, fontWeight: 600, marginTop: 4 }}>Shirt · M</div>
                        <div style={{ fontSize: 11, fontWeight: 700 }}>₦38k</div>
                        <div style={{ fontSize: 9, color: "#5B6472" }}>Ikeja · 2.1km</div>
                      </div>
                      <div style={{ flex: 1, background: "#F8FAF7", borderRadius: 10, padding: 6, border: "1px solid rgba(17,24,39,0.06)" }}>
                        <ProductImage src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=200&q=80&auto=format&fit=crop" alt="Shirt · L" style={{ width: "100%", height: 44, objectFit: "cover", borderRadius: 6, display: "block" }} loading="lazy" />
                        <div style={{ fontSize: 10, fontWeight: 600, marginTop: 4 }}>Shirt · L</div>
                        <div style={{ fontSize: 11, fontWeight: 700 }}>₦29k</div>
                        <div style={{ fontSize: 9, color: "#5B6472" }}>Surulere</div>
                      </div>
                    </div>
                    <div style={{ alignSelf: "flex-start", fontSize: 11, color: "#075E54", fontWeight: 600, marginTop: 2, animation: "waIn 0.4s 0.16s both" }}>↳ Tap View to chat vendor directly</div>
                  </>
                )}
              </div>

              <div style={{ background: "#F0F2F5", padding: "8px 10px", display: "flex", gap: 8, alignItems: "center" }}>
                <span
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 50,
                    background: "#fff",
                    color: "#667781",
                    display: "grid",
                    placeItems: "center",
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  +
                </span>
                <div style={{ flex: 1, background: "#fff", borderRadius: 18, padding: "8px 14px", fontSize: 13, color: "#667781" }}>Message Ted…</div>
                <span
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 50,
                    background: "#075E54",
                    color: "#fff",
                    display: "grid",
                    placeItems: "center",
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  ➤
                </span>
              </div>
            </div>

            <div
              className="bv-chat-floating-metric"
              style={{
                position: "absolute",
                bottom: 80,
                left: -90,
                background: "#111827",
                color: "#fff",
                borderRadius: 14,
                padding: "12px 14px",
                minWidth: 200,
                zIndex: 3,
              }}
            >
              <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: 0.6, fontWeight: 500 }}>Shop from over 500 stores using Ted</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 4 }}>
                <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.8 }}>500+</span>
                <span style={{ fontSize: 11.5, color: "#2EE59D", fontWeight: 600 }}>stores</span>
              </div>
              <svg width="100%" height="22" viewBox="0 0 200 22" style={{ marginTop: 4 }}>
                <polyline fill="none" stroke="#2EE59D" strokeWidth="1.6" strokeLinecap="round" points="0,16 18,14 36,15 54,11 72,12 90,8 108,10 126,6 144,8 162,4 180,5 200,2"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <div className="bv-mobile-sticky-bar">
        <a style={{ flex: 1, textDecoration: "none" }} href="#final">
          <button type="button">Get started — Ted is free →</button>
        </a>
      </div>

      <main id="main">

        <section className="bv-velocity" aria-hidden="true" style={{ padding: "120px 0", background: "#111827", color: "#F8FAF7", overflow: "hidden", position: "relative" }}>
          <style>{`@keyframes bvVelocityScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}@keyframes bvVelocityScrollReverse{0%{transform:translateX(-50%)}100%{transform:translateX(0)}}`}</style>
          <div style={{ overflow: "hidden", whiteSpace: "nowrap", display: "flex" }}>
            <div style={{ display: "flex", whiteSpace: "nowrap", gap: 40, flexShrink: 0, animation: "bvVelocityScroll 22s linear infinite", willChange: "transform" }}>
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={`g-${i}`}><span className="bv-velocity-text" style={{ fontSize: 88, fontWeight: 600, letterSpacing: -3, color: "#2EE59D", marginRight: 40, fontFamily: "Geist, system-ui" }}>fashion · skincare · hair · food · gadgets · thrift · perfumes · beauty ·</span></span>
              ))}
            </div>
          </div>
          <div style={{ overflow: "hidden", whiteSpace: "nowrap", display: "flex", marginTop: 6 }}>
            <div style={{ display: "flex", whiteSpace: "nowrap", gap: 40, flexShrink: 0, animation: "bvVelocityScrollReverse 22s linear infinite", willChange: "transform" }}>
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={`w-${i}`}><span className="bv-velocity-text" style={{ fontSize: 88, fontWeight: 600, letterSpacing: -3, color: "#F8FAF7", marginRight: 40, fontFamily: "Geist, system-ui" }}>fashion · skincare · hair · food · gadgets · thrift · perfumes · beauty ·</span></span>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="bv-section" aria-labelledby="features-heading" style={{ padding: "120px 56px", background: "#F8FAF7" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ marginBottom: 72, maxWidth: 720 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 14px",
                  borderRadius: 999,
                  background: "#E8FBF1",
                  color: "#053E37",
                  fontSize: 12.5,
                  fontWeight: 600,
                  letterSpacing: 0.2,
                  fontFamily: "Geist, system-ui",
                  whiteSpace: "nowrap",
                  width: "fit-content",
                }}
              >
                Use Ted for free!
              </div>
              <h2 id="features-heading" className="bv-section-title" style={{ fontSize: 56, fontWeight: 600, letterSpacing: -2.2, lineHeight: 1.04, margin: 0, fontFamily: "Geist, system-ui", color: "#111827", textWrap: "balance", marginTop: 18 }}>
                Everything you need to turn chats into checkouts.
              </h2>
              <p className="bv-section-sub" style={{ fontSize: 18, color: "#5B6472", lineHeight: 1.55, margin: 0, fontFamily: "Geist, system-ui", textWrap: "pretty", marginTop: 16 }}>
               Looking for something? Shop with Ted and discover new sellers, stores, and products near you.
              </p>
            </div>

            <div className="bv-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
              <div className="bv-feature-card" style={{ background: "#FFFFFF", color: "#111827", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 24, padding: 32, display: "flex", flexDirection: "column", gap: 18, minHeight: 380, position: "relative", overflow: "hidden" }}>
                <span className="ted-flat-icon" aria-hidden="true"><Search size={18} strokeWidth={1.7} /></span>
                <h3 style={{ fontSize: 28, fontWeight: 600, letterSpacing: -1, lineHeight: 1.1, margin: 0, fontFamily: "Geist, system-ui" }}>Finding what you want shouldn&apos;t be a problem</h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "#5B6472", margin: 0, maxWidth: 460 }}>
                  Shopping locally shouldn&apos;t mean searching Instagram, checking WhatsApp statuses, messaging ten vendors, or asking friends who sells something.
                </p>
                <div style={{ flex: 1, marginTop: 8 }}>
                  <div style={{ background: "#F8FAF7", border: "1px solid rgba(17,24,39,0.06)", borderRadius: 16, padding: 12, marginTop: 12, display: "flex", flexDirection: "column", gap: 10 }}>
                    <div style={{ display: "flex", gap: 8 }}>
                      <ProductImage src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&q=80&auto=format&fit=crop" alt="African Ankara dress" style={{ flex: 1, height: 64, objectFit: "cover", borderRadius: 10, display: "block", border: "2px solid #2EE59D" }} loading="lazy" />
                      <ProductImage src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=200&q=80&auto=format&fit=crop" alt="African lace dress" style={{ flex: 1, height: 64, objectFit: "cover", borderRadius: 10, display: "block", opacity: 0.85 }} loading="lazy" />
                      <ProductImage src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=200&q=80&auto=format&fit=crop" alt="African Ankara set" style={{ flex: 1, height: 64, objectFit: "cover", borderRadius: 10, display: "block", opacity: 0.85 }} loading="lazy" />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontSize: 10, color: "#5B6472" }}>
                      <span style={{ width: 16, height: 1, background: "rgba(17,24,39,0.15)" }} /> <span>try on result</span> <span style={{ width: 16, height: 1, background: "rgba(17,24,39,0.15)" }} /> <span style={{ fontSize: 10, color: "#053E37", fontWeight: 700 }}>↓</span>
                    </div>
                    <div style={{ position: "relative", height: 112, borderRadius: 12, overflow: "hidden", background: "#fff", border: "1px solid rgba(17,24,39,0.06)" }}>
                      <ProductImage src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&q=80&auto=format&fit=crop" alt="Ankara Gown on you" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
                      <span style={{ position: "absolute", bottom: 8, left: 8, fontSize: 10, background: "#111827", color: "#fff", padding: "4px 8px", borderRadius: 999, fontWeight: 600 }}>Ankara Gown · on you</span>
                      <span style={{ position: "absolute", top: 8, right: 8, fontSize: 9, background: "#2EE59D", color: "#053E37", padding: "4px 8px", borderRadius: 999, fontWeight: 700 }}>Try-on</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bv-feature-card" style={{ background: "#111827", color: "#F8FAF7", border: "none", borderRadius: 24, padding: 32, display: "flex", flexDirection: "column", gap: 18, minHeight: 380, position: "relative", overflow: "hidden" }}>
                <span className="ted-flat-icon ted-flat-icon--dark" aria-hidden="true"><ImageIcon size={18} strokeWidth={1.7} /></span>
                <h3 style={{ fontSize: 28, fontWeight: 600, letterSpacing: -1, lineHeight: 1.1, margin: 0, fontFamily: "Geist, system-ui" }}>Got a picture? You can search with just a picture</h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(248,250,247,0.7)", margin: 0, maxWidth: 460 }}>
                  You can search for items with just a picture. Send any photo and Ted finds the same or similar items available near you.
                </p>
                <div style={{ flex: 1, marginTop: 8 }}>
                  <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 12, marginTop: 12, display: "flex", flexDirection: "column", gap: 10 }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <ProductImage src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&q=80&auto=format&fit=crop" alt="Photo you sent" style={{ width: 44, height: 44, borderRadius: 10, objectFit: "cover", flexShrink: 0, display: "block" }} loading="lazy" />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "#F8FAF7" }}>You sent a photo</div>
                        <div style={{ fontSize: 11, color: "rgba(248,250,247,0.6)" }}>Matched 4 visually similar</div>
                      </div>
                      <span style={{ fontSize: 13, background: "#2EE59D", color: "#053E37", padding: "6px 10px", borderRadius: 999, fontWeight: 700 }}>₦25K</span>
                    </div>
                    <div style={{ display: "flex", gap: 8, marginTop: 2 }}>
                      <ProductImage src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=200&q=80&auto=format&fit=crop" alt="" style={{ width: 64, height: 64, borderRadius: 10, objectFit: "cover", flex: 1 }} loading="lazy" />
                      <ProductImage src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=200&q=80&auto=format&fit=crop" alt="" style={{ width: 64, height: 64, borderRadius: 10, objectFit: "cover", flex: 1 }} loading="lazy" />
                      <ProductImage src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=200&q=80&auto=format&fit=crop" alt="" style={{ width: 64, height: 64, borderRadius: 10, objectFit: "cover", flex: 1 }} loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bv-feature-card" style={{ background: "#111827", color: "#F8FAF7", border: "none", borderRadius: 24, padding: 32, display: "flex", flexDirection: "column", gap: 18, minHeight: 380, position: "relative", overflow: "hidden" }}>
                <span className="ted-flat-icon ted-flat-icon--dark" aria-hidden="true"><Store size={18} strokeWidth={1.7} /></span>
                <h3 style={{ fontSize: 28, fontWeight: 600, letterSpacing: -1, lineHeight: 1.1, margin: 0, fontFamily: "Geist, system-ui" }}>Get a dedicated online store</h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(248,250,247,0.7)", margin: 0, maxWidth: 460 }}>
                  A free website for shoppers to search through and buy from — ted.ng/yourname. Share one link, sell directly on WhatsApp. No website needed.
                </p>
                <div style={{ flex: 1, marginTop: 8 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginTop: 12 }}>
                    {[
                      { img: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=400&q=80&auto=format&fit=crop", n: "Ankara Gown", s: "12 in stock" },
                      { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80&auto=format&fit=crop", n: "Silk Set", s: "₦48k" },
                      { img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&q=80&auto=format&fit=crop", n: "Linen Wrap", s: "5 in stock" },
                      { img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80&auto=format&fit=crop", n: "Co-ord Beige", s: "8 in stock" },
                      { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&q=80&auto=format&fit=crop", n: "Pleat Skirt", s: "In stock" },
                      { img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80&auto=format&fit=crop", n: "Mini Dress", s: "20 left" },
                    ].map((p) => (
                      <div key={p.n} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: 6, overflow: "hidden" }}>
                        <ProductImage src={p.img} alt={p.n} style={{ width: "100%", height: 50, objectFit: "cover", borderRadius: 6, display: "block" }} loading="lazy" />
                        <div style={{ fontSize: 10.5, fontWeight: 600, marginTop: 4, color: "#F8FAF7" }}>{p.n}</div>
                        <div style={{ fontSize: 9.5, color: "rgba(248,250,247,0.6)" }}>{p.s}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bv-feature-card" style={{ background: "#FFFFFF", color: "#111827", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 24, padding: 32, display: "flex", flexDirection: "column", gap: 18, minHeight: 380, position: "relative", overflow: "hidden" }}>
                <span className="ted-flat-icon" aria-hidden="true"><SlidersHorizontal size={18} strokeWidth={1.7} /></span>
                <h3 style={{ fontSize: 28, fontWeight: 600, letterSpacing: -1, lineHeight: 1.1, margin: 0, fontFamily: "Geist, system-ui" }}>Shop in detail</h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "#5B6472", margin: 0, maxWidth: 460 }}>
                  Find what you want with just an image — filter by size, price and location to see only close, in-stock matches ready to buy.
                </p>
                <div style={{ flex: 1, marginTop: 8 }}>
                  <div style={{ background: "#F8FAF7", border: "1px solid rgba(17,24,39,0.06)", borderRadius: 16, padding: 12, marginTop: 12, display: "flex", flexDirection: "column", gap: 8, fontFamily: "Geist, system-ui" }}>
                    <div style={{ alignSelf: "flex-start", background: "#fff", borderRadius: "0 10px 10px 10px", padding: "8px 10px", fontSize: 11.5, color: "#111827", boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)", maxWidth: "85%" }}>red ankara gown, ₦25k, near Yaba? — <span style={{ fontWeight: 600 }}>Found 3 nearby</span></div>
                    <div style={{ display: "flex", gap: 8, overflowX: "auto" }}>
                      {[
                        { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&q=80&auto=format&fit=crop", shop: "Aurelia", price: "₦25K", dist: "Yaba · 0.8km" },
                        { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=200&q=80&auto=format&fit=crop", shop: "Mila Studio", price: "₦28K", dist: "Ikeja · 2.1km" },
                        { img: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=200&q=80&auto=format&fit=crop", shop: "Zara Lagos", price: "₦23K", dist: "Surulere" },
                      ].map((x) => (
                        <div key={x.shop} style={{ minWidth: 96, background: "#fff", borderRadius: 10, padding: 6, flex: 1 }}>
                          <ProductImage src={x.img} alt={x.shop} style={{ width: "100%", height: 56, objectFit: "cover", borderRadius: 6, display: "block" }} loading="lazy" />
                          <div style={{ fontSize: 10, fontWeight: 700, color: "#111827", marginTop: 4 }}>{x.price}</div>
                          <div style={{ fontSize: 9, color: "#5B6472", fontWeight: 600 }}>{x.shop}</div>
                          <div style={{ fontSize: 8.5, color: "#5B6472" }}>{x.dist}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ alignSelf: "flex-start", fontSize: 10, color: "#075E54", fontWeight: 700 }}>↳ Tap to chat vendor on WhatsApp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="bv-section" aria-labelledby="how-heading" style={{ padding: "120px 56px", background: "#F8FAF7" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ marginBottom: 72, maxWidth: 720 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 14px",
                  borderRadius: 999,
                  background: "#E8FBF1",
                  color: "#053E37",
                  fontSize: 12.5,
                  fontWeight: 600,
                  letterSpacing: 0.2,
                  fontFamily: "Geist, system-ui",
                  whiteSpace: "nowrap",
                  width: "fit-content",
                }}
              >
                How it works
              </div>
              <h2 id="how-heading" className="bv-section-title" style={{ fontSize: 56, fontWeight: 600, letterSpacing: -2.2, lineHeight: 1.04, margin: 0, fontFamily: "Geist, system-ui", color: "#111827", textWrap: "balance", marginTop: 18 }}>
                From message to nearby
              </h2>
            </div>
            <ol className="bv-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, listStyle: "none", padding: 0, margin: 0 }}>
              <li className="how-card bv-how-card" style={{ padding: 28, borderRadius: 18, background: "#F8FAF7", border: "1px solid rgba(17,24,39,0.08)", display: "flex", flexDirection: "column", gap: 12, position: "relative" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}><span className="ted-flat-icon ted-flat-icon--mint" aria-hidden="true"><MessageCircle size={16} strokeWidth={1.7} /></span><span style={{ fontSize: 12, fontWeight: 600, color: "#075E54", letterSpacing: 0.4 }}>01</span></span>
                <h3 style={{ fontSize: 20, fontWeight: 600, letterSpacing: -0.6, margin: 0, lineHeight: 1.2 }}>Message Ted on WhatsApp</h3>
                <p style={{ fontSize: 14, color: "#5B6472", lineHeight: 1.55, margin: 0 }}>Text what you want — or send a photo. Add your size, budget or area if you like.</p>
              </li>
              <li className="how-card bv-how-card" style={{ padding: 28, borderRadius: 18, background: "#F8FAF7", border: "1px solid rgba(17,24,39,0.08)", display: "flex", flexDirection: "column", gap: 12, position: "relative" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}><span className="ted-flat-icon ted-flat-icon--mint" aria-hidden="true"><ScanSearch size={16} strokeWidth={1.7} /></span><span style={{ fontSize: 12, fontWeight: 600, color: "#075E54", letterSpacing: 0.4 }}>02</span></span>
                <h3 style={{ fontSize: 20, fontWeight: 600, letterSpacing: -0.6, margin: 0, lineHeight: 1.2 }}>Ted checks every nearby shop</h3>
                <p style={{ fontSize: 14, color: "#5B6472", lineHeight: 1.55, margin: 0 }}>Ted looks through all nearby shops at once and keeps only what matches your budget, location, and is actually in stock.</p>
              </li>
              <li className="how-card bv-how-card" style={{ padding: 28, borderRadius: 18, background: "#F8FAF7", border: "1px solid rgba(17,24,39,0.08)", display: "flex", flexDirection: "column", gap: 12, position: "relative" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}><span className="ted-flat-icon ted-flat-icon--mint" aria-hidden="true"><LayoutGrid size={16} strokeWidth={1.7} /></span><span style={{ fontSize: 12, fontWeight: 600, color: "#075E54", letterSpacing: 0.4 }}>03</span></span>
                <h3 style={{ fontSize: 20, fontWeight: 600, letterSpacing: -0.6, margin: 0, lineHeight: 1.2 }}>Get a native carousel</h3>
                <p style={{ fontSize: 14, color: "#5B6472", lineHeight: 1.55, margin: 0 }}>Receive up to 30 nearby matches as a WhatsApp product carousel with image, price, vendor, distance.</p>
              </li>
              <li className="how-card bv-how-card" style={{ padding: 28, borderRadius: 18, background: "#F8FAF7", border: "1px solid rgba(17,24,39,0.08)", display: "flex", flexDirection: "column", gap: 12, position: "relative" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}><span className="ted-flat-icon ted-flat-icon--mint" aria-hidden="true"><ShoppingBag size={16} strokeWidth={1.7} /></span><span style={{ fontSize: 12, fontWeight: 600, color: "#075E54", letterSpacing: 0.4 }}>04</span></span>
                <h3 style={{ fontSize: 20, fontWeight: 600, letterSpacing: -0.6, margin: 0, lineHeight: 1.2 }}>Chat vendor & pay, free</h3>
                <p style={{ fontSize: 14, color: "#5B6472", lineHeight: 1.55, margin: 0 }}>Tap View — you’re connected directly to the local shop on your own WhatsApp. No middleman, no fee.</p>
              </li>
            </ol>
          </div>
        </section>

        <section id="showcase" className="bv-section" aria-labelledby="showcase-heading" style={{ padding: "120px 56px 0", background: "#F8FAF7", borderTop: "1px solid rgba(17,24,39,0.08)" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto 8px", textAlign: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 999,
                background: "#E8FBF1",
                color: "#053E37",
                fontSize: 12.5,
                fontWeight: 600,
                letterSpacing: 0.2,
                fontFamily: "Geist, system-ui",
                whiteSpace: "nowrap",
                width: "fit-content",
                margin: "0 auto",
              }}
            >
              See it in action
            </div>
            <h2 id="showcase-heading" className="bv-section-title" style={{ fontSize: 56, fontWeight: 600, letterSpacing: -2.2, lineHeight: 1.04, margin: 0, fontFamily: "Geist, system-ui", color: "#111827", textWrap: "balance", marginTop: 18, textAlign: "center" }}>
              Watch Ted find it nearby.
            </h2>
          </div>

          <div style={{ position: "relative", maxWidth: 1120, margin: "0 auto" }}>
            <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ top: "calc(-4vh + 0px)", position: "relative", width: "100%", maxWidth: 1120, background: "#075E54", color: "#F8FAF7", borderRadius: 32, overflow: "hidden", transformOrigin: "top center" }}>
                <div className="bv-stack-card-inner" style={{ display: "flex", minHeight: 480 }}>
                  <div className="bv-stack-text" style={{ flex: "1 1 0", padding: 56, display: "flex", flexDirection: "column", justifyContent: "center", gap: 28 }}>
                    <div>
                      <h3 className="bv-stack-h3" style={{ fontSize: 40, lineHeight: 1.08, letterSpacing: -1.4, fontWeight: 600, margin: 0, fontFamily: "Geist, system-ui", whiteSpace: "pre-line", color: "white" }}>
                        Got a picture? Find what you want with just a picture
                      </h3>
                      <p style={{ fontSize: 16.5, lineHeight: 1.55, opacity: 0.82, margin: "18px 0 0", maxWidth: 420, fontFamily: "Geist, system-ui", textWrap: "pretty" }}>
                        You can search for items with just a picture. Send any photo and Ted finds the same or similar items from nearby vendors.
                      </p>
                    </div>
                    <a href="#final" className="bv-card-btn" style={{ "--btn-bg": "#2EE59D", "--btn-fg": "#053E37", "--btn-bg-h": "#F8FAF7", "--btn-fg-h": "#075E54", alignSelf: "flex-start" } as React.CSSProperties}>
                      Try a photo →
                    </a>
                  </div>
                  <div className="bv-stack-visual" style={{ flex: "1 1 0", minWidth: 0, padding: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 18 }}>
                      <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                        <div style={{ alignSelf: "flex-end", background: "#DCF8C6", borderRadius: "12px 12px 0 12px", padding: "8px 12px", fontSize: 13, maxWidth: "85%", color: "#111827" }}>Hi, do you have this in M near Yaba?</div>
                        {stackTyping1 ? (
                          <div style={{ alignSelf: "flex-start", background: "#fff", borderRadius: "0 12px 12px 12px", padding: "10px 14px", display: "inline-flex", gap: 4, alignItems: "center", boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)", animation: "waIn 0.25s ease" }}>
                            <span style={{ width: 6, height: 6, borderRadius: 999, background: "#075E54", display: "inline-block", animation: "waDot 1s infinite" }} />
                            <span style={{ width: 6, height: 6, borderRadius: 999, background: "#075E54", display: "inline-block", animation: "waDot 1s 0.15s infinite" }} />
                            <span style={{ width: 6, height: 6, borderRadius: 999, background: "#075E54", display: "inline-block", animation: "waDot 1s 0.3s infinite" }} />
                          </div>
                        ) : (
                          <div style={{ alignSelf: "flex-start", background: "#fff", borderRadius: "0 12px 12px 12px", padding: "10px 12px", fontSize: 12.5, color: "#111827", boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)", maxWidth: "92%", animation: "waIn 0.35s ease" }}>
                            <span style={{ fontWeight: 600 }}>Found 5 nearby</span> — all in stock, closest first:
                            <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
                              <div style={{ flex: 1, background: "#F8FAF7", borderRadius: 8, padding: 4, border: "1px solid rgba(17,24,39,0.06)", textAlign: "center" }}>
                                <ProductImage src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&q=80&auto=format&fit=crop" alt="Ankara" style={{ width: "100%", height: 48, objectFit: "cover", borderRadius: 6, display: "block" }} loading="lazy" />
                                <div style={{ fontSize: 9, fontWeight: 700, marginTop: 4, color: "#111827" }}>₦25K</div>
                                <div style={{ fontSize: 8, color: "#5B6472", lineHeight: 1.2 }}>Aurelia · 0.8km</div>
                              </div>
                              <div style={{ flex: 1, background: "#F8FAF7", borderRadius: 8, padding: 4, border: "1px solid rgba(17,24,39,0.06)", textAlign: "center" }}>
                                <ProductImage src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=200&q=80&auto=format&fit=crop" alt="" style={{ width: "100%", height: 48, objectFit: "cover", borderRadius: 6, display: "block" }} loading="lazy" />
                                <div style={{ fontSize: 9, fontWeight: 700, marginTop: 4, color: "#111827" }}>₦28K</div>
                                <div style={{ fontSize: 8, color: "#5B6472", lineHeight: 1.2 }}>Mila · 2.1km</div>
                              </div>
                              <div style={{ flex: 1, background: "#F8FAF7", borderRadius: 8, padding: 4, border: "1px solid rgba(17,24,39,0.06)", textAlign: "center" }}>
                                <ProductImage src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=200&q=80&auto=format&fit=crop" alt="" style={{ width: "100%", height: 48, objectFit: "cover", borderRadius: 6, display: "block" }} loading="lazy" />
                                <div style={{ fontSize: 9, fontWeight: 700, marginTop: 4, color: "#111827" }}>₦23K</div>
                                <div style={{ fontSize: 8, color: "#5B6472", lineHeight: 1.2 }}>Zara · Surulere</div>
                              </div>
                            </div>
                          </div>
                        )}
                        {!stackTyping1 && <div style={{ alignSelf: "flex-start", fontSize: 10, color: "#2EE59D", fontWeight: 700, animation: "waIn 0.3s ease" }}>↳ Tap to chat vendor on WhatsApp</div>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ top: "calc(-4vh + 26px)", position: "relative", width: "100%", maxWidth: 1120, background: "#111827", color: "#F8FAF7", borderRadius: 32, overflow: "hidden" }}>
                <div className="bv-stack-card-inner" style={{ display: "flex", minHeight: 480 }}>
                  <div className="bv-stack-text" style={{ flex: "1 1 0", padding: 56, display: "flex", flexDirection: "column", justifyContent: "center", gap: 28 }}>
                    <div>
                      <h3 className="bv-stack-h3" style={{ fontSize: 40, lineHeight: 1.08, letterSpacing: -1.4, fontWeight: 600, margin: 0, fontFamily: "Geist, system-ui", whiteSpace: "pre-line", color: "white" }}>
                        Get a dedicated online store
                      </h3>
                      <p style={{ fontSize: 16.5, lineHeight: 1.55, opacity: 0.82, margin: "18px 0 0", maxWidth: 420, fontFamily: "Geist, system-ui", textWrap: "pretty" }}>
                        A free website for shoppers to search through and buy from — ted.ng/yourname. One link for your whole catalog, checkout on WhatsApp.
                      </p>
                    </div>
                    <a href="#final" className="bv-card-btn" style={{ "--btn-bg": "#2EE59D", "--btn-fg": "#053E37", "--btn-bg-h": "#F8FAF7", "--btn-fg-h": "#075E54", alignSelf: "flex-start" } as React.CSSProperties}>
                      Claim your store →
                    </a>
                  </div>
                  <div className="bv-stack-visual" style={{ flex: "1 1 0", minWidth: 0, padding: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 18 }}>
                      <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 12, display: "flex", flexDirection: "column", gap: 8 }}>
                        <div style={{ alignSelf: "flex-end", background: "#DCF8C6", borderRadius: "12px 12px 0 12px", padding: "6px 8px", display: "inline-flex", alignItems: "center", gap: 8, maxWidth: "85%" }}>
                          <ProductImage src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&q=80&auto=format&fit=crop" alt="You sent" style={{ width: 36, height: 36, borderRadius: 8, objectFit: "cover", flexShrink: 0, display: "block" }} loading="lazy" />
                          <span style={{ fontSize: 11, color: "#111827" }}>You sent a photo • searching…</span>
                        </div>
                        {stackTyping2 ? (
                          <div style={{ alignSelf: "flex-start", background: "#fff", borderRadius: "0 12px 12px 12px", padding: "10px 14px", display: "inline-flex", gap: 4, alignItems: "center", boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)", animation: "waIn 0.25s ease" }}>
                            <span style={{ width: 6, height: 6, borderRadius: 999, background: "#075E54", display: "inline-block", animation: "waDot 1s infinite" }} />
                            <span style={{ width: 6, height: 6, borderRadius: 999, background: "#075E54", display: "inline-block", animation: "waDot 1s 0.15s infinite" }} />
                            <span style={{ width: 6, height: 6, borderRadius: 999, background: "#075E54", display: "inline-block", animation: "waDot 1s 0.3s infinite" }} />
                          </div>
                        ) : (
                          <div style={{ alignSelf: "flex-start", background: "#fff", borderRadius: 12, padding: 8, width: "100%", display: "flex", gap: 8, animation: "waIn 0.35s ease" }}>
                            <div style={{ flex: 1, background: "#F8FAF7", borderRadius: 10, padding: 6, border: "1px solid rgba(17,24,39,0.06)", textAlign: "center" }}>
                              <ProductImage src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&q=80&auto=format&fit=crop" alt="" style={{ width: "100%", height: 48, objectFit: "cover", borderRadius: 6, display: "block" }} loading="lazy" />
                              <div style={{ fontSize: 10, fontWeight: 600, marginTop: 4, color: "#111827" }}>Ankara · 98% match</div>
                              <div style={{ fontSize: 11, fontWeight: 700, color: "#111827" }}>₦32k</div>
                            </div>
                            <div style={{ flex: 1, background: "#F8FAF7", borderRadius: 10, padding: 6, border: "1px solid rgba(17,24,39,0.06)", textAlign: "center" }}>
                              <ProductImage src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&q=80&auto=format&fit=crop" alt="" style={{ width: "100%", height: 48, objectFit: "cover", borderRadius: 6, display: "block" }} loading="lazy" />
                              <div style={{ fontSize: 10, fontWeight: 600, marginTop: 4, color: "#111827" }}>Set · 96% match</div>
                              <div style={{ fontSize: 11, fontWeight: 700, color: "#111827" }}>₦28k</div>
                            </div>
                            <div style={{ flex: 1, background: "#F8FAF7", borderRadius: 10, padding: 6, border: "1px solid rgba(17,24,39,0.06)", textAlign: "center" }}>
                              <ProductImage src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=200&q=80&auto=format&fit=crop" alt="" style={{ width: "100%", height: 48, objectFit: "cover", borderRadius: 6, display: "block" }} loading="lazy" />
                              <div style={{ fontSize: 10, fontWeight: 600, marginTop: 4, color: "#111827" }}>Dress · 95% match</div>
                              <div style={{ fontSize: 11, fontWeight: 700, color: "#111827" }}>₦30k</div>
                            </div>
                          </div>
                        )}
                        {!stackTyping2 && <div style={{ alignSelf: "flex-start", fontSize: 10, color: "#2EE59D", fontWeight: 700, animation: "waIn 0.3s ease" }}>↳ Found 3 visually similar — tap View to chat vendor</div>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ top: "calc(-4vh + 52px)", position: "relative", width: "100%", maxWidth: 1120, background: "#2EE59D", color: "#053E37", borderRadius: 32, overflow: "hidden" }}>
                <div className="bv-stack-card-inner" style={{ display: "flex", minHeight: 480 }}>
                  <div className="bv-stack-text" style={{ flex: "1 1 0", padding: 56, display: "flex", flexDirection: "column", justifyContent: "center", gap: 28 }}>
                    <div>
                      <h3 className="bv-stack-h3" style={{ fontSize: 40, lineHeight: 1.08, letterSpacing: -1.4, fontWeight: 600, margin: 0, fontFamily: "Geist, system-ui", whiteSpace: "pre-line", color: "#000" }}>
                        Shop in detail
                      </h3>
                      <p style={{ fontSize: 16.5, lineHeight: 1.55, opacity: 0.82, margin: "18px 0 0", maxWidth: 420, fontFamily: "Geist, system-ui", textWrap: "pretty" }}>
                        Find what you want with just an image — filter by size, price and distance to see only close, in-stock matches ready to buy.
                      </p>
                    </div>
                    <a href="#final" className="bv-card-btn" style={{ "--btn-bg": "#0F1411", "--btn-fg": "#fff", "--btn-bg-h": "#053E37", "--btn-fg-h": "#fff", alignSelf: "flex-start" } as React.CSSProperties}>
                      Shop now →
                    </a>
                  </div>
                  <div className="bv-stack-visual" style={{ flex: "1 1 0", minWidth: 0, padding: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "100%", background: "rgba(255,255,255,0.92)", border: "1px solid rgba(5,62,55,0.12)", borderRadius: 20, padding: 14, boxShadow: "0 10px 30px rgba(5,62,55,0.12)" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10, padding: "6px 10px", background: "#FFFFFF", borderRadius: 10, border: "1px solid rgba(17,24,39,0.08)" }}>
                        <span style={{ fontSize: 11, fontWeight: 700, color: "#111827", fontFamily: "Geist, system-ui" }}>ted.ng/aurelia</span>
                        <span style={{ fontSize: 10, fontWeight: 600, color: "#075E54", background: "#E8FBF1", padding: "3px 8px", borderRadius: 999 }}>Live · Free</span>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
                        {[
                          { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&q=80&auto=format&fit=crop", n: "Ankara Gown", s: "12 in stock" },
                          { img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&q=80&auto=format&fit=crop", n: "Linen Wrap", s: "₦32,000" },
                          { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80&auto=format&fit=crop", n: "Silk Set", s: "5 in stock" },
                          { img: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=400&q=80&auto=format&fit=crop", n: "Pleat Skirt", s: "8 in stock" },
                          { img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80&auto=format&fit=crop", n: "Co-ord Beige", s: "3 in stock" },
                          { img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80&auto=format&fit=crop", n: "Mini Dress", s: "20 left" },
                        ].map((p) => (
                          <div key={p.n} style={{ background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 10, padding: 6, overflow: "hidden" }}>
                            <ProductImage src={p.img} alt={p.n} style={{ width: "100%", height: 62, objectFit: "cover", borderRadius: 6, display: "block" }} loading="lazy" />
                            <div style={{ fontSize: 10.5, fontWeight: 600, marginTop: 6, color: "#111827", fontFamily: "Geist, system-ui" }}>{p.n}</div>
                            <div style={{ fontSize: 9.5, color: "#5B6472", fontFamily: "Geist, system-ui" }}>{p.s}</div>
                          </div>
                        ))}
                      </div>
                      <div style={{ marginTop: 10, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontSize: 10.5, color: "#053E37", fontWeight: 600, fontFamily: "Geist, system-ui" }}>
                        <span style={{ width: 6, height: 6, borderRadius: 50, background: "#053E37" }} /> Share one link — sell on WhatsApp
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bv-section" aria-labelledby="whofor-heading" style={{ padding: "120px 56px", background: "#F8FAF7", borderTop: "1px solid rgba(17,24,39,0.08)" }}>
          <div className="bv-whofor-grid" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 14px",
                  borderRadius: 999,
                  background: "#E8FBF1",
                  color: "#053E37",
                  fontSize: 12.5,
                  fontWeight: 600,
                  letterSpacing: 0.2,
                  fontFamily: "Geist, system-ui",
                  whiteSpace: "nowrap",
                  width: "fit-content",
                }}
              >
                Who Ted is for
              </div>
              <h2 id="whofor-heading" className="bv-section-title" style={{ fontSize: 56, fontWeight: 600, letterSpacing: -2.2, lineHeight: 1.04, margin: 0, fontFamily: "Geist, system-ui", color: "#111827", textWrap: "balance", marginTop: 18 }}>
                Built for the people who <em style={{ fontStyle: "italic", color: "#075E54" }}>actually</em> shop in chat.
              </h2>
              <p className="bv-section-sub" style={{ fontSize: 18, color: "#5B6472", lineHeight: 1.55, margin: 0, fontFamily: "Geist, system-ui", textWrap: "pretty", marginTop: 16 }}>
                Shoppers who want it now, vendors who live on WhatsApp. Ted makes both free and instant.
              </p>
              <div className="bv-whofor-stats" style={{ display: "flex", gap: 24, marginTop: 32, flexWrap: "wrap" }}>
                <div>
                  <div className="bv-stat-num" style={{ fontSize: 36, fontWeight: 600, letterSpacing: -1.2, color: "#075E54" }}>
                    0.6s
                  </div>
                  <div style={{ fontSize: 13, color: "#5B6472" }}>avg search</div>
                </div>
                <div>
                  <div className="bv-stat-num" style={{ fontSize: 36, fontWeight: 600, letterSpacing: -1.2, color: "#075E54" }}>
                    24/7
                  </div>
                  <div style={{ fontSize: 13, color: "#5B6472" }}>always answering</div>
                </div>
                <div>
                  <div className="bv-stat-num" style={{ fontSize: 36, fontWeight: 600, letterSpacing: -1.2, color: "#075E54" }}>
                    ₦0
                  </div>
                  <div style={{ fontSize: 13, color: "#5B6472" }}>to use & list</div>
                </div>
                <div>
                  <div className="bv-stat-num" style={{ fontSize: 36, fontWeight: 600, letterSpacing: -1.2, color: "#075E54" }}>
                    2 min
                  </div>
                  <div style={{ fontSize: 13, color: "#5B6472" }}>to go live</div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", height: 480, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "column", flexShrink: 0, animation: "vm-scroll 20s linear infinite" }}>
                  {["Fashion sellers", "Beauty and skincare", "Hair vendors", "Food vendors", "Gadget sellers", "Thrift and perfume plugs"].map((t) => (
                    <div
                      key={t}
                      className="vm-item"
                      style={{ fontSize: 56, fontWeight: 500, padding: "24px 0", color: "#075E54", letterSpacing: -1.6, lineHeight: 1, fontFamily: "Geist, system-ui", transition: "opacity 0.1s, transform 0.1s" }}
                    >
                      {t}
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", flexShrink: 0, animation: "vm-scroll 20s linear infinite" }} aria-hidden="true">
                  {["Fashion sellers", "Beauty and skincare", "Hair vendors", "Food vendors", "Gadget sellers", "Thrift and perfume plugs"].map((t) => (
                    <div
                      key={t + "2"}
                      className="vm-item"
                      style={{ fontSize: 56, fontWeight: 500, padding: "24px 0", color: "#075E54", letterSpacing: -1.6, lineHeight: 1, fontFamily: "Geist, system-ui", transition: "opacity 0.1s, transform 0.1s" }}
                    >
                      {t}
                    </div>
                  ))}
                </div>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 180, background: "linear-gradient(to bottom, #F8FAF7, transparent)", pointerEvents: "none", zIndex: 2 }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 180, background: "linear-gradient(to top, #F8FAF7, transparent)", pointerEvents: "none", zIndex: 2 }} />
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bv-section" aria-labelledby="pricing-heading" style={{ padding: "120px 56px", background: "#F8FAF7", borderTop: "1px solid rgba(17,24,39,0.08)" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 64, alignItems: "start" }} className="bv-pricing-split">
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 14px",
                  borderRadius: 999,
                  background: "#E8FBF1",
                  color: "#053E37",
                  fontSize: 12.5,
                  fontWeight: 600,
                  letterSpacing: 0.2,
                  fontFamily: "Geist, system-ui",
                  whiteSpace: "nowrap",
                  width: "fit-content",
                }}
              >
                Pricing
              </div>
              <h2 id="pricing-heading" className="bv-section-title" style={{ fontSize: 56, fontWeight: 600, letterSpacing: -2.2, lineHeight: 1.04, margin: 0, fontFamily: "Geist, system-ui", color: "#111827", textWrap: "balance", marginTop: 18 }}>
                Free forever
              </h2>
              <p className="bv-section-sub" style={{ fontSize: 18, color: "#5B6472", lineHeight: 1.55, margin: 0, fontFamily: "Geist, system-ui", textWrap: "pretty", marginTop: 16 }}>
                No subscription. No payment. Free for Everyone.
              </p>
              <div style={{ marginTop: 28 }}>
                <a href="#final" style={{ textDecoration: "none", display: "inline-block" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#111827", color: "#F8FAF7", padding: "16px 28px", borderRadius: 12, fontSize: 15, fontWeight: 700, fontFamily: "Geist, system-ui" }}>
                    Get started <span aria-hidden="true">→</span>
                  </span>
                </a>
              </div>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                ["No subscription", "Free forever — no monthly fee to keep your shop online"],
                ["No payment, no card", "Start instantly — no card or upfront payment required"],
                ["No commission", "You keep 100% — Ted takes nothing from your sales"],
                ["One search, every shop", "One WhatsApp message checks every nearby shop"],
                ["Search by photo too", "Send a photo or type — Ted understands both"],
                ["Only close & in-stock", "Filtered by budget, size and distance"],
                ["Your own store", "Free ted.ng/yourname — share one link, no website needed"],
                ["Checkout on WhatsApp", "Scrollable carousel — tap to chat the vendor directly on WhatsApp"],
              ].map(([title, desc]) => (
                <li key={title} style={{ fontFamily: "Geist, system-ui", fontSize: 15, lineHeight: 1.5, color: "#111827" }}>
                  <span style={{ fontWeight: 700 }}>{title}</span>
                  <span style={{ fontWeight: 400, color: "#5B6472" }}> — {desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="faq" className="bv-section" aria-labelledby="faq-heading" style={{ padding: "120px 56px", background: "#F8FAF7" }}>
          <div style={{ maxWidth: 880, margin: "0 auto" }}>
            <div style={{ marginBottom: 56, textAlign: "center" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 14px",
                  borderRadius: 999,
                  background: "#E8FBF1",
                  color: "#053E37",
                  fontSize: 12.5,
                  fontWeight: 600,
                  letterSpacing: 0.2,
                  fontFamily: "Geist, system-ui",
                  whiteSpace: "nowrap",
                  width: "fit-content",
                  margin: "0 auto",
                }}
              >
                Frequently asked
              </div>
              <h2 id="faq-heading" className="bv-section-title" style={{ fontSize: 56, fontWeight: 600, letterSpacing: -2.2, lineHeight: 1.04, margin: 0, fontFamily: "Geist, system-ui", color: "#111827", textWrap: "balance", marginTop: 18, textAlign: "center" }}>
                Got questions? We&apos;ve most likely got the answers.
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {[
                {
                  q: "What is Ted?",
                  a: "Ted is your shopping helper on WhatsApp. Message Ted — with words or a photo — and Ted checks every nearby participating shop at once and shows you a scrollable list of in-stock matches you can tap to chat the vendor directly.",
                },
                {
                  q: "Is Ted really free?",
                  a: "Yes. Free to search, free to list, free to get discovered. No subscription, no commission, no card. You only pay the shop when you buy.",
                },
                {
                  q: "Do I need a website or app?",
                  a: "No. Everything happens in WhatsApp — the app you already use. Shoppers just message Ted. Shops get a simple dashboard to add products, no website or coding needed.",
                },
                {
                  q: "How does Ted find my stuff so well?",
                  a: "Just describe it how you would to a friend — or send a photo. Ted understands what you mean, checks all nearby shops, and only shows what’s close, matches your budget, and is actually in stock.",
                },
                {
                  q: "How fast can I start?",
                  a: "Shoppers start instantly — just message Ted on WhatsApp. Shops are live in about 2 minutes after adding products. Most searches come back in under a second.",
                },
                {
                  q: "What if I want to talk to a real person?",
                  a: "Every result connects you straight to the shop’s WhatsApp. Tap to chat the vendor directly — haggle, ask questions, and pay however you both agree.",
                },
              ].map((f, i) => (
                <div
                  key={f.q}
                  style={{
                    borderBottom: "1px solid rgba(17,24,39,0.08)",
                    padding: "0",
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={faqOpen === i}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-q-${i}`}
                    className="bv-faq-q"
                    onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}
                    style={{
                      width: "100%",
                      padding: "22px 0",
                      minHeight: 60,
                      border: "none",
                      background: "transparent",
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontFamily: "Geist, system-ui",
                      fontSize: 17,
                      fontWeight: 600,
                      color: "#111827",
                      gap: 16,
                    }}
                  >
                    <span>{f.q}</span>
                    <span aria-hidden="true" style={{ fontSize: 20, color: "#111827", flexShrink: 0, transform: faqOpen === i ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.2s", lineHeight: 1 }}>
                      +
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                    style={{
                      display: "grid",
                      gridTemplateRows: faqOpen === i ? "1fr" : "0fr",
                      transition: "grid-template-rows 0.28s ease",
                    }}
                  >
                    <div style={{ overflow: "hidden" }}>
                      <div className="bv-faq-a" style={{ padding: "0 0 20px", fontSize: 15, color: "#5B6472", lineHeight: 1.6, opacity: faqOpen === i ? 1 : 0, transition: "opacity 0.2s" }}>
                        {f.a}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="final" aria-labelledby="finalcta-heading" style={{ padding: "80px 24px", background: "#F8FAF7" }}>
          <div
            style={{
              maxWidth: 640,
              margin: "0 auto",
              background: "#053E37",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 24,
              padding: "48px 32px 40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 18,
              textAlign: "center",
            }}
          >
            <TedMark size={32} />

            <h2
              id="finalcta-heading"
              style={{
                fontSize: 28,
                fontWeight: 500,
                letterSpacing: -1,
                lineHeight: 1.1,
                margin: 0,
                fontFamily: "Geist, system-ui",
                color: "#F8FAF7",
                textWrap: "balance",
              }}
            >
              Shop on WhatsApp with Ted
            </h2>

            <p
              style={{
                fontSize: 14,
                color: "rgba(248,250,247,0.62)",
                lineHeight: 1.6,
                margin: 0,
                maxWidth: 420,
                fontFamily: "Geist, system-ui",
                fontWeight: 400,
                textWrap: "pretty",
              }}
            >
              Send a photo or a few words — Ted finds it nearby, in stock and priced.
            </p>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, marginTop: 6 }}>
              <a
                href="/contact"
                aria-label="Contact Ted to start shopping on WhatsApp"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  background: "#F8FAF7",
                  color: "#111827",
                  padding: "14px 24px",
                  minHeight: 44,
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "Geist, system-ui",
                  textDecoration: "none",
                  letterSpacing: -0.1,
                  whiteSpace: "nowrap",
                }}
              >
                Contact Ted <span aria-hidden="true" style={{ opacity: 0.6 }}>→</span>
              </a>
              <span style={{ fontSize: 11, color: "rgba(248,250,247,0.38)", fontFamily: "Geist, system-ui", letterSpacing: 0.12 }}>Free · No card · No subscription</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="bv-footer" style={{ background: "#111827", color: "#F8FAF7", padding: "64px 56px 36px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="bv-footer-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr repeat(4, 1fr)", gap: 32, marginBottom: 48 }}>
            <div className="bv-footer-brand">
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <span className="ted-wordmark" style={{ fontFamily: "Geist, system-ui", fontWeight: 700, fontSize: 18, letterSpacing: -0.5, color: "#fff" }}>Ted</span>
                <TedMark size={28} variant="white" />
              </div>
              <p style={{ fontSize: 13.5, color: "rgba(248,250,247,0.6)", marginTop: 16, lineHeight: 1.55, maxWidth: 280 }}>
                WhatsApp shopping aggregator for local markets. Message or snap to find nearby vendor stock — all inside WhatsApp. Free forever.
              </p>
              <div style={{ display: "flex", gap: 8, marginTop: 22 }} aria-hidden="true">
                <span className="buvvo-social-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", overflow: "visible" }}>
                    <rect x="3.5" y="3.5" width="17" height="17" rx="2.5"></rect>
                    <circle cx="8" cy="8.5" r="1.2" fill="#2EE59D" stroke="none"></circle>
                    <path d="M8 11.5 V17"></path>
                    <path d="M12 17 V13 a2.5 2.5 0 0 1 5 0 V17"></path>
                  </svg>
                </span>
                <span className="buvvo-social-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", overflow: "visible" }}>
                    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5"></rect>
                    <circle cx="12" cy="12" r="4"></circle>
                    <circle cx="17" cy="7" r="1" fill="#2EE59D" stroke="none"></circle>
                  </svg>
                </span>
                <span className="buvvo-social-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", overflow: "visible" }}>
                    <circle cx="9.5" cy="15" r="2.6" fill="#2EE59D" stroke="none"></circle>
                    <path d="M15.5 3 V14 a4.2 4.2 0 1 1 -4.2 -4.2" strokeWidth="2.1"></path>
                    <path d="M15.5 3 c0 2.6 2.1 4.7 4.7 4.7" strokeWidth="2.1"></path>
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: 0.6, textTransform: "uppercase", color: "#2EE59D", marginBottom: 18 }}>Product</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                <li><a className="buvvo-footer-link" href="#features">Features</a></li>
                <li><a className="buvvo-footer-link" href="#how">How it works</a></li>
                <li><a className="buvvo-footer-link" href="#showcase">For Vendors</a></li>
                <li><a className="buvvo-footer-link" href="#pricing">Pricing</a></li>
                <li><a className="buvvo-footer-link" href="/contact">Request a demo</a></li>
                <li><a className="buvvo-footer-link" href="#showcase">Your Store</a></li>
              </ul>
            </div>

            <div>
              <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: 0.6, textTransform: "uppercase", color: "#2EE59D", marginBottom: 18 }}>Company</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                <li><a className="buvvo-footer-link" href="/about">About</a></li>
                <li><a className="buvvo-footer-link" href="/careers">Careers</a></li>
                <li><a className="buvvo-footer-link" href="/contact">Contact</a></li>
              </ul>
            </div>

            <div>
              <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: 0.6, textTransform: "uppercase", color: "#2EE59D", marginBottom: 18 }}>Resources</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                <li><a className="buvvo-footer-link" href="/contact">Help &amp; support</a></li>
                <li><a className="buvvo-footer-link" href="#faq">FAQ</a></li>
                <li><a className="buvvo-footer-link" href="/contact">Updates</a></li>
              </ul>
            </div>

            <div>
              <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: 0.6, textTransform: "uppercase", color: "#2EE59D", marginBottom: 18 }}>Legal</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                <li><a className="buvvo-footer-link" href="/terms">Terms</a></li>
                <li><a className="buvvo-footer-link" href="/privacy">Privacy</a></li>
                <li><a className="buvvo-footer-link" href="/data-deletion">Data deletion</a></li>
                <li><a className="buvvo-footer-link" href="/legal">NDPR Certificate</a></li>
              </ul>
            </div>
          </div>

          <div className="bv-footer-bottom" style={{ borderTop: "1px solid rgba(255,255,255,0.10)", paddingTop: 28, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 14, fontSize: 13, color: "rgba(248,250,247,0.5)" }}>
            <span>© 2026 Ted · Free forever ;)</span>
            <span>Built for local markets · WhatsApp-first</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
