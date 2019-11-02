import React from "react";
import styled from "src/typed-components";

const Container = styled.div`
  background-color: ${props => props.theme.grayColor};
  width: 100%;
`;

const ChatComponet = () => {
  return (
    <Container>
      <div>@ 유저 아이디</div>
      <div>순서대로 출력</div>
      <div>대화창</div>
    </Container>
  );
};

export default ChatComponet;
