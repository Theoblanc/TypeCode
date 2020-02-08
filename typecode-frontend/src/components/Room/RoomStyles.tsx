import styled from "src/typed-components";

export const Container = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
  background-color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(45deg, #1687ed, #14375a);
`;

export const ListContainer = styled.div`
  flex: 1;
  width: 120px;
`;
/* 생성 */
export const BtnContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  cursor: pointer;
  :hover {
    background: #14375a;
  }
`;
export const CreateRoomBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;
