import React from "react";
import ChatUserPresenter from "./ChatUserPresenter";

interface IProps {
  Me?: any;
}
const ChatUserContainer: React.FC<IProps> = ({ Me }) => {
  return <ChatUserPresenter data={Me} />;
};

export default ChatUserContainer;
