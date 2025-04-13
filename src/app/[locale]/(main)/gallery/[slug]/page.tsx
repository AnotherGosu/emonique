import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { Locale } from "@/types/common";

import { getArtwork } from "@/api/getArtwork";
import { getArtworkSlugs } from "@/api/getArtworkSlugs";

import { cn } from "@/utils/cn";
import { getDictionary } from "@/utils/i18";

import { ArtworkGridFallback } from "@/components/ArtworkGrid";
import { ContactForm } from "@/components/ContactForm";
import { Heading, Paragraph, RichText, Section } from "@/components/Typography";

import { Carousel } from "./_components/Carousel";
import { Info } from "./_components/Info";
import { SimilarArtworks } from "./_components/SimilarArtworks";

export const revalidate = 0;

export async function generateStaticParams() {
  const { artworks } = await getArtworkSlugs();

  return artworks.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { locale, slug } = await props.params;

  const { artwork } = await getArtwork({ slug, locale });

  if (!artwork) notFound();

  return {
    title: artwork.name,
    description: "",
    openGraph: { images: artwork.images },
  };
}

interface PageProps {
  params: Promise<{ locale: Locale; slug: string }>;
}

export default async function Page(props: PageProps) {
  const { locale, slug } = await props.params;

  const dict = await getDictionary(locale);

  const { artwork } = await getArtwork({ slug, locale });

  if (!artwork) return notFound();

  return (
    <>
      <Section className={cn("grid grid-cols-1 gap-20", "md:grid-cols-2")}>
        <Carousel images={artwork.images} />

        <Info
          name={artwork.name}
          artist={artwork.artist}
          dimensions={artwork.dimensions}
          medium={artwork.medium}
          yearOfCreation={artwork.yearOfCreation}
          price={artwork.price}
          locale={locale}
          dict={dict}
        />
      </Section>

      <Section>
        <Heading className="mb-6">{dict["headings"]["about_artwork"]}</Heading>

        <RichText raw={artwork.description.raw} />
      </Section>

      <Section className={cn("grid gap-x-20 gap-y-8", "md:grid-cols-2")}>
        <div>
          <Heading className="mb-6">{dict["headings"]["inquire"]}</Heading>

          <Paragraph>{dict["contact"]["artwork"]}</Paragraph>
        </div>

        <ContactForm
          dict={dict}
          context={{ artworkSlug: artwork.slug }}
        />
      </Section>

      <Section>
        <Heading className="mb-6">
          {dict["headings"]["similar_artworks"]}
        </Heading>

        <Suspense fallback={<ArtworkGridFallback />}>
          <SimilarArtworks
            locale={locale}
            slug={artwork.slug}
            artistSlug={artwork.artist.slug}
          />
        </Suspense>
      </Section>
    </>
  );
}
