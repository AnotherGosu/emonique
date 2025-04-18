import { Locale } from "@/types/common";

import { getSimilarArtworks } from "@/api/getSimilarArtworks";

import { ArtworkGrid } from "@/components/ArtworkGrid";

interface SimilarArtworksProps {
  locale: Locale;
  slug: string;
  artistSlug: string;
}

export const SimilarArtworks = async ({
  locale,
  slug,
  artistSlug,
}: SimilarArtworksProps) => {
  const artworks = await getSimilarArtworks({ locale, slug, artistSlug });

  return (
    <ArtworkGrid
      artworks={artworks}
      locale={locale}
    />
  );
};
