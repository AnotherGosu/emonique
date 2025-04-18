import { Locale, SearchParams } from "@/types/common";

import { getArtists } from "@/api/getArtists";

import { ArtistGrid } from "@/components/ArtistGrid";
import { Pagination } from "@/components/Pagination";

interface ArtistsProps {
  locale: Locale;
  searchParams: SearchParams;
}

export const Artists = async ({ locale, searchParams }: ArtistsProps) => {
  const { artists, pageInfo } = await getArtists({ locale, searchParams });

  return (
    <>
      <ArtistGrid
        artists={artists}
        locale={locale}
      />

      <Pagination {...pageInfo} />
    </>
  );
};
