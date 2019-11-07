import React from "react";
import {
  Container,
  ListContainer,
  CreateRoomBtn,
  BtnContainer
} from "./RoomStyles";
import { HomeButton } from "../Button/HomeButton";
import { ListButton } from "../Button/ListButton";

const Room = () => {
  return (
    <Container>
      <HomeButton />
      <ListContainer>
        <ListButton roomName={"방학"} />
        <ListButton roomName={"방학"} />
        <ListButton roomName={"방학"} />
        <ListButton roomName={"방학"} />
        <ListButton roomName={"방학"} />
        <ListButton roomName={"방학"} />
        <ListButton roomName={"방학"} />
        <ListButton roomName={"방학"} />
        <ListButton roomName={"방학"} />
      </ListContainer>

      <BtnContainer>
        <CreateRoomBtn>생성</CreateRoomBtn>
      </BtnContainer>
    </Container>
  );
};

export default Room;
