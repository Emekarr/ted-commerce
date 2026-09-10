import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import AnimatedFavicon from "./animated-favicon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const tedWordmark = Nunito({
  variable: "--font-ted-wordmark",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ted.ng"),
  title: {
    default: "Ted — Find it on WhatsApp",
    template: "%s | Ted",
  },
  description:
    "Ted is your shopping helper on WhatsApp. Send a photo or text and Ted checks every nearby shop at once to find what's in stock near you. Free for everyone.",
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Ted",
    title: "Ted — Find it on WhatsApp",
    description:
      "Send a photo or text and find nearby, in-stock products through WhatsApp.",
  },
  twitter: {
    card: "summary",
    title: "Ted — Find it on WhatsApp",
    description:
      "Send a photo or text and find nearby, in-stock products through WhatsApp.",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${tedWordmark.variable}`}>
      <body>
        <AnimatedFavicon />
        {children}
      </body>
    </html>
  );
}
