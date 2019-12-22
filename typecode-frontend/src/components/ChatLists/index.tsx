import React from "react";
import {
  Container,
  ScrollView,
  ChatHeader,
  ChatHeaderWrap,
  ChatFristWrap,
  UserName,
  GreedMent,
  ChatInputWrap,
  Button,
  ChatListWrap
} from "./ChatListStyles";
import ChatList from "../ChatList";

const ChatView = () => {
  return (
    <Container>
      <ChatHeader>
        <ChatHeaderWrap>라이브러리</ChatHeaderWrap>
      </ChatHeader>
      <ScrollView>
        <ChatFristWrap>
          <UserName>김동희</UserName>
          <GreedMent>@히동희님과 나눈 대화 첫번째 부분이에요</GreedMent>
        </ChatFristWrap>
        <ChatListWrap>
          <ChatList></ChatList>
          <ChatList></ChatList>
          <ChatList></ChatList>
          <ChatList></ChatList>
          <ChatList></ChatList>

          <ChatList></ChatList>
        </ChatListWrap>
      </ScrollView>
      <ChatInputWrap>
        <input type="text"></input>
        <Button>보내기</Button>
      </ChatInputWrap>
    </Container>
  );
};

export default ChatView;
