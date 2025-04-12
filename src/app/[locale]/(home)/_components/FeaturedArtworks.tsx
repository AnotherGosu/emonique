import { Locale } from "@/types/common";

import { getArtworks } from "@/api/getArtworks";

import { ArtworkGrid } from "@/components/ArtworkGrid";

interface FeaturedArtworksProps {
  locale: Locale;
}

export const FeaturedArtworks = async ({ locale }: FeaturedArtworksProps) => {
  const { artworks } = await getArtworks({ locale, first: 9 });

  return (
    <ArtworkGrid
      artworks={artworks}
      locale={locale}
    />
  );
};
