import React from "react";
import styled from "src/typed-components";

const Container = styled.div`
  display: block;
  background-color: ${props => props.theme.gray};
`;
const Header = () => {
  return <Container></Container>;
};

export default Header;
