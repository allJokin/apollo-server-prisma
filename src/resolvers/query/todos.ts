import { QueryResolvers } from "../../generated/graphql";
import { Context } from "../../context";

export const todos: QueryResolvers<Context>["todos"] = (
  _parent,
  _args,
  { dataSources }
) => {
  const allUsers = dataSources.db.getUsers();
  return [
    {
      id: "1",
      title: "title",
    },
  ];
};
