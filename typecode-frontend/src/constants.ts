export enum STORES {
  AUTH_TYPECODE = "auth",
  CHAT_TYPECODE = "chat"
}

export enum PAGE_PATHS {
  SIGNUP = "/signup",
  LOGIN = "/login",
  HOME = "/home",
  CHAT = "/chat/:userId",
  ROOM = "/room/:roomName/"
}
