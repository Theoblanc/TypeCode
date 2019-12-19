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
  data: any;
}
const RoomPresenter: React.FC<IProps> = ({ moverRoom, data }) => {
  console.log("data", data);
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
        <CreateRoomBtn>생성</CreateRoomBtn>
      </BtnContainer>
    </Container>
  );
};

export default RoomPresenter;
