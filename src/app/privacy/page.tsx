import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Privacy — Ted", description: "How Ted handles your data — NDPR compliant, minimal, transparent." };

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

export default function PrivacyPage() {
  return (
    <div className="bv-site" style={{ background: "#F8FAF7", minHeight: "100vh" }}>
      <header style={{ padding: "12px 24px 0", position: "sticky", top: 0, zIndex: 50, background: "rgba(248,250,247,0.9)", backdropFilter: "blur(8px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px 10px 18px", background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 14 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}><span className="ted-wordmark" style={{ fontWeight: 700, fontSize: 19, color: "#111827", fontFamily: "Geist, system-ui" }}>Ted</span><TedMark size={26} /></Link>
          <Link href="/" style={{ background: "#111827", color: "#fff", padding: "10px 18px", borderRadius: 999, fontSize: 14, fontWeight: 600, textDecoration: "none", fontFamily: "Geist, system-ui" }}>← Back to home</Link>
        </div>
      </header>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "56px 32px 96px" }}>
        <div style={{ display: "inline-flex", padding: "6px 14px", borderRadius: 999, background: "#E8FBF1", color: "#053E37", fontSize: 12.5, fontWeight: 600, fontFamily: "Geist, system-ui" }}>Privacy · NDPR Compliant</div>
        <h1 style={{ fontSize: 44, fontWeight: 600, letterSpacing: -1.4, marginTop: 16, color: "#111827", fontFamily: "Geist, system-ui" }}>Privacy Policy</h1>
        <p style={{ fontSize: 14, color: "#6B7280", marginTop: 8 }}>Minimal data, clear purpose, Nigerian law (NDPR) + global best practice. Last updated 12 Aug 2026.</p>
        <div style={{ marginTop: 32, background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 24, padding: 32, display: "flex", flexDirection: "column", gap: 22, fontSize: 14, lineHeight: 1.7, color: "#374151", fontFamily: "Geist, system-ui" }}>
          {[
            ["What we collect", "WhatsApp phone (if you message Ted), chat text/photo you send, coarse location/area you share, and vendor catalog data you list at ted.ng/yourname. No browsing trackers, no ad profile."],
            ["Why we collect", "To find nearby in-stock matches and open a direct WhatsApp chat with the vendor. Message content is used only to fulfil that search and improve photo matching — not sold."],
            ["Legal basis (NDPR s2.2)", "Consent (you message Ted), contract (to deliver shopping result), and legitimate interest (keep catalogs accurate). You can withdraw consent anytime via deletion request."],
            ["How long we keep it", "Chats: 90 days then auto-deleted unless needed for dispute. Catalogs: while your store is active. Photos for try-on are processed ephemerally and not stored as biometric data."],
            ["Who we share with", "Only the vendor you choose to chat with. No ad networks. Sub-processors: WhatsApp Cloud API (Meta) for delivery, and secure hosting in Nigeria/EU. NDPR-compliant DPAs in place."],
            ["Your rights", "Access, correction, deletion, portability, object to processing, withdraw consent — email dpo@ted.ng or see /data-deletion. Response within 30 days per NDPR."],
            ["Security", "TLS, at-rest encryption, role-based access, audit logs. Vendor stores at ted.ng/* are public by design — only list what you want buyers to see."],
            ["Children", "Ted is not directed to under-13s. If you believe a child’s data was processed, contact dpo@ted.ng for prompt deletion."],
          ].map(([h, p]) => (
            <div key={h}><div style={{ fontWeight: 700, color: "#111827" }}>{h}</div><div style={{ marginTop: 6, color: "#5B6472" }}>{p}</div></div>
          ))}
          <div style={{ padding: 16, borderRadius: 12, background: "#075E54", color: "#F8FAF7", display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ fontSize: 13 }}>Want the NDPR compliance certificate?</span>
            <Link href="/legal" style={{ background: "#2EE59D", color: "#053E37", padding: "8px 16px", borderRadius: 999, fontWeight: 700, textDecoration: "none", fontSize: 13 }}>View certificate →</Link>
          </div>
        </div>
        <div style={{ marginTop: 18, fontSize: 12, color: "#9AA3AF" }}>DPO: dpo@ted.ng · Ted Technologies, Lagos. Complaints: ndpc.gov.ng.</div>
      </main>
    </div>
  );
}
