import { gql } from "graphql-request";

import { ArtistPreview } from "@/types/artist";
import { Locale } from "@/types/common";

import { fetcher } from "@/utils/fetcher";

export const getArtists = ({
  locale,
  first = 10,
  skip = 0,
}: {
  locale: Locale;
  first?: number;
  skip?: number;
}) => {
  return fetcher<{ artists: ArtistPreview[] }>(query, { locale, first, skip });
};

const query = gql`
  query GetArtists($locale: Locale!, $first: Int!, $skip: Int!) {
    artists(locales: [$locale], first: $first, skip: $skip) {
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
