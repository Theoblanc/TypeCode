import React from "react";
import styled from "src/typed-components";

const Container = styled.div`
  background-color: ${props => props.theme.grayColor};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ScrollView = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: black;
  width: 100%;
`;

const Chat = styled.div`
  flex: 1;
  background-color: red;
`;

const ChatView = () => {
  return (
    <Container>
      <ScrollView>
        <div>@ 유저 아이디</div>
        <div>순서대로 출력</div>
        <Chat>대화창 입니다</Chat>
      </ScrollView>
      <input></input>
    </Container>
  );
};

export default ChatView;
