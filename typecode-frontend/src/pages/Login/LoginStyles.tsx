import styled from "styled-components";
import img from "../../assets/Image/background/sunrise.jpg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: 100vh;
  min-width: 360px;
  background-image: url(${img});
  background-size: cover;
`;

export const Transparency = styled.div`
  grid-column: 1 / 13;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  padding: 0px 100px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20vh;
`;

export const Logo = styled.a`
  color: #ffffff;
  font-size: 32px;
  text-decoration: none;
  font-weight: bold;
`;

export const LoginWrap = styled.div`
  padding-top: 16px;
`;

export const LoginLabel = styled.div`
  font-size: 24px;
  padding: 24px 0px;
  color: #ffffff;
`;

export const SocialLogin = styled.div``;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin: 8px;
`;

export const FacebookLogin = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  color: black;
  margin-bottom: 16px;
  height: 40px;
  width: 280px;
  border-radius: 8px;
  span {
    margin-left: 12px;
    font-size: 16px;
    padding-bottom: 5px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const GoogleLogin = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  color: black;
  margin-bottom: 16px;
  height: 40px;
  width: 280px;
  border-radius: 8px;

  span {
    margin-left: 12px;
    font-size: 16px;
    padding-bottom: 5px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const NaverLogin = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  color: black;
  margin-bottom: 16px;
  height: 40px;
  width: 280px;
  border-radius: 8px;

  span {
    margin-left: 12px;
    font-size: 16px;
    padding-bottom: 5px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const EmailLoginWrap = styled.div`
  margin-top: 32px;
`;

export const EmailLoginLabel = styled.div`
  font-size: 16px;
  padding: 16px 0px;
  color: #ffffff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  p {
    color: red;
    font-size: 11px;
    height: 16px;
    padding-left: 12px;
    margin-top: 8px;
  }
`;

export const UserNameForm = styled.input`
  height: 40px;
  width: 280px;
  border-radius: 8px;
  border-width: 0px;
  padding: 12px;
  &:focus {
    outline: none;
  }
`;

export const PasswordForm = styled.input`
  height: 40px;
  width: 280px;
  border-radius: 8px;
  border-width: 0px;
  padding: 12px;

  &:focus {
    outline: none;
  }
`;

export const LoginBtn = styled.button`
  height: 40px;
  width: 280px;
  border-radius: 8px;
  margin-bottom: 16px;
  border-width: 0px;

  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Singup = styled.div`
  font-size: 12px;
  margin-bottom: 10px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ForgotEmailOrPassword = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ForgotEmail = styled.div`
  font-size: 12px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ForgotPassword = styled.div`
  font-size: 12px;
  margin-left: 12px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
