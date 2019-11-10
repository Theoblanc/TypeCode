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

export const Chat = styled.div`
  flex: 1;
`;
