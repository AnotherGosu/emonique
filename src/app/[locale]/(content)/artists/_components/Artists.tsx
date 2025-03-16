import { ARTISTS } from "@/constants/common";

import { cn } from "@/utils/cn";

import { ArtistLink } from "@/components/ArtistLink";
import { Section } from "@/components/Typography";

export const Artists = () => {
  return (
    <Section
      className={cn(
        "grid w-full grid-cols-1 gap-x-16 gap-y-8",
        "sm:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {ARTISTS.map((artist) => (
        <ArtistLink
          key={artist.id}
          id={artist.id}
          name={artist.name}
          image={artist.image}
          description={artist.description}
        />
      ))}
    </Section>
  );
};
