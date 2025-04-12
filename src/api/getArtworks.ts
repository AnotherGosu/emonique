import { gql } from "graphql-request";

import { ArtworkPreview } from "@/types/artwork";
import { Locale } from "@/types/common";

import { fetcher } from "@/utils/fetcher";

export const getArtworks = ({
  locale,
  first = 30,
  skip = 0,
}: {
  locale: Locale;
  first?: number;
  skip?: number;
}) => {
  return fetcher<{ artworks: ArtworkPreview[] }>(query, {
    locale,
    first,
    skip,
  });
};

const query = gql`
  query GetArtworks($locale: Locale!, $first: Int!, $skip: Int!) {
    artworks(locales: [$locale], first: $first, skip: $skip) {
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
