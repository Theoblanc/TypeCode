import React from "react";
import styled from "src/typed-components";
import { MAKE_MY_ROOM } from "../Room/RoomQueries";
import { useMutation } from "react-apollo";

const Container = styled.div`
  display: flex;
  position: absolute;
  width: 40%;
  height: 20%;
  flex-direction: column;
  z-index: 1;
  left: 30%;
  top: 40%;
  background-color: yellowgreen;
  border: 1px solid black;
  border-radius: 10px;
`;

const Title = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  align-items: center;
  padding-left: 12px;
  span {
    font-size: 24px;
  }
`;

const ModalBody = styled.div`
  flex: 2;
  padding-left: 12px;
  padding-right: 12px;
`;

const Input = styled.input`
  height: 3rem;
  width: 100%;
  font-size: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 12px;

  button {
    width: 5rem;
    height: 3rem;
    font-weight: bold;
  }
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
      <Title>
        <span>채팅방 이름</span>
      </Title>
      <ModalBody>
        <Input type="text"></Input>
        <ButtonContainer>
          <button onClick={createRoom}>만들기</button>
          <button onClick={closeMakeRoom}>취소</button>
        </ButtonContainer>
      </ModalBody>
    </Container>
  );
};

export default RoomModal;
