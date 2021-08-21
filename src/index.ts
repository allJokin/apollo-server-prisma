import { ApolloServer } from "apollo-server";
import typeDefs from "./graphql/schema.graphql";
import { resolvers } from "./resolvers";
import DBDataSource from "./datasource/db-datasource";
import dotenv from "dotenv";
dotenv.config();

// サーバーの起動
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ db: new DBDataSource() }),
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
