import React from "react";
import { Container } from "./RoomStyles";
import { HomeButton } from "../Button/HomeButton";

const Room = () => {
  return (
    <Container>
      <HomeButton />
      <li>방학</li>
      <li>창동</li>
      <li>방학</li>
      <li>방학</li>
      <li>방학</li>
      <button>생성</button>
    </Container>
  );
};

export default Room;
