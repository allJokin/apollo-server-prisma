import { QueryResolvers } from "../../generated/graphql";

export const todo: QueryResolvers["todo"] = () => {
  return {
    id: "1",
    title: "title",
  };
};
