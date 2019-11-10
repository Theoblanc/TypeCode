import React from "react";
import {
  Profile,
  ListContainer,
  UserNameContainer,
  ProfileWrap,
  UserName
} from "./ChatUserStyles";

export const ChatUserList: React.FC = () => {
  return (
    <ListContainer>
      <ProfileWrap>
        <Profile
          source={require("../../assets/Image/icons8-game-controller-64.png")}
        ></Profile>
      </ProfileWrap>
      <UserNameContainer>
        <UserName>이름</UserName>
      </UserNameContainer>
    </ListContainer>
  );
};
