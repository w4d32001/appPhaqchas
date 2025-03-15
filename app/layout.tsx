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
  title: "Phaqchas - Centro Deportivo",
  description: "Centro deportivo las Phaqchas - Tu lugar para entrenar.",
  keywords: ["deporte", "fitness", "Phaqchas", "entrenamiento"],
  applicationName: "Phaqchas",
  authors: [{ name: "Tu Nombre", url: "https://phaqchas.shop/" }],
  openGraph: {
    type: "website",
    url: "https://phaqchas.shop/",
    title: "Phaqchas - Centro Deportivo",
    description: "Centro deportivo las Phaqchas - Tu lugar para entrenar.",
    siteName: "Phaqchas",
    images: [
      {
        url: "/logo.png", // Reemplaza con la URL de tu logo
        width: 1200,
        height: 630,
        alt: "Phaqchas Logo",
      },
    ],
  },
  icons: {
    icon: "/volleyball.png",
    shortcut: "/volleyball.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true, 
    follow: true, 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
