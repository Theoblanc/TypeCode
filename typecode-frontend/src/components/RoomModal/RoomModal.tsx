import React from "react";
import styled from "src/typed-components";
import { MAKE_MY_ROOM } from "../Room/RoomQueries";
import { useMutation } from "react-apollo";

const Container = styled.div`
  display: flex;
  position: absolute;
  width: 100vw;
  height: 10vh;
  flex-direction: column;
  background-color: black;
  z-index: 1;
`;
const RoomModal = ({ closeMakeRoom }) => {
  const [makeRoomData] = useMutation(MAKE_MY_ROOM);

  const createRoom = async data => {
    const variables = {
      roomName: data.roomName
    };

    try {
      const {
        data: { createMyRoom }
      } = await makeRoomData({ variables });

      if (createMyRoom) {
        console.log("방생성 확인");
      }
      closeMakeRoom();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <div>채팅방 이름</div>
      <input></input>
      <button onClick={createRoom}>만들기</button>
      <button onClick={closeMakeRoom}>취소</button>
    </Container>
  );
};

export default RoomModal;
