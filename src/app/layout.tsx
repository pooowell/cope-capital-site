import type { Metadata } from "next";
import { GeistPixelSquare } from "geist/font/pixel";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png"
  },
  title: "cope capital",
  description: "follow the winners. skip the noise. 1,000+ winning wallets tracked across Solana & Base.",
  openGraph: {
    title: "cope capital",
    description: "follow the winners. skip the noise.",
    url: "https://cope.capital",
    siteName: "cope.capital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "cope.capital",
    description: "follow the winners. skip the noise.",
    creator: "@copedotcapital",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistPixelSquare.variable}>
      <body className={`${GeistPixelSquare.className} antialiased`}>{children}</body>
    </html>
  );
}
