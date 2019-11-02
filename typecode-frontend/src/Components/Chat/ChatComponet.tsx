import React from "react";
import styled from "src/typed-components";

const Container = styled.div`
  background-color: ${props => props.theme.grayColor};
  width: 100%;
`;

const ChatComponet = () => {
  return <Container></Container>;
};

export default ChatComponet;
