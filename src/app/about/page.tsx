import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Ted",
  description: "Ted helps you shop on WhatsApp with a photo or text. Learn about our mission, team and timeline.",
};

function TedMark({ size = 26, variant = "green" }: { size?: number; variant?: "green" | "white" }) {
  const bg = variant === "white" ? "#F8FAF7" : "#2EE59D";
  const fg = variant === "white" ? "#111827" : "#053E37";
  const iconSize = Math.round(size * 0.72);

  return (
    <span aria-hidden="true" style={{ width: size, height: size, borderRadius: 999, background: bg, color: fg, display: "grid", placeItems: "center", flexShrink: 0, overflow: "hidden" }}>
      <svg width={iconSize} height={iconSize} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ display: "block" }}>
        <circle cx="11.2" cy="12.2" r="2.3" fill="currentColor" />
        <path d="M18.1 13.4 Q20.3 8.6 22.5 13.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" className="ted-wink-closed" />
        <circle cx="20.3" cy="12.2" r="2.3" fill="currentColor" className="ted-wink-open" />
        <path d="M9.5 20 Q16 25.5 22.5 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    </span>
  );
}

export default function AboutPage() {
  return (
    <div className="bv-site" style={{ background: "#F8FAF7", minHeight: "100vh" }}>
      <header style={{ padding: "12px 24px 0", position: "sticky", top: 0, zIndex: 50, background: "rgba(248,250,247,0.9)", backdropFilter: "blur(8px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px 10px 18px", background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 14 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}><span className="ted-wordmark" style={{ fontFamily: "Geist, system-ui", fontWeight: 700, fontSize: 19, letterSpacing: -0.6, color: "#111827" }}>Ted</span><TedMark size={26} /></Link>
          <Link href="/" className="bv-nav-cta" style={{ background: "#111827", color: "#fff", padding: "10px 18px", borderRadius: 999, fontSize: 14, fontWeight: 600, textDecoration: "none", fontFamily: "Geist, system-ui" }}>← Back to home</Link>
        </div>
      </header>

      <main style={{ maxWidth: 1120, margin: "0 auto", padding: "72px 56px 96px" }}>
        <div style={{ maxWidth: 820 }}>
          <div style={{ display: "inline-flex", padding: "6px 14px", borderRadius: 999, background: "#E8FBF1", color: "#053E37", fontSize: 12.5, fontWeight: 600, letterSpacing: 0.2, fontFamily: "Geist, system-ui" }}>About Ted</div>
          <h1 style={{ fontSize: 56, fontWeight: 600, letterSpacing: -2.2, lineHeight: 1.04, margin: "18px 0 0", fontFamily: "Geist, system-ui", color: "#111827" }}>Your WhatsApp shopper.<br /><span style={{ color: "#075E54", fontStyle: "italic" }}>Built for local markets.</span></h1>
          <p style={{ fontSize: 18, color: "#5B6472", lineHeight: 1.6, marginTop: 18, fontFamily: "Geist, system-ui", maxWidth: 640 }}>
            Ted lets you shop on WhatsApp with just a photo or text. No store-hopping, no DMs to ten vendors. Show Ted what you want and he checks every online vendor&apos;s stock near you, ready to buy in chat, free for use.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 56 }}>
          {[
            { k: "Mission", t: "Make local shopping as easy as chatting", d: "Every vendor — from Yaba to Surulere — should be discoverable wherever shoppers already are: WhatsApp. No website, no app, no fees." },
            { k: "How it works", t: "Photo or text → nearby matches", d: "Ted understands images and text, searches 500+ stores, filters by size, price and distance, and returns a native WhatsApp carousel. Tap to chat the seller." },
            { k: "Free forever", t: "No payment, no commission", d: "No subscription, no card, no commission. Shops keep 100%. Shoppers pay only the shop. Ted takes nothing." },
          ].map((c) => (
            <div key={c.k} style={{ background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 24, padding: 28 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.6, textTransform: "uppercase", color: "#075E54" }}>{c.k}</div>
              <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: -0.4, marginTop: 10, color: "#111827", fontFamily: "Geist, system-ui" }}>{c.t}</div>
              <div style={{ fontSize: 14, color: "#5B6472", lineHeight: 1.6, marginTop: 10 }}>{c.d}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 72, display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 48, alignItems: "start" }}>
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 600, letterSpacing: -1, color: "#111827", fontFamily: "Geist, system-ui" }}>Timeline</h2>
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { y: "2024", e: "Idea — shoppers already live on WhatsApp, why make them leave?" },
                { y: "2025", e: "Pilot with 180 vendors in Lagos — photo search + carousels" },
                { y: "2026", e: "500+ stores live, dedicated stores at ted.ng/yourname, NDPR-compliant by design" },
              ].map((r) => (
                <div key={r.y} style={{ display: "flex", gap: 16, padding: "16px 18px", background: "#fff", borderRadius: 16, border: "1px solid rgba(17,24,39,0.06)" }}>
                  <span style={{ background: "#2EE59D", color: "#053E37", padding: "4px 10px", borderRadius: 999, fontSize: 12, fontWeight: 700, height: "fit-content" }}>{r.y}</span>
                  <span style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>{r.e}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 600, letterSpacing: -1, color: "#111827", fontFamily: "Geist, system-ui" }}>Team</h2>
            <p style={{ fontSize: 14, color: "#5B6472", lineHeight: 1.7, marginTop: 12 }}>
              Small team of builders from fintech and market ops, backed by vendors who taught us how shopping actually happens in chat. We&apos;re remote-first, Lagos-rooted, WhatsApp-native.
            </p>
            <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Product", "Engineering", "Vendor Ops", "Trust & Safety"].map((t) => (
                <span key={t} style={{ padding: "6px 12px", borderRadius: 999, background: "#fff", border: "1px solid rgba(17,24,39,0.08)", fontSize: 12.5, fontWeight: 500, color: "#374151", fontFamily: "Geist, system-ui" }}>{t}</span>
              ))}
            </div>
            <Link href="/careers" style={{ display: "inline-flex", marginTop: 18, background: "#111827", color: "#fff", padding: "12px 20px", borderRadius: 12, fontWeight: 600, textDecoration: "none", fontFamily: "Geist, system-ui" }}>View open roles →</Link>
          </div>
        </div>

        <div style={{ marginTop: 72, background: "#111827", color: "#F8FAF7", borderRadius: 24, padding: 32, display: "flex", justifyContent: "space-between", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: 0.6, textTransform: "uppercase", color: "#2EE59D", fontWeight: 700 }}>NDPR Compliant</div>
            <div style={{ fontSize: 18, fontWeight: 600, marginTop: 8 }}>We protect shopper and vendor data.</div>
          </div>
          <Link href="/legal" style={{ background: "#2EE59D", color: "#053E37", padding: "12px 20px", borderRadius: 999, fontWeight: 700, textDecoration: "none", fontFamily: "Geist, system-ui" }}>See NDPR certificate →</Link>
        </div>
      </main>

      <footer style={{ background: "#111827", color: "rgba(248,250,247,0.6)", padding: "32px 56px", fontSize: 13, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span>© 2026 Ted · Free forever ;)</span>
        <Link href="/" style={{ color: "#F8FAF7", textDecoration: "none" }}>ted.ng</Link>
      </footer>
    </div>
  );
}
