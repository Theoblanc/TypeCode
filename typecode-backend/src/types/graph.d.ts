export const typeDefs = ["type Mutation {\n  createMessage(roomId: String): Message!\n  sendMessage(roomId: String, message: String!, toId: String): Message\n  createMyRoom(userId: String!): Boolean!\n  login(email: String!, password: String!): TokenModel\n  signup(name: String!, email: String!, password: String!): Boolean!\n}\n\ntype Query {\n  findMyrooms: Room\n  findUser(email: String!): User\n  me: User!\n}\n\ntype Token {\n  id: String\n  userId: String\n  accessedAt: String\n  deleted: Boolean\n  createdAt: String\n  updatedAt: String\n}\n\ntype TokenModel {\n  token: String!\n  access_token: String\n  refresh_token: String\n  token_type: String\n  expires_in: Int\n}\n\ntype User {\n  id: ID!\n  name: String!\n  email: String!\n  password: String!\n  profile: String\n  phoneNumber: String\n  phoneNumberVerified: Boolean\n  fcmToken: Token\n  friends: [User!]\n  rooms: [Room!]\n  createdAt: String!\n  updatedAt: String!\n  deletedAt: String\n}\n\ntype Room {\n  id: ID!\n  participants: [User!]!\n  userId: String!\n  messages: [Message!]\n  createdAt: String!\n  updatedAt: String!\n  deletedAt: String\n}\n\ntype Message {\n  id: ID!\n  text: String!\n  from: User!\n  room: Room!\n  createdAt: String!\n  updatedAt: String!\n}\n\n"];
/* tslint:disable */

export interface Query {
  findMyrooms: Room | null;
  findUser: User | null;
  me: User;
}

export interface FindUserQueryArgs {
  email: string;
}

export interface Room {
  id: string;
  participants: Array<User>;
  userId: string;
  messages: Array<Message>;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  profile: string | null;
  phoneNumber: string | null;
  phoneNumberVerified: boolean | null;
  fcmToken: Token | null;
  friends: Array<User>;
  rooms: Array<Room>;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface Token {
  id: string | null;
  userId: string | null;
  accessedAt: string | null;
  deleted: boolean | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface Message {
  id: string;
  text: string;
  from: User;
  room: Room;
  createdAt: string;
  updatedAt: string;
}

export interface Mutation {
  createMessage: Message;
  sendMessage: Message | null;
  createMyRoom: boolean;
  login: TokenModel | null;
  signup: boolean;
}

export interface CreateMessageMutationArgs {
  roomId: string | null;
}

export interface SendMessageMutationArgs {
  roomId: string | null;
  message: string;
  toId: string | null;
}

export interface CreateMyRoomMutationArgs {
  userId: string;
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

export interface TokenModel {
  token: string;
  access_token: string | null;
  refresh_token: string | null;
  token_type: string | null;
  expires_in: number | null;
}
