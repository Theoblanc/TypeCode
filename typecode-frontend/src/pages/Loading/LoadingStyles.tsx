import styled from "src/typed-components";

export const Container = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
  background-color: ${props => props.theme.blackColor};
  width: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
