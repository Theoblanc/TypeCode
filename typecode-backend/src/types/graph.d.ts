export const typeDefs = ["type Query {\n  findUser(id: ID!): User\n  me: User!\n}\n\ntype mutation {\n  login(email: String!, password: String!): String!\n  signup(name: String!, email: String!): Boolean!\n}\n\ntype Token {\n  id: String\n  userId: String\n  accessedAt: String\n  deleted: Boolean\n  createdAt: String\n  updatedAt: String\n}\n\ntype TokenModel {\n  token: String!\n  access_token: String\n  refresh_token: String\n  token_type: String\n  expires_in: Int\n}\n\ntype User {\n  id: ID!\n  name: String!\n  email: String!\n  password: String!\n  profile: String\n  phoneNumber: String\n  phoneNumberVerified: Boolean\n  fcmToken: String\n  rooms: [Room!]!\n  createdAt: String!\n  updatedAt: String!\n  deletedAt: String\n}\n\ntype Room {\n  id: ID!\n  participants: [User!]!\n  messages: [Message!]!\n  createdAt: String!\n  updatedAt: String!\n  deletedAt: String\n}\n\ntype Message {\n  id: ID!\n  text: String!\n  from: User!\n  to: User!\n  room: Room!\n  createdAt: String!\n  updatedAt: String!\n}\n\n"];
/* tslint:disable */

export interface Query {
  findUser: User | null;
  me: User;
}

export interface FindUserQueryArgs {
  id: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  profile: string | null;
  phoneNumber: string | null;
  phoneNumberVerified: boolean | null;
  fcmToken: string | null;
  rooms: Array<Room>;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface Room {
  id: string;
  participants: Array<User>;
  messages: Array<Message>;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface Message {
  id: string;
  text: string;
  from: User;
  to: User;
  room: Room;
  createdAt: string;
  updatedAt: string;
}

export interface mutation {
  login: string;
  signup: boolean;
}

export interface LoginmutationArgs {
  email: string;
  password: string;
}

export interface SignupmutationArgs {
  name: string;
  email: string;
}

export interface Token {
  id: string | null;
  userId: string | null;
  accessedAt: string | null;
  deleted: boolean | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface TokenModel {
  token: string;
  access_token: string | null;
  refresh_token: string | null;
  token_type: string | null;
  expires_in: number | null;
}
