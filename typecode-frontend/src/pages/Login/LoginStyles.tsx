import styled from "styled-components";
import img from "../../assets/Image/background/sunrise.jpg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: 100vh;
  min-width: 360dp;
  background-image: url(${img});
  background-size: cover;
`;

export const Transparency = styled.div`
  grid-column: 1 / 13;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20vh;
  padding: 64px;
`;

export const Logo = styled.a`
  color: #ffffff;
  font-size: 32px;
  text-decoration: none;
`;

export const LoginWrap = styled.div``;

export const LoginLabel = styled.div``;

export const SocialLogin = styled.div``;

export const FacebookLogin = styled.div``;

export const GoogleLogin = styled.div``;

export const NaverLogin = styled.div``;

export const EmailLoginWrap = styled.div``;

export const EmailLoginLabel = styled.div``;

export const UserNameForm = styled.input``;

export const PasswordForm = styled.input``;

export const LoginBtn = styled.button``;

export const ForgotEmailOrPassword = styled.div``;
