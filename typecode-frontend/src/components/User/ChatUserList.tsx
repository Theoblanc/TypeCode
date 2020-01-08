import React from "react";
import {
  Profile,
  ListContainer,
  UserNameContainer,
  ProfileWrap,
  UserName,
  Link
} from "./ChatUserStyles";

interface IProps {
  friends: any;
}

export const ChatUserList: React.FC<IProps> = ({ friends }) => {
  console.log("friends", friends);

  return (
    <ListContainer>
      <Link href="/userId/:id">
        <ProfileWrap>
          <Profile
            source={require("../../assets/Image/icons8-game-controller-64.png")}
          ></Profile>
        </ProfileWrap>
        <UserNameContainer>
          <UserName>{friends && friends.name}</UserName>
        </UserNameContainer>
      </Link>
    </ListContainer>
  );
};
