import React from "react";
import ChatUserPresenter from "./ChatUserPresenter";

interface IProps {
  me?: any;
  fetchRoom?: any;
}
const ChatUserContainer: React.FC<IProps> = ({ me, fetchRoom }) => {
  return <ChatUserPresenter me={me} fetchRoom={fetchRoom} />;
};

export default ChatUserContainer;
