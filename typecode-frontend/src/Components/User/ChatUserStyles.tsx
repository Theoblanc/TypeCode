import styled from "src/typed-components";

export const Container = styled.div`
  background-color: ${props => props.theme.blackColor};
  width: 320px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

//대화찾기

export const FindChatContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const FindChatInput = styled.input`
  height: 28px;
`;

export const FindChatBtn = styled.image`
  height: 28px;
  display: flex;
  align-items: center;
  width: 40px;
  resize-mode: contain;
`;

// 개인 메시지

export const DirectMessageTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 18px;
`;
