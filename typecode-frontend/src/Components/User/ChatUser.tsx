import React from "react";
import {
  Container,
  DirectMessageTitle,
  FindChatContainer,
  FindChatInput,
  FindChatBtn
} from "./ChatUserStyles";
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
      <li>히동히</li>
      <li>지히</li>
      <li>온재범</li>
      <li>유수</li>
      <li>노량진롤창</li>
    </Container>
  );
};

export default ChatUser;
