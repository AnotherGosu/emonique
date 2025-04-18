import { Locale, SearchParams } from "@/types/common";

import { getArtworks } from "@/api/getArtworks";

import { ArtworkGrid } from "@/components/ArtworkGrid";
import { Pagination } from "@/components/Pagination";

interface ArtworksProps {
  locale: Locale;
  searchParams: SearchParams;
}

export const Artworks = async ({ locale, searchParams }: ArtworksProps) => {
  const { artworks, pageInfo } = await getArtworks({ locale, searchParams });

  return (
    <>
      <ArtworkGrid
        locale={locale}
        artworks={artworks}
      />

      <Pagination {...pageInfo} />
    </>
  );
};
