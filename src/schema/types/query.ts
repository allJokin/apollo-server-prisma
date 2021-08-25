import { queryType } from "nexus";
import { User as UserType } from "nexus-prisma";

export const UsersQuery = queryType({
  definition(t) {
    t.nonNull.list.field("users", {
      type: UserType.$name,
      resolve: (_root, _args, ctx) => {
        return ctx.db.user.findMany();
      },
    });
  },
});
