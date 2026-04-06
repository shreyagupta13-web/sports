import type { Metadata } from "next";
import {
  Barlow_Condensed,
  Nunito_Sans,
  Orbitron,
  Rajdhani,
} from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ServiceWorker } from "@/components/pwa/ServiceWorker";

const fontDisplay = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const fontHeading = Rajdhani({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontBody = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const fontStat = Orbitron({
  variable: "--font-stat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "SG Sports Club",
    template: "%s | SG Sports Club",
  },
  description:
    "SG Sports is the elite multi-sport club platform for athletes, teams, events, and honours.",
  metadataBase: new URL("https://sgsports.example"),
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icons/icon-192.svg",
    apple: "/icons/icon-192.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontHeading.variable} ${fontBody.variable} ${fontStat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        <AppProviders>
          <CustomCursor />
          <Navbar />
          <main className="flex-1 relative">{children}</main>
          <Footer />
          <ServiceWorker />
        </AppProviders>
      </body>
    </html>
  );
}
