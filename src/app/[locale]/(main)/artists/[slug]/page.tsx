import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { Locale } from "@/types/common";

import { getArtist } from "@/api/getArtist";
import { getArtistSlugs } from "@/api/getArtistSlugs";

import { cn } from "@/utils/cn";
import { getDictionary } from "@/utils/i18";

import { ArtworkGridFallback } from "@/components/ArtworkGrid";
import { ContactForm } from "@/components/ContactForm";
import { Heading, Paragraph, RichText, Section } from "@/components/Typography";

import { Artist } from "./_components/Artist";
import { Artworks } from "./_components/Artworks";

export const revalidate = 0;

export async function generateStaticParams() {
  const { artists } = await getArtistSlugs();

  return artists.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { locale, slug } = await props.params;

  const { artist } = await getArtist({ slug, locale });

  if (!artist) notFound();

  return {
    title: artist.name,
    description: artist.quote,
    openGraph: { images: [artist.photo] },
  };
}

interface PageProps {
  params: Promise<{ locale: Locale; slug: string }>;
}

export default async function Page(props: PageProps) {
  const { locale, slug } = await props.params;

  const dict = await getDictionary(locale);

  const { artist } = await getArtist({ slug, locale });

  if (!artist) notFound();

  return (
    <>
      <Artist
        name={artist.name}
        quote={artist.quote}
        highlights={artist.highlights}
        photo={artist.photo}
        dict={dict}
      />

      <Section>
        <Heading className="mb-6">{dict["headings"]["about_artist"]}</Heading>

        <RichText raw={artist.biography.raw} />
      </Section>

      <Section className={cn("grid gap-x-20 gap-y-8", "md:grid-cols-2")}>
        <div>
          <Heading className="mb-6">{dict["headings"]["inquire"]}</Heading>

          <Paragraph>{dict["contact"]["artist"]}</Paragraph>
        </div>

        <ContactForm
          dict={dict}
          context={{ artistSlug: artist.slug }}
        />
      </Section>

      <Section>
        <Heading className="mb-6">{dict["headings"]["artworks"]}</Heading>

        <Suspense fallback={<ArtworkGridFallback />}>
          <Artworks
            locale={locale}
            slug={artist.slug}
          />
        </Suspense>
      </Section>
    </>
  );
}
