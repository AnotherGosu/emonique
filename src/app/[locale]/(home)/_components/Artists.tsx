import { ARTISTS } from "@/constants/common";

import { cn } from "@/utils/cn";

import { ArtistLink } from "@/components/ArtistLink";
import { ButtonLink } from "@/components/ButtonLink";
import { Heading, Paragraph, Section } from "@/components/Typography";

export const Artists = () => {
  return (
    <Section className="flex flex-col gap-8">
      <div className="flex items-center justify-between gap-2">
        <Heading>Artists</Heading>

        <ButtonLink href="/artists">View all</ButtonLink>
      </div>

      <Paragraph>
        Behind every artwork is an artist with a unique voice. We proudly
        represent creators who create works that evoke thought and feeling,
        offering collectors the chance to connect with their stories.
      </Paragraph>

      <div
        className={cn(
          "grid grid-cols-1 gap-x-16 gap-y-8",
          "sm:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {ARTISTS.slice(0, 3).map((artist) => (
          <ArtistLink
            key={artist.id}
            id={artist.id}
            name={artist.name}
            image={artist.image}
            description={artist.description}
          />
        ))}
      </div>
    </Section>
  );
};
