import type { Metadata } from "next";
import { Cinzel, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aaquist",
  description: "Psykologi, relasjoner & personlig vekst — Aarhus",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html className={`${cinzel.variable} ${sourceSans.variable} h-full`}>
      <body className="min-h-full bg-sand font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
