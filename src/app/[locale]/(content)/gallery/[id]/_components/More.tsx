import { ARTWORKS } from "@/constants/common";

import { cn } from "@/utils/cn";

import { ArtworkLink } from "@/components/ArtworkLink";

interface MoreProps {
  artistId: string;
}

export const More = ({ artistId }: MoreProps) => {
  const artworks = ARTWORKS.filter((artwork) => artwork.artistId === artistId);

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-x-16 gap-y-8",
        "sm:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {artworks.map((artwork) => (
        <ArtworkLink
          key={artwork.id}
          id={artwork.id}
          image={artwork.images[0]}
          name={artwork.name}
          artist={artwork.artist}
        />
      ))}
    </div>
  );
};
