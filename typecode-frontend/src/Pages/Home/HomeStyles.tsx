import styled from "styled-components";

export const Container = styled.div`
  display: block;
  background-color: ${props => props.theme.grayColor};
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 80vh;
  height: 80vh;
`;
