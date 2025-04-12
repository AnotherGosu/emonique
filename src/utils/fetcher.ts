import { GraphQLClient } from "graphql-request";
import pThrottle from "p-throttle";

const throttle = pThrottle({ limit: 2, interval: 1000 });

const Client = new GraphQLClient(process.env.API_ENDPOINT!);

export const fetcher = throttle(<T>(query: string, variables?: object) => {
  return Client.request<T>(query, variables);
});
