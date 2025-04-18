import { gql } from "graphql-request";

import { fetcher } from "@/utils/fetcher";

export const getArtistSlugs = async () => {
  const { artists } = await fetcher<{ artists: Array<{ slug: string }> }>(
    query,
  );

  const slugs = artists.map(({ slug }) => slug);

  return slugs;
};

const query = gql`
  query GetArtistSlugs {
    artists(first: 100) {
      slug
    }
  }
`;
