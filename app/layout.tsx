import type { Metadata } from "next";
import { Montserrat, Outfit, Sora } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat"
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://capitalway.co.mz"),
  title: "Capital Way | Transporte de Passageiros e Carga",
  description:
    "Capital Way oferece transporte rodoviario moderno, seguro e com precos competitivos em Mocambique.",
  keywords: [
    "Capital Way",
    "Transporte Mocambique",
    "Bilhetes de Autocarro",
    "Envio de Carga"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      suppressHydrationWarning
      className={`${montserrat.variable} ${outfit.variable} ${sora.variable}`}
    >
      <body className="font-[var(--font-outfit)]">{children}</body>
    </html>
  );
}
