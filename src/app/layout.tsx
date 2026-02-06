import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "cope.capital — smart wallet signals",
  description: "See what the best memecoin traders are buying before everyone else. 890+ wallets tracked. Free Telegram alerts.",
  openGraph: {
    title: "cope.capital",
    description: "See what the best memecoin traders are buying before everyone else.",
    url: "https://cope.capital",
    siteName: "cope.capital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "cope.capital",
    description: "See what the best memecoin traders are buying before everyone else.",
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
