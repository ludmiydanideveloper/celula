import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "El Misterio del Manual Perdido",
  description: "Un libro de texto interactivo de biología",
};

import Script from 'next/script';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${lora.variable} h-full antialiased`}
    >
      <head>
        <Script src="https://aframe.io/releases/1.5.0/aframe.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-image-aframe.prod.js" strategy="beforeInteractive" />
      </head>
      <body className="min-h-full flex flex-col font-lora bg-book-bg text-ink-black">{children}</body>
    </html>
  );
}
