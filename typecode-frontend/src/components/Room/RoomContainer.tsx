import React, { useEffect } from "react";
import RoomPresenter from "./RoomPresenter";
interface IProps {
  moverRoom?: any;
  fetchMyRooms?: any;
  openMakeRoom?: VoidFunction;
  closeMakeRoom?: VoidFunction;
  openModal?: Boolean;
}

const RoomContainer: React.FC<IProps> = ({
  moverRoom,
  fetchMyRooms,
  openMakeRoom,
  closeMakeRoom,
  openModal
}) => {
  useEffect(() => {
    console.log("rendering", fetchMyRooms);
  }, [fetchMyRooms]);
  return (
    <RoomPresenter
      moverRoom={moverRoom}
      fetchMyRooms={fetchMyRooms}
      openMakeRoom={openMakeRoom}
      closeMakeRoom={closeMakeRoom}
      openModal={openModal}
    />
  );
};

export default RoomContainer;
