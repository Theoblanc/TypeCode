import React from "react";
import SignupPresenter from "./SignupPresenter";
import useForm from "react-hook-form";
import { async } from "q";

interface IProps {
  isOpen: boolean;
  setIsOpen: any;
  onOpenModal: VoidFunction;
  onCloseModal: VoidFunction;
}

interface IForm {
  email?: string;
  password?: string;
}

const SignupContainer: React.FC<IProps & IForm> = ({
  isOpen,
  setIsOpen,
  onOpenModal,
  onCloseModal
}) => {
  const { register, errors, handleSubmit } = useForm<IForm>();

  const SignupSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <SignupPresenter
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onOpenModal={onOpenModal}
      onCloseModal={onCloseModal}
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      SignupSubmit={SignupSubmit}
    />
  );
};

export default SignupContainer;
