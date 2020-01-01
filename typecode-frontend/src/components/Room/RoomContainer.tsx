import React from "react";
import RoomPresenter from "./RoomPresenter";
interface IProps {
  moverRoom?: any;
  data?: any;
  openMakeRoom?: VoidFunction;
  closeMakeRoom?: VoidFunction;
  openModal?: Boolean;
}

const RoomContainer: React.FC<IProps> = ({
  moverRoom,
  data,
  openMakeRoom,
  closeMakeRoom,
  openModal
}) => {
  console.log("123123", data);
  return (
    <RoomPresenter
      moverRoom={moverRoom}
      data={data}
      openMakeRoom={openMakeRoom}
      closeMakeRoom={closeMakeRoom}
      openModal={openModal}
    />
  );
};

export default RoomContainer;
