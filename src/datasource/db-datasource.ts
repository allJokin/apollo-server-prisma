import { PrismaClient } from "@prisma/client";
import { DataSource } from "apollo-datasource";

export default class DBDataSource extends DataSource {
  prisma = new PrismaClient();
  constructor() {
    super();
  }

  async getUsers() {
    console.log("getUsers");
    const allUsers = await this.prisma.user.findMany();
    console.log(allUsers);
  }
}
