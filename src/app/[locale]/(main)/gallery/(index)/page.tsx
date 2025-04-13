import { Metadata } from "next";
import { Suspense } from "react";

import { Locale } from "@/types/common";

import { getDictionary } from "@/utils/i18";

import { ArtworkGridFallback } from "@/components/ArtworkGrid";
import { Section } from "@/components/Typography";

import { Artworks } from "./_components/Artworks";

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { locale } = await props.params;

  const dict = await getDictionary(locale);

  return {
    title: dict["headings"]["artworks"],
    description: dict["meta"]["artworks"],
  };
}

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Page(props: PageProps) {
  const { locale } = await props.params;

  return (
    <>
      <Section>
        <Suspense fallback={<ArtworkGridFallback />}>
          <Artworks locale={locale} />
        </Suspense>
      </Section>
    </>
  );
}
