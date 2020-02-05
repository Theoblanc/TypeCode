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
  fetchMyRooms?: any;
  openMakeRoom?: VoidFunction;
  closeMakeRoom?: VoidFunction;
  openModal?: Boolean;
}
const RoomPresenter: React.FC<IProps> = ({
  moverRoom,
  fetchMyRooms,
  openMakeRoom,
  closeMakeRoom,
  openModal
}) => {
  if (fetchMyRooms) {
    console.log("fetchMyRooms", fetchMyRooms.fetchMyRooms);
  }
  return (
    <Container>
      <HomeButton />
      <ListContainer>
        {fetchMyRooms &&
          fetchMyRooms.fetchMyRooms &&
          fetchMyRooms.fetchMyRooms.map(item => {
            console.log("item", item);
            return (
              <ListButton
                key={item.id}
                id={item.id}
                roomName={item.roomName}
                moverRoom={moverRoom}
              />
            );
          })}
      </ListContainer>

      <BtnContainer>
        <CreateRoomBtn onClick={openMakeRoom}>생성</CreateRoomBtn>
      </BtnContainer>

      {openModal && <RoomModal closeMakeRoom={closeMakeRoom} />}
    </Container>
  );
};

export default RoomPresenter;
