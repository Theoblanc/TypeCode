import React from "react";
import RoomPresenter from "./RoomPresenter";

const RoomContainer: React.FC = () => {
  const moverRoom = () => {
    console.log("The link was clicked.");
  };
  return <RoomPresenter moverRoom={moverRoom} />;
};

export default RoomContainer;
