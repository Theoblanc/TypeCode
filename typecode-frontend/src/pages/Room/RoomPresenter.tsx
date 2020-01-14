import React from "react";
import { Container, MainWrapper } from "./RoomStyles";
import Header from "src/components/Header";
import Room from "src/components/Room";
import ChatUser from "src/components/User/";
import ChatView from "src/components/ChatLists";

interface IProps {
  moverRoom: any;
  fetchRoom: any;
  openMakeRoom: VoidFunction;
  closeMakeRoom: VoidFunction;
  openModal: Boolean;
  me: any;
}

const RoomPresenter: React.FC<IProps> = ({
  moverRoom,
  fetchRoom,
  openMakeRoom,
  closeMakeRoom,
  openModal,
  me
}) => (
  <Container>
    <Header />
    <MainWrapper>
      <Room
        moverRoom={moverRoom}
        fetchRoom={fetchRoom}
        openMakeRoom={openMakeRoom}
        closeMakeRoom={closeMakeRoom}
        openModal={openModal}
      />
      <ChatView fetchRoom={fetchRoom} />
      <ChatUser me={me} />
    </MainWrapper>
  </Container>
);
export default RoomPresenter;
