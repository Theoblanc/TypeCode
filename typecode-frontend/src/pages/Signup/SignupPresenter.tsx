import React from "react";
import {
  Modal,
  Container,
  ModalHeader,
  Center,
  Label,
  Input,
  SignupBtn,
  Form
} from "./SignupStyles";

interface IProps {
  isOpen: boolean;
  setIsOpen: any;
  onOpenModal: VoidFunction;
  onCloseModal: VoidFunction;

  register?: any;
  errors?: any;
  handleSubmit?: any;
  SignupSubmit?: any;
}

const SignupPresenter: React.FC<IProps> = ({
  isOpen,
  onCloseModal,
  register,
  errors,
  handleSubmit,
  SignupSubmit
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
      <Form onSubmit={handleSubmit(SignupSubmit)}>
        <ModalHeader>SIGN UP</ModalHeader>
        <Center>
          <Label>Full Name</Label>
          <Input
            placeholder="Full Name"
            type="text"
            name="fullName"
            ref={register({
              required: "이름을 입력해주세요"
            })}
          />
          <p> {errors.fullName && errors.fullName.message}</p>

          <Label>Email</Label>
          <Input
            placeholder="Email"
            type="text"
            name="email"
            ref={register({
              required: "아이디를 입력해주세요",
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "불가능한 이메일 형식입니다."
              }
            })}
          />
          <p> {errors.email && errors.email.message}</p>

          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            ref={register({
              required: "비밀번호를 입력해주세요"
            })}
          />
          <p> {errors.password && errors.password.message}</p>

          <Label>CONFIRM PASSWORD</Label>
          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            ref={register({
              required: "비밀번호를 확인해주세요"
            })}
          />
          <p> {errors.confirmPassword && errors.confirmPassword.message}</p>

          <SignupBtn>확인</SignupBtn>
        </Center>
      </Form>
    </Container>
  </Modal>
);

export default SignupPresenter;
