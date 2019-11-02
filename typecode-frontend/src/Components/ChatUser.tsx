import React from "react";
import styled from "src/typed-components";

const Container = styled.div`
  background-color: ${props => props.theme.darkGrayColor};
  width: 320px;
`;

const ChatUser = () => {
  return <Container></Container>;
};

export default ChatUser;
