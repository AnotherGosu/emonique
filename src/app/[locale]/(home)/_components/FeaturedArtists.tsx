import { Locale } from "@/types/common";

import { getArtists } from "@/api/getArtists";

import { ArtistGrid } from "@/components/ArtistGrid";

interface FeaturedArtistsProps {
  locale: Locale;
}

export const FeaturedArtists = async ({ locale }: FeaturedArtistsProps) => {
  const { artists } = await getArtists({ locale, first: 3 });

  return (
    <ArtistGrid
      artists={artists}
      locale={locale}
    />
  );
};
