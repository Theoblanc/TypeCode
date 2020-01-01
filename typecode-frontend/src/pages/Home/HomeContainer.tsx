import React, { useState } from "react";
import HomePresenter from "./HomePresenter";
import { useQuery } from "react-apollo";
import { FIND_MY_ROOMS } from "src/components/Room/RoomQueries";
import Loading from "src/routes/Loading";

interface IProps {}

const HomeContainer: React.FC<IProps> = () => {
  const [openModal, setOpenModal] = useState(false);
  const { data, loading } = useQuery(FIND_MY_ROOMS);

  if (loading) {
    return <Loading />;
  }

  console.log("5445454", data);

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
    <HomePresenter
      moverRoom={moverRoom}
      data={data}
      openMakeRoom={openMakeRoom}
      closeMakeRoom={closeMakeRoom}
      openModal={openModal}
    />
  );
};

export default HomeContainer;
