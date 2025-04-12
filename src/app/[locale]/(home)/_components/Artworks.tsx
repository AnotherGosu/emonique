import { Suspense } from "react";

import { Locale, PropsWithDict } from "@/types/common";

import { ArtworkGridFallback } from "@/components/ArtworkGrid";
import { ButtonLink } from "@/components/ButtonLink";
import { Heading, Paragraph, Section } from "@/components/Typography";

import { FeaturedArtworks } from "./FeaturedArtworks";

interface ArtworksProps extends PropsWithDict {
  locale: Locale;
}

export const Artworks = ({ locale, dict }: ArtworksProps) => {
  return (
    <Section className="flex flex-col gap-8">
      <div className="flex items-center justify-between gap-2">
        <Heading>{dict["headings"]["artworks"]}</Heading>

        <ButtonLink href="/gallery">{dict["buttons"]["view_all"]}</ButtonLink>
      </div>

      <Paragraph>{dict["home"]["artworks"]}</Paragraph>

      <Suspense fallback={<ArtworkGridFallback />}>
        <FeaturedArtworks locale={locale} />
      </Suspense>
    </Section>
  );
};
