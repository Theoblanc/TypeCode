import React from "react";
import styled from "src/typed-components";

const Container = styled.div`
  position: sticky;
  background-color: ${props => props.theme.blackColor};
  width: 100%;
  min-width: 500px;
  height: 5vh;
  display: flex;
  align-items: center;
  color: #ffffff;
`;

const Footer = () => {
  return <Container>Created By TheoBlanc</Container>;
};

export default Footer;
