import React, { useState } from "react";
import LoginPresenter from "./LoginPresenter";

const LoginContainer: React.FC = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <LoginPresenter
        open={open}
        setOpen={setOpen}
        onOpenModal={onOpenModal}
        onCloseModal={onCloseModal}
      />
    </>
  );
};

export default LoginContainer;
