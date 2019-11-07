import React from "react";
import { Container, MainWrapper } from "../Home/HomeStyles";
import Header from "src/Components/Header";
import Footer from "src/Components/Footer";
import Room from "src/Components/Room/RoomPresenter";
import ChatUser from "src/Components/ChatUser";
import ChatComponet from "src/Components/Chat/ChatComponet";

const HomePresenter: React.FC = () => {
  return (
    <Container>
      <Header />
      <MainWrapper>
        <Room />
        <ChatUser />
        <ChatComponet />
      </MainWrapper>
      <Footer />
    </Container>
  );
};

export default HomePresenter;