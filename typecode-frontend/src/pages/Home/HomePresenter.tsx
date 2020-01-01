import React from "react";
import { Container, MainWrapper } from "./HomeStyles";
import Header from "src/components/Header";
import Room from "src/components/Room";
import ChatUser from "src/components/User";
import ChatView from "src/components/ChatLists";
interface IProps {}
const HomePresenter: React.FC<IProps> = () => {
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
