import React from "react";
import styled from "styled-components";

// Style

const Container = styled.div`
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #1687ed, #14375a);
  color: #ffffff;
  width: 100%;
  font-weight: bold;
  :hover {
    border-bottom: 1px solid #1687ed;
    border-right: 1px solid #1687ed;

    background: #ffffff;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-weight: bold;
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
  return (
    <Container>
      <Link href={`/room/${roomName}`}>{roomName}</Link>
    </Container>
  );
};
