export const typeDefs = ["type Query {\n  user(id: ID!): User\n}\n\ntype User {\n  id: ID!\n  name: String!\n}\n\n"];
/* tslint:disable */

export interface Query {
  user: User | null;
}

export interface UserQueryArgs {
  id: string;
}

export interface User {
  id: string;
  name: string;
}
