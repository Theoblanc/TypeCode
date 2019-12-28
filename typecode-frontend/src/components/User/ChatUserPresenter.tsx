import React from "react";
import {
  Container,
  DirectMessageTitle,
  FindChatContainer,
  FindChatInput,
  FindChatInputText,
  LibraryContainer,
  LibraryWrap,
  Icon,
  LibraryText,
  ImageWrap,
  LibraryTextWrap
} from "./ChatUserStyles";
import { ChatUserList } from "./ChatUserList";

interface IProps {
  data: any;
}

const ChatUser: React.FC<IProps> = ({ data }) => {
  return (
    <Container>
      <FindChatContainer>
        <FindChatInput>
          <FindChatInputText>대화 찾기 / 또는 시작하기</FindChatInputText>
        </FindChatInput>
      </FindChatContainer>
      <LibraryContainer>
        <LibraryWrap>
          <ImageWrap>
            <Icon
              source={require("../../assets/Image/icons8-game-controller-64.png")}
            />
          </ImageWrap>
          <LibraryTextWrap>
            <LibraryText>활동</LibraryText>
          </LibraryTextWrap>
        </LibraryWrap>
        <LibraryWrap>
          <ImageWrap>
            <Icon
              source={require("../../assets/Image/icons8-game-controller-64.png")}
            />
          </ImageWrap>
          <LibraryTextWrap>
            <LibraryText>라이브러리</LibraryText>
          </LibraryTextWrap>
        </LibraryWrap>
        <LibraryWrap>
          <ImageWrap>
            <Icon
              source={require("../../assets/Image/icons8-game-controller-64.png")}
            />
          </ImageWrap>
          <LibraryTextWrap>
            <LibraryText>리트로</LibraryText>
          </LibraryTextWrap>
        </LibraryWrap>
        <LibraryWrap>
          <ImageWrap>
            <Icon
              source={require("../../assets/Image/icons8-game-controller-64.png")}
            />
          </ImageWrap>
          <LibraryTextWrap>
            <LibraryText>친구</LibraryText>
          </LibraryTextWrap>
        </LibraryWrap>
      </LibraryContainer>
      <DirectMessageTitle>개인 메세지</DirectMessageTitle>
      {data.me &&
        data.me.friends.map(v => <ChatUserList key={v.id} friends={v} />)}
    </Container>
  );
};

export default ChatUser;
