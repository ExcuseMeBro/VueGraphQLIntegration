import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
});

// Cache implementation
const cache = new InMemoryCache({ addTypename: false });

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
