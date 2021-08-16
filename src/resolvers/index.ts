import { Resolvers } from "../generated/graphql";
import { todo, todos } from "./query";

export const resolvers: Resolvers = {
  Query: {
    todo,
    todos,
  },
};
