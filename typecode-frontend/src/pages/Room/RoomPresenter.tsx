import React from "react";
import { Container, MainWrapper } from "./RoomStyles";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import Room from "src/components/Room";
import ChatUser from "src/components/User/ChatUser";
import ChatView from "src/components/ChatLists";

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
