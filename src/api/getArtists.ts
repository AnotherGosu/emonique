import { gql } from "graphql-request";

import { ArtistPreview } from "@/types/artist";
import { Locale, PaginationResponse, SearchParams } from "@/types/common";

import { fetcher } from "@/utils/fetcher";

export const getArtists = async ({
  locale,
  searchParams = {},
}: {
  locale: Locale;
  searchParams?: SearchParams;
}) => {
  const first = 9;
  const page = Number(searchParams.page || 1);
  const skip = first * (page - 1);

  const data = await fetcher<{
    artistsConnection: PaginationResponse<ArtistPreview>;
  }>(query, { locale, first, skip });

  const { edges, pageInfo } = data.artistsConnection;

  const artists = edges.map(({ node }) => node);

  return { artists, pageInfo };
};

const query = gql`
  query GetArtists($locale: Locale!, $first: Int!, $skip: Int!) {
    artistsConnection(locales: [$locale], first: $first, skip: $skip) {
      edges {
        node {
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
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
