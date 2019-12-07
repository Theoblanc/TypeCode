import React from "react";
import SignupPresenter from "./SignupPresenter";

interface IProps {
  open: boolean;
  setOpen: any;
  onOpenModal: VoidFunction;
  onCloseModal: VoidFunction;
}

const SignupContainer: React.FC<IProps> = () => {
  return <SignupPresenter />;
};

export default SignupContainer;
