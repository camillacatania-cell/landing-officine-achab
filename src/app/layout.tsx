import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Osteria dei Vespri — Ristorante a Palazzo Gangi, Palermo",
  description:
    "Osteria dei Vespri: cucina siciliana contemporanea di Alberto Rizzo dentro Palazzo Gangi Valguarnera, dove Visconti girò il ballo del Gattopardo. Dal 1999, cantina con 650+ etichette. Piazza Croce dei Vespri 6, Palermo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
