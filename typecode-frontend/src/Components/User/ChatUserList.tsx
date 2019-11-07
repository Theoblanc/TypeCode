import React from "react";
import { Profile, ListContainer, UserNameContainer } from "./ChatUserStyles";

export const ChatUserList: React.FC = () => {
  return (
    <ListContainer>
      <Profile>
        <Profile>사진</Profile>
      </Profile>
      <UserNameContainer>이름</UserNameContainer>
    </ListContainer>
  );
};
