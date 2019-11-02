import React from "react";
import styled from "src/typed-components";

const Container = styled.div`
  background-color: ${props => props.theme.darkGrayColor};
  width: 320px;
`;

const ChatUser = () => {
  return (
    <Container>
      <div>대화 찾기</div>
      <div>
        <button>활동</button>
      </div>
      <div>
        <button>라이브러리</button>
      </div>
      <div>
        <button>리트로</button>
      </div>
      <div>
        <button>친구</button>
      </div>
      <div>개인 메세지</div>
      <li>히동히</li>
      <li>지히</li>
      <li>온재범</li>
      <li>유수</li>
      <li>노량진롤창</li>
    </Container>
  );
};

export default ChatUser;
