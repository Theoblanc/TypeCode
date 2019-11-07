export const typeDefs = ["type Query {\n  user(id: ID!): User\n}\n\ntype User {\n  id: ID!\n  name: String!\n  email: String!\n  password: String!\n  profile: String\n  phoneNumber: String\n  phoneNumberVerified: Boolean\n  fcmToken: String\n  rooms: [Room!]!\n  createdAt: String!\n  updatedAt: String!\n  deletedAt: String\n}\n\ntype Room {\n  id: ID!\n  participants: [User!]!\n  messages: [Message!]!\n  createdAt: String!\n  updatedAt: String!\n  deletedAt: String\n}\n\ntype Message {\n  id: ID!\n  text: String!\n  from: User!\n  to: User!\n  room: Room!\n  createdAt: String!\n  updatedAt: String!\n}\n\n"];
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
