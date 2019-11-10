import React from "react";
import { Container, MainWrapper } from "./ChatStyles";
import Header from "src/Components/Header";
import Footer from "src/Components/Footer";
import Room from "src/Components/Room/RoomPresenter";
import ChatUser from "src/Components/User/ChatUser";
import ChatView from "src/Components/ChatView/ChatView";

const ChatPresenter: React.FC = () => (
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
export default ChatPresenter;
