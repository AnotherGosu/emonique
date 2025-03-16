import { ARTWORKS } from "@/constants/common";

import { cn } from "@/utils/cn";

import { ArtworkLink } from "@/components/ArtworkLink";
import { ButtonLink } from "@/components/ButtonLink";
import { Heading, Paragraph, Section } from "@/components/Typography";

export const Artworks = () => {
  return (
    <Section className="flex flex-col gap-8">
      <div className="flex items-center justify-between gap-2">
        <Heading>Artworks</Heading>

        <ButtonLink href="/gallery">View all</ButtonLink>
      </div>

      <Paragraph>
        Art has the power to move, inspire, and connect. Our collection brings
        together works that evoke deep emotion, telling stories through color,
        texture, and form. Find a piece that speaks to you.
      </Paragraph>

      <div
        className={cn(
          "grid grid-cols-1 gap-x-16 gap-y-8",
          "sm:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {ARTWORKS.slice(0, 3).map((artwork) => (
          <ArtworkLink
            key={artwork.id}
            id={artwork.id}
            image={artwork.images[0]}
            name={artwork.name}
            artist={artwork.artist}
          />
        ))}
      </div>
    </Section>
  );
};
