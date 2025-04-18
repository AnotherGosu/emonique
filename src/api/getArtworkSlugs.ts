import { gql } from "graphql-request";

import { fetcher } from "@/utils/fetcher";

export const getArtworkSlugs = async () => {
  const { artworks } = await fetcher<{ artworks: Array<{ slug: string }> }>(
    query,
  );

  const slugs = artworks.map(({ slug }) => slug);

  return slugs;
};

const query = gql`
  query GetArtworkSlugs {
    artworks(first: 100) {
      slug
    }
  }
`;
