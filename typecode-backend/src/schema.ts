import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import { applyMiddleware } from "graphql-middleware";
import path from "path";

const allTypes: any = fileLoader(path.join(__dirname, "./types/**/*.graphql"));

const allResolvers: any = fileLoader(
  path.join(__dirname, "./schema/**/*.resolvers.ts")
);

const mergedTypes: any = mergeTypes(allTypes);
const mergedResolvers: any = mergeResolvers(allResolvers);

const schema = applyMiddleware(
  makeExecutableSchema({
    typeDefs: mergedTypes,
    resolvers: mergedResolvers
  })
);

export default schema;
