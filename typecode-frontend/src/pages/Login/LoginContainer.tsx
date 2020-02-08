import React, { useState } from "react";
import LoginPresenter from "./LoginPresenter";
import { useMutation } from "@apollo/react-hooks";
import { MUTATION_LOGIN } from "./LoginQueries";
import useForm from "react-hook-form";

interface IForm {
  email: string;
  password: string;
}

const LoginContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mutateLogin] = useMutation(MUTATION_LOGIN);
  const { register, errors, handleSubmit } = useForm<IForm>();

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  const onSubmit = async data => {
    console.log(data);
    const variables = {
      email: data.email,
      password: data.password
    };

    try {
      const {
        data: {
          login: { access_token, refresh_token }
        }
      } = await mutateLogin({ variables });

      console.log("login success");

      await localStorage.setItem("access_token", access_token);
      await localStorage.setItem("refresh_token", refresh_token);
      window.location.href = "/";
    } catch (e) {
      console.log("login fail");
    }

    console.log("로그인 완료");
  };

  return (
    <>
      <LoginPresenter
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onOpenModal={onOpenModal}
        onCloseModal={onCloseModal}
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default LoginContainer;
