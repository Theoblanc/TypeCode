import React from "react";
import styled from "src/typed-components";
import { CREATE_MY_ROOM } from "../Room/RoomQueries";
import { useMutation } from "react-apollo";
import useForm from "react-hook-form";

const Container = styled.div`
  display: flex;
  position: absolute;
  width: 40%;
  flex-direction: column;
  z-index: 1;
  left: 30%;
  top: 40%;
  background-color: #14375a;
  border: 1px solid black;
  border-radius: 10px;
  padding: 24px 36px;
`;

const Title = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 40px;
  span {
    color: #ffffff;
    font-size: 24px;
  }
`;

const ModalBody = styled.div`
  flex: 2;
`;

const Input = styled.input`
  padding: 0 12px;
  height: 3rem;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 12px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 5rem;
  height: 3rem;
  font-weight: bold;
  color: #ffffff;
  :hover {
    background-color: #1687ed;
    color: #ffffff;
  }
`;

const RoomModal = ({ closeMakeRoom }) => {
  const [makeRoomData] = useMutation(CREATE_MY_ROOM);
  const { register, handleSubmit } = useForm();

  const onSubmit = async data => {
    console.log("data", data);
    const variables = {
      roomName: data.createroom
    };
    //refethch 해야함
    try {
      await makeRoomData({
        variables,
        refetchQueries: [{ query: CREATE_MY_ROOM }]
      });

      console.log("방생성 확인");
      closeMakeRoom();
      window.location.href = "/";
    } catch (e) {
      console.log("방생성 실패");
    }
  };

  return (
    <Container>
      <Title>
        <span>채팅방 이름</span>
      </Title>
      <ModalBody>
        <Input type="text" name="createroom" ref={register}></Input>
        <ButtonContainer>
          <Button name="makeroom" onClick={handleSubmit(onSubmit)}>
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
