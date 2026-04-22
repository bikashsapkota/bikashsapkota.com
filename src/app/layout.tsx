import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bikashsapkota.com"),
  title: "Bikash Sapkota | Geospatial Data Engineer",
  description:
    "Bikash Sapkota builds geospatial big data platforms, AI/ML systems, optimization workflows, and cloud data applications from Tokyo, Japan.",
  authors: [{ name: "Bikash Sapkota" }],
  creator: "Bikash Sapkota",
  openGraph: {
    title: "Bikash Sapkota | Geospatial Data Engineer",
    description:
      "Geospatial big data engineer building data platforms for smart cities and urban planning.",
    url: "https://bikashsapkota.com",
    siteName: "Bikash Sapkota",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bikash Sapkota | Geospatial Data Engineer",
    description:
      "Geospatial big data engineer building data platforms for smart cities and urban planning.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
