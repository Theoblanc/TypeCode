import React, { useState } from "react";
import { useQuery } from "react-apollo";
import Loading from "src/pages/Loading";
import RoomPresenter from "./RoomPresenter";
import { FETCH_MY_ROOMS } from "src/components/Room/RoomQueries";
import { ME } from "src/components/User/ChatUserQueries";

interface IProps {}

const RoomContainer: React.FC<IProps> = () => {
  const [openModal, setOpenModal] = useState(false);
  const { data: fetchMyRooms, loading: myRoomLoading } = useQuery(
    FETCH_MY_ROOMS
  );
  const { data: me, loading: meLoading } = useQuery(ME);

  if (myRoomLoading && meLoading) {
    return <Loading />;
  }

  const moverRoom = () => {
    console.log("The link was clicked.");
  };

  const openMakeRoom: VoidFunction = () => {
    setOpenModal(true);
  };

  const closeMakeRoom: VoidFunction = () => {
    setOpenModal(false);
  };

  return (
    <RoomPresenter
      moverRoom={moverRoom}
      fetchMyRooms={fetchMyRooms}
      openMakeRoom={openMakeRoom}
      closeMakeRoom={closeMakeRoom}
      openModal={openModal}
      me={me}
    />
  );
};

export default RoomContainer;
