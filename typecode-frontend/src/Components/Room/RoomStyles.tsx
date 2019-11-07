import styled from "src/typed-components";

export const Container = styled.div`
  background-color: ${props => props.theme.blackColor};
  width: 100px;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 0;
  }
`;
