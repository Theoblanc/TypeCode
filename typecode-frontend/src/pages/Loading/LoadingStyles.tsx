import styled from "src/typed-components";

export const Container = styled.div`
  background-color: ${props => props.theme.blackColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #ffffff;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
`;
