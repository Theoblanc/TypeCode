import React from "react";
import ChatPage from "../pages/Chat";

interface IProps {
  data: any;
}

const Chat: React.FC<IProps> = ({ data }) => <ChatPage data={data} />;
export default Chat;
