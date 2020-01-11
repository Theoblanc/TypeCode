import React from "react";
import { Container, MainWrapper } from "./ChatStyles";
import Header from "src/components/Header";
import Room from "src/components/Room";
import ChatUser from "src/components/User/ChatUserContainer";
import ChatView from "src/components/ChatLists";

interface IProps {
  fetchRoom: any;
  me: any;
}
const ChatPresenter: React.FC<IProps> = ({ fetchRoom, me }) => (
  <Container>
    <Header />
    <MainWrapper>
      <Room fetchRoom={fetchRoom} />
      <ChatView fetchRoom={fetchRoom} />
      <ChatUser me={me} fetchRoom={fetchRoom} />
    </MainWrapper>
  </Container>
);
export default ChatPresenter;
