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
  Button
} from "./ChatListStyles";
import ChatList from "../ChatList";

const ChatView = () => {
  return (
    <Container>
      <ScrollView>
        <ChatHeader>
          <ChatHeaderWrap>라이브러리</ChatHeaderWrap>
        </ChatHeader>
        <ChatFristWrap>
          <UserName>김동희</UserName>
          <GreedMent>@히동희님과 나눈 대화 첫번째 부분이에요</GreedMent>
        </ChatFristWrap>
        <ChatList></ChatList>
        <ChatList></ChatList>
        <ChatList></ChatList>
        <ChatList></ChatList>
        <ChatList></ChatList>
        <ChatList></ChatList>
        <ChatList></ChatList>
        <ChatInputWrap>
          <input type="text"></input>
          <Button>보내기</Button>
        </ChatInputWrap>
      </ScrollView>
    </Container>
  );
};

export default ChatView;
