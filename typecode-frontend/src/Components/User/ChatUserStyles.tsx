import styled from "src/typed-components";

export const Container = styled.div`
  background-color: ${props => props.theme.darkGrayColor};
  width: 320px;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.chatUesrNameColor};

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

//대화찾기

export const FindChatContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #202225;
`;

export const FindChatInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
  border-radius: 4px;
  width: 100%;
  height: 30px;
  background-color: ${props => props.theme.blackColor};
`;

export const FindChatInputText = styled.span`
  font-size: 14px;
`;

//선택 사항

export const LibraryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LibraryWrap = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

export const ImageWrap = styled.div`
  width: 32px;
  height: 32px;
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

export const LibraryTextWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
`;

export const LibraryText = styled.span``;

// 개인 메시지

export const DirectMessageTitle = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  padding: 10px;
`;

//List

export const ListContainer = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ProfileContainer = styled.div`
  align-items: center;
  justify-content: center;
`;

export const ProfileWrap = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 30px;
`;

export const Profile = styled.img`
  width: 32px;
  height: 32px;
  resize-mode: contain;
`;

export const UserNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
`;

export const UserName = styled.span``;
