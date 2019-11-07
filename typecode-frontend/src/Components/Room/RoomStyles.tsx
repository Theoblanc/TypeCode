import styled from "src/typed-components";

export const Container = styled.div`
  background-color: ${props => props.theme.blackColor};
  width: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    width: 0;
  }
`;

export const ListContainer = styled.div`
  flex: 1;
  background-color: black;
  width: 100%;
`;

export const BtnContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
`;
export const CreateRoomBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
