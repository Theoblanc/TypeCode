import styled from "src/typed-components";

export const Container = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
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
