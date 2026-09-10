import Link from "next/link";

export const metadata = {
  title: "404 — Page not found | Ted",
  description: "This page doesn't exist.",
};

function TedMark({ size = 26 }: { size?: number }) {
  const iconSize = Math.round(size * 0.72);
  return (
    <span
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: 999,
        background: "#2EE59D",
        color: "#053E37",
        display: "grid",
        placeItems: "center",
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      <svg width={iconSize} height={iconSize} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ display: "block" }}>
        <circle cx="11.2" cy="12.2" r="2.3" fill="currentColor" />
        <path d="M18.1 13.4 Q20.3 8.6 22.5 13.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" className="ted-wink-closed" />
        <circle cx="20.3" cy="12.2" r="2.3" fill="currentColor" className="ted-wink-open" />
        <path d="M9.5 20 Q16 25.5 22.5 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    </span>
  );
}

export default function NotFound() {
  return (
    <div className="bv-site" style={{ background: "#F8FAF7", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header>
        <nav
          style={{
            padding: "12px 24px 0",
            background: "linear-gradient(180deg, #F8FAF7 0%, rgba(248,250,247,0.85) 80%, rgba(248,250,247,0) 100%)",
            backdropFilter: "blur(8px)",
            position: "sticky",
            top: 0,
            zIndex: 50,
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
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }} aria-label="Ted home">
              <span className="ted-wordmark" style={{ fontFamily: "Geist, system-ui", fontWeight: 700, fontSize: 19, letterSpacing: -0.6, color: "#111827" }}>Ted</span>
              <TedMark size={26} />
            </Link>
            <Link
              href="/"
              style={{
                background: "#111827",
                color: "#F8FAF7",
                padding: "10px 18px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "Geist, system-ui",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              Back to home <span aria-hidden="true">→</span>
            </Link>
          </div>
        </nav>
      </header>

      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "72px 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 520, width: "100%" }}>
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
            }}
          >
            404 · Page not found
          </div>

          <h1
            style={{
              fontFamily: "Geist, system-ui",
              fontSize: 56,
              fontWeight: 600,
              letterSpacing: -2.2,
              lineHeight: 1,
              color: "#111827",
              margin: "22px 0 0",
            }}
          >
            Page not found
          </h1>

          <p
            style={{
              fontFamily: "Geist, system-ui",
              fontSize: 16,
              lineHeight: 1.6,
              color: "#5B6472",
              margin: "14px auto 0",
              maxWidth: 420,
              textWrap: "pretty",
            }}
          >
            The page you’re looking for doesn’t exist or was moved.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 28, flexWrap: "wrap" }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                background: "#111827",
                color: "#F8FAF7",
                padding: "14px 22px",
                borderRadius: 12,
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "Geist, system-ui",
              }}
            >
              Back to home
            </Link>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                background: "#FFFFFF",
                color: "#111827",
                border: "1px solid rgba(17,24,39,0.08)",
                padding: "14px 22px",
                borderRadius: 12,
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
                fontFamily: "Geist, system-ui",
              }}
            >
              Contact us
            </Link>
          </div>
        </div>
      </main>

      <footer
        style={{
          borderTop: "1px solid rgba(17,24,39,0.08)",
          padding: "20px 24px",
          display: "flex",
          justifyContent: "center",
          gap: 12,
          fontSize: 13,
          color: "rgba(17,24,39,0.5)",
          fontFamily: "Geist, system-ui",
        }}
      >
        <span>© 2026 Ted</span>
        <span style={{ opacity: 0.4 }}>·</span>
        <span>Free forever ;)</span>
      </footer>
    </div>
  );
}
