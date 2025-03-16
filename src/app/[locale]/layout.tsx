import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { Cormorant, Poppins } from "next/font/google";

import { Locale } from "@/types/common";

import { LOCALES } from "@/constants/common";

import "./globals.css";

const headingFont = Cormorant({
  subsets: ["latin"],
  variable: "--font-heading",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-text",
});

export const metadata: Metadata = {
  title: { default: "Emonique", template: "%s • Emonique" },
  description: "Every Artwork - Unique Emotion",
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

interface RootLayoutProps extends React.PropsWithChildren {
  params: Promise<{ locale: Locale }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const lang = (await params).locale;

  return (
    <html lang={lang}>
      <body
        className={`${headingFont.variable} ${textFont.variable} bg-neutral-50 text-neutral-900 antialiased`}
      >
        {children}

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
