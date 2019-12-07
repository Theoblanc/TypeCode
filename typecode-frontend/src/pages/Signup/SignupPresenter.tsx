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
const SignupPresenter: React.FC = () => (
  <Modal>
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

        <SignupBtn>확인</SignupBtn>
      </Center>
    </Container>
  </Modal>
);

export default SignupPresenter;
