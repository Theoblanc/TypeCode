import React from "react";
import styled from "styled-components";

// Style

const Container = styled.div`
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  width: 100%;
  :hover {
    background: #ffffff;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #ffffff;
  :hover {
    color: #1687ed;
  }
`;
interface IProps {
  roomName: string;
  moverRoom: any;
  id: string;
}

export const ListButton: React.FC<IProps> = ({ roomName }) => {
  console.log("roomName", roomName);
  return (
    <Container>
      <Link href={`/room/${roomName}`}>{roomName}</Link>
    </Container>
  );
};
