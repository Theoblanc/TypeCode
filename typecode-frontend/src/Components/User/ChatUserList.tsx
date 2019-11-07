import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ChatUserList: React.FC = () => {
  return (
    <Container>
      <div>사진</div>
      <div>이름</div>
    </Container>
  );
};
