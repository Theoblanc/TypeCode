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
  Singup
} from "./LoginStyles";
import google from "../../assets/Image/googleIcon.png";
import facebook from "../../assets/Image/facebookIcon.png";
import naver from "../../assets/Image/naverIcon.png";
import SingupModal from "../Signup";

interface IProps {
  open: boolean;
  setOpen: any;
  onOpenModal: VoidFunction;
  onCloseModal: VoidFunction;
}

const LoginPresenter: React.FC<IProps> = ({
  open,
  setOpen,
  onOpenModal,
  onCloseModal
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
            <UserNameForm placeholder="User Id" />
            <PasswordForm placeholder="Password" />
            <LoginBtn>Log in</LoginBtn>
          </Form>
        </EmailLoginWrap>

        <Singup>회원가입</Singup>

        <ForgotEmailOrPassword>
          [Forgot email] <span>[Forgot Password]</span>
        </ForgotEmailOrPassword>
      </LoginWrap>

      <SingupModal
        open={open}
        setOpen={setOpen}
        onOpenModal={onOpenModal}
        onCloseModal={onCloseModal}
      />
    </Transparency>
  </Container>
);

export default LoginPresenter;
