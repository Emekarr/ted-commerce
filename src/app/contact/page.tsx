import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Ted",
  description: "Talk to Ted — sales, support, press. We reply in minutes on WhatsApp.",
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

export default function ContactPage() {
  return (
    <div className="bv-site" style={{ background: "#F8FAF7", minHeight: "100vh" }}>
      <header style={{ padding: "12px 24px 0", position: "sticky", top: 0, zIndex: 50, background: "rgba(248,250,247,0.9)", backdropFilter: "blur(8px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px 10px 18px", background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 14 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}><span className="ted-wordmark" style={{ fontFamily: "Geist, system-ui", fontWeight: 700, fontSize: 19, letterSpacing: -0.6, color: "#111827" }}>Ted</span><TedMark size={26} /></Link>
          <Link href="/" style={{ background: "#111827", color: "#fff", padding: "10px 18px", borderRadius: 999, fontSize: 14, fontWeight: 600, textDecoration: "none", fontFamily: "Geist, system-ui" }}>← Back to home</Link>
        </div>
      </header>

      <main style={{ maxWidth: 1120, margin: "0 auto", padding: "72px 56px 96px" }}>
        <div style={{ maxWidth: 820 }}>
          <div style={{ display: "inline-flex", padding: "6px 14px", borderRadius: 999, background: "#E8FBF1", color: "#053E37", fontSize: 12.5, fontWeight: 600, fontFamily: "Geist, system-ui" }}>Contact</div>
          <h1 style={{ fontSize: 56, fontWeight: 600, letterSpacing: -2, marginTop: 18, fontFamily: "Geist, system-ui", color: "#111827", lineHeight: 1.05 }}>Talk to a human.<br /><span style={{ color: "#075E54", fontStyle: "italic" }}>We reply in minutes.</span></h1>
          <p style={{ fontSize: 18, color: "#5B6472", lineHeight: 1.6, marginTop: 16, maxWidth: 640, fontFamily: "Geist, system-ui" }}>
            Sales, support, or press — message us on WhatsApp or email. No ticket queue, just chat.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 32, marginTop: 48 }}>
          <div style={{ background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 24, padding: 28 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: "#111827", fontFamily: "Geist, system-ui" }}>Reach us directly</h2>
            <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { label: "WhatsApp", value: "+234 800 TED CHAT", sub: "Fastest — tap to chat Ted sales", href: "#", bg: "#E8FBF1" },
                { label: "Email — Support", value: "hello@ted.ng", sub: "Shoppers & vendors · reply < 2h", href: "mailto:hello@ted.ng", bg: "#D4D8FF" },
                { label: "Email — Press", value: "press@ted.ng", sub: "Media, partnerships, NDPR", href: "mailto:press@ted.ng", bg: "#FFE6A8" },
              ].map((c) => (
                <a key={c.label} href={c.href} style={{ display: "flex", gap: 14, padding: 14, borderRadius: 16, background: "#F8FAF7", border: "1px solid rgba(17,24,39,0.06)", textDecoration: "none", alignItems: "center" }}>
                  <span style={{ width: 36, height: 36, borderRadius: 10, background: c.bg, display: "grid", placeItems: "center", fontSize: 14, fontWeight: 700, color: "#111827", flexShrink: 0 }}>{c.label === "WhatsApp" ? "WA" : "@"}</span>
                  <span style={{ flex: 1 }}>
                    <span style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#111827", fontFamily: "Geist, system-ui" }}>{c.label}</span>
                    <span style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#075E54" }}>{c.value}</span>
                    <span style={{ display: "block", fontSize: 12, color: "#6B7280" }}>{c.sub}</span>
                  </span>
                  <span style={{ color: "#9AA3AF" }}>→</span>
                </a>
              ))}
            </div>

            <div style={{ marginTop: 24, padding: 16, borderRadius: 16, background: "#111827", color: "#F8FAF7", display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}>
              <div style={{ fontSize: 13, lineHeight: 1.5 }}>For vendors: Get your free store at <b style={{ color: "#2EE59D" }}>ted.ng/yourname</b> — live in 2 minutes.</div>
              <Link href="/#showcase" style={{ background: "#2EE59D", color: "#053E37", padding: "10px 16px", borderRadius: 999, fontWeight: 700, textDecoration: "none", fontSize: 12.5, whiteSpace: "nowrap" }}>Claim store →</Link>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 24, padding: 24 }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: "#111827", fontFamily: "Geist, system-ui" }}>Send a message</h3>
              <p style={{ fontSize: 13, color: "#6B7280", marginTop: 6 }}>Demo form — wires to hello@ted.ng. NDPR-compliant, no marketing without consent.</p>
              <form style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <input placeholder="Your name" style={{ padding: "12px 14px", borderRadius: 12, border: "1px solid rgba(17,24,39,0.12)", fontSize: 14, fontFamily: "Geist, system-ui" }} />
                <input placeholder="Email or WhatsApp" style={{ padding: "12px 14px", borderRadius: 12, border: "1px solid rgba(17,24,39,0.12)", fontSize: 14, fontFamily: "Geist, system-ui" }} />
                <select style={{ padding: "12px 14px", borderRadius: 12, border: "1px solid rgba(17,24,39,0.12)", fontSize: 14, fontFamily: "Geist, system-ui", color: "#374151" }}>
                  <option>I&apos;m a shopper</option>
                  <option>I&apos;m a vendor</option>
                  <option>Press / partnership</option>
                  <option>NDPR / data request</option>
                </select>
                <textarea placeholder="How can we help?" rows={4} style={{ padding: "12px 14px", borderRadius: 12, border: "1px solid rgba(17,24,39,0.12)", fontSize: 14, fontFamily: "Geist, system-ui", resize: "vertical" }} />
                <label style={{ display: "flex", gap: 8, alignItems: "start", fontSize: 12, color: "#6B7280", lineHeight: 1.5 }}>
                  <input type="checkbox" style={{ marginTop: 3 }} /> I agree to be contacted about my request (NDPR consent). No spam.
                </label>
                <button type="submit" style={{ background: "#111827", color: "#fff", padding: "14px", borderRadius: 12, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "Geist, system-ui" }}>Send message →</button>
                <div style={{ fontSize: 11, color: "#9AA3AF", textAlign: "center" }}>Or email directly: <a href="mailto:hello@ted.ng" style={{ color: "#075E54", fontWeight: 600 }}>hello@ted.ng</a></div>
              </form>
            </div>

            <div style={{ padding: 16, borderRadius: 16, background: "#E8FBF1", border: "1px solid rgba(5,62,55,0.08)", fontSize: 12.5, color: "#053E37", lineHeight: 1.6 }}>
              <b>Visit?</b> We&apos;re WhatsApp-first. No walk-in office — but we do monthly vendor meetups in Lagos. Ask on WhatsApp for the next one.
            </div>
          </div>
        </div>
      </main>

      <footer style={{ background: "#111827", color: "rgba(248,250,247,0.5)", padding: "32px 56px", fontSize: 13, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span>© 2026 Ted · Free forever</span>
        <span>hello@ted.ng · Lagos, Nigeria</span>
      </footer>
    </div>
  );
}
