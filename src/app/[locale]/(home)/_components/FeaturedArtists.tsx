import { Locale } from "@/types/common";

import { getFeaturedArtists } from "@/api/getFeaturedArtists";

import { ArtistGrid } from "@/components/ArtistGrid";

interface FeaturedArtistsProps {
  locale: Locale;
}

export const FeaturedArtists = async ({ locale }: FeaturedArtistsProps) => {
  const artists = await getFeaturedArtists(locale);

  return (
    <ArtistGrid
      artists={artists}
      locale={locale}
    />
  );
};
