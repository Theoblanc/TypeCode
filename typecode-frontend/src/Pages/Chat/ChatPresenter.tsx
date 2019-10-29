import React from "react";
import { Container, MainWrapper } from "./ChatStyles";
import Header from "src/Components/Header";
import Footer from "src/Components/Footer";

const ChatPresenter: React.FC = () => (
  <Container>
    <Header />
    <MainWrapper>채팅입니다.</MainWrapper>
    <Footer />
  </Container>
);
export default ChatPresenter;
