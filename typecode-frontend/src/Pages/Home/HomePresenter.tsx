import React from "react";
import { Container, MainWrapper } from "../Home/HomeStyles";
import Header from "src/Components/Header";
import Footer from "src/Components/Footer";
import Room from "src/Components/Room";
import ChatUser from "src/Components/User/ChatUser";
import ChatView from "src/Components/ChatView/ChatView";

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
