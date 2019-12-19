import React from "react";
import RoomPresenter from "./RoomPresenter";
import { FIND_MY_ROOMS } from "./RoomQueries";
import { useQuery } from "react-apollo";
import Loading from "src/pages/Loading";

const RoomContainer: React.FC = () => {
  const { data, loading } = useQuery(FIND_MY_ROOMS);

  if (loading) {
    return <Loading />;
  }

  const moverRoom = () => {
    console.log("The link was clicked.");
  };

  return <RoomPresenter moverRoom={moverRoom} data={data} />;
};

export default RoomContainer;
