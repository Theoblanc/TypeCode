import React from "react";
import styled from "styled-components";

// Style

const Container = styled.div`
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #ee7752, #e73c7e);
  color: #ffffff;
  width: 100%;
  font-weight: bold;
  :hover {
    border-bottom: 2px solid #ee7752;
    border-right: 2px solid #ee7753;

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
    color: #ee7752;
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
      <Link href={`http://localhost:3000/room/${roomName}`}>{roomName}</Link>
    </Container>
  );
};
