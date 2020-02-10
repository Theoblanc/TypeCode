import React from "react";
import { Container, MainWrapper } from "./HomeStyles";
import Header from "src/components/Header";
import Room from "src/components/Room";
import ChatUser from "src/components/User";

interface IProps {
  moverRoom: any;
  fetchMyRooms: any;
  openMakeRoom: VoidFunction;
  closeMakeRoom: VoidFunction;
  openModal: Boolean;
  me: any;
}

const HomePresenter: React.FC<IProps> = ({
  moverRoom,
  fetchMyRooms,
  openMakeRoom,
  closeMakeRoom,
  openModal,
  me
}) => {
  return (
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
        <ChatUser me={me} />
      </MainWrapper>
    </Container>
  );
};

export default HomePresenter;
