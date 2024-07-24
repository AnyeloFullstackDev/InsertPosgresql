import { ApolloServer } from '@apollo/server';
import { PrismaClient } from '@prisma/client';
import { startStandaloneServer } from '@apollo/server/standalone';
import { gql } from 'graphql-tag'; 

const prisma = new PrismaClient();

const typeDefs = gql`
  type Person {
    id: Int!
    name: String!
    lastName: String!
    ci: String!
    city: String!
  }

  type Query {
    persons: [Person!]!
  }

  type Mutation {
    createPerson(name: String!, lastName: String!, ci: String!, city: String!): Person!
  }
`;

const resolvers = {
  Query: {
    persons: async () => await prisma.person.findMany(),
  },
  Mutation: {
    createPerson: async (_, { name, lastName, ci, city }) => {
      return await prisma.person.create({
        data: { name, lastName, ci, city },
      });
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  context: ({ req }) => ({ prisma }),
});

console.log(`Server ready at the port: ${url}`);
