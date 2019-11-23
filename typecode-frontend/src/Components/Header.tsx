import React from "react";
import styled from "src/typed-components";

const Container = styled.div`
  position: sticky;
  background-color: ${props => props.theme.blackColor};
  width: 100%;
  min-width: 500px;
  height: 10vh;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding-right: 24px;
  padding-left: 24px;
  justify-content: space-between;
`;

const Logo = styled.a`
  color: #ffffff;
  font-size: 32px;
  text-decoration: none;
`;

const Login = styled.div`
  color: #ffffff;
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo href="/">TYPE CODE</Logo>
        <Login>로그아웃</Login>
      </Wrapper>
    </Container>
  );
};

export default Header;
