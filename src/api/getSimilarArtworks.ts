import { gql } from "graphql-request";

import { ArtworkPreview } from "@/types/artwork";
import { Locale } from "@/types/common";

import { fetcher } from "@/utils/fetcher";

export const getSimilarArtworks = (variables: {
  locale: Locale;
  slug: string;
  artistSlug: string;
}) => {
  return fetcher<{ artworks: ArtworkPreview[] }>(query, variables);
};

const query = gql`
  query GetSimilarArtworks(
    $locale: Locale!
    $slug: String!
    $artistSlug: String!
  ) {
    artworks(
      locales: [$locale]
      where: { slug_not: $slug, artist: { slug: $artistSlug } }
      first: 6
    ) {
      id
      slug
      name
      images(locales: [en]) {
        url
        width
        height
      }
      artist(locales: [$locale]) {
        name
        slug
      }
    }
  }
`;
