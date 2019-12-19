import styled from "src/typed-components";

export const Container = styled.div`
  background-color: ${props => props.theme.grayColor};
  width: 100%;
  min-width: 400px;
  display: flex;
  flex-direction: row;
  padding: 24px;
  border: 1px solid #ffffff;
`;

export const ProfileWrap = styled.div`
  padding-right: 12px;
`;

export const Profile = styled.img`
  width: 50px;
  height: 50px;
`;

export const ContentWrap = styled.div`
  width: 100%;
`;

export const MeInfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 12px;
  min-width: 100px;
`;

export const User = styled.div`
  padding-right: 12px;
  min-width: 50px;
`;

export const SendDate = styled.div``;

export const Chatting = styled.div`
  min-width: 200px;
`;
