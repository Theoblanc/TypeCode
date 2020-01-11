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
// import useForm from "react-hook-form";

interface IProps {
  fetchRoom?: any;
}

const ChatView: React.FC<IProps> = ({ fetchRoom }) => {
  // const { register, handleSubmit } = useForm();
  console.log(fetchRoom);
  return (
    <Container>
      <ChatHeader>
        <ChatHeaderWrap>라이브러리</ChatHeaderWrap>
      </ChatHeader>
      <ScrollView>
        <ChatFristWrap>
          <UserName></UserName>
          <GreedMent>@방에 참여하신걸 환영합니다.</GreedMent>
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
        <input type="text" name="chat"></input>
        <Button>보내기</Button>
      </ChatInputWrap>
    </Container>
  );
};

export default ChatView;
