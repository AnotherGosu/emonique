import { ArtistPreview } from "@/types/artist";
import { Locale } from "@/types/common";

import { cn } from "@/utils/cn";

import { Card } from "./Card";
import { Fallback } from "./Fallback";

interface ArtistGridProps {
  artists: ArtistPreview[];
  locale: Locale;
}

export const ArtistGrid = ({ artists, locale }: ArtistGridProps) => {
  return (
    <Grid>
      {artists.map((artist) => (
        <Card
          key={artist.id}
          slug={artist.slug}
          name={artist.name}
          photo={artist.photo.url}
          quote={artist.quote}
          locale={locale}
        />
      ))}
    </Grid>
  );
};

export const ArtistGridFallback = () => {
  const keys = Array.from({ length: 6 }, (_, i) => i);

  return (
    <Grid>
      {keys.map((key) => (
        <Fallback key={key} />
      ))}
    </Grid>
  );
};

const Grid = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      className={cn(
        "-mx-2 grid auto-rows-[25rem] grid-cols-1 gap-8",
        "xs:grid-cols-2 md:grid-cols-3",
      )}
    >
      {children}
    </div>
  );
};
