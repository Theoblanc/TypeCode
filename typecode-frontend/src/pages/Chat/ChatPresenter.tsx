import React from "react";
import { Container, MainWrapper } from "./ChatStyles";
import Header from "src/components/Header";
import Room from "src/components/Room";
import ChatUser from "src/components/User/ChatUserPresenter";
import ChatView from "src/components/ChatLists";

const ChatPresenter: React.FC = () => (
  <Container>
    <Header />
    <MainWrapper>
      <Room />
      <ChatView />
      <ChatUser />
    </MainWrapper>
  </Container>
);
export default ChatPresenter;
