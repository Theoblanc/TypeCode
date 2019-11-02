import React from "react";
import { Container, MainWrapper } from "./ChatStyles";
import Header from "src/Components/Header";
import Footer from "src/Components/Footer";
import Room from "src/Components/Room/RoomPresenter";
import ChatUser from "src/Components/ChatUser";
import ChatComponet from "src/Components/Chat/ChatComponet";

const ChatPresenter: React.FC = () => (
  <Container>
    <Header />
    <MainWrapper>
      <Room />
      <ChatComponet />
      <ChatUser />
    </MainWrapper>
    <Footer />
  </Container>
);
export default ChatPresenter;
