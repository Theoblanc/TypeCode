import React from "react";
import {
  Container,
  DirectMessageTitle,
  FindChatContainer,
  FindChatInput,
  FindChatBtn
} from "./ChatUserStyles";
import { ChatUserList } from "./ChatUserList";
const ChatUser = () => {
  return (
    <Container>
      <FindChatContainer>
        <FindChatInput />
        <FindChatBtn>검색</FindChatBtn>
      </FindChatContainer>
      <div>
        <button>활동</button>
      </div>
      <div>
        <button>라이브러리</button>
      </div>
      <div>
        <button>리트로</button>
      </div>
      <div>
        <button>친구</button>
      </div>
      <DirectMessageTitle>개인 메세지</DirectMessageTitle>
      <ChatUserList>히동히</ChatUserList>
      <ChatUserList>지히</ChatUserList>
      <ChatUserList>온재범</ChatUserList>
      <ChatUserList>유수</ChatUserList>
      <ChatUserList>노량진롤창</ChatUserList>
    </Container>
  );
};

export default ChatUser;
