import React from "react";
import {
  Container,
  ListContainer,
  CreateRoomBtn,
  BtnContainer
} from "./RoomStyles";
import { HomeButton } from "../Button/HomeButton";
import { ListButton } from "../Button/ListButton";
import RoomModal from "../RoomModal/RoomModal";
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
}) => {
  return (
    <Container>
      <HomeButton />
      <ListContainer>
        {data.findMyrooms &&
          data.findMyrooms.map(v => (
            <ListButton
              key={v.id}
              roomName={v.roomName}
              moverRoom={moverRoom}
            />
          ))}
      </ListContainer>

      <BtnContainer>
        <CreateRoomBtn onClick={openMakeRoom}>생성</CreateRoomBtn>
      </BtnContainer>

      {openModal && <RoomModal closeMakeRoom={closeMakeRoom} />}
    </Container>
  );
};

export default RoomPresenter;
