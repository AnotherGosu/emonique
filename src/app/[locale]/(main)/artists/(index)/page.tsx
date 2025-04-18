import { Metadata } from "next";
import { Suspense } from "react";

import { Locale, SearchParams } from "@/types/common";

import { getDictionary } from "@/utils/i18";

import { createQueryString } from "@/lib/createQueryString";

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
  searchParams: Promise<SearchParams>;
}

export default async function Page(props: PageProps) {
  const [params, searchParams] = await Promise.all([
    props.params,
    props.searchParams,
  ]);

  return (
    <>
      <Section>
        <Suspense
          key={createQueryString(searchParams)}
          fallback={<ArtistGridFallback />}
        >
          <Artists
            locale={params.locale}
            searchParams={searchParams}
          />
        </Suspense>
      </Section>
    </>
  );
}
