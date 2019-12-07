import React from "react";
import SignupPage from "../pages/Signup";

interface IProps {
  open: boolean;
  setOpen: any;
  onOpenModal: VoidFunction;
  onCloseModal: VoidFunction;
}

const Signup: React.FC<IProps> = ({
  open,
  setOpen,
  onOpenModal,
  onCloseModal
}) => (
  <SignupPage
    open={open}
    setOpen={setOpen}
    onOpenModal={onOpenModal}
    onCloseModal={onCloseModal}
  />
);
export default Signup;
