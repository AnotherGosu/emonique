import { gql } from "graphql-request";

import { ArtistPreview } from "@/types/artist";
import { Locale } from "@/types/common";

import { fetcher } from "@/utils/fetcher";

export const getFeaturedArtists = async (locale: Locale) => {
  const { artists } = await fetcher<{ artists: ArtistPreview[] }>(query, {
    locale,
  });

  return artists;
};

const query = gql`
  query GetFeaturedArtists($locale: Locale!) {
    artists(locales: [$locale], where: { featured: true }) {
      id
      slug
      name
      quote
      photo(locales: [en]) {
        url
        width
        height
      }
    }
  }
`;
