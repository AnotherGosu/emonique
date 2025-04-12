import { ArtworkPreview } from "@/types/artwork";
import { Locale } from "@/types/common";

import { cn } from "@/utils/cn";

import { ArtworkLink } from "@/components/ArtworkLink";

interface ArtworkGridProps {
  artworks: ArtworkPreview[];
  locale: Locale;
}

export const ArtworkGrid = ({ artworks, locale }: ArtworkGridProps) => {
  return (
    <Grid>
      {artworks.map((artwork) => {
        const preview = artwork.images[0];

        const isPortrait = preview.height > preview.width;

        return (
          <ArtworkLink
            key={artwork.id}
            slug={artwork.slug}
            image={preview.url}
            name={artwork.name}
            artist={artwork.artist.name}
            locale={locale}
            className={cn("row-span-2", { "row-span-3": isPortrait })}
          />
        );
      })}
    </Grid>
  );
};

export const ArtworkGridFallback = () => {
  const keys = Array.from({ length: 8 }, (_, i) => i);

  return (
    <Grid>
      {keys.map((key) => (
        <div
          key={key}
          className={cn(
            "row-span-2 size-full animate-pulse bg-neutral-300 transition",
            { "row-span-3": key % 4 === 0 },
          )}
        />
      ))}
    </Grid>
  );
};

const Grid = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      className={cn(
        "-mx-2 grid auto-rows-[8rem] grid-cols-1 gap-8",
        "xs:grid-cols-2",
        "md:grid-cols-3",
      )}
    >
      {children}
    </div>
  );
};
