import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Data Deletion — Ted", description: "Delete your data from Ted — NDPR rights, 30-day fulfillment." };

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

export default function DataDeletionPage() {
  return (
    <div className="bv-site" style={{ background: "#F8FAF7", minHeight: "100vh" }}>
      <header style={{ padding: "12px 24px 0", position: "sticky", top: 0, zIndex: 50, background: "rgba(248,250,247,0.9)", backdropFilter: "blur(8px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px 10px 18px", background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 14 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}><span className="ted-wordmark" style={{ fontWeight: 700, fontSize: 19, color: "#111827", fontFamily: "Geist, system-ui" }}>Ted</span><TedMark size={26} /></Link>
          <Link href="/" style={{ background: "#111827", color: "#fff", padding: "10px 18px", borderRadius: 999, fontSize: 14, fontWeight: 600, textDecoration: "none", fontFamily: "Geist, system-ui" }}>← Back to home</Link>
        </div>
      </header>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "56px 32px 96px" }}>
        <div style={{ display: "inline-flex", padding: "6px 14px", borderRadius: 999, background: "#FFE6A8", color: "#111827", fontSize: 12.5, fontWeight: 600, fontFamily: "Geist, system-ui" }}>Your rights · NDPR Art. 3.1(7)</div>
        <h1 style={{ fontSize: 44, fontWeight: 600, letterSpacing: -1.4, marginTop: 16, color: "#111827", fontFamily: "Geist, system-ui" }}>Data deletion</h1>
        <p style={{ fontSize: 14, color: "#6B7280", marginTop: 8, lineHeight: 1.6, maxWidth: 640 }}>Ask us to delete your personal data. We fulfill NDPR requests within 30 days, free. No dark patterns.</p>

        <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 24 }}>
          <div style={{ background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 24, padding: 28 }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: "#111827", fontFamily: "Geist, system-ui" }}>How to request</h2>
            <ol style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 12, fontSize: 14, color: "#374151", lineHeight: 1.6, paddingLeft: 18 }}>
              <li><b>Email dpo@ted.ng</b> from the address/phone you used on WhatsApp — subject “Deletion request”.</li>
              <li>Include: WhatsApp number / email, and what to delete (chats, catalog, store at ted.ng/yourname).</li>
              <li>We verify you own the number (one-time WhatsApp code), then delete and confirm by email within 30 days.</li>
            </ol>
            <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href="mailto:dpo@ted.ng?subject=Deletion%20request%20—%20Ted&body=Hello%20Ted%20DPO%2C%0A%0APlease%20delete%20my%20data%3A%0A-%20WhatsApp%3A%20%0A-%20Email%3A%20%0A-%20Store%3A%20ted.ng%2F%0A%0AThanks%2C" style={{ background: "#111827", color: "#fff", padding: "12px 18px", borderRadius: 12, fontWeight: 600, textDecoration: "none", fontSize: 13 }}>Email dpo@ted.ng →</a>
              <Link href="/contact" style={{ background: "#E8FBF1", color: "#053E37", padding: "12px 18px", borderRadius: 12, fontWeight: 600, textDecoration: "none", fontSize: 13, border: "1px solid rgba(5,62,55,0.08)" }}>Contact support</Link>
            </div>
            <div style={{ marginTop: 16, fontSize: 12, color: "#6B7280", lineHeight: 1.6 }}>
              Deleting your store also unpublishes <b>ted.ng/yourname</b>. Catalog backups are purged from cold storage within 90 days.
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "#111827", color: "#F8FAF7", borderRadius: 24, padding: 24 }}>
              <div style={{ fontSize: 11, letterSpacing: 0.6, textTransform: "uppercase", color: "#2EE59D", fontWeight: 700 }}>What gets deleted</div>
              <ul style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8, fontSize: 13, lineHeight: 1.6, opacity: 0.85, paddingLeft: 16 }}>
                <li>Chat messages & photos you sent to Ted</li>
                <li>Coarse location/area and search prefs</li>
                <li>Vendor catalog & ted.ng store pages you created</li>
                <li>Support emails tied to that identity</li>
              </ul>
              <div style={{ marginTop: 12, fontSize: 12, opacity: 0.6 }}>Aggregated, de-identified analytics (e.g., 500+ stores”) are kept — they can’t identify you.</div>
            </div>
            <div style={{ background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 16, padding: 16, fontSize: 13, color: "#5B6472", lineHeight: 1.6 }}>
              <b style={{ color: "#111827" }}>NDPR note:</b> If we must retain some data for legal compliance (e.g., fraud prevention), we’ll tell you why and for how long. You can still object — email dpo@ted.ng. Escalate to NDPC at ndpc.gov.ng if unresolved.
              <div style={{ marginTop: 10 }}><Link href="/legal" style={{ color: "#075E54", fontWeight: 600, textDecoration: "none" }}>See NDPR certificate →</Link></div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 32, padding: 16, borderRadius: 12, background: "#F8FAF7", border: "1px dashed rgba(17,24,39,0.12)", fontSize: 12, color: "#6B7280" }}>
          Alternative: To just correct data (e.g., change store name or phone), email <a href="mailto:hello@ted.ng" style={{ color: "#075E54", fontWeight: 600 }}>hello@ted.ng</a> — faster than full deletion.
        </div>
      </main>
    </div>
  );
}
