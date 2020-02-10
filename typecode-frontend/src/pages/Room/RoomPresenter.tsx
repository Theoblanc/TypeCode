import React from "react";
import { Container, MainWrapper } from "./RoomStyles";
import Header from "src/components/Header";
import Room from "src/components/Room";
import ChatUser from "src/components/User/";
import ChatView from "src/components/ChatLists";

interface IProps {
  moverRoom: any;
  fetchMyRooms: any;
  openMakeRoom: VoidFunction;
  closeMakeRoom: VoidFunction;
  openModal: Boolean;
  me: any;
}

const RoomPresenter: React.FC<IProps> = ({
  moverRoom,
  fetchMyRooms,
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
        fetchMyRooms={fetchMyRooms}
        openMakeRoom={openMakeRoom}
        closeMakeRoom={closeMakeRoom}
        openModal={openModal}
      />
      <ChatView fetchMyRooms={fetchMyRooms} />
      <ChatUser me={me} />
    </MainWrapper>
  </Container>
);
export default RoomPresenter;
