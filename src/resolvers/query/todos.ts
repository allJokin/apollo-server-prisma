import { QueryResolvers } from "../../generated/graphql";

export const todos: QueryResolvers["todos"] = () => {
  return [
    {
      id: "1",
      title: "title",
    },
  ];
};
