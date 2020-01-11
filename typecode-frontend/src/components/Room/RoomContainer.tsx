import React from "react";
import RoomPresenter from "./RoomPresenter";
interface IProps {
  moverRoom?: any;
  fetchRoom?: any;
  openMakeRoom?: VoidFunction;
  closeMakeRoom?: VoidFunction;
  openModal?: Boolean;
}

const RoomContainer: React.FC<IProps> = ({
  moverRoom,
  fetchRoom,
  openMakeRoom,
  closeMakeRoom,
  openModal
}) => {
  return (
    <RoomPresenter
      moverRoom={moverRoom}
      fetchRoom={fetchRoom}
      openMakeRoom={openMakeRoom}
      closeMakeRoom={closeMakeRoom}
      openModal={openModal}
    />
  );
};

export default RoomContainer;
