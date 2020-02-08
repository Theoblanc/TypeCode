import React from "react";
import {
  Container,
  Transparency,
  Header,
  Logo,
  LoginWrap,
  LoginLabel,
  SocialLogin,
  EmailLoginWrap,
  EmailLoginLabel,
  UserNameForm,
  PasswordForm,
  LoginBtn,
  ForgotEmailOrPassword,
  NaverLogin,
  GoogleLogin,
  FacebookLogin,
  Icon,
  Form,
  Singup,
  ForgotEmail,
  ForgotPassword
} from "./LoginStyles";
import google from "../../assets/Image/googleIcon.png";
import facebook from "../../assets/Image/facebookIcon.png";
import naver from "../../assets/Image/naverIcon.png";
import SingupModal from "../Signup";

interface IProps {
  isOpen: boolean;
  setIsOpen: any;
  onOpenModal: VoidFunction;
  onCloseModal: VoidFunction;
  register?: any;
  errors?: any;
  handleSubmit?: any;
  onSubmit: any;
}

const LoginPresenter: React.FC<IProps> = ({
  isOpen,
  setIsOpen,
  onOpenModal,
  onCloseModal,
  register,
  errors,
  handleSubmit,
  onSubmit
}) => (
  <Container>
    <Transparency>
      <Header>
        <Logo>TypeCode</Logo>
      </Header>
      <LoginWrap>
        <LoginLabel>Log in</LoginLabel>
        <SocialLogin>
          <FacebookLogin>
            <Icon src={facebook} />
            <span>Facebook login</span>
          </FacebookLogin>
          <GoogleLogin>
            <Icon src={google} />
            <span>Google login</span>
          </GoogleLogin>
          <NaverLogin>
            <Icon src={naver} />
            <span>Naver login</span>
          </NaverLogin>
        </SocialLogin>

        <EmailLoginWrap>
          <EmailLoginLabel>e-mail login</EmailLoginLabel>
          <Form>
            <UserNameForm
              placeholder="Email"
              name="email"
              type="text"
              ref={register({
                required: "아이디를 입력해주세요",
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "불가능한 이메일 형식입니다."
                }
              })}
            />
            <p> {errors.email && errors.email.message}</p>
            <PasswordForm
              type="password"
              placeholder="Password"
              name="password"
              ref={register({
                required: "비밀번호를 입력해주세요"
              })}
            />
            <p> {errors.password && errors.password.message}</p>
            <LoginBtn onClick={handleSubmit(onSubmit)}>Log in</LoginBtn>
          </Form>
        </EmailLoginWrap>

        <Singup onClick={() => setIsOpen(true)}>회원가입</Singup>
        <ForgotEmailOrPassword>
          <ForgotEmail>[Forgot email]</ForgotEmail>
          <ForgotPassword>[Forgot Password]</ForgotPassword>
        </ForgotEmailOrPassword>
      </LoginWrap>

      <SingupModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onOpenModal={onOpenModal}
        onCloseModal={onCloseModal}
      />
    </Transparency>
  </Container>
);

export default LoginPresenter;
