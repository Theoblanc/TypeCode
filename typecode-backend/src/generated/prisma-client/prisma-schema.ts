// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateMessage {
  count: Int!
}

type AggregateRoom {
  count: Int!
}

type AggregateToken {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Message {
  id: ID!
  text: String!
  from: User!
  room: Room!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  id: ID
  text: String!
  from: UserCreateOneInput!
  room: RoomCreateOneWithoutMessagesInput!
}

input MessageCreateManyWithoutRoomInput {
  create: [MessageCreateWithoutRoomInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutRoomInput {
  id: ID
  text: String!
  from: UserCreateOneInput!
}

type MessageEdge {
  node: Message!
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MessagePreviousValues {
  id: ID!
  text: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input MessageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [MessageScalarWhereInput!]
  OR: [MessageScalarWhereInput!]
  NOT: [MessageScalarWhereInput!]
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

input MessageUpdateInput {
  text: String
  from: UserUpdateOneRequiredInput
  room: RoomUpdateOneRequiredWithoutMessagesInput
}

input MessageUpdateManyDataInput {
  text: String
}

input MessageUpdateManyMutationInput {
  text: String
}

input MessageUpdateManyWithoutRoomInput {
  create: [MessageCreateWithoutRoomInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  set: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutRoomInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutRoomInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput!
  data: MessageUpdateManyDataInput!
}

input MessageUpdateWithoutRoomDataInput {
  text: String
  from: UserUpdateOneRequiredInput
}

input MessageUpdateWithWhereUniqueWithoutRoomInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutRoomDataInput!
}

input MessageUpsertWithWhereUniqueWithoutRoomInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutRoomDataInput!
  create: MessageCreateWithoutRoomInput!
}

input MessageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  from: UserWhereInput
  room: RoomWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  createRoom(data: RoomCreateInput!): Room!
  updateRoom(data: RoomUpdateInput!, where: RoomWhereUniqueInput!): Room
  updateManyRooms(data: RoomUpdateManyMutationInput!, where: RoomWhereInput): BatchPayload!
  upsertRoom(where: RoomWhereUniqueInput!, create: RoomCreateInput!, update: RoomUpdateInput!): Room!
  deleteRoom(where: RoomWhereUniqueInput!): Room
  deleteManyRooms(where: RoomWhereInput): BatchPayload!
  createToken(data: TokenCreateInput!): Token!
  updateToken(data: TokenUpdateInput!, where: TokenWhereUniqueInput!): Token
  updateManyTokens(data: TokenUpdateManyMutationInput!, where: TokenWhereInput): BatchPayload!
  upsertToken(where: TokenWhereUniqueInput!, create: TokenCreateInput!, update: TokenUpdateInput!): Token!
  deleteToken(where: TokenWhereUniqueInput!): Token
  deleteManyTokens(where: TokenWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  room(where: RoomWhereUniqueInput!): Room
  rooms(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Room]!
  roomsConnection(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoomConnection!
  token(where: TokenWhereUniqueInput!): Token
  tokens(where: TokenWhereInput, orderBy: TokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Token]!
  tokensConnection(where: TokenWhereInput, orderBy: TokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TokenConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Room {
  id: ID!
  userId: String!
  roomName: String!
  participants(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
}

type RoomConnection {
  pageInfo: PageInfo!
  edges: [RoomEdge]!
  aggregate: AggregateRoom!
}

input RoomCreateInput {
  id: ID
  userId: String!
  roomName: String!
  participants: UserCreateManyWithoutRoomsInput
  messages: MessageCreateManyWithoutRoomInput
  deletedAt: DateTime
}

input RoomCreateManyWithoutParticipantsInput {
  create: [RoomCreateWithoutParticipantsInput!]
  connect: [RoomWhereUniqueInput!]
}

input RoomCreateOneWithoutMessagesInput {
  create: RoomCreateWithoutMessagesInput
  connect: RoomWhereUniqueInput
}

input RoomCreateWithoutMessagesInput {
  id: ID
  userId: String!
  roomName: String!
  participants: UserCreateManyWithoutRoomsInput
  deletedAt: DateTime
}

input RoomCreateWithoutParticipantsInput {
  id: ID
  userId: String!
  roomName: String!
  messages: MessageCreateManyWithoutRoomInput
  deletedAt: DateTime
}

type RoomEdge {
  node: Room!
  cursor: String!
}

enum RoomOrderByInput {
  id_ASC
  id_DESC
  userId_ASC
  userId_DESC
  roomName_ASC
  roomName_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
}

type RoomPreviousValues {
  id: ID!
  userId: String!
  roomName: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
}

input RoomScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  userId: String
  userId_not: String
  userId_in: [String!]
  userId_not_in: [String!]
  userId_lt: String
  userId_lte: String
  userId_gt: String
  userId_gte: String
  userId_contains: String
  userId_not_contains: String
  userId_starts_with: String
  userId_not_starts_with: String
  userId_ends_with: String
  userId_not_ends_with: String
  roomName: String
  roomName_not: String
  roomName_in: [String!]
  roomName_not_in: [String!]
  roomName_lt: String
  roomName_lte: String
  roomName_gt: String
  roomName_gte: String
  roomName_contains: String
  roomName_not_contains: String
  roomName_starts_with: String
  roomName_not_starts_with: String
  roomName_ends_with: String
  roomName_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  deletedAt: DateTime
  deletedAt_not: DateTime
  deletedAt_in: [DateTime!]
  deletedAt_not_in: [DateTime!]
  deletedAt_lt: DateTime
  deletedAt_lte: DateTime
  deletedAt_gt: DateTime
  deletedAt_gte: DateTime
  AND: [RoomScalarWhereInput!]
  OR: [RoomScalarWhereInput!]
  NOT: [RoomScalarWhereInput!]
}

type RoomSubscriptionPayload {
  mutation: MutationType!
  node: Room
  updatedFields: [String!]
  previousValues: RoomPreviousValues
}

input RoomSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RoomWhereInput
  AND: [RoomSubscriptionWhereInput!]
  OR: [RoomSubscriptionWhereInput!]
  NOT: [RoomSubscriptionWhereInput!]
}

input RoomUpdateInput {
  userId: String
  roomName: String
  participants: UserUpdateManyWithoutRoomsInput
  messages: MessageUpdateManyWithoutRoomInput
  deletedAt: DateTime
}

input RoomUpdateManyDataInput {
  userId: String
  roomName: String
  deletedAt: DateTime
}

input RoomUpdateManyMutationInput {
  userId: String
  roomName: String
  deletedAt: DateTime
}

input RoomUpdateManyWithoutParticipantsInput {
  create: [RoomCreateWithoutParticipantsInput!]
  delete: [RoomWhereUniqueInput!]
  connect: [RoomWhereUniqueInput!]
  set: [RoomWhereUniqueInput!]
  disconnect: [RoomWhereUniqueInput!]
  update: [RoomUpdateWithWhereUniqueWithoutParticipantsInput!]
  upsert: [RoomUpsertWithWhereUniqueWithoutParticipantsInput!]
  deleteMany: [RoomScalarWhereInput!]
  updateMany: [RoomUpdateManyWithWhereNestedInput!]
}

input RoomUpdateManyWithWhereNestedInput {
  where: RoomScalarWhereInput!
  data: RoomUpdateManyDataInput!
}

input RoomUpdateOneRequiredWithoutMessagesInput {
  create: RoomCreateWithoutMessagesInput
  update: RoomUpdateWithoutMessagesDataInput
  upsert: RoomUpsertWithoutMessagesInput
  connect: RoomWhereUniqueInput
}

input RoomUpdateWithoutMessagesDataInput {
  userId: String
  roomName: String
  participants: UserUpdateManyWithoutRoomsInput
  deletedAt: DateTime
}

input RoomUpdateWithoutParticipantsDataInput {
  userId: String
  roomName: String
  messages: MessageUpdateManyWithoutRoomInput
  deletedAt: DateTime
}

input RoomUpdateWithWhereUniqueWithoutParticipantsInput {
  where: RoomWhereUniqueInput!
  data: RoomUpdateWithoutParticipantsDataInput!
}

input RoomUpsertWithoutMessagesInput {
  update: RoomUpdateWithoutMessagesDataInput!
  create: RoomCreateWithoutMessagesInput!
}

input RoomUpsertWithWhereUniqueWithoutParticipantsInput {
  where: RoomWhereUniqueInput!
  update: RoomUpdateWithoutParticipantsDataInput!
  create: RoomCreateWithoutParticipantsInput!
}

input RoomWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  userId: String
  userId_not: String
  userId_in: [String!]
  userId_not_in: [String!]
  userId_lt: String
  userId_lte: String
  userId_gt: String
  userId_gte: String
  userId_contains: String
  userId_not_contains: String
  userId_starts_with: String
  userId_not_starts_with: String
  userId_ends_with: String
  userId_not_ends_with: String
  roomName: String
  roomName_not: String
  roomName_in: [String!]
  roomName_not_in: [String!]
  roomName_lt: String
  roomName_lte: String
  roomName_gt: String
  roomName_gte: String
  roomName_contains: String
  roomName_not_contains: String
  roomName_starts_with: String
  roomName_not_starts_with: String
  roomName_ends_with: String
  roomName_not_ends_with: String
  participants_every: UserWhereInput
  participants_some: UserWhereInput
  participants_none: UserWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  deletedAt: DateTime
  deletedAt_not: DateTime
  deletedAt_in: [DateTime!]
  deletedAt_not_in: [DateTime!]
  deletedAt_lt: DateTime
  deletedAt_lte: DateTime
  deletedAt_gt: DateTime
  deletedAt_gte: DateTime
  AND: [RoomWhereInput!]
  OR: [RoomWhereInput!]
  NOT: [RoomWhereInput!]
}

input RoomWhereUniqueInput {
  id: ID
}

type Subscription {
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  room(where: RoomSubscriptionWhereInput): RoomSubscriptionPayload
  token(where: TokenSubscriptionWhereInput): TokenSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Token {
  id: ID!
  userId: String
  accessedAt: DateTime
  deleted: Boolean
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TokenConnection {
  pageInfo: PageInfo!
  edges: [TokenEdge]!
  aggregate: AggregateToken!
}

input TokenCreateInput {
  id: ID
  userId: String
  accessedAt: DateTime
  deleted: Boolean
}

type TokenEdge {
  node: Token!
  cursor: String!
}

enum TokenOrderByInput {
  id_ASC
  id_DESC
  userId_ASC
  userId_DESC
  accessedAt_ASC
  accessedAt_DESC
  deleted_ASC
  deleted_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TokenPreviousValues {
  id: ID!
  userId: String
  accessedAt: DateTime
  deleted: Boolean
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TokenSubscriptionPayload {
  mutation: MutationType!
  node: Token
  updatedFields: [String!]
  previousValues: TokenPreviousValues
}

input TokenSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TokenWhereInput
  AND: [TokenSubscriptionWhereInput!]
  OR: [TokenSubscriptionWhereInput!]
  NOT: [TokenSubscriptionWhereInput!]
}

input TokenUpdateInput {
  userId: String
  accessedAt: DateTime
  deleted: Boolean
}

input TokenUpdateManyMutationInput {
  userId: String
  accessedAt: DateTime
  deleted: Boolean
}

input TokenWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  userId: String
  userId_not: String
  userId_in: [String!]
  userId_not_in: [String!]
  userId_lt: String
  userId_lte: String
  userId_gt: String
  userId_gte: String
  userId_contains: String
  userId_not_contains: String
  userId_starts_with: String
  userId_not_starts_with: String
  userId_ends_with: String
  userId_not_ends_with: String
  accessedAt: DateTime
  accessedAt_not: DateTime
  accessedAt_in: [DateTime!]
  accessedAt_not_in: [DateTime!]
  accessedAt_lt: DateTime
  accessedAt_lte: DateTime
  accessedAt_gt: DateTime
  accessedAt_gte: DateTime
  deleted: Boolean
  deleted_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TokenWhereInput!]
  OR: [TokenWhereInput!]
  NOT: [TokenWhereInput!]
}

input TokenWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  profile: String
  phoneNumber: String
  phoneNumberVerified: Boolean
  friends(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  rooms(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Room!]
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  profile: String
  phoneNumber: String
  phoneNumberVerified: Boolean
  friends: UserCreateManyInput
  rooms: RoomCreateManyWithoutParticipantsInput
  deletedAt: DateTime
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutRoomsInput {
  create: [UserCreateWithoutRoomsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutRoomsInput {
  id: ID
  name: String!
  email: String!
  password: String!
  profile: String
  phoneNumber: String
  phoneNumberVerified: Boolean
  friends: UserCreateManyInput
  deletedAt: DateTime
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  profile_ASC
  profile_DESC
  phoneNumber_ASC
  phoneNumber_DESC
  phoneNumberVerified_ASC
  phoneNumberVerified_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  profile: String
  phoneNumber: String
  phoneNumberVerified: Boolean
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  profile: String
  profile_not: String
  profile_in: [String!]
  profile_not_in: [String!]
  profile_lt: String
  profile_lte: String
  profile_gt: String
  profile_gte: String
  profile_contains: String
  profile_not_contains: String
  profile_starts_with: String
  profile_not_starts_with: String
  profile_ends_with: String
  profile_not_ends_with: String
  phoneNumber: String
  phoneNumber_not: String
  phoneNumber_in: [String!]
  phoneNumber_not_in: [String!]
  phoneNumber_lt: String
  phoneNumber_lte: String
  phoneNumber_gt: String
  phoneNumber_gte: String
  phoneNumber_contains: String
  phoneNumber_not_contains: String
  phoneNumber_starts_with: String
  phoneNumber_not_starts_with: String
  phoneNumber_ends_with: String
  phoneNumber_not_ends_with: String
  phoneNumberVerified: Boolean
  phoneNumberVerified_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  deletedAt: DateTime
  deletedAt_not: DateTime
  deletedAt_in: [DateTime!]
  deletedAt_not_in: [DateTime!]
  deletedAt_lt: DateTime
  deletedAt_lte: DateTime
  deletedAt_gt: DateTime
  deletedAt_gte: DateTime
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  email: String
  password: String
  profile: String
  phoneNumber: String
  phoneNumberVerified: Boolean
  friends: UserUpdateManyInput
  rooms: RoomUpdateManyWithoutParticipantsInput
  deletedAt: DateTime
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  profile: String
  phoneNumber: String
  phoneNumberVerified: Boolean
  friends: UserUpdateManyInput
  rooms: RoomUpdateManyWithoutParticipantsInput
  deletedAt: DateTime
}

input UserUpdateManyDataInput {
  name: String
  email: String
  password: String
  profile: String
  phoneNumber: String
  phoneNumberVerified: Boolean
  deletedAt: DateTime
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  profile: String
  phoneNumber: String
  phoneNumberVerified: Boolean
  deletedAt: DateTime
}

input UserUpdateManyWithoutRoomsInput {
  create: [UserCreateWithoutRoomsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutRoomsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutRoomsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutRoomsDataInput {
  name: String
  email: String
  password: String
  profile: String
  phoneNumber: String
  phoneNumberVerified: Boolean
  friends: UserUpdateManyInput
  deletedAt: DateTime
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpdateWithWhereUniqueWithoutRoomsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutRoomsDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueWithoutRoomsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutRoomsDataInput!
  create: UserCreateWithoutRoomsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  profile: String
  profile_not: String
  profile_in: [String!]
  profile_not_in: [String!]
  profile_lt: String
  profile_lte: String
  profile_gt: String
  profile_gte: String
  profile_contains: String
  profile_not_contains: String
  profile_starts_with: String
  profile_not_starts_with: String
  profile_ends_with: String
  profile_not_ends_with: String
  phoneNumber: String
  phoneNumber_not: String
  phoneNumber_in: [String!]
  phoneNumber_not_in: [String!]
  phoneNumber_lt: String
  phoneNumber_lte: String
  phoneNumber_gt: String
  phoneNumber_gte: String
  phoneNumber_contains: String
  phoneNumber_not_contains: String
  phoneNumber_starts_with: String
  phoneNumber_not_starts_with: String
  phoneNumber_ends_with: String
  phoneNumber_not_ends_with: String
  phoneNumberVerified: Boolean
  phoneNumberVerified_not: Boolean
  friends_every: UserWhereInput
  friends_some: UserWhereInput
  friends_none: UserWhereInput
  rooms_every: RoomWhereInput
  rooms_some: RoomWhereInput
  rooms_none: RoomWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  deletedAt: DateTime
  deletedAt_not: DateTime
  deletedAt_in: [DateTime!]
  deletedAt_not_in: [DateTime!]
  deletedAt_lt: DateTime
  deletedAt_lte: DateTime
  deletedAt_gt: DateTime
  deletedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`