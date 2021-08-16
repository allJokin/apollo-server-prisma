import { ApolloServer, gql } from "apollo-server";
import typeDefs from "./graphql/schema.graphql";
import { resolvers } from "./resolvers";

// サーバーの起動
const server = new ApolloServer({ typeDefs,resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
