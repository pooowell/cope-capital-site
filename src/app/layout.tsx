import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "cope.capital — smart wallet signals",
  description: "On-chain alpha from tracked smart wallets. Convergence signals, wallet moves, and token alerts delivered to Telegram.",
  openGraph: {
    title: "cope.capital",
    description: "On-chain alpha from tracked smart wallets.",
    url: "https://cope.capital",
    siteName: "cope.capital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "cope.capital",
    description: "On-chain alpha from tracked smart wallets.",
    creator: "@copedotcapital",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
