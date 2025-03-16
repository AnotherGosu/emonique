import { ARTWORKS } from "@/constants/common";

import { cn } from "@/utils/cn";

import { ArtworkLink } from "@/components/ArtworkLink";
import { Section } from "@/components/Typography";

export const Artworks = () => {
  return (
    <Section
      className={cn(
        "grid w-full grid-cols-2 gap-4",
        "md:grid-cols-3 md:gap-8 lg:grid-cols-4",
      )}
    >
      {ARTWORKS.map((artwork) => (
        <ArtworkLink
          key={artwork.id}
          id={artwork.id}
          image={artwork.images[0]}
          name={artwork.name}
          artist={artwork.artist}
        />
      ))}
    </Section>
  );
};
