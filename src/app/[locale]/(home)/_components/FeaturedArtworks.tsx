import { Locale } from "@/types/common";

import { getFeaturedArtworks } from "@/api/getFeaturedArtworks";

import { ArtworkGrid } from "@/components/ArtworkGrid";

interface FeaturedArtworksProps {
  locale: Locale;
}

export const FeaturedArtworks = async ({ locale }: FeaturedArtworksProps) => {
  const artworks = await getFeaturedArtworks(locale);

  return (
    <ArtworkGrid
      artworks={artworks}
      locale={locale}
    />
  );
};
