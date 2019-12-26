import React from "react";
import { Container, MainWrapper } from "./HomeStyles";
import Header from "src/components/Header";
import Room from "src/components/Room";
import ChatUser from "src/components/User/ChatUserPresenter";
import ChatView from "src/components/ChatLists";

const HomePresenter: React.FC = () => {
  return (
    <Container>
      <Header />
      <MainWrapper>
        <Room />
        <ChatUser />
        <ChatView />
      </MainWrapper>
    </Container>
  );
};

export default HomePresenter;
