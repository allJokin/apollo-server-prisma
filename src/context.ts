import DBDataSource from "./datasource/db-datasource";
import { PrismaClient } from "@prisma/client";

export type Context = {
  db: PrismaClient;
};
