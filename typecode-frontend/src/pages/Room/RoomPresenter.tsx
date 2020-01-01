import React from "react";
import { Container, MainWrapper } from "./RoomStyles";
import Header from "src/components/Header";
import Room from "src/components/Room";
import ChatUser from "src/components/User/";
import ChatView from "src/components/ChatLists";

interface IProps {
  moverRoom: any;
  data: any;
  openMakeRoom: VoidFunction;
  closeMakeRoom: VoidFunction;
  openModal: Boolean;
}

const RoomPresenter: React.FC<IProps> = ({
  moverRoom,
  data,
  openMakeRoom,
  closeMakeRoom,
  openModal
}) => (
  <Container>
    <Header />
    <MainWrapper>
      <Room
        moverRoom={moverRoom}
        data={data}
        openMakeRoom={openMakeRoom}
        closeMakeRoom={closeMakeRoom}
        openModal={openModal}
      />
      <ChatView />
      <ChatUser />
    </MainWrapper>
  </Container>
);
export default RoomPresenter;
