import DBDataSource from "./datasource/db-datasource";

export type Context = {
  dataSources: {
    db: DBDataSource;
  };
};
