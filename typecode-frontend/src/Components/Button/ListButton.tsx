import React, { useRef } from "react";
import styled from "styled-components";

// Style

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.blackColor};
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
  padding-left: 8px;
  padding-right: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const MoveButton = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${props => props.theme.grayColor};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
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
}

export const ListButton: React.FC<IProps> = ({ roomName }) => {
  const hoverBarRef = useRef<HTMLInputElement>(null);
  const hoverBtnRef = useRef<HTMLInputElement>(null);

  const _onMouseEnter = () => {
    if (
      hoverBtnRef &&
      hoverBtnRef.current &&
      hoverBarRef &&
      hoverBarRef.current
    ) {
      hoverBtnRef.current.style.backgroundColor = "#fddf";
      hoverBtnRef.current.style.color = "black";
      hoverBtnRef.current.style.borderRadius = "15px";
      hoverBarRef.current.style.backgroundColor = "#ffffff";
      hoverBarRef.current.style.height = "20px";
      console.log(hoverBtnRef.current.style);
    }
  };

  const _onMouseLeave = () => {
    if (
      hoverBtnRef &&
      hoverBtnRef.current &&
      hoverBarRef &&
      hoverBarRef.current
    ) {
      hoverBtnRef.current.style.backgroundColor = "#36393f";
      hoverBtnRef.current.style.color = "#ffffff";
      hoverBtnRef.current.style.borderRadius = "30px";
      hoverBarRef.current.style.backgroundColor = "#ffffff";
      hoverBarRef.current.style.height = "0px";
    }
  };

  return (
    <Container>
      <HoverBarContainer>
        <HoverBar ref={hoverBarRef}></HoverBar>
      </HoverBarContainer>
      <MoveButtonContainer>
        <MoveButton
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
