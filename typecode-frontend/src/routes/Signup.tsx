import React from "react";
import SignupPage from "../pages/Signup";

interface IProps {
  isOpen: boolean;
  setIsOpen: any;
  onOpenModal: VoidFunction;
  onCloseModal: VoidFunction;
}

const Signup: React.FC<IProps> = ({
  isOpen,
  setIsOpen,
  onOpenModal,
  onCloseModal
}) => (
  <SignupPage
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    onOpenModal={onOpenModal}
    onCloseModal={onCloseModal}
  />
);
export default Signup;
