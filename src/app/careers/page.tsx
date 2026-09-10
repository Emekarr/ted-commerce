import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers — Ted",
  description: "Join Ted — help shoppers find it on WhatsApp. Open roles, remote-friendly, Lagos-rooted.",
};

function TedMark({ size = 26 }: { size?: number }) {
  const iconSize = Math.round(size * 0.72);
  return (
    <span aria-hidden="true" style={{ width: size, height: size, borderRadius: 999, background: "#2EE59D", color: "#053E37", display: "grid", placeItems: "center", flexShrink: 0, overflow: "hidden" }}>
      <svg width={iconSize} height={iconSize} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ display: "block" }}>
        <circle cx="11.2" cy="12.2" r="2.3" fill="currentColor" />
        <path d="M18.1 13.4 Q20.3 8.6 22.5 13.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" className="ted-wink-closed" />
        <circle cx="20.3" cy="12.2" r="2.3" fill="currentColor" className="ted-wink-open" />
        <path d="M9.5 20 Q16 25.5 22.5 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    </span>
  );
}

export default function CareersPage() {
  return (
    <div className="bv-site" style={{ background: "#F8FAF7", minHeight: "100vh" }}>
      <header style={{ padding: "12px 24px 0", position: "sticky", top: 0, zIndex: 50, background: "rgba(248,250,247,0.9)", backdropFilter: "blur(8px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px 10px 18px", background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 14 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}><span className="ted-wordmark" style={{ fontFamily: "Geist, system-ui", fontWeight: 700, fontSize: 19, letterSpacing: -0.6, color: "#111827" }}>Ted</span><TedMark size={26} /></Link>
          <Link href="/" style={{ background: "#111827", color: "#fff", padding: "10px 18px", borderRadius: 999, fontSize: 14, fontWeight: 600, textDecoration: "none", fontFamily: "Geist, system-ui" }}>← Back to home</Link>
        </div>
      </header>

      <main style={{ maxWidth: 1120, margin: "0 auto", padding: "72px 56px 96px" }}>
        <div style={{ maxWidth: 800 }}>
          <div style={{ display: "inline-flex", padding: "6px 14px", borderRadius: 999, background: "#E8FBF1", color: "#053E37", fontSize: 12.5, fontWeight: 600, fontFamily: "Geist, system-ui" }}>Careers · We are hiring</div>
          <h1 style={{ fontSize: 56, fontWeight: 600, letterSpacing: -2, lineHeight: 1.05, marginTop: 18, fontFamily: "Geist, system-ui", color: "#111827" }}>Help shoppers find it<br /><span style={{ color: "#075E54", fontStyle: "italic" }}>on WhatsApp.</span></h1>
          <p style={{ fontSize: 18, color: "#5B6472", lineHeight: 1.6, marginTop: 16, maxWidth: 640, fontFamily: "Geist, system-ui" }}>
            Small, fast team. You&apos;ll talk to vendors in Yaba and Tejuosho, ship to 500+ stores, and see your work in WhatsApp the same day. Remote-friendly, Lagos hours.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
            <span style={{ padding: "8px 14px", borderRadius: 999, background: "#111827", color: "#fff", fontSize: 12.5, fontWeight: 600, fontFamily: "Geist, system-ui" }}>Remote · Lagos ±3h</span>
            <span style={{ padding: "8px 14px", borderRadius: 999, background: "#fff", border: "1px solid rgba(17,24,39,0.08)", fontSize: 12.5, fontWeight: 500 }}>NDPR-first, free forever</span>
          </div>
        </div>

        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 32 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.6, textTransform: "uppercase", color: "#9AA3AF", fontFamily: "Geist, system-ui" }}>Open roles — 1 opening</div>
            <div style={{ marginTop: 16, background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 24, padding: 32 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <div style={{ display: "inline-flex", padding: "5px 10px", borderRadius: 999, background: "#FFE6A8", color: "#111827", fontSize: 11, fontWeight: 700, letterSpacing: 0.4, textTransform: "uppercase" }}>New · Full-time</div>
                  <h2 style={{ fontSize: 26, fontWeight: 600, letterSpacing: -0.8, marginTop: 12, color: "#111827", fontFamily: "Geist, system-ui" }}>Senior Product Engineer (WhatsApp)</h2>
                  <div style={{ fontSize: 13, color: "#6B7280", marginTop: 6, fontFamily: "Geist, system-ui" }}>Lagos · Remote · Engineering · ₦ Competitive + equity</div>
                </div>
                <div style={{ height: "fit-content", padding: "6px 10px", borderRadius: 999, background: "#E8FBF1", color: "#053E37", fontSize: 12, fontWeight: 700 }}>Apply by 30 Sep 2026</div>
              </div>

              <div style={{ marginTop: 20, display: "grid", gap: 16, fontSize: 14, color: "#374151", lineHeight: 1.7, fontFamily: "Geist, system-ui" }}>
                <p>Own WhatsApp carousels, photo search, and ted.ng storefronts — from vendor dashboard to chat delivery. You&apos;ll work across Next.js, tRPC, Postgres and WhatsApp Cloud API.</p>
                <div>
                  <div style={{ fontWeight: 700, color: "#111827" }}>What you&apos;ll do</div>
                  <ul style={{ margin: "8px 0 0 18px", display: "flex", flexDirection: "column", gap: 6, color: "#5B6472" }}>
                    <li>Ship vendor catalog & ted.ng store pages (search, inventory, WhatsApp handoff)</li>
                    <li>Improve image search — “send a photo and find it nearby” latency & accuracy</li>
                    <li>Build NDPR-compliant data flows — consent, retention, deletion requests</li>
                    <li>Talk to vendors weekly in Yaba / Ikeja — you build what you see used</li>
                  </ul>
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "#111827" }}>You might be a fit if</div>
                  <ul style={{ margin: "8px 0 0 18px", display: "flex", flexDirection: "column", gap: 6, color: "#5B6472" }}>
                    <li>4+ years building consumer products, comfort with full-stack TypeScript</li>
                    <li>You care about local commerce — not just code</li>
                    <li>You can do a Lagos market walkthrough and translate it into a PR</li>
                  </ul>
                </div>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
                  <a href="mailto:careers@ted.ng?subject=Senior Product Engineer — Ted" style={{ background: "#111827", color: "#fff", padding: "12px 20px", borderRadius: 12, fontWeight: 600, textDecoration: "none" }}>Apply via email →</a>
                  <Link href="/contact" style={{ background: "#fff", color: "#111827", border: "1px solid rgba(17,24,39,0.12)", padding: "12px 20px", borderRadius: 12, fontWeight: 500, textDecoration: "none" }}>Ask a question</Link>
                </div>
                <div style={{ fontSize: 12, color: "#9AA3AF" }}>We reply within 48h. No take-home assignment unless you want one.</div>
              </div>
            </div>

            <div style={{ marginTop: 16, padding: 16, borderRadius: 16, background: "#F8FAF7", border: "1px dashed rgba(17,24,39,0.12)", fontSize: 13, color: "#6B7280", lineHeight: 1.6, fontFamily: "Geist, system-ui" }}>
              More roles opening soon — Growth & Vendor Ops. <Link href="/contact" style={{ color: "#075E54", fontWeight: 600, textDecoration: "none" }}>Get notified →</Link>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "#111827", color: "#F8FAF7", borderRadius: 24, padding: 28 }}>
              <div style={{ fontSize: 11, letterSpacing: 0.6, textTransform: "uppercase", color: "#2EE59D", fontWeight: 700 }}>Why Ted</div>
              <div style={{ fontSize: 18, fontWeight: 600, marginTop: 10, letterSpacing: -0.3 }}>Shop on WhatsApp should be this easy.</div>
              <div style={{ fontSize: 14, opacity: 0.7, lineHeight: 1.6, marginTop: 10 }}>500+ stores live, no fees, no new app. You&apos;ll ship features vendors ask for in the morning and see them used that afternoon.</div>
              <ul style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8, fontSize: 13, opacity: 0.8 }}>
                <li>• Free forever, no payment required</li>
                <li>• Lagos-first, remote-friendly</li>
                <li>• NDPR-compliant by design</li>
              </ul>
            </div>
            <div style={{ background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 24, padding: 24 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>Perks</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
                {["Health + pension", "Learning budget", "Market Fridays", "Equity", "30 days off"].map((p) => (
                  <span key={p} style={{ padding: "6px 12px", borderRadius: 999, background: "#F8FAF7", border: "1px solid rgba(17,24,39,0.06)", fontSize: 12.5, color: "#374151" }}>{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer style={{ background: "#111827", color: "rgba(248,250,247,0.6)", padding: "32px 56px", fontSize: 13, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span>© 2026 Ted · Equal opportunity</span>
        <span>careers@ted.ng</span>
      </footer>
    </div>
  );
}
