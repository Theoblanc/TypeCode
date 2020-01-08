import React from "react";
import { Container, MainWrapper } from "./ChatStyles";
import Header from "src/components/Header";
import Room from "src/components/Room";
import ChatUser from "src/components/User/ChatUserContainer";
import ChatView from "src/components/ChatLists";

interface IProps {
  data: any;
  Me: any;
}
const ChatPresenter: React.FC<IProps> = ({ data, Me }) => (
  <Container>
    <Header />
    <MainWrapper>
      <Room data={data} />
      <ChatView />
      <ChatUser Me={Me} />
    </MainWrapper>
  </Container>
);
export default ChatPresenter;
