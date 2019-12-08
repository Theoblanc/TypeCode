import styled from "styled-components";

export const Modal = styled.div`
  display: ${props => (props.isOpen ? "flex" : "none")};
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  background: linear-gradient(
    rgba(246, 247, 249, 0.8),
    rgba(246, 247, 249, 0.8)
  );
  z-index: 2;

  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  padding-top: 60px;
  padding-left: 40px;
  padding-right: 40px;

  padding-bottom: 100px;
  height: 575px;
  width: 430px;
  background: linear-gradient(rgba(35, 43, 85, 0.75), rgba(35, 43, 85, 0.95));
`;

export const ModalHeader = styled.div`
  width: 100%;
  font-size: 24px;
`;

export const Center = styled.div`
  padding-top: 60px;
`;

export const Label = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  text-transform: uppercase;
  padding-bottom: 10px;
`;

export const Input = styled.input`
  color: rgba(35, 43, 85, 0.75);
  width: 100%;
  height: 35px;
  padding-left: 15px;
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.2);
  &:focus {
    background-color: rgba(255, 255, 255, 0.3);
    border: none;
    padding-right: 40px;
    transition: background-color 0.5s ease;
    outline: none;
  }
  ::placeholder {
    color: rgba(35, 43, 85, 0.75);
  }
`;

export const SignupBtn = styled.button`
  margin-top: 12px;
  padding-top: 4px;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: rgba(16, 89, 255, 1);
  color: rgba(255, 255, 255, 1);
  outline: none;
  font-weight: bold;

  :hover {
    cursor: pointer;
    background-color: #0f4fe6;
    transition: background-color 0.5s;
    outline: none;
  }
`;
