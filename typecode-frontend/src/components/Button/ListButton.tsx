import React, { useRef } from "react";
import styled from "styled-components";

// Style

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
`;
const HoverBarContainer = styled.div`
  width: 4px;
`;

const HoverBar = styled.div`
  width: 4px;
  height: 0px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`;

const MoveButtonContainer = styled.div`
  padding-left: 16px;
  padding-right: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const MoveButton = styled.a`
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #ee7752, #e73c7e);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: #ffffff;
  a:visited {
    color: black;
  }
`;

const MoveButtonText = styled.span``;

// const OverMoiveButton = styled.div`
//   background-color: #fddf;
//   color: black;
//   border-radius: 15px;
//   width: 50px;
//   height: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// color: black;
// border-radius: 15px;
// render

interface IProps {
  roomName: string;
  moverRoom: any;
}

export const ListButton: React.FC<IProps> = ({ roomName, moverRoom }) => {
  const hoverBarRef = useRef<HTMLInputElement>(null);
  const hoverBtnRef = useRef<HTMLInputElement>(null);

  const _onMouseEnter = () => {
    if (
      hoverBtnRef &&
      hoverBtnRef.current &&
      hoverBarRef &&
      hoverBarRef.current
    ) {
      hoverBtnRef.current.style.background =
        "linear-gradient(45deg, #ee7752, #e73c7e)";
      hoverBtnRef.current.style.color = "black";
      hoverBtnRef.current.style.borderRadius = "15px";
      hoverBarRef.current.style.background =
        "linear-gradient(45deg, #ee7752, #e73c7e)";
      hoverBarRef.current.style.height = "20px";
    }
  };

  const _onMouseLeave = () => {
    if (
      hoverBtnRef &&
      hoverBtnRef.current &&
      hoverBarRef &&
      hoverBarRef.current
    ) {
      hoverBtnRef.current.style.backgroundColor =
        "linear-gradient(45deg, #ee7752, #e73c7e)";
      hoverBtnRef.current.style.color = "#ffffff";
      hoverBtnRef.current.style.borderRadius = "30px";
      hoverBarRef.current.style.backgroundColor =
        "linear-gradient(45deg, #ee7752, #e73c7e)";
      hoverBarRef.current.style.height = "0px";
    }
  };

  return (
    <Container>
      <HoverBarContainer>
        <HoverBar ref={hoverBarRef}></HoverBar>
      </HoverBarContainer>
      <MoveButtonContainer onClick={moverRoom}>
        <MoveButton
          href="/room"
          ref={hoverBtnRef}
          onMouseLeave={_onMouseLeave}
          onMouseEnter={_onMouseEnter}
        >
          <MoveButtonText>{roomName}</MoveButtonText>
        </MoveButton>
      </MoveButtonContainer>
    </Container>
  );
};
