import { provideApolloClient, useQuery } from "@vue/apollo-composable";
import { apolloClient } from "../config/ApolloClient";
import { gql } from "@apollo/client";

export const get = (body: string) => {
  return provideApolloClient(apolloClient)(() =>
    useQuery(gql`
      query {
        ${body}
      }
    `)
  );
};
