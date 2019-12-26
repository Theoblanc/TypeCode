import React from "react";
import {
  Profile,
  ListContainer,
  UserNameContainer,
  ProfileWrap,
  UserName
} from "./ChatUserStyles";

interface IProps {
  data: any;
}

export const ChatUserList: React.FC<IProps> = ({ data }) => {
  return (
    <ListContainer>
      <ProfileWrap>
        <Profile
          source={require("../../assets/Image/icons8-game-controller-64.png")}
        ></Profile>
      </ProfileWrap>
      <UserNameContainer>
        <UserName>{data && data.me.name}</UserName>
      </UserNameContainer>
    </ListContainer>
  );
};
