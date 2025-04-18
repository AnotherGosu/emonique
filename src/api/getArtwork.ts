import { gql } from "graphql-request";

import { Artwork } from "@/types/artwork";
import { Locale } from "@/types/common";

import { fetcher } from "@/utils/fetcher";

export const getArtwork = async (variables: {
  slug: string;
  locale: Locale;
}) => {
  const { artwork } = await fetcher<{ artwork: Artwork | null }>(
    query,
    variables,
  );

  return artwork;
};

const query = gql`
  query GetArtwork($locale: Locale!, $slug: String!) {
    artwork(locales: [$locale], where: { slug: $slug }) {
      id
      slug
      name
      images(locales: [en]) {
        url
        width
        height
      }
      artist(locales: [$locale]) {
        slug
        name
      }
      price
      medium
      yearOfCreation
      dimensions
      description {
        raw
      }
    }
  }
`;
