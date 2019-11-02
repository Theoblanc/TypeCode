import React, { useState } from "react";
import styled from "styled-components";

// Style

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: black;
`;

const HoverBar = styled.div`
  width: 4px;
  background-color: #ffffff;
  height: 50px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`;

const MoveButton = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${prop => prop.theme.grayColor};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;

const MoveButtonText = styled.span``;

// onMouseEnter={this.onMouseEnterHandler}
// onMouseLeave={this.onMouseLeaveHandler}
// e.preventDefault();

// render

export const HomeButton = () => {
  const [mouseOver, setMouseOver] = useState(false);

  const _onMouseEnter = () => {
    setMouseOver(true);
  };

  const _onMouseLeave = () => {
    setMouseOver(false);
  };

  console.log(mouseOver);

  return (
    <Container onMouseEnter={_onMouseEnter} onMouseLeave={_onMouseLeave}>
      <HoverBar />
      <MoveButton>
        <MoveButtonText>홈</MoveButtonText>
      </MoveButton>
    </Container>
  );
};
