import { gql } from "graphql-request";

import { fetcher } from "@/utils/fetcher";

export const getArtworkSlugs = () => {
  return fetcher<{ artworks: Array<{ slug: string }> }>(query);
};

const query = gql`
  query GetArtworkSlugs {
    artworks(first: 100) {
      slug
    }
  }
`;
