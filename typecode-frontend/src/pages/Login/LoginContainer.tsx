import React, { useState } from "react";
import LoginPresenter from "./LoginPresenter";
import { useMutation } from "@apollo/react-hooks";
import { MUTATION_LOGIN } from "./LoginQueries";

const LoginContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mutateLogin] = useMutation(MUTATION_LOGIN);

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  // const onSubmit = async () => {
  //   const variables = {
  //     email: values.email,
  //     password: values.password
  //   };

  //   try {
  //     const {
  //       data: {
  //         login: { access_token, refresh_token }
  //       }
  //     } = await mutateLogin({ variables });

  //     await localStorage.setItem("access_token", access_token);
  //     await localStorage.setItem("refresh_token", refresh_token);
  //   } catch (e) {}
  // };

  return (
    <>
      <LoginPresenter
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onOpenModal={onOpenModal}
        onCloseModal={onCloseModal}
      />
    </>
  );
};

export default LoginContainer;
