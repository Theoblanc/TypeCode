import React from "react";
import SignupPresenter from "./SignupPresenter";
import useForm from "react-hook-form";
import { useMutation } from "react-apollo";
import { MUTATION_SIGNUP } from "./SingupQueries";
// import { MUTATION_SIGNUP } from "./SingupQueries";
// import { useMutation } from "react-apollo";

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
  const [mutationSignup] = useMutation(MUTATION_SIGNUP);

  const SignupSubmit = async data => {
    const variables = {
      name: data.fullName,
      email: data.email,
      password: data.password
    };

    if (data.password !== data.confirmPassword) {
      return console.log("비밀번호를 확인해주세요");
    }

    try {
      const {
        data: { signup }
      } = await mutationSignup({ variables });

      if (!signup) {
        console.log("회원가입에 실패 했습니다. 이유는 저도 몰라요");
      }
    } catch (e) {
      console.log(e);
    }

    setIsOpen(false);
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
