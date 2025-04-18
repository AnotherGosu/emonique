import { Locale } from "@/types/common";

import { getArtistArtworks } from "@/api/getArtistArtworks";

import { ArtworkGrid } from "@/components/ArtworkGrid";

interface ArtworksProps {
  locale: Locale;
  slug: string;
}

export const Artworks = async ({ locale, slug }: ArtworksProps) => {
  const artworks = await getArtistArtworks({ locale, slug });

  return (
    <ArtworkGrid
      artworks={artworks}
      locale={locale}
    />
  );
};
