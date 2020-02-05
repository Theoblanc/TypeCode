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
import useForm from "react-hook-form";
// import useForm from "react-hook-form";

interface IProps {
  fetchMyRooms?: any;
}

const ChatView: React.FC<IProps> = ({ fetchMyRooms }) => {
  const { register, handleSubmit } = useForm();

  const _onSubmit = (data: any) => {
    console.log(data);
  };
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
        <input type="text" name="chat" ref={register}></input>
        <Button onClick={handleSubmit(_onSubmit)}>보내기</Button>
      </ChatInputWrap>
    </Container>
  );
};

export default ChatView;
