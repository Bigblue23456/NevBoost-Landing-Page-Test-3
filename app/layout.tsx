import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NevBoost — Precision Pipeline for SaaS",
  description: "The Precision Pipeline Framework™: Right Offer, Right Person, Right Situation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
