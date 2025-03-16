import { notFound } from "next/navigation";

import { Locale } from "@/types/common";

import { ARTWORKS } from "@/constants/common";

import { ButtonLink } from "@/components/ButtonLink";
import { HeroSection } from "@/components/HeroSection";
import { Heading, Section } from "@/components/Typography";

import { Carousel } from "./_components/Carousel";
import { Description } from "./_components/Description";
import { Info } from "./_components/Info";
import { More } from "./_components/More";

interface PageProps {
  params: Promise<{ locale: Locale; id: string }>;
}

export default async function Page(props: PageProps) {
  const { locale, id } = await props.params;

  const artwork = ARTWORKS.find((artwork) => artwork.id === id);

  if (!artwork) return notFound();

  return (
    <>
      <HeroSection heading={artwork.name} />

      <div className="flex flex-col gap-20 py-20">
        <Section className="grid grid-cols-2 gap-20">
          <Carousel images={artwork.images} />

          <Info
            name={artwork.name}
            artist={artwork.artist}
            artistId={artwork.artistId}
            size={artwork.size}
            style={artwork.style}
            dateOfCreation={artwork.dateOfCreation}
            price={artwork.price}
          />
        </Section>

        <Description description={artwork.description} />

        <Section>
          <div className="mb-8 flex items-center justify-between gap-2">
            <Heading>{`More by ${artwork.artist}`}</Heading>

            <ButtonLink href="/gallery/">View all</ButtonLink>
          </div>

          <More artistId={artwork.artistId} />
        </Section>
      </div>
    </>
  );
}
