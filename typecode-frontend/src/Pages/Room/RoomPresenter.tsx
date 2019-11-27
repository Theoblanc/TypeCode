import React from "react";
import { Container, MainWrapper } from "./RoomStyles";
import Header from "src/Components/Header";
import Footer from "src/Components/Footer";
import Room from "src/Components/Room";
import ChatUser from "src/Components/User/ChatUser";
import ChatView from "src/Components/ChatLists";

const RoomPresenter: React.FC = () => (
  <Container>
    <Header />
    <MainWrapper>
      <Room />
      <ChatView />
      <ChatUser />
    </MainWrapper>
    <Footer />
  </Container>
);
export default RoomPresenter;
