import { gql } from "graphql-request";

import { ArtworkPreview } from "@/types/artwork";
import { Locale } from "@/types/common";

import { fetcher } from "@/utils/fetcher";

export const getArtistArtworks = async (variables: {
  locale: Locale;
  slug: string;
}) => {
  const { artworks } = await fetcher<{ artworks: ArtworkPreview[] }>(
    query,
    variables,
  );

  return artworks;
};

const query = gql`
  query GetArtistArtworks($locale: Locale!, $slug: String!) {
    artworks(
      locales: [$locale]
      where: { artist: { slug: $slug } }
      first: 30
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
