import React from "react";
import SignupPresenter from "./SignupPresenter";

interface IProps {
  isOpen: boolean;
  setIsOpen: any;
  onOpenModal: VoidFunction;
  onCloseModal: VoidFunction;
}

const SignupContainer: React.FC<IProps> = ({
  isOpen,
  setIsOpen,
  onOpenModal,
  onCloseModal
}) => {
  return (
    <SignupPresenter
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onOpenModal={onOpenModal}
      onCloseModal={onCloseModal}
    />
  );
};

export default SignupContainer;
