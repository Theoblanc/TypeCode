import React from "react";
import { Container, MainWrapper } from "./ChatStyles";
import Header from "src/components/Header";
import Room from "src/components/Room";
import ChatUser from "src/components/User/ChatUserContainer";
import ChatView from "src/components/ChatLists";

interface IProps {
  fetchMyRooms: any;
  me: any;
}
const ChatPresenter: React.FC<IProps> = ({ fetchMyRooms, me }) => (
  <Container>
    <Header />
    <MainWrapper>
      <Room fetchMyRooms={fetchMyRooms} />
      <ChatView fetchMyRooms={fetchMyRooms} />
      <ChatUser me={me} fetchMyRooms={fetchMyRooms} />
    </MainWrapper>
  </Container>
);
export default ChatPresenter;
