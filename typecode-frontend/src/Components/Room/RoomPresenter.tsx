import React from "react";
import { Container } from "./RoomStyles";
import { HomeButton } from "../Button/HomeButton";
import { ListButton } from "../Button/ListButton";

const Room = () => {
  return (
    <Container>
      <HomeButton />
      <ListButton roomName={"방학"} />
      <ListButton roomName={"방학"} />
      <ListButton roomName={"방학"} />
      <ListButton roomName={"방학"} />
      <ListButton roomName={"방학"} />
      <button>생성</button>
    </Container>
  );
};

export default Room;
