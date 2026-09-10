import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal — NDPR Certificate — Ted",
  description: "Ted NDPR compliance — sample certificate, data protection compliance for Nigeria Data Protection Regulation.",
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

export default function LegalPage() {
  return (
    <div className="bv-site" style={{ background: "#F8FAF7", minHeight: "100vh" }}>
      <header style={{ padding: "12px 24px 0", position: "sticky", top: 0, zIndex: 50, background: "rgba(248,250,247,0.9)", backdropFilter: "blur(8px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px 10px 18px", background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 14 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}><span className="ted-wordmark" style={{ fontWeight: 700, fontSize: 19, color: "#111827", fontFamily: "Geist, system-ui" }}>Ted</span><TedMark size={26} /></Link>
          <Link href="/" style={{ background: "#111827", color: "#fff", padding: "10px 18px", borderRadius: 999, fontSize: 14, fontWeight: 600, textDecoration: "none", fontFamily: "Geist, system-ui" }}>← Back to home</Link>
        </div>
      </header>

      <main style={{ maxWidth: 1120, margin: "0 auto", padding: "56px 32px 96px" }}>
        <div style={{ maxWidth: 820 }}>
          <div style={{ display: "inline-flex", padding: "6px 14px", borderRadius: 999, background: "#E8FBF1", color: "#053E37", fontSize: 12.5, fontWeight: 600, fontFamily: "Geist, system-ui" }}>Legal · NDPR Compliant</div>
          <h1 style={{ fontSize: 44, fontWeight: 600, letterSpacing: -1.2, marginTop: 16, color: "#111827", fontFamily: "Geist, system-ui", lineHeight: 1.05 }}>Legal & Compliance</h1>
          <p style={{ fontSize: 14, color: "#6B7280", marginTop: 10, lineHeight: 1.6, maxWidth: 640 }}>Sample documentation — not a substitute for legal advice. For the effective documents, contact legal@ted.ng or dpo@ted.ng.</p>
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
          {[
            { href: "/terms", label: "Terms" },
            { href: "/privacy", label: "Privacy" },
            { href: "/data-deletion", label: "Data deletion" },
            { href: "/legal", label: "NDPR Certificate", active: true },
          ].map((l) => (
            <Link key={l.label} href={l.href} style={{ padding: "8px 14px", borderRadius: 999, background: l.active ? "#111827" : "#fff", color: l.active ? "#fff" : "#111827", border: l.active ? "none" : "1px solid rgba(17,24,39,0.08)", fontSize: 13, fontWeight: 600, textDecoration: "none", fontFamily: "Geist, system-ui" }}>{l.label}</Link>
          ))}
        </div>

        <div style={{ marginTop: 36, background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 24, overflow: "hidden", boxShadow: "0 12px 40px rgba(17,24,39,0.06)" }}>
          <div style={{ background: "#053E37", color: "#F8FAF7", padding: "20px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <TedMark size={36} />
              <div>
                <div style={{ fontSize: 13, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.7, fontWeight: 600 }}>Ted Technologies Ltd.</div>
                <div style={{ fontSize: 11, opacity: 0.6 }}>RC 1234567 · Lagos, Nigeria</div>
              </div>
            </div>
            <div style={{ textAlign: "right", fontSize: 11, opacity: 0.7, lineHeight: 1.5 }}>
              Certificate ID: TED-NDPR-2026-08-142<br />Issued: 12 August 2026 · Valid: 12 August 2027
            </div>
          </div>

          <div style={{ padding: "36px 40px", textAlign: "center", background: "linear-gradient(180deg, #fff 0%, #F8FAF7 100%)" }}>
            <div style={{ width: 64, height: 64, borderRadius: 999, background: "#E8FBF1", color: "#053E37", display: "grid", placeItems: "center", margin: "0 auto", border: "2px solid #2EE59D" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3 L4 7 v5 c0 4.2 2.8 8.1 8 9 5.2-0.9 8-4.8 8-9 V7 L12 3z" />
                <path d="M9 12 L11.2 14.3 L15.5 9.5" />
              </svg>
            </div>
            <div style={{ marginTop: 16, fontSize: 11, letterSpacing: 0.9, textTransform: "uppercase", color: "#075E54", fontWeight: 700 }}>NDPR Compliance — Nigeria Data Protection Regulation 2019</div>
            <h2 style={{ marginTop: 10, fontSize: 32, fontWeight: 700, letterSpacing: -1, color: "#111827", fontFamily: "Geist, system-ui" }}>Certificate of Compliance</h2>
            <div style={{ width: 56, height: 3, borderRadius: 999, background: "#2EE59D", margin: "16px auto 0" }} />
            <p style={{ marginTop: 18, fontSize: 15, color: "#374151", lineHeight: 1.7, maxWidth: 640, marginLeft: "auto", marginRight: "auto", fontFamily: "Geist, system-ui" }}>
              This is to certify that <b style={{ color: "#111827" }}>Ted Technologies Ltd. (“Ted”)</b> has implemented technical and organisational measures to process personal data in accordance with the <b style={{ color: "#111827" }}>Nigeria Data Protection Regulation (NDPR) 2019</b> and the Nigeria Data Protection Act 2023, including lawful basis, data minimisation, storage limitation and data subject rights.
            </p>
            <div style={{ marginTop: 20, display: "inline-flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
              {["Lawful & Consent-based", "Minimal by design", "90-day chat retention", "30-day deletion"].map((b) => (
                <span key={b} style={{ padding: "6px 12px", borderRadius: 999, background: "#F8FAF7", border: "1px solid rgba(17,24,39,0.08)", fontSize: 11.5, fontWeight: 600, color: "#075E54" }}>{b}</span>
              ))}
            </div>
            <p style={{ marginTop: 18, fontSize: 12.5, color: "#6B7280", lineHeight: 1.6, maxWidth: 680, marginLeft: "auto", marginRight: "auto" }}>
              Scope: WhatsApp shopping helper (photo/text search, nearby carousel, ted.ng storefronts) · Data categories: WhatsApp number, message/photo content, coarse area, vendor catalog · Sub-processors: WhatsApp Cloud API (Meta), Nigeria/EU hosting · DPO: dpo@ted.ng
              <br /><span style={{ fontSize: 11, color: "#9AA3AF" }}>Audit reference: NDPR-AUDIT-2026-07 · Sample — for demonstration only. Not issued by NDPC.</span>
            </p>
          </div>

          <div style={{ padding: "20px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, borderTop: "1px solid rgba(17,24,39,0.06)", background: "#fff" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ height: 48, display: "grid", placeItems: "center", fontFamily: "cursive", fontSize: 20, color: "#111827", opacity: 0.85 }}>A. O. Bello</div>
              <div style={{ width: 160, height: 1, background: "rgba(17,24,39,0.2)", margin: "6px auto 0" }} />
              <div style={{ fontSize: 12, fontWeight: 700, color: "#111827", marginTop: 8, fontFamily: "Geist, system-ui" }}>Data Protection Officer</div>
              <div style={{ fontSize: 11, color: "#6B7280" }}>Ted Technologies Ltd. · dpo@ted.ng</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: 88, height: 88, borderRadius: 999, border: "2px dashed #2EE59D", display: "grid", placeItems: "center", margin: "0 auto", background: "#F8FAF7", color: "#053E37", fontSize: 10, fontWeight: 800, lineHeight: 1.2, letterSpacing: 0.3 }}>
                TED<br />NDPR<br />SEAL
              </div>
              <div style={{ fontSize: 11, color: "#6B7280", marginTop: 8 }}>Sample seal — verification: legal@ted.ng</div>
            </div>
          </div>

          <div style={{ padding: "14px 32px", background: "#F8FAF7", borderTop: "1px solid rgba(17,24,39,0.06)", display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", fontSize: 11, color: "#9AA3AF" }}>
            <span>This is a sample template. For NDPC verification contact the Nigeria Data Protection Commission — ndpc.gov.ng</span>
            <span>PDF copies are available on request.</span>
          </div>
        </div>

        <div style={{ marginTop: 24, background: "#111827", color: "#F8FAF7", borderRadius: 16, padding: 20, display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ fontSize: 13, lineHeight: 1.6 }}>Need the signed version or data processing agreement?<br /><span style={{ opacity: 0.6 }}>We share DPAs with vendors and partners on request.</span></div>
          <a href="mailto:legal@ted.ng" style={{ background: "#2EE59D", color: "#053E37", padding: "12px 20px", borderRadius: 999, fontWeight: 700, textDecoration: "none", fontSize: 13, fontFamily: "Geist, system-ui", whiteSpace: "nowrap" }}>Contact legal@ted.ng →</a>
        </div>
      </main>

      <footer style={{ background: "#111827", color: "rgba(248,250,247,0.5)", padding: "32px 56px", fontSize: 13, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span>© 2026 Ted · NDPR-compliant by design</span>
        <span>dpo@ted.ng · Lagos</span>
      </footer>
    </div>
  );
}
