import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:4000', // Asegúrate de que esta URL coincida con la URL del servidor GraphQL
  cache: new InMemoryCache(),
});

