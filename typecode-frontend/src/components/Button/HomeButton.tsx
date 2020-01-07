import React from "react";
import styled from "styled-components";

// Style

const Container = styled.div`
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ee7752;
  width: 100%;
  color: #ee7752;
  font-weight: bold;
  :hover {
    background: linear-gradient(90deg, #ee7752, #e73c7e);
    color: #ffffff;
  }
`;

export const HomeButton = () => {
  return <Container>홈</Container>;
};
