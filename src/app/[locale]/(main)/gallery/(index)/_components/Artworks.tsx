import { Locale } from "@/types/common";

import { getArtworks } from "@/api/getArtworks";

import { ArtworkGrid } from "@/components/ArtworkGrid";

interface ArtworksProps {
  locale: Locale;
}

export const Artworks = async ({ locale }: ArtworksProps) => {
  const { artworks } = await getArtworks({ locale });

  return (
    <ArtworkGrid
      locale={locale}
      artworks={artworks}
    />
  );
};
