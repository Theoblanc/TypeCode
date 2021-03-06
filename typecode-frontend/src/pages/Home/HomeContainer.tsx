import React, { useState } from "react";
import HomePresenter from "./HomePresenter";
import { useQuery } from "react-apollo";
import { FETCH_MY_ROOMS } from "src/components/Room/RoomQueries";
import Loading from "src/routes/Loading";
import { ME } from "src/components/User/ChatUserQueries";

interface IProps {}

const HomeContainer: React.FC<IProps> = () => {
  const [openModal, setOpenModal] = useState(false);
  const { data: fetchMyRooms, loading: myRoomLoading } = useQuery(
    FETCH_MY_ROOMS
  );
  const { data: me, loading: meLoading } = useQuery(ME);

  console.log("ME", me);

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
    <HomePresenter
      moverRoom={moverRoom}
      fetchMyRooms={fetchMyRooms}
      openMakeRoom={openMakeRoom}
      closeMakeRoom={closeMakeRoom}
      openModal={openModal}
      me={me}
    />
  );
};

export default HomeContainer;
