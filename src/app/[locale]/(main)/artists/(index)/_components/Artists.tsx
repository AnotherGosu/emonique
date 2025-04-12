import { Locale } from "@/types/common";

import { getArtists } from "@/api/getArtists";

import { ArtistGrid } from "@/components/ArtistGrid";

interface ArtistsProps {
  locale: Locale;
}

export const Artists = async ({ locale }: ArtistsProps) => {
  const { artists } = await getArtists({ locale });

  return (
    <ArtistGrid
      artists={artists}
      locale={locale}
    />
  );
};
