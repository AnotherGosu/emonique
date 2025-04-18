import { gql } from "graphql-request";

import { ArtworkPreview } from "@/types/artwork";
import { Locale, PaginationResponse, SearchParams } from "@/types/common";

import { fetcher } from "@/utils/fetcher";

export const getArtworks = async ({
  locale,
  searchParams = {},
}: {
  locale: Locale;
  searchParams?: SearchParams;
}) => {
  const first = 18;
  const page = Number(searchParams.page || 1);
  const skip = first * (page - 1);

  const data = await fetcher<{
    artworksConnection: PaginationResponse<ArtworkPreview>;
  }>(query, { locale, first, skip });

  const { edges, pageInfo } = data.artworksConnection;

  const artworks = edges.map(({ node }) => node);

  return { artworks, pageInfo };
};

const query = gql`
  query GetArtworks($locale: Locale!, $first: Int!, $skip: Int!) {
    artworksConnection(locales: [$locale], first: $first, skip: $skip) {
      edges {
        node {
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
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
