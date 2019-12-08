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
        <Input placeholder="Full Name" />
        <Label>Email</Label>
        <Input placeholder="Email" />
        <Label>Password</Label>
        <Input placeholder="Password" type="password" />
        <Label>CONFIRM PASSWORD</Label>
        <Input placeholder="Confirm Password" type="password" />

        <SignupBtn onClick={() => onCloseModal()}>확인</SignupBtn>
      </Center>
    </Container>
  </Modal>
);

export default SignupPresenter;
