import { gql } from "graphql-request";

import { fetcher } from "@/utils/fetcher";

export const getArtistSlugs = () => {
  return fetcher<{ artists: Array<{ slug: string }> }>(query);
};

const query = gql`
  query GetArtistSlugs {
    artists(first: 100) {
      slug
    }
  }
`;
