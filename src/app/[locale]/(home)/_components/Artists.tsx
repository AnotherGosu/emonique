import { Suspense } from "react";

import { Locale, PropsWithDict } from "@/types/common";

import { ArtworkGridFallback } from "@/components/ArtworkGrid";
import { ButtonLink } from "@/components/ButtonLink";
import { Heading, Paragraph, Section } from "@/components/Typography";

import { FeaturedArtists } from "./FeaturedArtists";

interface ArtistsProps extends PropsWithDict {
  locale: Locale;
}

export const Artists = ({ locale, dict }: ArtistsProps) => {
  return (
    <Section className="flex flex-col gap-8">
      <div className="flex items-center justify-between gap-2">
        <Heading>{dict["headings"]["artists"]}</Heading>

        <ButtonLink href="/artists">{dict["buttons"]["view_all"]}</ButtonLink>
      </div>

      <Paragraph>{dict["home"]["artists"]}</Paragraph>

      <Suspense fallback={<ArtworkGridFallback />}>
        <FeaturedArtists locale={locale} />
      </Suspense>
    </Section>
  );
};
