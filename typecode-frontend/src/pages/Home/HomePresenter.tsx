import React from "react";
import { Container, MainWrapper } from "./HomeStyles";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import Room from "src/components/Room";
import ChatUser from "src/components/User/ChatUser";
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
      <Footer />
    </Container>
  );
};

export default HomePresenter;
