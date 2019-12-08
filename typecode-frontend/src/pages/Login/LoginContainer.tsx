import React, { useState } from "react";
import LoginPresenter from "./LoginPresenter";

const LoginContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  // const onSubmit = () => {
  //   setIsOpen(false);
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
