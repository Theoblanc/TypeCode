import React from "react";
import {
  Modal,
  Container,
  ModalHeader,
  Center,
  Label,
  Input,
  SignupBtn
} from "./SignupStyles";

interface IProps {
  isOpen: boolean;
  setIsOpen: any;
  onOpenModal: VoidFunction;
  onCloseModal: VoidFunction;
}

const SignupPresenter: React.FC<IProps> = ({
  isOpen,
  setIsOpen,
  onOpenModal,
  onCloseModal
}) => (
  <Modal
    className="modal"
    isOpen={isOpen}
    onClick={event => {
      const name = event.target.className.indexOf("modal");
      if (name !== -1) {
        onCloseModal();
      }
    }}
  >
    <Container>
      <ModalHeader>SIGN UP</ModalHeader>
      <Center>
        <Label>Full Name</Label>
        <Input />
        <Label>Email</Label>
        <Input />
        <Label>Password</Label>
        <Input />
        <Label>CONFIRM PASSWORD</Label>
        <Input />

        <SignupBtn onClick={() => onCloseModal()}>확인</SignupBtn>
      </Center>
    </Container>
  </Modal>
);

export default SignupPresenter;
