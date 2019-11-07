import React from "react";
import styled from "src/typed-components";

const Container = styled.div`
  background-color: ${props => props.theme.grayColor};
  width: 100%;
`;

const ScrollView = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ChatView = () => {
  return (
    <Container>
      <ScrollView>
        <div>@ 유저 아이디</div>
        <div>순서대로 출력</div>
        <div>대화창</div>
      </ScrollView>
      <input></input>
    </Container>
  );
};

export default ChatView;
