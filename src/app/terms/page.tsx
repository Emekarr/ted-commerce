import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Terms — Ted", description: "Ted Terms of Service — free forever, no tricks." };

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

export default function TermsPage() {
  return (
    <div className="bv-site" style={{ background: "#F8FAF7", minHeight: "100vh" }}>
      <header style={{ padding: "12px 24px 0", position: "sticky", top: 0, zIndex: 50, background: "rgba(248,250,247,0.9)", backdropFilter: "blur(8px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px 10px 18px", background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 14 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}><span className="ted-wordmark" style={{ fontFamily: "Geist, system-ui", fontWeight: 700, fontSize: 19, color: "#111827" }}>Ted</span><TedMark size={26} /></Link>
          <Link href="/" style={{ background: "#111827", color: "#fff", padding: "10px 18px", borderRadius: 999, fontSize: 14, fontWeight: 600, textDecoration: "none", fontFamily: "Geist, system-ui" }}>← Back to home</Link>
        </div>
      </header>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "56px 32px 96px" }}>
        <div style={{ display: "inline-flex", padding: "6px 14px", borderRadius: 999, background: "#E8FBF1", color: "#053E37", fontSize: 12.5, fontWeight: 600, fontFamily: "Geist, system-ui" }}>Legal · Updated 12 Aug 2026</div>
        <h1 style={{ fontSize: 44, fontWeight: 600, letterSpacing: -1.4, marginTop: 16, color: "#111827", fontFamily: "Geist, system-ui" }}>Terms of Service</h1>
        <p style={{ fontSize: 14, color: "#6B7280", marginTop: 8 }}>Ted is free forever. No payment, no subscription. These terms keep it simple.</p>
        <div style={{ marginTop: 32, background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 24, padding: 32, display: "flex", flexDirection: "column", gap: 24, fontSize: 14, lineHeight: 1.7, color: "#374151", fontFamily: "Geist, system-ui" }}>
          {[
            ["1. What Ted does", "Ted is a WhatsApp shopping helper. You send a photo or text; Ted searches nearby vendor catalogs and returns in-stock matches as a WhatsApp carousel. Tap to chat the vendor directly — Ted is not the seller and does not handle payment or delivery."],
            ["2. Free forever", "Listing, searching and selling via Ted is free. No commission, no card. If anyone asks you to pay Ted, it’s not us — report to hello@ted.ng."],
            ["3. Your responsibilities", "Share accurate listings, honest photos, and in-stock status. Don’t list counterfeit or prohibited goods. Shoppers — verify size/price with the vendor before paying."],
            ["4. Content & IP", "You keep ownership of photos and catalog content. You grant Ted a non-exclusive licence to display it to nearby shoppers on WhatsApp and on your ted.ng/yourname store."],
            ["5. NDPR & data", "We process personal data per the NDPR and our Privacy Policy. See /privacy and /data-deletion for rights and deletion. Data processing is limited to fulfilling the shopping request."],
            ["6. No warranty", "Ted finds what vendors list. Availability may change after search. Use WhatsApp chat to confirm before payment. To the extent permitted by law, Ted is provided “as is”."],
            ["7. Contact", "Questions? hello@ted.ng · Lagos, Nigeria. For disputes, we’ll aim to resolve via chat first."],
          ].map(([h, p]) => (
            <div key={h}><div style={{ fontWeight: 700, color: "#111827", fontSize: 15 }}>{h}</div><div style={{ marginTop: 6, color: "#5B6472" }}>{p}</div></div>
          ))}
          <div style={{ padding: 16, borderRadius: 12, background: "#F8FAF7", border: "1px solid rgba(17,24,39,0.06)", fontSize: 13, color: "#6B7280" }}>This is a sample template, not legal advice. For the effective version, contact legal@ted.ng.</div>
        </div>
        <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/privacy" style={{ padding: "10px 16px", borderRadius: 999, background: "#111827", color: "#fff", fontWeight: 600, textDecoration: "none", fontSize: 13 }}>Privacy →</Link>
          <Link href="/legal" style={{ padding: "10px 16px", borderRadius: 999, background: "#fff", border: "1px solid rgba(17,24,39,0.12)", color: "#111827", fontWeight: 500, textDecoration: "none", fontSize: 13 }}>NDPR certificate</Link>
        </div>
      </main>
    </div>
  );
}
