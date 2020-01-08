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
  Me: any;
}

const RoomPresenter: React.FC<IProps> = ({
  moverRoom,
  data,
  openMakeRoom,
  closeMakeRoom,
  openModal,
  Me
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
      <ChatUser Me={Me} />
    </MainWrapper>
  </Container>
);
export default RoomPresenter;
