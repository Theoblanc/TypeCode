import React from "react";
import styled from "src/typed-components";

const Container = styled.div`
  position: sticky;
  background-color: ${props => props.theme.blackColor};
  width: 100%;
  min-width: 500px;
  height: 60px;
  display: flex;
  align-items: center;
`;

const Room = () => {
  return <Container></Container>;
};

export default Room;
