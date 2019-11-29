import React from "react";
import {
  Container,
  ListContainer,
  CreateRoomBtn,
  BtnContainer
} from "./RoomStyles";
import { HomeButton } from "../Button/HomeButton";
import { ListButton } from "../Button/ListButton";
interface IProps {
  moverRoom: any;
}
const RoomPresenter: React.FC<IProps> = ({ moverRoom }) => {
  console.log(moverRoom);
  return (
    <Container>
      <HomeButton />
      <ListContainer>
        <ListButton roomName={"방학"} moverRoom={moverRoom} />
        <ListButton roomName={"방학"} moverRoom={moverRoom} />
        <ListButton roomName={"방학"} moverRoom={moverRoom} />
        <ListButton roomName={"방학"} moverRoom={moverRoom} />
        <ListButton roomName={"방학"} moverRoom={moverRoom} />
        <ListButton roomName={"방학"} moverRoom={moverRoom} />
      </ListContainer>

      <BtnContainer>
        <CreateRoomBtn>생성</CreateRoomBtn>
      </BtnContainer>
    </Container>
  );
};

export default RoomPresenter;
