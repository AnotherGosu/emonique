import { gql } from "graphql-request";

import { ArtworkPreview } from "@/types/artwork";
import { Locale } from "@/types/common";

import { fetcher } from "@/utils/fetcher";

export const getFeaturedArtworks = async (locale: Locale) => {
  const { artworks } = await fetcher<{ artworks: ArtworkPreview[] }>(query, {
    locale,
  });

  return artworks;
};

const query = gql`
  query GetFeaturedArtworks($locale: Locale!) {
    artworks(locales: [$locale], where: { featured: true }) {
      id
      slug
      name
      images(locales: [en]) {
        url
        width
        height
      }
      artist {
        name
        slug
      }
    }
  }
`;
