import React from "react";
import {
  Container,
  ScrollView,
  ChatHeader,
  ChatHeaderWrap
} from "./ChatVIewStyles";

const ChatView = () => {
  return (
    <Container>
      <ScrollView>
        <ChatHeader>
          <ChatHeaderWrap>라이브러리</ChatHeaderWrap>
        </ChatHeader>
      </ScrollView>
    </Container>
  );
};

export default ChatView;
