export const typeDefs = ["type Mutation {\n  createMessage(roomId: String, text: String!): createMessageResponse!\n  createMyRoom(roomName: String!): createMyRoomResponse!\n  login(email: String!, password: String!): TokenModel\n  signup(name: String!, email: String!, password: String!): Boolean!\n  follow(id: String!): Boolean\n}\n\ntype Query {\n  sendMessage(roomId: String!): Message\n  fetchMyrooms: [Room!]\n  tokens: [Token]!\n  token: String!\n  me: User!\n  fetchUsers: User\n}\n\ntype createMessageResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype createMyRoomResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Message {\n  id: ID!\n  text: String!\n  from: User!\n  to: User!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Room {\n  id: ID!\n  userId: String!\n  roomName: String!\n  participants: [User!]!\n  messages: [RoomMessage!]\n  createdAt: String!\n  updatedAt: String!\n  deletedAt: String\n}\n\ntype RoomMessage {\n  id: ID!\n  user: RoomUser!\n  content: String\n  createdAt: String!\n  deletedAt: String\n}\n\ninterface RoomUser {\n  name: String!\n  email: String!\n  name: String!\n  email: String!\n}\n\ntype Token {\n  id: String\n  userId: String\n  accessedAt: String\n  deleted: Boolean\n  createdAt: String\n  updatedAt: String\n}\n\ntype TokenModel {\n  token: String!\n  access_token: String\n  refresh_token: String\n  token_type: String\n  expires_in: Int\n}\n\ntype User {\n  id: ID!\n  name: String!\n  email: String!\n  password: String!\n  profile: String\n  phoneNumber: String\n  verified: Boolean\n  isOnline: Boolean\n  following: [User!]!\n  followers: [User!]!\n  rooms: [Room!]\n  createdAt: String!\n  updatedAt: String!\n  deletedAt: String\n}\n\n"];
/* tslint:disable */

export interface Query {
  sendMessage: Message | null;
  fetchMyrooms: Array<Room>;
  tokens: Array<Token>;
  token: string;
  me: User;
  fetchUsers: User | null;
}

export interface SendMessageQueryArgs {
  roomId: string;
}

export interface Message {
  id: string;
  text: string;
  from: User;
  to: User;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  profile: string | null;
  phoneNumber: string | null;
  verified: boolean | null;
  isOnline: boolean | null;
  following: Array<User>;
  followers: Array<User>;
  rooms: Array<Room>;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface Room {
  id: string;
  userId: string;
  roomName: string;
  participants: Array<User>;
  messages: Array<RoomMessage>;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface RoomMessage {
  id: string;
  user: RoomUser;
  content: string | null;
  createdAt: string;
  deletedAt: string | null;
}

export interface RoomUser {
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

export interface Mutation {
  createMessage: createMessageResponse;
  createMyRoom: createMyRoomResponse;
  login: TokenModel | null;
  signup: boolean;
  follow: boolean | null;
}

export interface CreateMessageMutationArgs {
  roomId: string | null;
  text: string;
}

export interface CreateMyRoomMutationArgs {
  roomName: string;
}

export interface LoginMutationArgs {
  email: string;
  password: string;
}

export interface SignupMutationArgs {
  name: string;
  email: string;
  password: string;
}

export interface FollowMutationArgs {
  id: string;
}

export interface createMessageResponse {
  ok: boolean;
  error: string | null;
}

export interface createMyRoomResponse {
  ok: boolean;
  error: string | null;
}

export interface TokenModel {
  token: string;
  access_token: string | null;
  refresh_token: string | null;
  token_type: string | null;
  expires_in: number | null;
}
