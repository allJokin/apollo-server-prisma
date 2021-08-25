import { mutationType } from "nexus";
import { User as UserType } from "nexus-prisma";

export const UsersMutation = mutationType({
  definition(t) {
    t.nonNull.field("createUser", {
      type: UserType.$name,
      args: {
        [UserType.name.name]: UserType.name.type,
        [UserType.email.name]: UserType.email.type,
      },
      resolve: (_root, args, ctx) => {
        console.log(ctx.db);
        return ctx.db.user.create({ data: args });
      },
    });
  },
});
