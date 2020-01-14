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
  moverRoom?: any;
  fetchRoom?: any;
  openMakeRoom?: VoidFunction;
  closeMakeRoom?: VoidFunction;
  openModal?: Boolean;
}
const RoomPresenter: React.FC<IProps> = ({
  moverRoom,
  fetchRoom,
  openMakeRoom,
  closeMakeRoom,
  openModal
}) => {
  return (
    <Container>
      <HomeButton />
      <ListContainer>
        {fetchRoom &&
          fetchRoom.findMyrooms &&
          fetchRoom.findMyrooms.map(v => (
            <ListButton
              key={v.id}
              id={v.id}
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
