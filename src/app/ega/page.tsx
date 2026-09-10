import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal — Ted",
  description: "Ted legal — NDPR certificate sample.",
};

export default function EgaPage() {
  return (
    <div className="bv-site" style={{ background: "#F8FAF7", minHeight: "100vh", display: "grid", placeItems: "center", padding: "56px 24px" }}>
      <div style={{ maxWidth: 640, background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 24, padding: 32, textAlign: "center" }}>
        <div style={{ display: "inline-flex", padding: "6px 14px", borderRadius: 999, background: "#E8FBF1", color: "#053E37", fontSize: 12, fontWeight: 600, fontFamily: "Geist, system-ui" }}>EGA · Legal</div>
        <h1 style={{ fontSize: 32, fontWeight: 600, letterSpacing: -1, marginTop: 16, color: "#111827", fontFamily: "Geist, system-ui" }}>This page moved</h1>
        <p style={{ fontSize: 14, color: "#5B6472", lineHeight: 1.6, marginTop: 10, fontFamily: "Geist, system-ui" }}>
          The legal & NDPR certificate is now at <b style={{ color: "#111827" }}>/legal</b>. You were sent here from <b>/ega</b> — we kept this alias so your link still works.
        </p>
        <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/legal" style={{ background: "#111827", color: "#fff", padding: "12px 20px", borderRadius: 999, fontWeight: 600, textDecoration: "none", fontFamily: "Geist, system-ui" }}>View NDPR certificate →</Link>
          <Link href="/" style={{ background: "#fff", border: "1px solid rgba(17,24,39,0.12)", color: "#111827", padding: "12px 20px", borderRadius: 999, fontWeight: 500, textDecoration: "none", fontFamily: "Geist, system-ui" }}>Back home</Link>
        </div>
        <div style={{ marginTop: 16, fontSize: 11, color: "#9AA3AF" }}>If you meant a different “ega” page, contact hello@ted.ng — we&apos;ll route it.</div>
      </div>
    </div>
  );
}
