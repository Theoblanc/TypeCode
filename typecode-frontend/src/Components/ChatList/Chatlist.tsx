import React from "react";
import {
  Container,
  ProfileWrap,
  Profile,
  ContentWrap,
  MeInfoWrap,
  User,
  SendDate,
  Chatting
} from "./ChatlistStyles";

const ChatList = () => {
  return (
    <Container>
      <ProfileWrap>
        <Profile src="https://img.icons8.com/color/48/000000/discord-logo.png" />
      </ProfileWrap>
      <ContentWrap>
        <MeInfoWrap>
          <User>
            <span>정태</span>
          </User>
          <SendDate>
            <span> 2019.08.07</span>
          </SendDate>
        </MeInfoWrap>
        <Chatting>안녕하세요</Chatting>
      </ContentWrap>
    </Container>
  );
};

export default ChatList;
