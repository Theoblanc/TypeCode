import React from "react";
import styled from "src/typed-components";
import { MAKE_MY_ROOM } from "../Room/RoomQueries";
import { useMutation } from "react-apollo";
import useForm from "react-hook-form";

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

const ModalBody = styled.form`
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
`;

const Button = styled.button`
  width: 5rem;
  height: 3rem;
  font-weight: bold;
`;

const RoomModal = ({ closeMakeRoom }) => {
  const [makeRoomData] = useMutation(MAKE_MY_ROOM);
  const { register, handleSubmit } = useForm();

  const onSubmit = async data => {
    console.log("data", data);
    const variables = {
      roomName: data.createroom
    };
    //refethch 해야함
    try {
      const {
        data: { createMyRoom }
      } = await makeRoomData({
        variables,
        refetchQueries: [{ query: MAKE_MY_ROOM }]
      });

      if (createMyRoom) {
        console.log("방생성 확인");
      }
      closeMakeRoom();
      window.location.href = "/";
    } catch (e) {}
  };

  return (
    <Container>
      <Title>
        <span>채팅방 이름</span>
      </Title>
      <ModalBody onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" name="createroom" ref={register}></Input>
        <ButtonContainer>
          <Button name="makeroom" type="submit">
            만들기
          </Button>
          <Button type="button" onClick={closeMakeRoom}>
            취소
          </Button>
        </ButtonContainer>
      </ModalBody>
    </Container>
  );
};

export default RoomModal;
