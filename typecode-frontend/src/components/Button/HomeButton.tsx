import React from "react";
import styled from "styled-components";

// Style

const Container = styled.div`
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  width: 100%;
  font-weight: bold;
  :hover {
    border-bottom: 1px solid #14375a;
    border-right: 1px solid #14375a;

    background: #ffffff;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  :hover {
    background: #1687ed;
    color: #ffffff;
  }
`;

export const HomeButton = () => {
  return (
    <Container>
      <Link href="/">홈</Link>
    </Container>
  );
};
