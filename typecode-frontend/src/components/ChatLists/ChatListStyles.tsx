import styled from "src/typed-components";

export const Container = styled.div`
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
  ::-webkit-scrollbar {
    width: 10px; /* 세로축 스크롤바 길이 */
    height: 20px; /* 가로축 스크롤바 길이 */
  }
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
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-bottom: 24px;
`;

export const UserName = styled.div`
  font-size: 36px;
  padding-bottom: 24px;
  min-width: 400px;
`;

export const GreedMent = styled.div`
  min-width: 400px;
`;

export const ChatListWrap = styled.div`
  flex: 1;
`;
export const ChatInputWrap = styled.div`
  padding-left: 24px;
  display: flex;
  height: 80px;
  align-items: center;
  width: 100%;
  justify-self: flex-end;
  input {
    width: 100%;
    height: 3rem;
  }
`;

export const Button = styled.button`
  width: 5rem;
  height: 3rem;
`;
