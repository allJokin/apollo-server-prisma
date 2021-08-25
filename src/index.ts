import { ApolloServer } from "apollo-server";
import schema from "./schema";
import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
import { $settings } from "nexus-prisma";
dotenv.config();

// サーバーの起動
const server = new ApolloServer({
  schema,
  context: () => ({
    db: new PrismaClient(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

$settings({
  prismaClientContextField: "db", // <-- Tell Nexus Prisma
});
