import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { Cormorant, Poppins } from "next/font/google";
import Script from "next/script";

import { Locale } from "@/types/common";

import { LOCALES } from "@/constants/common";

import { cn } from "@/utils/cn";
import { getDictionary } from "@/utils/i18";

import { Footer } from "@/components/Footer";

import "./globals.css";

const fontHeading = Cormorant({
  subsets: ["latin"],
  variable: "--font-heading",
});

const fontText = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-text",
});

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: RootLayoutProps,
): Promise<Metadata> {
  const { locale } = await props.params;

  const dict = await getDictionary(locale);

  return {
    title: { default: "Emonique", template: "%s • Emonique" },
    description: dict["meta"]["home"],
    keywords: dict["meta"]["keywords"],
    generator: "Next.js",
    applicationName: "Emonique",
    creator: "Emonique",
    publisher: "Emonique",
    authors: [
      { name: "Hyein Lee", url: "https://www.hyeinnovate.com/" },
      { name: "Maksim Dubinin", url: "https://www.anothergosu.com/" },
    ],
    openGraph: {
      siteName: "Emonique",
      description: dict["meta"]["home"],
      url: "https://www.emonique.com/",
    },
  };
}

interface RootLayoutProps extends React.PropsWithChildren {
  params: Promise<{ locale: Locale }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  const dict = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body
        className={cn(
          "bg-neutral-50 text-neutral-900 antialiased",
          `${fontHeading.variable} ${fontText.variable}`,
          { "break-keep": locale === "ko" },
        )}
      >
        <div className="grid min-h-svh grid-rows-[1fr_max-content]">
          {children}

          <Footer dict={dict} />
        </div>

        <SpeedInsights />
        <Analytics />
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`}
        />
      </body>
    </html>
  );
}
