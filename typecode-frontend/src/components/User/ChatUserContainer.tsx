import React from "react";
import ChatUserPresenter from "./ChatUserPresenter";

interface IProps {
  me?: any;
  fetchMyRooms?: any;
}
const ChatUserContainer: React.FC<IProps> = ({ me, fetchMyRooms }) => {
  return <ChatUserPresenter me={me} fetchMyRooms={fetchMyRooms} />;
};

export default ChatUserContainer;
