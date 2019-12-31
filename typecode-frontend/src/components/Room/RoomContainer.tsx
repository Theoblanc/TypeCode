import React, { useState } from "react";
import RoomPresenter from "./RoomPresenter";
import { FIND_MY_ROOMS } from "./RoomQueries";
import { useQuery } from "react-apollo";
import Loading from "src/pages/Loading";

const RoomContainer: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const { data, loading } = useQuery(FIND_MY_ROOMS);

  console.log(data);

  if (loading) {
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
      data={data}
      openMakeRoom={openMakeRoom}
      closeMakeRoom={closeMakeRoom}
      openModal={openModal}
    />
  );
};

export default RoomContainer;
