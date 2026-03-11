import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ParticleField } from "@/components/ParticleField";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kerim | sup3x — Developer & Tech Enthusiast",
  description: "Exploring AI, automation and software experiments. Personal developer portfolio.",
  openGraph: {
    title: "Kerim | sup3x — Developer & Tech Enthusiast",
    description: "Exploring AI, automation and software experiments.",
    url: "https://sup3x.github.io",
    siteName: "sup3x",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kerim | sup3x",
    description: "Exploring AI, automation and software experiments.",
  },
  metadataBase: new URL("https://sup3x.github.io"),
  icons: {
    icon: "/favicon.svg",
  },
  other: {
    "theme-color": "#030712",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-bg-primary text-slate-100">
        <a href="#main" className="skip-to-content">
          Skip to content
        </a>
        <ParticleField />
        <Navbar />
        <main id="main" className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
