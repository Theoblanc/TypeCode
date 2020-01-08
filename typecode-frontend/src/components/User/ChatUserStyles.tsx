import styled from "src/typed-components";

export const Container = styled.div`
  background-color: #ffffff;
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
  height: 54px;
`;

export const FindChatInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
  border-radius: 4px;
  width: 100%;
  height: 30px;
  background: linear-gradient(90deg, #ee7752, #e73c7e);
`;

export const FindChatInputText = styled.span`
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
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
  border-bottom: 2px solid #ee7752;
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
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
`;

export const LibraryText = styled.span``;

// 개인 메시지

export const DirectMessageTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 10px;
  height: 54px;
  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 12px;
    border-radius: 4px;
    width: 100%;
    height: 30px;
    background: linear-gradient(90deg, #ee7752, #e73c7e);
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
  }
`;

//List

export const ListContainer = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: gray;
  :hover {
    background: linear-gradient(90deg, #ee7752, #e73c7e);
    color: #ffffff;
  }
`;

export const ProfileContainer = styled.div``;

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

export const Link = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  color: gray;
  padding: 10px;
  text-decoration: none;
  :hover {
    color: #ffffff;
  }
`;
