import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://http://localhost:3001',
  cache: new InMemoryCache()
});

client
.query({
  query: gql`
      query GetTodos {
          getToDos {
              id,
              text,
              completed
          }
      }
  `
})
.then(result => console.log(result));
