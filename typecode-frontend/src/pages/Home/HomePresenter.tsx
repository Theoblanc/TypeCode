import React from "react";
import { Container, MainWrapper } from "./HomeStyles";
import Header from "src/components/Header";
import Room from "src/components/Room";
import ChatUser from "src/components/User";

interface IProps {
  moverRoom: any;
  data: any;
  openMakeRoom: VoidFunction;
  closeMakeRoom: VoidFunction;
  openModal: Boolean;
}

const HomePresenter: React.FC<IProps> = ({
  moverRoom,
  data,
  openMakeRoom,
  closeMakeRoom,
  openModal
}) => {
  return (
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
        <ChatUser />
      </MainWrapper>
    </Container>
  );
};

export default HomePresenter;
