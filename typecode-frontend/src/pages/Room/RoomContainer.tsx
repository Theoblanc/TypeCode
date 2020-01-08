import React, { useState } from "react";
import { useQuery } from "react-apollo";
import Loading from "src/pages/Loading";
import RoomPresenter from "./RoomPresenter";
import { FIND_MY_ROOMS } from "src/components/Room/RoomQueries";
import { ME } from "src/components/User/ChatUserQueries";

interface IProps {}

const RoomContainer: React.FC<IProps> = () => {
  const [openModal, setOpenModal] = useState(false);
  const { data, loading } = useQuery(FIND_MY_ROOMS);
  const { data: Me, loading: meLoading } = useQuery(ME);

  console.log("Me", Me);

  if (loading && meLoading) {
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
      Me={Me}
    />
  );
};

export default RoomContainer;
