import { gql } from "graphql-request";

import { Artist } from "@/types/artist";
import { Locale } from "@/types/common";

import { fetcher } from "@/utils/fetcher";

export const getArtist = (variables: { slug: string; locale: Locale }) => {
  return fetcher<{ artist: Artist | null }>(query, variables);
};

const query = gql`
  query GetArtist($locale: Locale!, $slug: String!) {
    artist(locales: [$locale], where: { slug: $slug }) {
      id
      slug
      name
      quote
      highlights
      photo(locales: [en]) {
        url
        width
        height
      }
      biography {
        raw
      }
      artworks {
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
        }
      }
    }
  }
`;
