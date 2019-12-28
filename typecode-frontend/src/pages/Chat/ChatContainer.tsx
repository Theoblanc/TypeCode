import React from "react";
import ChatPresenter from "./ChatPresenter";

interface IProps {
  data: any;
}

const ChatContainer: React.FC<IProps> = ({ data }) => {
  return <ChatPresenter data={data} />;
};

export default ChatContainer;
