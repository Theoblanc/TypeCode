import React from "react";
import styled from "styled-components";

// Style

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: black;
  :hover {
    .leftIcon {
      background-color: #ffffff;
    }
    .movebutton {
      background-color: #fddf;
      color: black;
      border-radius: 15px;
    }
  }
`;
const HoverBarContainer = styled.div`
  width: 4px;
`;

const HoverBar = styled.div`
  width: 4px;
  height: 50px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`;

const MoveButtonContainer = styled.div`
  padding-left: 8px;
  padding-right: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const MoveButton = styled.a`
  width: 50px;
  height: 50px;
  background-color: ${prop => prop.theme.grayColor};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MoveButtonText = styled.span``;

// onMouseEnter={this.onMouseEnterHandler}
// onMouseLeave={this.onMouseLeaveHandler}

// render

interface IProps {
  roomName: string;
}

export const ListButton: React.FC<IProps> = ({ roomName }) => {
  return (
    <Container>
      <HoverBarContainer>
        <HoverBar className="leftIcon"></HoverBar>
      </HoverBarContainer>
      <MoveButtonContainer>
        <MoveButton className="movebutton">
          <MoveButtonText>{roomName}</MoveButtonText>
        </MoveButton>
      </MoveButtonContainer>
    </Container>
  );
};
