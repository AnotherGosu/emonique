import { Metadata } from "next";
import { Suspense } from "react";

import { Locale } from "@/types/common";

import { getDictionary } from "@/utils/i18";

import { ArtistGridFallback } from "@/components/ArtistGrid";
import { Section } from "@/components/Typography";

import { Artists } from "./_components/Artists";

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { locale } = await props.params;

  const dict = await getDictionary(locale);

  return {
    title: dict["headings"]["artists"],
    description: dict["meta"]["artists"],
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
        <Suspense fallback={<ArtistGridFallback />}>
          <Artists locale={locale} />
        </Suspense>
      </Section>
    </>
  );
}
