import React from "react";
import {
  Container,
  Transparency,
  Header,
  Logo,
  LoginWrap,
  LoginLabel,
  SocialLogin,
  FacebookLogin,
  GoogleLogin,
  NaverLogin,
  EmailLoginWrap,
  EmailLoginLabel,
  UserNameForm,
  PasswordForm,
  LoginBtn,
  ForgotEmailOrPassword
} from "./LoginStyles";

const LoginPresenter: React.FC = () => (
  <Container>
    <Transparency>
      <Header>
        <Logo>TypeCode</Logo>
      </Header>
      <LoginWrap>
        <LoginLabel>Login</LoginLabel>
        <SocialLogin>
          <FacebookLogin>페이스북 로그인</FacebookLogin>
          <GoogleLogin>구글 로그인</GoogleLogin>
          <NaverLogin>네이버 로그인</NaverLogin>
        </SocialLogin>

        <EmailLoginWrap>
          <EmailLoginLabel>e-mail login</EmailLoginLabel>
          <UserNameForm />
          <PasswordForm />
          <LoginBtn>Log in</LoginBtn>
        </EmailLoginWrap>

        <ForgotEmailOrPassword>
          Forgot email <span>[Forgot Password]</span>
        </ForgotEmailOrPassword>
      </LoginWrap>
    </Transparency>
  </Container>
);

export default LoginPresenter;
