import styled from "src/typed-components";

export const Container = styled.div`
  background-color: ${props => props.theme.grayColor};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ScrollView = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  overflow-y: auto;
`;

export const ChatHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #202225;
`;

export const ChatHeaderWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
  font-weight: bold;
  height: 30px;
`;

export const ChatFristWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-bottom: 24px;
`;

export const ProfileWrap = styled.div`
  margin-top: 70px;
`;

export const Profile = styled.img`
  width: 150px;
  height: 150px;
  resize-mode: contain;
`;

export const UserName = styled.div`
  font-size: 36px;
  padding-bottom: 24px;
`;

export const GreedMent = styled.div``;
